// Module ID: 2088
// Function ID: 2089
// Name: Kv
// Dependencies: [2083, 2]

// Module 2088 (Kv)
import Host2 from "Host" /* 2083 */;
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
