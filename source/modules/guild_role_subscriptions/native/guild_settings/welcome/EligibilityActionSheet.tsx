// Module ID: 16256
// Function ID: 125614
// Name: EligibilityActionSheet
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16256 (EligibilityActionSheet)
import closure_3 from "result";
import { UserSettingsSections } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_5, jsxs: closure_6 } = result);
let closure_7 = result.createStyles({ container: { surrogates: null, paths: null }, title: {} });
result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

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
  obj = { delete: true, dispatch: true, raw: true, style: tmp.title };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.3s47iN);
  const items1 = [callback(arg1(dependencyMap[9]).Heading, obj), ];
  obj = { style: tmp.container, items: importDefault(dependencyMap[7])(onRequireModeratorMFAClick.eligibility, memo) };
  items1[1] = callback(importDefault(dependencyMap[11]), obj);
  obj.children = items1;
  return callback2(arg1(dependencyMap[8]).BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
