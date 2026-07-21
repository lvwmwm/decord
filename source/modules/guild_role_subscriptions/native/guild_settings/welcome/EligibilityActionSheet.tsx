// Module ID: 16248
// Function ID: 125553
// Name: EligibilityActionSheet
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16248 (EligibilityActionSheet)
import closure_3 from "__exportStarResult1";
import { UserSettingsSections } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
let closure_7 = __exportStarResult1.createStyles({ container: {}, title: {} });
const result = __exportStarResult1.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const arg1 = onRequireModeratorMFAClick;
  const tmp = callback3();
  const items = [onRequireModeratorMFAClick];
  const memo = React.useMemo(() => {
    const actions = {
      onEnableMFAClick() {
        let obj = callback2(closure_2[4]);
        obj.hideActionSheet("EligibilityActionSheet");
        callback2(closure_2[5]).close();
        const obj2 = callback2(closure_2[5]);
        obj = { screen: constants.ACCOUNT };
        callback(closure_2[6]).openUserSettings(obj);
      },
      onRequireModeratorMFAClick() {
        callback2(closure_2[4]).hideActionSheet("EligibilityActionSheet");
        callback();
      }
    };
    return { actions, sortedByIneligible: true };
  }, items);
  let obj = { startExpanded: true };
  obj = { "Null": true, "Null": true, "Null": true, style: tmp.title };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.3s47iN);
  const items1 = [callback(arg1(dependencyMap[9]).Heading, obj), ];
  obj = { style: tmp.container, items: importDefault(dependencyMap[7])(onRequireModeratorMFAClick.eligibility, memo) };
  items1[1] = callback(importDefault(dependencyMap[11]), obj);
  obj.children = items1;
  return callback2(arg1(dependencyMap[8]).BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
