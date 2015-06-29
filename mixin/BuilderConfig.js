Ext.define('Mba.ux.BuilderConfig.mixin.BuilderConfig', {
    extend: 'Ext.mixin.Mixin',
    requires: [ 'Mba.ux.BuilderConfig' ],

    onClassMixedIn: function(object)
    {
        var object;

        while (!('initConfig' in object)) {
            object = object.superclass;
        }

        Ext.Function.interceptBefore(object, 'initConfig', function() {
            var baseName = object.$className.substr(object.$className.lastIndexOf('.') + 1),
                config;

            config = Mba.ux.BuilderConfig.get(baseName.toLowerCase());

            if (Ext.isObject(config)) {
                object.initialConfig = Ext.Object.merge(config, object.initialConfig);
            }
        });
    }
});