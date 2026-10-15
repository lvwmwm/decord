// Module ID: 5283
// Function ID: 5284
// Name: setShouldRecordNextConnection
// Dependencies: [5194, 5284, 584, 2]
// Exports: default

// Module 5283 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 5284 */;
import RTCDebugStore from "RTCDebugStore" /* 5194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  const tmp = trackVoiceAndVideoSettingsUpdateDefault;
  tmp("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj2);
};
