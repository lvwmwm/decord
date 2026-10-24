// Module ID: 4863
// Function ID: 4864
// Name: Kv
// Dependencies: [4858, 2]

// Module 4863 (Kv)
import Host2 from "Host" /* 4858 */;
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
