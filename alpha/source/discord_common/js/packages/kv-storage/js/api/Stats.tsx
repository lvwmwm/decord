// Module ID: 2106
// Function ID: 2107
// Name: api/Stats
// Dependencies: [2099, 2]

// Module 2106 (api/Stats)
import Host2 from "Host" /* 2099 */;
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
