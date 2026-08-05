// Module ID: 8614
// Function ID: 8615
// Name: noop
// Dependencies: [19, 17, 21, 8615, 500, 2]
// Exports: useModalDismissGuardRefreshControl

// Module 8614 (noop)
import noop from "noop";
import { RefreshControl } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function noop() {

}
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(8615).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return React.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      let obj = isPortalKeyboardInModal(outer1_1[4]);
      if (obj.isIOS()) {
        obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
        obj[1] = outer1_5;
        tmp = outer1_4(outer1_3, obj);
      }
    }
    return tmp;
  }, items);
};
