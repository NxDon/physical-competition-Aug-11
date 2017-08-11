function removeValFromStr(str,val) {
    return str.split("->").filter((elem) => elem != val).join("->");//此处需要使用!=来触发类型转换
}
