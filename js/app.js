Ext.Loader.setConfig({enabled:true});
Ext.application({
    name: 'extjs4-mvc-tutorial',
    appFolder: '/extjs4-mvc-tutorial/js/app',
    autoCreateViewport: false,
 
    controllers: ['Contatos',],
 
    launch: function() {
        viewport = Ext.create('Ext.container.Viewport', {
            id: 'viewport',
            layout: 'border',
            items: [{
                region: 'center',
                border: false,
                autoScroll: true,
                items: [{
                    xtype: 'contatosGrid',
                    store: 'Contatos',
                }]
            }]
        });
    }
});
