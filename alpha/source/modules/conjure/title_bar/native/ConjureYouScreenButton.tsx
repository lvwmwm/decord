// Module ID: 13694
// Function ID: 13695
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 4823, 575, 13695, 1503, 13701, 13704, 13706, 13702, 1113, 4121, 13708, 2]

// Module 13694 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1503 */;
import _modDef4121 from "module_4121" /* 4121 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 13695 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 13701 */;
import getIconSize from "getIconSize" /* 13702 */;
import MagicWandIcon from "MagicWandIcon" /* 13704 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 13706 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13708 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4823 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4121.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
