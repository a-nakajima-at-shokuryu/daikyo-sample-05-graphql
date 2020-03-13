const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')

// スキーマの定義
const schema = buildSchema(`

    # Queryスキーマ
    type Query {
        post(id: Int!): Busho
        posts: [Busho]
    }
  
    # Bushoスキーマ
    type Busho {
        id: Int
        name: String
    }

`)

// 部署配列
const dummyBushos = [
    { id: 10, name: '部署Ａ'},
    { id: 20, name: '部署Ｂ'},
    { id: 30, name: '部署Ｃ'},
    { id: 40, name: '部署Ｄ'},
    { id: 50, name: '部署Ｅ'},
    { id: 60, name: '部署Ｆ'},
]

const root = {

    // idを条件に検索
    post: args => {
        const id = args.id
        return dummyBushos.filter(post => post.id == id)[0]
    },

    // 全件返却
    posts: () => dummyBushos

}
  
const app = express()
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
  
app.listen(5000, () => console.log('Example app listening on port 5000!'))
