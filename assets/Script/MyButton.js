cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        const clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node
        clickEventHandler.component = "MyButton"
        clickEventHandler.handler = "callback";
        clickEventHandler.customEventData = "Clicked"

        const button = cc.find('/Canvas/MyButton').getComponent(cc.Button)
        button.clickEvents.push(clickEventHandler)
    },
    
    callback: function (event, customEventData) {
        const node = event.target;
        const button = node.getComponent(cc.Button);
        console.log(customEventData, node._name)
        
        const webview = cc.find('/Canvas/WebView').getComponent(cc.WebView)
        webview.url = 'http://www.moye.me/'
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
