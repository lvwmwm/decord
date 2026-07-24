// Module ID: 14826
// Function ID: 113057
// Name: _createForOfIteratorHelperLoose
// Dependencies: [14779, 653, 668, 9245, 14777, 14786, 2]
// Exports: default

// Module 14826 (_createForOfIteratorHelperLoose)
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AbortCodes } from "ME";

let closure_3;
let closure_4;
let closure_5;
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
function getRedirectStepForErrorKey(value) {
  if ("email" !== value) {
    if ("phoneToken" !== value) {
      if ("global_name" === value) {
        return require(668) /* keys */.AuthStates.REGISTER_DISPLAY_NAME;
      } else {
        if ("username" !== value) {
          if ("password" !== value) {
            return null;
          }
        }
        return require(668) /* keys */.AuthStates.REGISTER_ACCOUNT_INFORMATION;
      }
    }
  }
  return require(668) /* keys */.AuthStates.REGISTER_IDENTITY;
}
({ RegisterTransitionSteps: closure_3, RegistrationTransitionActionTypes: closure_4, authStateToRegisterTransitionStep: closure_5 } = RegistrationTransitionActionTypes);
let closure_7 = { [require(668).AuthStates.REGISTER_IDENTITY]: ["email", "phoneToken"], [require(668).AuthStates.REGISTER_DISPLAY_NAME]: ["global_name"], [require(668).AuthStates.REGISTER_ACCOUNT_INFORMATION]: ["username", "password"] };
const result = require("keys").fileFinishedImporting("modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx");

export default function handleRegisterErrorRedirection(navigate, arg1, code, step) {
  if (null == importDefault(9245)("date_of_birth", code)) {
    const _Number = Number;
    if (Number(code.code) !== AbortCodes.UNDER_MINIMUM_AGE) {
      const tmp32 = _createForOfIteratorHelperLoose(require(14777) /* getRegistrationSteps */.getRegistrationSteps());
      const iter6 = tmp32();
      let iter5 = iter6;
      if (!iter6.done) {
        while (true) {
          let tmp2 = table;
          let items = table[iter5.value];
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
              let tmp8 = importDefault(9245)(value, code);
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
              tmp5 = tmp4;
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
            let obj2 = require(14786) /* trackRegTransition */;
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
        const items2 = [require(14786) /* trackRegTransition */.getCommonErrorDetails(code.error_code)];
        obj.details = items2;
        arg1(obj);
        const obj4 = require(14786) /* trackRegTransition */;
      }
    }
  }
  obj = { step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED };
  arg1(obj);
  navigate.push(require(668) /* keys */.AuthStates.AGE_GATE_UNDERAGE, { fromRegister: true, disableSwipe: true });
};
