// Module ID: 967
// Function ID: 10436
// Name: filenameIsInApp
// Dependencies: [3664838659]

// Module 967 (filenameIsInApp)
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
  let closure_3 = /at (?:async )?(.+?) \(data:(.*?),/;
  return (str) => {
    const match = str.match(closure_3);
    if (match) {
      let obj = {};
      const _HermesInternal2 = HermesInternal;
      obj.filename = "<data:" + match[2] + ">";
      obj.function = match[1];
      return obj;
    } else {
      const match1 = str.match(closure_2);
      if (match1) {
        let tmp7;
        let tmp8;
        if (match1[1]) {
          const lastIndexOfResult = match1[1].lastIndexOf(".");
          let diff = lastIndexOfResult;
          if ("." === match1[1][lastIndexOfResult - 1]) {
            diff = lastIndexOfResult - 1;
          }
          let substr3;
          let tmp12;
          let substr2 = arr;
          if (diff > 0) {
            const substr = arr.slice(0, diff);
            const substr1 = arr.slice(diff + 1);
            const index = substr.indexOf(".Module");
            substr3 = substr;
            tmp12 = substr1;
            substr2 = arr;
            if (index > 0) {
              substr2 = arr.slice(index + 1);
              substr3 = substr.slice(0, index);
              tmp12 = substr1;
            }
          }
          tmp7 = tmp12;
          tmp8 = substr2;
          const tmp6 = substr3;
        }
        if (tmp7) {
          let UNKNOWN_FUNCTION = tmp7;
        }
        if (undefined === tmp8) {
          if (!UNKNOWN_FUNCTION) {
            UNKNOWN_FUNCTION = str(closure_1[0]).UNKNOWN_FUNCTION;
          }
          let combined = UNKNOWN_FUNCTION;
          if (tmp16) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp16 + "." + UNKNOWN_FUNCTION;
          }
          tmp8 = combined;
        }
        let str6 = str(closure_1[0]).normalizeStackTracePath(match1[2]);
        let tmp24 = str6;
        if (!str6) {
          tmp24 = !match1[5];
        }
        if (!tmp24) {
          tmp24 = tmp23;
        }
        if (!tmp24) {
          str6 = match1[5];
        }
        obj = {};
        let decodeURIResult;
        if (str6) {
          const _decodeURI = decodeURI;
          decodeURIResult = decodeURI(str6);
        }
        obj.filename = decodeURIResult;
        let tmp28;
        if (str) {
          tmp28 = str(str6);
        }
        obj.module = tmp28;
        obj.function = tmp8;
        obj.lineno = callback(match1[3]);
        obj.colno = callback(match1[4]);
        if (!str6) {
          str6 = "";
        }
        obj.in_app = closure_2(str6, "native" === match1[5]);
        return obj;
      } else {
        let tmp5;
        if (str.match(closure_1)) {
          obj = { filename: str };
          tmp5 = obj;
        }
        return tmp5;
      }
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.filenameIsInApp = filenameIsInApp;
arg5.node = node;
arg5.nodeStackLineParser = function nodeStackLineParser(arg0) {
  const items = [1078942826, node(arg0)];
  return items;
};
