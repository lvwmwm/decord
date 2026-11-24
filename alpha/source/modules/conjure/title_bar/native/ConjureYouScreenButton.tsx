// Module ID: 14092
// Function ID: 14093
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 4917, 575, 14093, 1501, 14099, 11339, 14102, 14100, 1112, 4192, 14104, 2]

// Module 14092 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1501 */;
import _modDef4192 from "module_4192" /* 4192 */;
import MagicWandIcon from "MagicWandIcon" /* 11339 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14093 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14099 */;
import getIconSize from "getIconSize" /* 14100 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14102 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14104 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4917 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4192.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
