// Module ID: 11591
// Function ID: 11592
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5661, 11592, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 11591 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5661 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(11592);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getNativeShellOriginForEmbeddedApp.tsx");

export function getNativeShellOriginForEmbeddedApp(embeddedAppUrl) {
  const obj = getURLForApplication;
  const applicationRouterOrigin = obj.getApplicationRouterOrigin(embeddedAppUrl);
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
