/*
题目：给出链表 , 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function XXX(str,val){}*/

function removeValFromStr(str,val) {
    var reg = new RegExp(val,"g");
    return str.replace(reg,"").split("->").filter((elem)=>elem).join("->");
}
console.log('调用removeValFromStr("1->2->3->3->4->5->3",3)返回');
console.log(removeValFromStr('1->2->3->3->4->5->3',3));
