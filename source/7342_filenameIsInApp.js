// Module ID: 7342
// Function ID: 59218
// Name: filenameIsInApp
// Dependencies: []

// Module 7342 (filenameIsInApp)
function filenameIsInApp(str) {
  let tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  if (!tmp) {
    let tmp2 = str;
    if (str) {
      tmp2 = !str.startsWith("/");
    }
    if (tmp2) {
      tmp2 = !str.match(/^[A-Z]:/);
    }
    if (tmp2) {
      tmp2 = !str.startsWith(".");
    }
    if (tmp2) {
      tmp2 = !str.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
    }
    tmp = tmp2;
  }
  let tmp3 = !tmp && undefined !== str;
  if (tmp3) {
    tmp3 = !str.includes("node_modules/");
  }
  return tmp3;
}
function node(arg0) {
  const arg1 = arg0;
  let closure_1 = /^\s*[-]{4,}$/;
  let closure_2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  return (str) => {
    const match = str.match(closure_2);
    if (match) {
      let tmp4;
      let tmp5;
      if (match[1]) {
        const lastIndexOfResult = match[1].lastIndexOf(".");
        let diff = lastIndexOfResult;
        if ("." === match[1][lastIndexOfResult - 1]) {
          diff = lastIndexOfResult - 1;
        }
        let substr3;
        let tmp9;
        let substr2 = arr;
        if (diff > 0) {
          const substr = arr.slice(0, diff);
          const substr1 = arr.slice(diff + 1);
          const index = substr.indexOf(".Module");
          substr3 = substr;
          tmp9 = substr1;
          substr2 = arr;
          if (index > 0) {
            substr2 = arr.slice(index + 1);
            substr3 = substr.slice(0, index);
            tmp9 = substr1;
          }
        }
        tmp4 = tmp9;
        tmp5 = substr2;
        const tmp3 = substr3;
      }
      if (tmp4) {
        let UNKNOWN_FUNCTION = tmp4;
      }
      if (undefined === tmp5) {
        if (!UNKNOWN_FUNCTION) {
          UNKNOWN_FUNCTION = str(closure_1[0]).UNKNOWN_FUNCTION;
        }
        let combined = UNKNOWN_FUNCTION;
        if (tmp13) {
          const _HermesInternal = HermesInternal;
          combined = "" + tmp13 + "." + UNKNOWN_FUNCTION;
        }
        tmp5 = combined;
      }
      if (match[2]) {
        if (obj2.startsWith("file://")) {
          let str7 = match[2].slice(7);
          const arr3 = match[2];
        }
        let match1 = str7;
        if (str7) {
          match1 = str7.match(/\/[A-Z]:/);
        }
        let str9 = str7;
        if (match1) {
          str9 = str7.slice(1);
        }
        let tmp20 = str9;
        if (!str9) {
          tmp20 = !match[5];
        }
        if (!tmp20) {
          tmp20 = tmp18;
        }
        if (!tmp20) {
          str9 = match[5];
        }
        let obj = {};
        let decodeURIResult;
        if (str9) {
          const _decodeURI = decodeURI;
          decodeURIResult = decodeURI(str9);
        }
        obj.filename = decodeURIResult;
        let tmp24;
        if (str) {
          tmp24 = str(str9);
        }
        obj.module = tmp24;
        obj.function = tmp5;
        obj.lineno = callback(match[3]);
        obj.colno = callback(match[4]);
        if (!str9) {
          str9 = "";
        }
        obj.in_app = closure_2(str9, "native" === match[5]);
        return obj;
      }
      str7 = match[2];
    } else if (str.match(closure_1)) {
      obj = { filename: str };
      return obj;
    }
  };
}
function _parseIntOrUndefined(replaced) {
  let str = replaced;
  if (!replaced) {
    str = "";
  }
  return parseInt(str, 10) || undefined;
}
arg5.filenameIsInApp = filenameIsInApp;
arg5.node = node;
arg5.nodeStackLineParser = function nodeStackLineParser(arg0) {
  const items = ["EventTarget", node(arg0)];
  return items;
};
