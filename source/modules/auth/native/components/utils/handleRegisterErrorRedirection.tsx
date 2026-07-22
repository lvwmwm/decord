// Module ID: 14664
// Function ID: 110572
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14664 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function getRedirectStepForErrorKey(value) {
  if ("email" !== value) {
    if ("phoneToken" !== value) {
      if ("global_name" === value) {
        return require(dependencyMap[2]).AuthStates.REGISTER_DISPLAY_NAME;
      } else {
        if ("username" !== value) {
          if ("password" !== value) {
            return null;
          }
        }
        return require(dependencyMap[2]).AuthStates.REGISTER_ACCOUNT_INFORMATION;
      }
    }
  }
  return require(dependencyMap[2]).AuthStates.REGISTER_IDENTITY;
}
const _module = require(dependencyMap[0]);
({ RegisterTransitionSteps: closure_3, RegistrationTransitionActionTypes: closure_4, authStateToRegisterTransitionStep: closure_5 } = _module);
const AbortCodes = require(dependencyMap[1]).AbortCodes;
let closure_7 = { [require(dependencyMap[2]).AuthStates.REGISTER_IDENTITY]: [null, null], [require(dependencyMap[2]).AuthStates.REGISTER_DISPLAY_NAME]: [], [require(dependencyMap[2]).AuthStates.REGISTER_ACCOUNT_INFORMATION]: [] };
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx");

export default function handleRegisterErrorRedirection(navigate, arg1, code, step) {
  if (null == importDefault(dependencyMap[3])("date_of_birth", code)) {
    const _Number = Number;
    if (Number(code.code) !== AbortCodes.UNDER_MINIMUM_AGE) {
      const tmp32 = _createForOfIteratorHelperLoose(require(dependencyMap[4]).getRegistrationSteps());
      const iter6 = tmp32();
      let iter5 = iter6;
      if (!iter6.done) {
        while (true) {
          let tmp2 = closure_7;
          let items = closure_7[iter5.value];
          let tmp = _createForOfIteratorHelperLoose;
          if (null == items) {
            items = [];
          }
          let tmpResult = tmp(items);
          let iter = tmpResult();
          let iter2 = iter;
          let tmp4 = tmp5;
          if (!iter.done) {
            while (true) {
              let value = iter2.value;
              let tmp6 = importDefault;
              let tmp7 = dependencyMap;
              let tmp8 = importDefault(dependencyMap[3])(value, code);
              if (null != tmp8) {
                let tmp9 = getRedirectStepForErrorKey;
                let tmp10 = getRedirectStepForErrorKey(value);
                tmp4 = tmp10;
                if (null != tmp10) {
                  break;
                }
              }
              let iter3 = tmpResult();
              iter2 = iter3;
              let tmp11 = value;
              let tmp12 = tmp8;
              let tmp5 = tmp4;
              continue;
            }
            let obj = {};
            let tmp13 = callback;
            obj.step = callback(tmp10);
            let tmp14 = constants2;
            obj.actionType = constants2.RESPONSE_ERROR;
            let items1 = [tmp8, ];
            let tmp15 = require;
            let tmp16 = dependencyMap;
            let num = 5;
            let obj2 = require(dependencyMap[5]);
            items1[1] = obj2.getCommonErrorDetails(code.error_code);
            obj.details = items1;
            let tmp17 = arg1(obj);
            let navigateResult = navigate.navigate(tmp10);
          }
          let iter4 = tmp32();
          iter5 = iter4;
        }
      }
      if (tmp19) {
        obj = { step, actionType: constants2.RESPONSE_ERROR };
        const items2 = [require(dependencyMap[5]).getCommonErrorDetails(code.error_code)];
        obj.details = items2;
        arg1(obj);
        const obj4 = require(dependencyMap[5]);
      }
    }
  }
  obj = { step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED };
  arg1(obj);
  navigate.push(require(dependencyMap[2]).AuthStates.AGE_GATE_UNDERAGE, { -1395348308: null, 1454072419: null });
};
