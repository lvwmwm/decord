// Module ID: 5198
// Function ID: 5199
// Name: Kv
// Dependencies: [5193, 2]

// Module 5198 (Kv)
import Host2 from "Host" /* 5193 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Kv.tsx");
class Kv {
  static databases() {
    const Host = Host2.Host;
    return Host.list();
  }
  static optimize(arg0) {
    const Host = Host2.Host;
    return Host.optimize(arg0);
  }
}

export { Kv };
