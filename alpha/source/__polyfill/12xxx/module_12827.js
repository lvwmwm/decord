// Module ID: 12827
// Function ID: 12828
// Dependencies: []

// Module 12827
let closure_1 = Object.create(null);
let closure_2 = Object.create(null);
let obj = {
  keyword: function getKeywordDescriptor(str) {
    const obj = hasOwnProperty;
    if (hasOwnProperty.call(closure_1, str)) {
      return closure_1[str];
    } else {
      const formatted = str.toLowerCase();
      if (obj.call(closure_1, formatted)) {
        closure_1[str] = closure_1[formatted];
        return closure_1[formatted];
      } else {
        let tmp2 = length >= 2;
        if (2 <= formatted.length) {
          tmp2 = 45 === formatted.charCodeAt(0);
        }
        if (tmp2) {
          tmp2 = 45 === formatted.charCodeAt(1);
        }
        let str2 = "";
        if (!tmp2) {
          let str3 = "";
          if (3 <= formatted.length) {
            str3 = "";
            if (45 === formatted.charCodeAt(0)) {
              str3 = "";
              if (45 !== formatted.charCodeAt(1)) {
                const index = formatted.indexOf("-", 2);
                str3 = "";
                if (-1 !== index) {
                  str3 = formatted.substring(0, index + 1);
                }
              }
            }
          }
          str2 = str3;
        }
        const _Object = Object;
        const obj2 = { basename: formatted.substr(str2.length), name: formatted, vendor: str2, prefix: str2, custom: tmp2 };
        const freezeResult = freeze(obj2);
        closure_1[str] = freezeResult;
        return freezeResult;
      }
    }
  },
  property: function getPropertyDescriptor(str) {
    const obj = hasOwnProperty;
    if (hasOwnProperty.call(closure_2, str)) {
      return closure_2[str];
    } else {
      str = str[0];
      let str2 = "/";
      if ("/" === str) {
        if (`/` === str[1]) {
          str2 = "//";
        }
        str = str2;
      } else {
        const tmp2 = "_" !== str && "*" !== str && "$" !== str && "#" !== str && "+" !== str && "&" !== str;
        if (tmp2) {
          str = "";
        }
      }
      const tmp4 = str.length - tmp3 >= 2 && 45 === str.charCodeAt(tmp3) && 45 === str.charCodeAt(tmp3 + 1);
      let arr = str;
      if (!tmp4) {
        const formatted = str.toLowerCase();
        arr = formatted;
        if (obj.call(closure_2, formatted)) {
          closure_2[str] = closure_2[formatted];
          return closure_2[formatted];
        }
      }
      let str10 = "";
      if (!tmp4) {
        let str11 = "";
        if (arr.length - (str.length || 0) >= 3) {
          str11 = "";
          if (45 === arr.charCodeAt(str.length || 0)) {
            str11 = "";
            if (45 !== arr.charCodeAt((str.length || 0) + 1)) {
              const index = arr.indexOf("-", tmp7 + 2);
              str11 = "";
              if (-1 !== index) {
                str11 = arr.substring(tmp7, index + 1);
              }
            }
          }
        }
        str10 = str11;
      }
      const substr = arr.substr(0, str.length + str10.length);
      const _Object = Object;
      const obj2 = { basename: arr.substr(substr.length), name: arr.substr(str.length), hack: str, vendor: str10, prefix: substr, custom: tmp4 };
      const freezeResult = freeze(obj2);
      closure_2[str] = freezeResult;
      return freezeResult;
    }
  },
  isCustomProperty(callResult, arg1) {
    const tmp2 = callResult.length - tmp >= 2 && 45 === callResult.charCodeAt(tmp) && 45 === callResult.charCodeAt(tmp + 1);
    return tmp2;
  },
  vendorPrefix: function getVendorPrefix(str, arg1) {
    if (str.length - (arg1 || 0) >= 3) {
      if (45 === str.charCodeAt(arg1 || 0)) {
        if (45 !== str.charCodeAt((arg1 || 0) + 1)) {
          const index = str.indexOf("-", tmp + 2);
          if (-1 !== index) {
            return str.substring(arg1 || 0, index + 1);
          }
        }
      }
    }
    return "";
  }
};

export default obj;
