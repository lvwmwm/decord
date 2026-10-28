// Module ID: 19080
// Function ID: 19081
// Name: EmbeddedAppShimManager
// Dependencies: [32, 6810, 1084, 19081, 19084, 11509, 19085, 7250, 1120, 2]

// Module 19080 (EmbeddedAppShimManager)
import Constants from "Constants" /* 1084 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators" /* 11509 */;
import protocol from "protocol" /* 19081 */;
import embeddedAppShimKeybindsDefault from "embeddedAppShimKeybinds" /* 19084 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import FramesStore from "FramesStore" /* 6810 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
import size from "module_2" /* 2 */;

let set;

function createParentStateMessage(iframeId) {
  let obj;
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null == frameByIframeId) {
    let value = map1.get(iframeId);
    if (value == null) {
      value = closure_6;
    }
    obj = value;
  } else {
    obj = { muted: frameByIframeId.data.muted };
  }
  const result = map1.set(iframeId, obj);
  const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
  return obj2;
}
function createKeybindsMessage() {
  let obj2;
  const obj = { type: protocol.ParentToChildEvent.KEYBINDS_UPDATED, keybinds: obj2.getKeybinds() };
  obj2 = embeddedAppShimKeybindsDefault;
  return obj;
}
function handleShimPipeOpen(iframeId) {
  iframeId = iframeId.iframeId;
  let obj = map;
  const pipe = iframeId.pipe;
  let value = map.get(iframeId);
  if (null == value) {
    let obj3;
    let obj4 = iframeId(19085);
    let obj2 = {
      onConnect(dispatch) {
          let obj;
          let obj4;
          dispatch = dispatch.dispatch;
          const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
          if (null == frameByIframeId) {
            let value = map1.get(tmp);
            if (value == null) {
              value = closure_6;
            }
            obj = value;
          } else {
            obj = { muted: frameByIframeId.data.muted };
          }
          const result = map1.set(tmp, obj);
          const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
          dispatch(obj2);
          const dispatch2 = dispatch.dispatch;
          const obj3 = { type: protocol.ParentToChildEvent.KEYBINDS_UPDATED, keybinds: obj4.getKeybinds() };
          obj4 = embeddedAppShimKeybindsDefault;
          dispatch2(obj3);
        },
      onMessage(type) {
          if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
            const tmp2Result = EmbeddedAppShimActionCreators;
            tmp2Result.updateShimState(iframeId, type.state);
          } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
            const obj2 = embeddedAppShimKeybindsDefault;
            obj2.releaseHeldKeys(iframeId);
            const tmp2Result2 = EmbeddedAppShimActionCreators;
            tmp2Result2.disconnectShim(iframeId);
          } else if (type.type === protocol.ChildToParentEvent.KEYBIND_CAPTURED) {
            const obj = embeddedAppShimKeybindsDefault;
            const result = obj.replayCapturedKeybind(tmp, type.keybind);
          }
        }
    };
    const embeddedAppShimHost = obj4.createEmbeddedAppShimHost(obj2);
    let result = obj.set(iframeId, embeddedAppShimHost);
    set = map1.set;
    let frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
    const obj6 = map1;
    if (null == frameByIframeId) {
      let value2 = obj6.get(iframeId);
      if (value2 == null) {
        value2 = closure_6;
      }
      obj3 = value2;
    } else {
      obj3 = { muted: frameByIframeId.data.muted };
    }
    const result1 = set(iframeId, obj3);
    value = embeddedAppShimHost;
  }
  value.offer(pipe);
}
function handleIFrameUnmount(id) {
  id = id.id;
  const value = map.get(id);
  const obj = map;
  if (null != value) {
    obj.delete(id);
    map1.delete(id);
    value.close();
  }
}
function updateKeybinds() {
  const tmp = createKeybindsMessage();
  const values = map.values();
  for (const item10010 of values) {
    let dispatchResult = item10010.dispatch(tmp);
    continue;
  }
}
function updateParentStates() {
  const tmp2 = map[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let obj = tmp5[1];
    let dispatchResult = obj.dispatch(createParentStateMessage(tmp5[0]));
    continue;
  }
}
const ComponentActions = Constants.ComponentActions;
let closure_6 = { muted: false };
let map = new Map();
const map1 = new Map();
class EmbeddedAppShimManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { EMBEDDED_APP_SHIM_PIPE_OPEN: handleShimPipeOpen };
    applyArgumentsResult.actions = obj;
    map = new Map();
    applyArgumentsResult.stores = map.set(FramesStore, updateParentStates);
    applyArgumentsResult._unsubscribeKeybinds = null;
    return applyArgumentsResult;
  }
  _initialize() {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
    const obj = embeddedAppShimKeybindsDefault;
    this._unsubscribeKeybinds = obj.subscribe(updateKeybinds);
  }
  _terminate() {
    const self = this;
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.unsubscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
    const _unsubscribeKeybinds = this._unsubscribeKeybinds;
    if (_unsubscribeKeybinds != null) {
      _unsubscribeKeybinds();
    }
    self._unsubscribeKeybinds = null;
    const values = map.values();
    for (const item10021 of values) {
      let closeResult = item10021.close();
      continue;
    }
    map.clear();
  }
}
const prototype = EmbeddedAppShimManager.prototype;
const embeddedAppShimManager = new EmbeddedAppShimManager();
let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx");

export default embeddedAppShimManager;
