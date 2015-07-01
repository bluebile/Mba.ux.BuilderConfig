Ext.define('Mba.ux.BuilderConfig', {
    extend: 'Ext.Evented',
    alternateClassName: 'Config',
    singleton: true,
    data: {},

    constructor: function()
    {
        this.setData(Ext.create('Mba.ux.BuilderConfig.loader.Json'));
    },

    _validateData: function(data)
    {
        var resultData;
        if (!Ext.isObject(data)) {
            throw 'Erro';
        }

        resultData = data;

        if (data instanceof Mba.ux.BuilderConfig.loader.LoaderAbstract) {
            resultData = data.loadData();
        }

        return resultData;
    },

    setData: function(data)
    {
        var resultData = this._validateData(data);

        this.config = resultData;
        this.data   = resultData;
    },

    mergeData: function(data)
    {
        var resultData = this._validateData(data);

        Ext.Object.merge(this.config, resultData);
        Ext.Object.merge(this.data, resultData);
    },

    set: function(id, value)
    {
        this.data[id] = value;
    },

    get: function(id)
    {
        return this.data[id];
    }
});
