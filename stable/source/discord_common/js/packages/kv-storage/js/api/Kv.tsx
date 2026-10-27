// Module ID: 2108
// Function ID: 2109
// Name: Kv
// Dependencies: [2103, 2]

// Module 2108 (Kv)
import Host2 from "Host" /* 2103 */;
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
