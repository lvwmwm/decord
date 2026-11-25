// Module ID: 14215
// Function ID: 14216
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5012, 575, 14216, 1501, 14222, 11438, 14225, 14223, 1112, 4244, 14227, 2]

// Module 14215 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1501 */;
import _modDef4244 from "module_4244" /* 4244 */;
import MagicWandIcon from "MagicWandIcon" /* 11438 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14216 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14222 */;
import getIconSize from "getIconSize" /* 14223 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14225 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14227 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4244.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
