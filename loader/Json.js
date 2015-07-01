Ext.define('Mba.ux.BuilderConfig.loader.Json', {
    extend: 'Mba.ux.BuilderConfig.loader.LoaderAbstract',
    requires: [ 'Ext.Ajax' ],

    config: {
        files: {
            "sql":       'resources/globals/sql.js',
            "sqlnative": 'resources/globals/sql.js',
            "pushwoosh": 'resources/globals/pushwoosh.js'
        }
    },

    mergeFiles: function(files)
    {
        Ext.Object.merge(this.files, files);
    },

    loadData: function()
    {
        var result = {}, files = this.getFiles(), index;
        for (index in files) {
            Ext.Ajax.request({
                method: 'GET',
                url: files[index],
                async: false,
                success: function(response) {
                    result[index] = Ext.decode(response.responseText);
                }
            });
        }
        return result;
    }
});
