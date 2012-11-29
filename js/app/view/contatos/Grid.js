Ext.define('extjs4-mvc-tutorial.view.contatos.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contatosGrid',
 
    plugins: Ext.create('Ext.grid.plugin.CellEditing'),
 
    columns: [{
        xtype: 'rownumberer',
        width: 30,
    }, {
        text: 'Nome',
        sortable: true,
        dataIndex: 'nome',
        field: {
            xtype: 'textfield'
        }
    }, {
        text: 'E-mail',
        flex: 0,
        sortable: false,
        dataIndex: 'email',
        width: 120,
        field: {
            xtype: 'textfield'
        }
    }],
 
    initComponent: function() {
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                text: 'Adicionar',
                action: 'adicionar'
            }, {
                text: 'Deletar',
                action: 'deletar'
            }]
        }, {
            store: this.getStore(),
            displayInfo: true,
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            beforePageText : 'Pagina ',
            displayMsg: '{0} - {1} de {2}',
            emptyMsg: 'Nada para ser exibido',
        }];
        return this.callParent(arguments);
    },
});
