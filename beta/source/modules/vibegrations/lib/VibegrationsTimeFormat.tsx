// Module ID: 16422
// Function ID: 16423
// Name: VibegrationsTimeFormat
// Dependencies: [2]
// Exports: formatClockTime

// Module 16422 (VibegrationsTimeFormat)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTimeFormat.tsx");

export const formatClockTime = function formatClockTime(arg0) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "seconds";
  }
  if (arg0.length > 64) {
    return null;
  } else {
    const _Date2 = Date;
    const parsed = Date.parse(arg0);
    const _Number = Number;
    if (Number.isNaN(parsed)) {
      return null;
    } else {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(parsed);
      const _String = String;
      const StringResult = String(date.getHours());
      const _String2 = String;
      const padStartResult = StringResult.padStart(2, "0");
      const _String3 = String;
      const StringResult1 = String(date.getMinutes());
      const _HermesInternal = HermesInternal;
      const padStartResult1 = StringResult1.padStart(2, "0");
      const StringResult2 = String(date.getSeconds());
      const combined = "" + padStartResult + ":" + padStartResult1 + ":" + StringResult2.padStart(2, "0");
      let combined1 = combined;
      if ("millis" === str) {
        const _String4 = String;
        const _HermesInternal2 = HermesInternal;
        const StringResult3 = String(date.getMilliseconds());
        combined1 = "" + combined + "." + StringResult3.padStart(3, "0");
      }
      return combined1;
    }
  }
};
