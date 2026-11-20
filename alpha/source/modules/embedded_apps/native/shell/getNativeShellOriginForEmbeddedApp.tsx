// Module ID: 10703
// Function ID: 10704
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5435, 10704, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 10703 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5435 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(10704);
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
