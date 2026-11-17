// Module ID: 6185
// Function ID: 6186
// Name: setShouldRecordNextConnection
// Dependencies: [6091, 6186, 572, 2]
// Exports: default

// Module 6185 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 6186 */;
import RTCDebugStore from "RTCDebugStore" /* 6091 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  const tmp = trackVoiceAndVideoSettingsUpdateDefault;
  tmp("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj2);
};
