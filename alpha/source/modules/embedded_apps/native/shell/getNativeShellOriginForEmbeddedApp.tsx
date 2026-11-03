// Module ID: 11968
// Function ID: 11969
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5792, 11969, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 11968 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5792 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(11969);
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
