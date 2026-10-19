// Module ID: 2110
// Function ID: 2111
// Name: api/Stats
// Dependencies: [2103, 2]

// Module 2110 (api/Stats)
import Host2 from "Host" /* 2103 */;
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
