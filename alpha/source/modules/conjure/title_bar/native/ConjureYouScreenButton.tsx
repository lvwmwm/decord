// Module ID: 10449
// Function ID: 10450
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5243, 575, 10450, 1500, 10456, 10459, 10461, 10457, 1113, 4079, 10463, 2]

// Module 10449 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1500 */;
import _modDef4079 from "module_4079" /* 4079 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 10450 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 10456 */;
import getIconSize from "getIconSize" /* 10457 */;
import MagicWandIcon from "MagicWandIcon" /* 10459 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 10461 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 10463 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { dot: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function ConjureYouScreenButton() {
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
  const intl = tmp5(1113).intl;
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4079.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
