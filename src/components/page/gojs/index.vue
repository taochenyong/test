<template>
    <div class="go-js" style="width: 800px; height: 500px; border: 1px solid #333;">
        <div id="chart-wrap" style="height: 100%">
            <div id="chart-diagram" style="height: 100%"></div>
        </div>
    </div>
</template>
<script>
import * as go from "gojs"
import cat1 from './assets/cat1.png'
import cat2 from './assets/cat2.png'
import cat3 from './assets/cat3.png'
import cat4 from './assets/cat4.png'
export default {
    name: 'gojs',
    props: {
        msg: {
            type: 'string',
            default: ''
        }
    },
    data() {
        return {
            myDiagram: null,
            myModel: null
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            var mySelf = this // 声明个Vue的指向
            const $ = go.GraphObject.make
            mySelf.myDiagram = $(go.Diagram, 'chart-diagram', { // 创建画板并挂在Vue上（注意dom的id名称要对应）
                "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
                //这里写画板配置

            })
            mySelf.myDiagram.nodeTemplate =  // provide custom Node appearance
                $(go.Node, "Auto",
                    $(go.Shape,
                        {
                            figure: "RoundedRectangle",
                            fill: "white"
                        }, new go.Binding("fill", "color")),
                    $(go.TextBlock,
                        new go.Binding("text", "text"), {
                        margin: 5
                    }),
                    $(go.Picture,
                        { margin: 10, width: 50, height: 50, background: "red" },
                        new go.Binding('source')
                    )
                );
            let nodeDataArray = [
                { "category": "Comment", "loc": "360 -10", "text": "111", "key": -13, color: 'red' },
                { "key": -1, "category": "End", "loc": "175 0", "text": "Start", color: 'blue' },
                { "key": 0, "loc": "0 0", "text": "222", color: 'orange',source: cat1 },
                { "key": 1, "loc": "100 100", "text": "333", color: 'orange',source: cat2 },
                { "key": 2, "loc": "175 200", "text": "444", color: 'orange',source: cat3 },
                { "key": 3, "loc": "175 290", "text": "555", color: 'orange',source: cat4 },
                { "key": 4, "loc": "175 380", "text": "666", color: 'orange',source:  '' },
                { "key": 5, "loc": "355 85", "text": "777", color: 'orange' },
                { "key": 6, "loc": "175 450", "text": "888", color: 'orange' },
                { "key": 7, "loc": "175 515", "text": "999", color: 'orange' },
                { "key": 8, "loc": "175 585", "text": "101010", color: 'orange' },
                { "key": -2, "category": "End", "loc": "175 660", "text": "111111", color: 'orange' }
            ];
            let linkDataArray = [
                { "from": 1, "to": 2, "fromPort": "B", "toPort": "T" },
                { "from": 2, "to": 3, "fromPort": "B", "toPort": "T" },
                { "from": 3, "to": 4, "fromPort": "B", "toPort": "T" },
                { "from": 4, "to": 6, "fromPort": "B", "toPort": "T" },
                { "from": 6, "to": 7, "fromPort": "B", "toPort": "T" },
                { "from": 7, "to": 8, "fromPort": "B", "toPort": "T" },
                { "from": 8, "to": -2, "fromPort": "B", "toPort": "T" },
                { "from": -1, "to": 0, "fromPort": "B", "toPort": "T" },
                { "from": -1, "to": 1, "fromPort": "B", "toPort": "T" },
                { "from": -1, "to": 5, "fromPort": "B", "toPort": "T" },
                { "from": 5, "to": 4, "fromPort": "B", "toPort": "T" },
                { "from": 0, "to": 4, "fromPort": "B", "toPort": "T" }
            ]
            mySelf.myDiagram.TreeModel = new go.GraphLinksModel(nodeDataArray, linkDataArray);
        }
    }
}
</script>