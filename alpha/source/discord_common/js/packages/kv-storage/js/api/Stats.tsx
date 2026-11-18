// Module ID: 4717
// Function ID: 4718
// Name: api/Stats
// Dependencies: [4710, 2]

// Module 4717 (api/Stats)
import Host2 from "Host" /* 4710 */;
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
