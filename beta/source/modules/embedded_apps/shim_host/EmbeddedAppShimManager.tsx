// Module ID: 18783
// Function ID: 18784
// Name: EmbeddedAppShimManager
// Dependencies: [32, 6775, 1087, 18784, 11467, 7214, 1123, 2]

// Module 18783 (EmbeddedAppShimManager)
import Constants from "Constants" /* 1087 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators" /* 11467 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import FramesStore from "FramesStore" /* 6775 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

function getParentState(iframeId) {
  let tmp2;
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null != frameByIframeId) {
    tmp2 = { muted: frameByIframeId.data.muted };
    const obj = { muted: frameByIframeId.data.muted };
  } else {
    tmp2 = closure_5;
  }
  return tmp2;
}
function handleShimPipeOpen(iframeId) {
  iframeId = iframeId.iframeId;
  let obj = map;
  const pipe = iframeId.pipe;
  let value = map.get(iframeId);
  if (null == value) {
    let tmp;
    const createEmbeddedAppShimHost = iframeId(18784).createEmbeddedAppShimHost;
    iframeId(18784);
    const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
    if (null != frameByIframeId) {
      tmp = { muted: frameByIframeId.data.muted };
      const obj2 = { muted: frameByIframeId.data.muted };
    } else {
      tmp = closure_5;
    }
    const obj3 = {
      onChildState(state) {
          const obj = EmbeddedAppShimActionCreators;
          return obj.updateShimState(iframeId, state);
        },
      onDisconnect() {
          const obj = EmbeddedAppShimActionCreators;
          return obj.disconnectShim(iframeId);
        }
    };
    const embeddedAppShimHost = createEmbeddedAppShimHost(tmp, obj3);
    const result = obj.set(iframeId, embeddedAppShimHost);
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
    value.close();
  }
}
function updateParentStates() {
  let obj;
  let tmp6;
  const tmp2 = map[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, obj] = tmp5;
    let tmp7 = tmp6;
    if (null != FramesStore.getFrameByIframeId(tmp6)) {
      let setParentStateResult = obj.setParentState(getParentState(tmp7));
    }
    continue;
  }
}
const ComponentActions = Constants.ComponentActions;
let closure_5 = { muted: false };
let map = new Map();
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
