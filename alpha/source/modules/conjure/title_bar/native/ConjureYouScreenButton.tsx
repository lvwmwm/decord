// Module ID: 14274
// Function ID: 14275
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5043, 575, 14275, 1502, 14281, 11495, 14284, 14282, 1112, 4245, 14286, 2]

// Module 14274 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1502 */;
import _modDef4245 from "module_4245" /* 4245 */;
import MagicWandIcon from "MagicWandIcon" /* 11495 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14275 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14281 */;
import getIconSize from "getIconSize" /* 14282 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14284 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14286 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4245.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
