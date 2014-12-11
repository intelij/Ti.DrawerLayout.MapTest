var menu = Alloy.createController('menu');
var main = Alloy.createController('main');

$.drawer.setLeftView( menu.getView() );
$.drawer.setCenterView( main.getView() );

$.index.open();
