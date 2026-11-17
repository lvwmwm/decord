// Module ID: 15091
// Function ID: 15092
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5310, 575, 15092, 1503, 15094, 14434, 15097, 15095, 1113, 4133, 15020, 2]

// Module 15091 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1503 */;
import _modDef4133 from "module_4133" /* 4133 */;
import MagicWandIcon from "MagicWandIcon" /* 14434 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 15020 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 15092 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 15094 */;
import getIconSize from "getIconSize" /* 15095 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 15097 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4133.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
