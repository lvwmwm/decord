// Module ID: 5062
// Function ID: 5063
// Name: Kv
// Dependencies: [5057, 2]

// Module 5062 (Kv)
import Host2 from "Host" /* 5057 */;
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
