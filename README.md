# daikyo-sample-05-graphql
大京のサンプル05（GraphQL／Node.jsベース）

※app-create-reactは不要だったかも・・・

## 起動方法
```
> cd c:\graphql
> node sample.js
```

## 確認画面URL
http://localhost:5000/graphql

## クエリ例

### IDを取得して検索
```
[query]
query getBusho($bushoID: Int!) {
  post(id: $bushoID) {
    name
  }
}

[variables]
{
  "bushoID": 10
}

[結果]
{
  "data": {
    "post": {
      "name": "部署Ａ"
    }
  }
}
```

### 全件検索
```
[query]
{
  posts {
    id
    name
  }
}

[variables]
なし

[結果]
{
  "data": {
    "posts": [
      {
        "id": 10,
        "name": "部署Ａ"
      },
      {
        "id": 20,
        "name": "部署Ｂ"
      },
      {
        "id": 30,
        "name": "部署Ｃ"
      },
      {
        "id": 40,
        "name": "部署Ｄ"
      },
      {
        "id": 50,
        "name": "部署Ｅ"
      },
      {
        "id": 60,
        "name": "部署Ｆ"
      }
    ]
  }
}
```
