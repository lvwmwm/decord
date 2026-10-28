// Module ID: 5866
// Function ID: 5867
// Name: setShouldRecordNextConnection
// Dependencies: [5773, 5867, 584, 2]
// Exports: default

// Module 5866 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 5867 */;
import RTCDebugStore from "RTCDebugStore" /* 5773 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  const tmp = trackVoiceAndVideoSettingsUpdateDefault;
  tmp("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj2);
};
