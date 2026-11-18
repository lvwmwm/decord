// Module ID: 5681
// Function ID: 5682
// Name: setShouldRecordNextConnection
// Dependencies: [5587, 5682, 572, 2]
// Exports: default

// Module 5681 (setShouldRecordNextConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import trackVoiceAndVideoSettingsUpdateDefault from "trackVoiceAndVideoSettingsUpdate" /* 5682 */;
import RTCDebugStore from "RTCDebugStore" /* 5587 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc_debug/setShouldRecordNextConnection.tsx");

export default function setShouldRecordNextConnection(value) {
  const tmp = trackVoiceAndVideoSettingsUpdateDefault;
  tmp("connection_replay_log_enabled", value, RTCDebugStore.shouldRecordNextConnection());
  const obj = DispatcherDefault;
  const obj2 = { type: "RTC_DEBUG_SET_RECORDING_FLAG", value };
  obj.dispatch(obj2);
};
