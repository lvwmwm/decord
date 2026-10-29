// Module ID: 5868
// Function ID: 5869
// Name: setShouldRecordNextConnection
// Dependencies: [5775, 5869, 584, 2]
// Exports: default

// Module 5868 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 5869 */;
import RTCDebugStore from "RTCDebugStore" /* 5775 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  const tmp = trackVoiceAndVideoSettingsUpdateDefault;
  tmp("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj2);
};
