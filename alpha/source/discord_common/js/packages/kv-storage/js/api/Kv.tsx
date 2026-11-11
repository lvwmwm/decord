// Module ID: 5135
// Function ID: 5136
// Name: Kv
// Dependencies: [5130, 2]

// Module 5135 (Kv)
import Host2 from "Host" /* 5130 */;
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
