// Module ID: 11297
// Function ID: 87875
// Name: useIsAppDM
// Dependencies: [1849, 624, 2]
// Exports: default

// Module 11297 (useIsAppDM)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default function useIsAppDM(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(624).useStateFromStores(items, () => {
    let isDMResult = null != dM;
    if (isDMResult) {
      isDMResult = dM.isDM();
    }
    if (isDMResult) {
      isDMResult = 1 === dM.recipients.length;
    }
    if (isDMResult) {
      const user = outer1_2.getUser(dM.recipients[0]);
      let bot;
      if (null != user) {
        bot = user.bot;
      }
      isDMResult = true === bot;
    }
    return isDMResult;
  });
};
