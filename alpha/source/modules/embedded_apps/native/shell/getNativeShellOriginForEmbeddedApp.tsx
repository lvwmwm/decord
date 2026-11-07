// Module ID: 11994
// Function ID: 11995
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5796, 11995, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 11994 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5796 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(11995);
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
