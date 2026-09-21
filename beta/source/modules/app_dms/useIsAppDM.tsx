// Module ID: 12285
// Function ID: 12286
// Name: useIsAppDM
// Dependencies: [1376, 558, 568, 565, 2]

// Module 12285 (useIsAppDM)
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let tmp = null != closure_0 && obj.isDM();
      if (tmp) {
        tmp = 1 === obj.recipients.length;
      }
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    let tmp = null != closure_0 && obj.isDM();
    if (tmp) {
      tmp = 1 === obj.recipients.length;
    }
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
