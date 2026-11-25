// Module ID: 12326
// Function ID: 12327
// Name: useConjureSharedProjectCoverAction
// Dependencies: [19, 12327, 12328, 10061, 2]
// Exports: default

// Module 12326 (useConjureSharedProjectCoverAction)
import openFrameDefault from "openFrame" /* 10061 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let react = react_mod;
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectCoverAction.tsx");

export default function useConjureSharedProjectCoverAction(applicationId, arg1, arg2) {
  let canLaunch;
  let closure_2;
  let failed;
  let launch;
  let launching;
  importDefault = applicationId;
  const tmp = require("useConjureSharedProjectLaunch")(applicationId, arg1, arg2);
  launch = tmp.launch;
  ({ canLaunch, launching, failed } = tmp);
  const tmp2 = require("useConjureSharedProjectAppChannel")(applicationId, arg1, arg2);
  react = tmp2;
  let str = "launch";
  if (!canLaunch) {
    let str2 = null;
    if (null != tmp2) {
      str2 = "open";
    }
    str = str2;
  }
  const items = [str, launch, applicationId, tmp2];
  let obj = {
    type: str,
    launching,
    launchFailed: failed,
    run: react.useCallback(() => {
      let resolved;
      if ("launch" === str) {
        resolved = launch();
      } else {
        if ("open" === tmp) {
          if (null != closure_2) {
            const obj = { applicationId, channel: tmp2 };
            openFrameDefault(obj);
            resolved = Promise.resolve(true);
          }
        }
        resolved = Promise.resolve(false);
      }
      return resolved;
    }, items)
  };
  return obj;
};
