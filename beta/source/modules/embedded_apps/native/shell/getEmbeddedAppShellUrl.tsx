// Module ID: 10827
// Function ID: 10828
// Name: getEmbeddedAppShellUrl
// Dependencies: [10828, 1379, 2]
// Exports: getEmbeddedAppShellUrl

// Module 10827 (getEmbeddedAppShellUrl)
import URLUtilsDefault from "URLUtils" /* 1379 */;
import getNativeShellOriginForEmbeddedApp from "getNativeShellOriginForEmbeddedApp" /* 10828 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/getEmbeddedAppShellUrl.tsx");

export function getEmbeddedAppShellUrl(assetURL) {
  const obj = getNativeShellOriginForEmbeddedApp;
  const nativeShellOriginForEmbeddedApp = obj.getNativeShellOriginForEmbeddedApp(assetURL);
  if (null != nativeShellOriginForEmbeddedApp) {
    const _HermesInternal = HermesInternal;
    return "" + nativeShellOriginForEmbeddedApp + "/";
  } else {
    const obj2 = URLUtilsDefault;
    const toURLSafeResult = obj2.toURLSafe(assetURL);
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
