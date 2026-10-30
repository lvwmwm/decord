// Module ID: 12819
// Function ID: 12820
// Dependencies: []

// Module 12819
function getTrace(arg0) {
  let closure_0 = arg0;
  let items1 = null;
  if (null !== this.matched) {
    function hasMatch(matched) {
      if (Array.isArray(matched.match)) {
        let num = 0;
        if (0 < matched.match.length) {
          while (!hasMatch(matched.match[num])) {
            num = num + 1;
          }
          const syntax = matched.syntax;
          let tmp7 = null !== syntax;
          if (tmp7) {
            tmp7 = "Type" === syntax.type || "Property" === syntax.type || "Keyword" === syntax.type;
            const tmp8 = "Type" === syntax.type || "Property" === syntax.type || "Keyword" === syntax.type;
          }
          if (tmp7) {
            items1.unshift(matched.syntax);
          }
          return true;
        }
      } else if (matched.node === closure_0) {
        const syntax2 = matched.syntax;
        let tmp3 = null !== syntax2;
        if (tmp3) {
          tmp3 = "Type" === syntax2.type || "Property" === syntax2.type || "Keyword" === syntax2.type;
          const tmp2 = "Type" === syntax2.type || "Property" === syntax2.type || "Keyword" === syntax2.type;
        }
        if (tmp3) {
          const items = [matched.syntax];
          items1 = items;
        } else {
          items1 = [];
        }
        return true;
      }
      return false;
    }
    hasMatch(tmp.matched);
  }
  return items1;
}
const obj = {
  getTrace,
  isType(arg0, arg1) {
    let closure_0 = arg1;
    const callResult = getTrace.call(this, arg0);
    const tmp = null !== callResult && callResult.some((type) => "Type" === type.type && type.name === closure_0);
    return tmp;
  },
  isProperty(arg0, arg1) {
    let closure_0 = arg1;
    const callResult = getTrace.call(this, arg0);
    const tmp = null !== callResult && callResult.some((type) => "Property" === type.type && type.name === closure_0);
    return tmp;
  },
  isKeyword(arg0) {
    const callResult = getTrace.call(this, arg0);
    const someResult = null !== callResult && callResult.some((type) => "Keyword" === type.type);
    return someResult;
  }
};

export default obj;
