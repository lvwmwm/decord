// Module ID: 14590
// Function ID: 14591
// Name: BountiesModalCloseButton
// Dependencies: [19, 21, 4836, 576, 5435, 1115, 5992, 2]
// Exports: default

// Module 14590 (BountiesModalCloseButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Pressables from "Pressables" /* 5435 */;
import XSmallIcon2 from "XSmallIcon" /* 5992 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
