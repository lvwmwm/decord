// Module ID: 19699
// Function ID: 19700
// Name: EmbeddedAppShimManager
// Dependencies: [6936, 1071, 19700, 19703, 10210, 19704, 19705, 7475, 1107, 2]
// Exports: requestShimLaunchTimings

// Module 19699 (EmbeddedAppShimManager)
import Constants from "Constants" /* 1071 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import EmbeddedAppShimActionCreators from "EmbeddedAppShimActionCreators" /* 10210 */;
import protocol from "protocol" /* 19700 */;
import embeddedAppShimKeybindsDefault from "embeddedAppShimKeybinds" /* 19703 */;
import parseLaunchTimingsDefault from "parseLaunchTimings" /* 19704 */;
import FramesStore from "FramesStore" /* 6936 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
import size from "module_2" /* 2 */;

let closure_7, importDefault;

function sendParentState(iframeId) {
  let tmp4;
  iframeId = iframeId.iframeId;
  const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
  if (null != frameByIframeId) {
    tmp4 = { muted: frameByIframeId.data.muted };
    const obj = { muted: frameByIframeId.data.muted };
  } else {
    const value = map.get(iframeId);
    tmp4 = null != value ? value.parentState : closure_5;
  }
  iframeId.parentState = tmp4;
  const host = iframeId.host;
  const obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: iframeId.parentState };
  host.dispatch(obj2);
}
function createKeybindsMessage() {
  let obj2;
  const obj = { type: protocol.ParentToChildEvent.KEYBINDS_UPDATED, keybinds: obj2.getKeybinds() };
  obj2 = embeddedAppShimKeybindsDefault;
  return obj;
}
function cancelUnansweredLaunchTimingsRequests(launchTimingsRequests) {
  launchTimingsRequests = launchTimingsRequests.launchTimingsRequests;
  const items = [...launchTimingsRequests.values()];
  const launchTimingsRequests2 = launchTimingsRequests.launchTimingsRequests;
  launchTimingsRequests2.clear();
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let tmp2 = iter.next()(null);
    continue;
  }
}
function handleShimPipeOpen(iframeId) {
  let obj3;
  let obj4;
  let tmp3;
  iframeId = iframeId.iframeId;
  let obj = map;
  const pipe = iframeId.pipe;
  let value = map.get(iframeId);
  if (null == value) {
    let obj2 = { iframeId, host: obj4.createEmbeddedAppShimHost(obj3), parentState: tmp3, connected: false, launchTimingsRequests: map };
    obj4 = obj2(19705);
    obj3 = {
      onConnect() {
          let obj4;
          let tmp6;
          obj2.connected = true;
          cancelUnansweredLaunchTimingsRequests(obj2);
          const iframeId = obj2.iframeId;
          const frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
          if (null != frameByIframeId) {
            tmp6 = { muted: frameByIframeId.data.muted };
            const obj = { muted: frameByIframeId.data.muted };
          } else {
            const value = map.get(iframeId);
            tmp6 = null != value ? value.parentState : closure_5;
          }
          obj2.parentState = tmp6;
          const host = tmp.host;
          obj2 = { type: protocol.ParentToChildEvent.STATE_UPDATED, state: obj2.parentState };
          host.dispatch(obj2);
          const host2 = tmp.host;
          const dispatch = host2.dispatch;
          const obj3 = { type: protocol.ParentToChildEvent.KEYBINDS_UPDATED, keybinds: obj4.getKeybinds() };
          obj4 = embeddedAppShimKeybindsDefault;
          dispatch(obj3);
          const obj5 = EmbeddedAppShimActionCreators;
          obj5.shimConnected(obj2.iframeId);
        },
      onMessage(type) {
          if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
            const tmp2Result = EmbeddedAppShimActionCreators;
            tmp2Result.updateShimState(obj2.iframeId, type.state);
          } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
            obj2.connected = false;
            cancelUnansweredLaunchTimingsRequests(obj2);
            obj2 = embeddedAppShimKeybindsDefault;
            obj2.releaseHeldKeys(obj2.iframeId);
            const tmp2Result2 = EmbeddedAppShimActionCreators;
            tmp2Result2.disconnectShim(obj2.iframeId);
          } else if (type.type === protocol.ChildToParentEvent.KEYBIND_CAPTURED) {
            const obj = embeddedAppShimKeybindsDefault;
            const result = obj.replayCapturedKeybind(tmp.iframeId, type.keybind);
          } else if (type.type === protocol.ChildToParentEvent.LAUNCH_TIMINGS_RESPONSE) {
            const launchTimingsRequests = tmp.launchTimingsRequests;
            const value = launchTimingsRequests.get(type.nonce);
            const launchTimingsRequests2 = tmp.launchTimingsRequests;
            launchTimingsRequests2.delete(type.nonce);
            if (null != value) {
              value(parseLaunchTimingsDefault(type.timingsJson));
            }
          }
        }
    };
    let frameByIframeId = FramesStore.getFrameByIframeId(iframeId);
    if (null != frameByIframeId) {
      let obj5 = { muted: frameByIframeId.data.muted };
      tmp3 = obj5;
    } else {
      const value2 = obj.get(iframeId);
      tmp3 = null != value2 ? value2.parentState : closure_5;
    }
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    let tmp6 = map;
    let result = obj.set(iframeId, obj2);
    value = obj2;
  }
  let host = value.host;
  host.offer(pipe);
}
function handleIFrameUnmount(id) {
  id = id.id;
  const value = map.get(id);
  const obj = map;
  if (null != value) {
    obj.delete(id);
    const host = value.host;
    host.close();
  }
}
function updateKeybinds() {
  const tmp = createKeybindsMessage();
  const values = map.values();
  for (const item10010 of values) {
    let host = item10010.host;
    let dispatchResult = host.dispatch(tmp);
    continue;
  }
}
function updateParentStates() {
  const values = map.values();
  const tmp2 = values[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = sendParentState(tmp3);
    continue;
  }
}
const ComponentActions = Constants.ComponentActions;
let closure_5 = { muted: false };
let map = new Map();
let c7 = 0;
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
      let host = item10021.host;
      let closeResult = host.close();
      continue;
    }
    map.clear();
  }
}
const prototype = EmbeddedAppShimManager.prototype;
const embeddedAppShimManager = new EmbeddedAppShimManager();
let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimManager.tsx");

export default embeddedAppShimManager;
export function requestShimLaunchTimings(arg0, markPrefixes) {
  const value = map.get(arg0);
  importDefault = value;
  if (null != value) {
    if (value.connected) {
      const _String = String;
      const nonce = String(closure_7);
      closure_7 = closure_7 + 1;
      const self = this;
      const self2 = this;
      const promise = new Promise((arg0) => {
        const launchTimingsRequests = importDefault.launchTimingsRequests;
        const result = launchTimingsRequests.set(nonce, arg0);
        const host = importDefault.host;
        const obj = { type: protocol.ParentToChildEvent.LAUNCH_TIMINGS_REQUEST, nonce, markPrefixes };
        host.dispatch(obj);
      });
      return promise;
    }
  }
  return Promise.resolve(null);
}
