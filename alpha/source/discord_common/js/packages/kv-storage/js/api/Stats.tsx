// Module ID: 2087
// Function ID: 2088
// Name: api/Stats
// Dependencies: [2080, 2]

// Module 2087 (api/Stats)
import Host2 from "Host" /* 2080 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Stats.tsx");
const prototype = function Stats() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["malformedValueCount"] = function malformedValueCount() {
  const Host = Host2.Host;
  return Host.malformedValueCount();
};
prototype["malformedEntryCount"] = function malformedEntryCount() {
  const Host = Host2.Host;
  return Host.malformedEntryCount();
};

export const Stats = prototype;
