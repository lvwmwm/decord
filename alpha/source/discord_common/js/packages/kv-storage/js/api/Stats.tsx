// Module ID: 2089
// Function ID: 2090
// Name: api/Stats
// Dependencies: [2082, 2]

// Module 2089 (api/Stats)
import Host2 from "Host" /* 2082 */;
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
