// Module ID: 16404
// Function ID: 16405
// Name: OrbsArcadeRewardStatusLabel
// Dependencies: [19, 17, 21, 4971, 587, 16395, 1128, 558, 576, 5234, 8566, 2]

// Module 16404 (OrbsArcadeRewardStatusLabel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5234 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16395 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp4;
const LockIcon2 = tmp4(8566);
function getStatusLabel(type, arg1) {
  type = type.type;
  const FRACTIONAL_PREMIUM = OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM;
  if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED === arg1) {
    const intl3 = tmp(1128).intl;
    return intl3.string(intl4.t.R6Ksr9);
  } else if (OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE === arg1) {
    const intl2 = tmp(1128).intl;
    const string2 = intl2.string;
    const t2 = tmp(1128).t;
    return string2(type === FRACTIONAL_PREMIUM ? t2.pxxI1f : t2["A7+nP8"]);
  } else if (OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED === arg1) {
    const intl = tmp(1128).intl;
    const string = intl.string;
    const t = tmp(1128).t;
    return string(type === FRACTIONAL_PREMIUM ? t.vJFuxl : t["++O7TA"]);
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { statusLabel: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardStatusLabel(arg0) {
  let color;
  let items;
  let reward;
  let status;
  const obj = react2;
  const cResult = obj.c(12);
  ({ reward, status, color } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === reward) {
    let tmp6;
    if (cResult[1] === status) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === color) {
      let tmp8;
      let tmp11;
      if (cResult[4] === tmp6) {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== status) {
        let tmp12 = null;
        if (status === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
          const obj2 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
          const LockIcon = tmp(8566).LockIcon;
          tmp12 = React3(LockIcon, obj2);
        }
        cResult[6] = status;
        cResult[7] = tmp12;
        tmp11 = tmp12;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.statusLabel) {
        if (cResult[9] === tmp8) {
          let tmp15;
          if (cResult[10] === tmp11) {
            tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
      const obj3 = { style: tmp5, children: items };
      items = [tmp8, tmp11];
      const tmp18 = hasOwnProperty(View, obj3);
      cResult[8] = tmp4.statusLabel;
      cResult[9] = tmp8;
      cResult[10] = tmp11;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    const obj4 = { variant: "heading-sm/semibold", color, children: tmp6 };
    const tmp10 = React3(Text_Text.Text, obj4);
    cResult[3] = color;
    cResult[4] = tmp6;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const tmp7 = getStatusLabel(reward, status);
  cResult[0] = reward;
  cResult[1] = status;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function OrbsArcadeRewardStatusLabel(status) {
  let color;
  let items;
  let reward;
  status = status.status;
  ({ reward, color } = status);
  const obj = { style: closure_6().statusLabel, children: items };
  const obj2 = { variant: "heading-sm/semibold", color, children: getStatusLabel(reward, status) };
  const Text = Text_Text.Text;
  items = [React3(Text, obj2), ];
  let tmp3Result = null;
  const tmp = hasOwnProperty;
  const tmp2 = View;
  const tmp3 = React3;
  if (status === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
    const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
    const LockIcon = LockIcon2.LockIcon;
    tmp3Result = tmp3(LockIcon, obj3);
  }
  items[1] = tmp3Result;
  return tmp(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardStatusLabel.tsx");

export default tmp4;
