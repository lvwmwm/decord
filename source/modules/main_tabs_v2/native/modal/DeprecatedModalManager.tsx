// Module ID: 16193
// Function ID: 125658
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 8439, 1194, 8482, 16194, 1342, 653, 3982, 3981, 4339, 9189, 16195, 16196, 16204, 16205, 16486, 16488, 5078, 2]

// Module 16193 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import isEligibleForSafetyFlowsExperiment from "isEligibleForSafetyFlowsExperiment";
import handleTouch from "handleTouch";
import close from "close";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import ME from "ME";
import tmp4 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function handlePushedModal(key) {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    obj = { name: "modal", key: key.key };
    obj = { modal: key };
    obj.params = obj;
    rootNavigationRef.navigate(obj);
  }
}
function handlePoppedModal() {
  require(3981) /* _createForOfIteratorHelperLoose */.popModal();
}
function pushFirstOpenModal(arg0, arg1) {
  let value;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      value = iter.value;
      let isOpenResult;
      if (null != value) {
        if (null != value.isOpen) {
          let tmp3 = APP;
          isOpenResult = value.isOpen(APP, arg1);
        }
      }
      if (null == isOpenResult) {
        break;
      } else if (isOpenResult) {
        break;
      } else {
        let iter2 = tmp();
        iter = iter2;
      }
    }
    const store = value.store;
    let getProps;
    const component = value.getComponent();
    if (null != store) {
      getProps = store.getProps;
    }
    if ("function" === typeof getProps) {
      const store2 = value.store;
      let props = store2.getProps();
    } else {
      props = {};
    }
    const obj = { key: value.key };
    handlePushedModal(importDefault(4339)(component, obj, props));
  }
}
function createPushModalHandler(arg0) {
  let closure_0 = [...arguments];
  return () => {
    outer1_22(closure_0);
  };
}
const UserRequiredActions = ME.UserRequiredActions;
const APP = ME.AppContext.APP;
let obj = {
  key: "EMAIL_VERIFICATION_MODAL_OPEN",
  store: importDefaultResult,
  closable: false,
  center: true,
  isOpen(arg0, action) {
    if (null == action) {
      action = importDefaultResult.getAction();
    }
    let obj = importDefault(9189);
    let result = obj.isFullScreenVerification(action);
    if (result) {
      result = null != token.getToken();
    }
    if (result) {
      obj = { location: "modal-manager-verification" };
      result = !require(16195) /* isEligibleForSafetyFlowsExperiment */.isEligibleForSafetyFlowsExperiment(obj);
      const obj2 = require(16195) /* isEligibleForSafetyFlowsExperiment */;
    }
    return result;
  },
  getComponent() {
    return require(16196) /* PhoneThenEmailInterstitial */.default;
  }
};
obj = {
  key: "USER_REQUIRED_ACTION_UPDATE",
  store: importDefaultResult,
  center: true,
  isOpen(arg0, arg1) {
    let action = arg1;
    if (null == arg1) {
      action = importDefaultResult.getAction();
    }
    return action === UserRequiredActions.AGREEMENTS;
  },
  getComponent() {
    return require(16204) /* handleTouch */.default;
  }
};
tmp4 = new tmp4();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/main_tabs_v2/native/modal/DeprecatedModalManager.tsx");

export default tmp4;
