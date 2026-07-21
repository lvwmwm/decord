// Module ID: 1441
// Function ID: 16788
// Name: hasOwnProperty
// Dependencies: []

// Module 1441 (hasOwnProperty)
function hasOwnProperty(arg0, arg1) {
  return hasOwnProperty.call(arg0, arg1);
}

export default (str, SEPARATOR, arg2, maxKeys) => {
  str = SEPARATOR;
  let str2 = arg2;
  if (!SEPARATOR) {
    str = "&";
  }
  if (!str2) {
    str2 = "=";
  }
  const obj = {};
  if ("string" === typeof str) {
    if (0 !== str.length) {
      const parts = str.split(str);
      let tmp = maxKeys;
      if (maxKeys) {
        tmp = "number" === typeof maxKeys.maxKeys;
      }
      let num = 1000;
      if (tmp) {
        num = maxKeys.maxKeys;
      }
      let length = parts.length;
      if (tmp2) {
        length = num;
      }
      for (let num3 = 0; num3 < length; num3 = num3 + 1) {
        let str6 = parts[num3];
        let replaced = str6.replace(tmp10, "%20");
        let index = replaced.indexOf(str2);
        let substr = replaced;
        let str7 = "";
        if (index >= 0) {
          substr = replaced.substr(0, index);
          str7 = replaced.substr(index + 1);
        }
        let _decodeURIComponent = decodeURIComponent;
        let decodeURIComponentResult = decodeURIComponent(substr);
        let _decodeURIComponent2 = decodeURIComponent;
        let decodeURIComponentResult1 = decodeURIComponent(str7);
        let tmp8 = hasOwnProperty;
        if (hasOwnProperty(obj, decodeURIComponentResult)) {
          let _Array = Array;
          let arr2 = obj[decodeURIComponentResult];
          if (Array.isArray(obj[decodeURIComponentResult])) {
            let arr = arr2.push(decodeURIComponentResult1);
          } else {
            let items = [arr2, decodeURIComponentResult1];
            obj[decodeURIComponentResult] = items;
          }
        } else {
          obj[decodeURIComponentResult] = decodeURIComponentResult1;
        }
      }
      return obj;
    }
  }
  return obj;
};
