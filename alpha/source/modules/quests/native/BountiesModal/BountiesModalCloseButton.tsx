// Module ID: 16250
// Function ID: 16251
// Name: BountiesModalCloseButton
// Dependencies: [19, 21, 4794, 575, 6910, 1112, 7031, 2]
// Exports: default

// Module 16250 (BountiesModalCloseButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import Pressables from "Pressables" /* 6910 */;
import XSmallIcon2 from "XSmallIcon" /* 7031 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles(() => {
  const obj = { closeButton: size };
  size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  onPress = onPress.onPress;
  const tmp = closure_4();
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  ({ size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
  const XSmallIcon = XSmallIcon2.XSmallIcon;
  return <PressableOpacity accessibilityLabel={intl.string(intl2.t.cpT0Cq)} accessibilityRole="button" hitSlop={12} onPress={onPress} style={tmp.closeButton}>{null}</PressableOpacity>;
};
