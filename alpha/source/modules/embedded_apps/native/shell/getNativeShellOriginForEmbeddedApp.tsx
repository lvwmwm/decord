// Module ID: 11537
// Function ID: 11538
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5659, 11538, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 11537 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5659 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(11538);
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
