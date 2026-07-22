// Module ID: 7789
// Function ID: 62182
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7789 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setComponentState(messageId, componentId, state) {
  let map = importDefaultResult.get(messageId);
  if (null == map) {
    const _Map = Map;
    map = new Map();
  }
  const result = map.set(componentId, state);
  const result1 = importDefaultResult.set(messageId, map);
  closure_6 = closure_6 + 1;
}
function deleteStatesForMessageId(id) {
  const value = importDefaultResult1.get(id);
  if (null != value) {
    importDefaultResult2.delete(value);
  }
  importDefaultResult1.delete(id);
  importDefaultResult.delete(id);
  closure_6 = closure_6 + 1;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult(196606);
let closure_6 = 0;
let importDefaultResult1 = importDefault(dependencyMap[5]);
importDefaultResult1 = new importDefaultResult1(196606);
let importDefaultResult2 = importDefault(dependencyMap[5]);
importDefaultResult2 = new importDefaultResult2(196606);
let tmp8 = (Store) => {
  class LocalInteractionComponentStateStore {
    constructor() {
      self = this;
      tmp = LocalInteractionComponentStateStore(this, LocalInteractionComponentStateStore);
      obj = closure_3(LocalInteractionComponentStateStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = LocalInteractionComponentStateStore;
  callback2(LocalInteractionComponentStateStore, Store);
  let obj = {
    key: "getInteractionComponentStates",
    value() {
      return closure_5;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getInteractionComponentStateVersion",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getInteractionComponentState",
    value(arg0, arg1) {
      let value = closure_5.get(arg0);
      let tmp = null;
      if (null != value) {
        value = value.get(arg1);
        let tmp4 = null;
        if (null != value) {
          tmp4 = value;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[2] = obj;
  return callback(LocalInteractionComponentStateStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp8.displayName = "LocalInteractionComponentStateStore";
tmp8 = new tmp8(importDefault(dependencyMap[7]), {
  LOGOUT: function handleInit() {
    importDefaultResult.clear();
    importDefaultResult1.clear();
    importDefaultResult2.clear();
    closure_6 = closure_6 + 1;
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function handleQueueActionComponentState(state) {
    let componentId;
    let messageId;
    let nonce;
    ({ messageId, nonce, componentId } = state);
    const result = importDefaultResult1.set(messageId, nonce);
    const result1 = importDefaultResult2.set(nonce, { messageId, componentId });
    setComponentState(messageId, componentId, state.state);
  },
  SET_INTERACTION_COMPONENT_STATE: function handleSetInteractionComponentState(rootContainerId) {
    setComponentState(rootContainerId.rootContainerId, rootContainerId.componentId, rootContainerId.state);
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    if (importDefaultResult.has(id)) {
      deleteStatesForMessageId(id);
    } else {
      return false;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (importDefaultResult.has(message.id)) {
        deleteStatesForMessageId(message.id);
      }
    }
    return false;
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      const value = importDefaultResult2.get(nonce);
      if (null == value) {
        return false;
      } else {
        importDefaultResult1.delete(value.messageId);
        importDefaultResult2.delete(nonce);
        closure_6 = closure_6 + 1;
      }
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    let componentId;
    let messageId;
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      let value = importDefaultResult2.get(nonce);
      if (null == value) {
        return false;
      } else {
        ({ componentId, messageId } = value);
        value = importDefaultResult.get(messageId);
        if (null != value) {
          if (value.has(componentId)) {
            value.delete(componentId);
            if (0 === value.size) {
              importDefaultResult.delete(messageId);
            }
            closure_6 = closure_6 + 1;
          }
        }
      }
    }
  },
  CLEAR_INTERACTION_MODAL_STATE: function handleClearInteractionModalState(customId) {
    importDefaultResult.delete(customId.customId);
    closure_6 = closure_6 + 1;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/interaction_components/LocalInteractionComponentStateStore.tsx");

export default tmp8;
