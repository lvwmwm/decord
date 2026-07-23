// Module ID: 10767
// Function ID: 83669
// Name: open
// Dependencies: [10766, 686, 8847, 3741, 2]
// Exports: chooseReplayPath, close, open, openReplay, setSection, setShouldRecordNextConnection, setSimulcastDebugOverride

// Module 10767 (open)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("trackVoiceAndVideoDebuggingSettingsUpdated").fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  let obj = importDefault(686);
  obj = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj);
  importDefault(686).dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  importDefault(686).dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  importDefault(686).dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  let obj = importDefault(686);
  obj = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  importDefault(8847)("connection_replay_log_enabled", value, _isNativeReflectConstruct.shouldRecordNextConnection());
  let obj = importDefault(686);
  obj = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  let obj = importDefault(686);
  obj = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj);
};
export const chooseReplayPath = function chooseReplayPath() {
  const fileManager = importDefault(3741).fileManager;
  const items = [{ name: "All Files", extensions: ["*"] }];
  fileManager.showOpenDialog({ filters: items }).then((arg0) => {
    let str = "";
    if (0 !== arg0.length) {
      str = arg0[0];
    }
    let obj = outer1_0(outer1_1[1]);
    obj = { type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str };
    obj.dispatch(obj);
  });
};
