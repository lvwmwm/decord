// Module ID: 14858
// Function ID: 14859
// Name: BountiesModalCloseButton
// Dependencies: [19, 21, 4890, 587, 558, 576, 1126, 6017, 5909, 2]

// Module 14858 (BountiesModalCloseButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Pressables from "Pressables" /* 5909 */;
import XSmallIcon2 from "XSmallIcon" /* 6017 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let onPress;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles(() => {
  const obj = { closeButton: size };
  size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32 };
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(5);
  onPress = onPress.onPress;
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t.cpT0Cq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const XSmallIcon = tmp(6017).XSmallIcon;
    const tmp10 = <XSmallIcon size="sm" color={nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT} />;
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === onPress) {
    let tmp11;
    if (cResult[3] === tmp4.closeButton) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(Pressables.PressableOpacity, { accessibilityLabel: first, accessibilityRole: "button", hitSlop: 12, onPress, style: tmp4.closeButton, children: tmp7 });
  cResult[2] = onPress;
  cResult[3] = tmp4.closeButton;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((onPress) => {
  onPress = onPress.onPress;
  const tmp = closure_4();
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  ({ size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
  const XSmallIcon = XSmallIcon2.XSmallIcon;
  return <PressableOpacity accessibilityLabel={intl.string(intl2.t.cpT0Cq)} accessibilityRole="button" hitSlop={12} onPress={onPress} style={tmp.closeButton}>{null}</PressableOpacity>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default tmp3;
