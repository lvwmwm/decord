// Module ID: 7873
// Function ID: 62113
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4044, 4045, 4052, 22, 2]

// Module 7873 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ExperimentBuckets from "ExperimentBuckets";

let closure_5;
let closure_6;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getFirstEligibleUserExperiment(arg0) {
  const tmp = _createForOfIteratorHelperLoose(arg0);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    const value = iter2.value;
    const userExperimentDescriptor = authStore.getUserExperimentDescriptor(value);
    while (null == userExperimentDescriptor) {
      let iter3 = tmp();
      iter2 = iter3;
    }
    const items = [value, userExperimentDescriptor];
    return items;
  }
  return null;
}
({ ExperimentTypes: closure_5, ExperimentBuckets: closure_6 } = ExperimentBuckets);
let result = require("ExperimentBuckets").fileFinishedImporting("utils/ExperimentUtils.tsx");

export default {
  getFirstEligibleUserExperiment,
  isInExperimentBucket(arg0, arg1) {
    return authStore.getUserExperimentBucket(arg0) === arg1;
  },
  experimentDescriptorEquals(type, type2) {
    if (null == type) {
      if (null == type2) {
        return true;
      }
    }
    if (type === type2) {
      return true;
    } else {
      if (null == type) {
        if (null != type2) {
          return false;
        }
      }
      if (null != type) {
        if (null == type2) {
          return false;
        }
      }
      if (null != type) {
        if (null != type2) {
          if (type.type !== type2.type) {
            return false;
          } else if (type.bucket !== type2.bucket) {
            return false;
          } else if (type.revision !== type2.revision) {
            return false;
          } else if (type.type === constants.USER) {
            if (type2.type === constants.USER) {
              return importDefault(22).isEqual(type.context, type2.context);
            }
          }
        }
      }
      return true;
    }
  },
  trackExposureToFirstEligibleUserExperiment(arg0) {
    const tmp = getFirstEligibleUserExperiment(arg0);
    if (null != tmp) {
      const tmp3 = callback(tmp, 2);
      const result = require(4052) /* trackExposureToExperiment */.trackExposureToExperiment(tmp3[0], tmp4);
      return tmp3[1];
    }
  },
  getExperimentBucketName(bucket) {
    let str = "Control";
    if (bucket !== constants2.CONTROL) {
      let str2 = "Not Eligible";
      if (bucket !== constants2.NOT_ELIGIBLE) {
        const _HermesInternal = HermesInternal;
        str2 = "Treatment " + bucket;
      }
      str = str2;
    }
    return str;
  },
  getRecentExperimentBuckets(arg0, arg1) {
    let closure_0 = arg1;
    const entries = Object.entries(arg0);
    return entries.reduce((arg0, arg1) => {
      let str;
      let tmp;
      [str, tmp] = arg1;
      const tmp3 = outer1_3(str.split("-"), 2);
      const first = tmp3[0];
      if (null == tmp3[1]) {
        let flag = false;
      } else {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        const date = new Date("" + first + "-" + arr.slice(0, 2) + "-01");
        flag = date > closure_0;
      }
      while (true) {
        if (!flag) {
          break;
        } else {
          let tmp13 = outer1_6;
          flag = tmp > outer1_6.CONTROL;
          break;
        }
        if (flag) {
          arg0[str] = tmp;
        }
        return arg0;
      }
    }, {});
  }
};
