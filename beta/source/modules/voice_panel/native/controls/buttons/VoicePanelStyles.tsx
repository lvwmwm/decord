// Module ID: 17008
// Function ID: 17009
// Name: VoicePanelStyles
// Dependencies: [4836, 576, 7715, 2]
// Exports: useVoicePanelButtonStyles

// Module 17008 (VoicePanelStyles)
import nativeDefault from "native" /* 576 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 7715 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createStyles((arg0) => {
  let colors;
  let colors2;
  const obj = { iconBg: { backgroundColor: "transparent" }, iconBgSelected: { backgroundColor: nativeDefault.colors.WHITE }, iconBgVoiceMuted: { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED }, iconFill: { color: arg0 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_STRONG }, iconFillMuted: { color: nativeDefault.colors.ICON_MUTED }, iconFillRed: { color: nativeDefault.unsafe_rawColors.RED_400 }, iconFillSelected: { color: nativeDefault.colors.BLACK }, iconBadgeIndicator: { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE } };
  ({ backgroundColor: nativeDefault.colors.WHITE });
  ({ borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED });
  colors = nativeDefault.colors;
  ({ color: nativeDefault.colors.ICON_MUTED });
  ({ color: nativeDefault.unsafe_rawColors.RED_400 });
  ({ color: nativeDefault.colors.BLACK });
  colors2 = tmp(576).colors;
  return obj;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  const obj = useStateFromSharedValue;
  return closure_3(obj.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode));
};
