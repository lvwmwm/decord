// Module ID: 7629
// Function ID: 61107
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1194, 1348, 664, 4357, 1881, 6691, 566, 686, 2]

// Module 7629 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";

const require = arg1;
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
  } else if (null == dependencyMap[nonce]) {
    return false;
  } else {
    if (null != obj.onSuccess) {
      obj.onSuccess();
    }
    deleteNonce(nonce);
  }
}
function deleteNonce(nonce) {
  if (null == dependencyMap3[nonce]) {
    delete tmp4[tmp2];
    if (null != dependencyMap2[nonce]) {
      delete tmp[tmp4];
    }
    delete tmp[tmp2];
    const obj = {};
    const _Date = Date;
    obj.insertedAt = Date.now();
    obj.nonce = nonce;
    obj.messageId = dependencyMap2[nonce];
    obj.interaction = dependencyMap[nonce];
    dependencyMap3[nonce] = obj;
  } else {
    delete tmp3[tmp2];
  }
}
let result = 5 * require("set").Millis.MINUTE;
const result1 = 10 * require("set").Millis.SECOND;
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let c16;
let c17;
let closure_18 = {};
let tmp4 = ((Store) => {
  class InteractionStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, InteractionStore);
      obj = outer1_6(InteractionStore);
      tmp2 = outer1_5;
      if (outer1_19()) {
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
  callback2(InteractionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getInteraction",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_14[arg0.id]) {
        tmp2 = outer1_13[tmp];
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessageInteractionStates",
    value() {
      const obj = {};
      const entries = Object.entries(outer1_13);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp = outer1_8;
        let tmp2 = outer1_8(entries[num], 2);
        let tmp3 = outer1_15;
        let tmp4 = outer1_15[tmp2[0]];
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
        tmp2 = null != outer1_13[tmp];
      }
      if (tmp2) {
        tmp2 = outer1_13[tmp].state !== InteractionStore(outer1_2[9]).InteractionState.FAILED;
      }
      if (!tmp2) {
        let tmp8 = null != outer1_13[arg1];
        if (tmp8) {
          tmp8 = outer1_13[arg1].state !== InteractionStore(outer1_2[9]).InteractionState.FAILED;
        }
        tmp2 = tmp8;
      }
      return !tmp2;
    }
  };
  items[4] = {
    key: "getIFrameModalApplicationId",
    value() {
      return outer1_17;
    }
  };
  items[5] = {
    key: "getIFrameModalKey",
    value() {
      return outer1_16;
    }
  };
  items[6] = {
    key: "getInteractionDebugContext",
    value(arg0) {
      if (null != arg0) {
        if (null != outer1_13[arg0]) {
          let obj = { interaction: tmp2, messageId: outer1_15[arg0] };
          return obj;
        } else {
          let tmp5;
          if (null != outer1_18[arg0]) {
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
})(require("initialize").Store);
tmp4.displayName = "InteractionStore";
tmp4 = new tmp4(require("dispatcher"), {
  LOGOUT: function handleInit() {
    let closure_13 = {};
    let closure_14 = {};
    let closure_15 = {};
    let closure_18 = {};
    const timerId = setInterval(() => {
      const timestamp = Date.now();
      const entries = Object.entries(closure_18);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp4 = outer1_8;
        let tmp5 = outer1_8(entries[num], 2);
        let first = tmp5[0];
        let tmp7 = outer1_12;
        if (timestamp - tmp5[1].insertedAt > outer1_12) {
          let tmp8 = closure_18;
          delete tmp[tmp2];
        }
      }
    }, closure_11);
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
    closure_13[nonce] = { state: require(4357) /* InteractionState */.InteractionState.QUEUED, data, onCreate, onCancel, onSuccess, onFailure };
  },
  INTERACTION_CREATE: function handleInteractionCreate(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      if (null != dependencyMap[nonce]) {
        if (obj.state === require(4357) /* InteractionState */.InteractionState.QUEUED) {
          obj.state = require(4357) /* InteractionState */.InteractionState.CREATED;
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
    } else if (null == dependencyMap[nonce]) {
      return false;
    } else {
      if (null != obj2.onFailure) {
        obj2.onFailure(errorCode, errorMessage, status, reasonCode);
      }
      if (obj2.data.interactionType === require(1881) /* PermissionOverwriteType */.InteractionTypes.APPLICATION_COMMAND) {
        deleteNonce(nonce);
      } else {
        const obj = {};
        const merged = Object.assign(obj2);
        obj["state"] = require(4357) /* InteractionState */.InteractionState.FAILED;
        obj["errorCode"] = errorCode;
        obj["errorMessage"] = errorMessage;
        obj["reasonCode"] = reasonCode;
        dependencyMap[nonce] = obj;
      }
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    if (null == message.nonce) {
      return false;
    } else if (null == dependencyMap[message.nonce]) {
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
        let tmp3 = require;
        let tmp4 = dependencyMap;
        if (tmp2[1].state === require(4357) /* InteractionState */.InteractionState.FAILED) {
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
    let c16;
    let c17;
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
        if (null == dependencyMap3[found.nonce]) {
          messageId = dependencyMap2[found.nonce];
          interaction = dependencyMap[found.nonce];
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
            importDefault(6691).deleteMessage(interaction.data.channelId, messageId, true);
            const obj = importDefault(6691);
          }
        }
        tmp4 = null != interaction && null != messageId;
      }
    }
  }
});
const result2 = require("_possibleConstructorReturn").fileFinishedImporting("modules/interactions/InteractionStore.tsx");

export default tmp4;
export const STALE_INTERACTION_INTERVAL = result;
export const STALE_INTERACTION_DURATION = result1;
