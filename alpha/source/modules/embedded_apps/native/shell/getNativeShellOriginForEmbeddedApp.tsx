// Module ID: 10783
// Function ID: 10784
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5464, 10784, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 10783 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5464 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(10784);
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
