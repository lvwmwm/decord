// Module ID: 5064
// Function ID: 5065
// Name: api/Stats
// Dependencies: [5057, 2]

// Module 5064 (api/Stats)
import Host2 from "Host" /* 5057 */;
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
