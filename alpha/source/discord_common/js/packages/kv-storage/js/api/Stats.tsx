// Module ID: 4898
// Function ID: 4899
// Name: api/Stats
// Dependencies: [4891, 2]

// Module 4898 (api/Stats)
import Host2 from "Host" /* 4891 */;
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
