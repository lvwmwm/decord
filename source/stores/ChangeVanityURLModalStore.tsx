// Module ID: 16338
// Function ID: 127553
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 566, 686, 2]

// Module 16338 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { FormStates } from "ME";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_8 = {};
let CLOSED = FormStates.CLOSED;
let c10 = null;
let tmp2 = ((Store) => {
  class ChangeVanityURLModalStore {
    constructor() {
      self = this;
      tmp = ChangeVanityURLModalStore(this, ChangeVanityURLModalStore);
      obj = outer1_3(ChangeVanityURLModalStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChangeVanityURLModalStore, Store);
  let obj = {
    key: "isOpen",
    value() {
      return outer1_9 !== outer1_5.CLOSED;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getProps",
    value() {
      return { submitting: outer1_9 === outer1_5.SUBMITTING, errorDetails: outer1_10, errors: outer1_8, guildId: outer1_6, code: outer1_7 };
    }
  };
  items[1] = obj;
  return callback(ChangeVanityURLModalStore, items);
})(require("initialize").Store);
tmp2.displayName = "ChangeVanityURLModalStore";
tmp2 = new tmp2(require("dispatcher"), {
  CHANGE_VANITY_URL_MODAL_OPEN: function handleOpen(arg0) {
    let closure_6;
    let closure_7;
    const OPEN = FormStates.OPEN;
    ({ guildId: closure_6, code: closure_7 } = arg0);
    let c10 = null;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT: function handleSubmit() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE: function handleSubmitFailure(error) {
    const OPEN = FormStates.OPEN;
    error = error.error;
  },
  CHANGE_VANITY_URL_MODAL_CLOSE: function handleClose() {
    const CLOSED = FormStates.CLOSED;
    let c6 = null;
    let c7 = null;
    let c10 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ChangeVanityURLModalStore.tsx");

export default tmp2;
