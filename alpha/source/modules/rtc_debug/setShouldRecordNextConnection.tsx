// Module ID: 5224
// Function ID: 5225
// Name: setShouldRecordNextConnection
// Dependencies: [5135, 5225, 584, 2]
// Exports: default

// Module 5224 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 5225 */;
import RTCDebugStore from "RTCDebugStore" /* 5135 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  const tmp = trackVoiceAndVideoSettingsUpdateDefault;
  tmp("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj2);
};
