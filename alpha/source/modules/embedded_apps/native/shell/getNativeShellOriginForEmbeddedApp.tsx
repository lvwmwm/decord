// Module ID: 11792
// Function ID: 11793
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5667, 11793, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 11792 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5667 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(11793);
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
