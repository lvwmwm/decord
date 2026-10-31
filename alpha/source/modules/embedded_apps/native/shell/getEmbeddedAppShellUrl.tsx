// Module ID: 11829
// Function ID: 11830
// Name: getEmbeddedAppShellUrl
// Dependencies: [11830, 1377, 2]
// Exports: getEmbeddedAppShellUrl

// Module 11829 (getEmbeddedAppShellUrl)
import URLUtilsDefault from "URLUtils" /* 1377 */;
import getNativeShellOriginForEmbeddedApp from "getNativeShellOriginForEmbeddedApp" /* 11830 */;
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
