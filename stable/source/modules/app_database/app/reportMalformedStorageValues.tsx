// Module ID: 18829
// Function ID: 18830
// Name: reportMalformedStorageValues
// Dependencies: [4882, 1257, 2]
// Exports: default

// Module 18829 (reportMalformedStorageValues)
import SentryUtilsDefault from "SentryUtils" /* 1257 */;
import _mod4882 from "module_4882" /* 4882 */;
import size from "module_2" /* 2 */;

let c3 = false;
const result = size.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(source) {
  let obj3;
  const tmp = c3;
  if (!tmp) {
    const Stats = _mod4882.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod4882.Stats;
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
