Ext.define('extjs4-mvc-tutorial.store.Contatos', {
    extend: 'Ext.data.Store',
 
    model: 'extjs4-mvc-tutorial.model.Pessoa',
    autoLoad: true,
    autoSync: true,
    pageSize: 30,
 
    proxy: {
        type: 'rest',
 
        api: {
            read: '/extjs4-mvc-tutorial/contatos/read',
            create: '/extjs4-mvc-tutorial/contatos/create',
            update: '/extjs4-mvc-tutorial/contatos/update',
            destroy: '/extjs4-mvc-tutorial/contatos/delete'
        },
 
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
            totalProperty: 'total'
        },
 
        writer: {
            type: 'json',
            root: 'data',
        },
 
        listeners: {
            exception: function(proxy, response, operation) {
                var message = Ext.JSON.decode(response.responseText).message;
                Ext.Msg.alert('Ocorreu um erro', message);
            }
        }
    },
});
