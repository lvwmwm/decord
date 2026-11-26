// Module ID: 14134
// Function ID: 14135
// Name: MediaModalOverlayAltText
// Dependencies: [19, 21, 5043, 575, 1629, 4868, 6152, 12005, 5634, 1112, 2]

// Module 14134 (MediaModalOverlayAltText)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet" /* 12005 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { container: { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 + arg0, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, alignSelf: "flex-end" } };
  ({ backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 + arg0, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, alignSelf: "flex-end" });
  return obj;
});
const memoResult = react.memo(function MediaModalOverlayAltTextButton(description) {
  let intl;
  let str;
  let tmp = dependencyMap;
  const tmp2 = closure_4(useSafeAreaInsetsDefault().right);
  if (str == null) {
    str = "";
  }
  const ViewImageDescriptions = str(4868).ViewImageDescriptions;
  let tmp4 = null;
  if (ViewImageDescriptions.useSetting()) {
    tmp4 = null;
    if (0 !== str.length) {
      const PressableOpacity = tmp3(6152).PressableOpacity;
      ({ variant: "body-xs/semibold", color: "text-overlay-light", children: intl.string(str(1112).t.Q5VqrN) });
      const Text = tmp3(5634).Text;
      intl = tmp3(1112).intl;
      tmp4 = <PressableOpacity style={tmp2.container} onPress={function onPress() {
        const tmp = openMediaModalOverlayAltTextSheetDefault;
        tmp({ description: str });
      }} hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}>{null}</PressableOpacity>;
    }
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx");

export default memoResult;
