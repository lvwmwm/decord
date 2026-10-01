// Module ID: 17514
// Function ID: 17515
// Name: EligibilityActionSheet
// Dependencies: [19, 1074, 21, 4836, 4800, 9048, 6800, 17515, 6571, 4832, 1115, 17519, 2]
// Exports: default

// Module 17514 (EligibilityActionSheet)
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 17515 */;
import EligibilityChecklistDefault from "EligibilityChecklist" /* 17519 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

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
  BottomSheet = onRequireModeratorMFAClick(6571).BottomSheet;
  let obj2 = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(onRequireModeratorMFAClick(1115).t["3s47iN"]) };
  const Heading = onRequireModeratorMFAClick(4832).Heading;
  intl = onRequireModeratorMFAClick(1115).intl;
  items1 = [closure_5(Heading, obj2), ];
  let obj3 = { style: tmp.container, items: tmp3 };
  items1[1] = closure_5(EligibilityChecklistDefault, obj3);
  return closure_6(BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
