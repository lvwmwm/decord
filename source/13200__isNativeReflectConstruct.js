// Module ID: 13200
// Function ID: 100081
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13200 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let obj = { IN_FLIGHT: 0, [0]: "IN_FLIGHT", ERRORED: 1, [1]: "ERRORED", SUCCEEDED: 2, [2]: "SUCCEEDED" };
let tmp2 = (Store) => {
  class InteractionModalStore {
    constructor() {
      self = this;
      tmp = closure_3(this, InteractionModalStore);
      obj = closure_6(InteractionModalStore);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = InteractionModalStore;
  callback2(InteractionModalStore, Store);
  const items = [
    {
      key: "getModalState",
      value(arg0) {
        let tmp = null;
        if (arg0 === closure_8) {
          tmp = closure_9;
        }
        return tmp;
      }
    }
  ];
  return callback(InteractionModalStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "InteractionModalStore";
obj = {
  LOGOUT: function handleInit() {
    let closure_8 = null;
    let closure_9 = null;
    let closure_10 = null;
    let closure_11 = null;
    let closure_12 = null;
    return true;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(nonce) {
    if (nonce.nonce === closure_12) {
      importDefault(dependencyMap[9]).deleteMessage(closure_11, closure_10, true);
      closure_10 = null;
      closure_11 = null;
      closure_12 = null;
      const obj = importDefault(dependencyMap[9]);
    }
    return false;
  },
  INTERACTION_IFRAME_MODAL_CREATE: function handleInteractionIframeModalCreate(nonce) {
    if (nonce.nonce === closure_12) {
      importDefault(dependencyMap[9]).deleteMessage(closure_11, closure_10, true);
      closure_10 = null;
      closure_11 = null;
      closure_12 = null;
      const obj = importDefault(dependencyMap[9]);
    }
    return false;
  },
  INTERACTION_QUEUE: function handleInteractionQueue(nonce) {
    let data;
    let preflight;
    nonce = nonce.nonce;
    const arg1 = nonce;
    ({ data, preflight } = nonce);
    let importDefault;
    const interactionType = data.interactionType;
    if (arg1(dependencyMap[5]).InteractionTypes.APPLICATION_COMMAND === interactionType) {
      const messageId = nonce.messageId;
      const channelId = data.channelId;
      return false;
    } else if (arg1(dependencyMap[5]).InteractionTypes.MODAL_SUBMIT === interactionType) {
      let tmp6 = null == nonce;
      if (!tmp6) {
        tmp6 = IN_FLIGHT === obj.ERRORED;
      }
      if (!tmp6) {
        tmp6 = IN_FLIGHT === obj.SUCCEEDED;
      }
      importDefault(dependencyMap[6])(tmp6, "cannot submit multiple modals at once");
      const IN_FLIGHT = obj.IN_FLIGHT;
      function startTimeout(arg0) {
        const timerId = setTimeout(() => {
          let tmp = closure_8 === callback;
          if (tmp) {
            tmp = closure_9 === constants.IN_FLIGHT;
          }
          if (tmp) {
            callback(closure_2[7]).setFailed(callback);
            const obj = callback(closure_2[7]);
          }
        }, arg0);
      }
      importDefault = startTimeout;
      if (null != preflight) {
        startTimeout(2 * importDefault(dependencyMap[8]).Millis.MINUTE);
        preflight.then(() => startTimeout(10 * startTimeout(closure_2[8]).Millis.SECOND)).catch(() => nonce(closure_2[7]).setFailed(nonce));
        const nextPromise = preflight.then(() => startTimeout(10 * startTimeout(closure_2[8]).Millis.SECOND));
      } else {
        startTimeout(10 * importDefault(dependencyMap[8]).Millis.SECOND);
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
tmp2 = new tmp2(importDefault(dependencyMap[11]), obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/interaction_components/InteractionModalStore.tsx");

export default tmp2;
export const InteractionModalState = obj;
