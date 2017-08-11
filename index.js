/*
题目：给出链表 , 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function XXX(str,val){}*/

function removeValFromStr(str,val) {
    return str.split("->").filter((elem) => elem != val).join("->");//此处需要使用!=来触发类型转换
}
console.log('调用removeValFromStr("1->2->3->3->4->5->3",3)返回');
console.log(removeValFromStr('1->2->3->3->4->5->3',3));
