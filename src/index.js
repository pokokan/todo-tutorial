//html画面のタブを取得
const input = document.querySelector("input");

const addTodoBtn = document.querySelector("#add-todo-btn");
//eve=イベントの引数
addTodoBtn.addEventListener("click", (eve) => {
  //ulタグを1つとってくる（全て取る場合はquerySelectorAllを使用）
  const ul = document.querySelector(".todo-list-area");
  // console.log(ul);

  //liを作る
  const li = document.createElement("li");
  li.classList.add("todo-list");
  // console.log(li);

  //ｐを作る
  const p = document.createElement("p");
  p.textContent = input.value;
  // console.log(p);

  //liにpタグを入れる
  li.appendChild(p);
  console.log(li);

  //完了buttonを作る
  const comBtn = document.createElement("button");
  comBtn.textContent = "完了";

  //削除buttonを作る
  const delBtn = document.createElement("button");
  delBtn.textContent = "削除";
  li.appendChild(comBtn);
  li.appendChild(delBtn);
  // console.log(li);

  //ulにぶち込む
  ul.appendChild(li);

  //delete:削除ボタンにイベント追加
  delBtn.addEventListener("click", () => {
    //delBtn.parentNode:delBtnの上の階層のタグを取得（ulを取得）
    const parent = delBtn.parentNode;
    ul.removeChild(parent);
  });
});

//ul(unorderList),ol(orderList)の説明↓
//https://saruwakakun.com/html-css/basic/ul-ol-li#section1

//オブジェクトの中にあるメソッドはメソッド、オブジェクトの外にあるメソッドは関数という
//window.console.log:jsに一番上にwindowがあるが、基本省略して書かれている

//【別件】全ての要素文回したい時に使用する方法2パターン
// let s = [1, 2, 3];
// s.forEach(function (item) {
//   console.log(item);
// });
// for(let item of s){
//   console.log(item);
// }

//【別件】mapの通な使い方
// let obj = {
//   name: "test",
//   age: 12,
//   sex: "male",
//   job: "police"
// };
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

//そのほかのmapの使い方
// let arr = [1, 2, 3, 4, 5];
// let newArry = [];
// arr.forEach((num) => {
//   if (num % 2 === 0) {
//     newArry.push(num);
//   }
// });
// let newArryMap = arr.map((num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
// });
// console.log(newArryMap);
