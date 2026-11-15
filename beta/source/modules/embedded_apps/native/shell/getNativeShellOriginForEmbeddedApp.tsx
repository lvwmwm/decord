// Module ID: 12025
// Function ID: 12026
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5828, 12026, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 12025 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5828 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(12026);
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
