// Module ID: 13020
// Function ID: 13021
// Name: useIsAppDM
// Dependencies: [1386, 563, 2]
// Exports: default

// Module 13020 (useIsAppDM)
import UserStore from "UserStore" /* 1386 */;
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
