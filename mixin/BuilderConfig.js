Ext.define('Mba.ux.BuilderConfig.mixin.BuilderConfig', {
    extend: 'Ext.mixin.Mixin',
    requires: [ 'Mba.ux.BuilderConfig' ],

    onClassMixedIn: function(object)
    {
        var cloneObject = Ext.clone(object);

        while (!('initConfig' in cloneObject)) {
            cloneObject = object.superclass;
        }

        Ext.Function.interceptBefore(cloneObject, 'initConfig', function() {
            var baseName = object.$className.substr(object.$className.lastIndexOf('.') + 1),
                config, initialConfig;

            config = Mba.ux.BuilderConfig.get(baseName.toLowerCase());
            if (Ext.isObject(config)) {
                initialConfig = object.prototype.config;
                if (object.prototype.initialConfig) {
                    initialConfig = object.prototype.initialConfig;
                }
                Ext.Object.merge(initialConfig, config);
            }
        });
    }
});
