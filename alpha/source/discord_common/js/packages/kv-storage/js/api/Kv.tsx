// Module ID: 4715
// Function ID: 4716
// Name: Kv
// Dependencies: [4710, 2]

// Module 4715 (Kv)
import Host2 from "Host" /* 4710 */;
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
