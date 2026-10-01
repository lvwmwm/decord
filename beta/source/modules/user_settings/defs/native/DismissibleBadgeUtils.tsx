// Module ID: 14283
// Function ID: 14284
// Name: DismissibleBadgeUtils
// Dependencies: [32, 19, 2042, 21, 6806, 14282, 2]
// Exports: createDismissibleBadgePreNavigationAction, createDismissibleBadgeRouteProps

// Module 14283 (DismissibleBadgeUtils)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14282 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function useAlwaysShow() {
  return true;
}
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = [];
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissibleBadgeUtils.tsx");

export function createDismissibleBadgePreNavigationAction(TINY_BRONCO_SETTINGS, useShouldShowAgeNotice) {
  let closure_0 = TINY_BRONCO_SETTINGS;
  let tmp = useShouldShowAgeNotice;
  if (useShouldShowAgeNotice === undefined) {
    tmp = useAlwaysShow;
  }
  let closure_1 = tmp;
  return () => {
    let first;
    let tmp3;
    const tmp = closure_1();
    const useSelectedDismissibleContent = closure_0(closure_1_2[4]).useSelectedDismissibleContent;
    const tmp2 = closure_0(closure_1_2[4]);
    if (tmp) {
      const items = [first];
      tmp3 = items;
    } else {
      tmp3 = closure_1_7;
    }
    const tmp5 = closure_1_3(useSelectedDismissibleContent(tmp3), 2);
    first = tmp5[0];
    closure_1 = tmp7;
    const items1 = [first, tmp5[1]];
    return React.useCallback(() => {
      if (first === closure_0) {
        closure_1(constants.TAKE_ACTION);
      }
      return true;
    }, items1);
  };
}
export function createDismissibleBadgeRouteProps(CUSTOM_APP_ICONS_NEW_BADGE) {
  const dismissibleContent = CUSTOM_APP_ICONS_NEW_BADGE;
  let closure_1 = useAlwaysShow;
  return {
    useTrailing() {
      return jsx(DismissiblePremiumNewBadgeDefault, { dismissibleContent, newPremiumStyle: true });
    },
    usePreNavigationAction: () => {
      let first;
      let tmp3;
      const tmp = closure_1();
      const useSelectedDismissibleContent = closure_0(closure_1_2[4]).useSelectedDismissibleContent;
      const tmp2 = closure_0(closure_1_2[4]);
      if (tmp) {
        const items = [first];
        tmp3 = items;
      } else {
        tmp3 = closure_1_7;
      }
      const tmp5 = closure_1_3(useSelectedDismissibleContent(tmp3), 2);
      first = tmp5[0];
      closure_1 = tmp7;
      const items1 = [first, tmp5[1]];
      return React.useCallback(() => {
        if (first === closure_0) {
          closure_1(constants.TAKE_ACTION);
        }
        return true;
      }, items1);
    }
  };
}
