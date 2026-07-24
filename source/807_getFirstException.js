// Module ID: 807
// Function ID: 9053
// Name: getFirstException
// Dependencies: [798, 808, 809, 799]

// Module 807 (getFirstException)
const require = arg1;
const dependencyMap = arg6;
function getFirstException(exception) {
  exception = exception.exception;
  let first;
  if (null != exception) {
    const values = exception.values;
    if (null != values) {
      first = values[0];
    }
  }
  return first;
}
function _parseInt(replaced) {
  let str = replaced;
  if (!replaced) {
    str = "";
  }
  return parseInt(str, 10);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const re3 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
arg5.addContextToFrame = function addContextToFrame(arr, lineno) {
  let num = 5;
  if (arguments.length > 2) {
    num = 5;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  if (undefined !== lineno.lineno) {
    const _Math2 = Math;
    const _Math3 = Math;
    const bound = Math.max(Math.min(length - 1, lineno.lineno - 1), 0);
    const _Math4 = Math;
    const substr = arr.slice(Math.max(0, bound - num), bound);
    lineno.pre_context = substr.map((arg0) => outer1_0(outer1_1[2]).snipLine(arg0, 0));
    const _Math5 = Math;
    const bound1 = Math.min(length - 1, bound);
    let num2 = lineno.colno;
    if (!num2) {
      num2 = 0;
    }
    lineno.context_line = require(809) /* isMatchingPattern */.snipLine(arr[bound1], num2);
    const _Math = Math;
    const substr1 = arr.slice(Math.min(bound + 1, length), bound + 1 + num);
    lineno.post_context = substr1.map((arg0) => outer1_0(outer1_1[2]).snipLine(arg0, 0));
    const obj = require(809) /* isMatchingPattern */;
  }
};
arg5.addExceptionMechanism = function addExceptionMechanism(arg0, data) {
  const tmp = getFirstException(arg0);
  if (tmp) {
    const mechanism = tmp.mechanism;
    const _Object = Object;
    const _Object2 = Object;
    tmp.mechanism = Object.assign({}, { type: "generic", handled: true }, mechanism, data);
    if (data) {
      if ("data" in data) {
        data = undefined;
        if (null != mechanism) {
          data = mechanism.data;
        }
        tmp.mechanism.data = Object.assign({}, data, data.data);
      }
    }
  }
};
arg5.addExceptionTypeValue = function addExceptionTypeValue(exception) {
  let str = arg1;
  let str2 = arg2;
  const tmp = exception.exception || {};
  exception.exception = tmp;
  const tmp2 = tmp.values || [];
  tmp.values = tmp2;
  const iter = tmp2[0] || {};
  tmp2[0] = iter;
  if (!iter.value) {
    if (!str) {
      str = "";
    }
    iter.value = str;
  }
  if (!iter.type) {
    if (!str2) {
      str2 = "Error";
    }
    iter.type = str2;
  }
};
arg5.checkOrSetAlreadyCaught = function checkOrSetAlreadyCaught(__sentry_captured__) {
  while (true) {
    if (__sentry_captured__.__sentry_captured__) {
      let flag3 = true;
      return true;
    } else {
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let num = 3;
      let obj = require(799) /* addNonEnumerableProperty */;
      let tmp4 = __sentry_captured__;
      let str = "__sentry_captured__";
      let flag = true;
      let result = obj.addNonEnumerableProperty(tmp, "__sentry_captured__", true);
      let flag2 = false;
    }
  }
};
arg5.getEventDescription = function getEventDescription(arg0) {
  let event_id;
  let message;
  let type;
  let value;
  ({ message, event_id } = arg0);
  if (message) {
    return message;
  } else {
    let str = getFirstException(arg0);
    if (str) {
      if (!str.type) {
        let combined = str.type || str.value || event_id || "<unknown>";
      }
      const _HermesInternal = HermesInternal;
      ({ type, value } = str);
      str = ": ";
      combined = "" + type + ": " + value;
    } else {
      let str2 = event_id;
      if (!event_id) {
        str2 = "<unknown>";
      }
      return str2;
    }
  }
};
arg5.parseSemver = function parseSemver(str) {
  const tmp = str.match(closure_3) || [];
  const tmp2 = _parseInt(tmp[1]);
  const tmp3 = _parseInt(tmp[2]);
  const tmp4 = _parseInt(tmp[3]);
  const obj = { buildmetadata: tmp[5] };
  let tmp5;
  if (!isNaN(tmp2)) {
    tmp5 = tmp2;
  }
  obj.major = tmp5;
  let tmp6;
  if (!isNaN(tmp3)) {
    tmp6 = tmp3;
  }
  obj.minor = tmp6;
  let tmp7;
  if (!isNaN(tmp4)) {
    tmp7 = tmp4;
  }
  obj.patch = tmp7;
  obj.prerelease = tmp[4];
  return obj;
};
arg5.uuid4 = function uuid4() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (null != first) {
      if (first.randomUUID) {
        let obj = first(808);
        return first(808).withRandomSafeContext(() => first.randomUUID()).replace(/-/g, "");
      }
    }
    while (true) {
      let tmp7 = c2;
      if (c2) {
        break;
      } else {
        let str3 = "10000000100040008000100000000000";
        c2 = "10000000100040008000100000000000";
        break;
      }
      let tmp8 = c2;
      return c2.replace(/[018]/g, (arg0) => {
        const obj = first(outer1_1[1]);
        return arg0 ^ (15 & 16 * first(outer1_1[1]).safeMathRandom()) >> arg0 / 4.toString(16);
      });
    }
  }
  const GLOBAL_OBJ = first(798).GLOBAL_OBJ;
  first = GLOBAL_OBJ.crypto || GLOBAL_OBJ.msCrypto;
};
