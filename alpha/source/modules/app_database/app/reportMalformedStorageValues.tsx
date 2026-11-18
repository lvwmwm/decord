// Module ID: 19552
// Function ID: 19553
// Name: reportMalformedStorageValues
// Dependencies: [4702, 1242, 2]
// Exports: default

// Module 19552 (reportMalformedStorageValues)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import _mod4702 from "module_4702" /* 4702 */;
import size from "module_2" /* 2 */;

let c3 = false;
const result = size.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(source) {
  let obj3;
  const tmp = c3;
  if (!tmp) {
    const Stats = _mod4702.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod4702.Stats;
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
