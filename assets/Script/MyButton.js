cc.Class({
    extends: cc.Component,

    properties: {
        MyButton: {
            default: null,
            type: cc.Button,
        }
    },

    // use this for initialization
    onLoad: function () {
        const clickEventHandler = new cc.Component.EventHandler();
        console.log(this.node)
        clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "MyButton";//这个是代码文件名
        clickEventHandler.handler = "callback";
        clickEventHandler.customEventData = "foobar";

        const button = this.node.getComponent(cc.Button)
        console.log(button)
        // button.clickEvents.push(clickEventHandler)
    },
    
    callback: function (event, customEventData) {
        //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        var node = event.target;
        var button = node.getComponent(cc.Button);
        //这里的 customEventData 参数就等于你之前设置的 "foobar"
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
