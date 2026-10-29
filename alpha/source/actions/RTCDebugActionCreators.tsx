// Module ID: 5776
// Function ID: 5777
// Name: RTCDebugActionCreators
// Dependencies: [584, 4819, 2]
// Exports: chooseReplayPath, close, open, openReplay, setSection, setSimulcastDebugOverride

// Module 5776 (RTCDebugActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DiscordNativeDefault from "DiscordNative" /* 4819 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/RTCDebugActionCreators.tsx");

export function open(section) {
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_MODAL_OPEN", section };
  obj.dispatch(obj2);
  const obj3 = DispatcherDefault;
  obj3.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
}
export function close() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
}
export function openReplay() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
}
export function setSection(section) {
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_MODAL_SET_SECTION", section };
  obj.dispatch(obj2);
}
export function setSimulcastDebugOverride(userId, context, quality) {
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId, context, quality };
  obj.dispatch(obj2);
}
export function chooseReplayPath() {
  let items;
  const fileManager = DiscordNativeDefault.fileManager;
  let obj = { filters: items };
  items = [{ name: "All Files", extensions: ["*"] }];
  const showOpenDialogResult = fileManager.showOpenDialog(obj);
  showOpenDialogResult.then((result) => {
    let str = "";
    if (0 !== result.length) {
      str = result[0];
    }
    const obj = DispatcherDefault;
    obj.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: str });
  });
}
