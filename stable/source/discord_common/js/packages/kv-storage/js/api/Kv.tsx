// Module ID: 2105
// Function ID: 2106
// Name: Kv
// Dependencies: [2100, 2]

// Module 2105 (Kv)
import Host2 from "Host" /* 2100 */;
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
