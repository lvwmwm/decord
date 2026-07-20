// Module ID: 902
// Function ID: 9916
// Name: flattenIssue
// Dependencies: []

// Module 902 (flattenIssue)
function flattenIssue(path) {
  const obj = {};
  let joined;
  if ("path" in path) {
    const _Array = Array;
    if (Array.isArray(path.path)) {
      path = path.path;
      joined = path.join(".");
    }
  }
  obj.path = joined;
  let json;
  if ("keys" in path) {
    const _JSON = JSON;
    json = JSON.stringify(path.keys);
  }
  obj.keys = json;
  let json1;
  if ("unionErrors" in path) {
    const _JSON2 = JSON;
    json1 = JSON.stringify(path.unionErrors);
  }
  obj.unionErrors = json1;
  return Object.assign({}, path, obj);
}
function flattenIssuePath(arr) {
  const mapped = arr.map((arg0) => {
    let str = "<array>";
    if ("number" !== typeof arg0) {
      str = arg0;
    }
    return str;
  });
  return mapped.join(".");
}
function formatIssueMessage(issues) {
  const set = new Set();
  while (tmp2 !== undefined) {
    let tmp4 = flattenIssuePath;
    let arr = flattenIssuePath(tmp3.path);
    if (arr.length > 0) {
      let tmp6 = set;
      let tmp7 = arr;
      let addResult = obj.add(tmp5);
    }
    // continue
  }
  arr = Array.from(set);
  if (0 === arr.length) {
    let str4 = "variable";
    if (issues.issues.length > 0) {
      const first = issues.issues[0];
      let tmp12 = undefined !== first;
      if (tmp12) {
        tmp12 = "expected" in first;
      }
      if (tmp12) {
        tmp12 = "string" === typeof first.expected;
      }
      str4 = "variable";
      if (tmp12) {
        str4 = first.expected;
      }
    }
    const _HermesInternal2 = HermesInternal;
    return "Failed to validate " + str4;
  } else {
    const _HermesInternal = HermesInternal;
    return "Failed to validate keys: " + require(dependencyMap[2]).truncate(arr.join(", "), 100);
  }
  const obj = set;
  const tmp2 = issues.issues[Symbol.iterator]();
}
function applyZodErrorsToEvent(arg0) {
  const tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  let tmp2;
  if (arguments.length > 2) {
    tmp2 = arguments[2];
  }
  let tmp4;
  if (arguments.length > 3) {
    tmp4 = arguments[3];
  }
  const exception = tmp3.exception;
  if (null != exception) {
    if (exception.values) {
      if (tmp5.originalException) {
        const originalException = tmp5.originalException;
        let obj = require(dependencyMap[1]);
        let isErrorResult = obj.isError(originalException);
        if (isErrorResult) {
          isErrorResult = "ZodError" === originalException.name;
        }
        if (isErrorResult) {
          const _Array = Array;
          isErrorResult = Array.isArray(originalException.issues);
        }
        if (isErrorResult) {
          if (0 !== tmp5.originalException.issues.length) {
            const issues = tmp5.originalException.issues;
            if (tmp) {
              let substr = issues;
            } else {
              substr = issues.slice(0, arg0);
            }
            const mapped = substr.map(flattenIssue);
            if (tmp) {
              const _Array2 = Array;
              if (!Array.isArray(tmp5.attachments)) {
                tmp5.attachments = [];
              }
              const attachments = tmp5.attachments;
              obj = { filename: "zod_issues.json" };
              const _JSON = JSON;
              obj = { issues: mapped };
              obj.data = JSON.stringify(obj);
              attachments.push(obj);
            }
            const _Object = Object;
            const obj1 = {};
            const _Object2 = Object;
            const obj2 = {};
            const _Object3 = Object;
            const obj3 = { value: formatIssueMessage(tmp4.originalException) };
            const items = [Object.assign({}, tmp3.exception.values[0], obj3)];
            const values = tmp3.exception.values;
            obj2.values = items.concat(callback(values.slice(1)));
            obj1.exception = Object.assign({}, tmp3.exception, obj2);
            const _Object4 = Object;
            const obj4 = { zoderror.issues: mapped.slice(0, arg0) };
            obj1.extra = Object.assign({}, tmp3.extra, obj4);
            return Object.assign({}, tmp3, obj1);
          }
        }
      }
    }
  }
  return tmp2;
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[3]);

export { applyZodErrorsToEvent };
export { flattenIssue };
export { flattenIssuePath };
export { formatIssueMessage };
export const zodErrorsIntegration = _module.defineIntegration(function _zodErrorsIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const require = first;
    const limit = first.limit;
    let num = 10;
    if (null != limit) {
      num = limit;
    }
    const dependencyMap = num;
    const obj = {
      name: "ZodErrors",
      processEvent(arg0, arg1) {
          return callback(num, first.saveZodIssuesAsAttachment, arg0, arg1);
        }
    };
    return obj;
  }
  first = {};
});
