// Module ID: 19092
// Function ID: 19093
// Name: reportMalformedStorageValues
// Dependencies: [4883, 1254, 2]
// Exports: default

// Module 19092 (reportMalformedStorageValues)
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import _mod4883 from "module_4883" /* 4883 */;
import size from "module_2" /* 2 */;

let c3 = false;
const result = size.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(source) {
  let obj3;
  const tmp = c3;
  if (!tmp) {
    const Stats = _mod4883.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod4883.Stats;
    const malformedEntryCountResult = Stats2.malformedEntryCount();
    const tmp6 = 0 === malformedValueCountResult && 0 === malformedEntryCountResult;
    if (!tmp6) {
      c3 = true;
      const obj2 = { extra: obj3, fingerprint: ["kv-storage-omitted-undecodable-values"] };
      obj3 = { malformed_value_count: malformedValueCountResult, malformed_entry_count: malformedEntryCountResult, source };
      const obj = SentryUtilsDefault;
      obj.captureMessage("kv-storage: omitted undecodable values", obj2, "warning");
    }
  }
};
