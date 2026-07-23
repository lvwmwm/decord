// Module ID: 15861
// Function ID: 122597
// Name: useVoicePanelButtonStyles
// Dependencies: [4130, 689, 8277, 1324, 2]
// Exports: useVoicePanelButtonStyles

// Module 15861 (useVoicePanelButtonStyles)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  obj = {};
  let str = "transparent";
  if (!arg1) {
    str = importDefault(689).colors.BACKGROUND_MOD_STRONG;
  }
  obj.backgroundColor = str;
  obj.iconBg = obj;
  obj = { backgroundColor: importDefault(689).colors.WHITE };
  obj.iconBgSelected = obj;
  obj.iconBgVoiceMuted = { borderWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_VOICE_MUTED, backgroundColor: importDefault(689).colors.BACKGROUND_VOICE_MUTED };
  const obj2 = {};
  const colors = importDefault(689).colors;
  if (arg0) {
    let INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  } else {
    INTERACTIVE_TEXT_DEFAULT = arg1 ? colors.ICON_STRONG : colors.WHITE;
  }
  obj2.color = INTERACTIVE_TEXT_DEFAULT;
  obj.iconFill = obj2;
  const obj1 = { borderWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_VOICE_MUTED, backgroundColor: importDefault(689).colors.BACKGROUND_VOICE_MUTED };
  obj.iconFillMuted = { color: importDefault(689).colors.ICON_MUTED };
  const obj3 = { color: importDefault(689).colors.ICON_MUTED };
  obj.iconFillRed = { color: importDefault(689).unsafe_rawColors.RED_400 };
  const obj4 = { color: importDefault(689).unsafe_rawColors.RED_400 };
  obj.iconFillSelected = { color: importDefault(689).colors.BLACK };
  const obj6 = {};
  const colors2 = importDefault(689).colors;
  obj6.backgroundColor = arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE;
  obj.iconBadgeIndicator = obj6;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  const derivedStateFromSharedValue = require(8277) /* _createForOfIteratorHelperLoose */.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode);
  return callback(derivedStateFromSharedValue, importDefault(1324)("VoicePanelStyles"));
};
