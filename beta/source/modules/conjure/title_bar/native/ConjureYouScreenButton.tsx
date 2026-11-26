// Module ID: 13773
// Function ID: 13774
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 4913, 575, 13774, 1501, 13780, 12325, 13783, 13781, 1112, 4190, 13785, 2]

// Module 13773 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1501 */;
import _modDef4190 from "module_4190" /* 4190 */;
import MagicWandIcon from "MagicWandIcon" /* 12325 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 13774 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 13780 */;
import getIconSize from "getIconSize" /* 13781 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 13783 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13785 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
  const intl = tmp5(1112).intl;
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4190.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
