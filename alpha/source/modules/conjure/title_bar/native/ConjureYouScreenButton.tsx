// Module ID: 14922
// Function ID: 14923
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5141, 575, 14923, 1500, 14925, 12321, 14928, 14926, 1113, 3995, 13225, 2]

// Module 14922 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1500 */;
import _modDef3995 from "module_3995" /* 3995 */;
import MagicWandIcon from "MagicWandIcon" /* 12321 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13225 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14923 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14925 */;
import getIconSize from "getIconSize" /* 14926 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14928 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef3995.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
