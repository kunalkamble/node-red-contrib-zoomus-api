module.exports = function (RED) {
    function MyConfigNode(n) {
        RED.nodes.createNode(this, n);

        //config
        this.name = n.name;
        this.apiKey = n.apiKey;
        this.secretKey = n.secretKey;
    }
    RED.nodes.registerType("zoomus-config", MyConfigNode);
}