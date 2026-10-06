// Module ID: 11783
// Function ID: 11784
// Name: useIsAppDM
// Dependencies: [1377, 558, 576, 573, 2]

// Module 11783 (useIsAppDM)
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let tmp = null != closure_0 && obj.isDM() && 1 === obj.recipients.length;
      if (tmp) {
        const user = UserStore.getUser(obj.recipients[0]);
        let bot;
        if (user != null) {
          bot = user.bot;
        }
        tmp = true === bot;
      }
      return tmp;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const obj = require("useStateFromStores");
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    let tmp = null != closure_0 && obj.isDM() && 1 === obj.recipients.length;
    if (tmp) {
      const user = UserStore.getUser(obj.recipients[0]);
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      tmp = true === bot;
    }
    return tmp;
  });
});
const result = size.fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default tmp2;
