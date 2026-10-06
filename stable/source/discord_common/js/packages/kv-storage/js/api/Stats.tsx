// Module ID: 2093
// Function ID: 2094
// Name: api/Stats
// Dependencies: [2086, 2]

// Module 2093 (api/Stats)
import Host2 from "Host" /* 2086 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Stats.tsx");
class Stats {
  static malformedValueCount() {
    const Host = Host2.Host;
    return Host.malformedValueCount();
  }
  static malformedEntryCount() {
    const Host = Host2.Host;
    return Host.malformedEntryCount();
  }
}

export { Stats };
