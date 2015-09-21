Ext.define('Mba.ux.Initialize', {
    singleton: true,
    initialized: false,

    init: function()
    {
        try {
            this._init();
            this.initialized = true;
        } catch (err) {
            this.initialized = false;
        }

    },

    _init: function()
    {
     // override in application
    },

    isInit: function()
    {
        return this.initialized;
    }
});
