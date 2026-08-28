// Module ID: 1973
// Function ID: 1974
// Name: malformedValueCount
// Dependencies: [1966, 2]

// Module 1973 (malformedValueCount)
import set from "set" /* 2 */;
import open from "open" /* 1966 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Stats.tsx");
const prototype = function Stats() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["malformedValueCount"] = function malformedValueCount() {
  const Host = open.Host;
  return Host.malformedValueCount();
};
prototype["malformedEntryCount"] = function malformedEntryCount() {
  const Host = open.Host;
  return Host.malformedEntryCount();
};

export const Stats = prototype;
