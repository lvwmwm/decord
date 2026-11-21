// Module ID: 13769
// Function ID: 13770
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 4913, 575, 13770, 1501, 13776, 12322, 13779, 13777, 1112, 4190, 13781, 2]

// Module 13769 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1501 */;
import _modDef4190 from "module_4190" /* 4190 */;
import MagicWandIcon from "MagicWandIcon" /* 12322 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 13770 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 13776 */;
import getIconSize from "getIconSize" /* 13777 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 13779 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13781 */;
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
