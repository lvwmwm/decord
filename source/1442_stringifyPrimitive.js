// Module ID: 1442
// Function ID: 16791
// Name: stringifyPrimitive
// Dependencies: []

// Module 1442 (stringifyPrimitive)
function stringifyPrimitive(arg0) {
  if ("string" === typeof arg0) {
    return arg0;
  } else if ("boolean" === tmp) {
    let str5 = "false";
    if (arg0) {
      str5 = "true";
    }
    return str5;
  } else if ("number" === tmp) {
    const _isFinite = isFinite;
    let str4 = "";
    if (isFinite(arg0)) {
      str4 = arg0;
    }
    return str4;
  } else {
    return "";
  }
}

export default (arg0, arg1, arg2, arg3) => {
  let str = arg1;
  let str2 = arg2;
  let stringifyPrimitive = arg0;
  str = arg1;
  str2 = arg2;
  if (!arg1) {
    str = "&";
  }
  if (!str2) {
    str2 = "=";
  }
  if (null === arg0) {
    stringifyPrimitive = undefined;
  }
  if ("object" === typeof arg0) {
    const _Object = Object;
    const keys = Object.keys(tmp);
    const mapped = keys.map((arg0) => {
      const sum = encodeURIComponent(_undefined(arg0)) + str2;
      const _undefined = sum;
      if (Array.isArray(_undefined[arg0])) {
        const mapped = _undefined[arg0].map((arg0) => sum + encodeURIComponent(sum(arg0)));
        let joined = mapped.join(str);
        const arr = _undefined[arg0];
      } else {
        const _encodeURIComponent = encodeURIComponent;
        joined = sum + encodeURIComponent(_undefined(_undefined[arg0]));
      }
      return joined;
    });
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    let str3 = found.join(str);
  } else {
    str3 = "";
    if (arg3) {
      const _encodeURIComponent = encodeURIComponent;
      const _encodeURIComponent2 = encodeURIComponent;
      const sum = encodeURIComponent(stringifyPrimitive(arg3)) + str2;
      str3 = sum + encodeURIComponent(stringifyPrimitive(tmp));
    }
  }
  return str3;
};
