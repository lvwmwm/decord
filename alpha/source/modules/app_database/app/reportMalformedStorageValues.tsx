// Module ID: 17959
// Function ID: 17960
// Name: reportMalformedStorageValues
// Dependencies: [2091, 1255, 2]
// Exports: default

// Module 17959 (reportMalformedStorageValues)
import SentryUtilsDefault from "SentryUtils" /* 1255 */;
import _mod2091 from "module_2091" /* 2091 */;
import size from "module_2" /* 2 */;

let c3 = false;
const result = size.fileFinishedImporting("modules/app_database/app/reportMalformedStorageValues.tsx");

export default function reportMalformedStorageValues(source) {
  let obj3;
  const tmp = c3;
  if (!tmp) {
    const Stats = _mod2091.Stats;
    const malformedValueCountResult = Stats.malformedValueCount();
    const Stats2 = _mod2091.Stats;
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
