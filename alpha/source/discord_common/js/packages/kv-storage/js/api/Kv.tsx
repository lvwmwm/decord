// Module ID: 4864
// Function ID: 4865
// Name: Kv
// Dependencies: [4859, 2]

// Module 4864 (Kv)
import Host2 from "Host" /* 4859 */;
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
