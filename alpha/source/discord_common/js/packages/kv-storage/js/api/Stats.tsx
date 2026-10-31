// Module ID: 4908
// Function ID: 4909
// Name: api/Stats
// Dependencies: [4901, 2]

// Module 4908 (api/Stats)
import Host2 from "Host" /* 4901 */;
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
