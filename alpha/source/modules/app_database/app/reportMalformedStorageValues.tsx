// Module ID: 19537
// Function ID: 19538
// Name: reportMalformedStorageValues
// Dependencies: [4796, 1241, 2]
// Exports: default

// Module 19537 (reportMalformedStorageValues)
import SentryUtilsDefault from "SentryUtils" /* 1241 */;
import _mod4796 from "module_4796" /* 4796 */;
import size from "module_2" /* 2 */;

let c3 = false;
const result = size.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(source) {
  let obj3;
  const tmp = c3;
  if (!tmp) {
    const Stats = _mod4796.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod4796.Stats;
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
