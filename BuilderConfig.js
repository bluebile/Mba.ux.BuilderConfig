Ext.define('Mba.ux.BuilderConfig', {
    extend: 'Ext.Evented',
    requires: [ 'Mba.ux.BuilderConfig.loader.Json' ],
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
        this._setData(resultData);
    },

    _setData: function(data)
    {
        this.config = data;
        this.data   = data;
    },

    mergeData: function(data)
    {
        var resultData = this._validateData(data);
        this._mergeData(data);
    },

    _mergeData: function(data)
    {
        Ext.Object.merge(this.config, data);
        Ext.Object.merge(this.data, data);
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
