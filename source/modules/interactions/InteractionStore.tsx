// Module ID: 7623
// Function ID: 61060
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7623 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function markInteractionByNonceCompleted(nonce) {
  if (null == nonce) {
    return false;
  } else if (null == closure_13[nonce]) {
    return false;
  } else {
    if (null != obj.onSuccess) {
      obj.onSuccess();
    }
    deleteNonce(nonce);
  }
}
function deleteNonce(nonce) {
  if (null == closure_18[nonce]) {
    delete r4[r2];
    if (null != closure_15[nonce]) {
      delete r1[r4];
    }
    delete r1[r2];
    const obj = {};
    const _Date = Date;
    obj.insertedAt = Date.now();
    obj.nonce = nonce;
    obj.messageId = closure_15[nonce];
    obj.interaction = closure_13[nonce];
    closure_18[nonce] = obj;
  } else {
    delete r3[r2];
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const result = 5 * importDefault(dependencyMap[8]).Millis.MINUTE;
const result1 = 10 * importDefault(dependencyMap[8]).Millis.SECOND;
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let closure_16;
let closure_17;
let closure_18 = {};
let tmp4 = (Store) => {
  class InteractionStore {
    constructor() {
      self = this;
      tmp = closure_3(this, InteractionStore);
      obj = closure_6(InteractionStore);
      tmp2 = closure_5;
      if (closure_19()) {
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
  const arg1 = InteractionStore;
  callback2(InteractionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getInteraction",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_14[arg0.id]) {
        tmp2 = closure_13[tmp];
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessageInteractionStates",
    value() {
      const obj = {};
      const entries = Object.entries(closure_13);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp = callback3;
        let tmp2 = callback3(entries[num], 2);
        let tmp3 = closure_15;
        let tmp4 = closure_15[tmp2[0]];
        if (null != tmp4) {
          obj[tmp4] = tmp2[1].state;
        }
      }
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "canQueueInteraction",
    value(arg0, arg1) {
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = null != closure_13[tmp];
      }
      if (tmp2) {
        tmp2 = closure_13[tmp].state !== InteractionStore(closure_2[9]).InteractionState.FAILED;
      }
      if (!tmp2) {
        let tmp8 = null != closure_13[arg1];
        if (tmp8) {
          tmp8 = closure_13[arg1].state !== InteractionStore(closure_2[9]).InteractionState.FAILED;
        }
        tmp2 = tmp8;
      }
      return !tmp2;
    }
  };
  items[4] = {
    key: "getIFrameModalApplicationId",
    value() {
      return closure_17;
    }
  };
  items[5] = {
    key: "getIFrameModalKey",
    value() {
      return closure_16;
    }
  };
  items[6] = {
    key: "getInteractionDebugContext",
    value(arg0) {
      if (null != arg0) {
        if (null != closure_13[arg0]) {
          let obj = { interaction: tmp2, messageId: closure_15[arg0] };
          return obj;
        } else {
          let tmp5;
          if (null != closure_18[arg0]) {
            obj = {};
            ({ interaction: obj.interaction, messageId: obj.messageId } = tmp4);
            tmp5 = obj;
          }
          return tmp5;
        }
      }
    }
  };
  return callback(InteractionStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp4.displayName = "InteractionStore";
tmp4 = new tmp4(importDefault(dependencyMap[13]), {
  LOGOUT: function handleInit() {
    let closure_13 = {};
    let closure_14 = {};
    let closure_15 = {};
    let closure_18 = {};
    const timerId = setInterval(() => {
      const timestamp = Date.now();
      const entries = Object.entries(closure_18);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp2 = callback;
        let tmp3 = callback(entries[num], 2);
        let first = tmp3[0];
        let tmp5 = closure_12;
        if (timestamp - tmp3[1].insertedAt > closure_12) {
          let tmp6 = closure_18;
          delete r1[r9];
        }
      }
    }, result);
  },
  INTERACTION_QUEUE: function handleInteractionQueue(arg0) {
    let data;
    let messageId;
    let nonce;
    let onCancel;
    let onCreate;
    let onFailure;
    let onSuccess;
    ({ nonce, messageId } = arg0);
    ({ data, onCreate, onCancel, onSuccess, onFailure } = arg0);
    if (null != messageId) {
      closure_14[messageId] = nonce;
      closure_15[nonce] = messageId;
    }
    closure_13[nonce] = { state: arg1(dependencyMap[9]).InteractionState.QUEUED, data, onCreate, onCancel, onSuccess, onFailure };
  },
  INTERACTION_CREATE: function handleInteractionCreate(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      if (null != closure_13[nonce]) {
        if (obj.state === arg1(dependencyMap[9]).InteractionState.QUEUED) {
          obj.state = arg1(dependencyMap[9]).InteractionState.CREATED;
          if (null != obj.onCreate) {
            obj.onCreate(tmp);
          }
        }
      }
      return false;
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    markInteractionByNonceCompleted(nonce.nonce);
  },
  INTERACTION_FAILURE: function handleInteractionFailure(arg0) {
    let errorCode;
    let errorMessage;
    let nonce;
    let reasonCode;
    let status;
    ({ nonce, errorCode, errorMessage, status, reasonCode } = arg0);
    if (null == nonce) {
      return false;
    } else if (null == closure_13[nonce]) {
      return false;
    } else {
      if (null != obj2.onFailure) {
        obj2.onFailure(errorCode, errorMessage, status, reasonCode);
      }
      if (obj2.data.interactionType === arg1(dependencyMap[10]).InteractionTypes.APPLICATION_COMMAND) {
        deleteNonce(nonce);
      } else {
        const obj = {};
        const merged = Object.assign(obj2);
        obj["state"] = arg1(dependencyMap[9]).InteractionState.FAILED;
        obj["errorCode"] = errorCode;
        obj["errorMessage"] = errorMessage;
        obj["reasonCode"] = reasonCode;
        closure_13[nonce] = obj;
      }
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    if (null == message.nonce) {
      return false;
    } else if (null == closure_13[message.nonce]) {
      return false;
    } else {
      if (null != obj.onSuccess) {
        obj.onSuccess();
      }
      deleteNonce(message.nonce);
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    if (null == channel.getChannel(channelId.channelId)) {
      return false;
    } else {
      const _Object = Object;
      const entries = Object.entries(closure_13);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp = callback3;
        let tmp2 = callback3(entries[num], 2);
        let tmp3 = arg1;
        let tmp4 = dependencyMap;
        if (tmp2[1].state === arg1(dependencyMap[9]).InteractionState.FAILED) {
          let tmp5 = deleteNonce;
          let tmp6 = deleteNonce(tmp2[0]);
        }
      }
    }
  },
  INTERACTION_IFRAME_MODAL_CREATE: function handleIFrameModalCreate(application) {
    const id = application.application.id;
    markInteractionByNonceCompleted(application.nonce);
  },
  INTERACTION_IFRAME_MODAL_CLOSE: function handleIFrameModalClose() {
    let closure_16;
    let closure_17;
  },
  INTERACTION_IFRAME_MODAL_KEY_CREATE: function handleIFrameModalKeyCreate(modalKey) {
    modalKey = modalKey.modalKey;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(nonce) {
    markInteractionByNonceCompleted(nonce.nonce);
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    let interaction;
    let messageId;
    const participants = instance.instance.participants;
    const sessionId = store.getSessionId();
    const importDefault = store.getId();
    const found = participants.find((user_id) => {
      let tmp = user_id.user_id === closure_1;
      if (tmp) {
        tmp = user_id.session_id === closure_0;
      }
      return tmp;
    });
    if (null != found) {
      if (null != found.nonce) {
        if (null == closure_18[found.nonce]) {
          messageId = closure_15[found.nonce];
          interaction = closure_13[found.nonce];
        } else {
          ({ messageId, interaction } = tmp12);
        }
        if (tmp4) {
          deleteNonce(found.nonce);
          let tmp7 = null != messageId;
          if (tmp7) {
            tmp7 = "channelId" in interaction.data;
          }
          if (tmp7) {
            importDefault(dependencyMap[11]).deleteMessage(interaction.data.channelId, messageId, true);
            const obj = importDefault(dependencyMap[11]);
          }
        }
        const tmp4 = null != interaction && null != messageId;
      }
    }
  }
});
const result2 = arg1(dependencyMap[14]).fileFinishedImporting("modules/interactions/InteractionStore.tsx");

export default tmp4;
export const STALE_INTERACTION_INTERVAL = result;
export const STALE_INTERACTION_DURATION = result1;
