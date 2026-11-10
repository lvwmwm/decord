// Module ID: 5036
// Function ID: 5037
// Name: api/Stats
// Dependencies: [5029, 2]

// Module 5036 (api/Stats)
import Host2 from "Host" /* 5029 */;
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
