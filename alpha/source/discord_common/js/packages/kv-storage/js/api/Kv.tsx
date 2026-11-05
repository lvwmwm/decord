// Module ID: 5035
// Function ID: 5036
// Name: Kv
// Dependencies: [5030, 2]

// Module 5035 (Kv)
import Host2 from "Host" /* 5030 */;
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
