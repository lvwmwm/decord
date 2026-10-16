// Module ID: 13241
// Function ID: 13242
// Name: conjureLiveReloadConnection
// Dependencies: [584, 13237, 2]
// Exports: sendLiveReload

// Module 13241 (conjureLiveReloadConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 13237 */;
import size from "module_2" /* 2 */;

let obj = {
  live_reload(enabled, projectId) {
    let error;
    let phase;
    let step;
    projectId = projectId.projectId;
    const obj = { type: "CONJURE_LIVE_RELOAD_SET", projectId, enabled: enabled.enabled, error, phase, step };
    error = enabled.error;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (error == null) {
      error = null;
    }
    phase = enabled.phase;
    if (phase == null) {
      phase = null;
    }
    step = enabled.step;
    if (step == null) {
      step = null;
    }
    dispatch(obj);
  }
};
const result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveReloadConnection.tsx");

export const liveReloadFrameHandlers = obj;
export const sendLiveReload = function sendLiveReload(projectId, arg1) {
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendLiveReload(arg1);
      return true;
    }
  } catch (err) {
    return false;
  }
};
