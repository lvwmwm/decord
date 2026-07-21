// Module ID: 10756
// Function ID: 83607
// Name: open
// Dependencies: [0, 0, 0, 0, 0]
// Exports: chooseReplayPath, close, open, openReplay, setSection, setShouldRecordNextConnection, setSimulcastDebugOverride

// Module 10756 (open)
import closure_2 from "result";
import result from "result";

result = result.fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export const open = function open(section) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj);
  importDefault(dependencyMap[1]).dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
};
export const close = function close() {
  importDefault(dependencyMap[1]).dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
};
export const openReplay = function openReplay() {
  importDefault(dependencyMap[1]).dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
};
export const setSection = function setSection(section) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj);
};
export const setShouldRecordNextConnection = function setShouldRecordNextConnection(value) {
  importDefault(dependencyMap[2])("connection_replay_log_enabled", value, closure_2.shouldRecordNextConnection());
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj);
};
export const setSimulcastDebugOverride = function setSimulcastDebugOverride(userId, context, quality) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj);
};
export const chooseReplayPath = function chooseReplayPath() {
  const fileManager = importDefault(dependencyMap[3]).fileManager;
  const items = [{ name: "All Files", extensions: [] }];
  fileManager.showOpenDialog({ filters: items }).then((arg0) => {
    let str = "";
    if (0 !== arg0.length) {
      str = arg0[0];
    }
    let obj = callback(closure_1[1]);
    obj = { type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str };
    obj.dispatch(obj);
  });
};
