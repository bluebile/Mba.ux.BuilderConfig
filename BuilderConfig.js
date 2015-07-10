Ext.define('Mba.ux.BuilderConfig', {
    singleton: true,
    requires: [ 'Mba.ux.BuilderConfig.loader.Json' ],
    alternateClassName: 'Config',
    data: {},

    _validateData: function(data)
    {
        var resultData;
        if (!Ext.isObject(data)) {
            throw 'Erro';
        }

        resultData = data;

        if (data.superclass &&  data.superclass.$className === 'Mba.ux.BuilderConfig.loader.LoaderAbstract') {
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
        this.data   = data;
    },

    mergeData: function(data)
    {
        var resultData = this._validateData(data);
        this._mergeData(data);
    },

    _mergeData: function(data)
    {
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
