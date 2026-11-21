// Module ID: 4807
// Function ID: 4808
// Name: api/Stats
// Dependencies: [4800, 2]

// Module 4807 (api/Stats)
import Host2 from "Host" /* 4800 */;
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
