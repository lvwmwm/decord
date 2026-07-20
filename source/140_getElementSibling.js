// Module ID: 140
// Function ID: 2293
// Name: getElementSibling
// Dependencies: []

// Module 140 (getElementSibling)
arg5.getElementSibling = function getElementSibling(parentNode, next) {
  parentNode = parentNode.parentNode;
  if (null == parentNode) {
    return null;
  } else {
    const childNodes = next(arg6[0]).getChildNodes(parentNode);
    const index = childNodes.indexOf(parentNode);
    let num = -1;
    if (-1 === index) {
      return null;
    } else {
      if ("next" === next) {
        num = 1;
      }
      const sum = index + num;
      if (null == closure_2) {
        closure_2 = next(arg6[1]).default;
      }
      let tmp5 = sum;
      if (null != childNodes[sum]) {
        let tmp7 = sum;
        tmp5 = sum;
        if (!(childNodes[sum] instanceof closure_2)) {
          const sum1 = tmp7 + num;
          tmp5 = sum1;
          while (null != childNodes[sum1]) {
            let tmp9 = closure_2;
            tmp7 = sum1;
            tmp5 = sum1;
            if (childNodes[sum1] instanceof closure_2) {
              break;
            }
          }
        }
      }
      let tmp11 = null;
      if (null != childNodes[tmp5]) {
        tmp11 = tmp10;
      }
      return tmp11;
    }
    const obj = next(arg6[0]);
  }
};
