// Module ID: 11764
// Function ID: 11765
// Name: EmbeddedAppShimActionCreators
// Dependencies: [572, 2]
// Exports: disconnectShim, shimPipeOpened, updateShimState

// Module 11764 (EmbeddedAppShimActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/shim_host/EmbeddedAppShimActionCreators.tsx");

export function shimPipeOpened(pipeId, pipe) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_APP_SHIM_PIPE_OPEN", iframeId: pipeId, pipe };
  obj.dispatch(obj2);
}
export function updateShimState(iframeId, state) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_APP_SHIM_STATE_UPDATE", iframeId, state };
  obj.dispatch(obj2);
}
export function disconnectShim(iframeId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EMBEDDED_APP_SHIM_DISCONNECT", iframeId };
  obj.dispatch(obj2);
}
