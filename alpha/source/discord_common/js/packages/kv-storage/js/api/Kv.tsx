// Module ID: 4805
// Function ID: 4806
// Name: Kv
// Dependencies: [4800, 2]

// Module 4805 (Kv)
import Host2 from "Host" /* 4800 */;
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
