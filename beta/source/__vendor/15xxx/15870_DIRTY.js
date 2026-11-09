// Module ID: 15870
// Function ID: 15871
// Name: DIRTY
// Dependencies: [5, 41, 42, 15867, 15866]
// Exports: DIRTY, OK, addIssueToContext, isAborted, isAsync, isDirty, isValid, makeIssue

// Module 15870 (DIRTY)
import defaultErrorMap from "defaultErrorMap" /* 15866 */;
import _mod15867 from "module_15867" /* 15867 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let c8, c9;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  };
}
const ZodIssueCode = fn(_mod15867);
let closure_1;
class ParseStatus {
  constructor() {
    _classCallCheck(this, ParseStatus);
    this.value = "valid";
  }
}
let entry = {
  key: "dirty",
  value: function dirty() {
    if ("valid" === this.value) {
      tmp.value = "dirty";
    }
  }
};
let items = [
  entry,
  {
    key: "abort",
    value: function abort() {
      if ("aborted" !== this.value) {
        this.value = "aborted";
      }
    }
  }
];
const entry1 = {
  key: "mergeArray",
  value: function mergeArray(status, found) {
    const items = [];
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let iter2 = nextResult;
      if ("aborted" === nextResult.status) {
        let INVALID = exports.INVALID;
        iter.return();
        return INVALID;
      } else {
        if ("dirty" === iter2.status) {
          let dirtyResult = status.dirty();
        }
        let arr = items.push(iter2.value);
        continue;
      }
    }
    return { status: status.value, value: items };
  }
};
const items1 = [entry1, , ];
const entry2 = {
  key: "mergeObjectAsync",
  value: function mergeObjectAsync(status, items) {
    return closure_1(...arguments);
  }
};
closure_1 = _asyncToGenerator(async (arg0, value) => {
  let closure_0 = arg0;
  closure_1 = value;
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      let c2;
      let key;
      let closure_2;
      c9 = 2;
      let tmp5 = c8;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          let closure_5 = tmp;
          c2 = undefined;
          value = undefined;
          closure_1 = [];
          key = closure_1;
          closure_2 = closure_1[Symbol.iterator]();
        }
      } else if (1 === tmp5) {
        let c7 = 0;
        closure_2.return();
        throw closure_1_6;
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          closure_2.return();
          c9 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          key = value;
          c8 = 3;
          c9 = 1;
          let obj4 = { value: c2.value, done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        closure_2.return();
        c9 = 3;
        let obj5 = { value, done: true };
        return obj5;
      } else {
        let entry = { key, value };
        let arr = closure_1.push(entry);
        c7 = 0;
      }
      if (closure_2 === undefined) {
        c9 = 3;
        let obj6 = { value: closure_133_0.mergeObjectSync(closure_0, closure_1), done: true };
        return obj6;
      } else {
        c7 = 1;
        c2 = tmp20;
        c8 = 2;
        c9 = 1;
        let obj7 = { value: c2.key, done: false };
        return obj7;
      }
    }
  }
});
items1[1] = entry2;
items1[2] = {
  key: "mergeObjectSync",
  value: function mergeObjectSync(status, items) {
    const obj = {};
    const iter = items[Symbol.iterator]();
    const iter2 = iter.next();
    while (iter !== undefined) {
      let key = iter2.key;
      let iter3 = key;
      let iter4 = iter2.value;
      if ("aborted" === key.status) {
        let INVALID2 = exports.INVALID;
        iter.return();
        return INVALID2;
      } else if ("aborted" === iter4.status) {
        let INVALID = exports.INVALID;
        iter.return();
        return INVALID;
      } else {
        if ("dirty" === iter3.status) {
          let dirtyResult = status.dirty();
        }
        if ("dirty" === iter4.status) {
          let dirtyResult1 = status.dirty();
        }
        let tmp7 = "__proto__" === iter3.value;
        if (!tmp7) {
          let tmp9 = undefined === iter4.value;
          if (tmp9) {
            tmp9 = !tmp.alwaysSet;
          }
          tmp7 = tmp9;
        }
        if (!tmp7) {
          obj[iter3.value] = iter4.value;
        }
        continue;
      }
    }
    return { status: status.value, value: obj };
  }
};
const ParseStatus_export = _createClass(ParseStatus, items, items1);
const INVALID_export = Object.freeze({ status: "aborted" });

export const makeIssue = (path) => {
  let errorMaps;
  let issueData;
  let tmp;
  ({ errorMaps, issueData } = path);
  const items = [...path.path, ...tmp];
  const data = path.data;
  const obj = { path: items };
  tmp = issueData.path || [];
  const merged = Object.assign(issueData);
  if (undefined !== issueData.message) {
    const obj2 = { path: items, message: issueData.message };
    const merged1 = Object.assign(issueData);
    return obj2;
  } else {
    let str = "";
    const found = errorMaps.filter((item) => item);
    const substr = found.slice();
    const reversed = substr.reverse();
    for (const item10022 of reversed) {
      let obj3 = { data, defaultError: str };
      str = item10022(obj, obj3).message;
      continue;
    }
    const obj4 = { path: items, message: str };
    const merged2 = Object.assign(issueData);
    return obj4;
  }
};
export const EMPTY_PATH = [];
export function addIssueToContext(ctx, issueData) {
  let items;
  const errorMap = defaultErrorMap.getErrorMap();
  const obj = { issueData, data: ctx.data, path: ctx.path, errorMaps: items.filter((item) => item) };
  items = [ctx.common.contextualErrorMap, ctx.schemaErrorMap, errorMap, ];
  let _default;
  const makeIssue = exports.makeIssue;
  if (errorMap !== ZodIssueCode.default) {
    _default = ZodIssueCode.default;
  }
  items[3] = _default;
  const issues = ctx.common.issues;
  issues.push(makeIssue(obj));
}
export { ParseStatus_export as ParseStatus };
export { INVALID_export as INVALID };
export const DIRTY = (value) => ({ status: "dirty", value });
export const OK = (value) => ({ status: "valid", value });
export const isAborted = (status) => "aborted" === status.status;
export const isDirty = (status) => "dirty" === status.status;
export const isValid = (status) => "valid" === status.status;
export const isAsync = (arg0) => {
  let tmp = typeof Promise !== "undefined";
  if (typeof Promise !== "undefined") {
    tmp = arg0 instanceof Promise;
  }
  return tmp;
};
