// Module ID: 5034
// Function ID: 5035
// Name: api/Stats
// Dependencies: [5027, 2]

// Module 5034 (api/Stats)
import Host2 from "Host" /* 5027 */;
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
