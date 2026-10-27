// Module ID: 14168
// Function ID: 14169
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 4972, 587, 558, 576, 14169, 1503, 14173, 14175, 1125, 3831, 14176, 12174, 14178, 2]

// Module 14168 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1503 */;
import _modDef3831 from "module_3831" /* 3831 */;
import MagicWandIcon from "MagicWandIcon" /* 12174 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14169 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14173 */;
import getIconSize from "getIconSize" /* 14175 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14176 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14178 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { dot: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouScreenButton() {
  let accessibilityLabel;
  let hasBadge;
  let working;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_4();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  useConjureWandStatusDefault();
  const obj2 = Link;
  const isFocused = obj2.useIsFocused();
  if (cResult[0] === isFocused) {
    let tmp8;
    let tmp13;
    if (cResult[1] === working) {
      tmp8 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(_modDef3831.uk6jhJ);
      cResult[3] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] === accessibilityLabel) {
      if (cResult[5] === hasBadge) {
        if (cResult[6] === tmp4.dot) {
          let tmp15;
          if (cResult[7] === tmp8) {
            tmp15 = cResult[8];
          }
          return tmp15;
        }
      }
    }
    YouScreenNavIconDefault;
    const tmp18 = <tmp5Result IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp8} accessibilityLabel={accessibilityLabel} label={tmp13} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp4.dot} />;
    cResult[4] = accessibilityLabel;
    cResult[5] = hasBadge;
    cResult[6] = tmp4.dot;
    cResult[7] = tmp8;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  let tmp9;
  if (working) {
    ConjureWorkingWandDefault;
    tmp9 = <tmp5Result2 size={getIconSize.ICON_SIZE.md} paused={!isFocused} />;
  }
  cResult[0] = isFocused;
  cResult[1] = working;
  cResult[2] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureYouScreenButton() {
  let accessibilityLabel;
  let hasBadge;
  let working;
  const tmp = closure_4();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  useConjureWandStatusDefault();
  const obj = Link;
  const isFocused = obj.useIsFocused();
  YouScreenNavIconDefault;
  let tmp7Result;
  if (working) {
    const obj3 = { size: getIconSize.ICON_SIZE.md, paused: !isFocused };
    const tmp2Result = ConjureWorkingWandDefault;
    tmp7Result = tmp7(tmp2Result, obj3);
  }
  const intl = tmp5(1125).intl;
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef3831.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
}));
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
