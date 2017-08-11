/*
题目：给出链表 , 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function XXX(str,val){}*/

function removeValFromStr(str,val) {
    return str.replace(/val/g,"").split("->").filter((elem)=>elem).join("->");
}
