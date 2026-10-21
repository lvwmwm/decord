// Module ID: 4863
// Function ID: 4864
// Name: api/Stats
// Dependencies: [4856, 2]

// Module 4863 (api/Stats)
import Host2 from "Host" /* 4856 */;
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
