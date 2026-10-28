// Module ID: 4895
// Function ID: 4896
// Name: Kv
// Dependencies: [4890, 2]

// Module 4895 (Kv)
import Host2 from "Host" /* 4890 */;
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
