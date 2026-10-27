// Module ID: 11499
// Function ID: 11500
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5624, 11500, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 11499 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5624 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(11500);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getNativeShellOriginForEmbeddedApp.tsx");

export const getNativeShellOriginForEmbeddedApp = function getNativeShellOriginForEmbeddedApp(embeddedAppUrl) {
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
};
