// Module ID: 18828
// Function ID: 18829
// Name: EmbeddedAppShimManager
// Dependencies: [32, 6776, 1084, 18829, 11471, 18832, 7216, 1120, 2]

// Module 18828 (EmbeddedAppShimManager)
import Constants from "Constants" /* 1084 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators" /* 11471 */;
import protocol from "protocol" /* 18829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import FramesStore from "FramesStore" /* 6776 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;
import size from "module_2" /* 2 */;

let set;

function createParentStateMessage(iframeId) {
  let obj;
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null == frameByIframeId) {
    let value = map1.get(iframeId);
    if (value == null) {
      value = closure_5;
    }
    obj = value;
  } else {
    obj = { muted: frameByIframeId.data.muted };
  }
  const result = map1.set(iframeId, obj);
  const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
  return obj2;
}
function handleShimPipeOpen(iframeId) {
  iframeId = iframeId.iframeId;
  let obj = map;
  const pipe = iframeId.pipe;
  let value = map.get(iframeId);
  if (null == value) {
    let obj3;
    let obj2 = {
      onConnect(dispatch) {
          let obj;
          dispatch = dispatch.dispatch;
          const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
          if (null == frameByIframeId) {
            let value = map1.get(tmp);
            if (value == null) {
              value = closure_5;
            }
            obj = value;
          } else {
            obj = { muted: frameByIframeId.data.muted };
          }
          const result = map1.set(tmp, obj);
          const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj };
          dispatch(obj2);
        },
      onMessage(type) {
          if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
            const tmp2Result = EmbeddedAppShimActionCreators;
            tmp2Result.updateShimState(iframeId, type.state);
          } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
            const tmp2Result2 = EmbeddedAppShimActionCreators;
            tmp2Result2.disconnectShim(iframeId);
          }
        }
    };
    const obj4 = iframeId(18832);
    const embeddedAppShimHost = obj4.createEmbeddedAppShimHost(obj2);
    let result = obj.set(iframeId, embeddedAppShimHost);
    set = map1.set;
    let frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
    const obj6 = map1;
    if (null == frameByIframeId) {
      let value2 = obj6.get(iframeId);
      if (value2 == null) {
        value2 = closure_5;
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
let closure_5 = { muted: false };
let map = new Map();
const map1 = new Map();
class EmbeddedAppShimManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { EMBEDDED_APP_SHIM_PIPE_OPEN: handleShimPipeOpen };
    applyArgumentsResult.actions = obj;
    map = new Map();
    applyArgumentsResult.stores = map.set(FramesStore, updateParentStates);
    return applyArgumentsResult;
  }
  _initialize() {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
  }
  _terminate() {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.unsubscribe(ComponentActions.IFRAME_UNMOUNT, handleIFrameUnmount);
    const values = map.values();
    for (const item10017 of values) {
      let closeResult = item10017.close();
      continue;
    }
    map.clear();
  }
}
const prototype = EmbeddedAppShimManager.prototype;
const embeddedAppShimManager = new EmbeddedAppShimManager();
let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx");

export default embeddedAppShimManager;
