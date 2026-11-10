// Module ID: 20314
// Function ID: 20315
// Name: EligibilityActionSheet
// Dependencies: [19, 1072, 21, 5142, 5376, 9160, 7638, 20315, 5390, 5753, 1113, 20319, 2]
// Exports: default

// Module 20314 (EligibilityActionSheet)
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 20315 */;
import EligibilityChecklistDefault from "EligibilityChecklist" /* 20319 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const EligibilityActionSheet_str = "EligibilityActionSheet";
let closure_8 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 0 }, title: { marginHorizontal: 24, marginTop: 16 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  let intl;
  let items1;
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const eligibility = onRequireModeratorMFAClick.eligibility;
  const tmp = closure_8();
  const items = [onRequireModeratorMFAClick];
  const memo = react.useMemo(() => {
    let obj = {
      actions: {
        onEnableMFAClick() {
          const obj = closure_1_1(closure_1_2[4]);
          obj.hideActionSheet(closure_1_7);
          const obj2 = closure_1_1(closure_1_2[5]);
          obj2.close();
          const obj3 = onRequireModeratorMFAClick(closure_1_2[6]);
          const obj4 = { screen: constants.ACCOUNT };
          obj3.openUserSettings(obj4);
        },
        onRequireModeratorMFAClick() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(EligibilityActionSheet_str);
          onRequireModeratorMFAClick();
        }
      },
      sortedByIneligible: true
    };
    return obj;
  }, items);
  let obj = { startExpanded: true, children: items1 };
  const tmp3 = useCreatorMonetizationEligibilityItemsDefault(eligibility, memo);
  const BottomSheet = onRequireModeratorMFAClick(5390).BottomSheet;
  let obj2 = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(onRequireModeratorMFAClick(1113).t["3s47iN"]) };
  const Heading = onRequireModeratorMFAClick(5753).Heading;
  intl = onRequireModeratorMFAClick(1113).intl;
  items1 = [closure_5(Heading, obj2), ];
  let obj3 = { style: tmp.container, items: tmp3 };
  items1[1] = closure_5(EligibilityChecklistDefault, obj3);
  return closure_6(BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
