// Module ID: 12694
// Function ID: 12695
// Name: useIsAppDM
// Dependencies: [1385, 563, 2]
// Exports: default

// Module 12694 (useIsAppDM)
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default function useIsAppDM(arg0) {
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
};
