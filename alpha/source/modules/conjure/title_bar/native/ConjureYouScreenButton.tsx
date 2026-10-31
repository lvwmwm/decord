// Module ID: 14696
// Function ID: 14697
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5014, 575, 14697, 1498, 14702, 12464, 14705, 14703, 1113, 3868, 14707, 2]

// Module 14696 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1498 */;
import _modDef3868 from "module_3868" /* 3868 */;
import MagicWandIcon from "MagicWandIcon" /* 12464 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14697 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14702 */;
import getIconSize from "getIconSize" /* 14703 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14705 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14707 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef3868.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
