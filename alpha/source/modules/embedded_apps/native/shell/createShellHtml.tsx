// Module ID: 11593
// Function ID: 11594
// Name: createShellHtml
// Dependencies: [10873, 11594, 11564, 1381, 2]
// Exports: createShellHtml

// Module 11593 (createShellHtml)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import _modDef11594 from "module_11594" /* 11594 */;
import EmbeddedAppConstants from "EmbeddedAppConstants" /* 10873 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp4;
const bridgeProtocol = tmp4(11564);
({ EMBEDDED_APP_DISALLOWED_NAVIGATION_MESSAGE: c3, EMBEDDED_APP_FRAME_ELEMENT_ID: closure_4 } = EmbeddedAppConstants);
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/createShellHtml.tsx");

export function createShellHtml(shimVersion) {
  let iframeCsp;
  let iframeSandboxAttributes;
  let iframeUrl;
  let referrerPolicy;
  ({ iframeUrl, iframeSandboxAttributes, iframeCsp, referrerPolicy } = shimVersion);
  let shellBridgeSecret = null;
  if (2 === shimVersion.shimVersion) {
    shellBridgeSecret = shimVersion.shellBridgeSecret;
  }
  let str = "";
  let str2 = "";
  if (null != iframeCsp) {
    const _HermesInternal = HermesInternal;
    str2 = " csp=\"" + iframeCsp + "\"";
  }
  const combined = "<meta http-equiv=\"Content-Security-Policy\" content=\"frame-src " + iframeUrl.origin + "\" />";
  let combined1 = str;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const _JSON = JSON;
    const _HermesInternal2 = HermesInternal;
    combined1 = "<script type=\"text/javascript\">\n          document.addEventListener('securitypolicyviolation', e => {\n            if (e.effectiveDirective === 'frame-src') {\n              window.ReactNativeWebView.postMessage(" + JSON.stringify(_false) + ");\n            }\n          });\n      </script>";
  }
  if (null != shellBridgeSecret) {
    const _JSON2 = JSON;
    const tmp9 = _modDef11594;
    const SHELL_BRIDGE_GLOBAL = bridgeProtocol.SHELL_BRIDGE_GLOBAL;
    const _JSON3 = JSON;
    const json = JSON.stringify(shellBridgeSecret);
    const _HermesInternal3 = HermesInternal;
    str = "<script type=\"text/javascript\">" + tmp9 + "</script>\n      <script type=\"text/javascript\">" + SHELL_BRIDGE_GLOBAL + ".start(" + json + ", " + JSON.stringify(React3) + ");</script>";
  }
  return "\n  <html>\n  <head>\n      " + combined + "\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      " + combined1 + "\n      " + str + "\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"" + React3 + "\" width=\"100%\" height=\"100%\" src=\"" + iframeUrl.href + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media; accelerometer; gyroscope; camera 'none'; microphone 'none'; display-capture 'none'\" allowfullscreen sandbox=\"" + iframeSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\"" + str2 + ">\n      </iframe>\n  </body>\n  </html>\n";
}
