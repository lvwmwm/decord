// Module ID: 5137
// Function ID: 5138
// Name: api/Stats
// Dependencies: [5130, 2]

// Module 5137 (api/Stats)
import Host2 from "Host" /* 5130 */;
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
