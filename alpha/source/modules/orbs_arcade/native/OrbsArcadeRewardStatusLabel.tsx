// Module ID: 17548
// Function ID: 17549
// Name: OrbsArcadeRewardStatusLabel
// Dependencies: [19, 17, 21, 5243, 17530, 1113, 5866, 8027, 575, 2]
// Exports: default

// Module 17548 (OrbsArcadeRewardStatusLabel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17530 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ statusLabel: { flexDirection: "row", alignItems: "center", gap: 2 } });
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardStatusLabel.tsx");

export default function OrbsArcadeRewardStatusLabel(status) {
  let color;
  let items;
  let reward;
  let stringResult;
  status = status.status;
  ({ reward, color } = status);
  const obj = { style: closure_6().statusLabel, children: items };
  const obj2 = { variant: "heading-xs/semibold", color, children: stringResult };
  const Text = Text_Text.Text;
  const type = reward.type;
  const FRACTIONAL_PREMIUM = OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM;
  const tmp = hasOwnProperty;
  const tmp2 = View;
  if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED === status) {
    const intl2 = tmp4(1113).intl;
    stringResult = intl2.string(tmp4(1113).t.R6Ksr9);
  } else if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE === status) {
    const intl = tmp4(1113).intl;
    const string = intl.string;
    const t = tmp4(1113).t;
    stringResult = string(tmp9 ? t.pxxI1f : t["A7+nP8"]);
  } else if (OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED === status) {
    const intl3 = tmp4(1113).intl;
    const string2 = intl3.string;
    const t2 = tmp4(1113).t;
    stringResult = string2(tmp9 ? t2.vJFuxl : t2["++O7TA"]);
  }
  items = [React3(Text, obj2), ];
  let tmp3Result = null;
  if (status === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
    const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
    const LockIcon = tmp4(8027).LockIcon;
    tmp3Result = tmp3(LockIcon, obj3);
  }
  items[1] = tmp3Result;
  return tmp(tmp2, obj);
};
