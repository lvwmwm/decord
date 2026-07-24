// Module ID: 699
// Function ID: 8702
// Name: isKey
// Dependencies: [591, 576]

// Module 699 (isKey)
const re2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const re3 = /^\w*$/;

export default function isKey(arg0, arg1) {
  if (require(591)(arg0)) {
    return false;
  } else {
    let tmp2 = "number" !== tmp;
    if (tmp2) {
      tmp2 = "symbol" !== tmp;
    }
    if (tmp2) {
      tmp2 = "boolean" !== tmp;
    }
    if (tmp2) {
      tmp2 = null != arg0;
    }
    if (tmp2) {
      tmp2 = !require(576) /* isSymbol */(arg0);
    }
    let tmp6 = !tmp2;
    if (tmp2) {
      let isMatch = regex2.test(arg0);
      if (!isMatch) {
        isMatch = !regex.test(arg0);
      }
      if (!isMatch) {
        let tmp11 = null != arg1;
        if (tmp11) {
          const _Object = Object;
          tmp11 = arg0 in Object(arg1);
        }
        isMatch = tmp11;
      }
      tmp6 = isMatch;
    }
    return tmp6;
  }
};
