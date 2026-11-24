// Module ID: 4811
// Function ID: 4812
// Name: api/Stats
// Dependencies: [4804, 2]

// Module 4811 (api/Stats)
import Host2 from "Host" /* 4804 */;
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
