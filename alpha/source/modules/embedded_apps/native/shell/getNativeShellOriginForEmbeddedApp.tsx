// Module ID: 10241
// Function ID: 10242
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5684, 10242, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 10241 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5684 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(10242);
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
