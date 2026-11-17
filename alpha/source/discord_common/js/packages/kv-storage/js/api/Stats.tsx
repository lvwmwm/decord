// Module ID: 5204
// Function ID: 5205
// Name: api/Stats
// Dependencies: [5197, 2]

// Module 5204 (api/Stats)
import Host2 from "Host" /* 5197 */;
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
