// Module ID: 14471
// Function ID: 14472
// Name: conjureWorkerOrigin
// Dependencies: [6822, 2]
// Exports: getConjureWorkerOrigin

// Module 14471 (conjureWorkerOrigin)
import conjureLocalDev from "conjureLocalDev" /* 6822 */;
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
