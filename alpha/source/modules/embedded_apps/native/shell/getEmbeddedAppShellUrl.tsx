// Module ID: 11590
// Function ID: 11591
// Name: getEmbeddedAppShellUrl
// Dependencies: [11591, 1383, 2]
// Exports: getEmbeddedAppShellUrl

// Module 11590 (getEmbeddedAppShellUrl)
import URLUtilsDefault from "URLUtils" /* 1383 */;
import getNativeShellOriginForEmbeddedApp from "getNativeShellOriginForEmbeddedApp" /* 11591 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getEmbeddedAppShellUrl.tsx");

export function getEmbeddedAppShellUrl(embeddedAppUrl) {
  const obj = getNativeShellOriginForEmbeddedApp;
  const nativeShellOriginForEmbeddedApp = obj.getNativeShellOriginForEmbeddedApp(embeddedAppUrl);
  if (null != nativeShellOriginForEmbeddedApp) {
    const _HermesInternal = HermesInternal;
    return "" + nativeShellOriginForEmbeddedApp + "/";
  } else {
    const obj2 = URLUtilsDefault;
    const toURLSafeResult = obj2.toURLSafe(embeddedAppUrl);
    let protocol;
    if (toURLSafeResult != null) {
      protocol = toURLSafeResult.protocol;
    }
    let str = "https://discord.com/__discord-embedded-app-shell/";
    if ("http:" === protocol) {
      let str3 = "http://localhost:3333/__discord-embedded-app-shell/";
      if ("http://localhost:3333" === toURLSafeResult.origin) {
        str3 = "about:blank";
      }
      str = str3;
    }
    return str;
  }
}
