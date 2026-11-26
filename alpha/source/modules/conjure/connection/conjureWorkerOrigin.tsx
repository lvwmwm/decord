// Module ID: 15001
// Function ID: 15002
// Name: conjureWorkerOrigin
// Dependencies: [7675, 2]
// Exports: getConjureWorkerOrigin

// Module 15001 (conjureWorkerOrigin)
import conjureLocalDev from "conjureLocalDev" /* 7675 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/connection/conjureWorkerOrigin.tsx");

export function getConjureWorkerOrigin() {
  const obj = conjureLocalDev;
  let conjureTunnelWorkerOrigin = obj.getConjureTunnelWorkerOrigin();
  if (null == conjureTunnelWorkerOrigin) {
    let str = "http://localhost:8787";
    const tmpResult = conjureLocalDev;
    if (!tmpResult.isConjureLocalDev()) {
      const _window = window;
      let str3 = "https://conjure.city";
      if (RELEASE_CHANNEL.startsWith("staging")) {
        str3 = "https://conjure.town";
      }
      str = str3;
    }
    conjureTunnelWorkerOrigin = str;
  }
  return conjureTunnelWorkerOrigin;
}
