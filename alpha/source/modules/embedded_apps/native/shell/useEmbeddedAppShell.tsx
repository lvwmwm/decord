// Module ID: 11497
// Function ID: 11498
// Name: useEmbeddedAppShell
// Dependencies: [32, 19, 558, 576, 11498, 11501, 2]

// Module 11497 (useEmbeddedAppShell)
import getEmbeddedAppShellUrl from "getEmbeddedAppShellUrl" /* 11498 */;
import createShellHtml from "createShellHtml" /* 11501 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedAppShell(embeddedAppUrl) {
  let iframeUri;
  let obj = embeddedAppUrl(iframeUri[3]);
  const cResult = obj.c(8);
  embeddedAppUrl = embeddedAppUrl.embeddedAppUrl;
  iframeUri = embeddedAppUrl.iframeUri;
  const iframeSandboxAttributes = embeddedAppUrl.iframeSandboxAttributes;
  const iframeCsp = embeddedAppUrl.iframeCsp;
  const referrerPolicy = embeddedAppUrl.referrerPolicy;
  const shimVersion = embeddedAppUrl.shimVersion;
  const shellBridgeSecret = embeddedAppUrl.shellBridgeSecret;
  if (cResult[0] === embeddedAppUrl) {
    if (cResult[1] === iframeCsp) {
      if (cResult[2] === iframeSandboxAttributes) {
        if (cResult[3] === iframeUri) {
          if (cResult[4] === referrerPolicy) {
            if (cResult[5] === shellBridgeSecret) {
              let tmp2;
              if (cResult[6] === shimVersion) {
                tmp2 = cResult[7];
              }
              return iframeSandboxAttributes(iframeCsp.useState(tmp2), 1)[0];
            }
          }
        }
      }
    }
  }
  const fn = function p() {
    let obj2;
    let obj3;
    const obj = { url: obj2.getEmbeddedAppShellUrl(embeddedAppUrl), html: obj3.createShellHtml(obj4) };
    obj2 = getEmbeddedAppShellUrl;
    obj3 = createShellHtml;
    return obj;
  };
  cResult[0] = embeddedAppUrl;
  cResult[1] = iframeCsp;
  cResult[2] = iframeSandboxAttributes;
  cResult[3] = iframeUri;
  cResult[4] = referrerPolicy;
  cResult[5] = shellBridgeSecret;
  cResult[6] = shimVersion;
  cResult[7] = fn;
  tmp2 = fn;
}) : (function useEmbeddedAppShell(arg0) {
  let closure_4;
  let closure_5;
  let closure_6;
  let iframeCsp;
  let iframeSandboxAttributes;
  let iframeUri;
  let referrerPolicy;
  let shellBridgeSecret;
  let shimVersion;
  ({ embeddedAppUrl: require, iframeUri: dependencyMap, iframeSandboxAttributes: _slicedToArray, iframeCsp: react, referrerPolicy: closure_4, shimVersion: closure_5, shellBridgeSecret: closure_6 } = arg0);
  return _slicedToArray(react.useState(() => {
    let obj2;
    let obj3;
    const obj = { url: obj2.getEmbeddedAppShellUrl(require), html: obj3.createShellHtml(obj4) };
    obj2 = getEmbeddedAppShellUrl;
    obj3 = createShellHtml;
    return obj;
  }), 1)[0];
});
const result = size.fileFinishedImporting("modules/embedded_apps/native/shell/useEmbeddedAppShell.tsx");

export default tmp2;
