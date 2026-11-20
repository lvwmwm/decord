// Module ID: 4688
// Function ID: 4689
// Name: api/Stats
// Dependencies: [4681, 2]

// Module 4688 (api/Stats)
import Host2 from "Host" /* 4681 */;
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
