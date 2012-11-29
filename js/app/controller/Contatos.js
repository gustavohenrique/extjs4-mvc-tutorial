Ext.define('extjs4-mvc-tutorial.controller.Contatos', {
    extend: 'Ext.app.Controller',
 
    models: ['Pessoa'],
    stores: ['Contatos'],
    views : ['contatos.Grid',],
 
    init: function() {
        this.control({
            'contatosGrid button[action=adicionar]': {click: this.adicionar},
            'contatosGrid button[action=deletar]': {click: this.deletar},
        });
    },
 
    adicionar: function(button) {
        button.up('grid').getStore().insert(0, this.getModel('Pessoa').create());
    },
 
    deletar: function(button) {
        var grid = button.up('grid'),
            store = grid.getStore(),
            record = grid.getSelectionModel().getSelection()[0];
 
        if (record) {
            if (confirm('Tem certeza?')) {
                store.remove(record);
            }
        }
    }
});
