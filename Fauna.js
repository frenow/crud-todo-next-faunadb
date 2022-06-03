// const faunadb = require("faunadb")
// const faunaClient = new faunadb.Client({
//   secret: "fnAEdNrI_OACS-8WxrUCXlhUujSoN1GtSWc_uniL",
//   domain: "db.fauna.com"
// })

// const q = faunadb.query
// const getResponse = async () => {
//   const { data } = await faunaClient.query(
//     q.Map(
//       q.Paginate(q.Documents(q.Collection("todos"))),
//       q.Lambda("doc", q.Get(q.Var("doc")))
//     )
//   )
//   const todos = data.map((todo) => {
//     todo.id = todo.ref.id
//     delete todo.ref
//     return todo
//   })
//   return todos
// }

// // const createResponse = async

// module.exports = {
//   getResponse,
// }