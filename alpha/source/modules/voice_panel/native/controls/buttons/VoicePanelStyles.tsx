// Module ID: 19303
// Function ID: 19304
// Name: VoicePanelStyles
// Dependencies: [5014, 575, 8841, 2]
// Exports: useVoicePanelButtonStyles

// Module 19303 (VoicePanelStyles)
import nativeDefault from "native" /* 575 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 8841 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createStyles((arg0) => {
  let colors;
  let colors2;
  const obj = { iconBg: { backgroundColor: "transparent" }, iconBgSelected: { backgroundColor: nativeDefault.colors.WHITE }, iconBgVoiceMuted: { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED }, iconFill: { color: arg0 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_STRONG }, iconFillMuted: { color: nativeDefault.colors.ICON_MUTED }, iconFillRed: { color: nativeDefault.unsafe_rawColors.RED_400 }, iconFillSelected: { color: nativeDefault.colors.BLACK }, iconBadgeIndicator: { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.ICON_STRONG } };
  ({ backgroundColor: nativeDefault.colors.WHITE });
  ({ borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED });
  colors = nativeDefault.colors;
  ({ color: nativeDefault.colors.ICON_MUTED });
  ({ color: nativeDefault.unsafe_rawColors.RED_400 });
  ({ color: nativeDefault.colors.BLACK });
  colors2 = tmp(575).colors;
  return obj;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export function useVoicePanelButtonStyles(wrapperSpecs) {
  const obj = useStateFromSharedValue;
  return closure_3(obj.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode));
}
