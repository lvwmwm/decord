// Module ID: 11830
// Function ID: 11831
// Name: getNativeShellOriginForEmbeddedApp
// Dependencies: [5672, 11831, 2]
// Exports: getNativeShellOriginForEmbeddedApp

// Module 11830 (getNativeShellOriginForEmbeddedApp)
import getURLForApplication from "getURLForApplication" /* 5672 */;
import size from "module_2" /* 2 */;

let tmp;
const nativeShellOrigin2 = tmp(11831);
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
