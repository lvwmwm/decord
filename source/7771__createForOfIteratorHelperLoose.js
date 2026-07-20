// Module ID: 7771
// Function ID: 61721
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 7771 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ ExperimentTypes: closure_5, ExperimentBuckets: closure_6 } = arg1(dependencyMap[2]));
const obj = {
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
              return importDefault(dependencyMap[4]).isEqual(type.context, type2.context);
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
      const result = arg1(dependencyMap[3]).trackExposureToExperiment(tmp3[0], tmp4);
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
    const entries = Object.entries(arg0);
    return entries.reduce((arg0, arg1) => {
      let str;
      let tmp;
      [str, tmp] = arg1;
      const tmp3 = callback(str.split("-"), 2);
      const first = tmp3[0];
      if (null == tmp3[1]) {
        let flag = false;
      } else {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        const date = new Date("" + first + "-" + arr.slice(0, 2) + "-01");
        flag = date > arg1;
      }
      while (true) {
        if (!flag) {
          break;
        } else {
          let tmp13 = constants;
          flag = tmp > constants.CONTROL;
          // break
        }
        if (flag) {
          arg0[str] = tmp;
        }
        return arg0;
      }
    }, {});
  }
};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/ExperimentUtils.tsx");

export default obj;
