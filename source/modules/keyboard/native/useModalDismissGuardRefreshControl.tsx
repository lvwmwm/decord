// Module ID: 9329
// Function ID: 72908
// Name: noop
// Dependencies: [31, 27, 33, 9330, 477, 2]
// Exports: useModalDismissGuardRefreshControl

// Module 9329 (noop)
import result from "result";
import { RefreshControl } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function noop() {

}
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(9330).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return React.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      let obj = isPortalKeyboardInModal(outer1_1[4]);
      if (obj.isIOS()) {
        obj = { refreshing: false, onRefresh: outer1_5, tintColor: "transparent" };
        tmp = outer1_4(outer1_3, obj);
      }
    }
    return tmp;
  }, items);
};
