// Module ID: 4935
// Function ID: 4936
// Name: Kv
// Dependencies: [4930, 2]

// Module 4935 (Kv)
import Host2 from "Host" /* 4930 */;
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
