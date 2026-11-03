// Module ID: 5033
// Function ID: 5034
// Name: Kv
// Dependencies: [5028, 2]

// Module 5033 (Kv)
import Host2 from "Host" /* 5028 */;
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
