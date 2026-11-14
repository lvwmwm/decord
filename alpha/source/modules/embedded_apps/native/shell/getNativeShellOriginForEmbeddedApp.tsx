// Module ID: 12887
// Function ID: 12888
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5974, 12888, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 12887 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5974 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(12888);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getNativeShellOriginForEmbeddedApp.tsx");

export function getNativeShellOriginForEmbeddedApp(assetURL) {
  const obj = getURLForApplication;
  const applicationRouterOrigin = obj.getApplicationRouterOrigin(assetURL);
  let nativeShellOrigin = null;
  if (null != applicationRouterOrigin) {
    nativeShellOrigin = null;
    if (applicationRouterOrigin.startsWith("https://")) {
      const tmpResult = nativeShellOrigin2;
      nativeShellOrigin = tmpResult.getNativeShellOrigin(applicationRouterOrigin);
    }
  }
  return nativeShellOrigin;
}
