// Module ID: 18349
// Function ID: 18350
// Name: ConjureYouBarButton
// Dependencies: [19, 16950, 21, 5005, 587, 14638, 558, 576, 14626, 1504, 14631, 12266, 18350, 14636, 2]

// Module 18349 (ConjureYouBarButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1504 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14626 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14636 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 14638 */;
import YouBarConstants from "YouBarConstants" /* 16950 */;
import YouBarButtonDefault from "YouBarButton" /* 18350 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const MagicWandIcon2 = tmp(12266);
function confirmUnpin() {
  confirmConjureYouBarPinDefault(false);
}
const YOU_BAR_BUTTON_ICON_SIZE = YouBarConstants.YOU_BAR_BUTTON_ICON_SIZE;
const jsx = Fragment.jsx;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouBarButton(hasNameplate) {
  let accessibilityLabel;
  let hasBadge;
  let str;
  let tmp9Result;
  let working;
  const obj = react2;
  const cResult = obj.c(12);
  hasNameplate = hasNameplate.hasNameplate;
  const canUnpin = hasNameplate.canUnpin;
  const tmp4 = closure_5();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  useConjureWandStatusDefault();
  const obj2 = Link;
  const isFocused = obj2.useIsFocused();
  if (cResult[0] === isFocused) {
    if (cResult[1] === hasNameplate) {
      if (cResult[2] === tmp4.icon) {
        let tmp8;
        if (cResult[3] === working) {
          tmp8 = cResult[4];
        }
        let tmp12;
        if (canUnpin) {
          tmp12 = confirmUnpin;
        }
        if (cResult[5] === accessibilityLabel) {
          if (cResult[6] === hasBadge) {
            if (cResult[7] === hasNameplate) {
              if (cResult[8] === tmp4.badge) {
                if (cResult[9] === tmp8) {
                  let tmp13;
                  if (cResult[10] === tmp12) {
                    tmp13 = cResult[11];
                  }
                  return tmp13;
                }
              }
            }
          }
        }
        YouBarButtonDefault;
        const tmp16 = <tmp5Result hasNameplate={hasNameplate} icon={tmp8} hasBadge={hasBadge} badgeStyle={tmp4.badge} onPress={openConjureProjectsSheetDefault} onLongPress={tmp12} accessibilityLabel={accessibilityLabel} />;
        cResult[5] = accessibilityLabel;
        cResult[6] = hasBadge;
        cResult[7] = hasNameplate;
        cResult[8] = tmp4.badge;
        cResult[9] = tmp8;
        cResult[10] = tmp12;
        cResult[11] = tmp16;
        tmp13 = tmp16;
      }
    }
  }
  if (working) {
    const obj4 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
    tmp9Result = tmp9(tmp5(14631), obj4);
  } else {
    const obj5 = { size: "custom", style: tmp4.icon, color: str };
    str = undefined;
    const MagicWandIcon = MagicWandIcon2.MagicWandIcon;
    if (hasNameplate) {
      str = "white";
    }
    tmp9Result = tmp9(MagicWandIcon, obj5);
  }
  cResult[0] = isFocused;
  cResult[1] = hasNameplate;
  cResult[2] = tmp4.icon;
  cResult[3] = working;
  cResult[4] = tmp9Result;
  tmp8 = tmp9Result;
}) : (function ConjureYouBarButton(hasNameplate) {
  let accessibilityLabel;
  let hasBadge;
  let str;
  let tmp7Result;
  let working;
  hasNameplate = hasNameplate.hasNameplate;
  const canUnpin = hasNameplate.canUnpin;
  const tmp = closure_5();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  useConjureWandStatusDefault();
  const obj = Link;
  const isFocused = obj.useIsFocused();
  YouBarButtonDefault;
  if (working) {
    const obj3 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
    tmp7Result = tmp7(tmp2(14631), obj3);
  } else {
    const obj4 = { size: "custom", style: tmp.icon, color: str };
    str = undefined;
    const MagicWandIcon = MagicWandIcon2.MagicWandIcon;
    if (hasNameplate) {
      str = "white";
    }
    tmp7Result = tmp7(MagicWandIcon, obj4);
  }
  let tmp11;
  if (canUnpin) {
    tmp11 = confirmUnpin;
  }
  return <tmp8 hasNameplate={hasNameplate} icon={tmp7Result} hasBadge={hasBadge} badgeStyle={tmp.badge} onPress={openConjureProjectsSheetDefault} onLongPress={tmp11} accessibilityLabel={accessibilityLabel} />;
}));
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarButton.tsx");

export default memoResult;
