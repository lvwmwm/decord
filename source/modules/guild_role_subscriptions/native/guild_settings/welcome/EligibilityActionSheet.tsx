// Module ID: 16451
// Function ID: 128369
// Name: EligibilityActionSheet
// Dependencies: [31, 653, 33, 4131, 4099, 8242, 6554, 16452, 5187, 4127, 1212, 16456, 2]
// Exports: default

// Module 16451 (EligibilityActionSheet)
import result from "result";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, paddingHorizontal: 0 }, title: { marginHorizontal: 24, marginTop: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp = callback3();
  const items = [onRequireModeratorMFAClick];
  const memo = React.useMemo(() => {
    const actions = {
      onEnableMFAClick() {
        let obj = outer2_1(outer2_2[4]);
        obj.hideActionSheet("EligibilityActionSheet");
        outer2_1(outer2_2[5]).close();
        const obj2 = outer2_1(outer2_2[5]);
        obj = { screen: outer2_4.ACCOUNT };
        onRequireModeratorMFAClick(outer2_2[6]).openUserSettings(obj);
      },
      onRequireModeratorMFAClick() {
        outer2_1(outer2_2[4]).hideActionSheet("EligibilityActionSheet");
        outer1_0();
      }
    };
    return { actions, sortedByIneligible: true };
  }, items);
  let obj = { startExpanded: true };
  obj = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = onRequireModeratorMFAClick(1212).intl;
  obj.children = intl.string(onRequireModeratorMFAClick(1212).t["3s47iN"]);
  const items1 = [callback(onRequireModeratorMFAClick(4127).Heading, obj), ];
  obj = { style: tmp.container, items: importDefault(16452)(onRequireModeratorMFAClick.eligibility, memo) };
  items1[1] = callback(importDefault(16456), obj);
  obj.children = items1;
  return callback2(onRequireModeratorMFAClick(5187).BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
