module.exports = {
    title: 'cjh的博客',
    description: '前端小白成长笔记',
    themeConfig:{
        nav: [{text: "主页", link: "/"      },
            { text: "web", link: "/webframe/"},
            { text: "node", link: "/node/" },
            { text: "数据库", link: "/database/"   },
            { text: "Vue", link: "/vue/"   },
            { text: "面试问题", link: "/interview/" }
          ],
        sidebar: {
        '/node/': [
            ['', 'node目录'],
            ['path', '作为前端也需要知道的路径知识'],
            ['stream', 'node核心模块-stream'],
        ],
        '/webframe/': [
            '',     /* /foo/ */
            '大事件和node阶段晨读资料',  /* /foo/one.html */
            'js高级阶段晨读资料',   /* /foo/two.html */
            'ajax阶段晨读资料',
          ]
        },
    },
}