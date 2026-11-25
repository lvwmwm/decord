// Module ID: 10828
// Function ID: 10829
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5554, 10829, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 10828 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5554 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(10829);
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
