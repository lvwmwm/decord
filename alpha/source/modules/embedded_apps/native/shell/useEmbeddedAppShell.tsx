// Module ID: 11828
// Function ID: 11829
// Name: useEmbeddedAppShell
// Dependencies: [32, 19, 11829, 11832, 2]
// Exports: default

// Module 11828 (useEmbeddedAppShell)
import getEmbeddedAppShellUrl from "getEmbeddedAppShellUrl" /* 11829 */;
import createShellHtml from "createShellHtml" /* 11832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/useEmbeddedAppShell.tsx");

export default function useEmbeddedAppShell(arg0) {
  let closure_4;
  let closure_5;
  let closure_6;
  let iframeCsp;
  let iframeSandboxAttributes;
  let referrerPolicy;
  let shellBridgeSecret;
  let shimVersion;
  ({ embeddedAppUrl: require, iframeUrl: dependencyMap, iframeSandboxAttributes: _slicedToArray, iframeCsp: react, referrerPolicy: closure_4, shimVersion: closure_5, shellBridgeSecret: closure_6 } = arg0);
  return _slicedToArray(react.useState(() => {
    let obj2;
    let obj3;
    let obj4;
    let tmp2 = null;
    if (null != dependencyMap) {
      const obj = { url: obj2.getEmbeddedAppShellUrl(require), html: obj3.createShellHtml(obj4) };
      obj2 = getEmbeddedAppShellUrl;
      obj4 = { iframeUrl: tmp, iframeSandboxAttributes: _slicedToArray, iframeCsp: react, referrerPolicy, shimVersion, shellBridgeSecret };
      tmp2 = obj;
      obj3 = createShellHtml;
    }
    return tmp2;
  }), 1)[0];
};
