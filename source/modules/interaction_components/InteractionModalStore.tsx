// Module ID: 13383
// Function ID: 102642
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1881, 44, 7890, 664, 6691, 566, 686, 2]

// Module 13383 (_isNativeReflectConstruct)
import invariant from "invariant";
import _fetchMessageInteractionData from "_fetchMessageInteractionData";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { IN_FLIGHT: 0, [0]: "IN_FLIGHT", ERRORED: 1, [1]: "ERRORED", SUCCEEDED: 2, [2]: "SUCCEEDED" };
let tmp2 = ((Store) => {
  class InteractionModalStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, InteractionModalStore);
      obj = outer1_6(InteractionModalStore);
      tmp2 = outer1_5;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(InteractionModalStore, Store);
  const items = [
    {
      key: "getModalState",
      value(arg0) {
        let tmp = null;
        if (arg0 === outer1_8) {
          tmp = outer1_9;
        }
        return tmp;
      }
    }
  ];
  return callback(InteractionModalStore, items);
})(require("initialize").Store);
tmp2.displayName = "InteractionModalStore";
obj = {
  LOGOUT: function handleInit() {
    let c8 = null;
    let c9 = null;
    let c10 = null;
    let c11 = null;
    let c12 = null;
    return true;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(nonce) {
    if (nonce.nonce === c12) {
      importDefault(6691).deleteMessage(c11, c10, true);
      c10 = null;
      c11 = null;
      c12 = null;
      const obj = importDefault(6691);
    }
    return false;
  },
  INTERACTION_IFRAME_MODAL_CREATE: function handleInteractionIframeModalCreate(nonce) {
    if (nonce.nonce === c12) {
      importDefault(6691).deleteMessage(c11, c10, true);
      c10 = null;
      c11 = null;
      c12 = null;
      const obj = importDefault(6691);
    }
    return false;
  },
  INTERACTION_QUEUE: function handleInteractionQueue(nonce) {
    let data;
    let preflight;
    nonce = nonce.nonce;
    ({ data, preflight } = nonce);
    let startTimeout;
    const interactionType = data.interactionType;
    if (nonce(1881).InteractionTypes.APPLICATION_COMMAND === interactionType) {
      const messageId = nonce.messageId;
      const channelId = data.channelId;
      return false;
    } else if (nonce(1881).InteractionTypes.MODAL_SUBMIT === interactionType) {
      let tmp6 = null == nonce;
      if (!tmp6) {
        tmp6 = IN_FLIGHT === obj.ERRORED;
      }
      if (!tmp6) {
        tmp6 = IN_FLIGHT === obj.SUCCEEDED;
      }
      startTimeout(44)(tmp6, "cannot submit multiple modals at once");
      IN_FLIGHT = obj.IN_FLIGHT;
      startTimeout = function startTimeout(arg0) {
        const timerId = setTimeout(() => {
          let tmp = nonce === outer1_0;
          if (tmp) {
            tmp = IN_FLIGHT === outer2_13.IN_FLIGHT;
          }
          if (tmp) {
            nonce(outer2_2[7]).setFailed(outer1_0);
            const obj = nonce(outer2_2[7]);
          }
        }, arg0);
      };
      if (null != preflight) {
        startTimeout(2 * startTimeout(664).Millis.MINUTE);
        preflight.then(() => startTimeout(10 * startTimeout(outer1_2[8]).Millis.SECOND)).catch(() => nonce(outer1_2[7]).setFailed(nonce));
        const nextPromise = preflight.then(() => startTimeout(10 * startTimeout(outer1_2[8]).Millis.SECOND));
      } else {
        startTimeout(10 * startTimeout(664).Millis.SECOND);
      }
      return true;
    } else {
      return false;
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    let flag = null != nonce;
    if (flag) {
      flag = nonce === closure_8;
    }
    if (flag) {
      const SUCCEEDED = obj.SUCCEEDED;
      flag = true;
    }
    return flag;
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    let flag = null != nonce;
    if (flag) {
      flag = nonce === closure_8;
    }
    if (flag) {
      const ERRORED = obj.ERRORED;
      flag = true;
    }
    return flag;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/interaction_components/InteractionModalStore.tsx");

export default tmp2;
export const InteractionModalState = obj;
