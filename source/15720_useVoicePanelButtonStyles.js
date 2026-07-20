// Module ID: 15720
// Function ID: 120192
// Name: useVoicePanelButtonStyles
// Dependencies: []
// Exports: useVoicePanelButtonStyles

// Module 15720 (useVoicePanelButtonStyles)
const _module = require(dependencyMap[0]);
let closure_3 = _module.createStyles((arg0, arg1) => {
  let obj = {};
  obj = {};
  let str = "transparent";
  if (!arg1) {
    str = importDefault(dependencyMap[1]).colors.BACKGROUND_MOD_STRONG;
  }
  obj.backgroundColor = str;
  obj.iconBg = obj;
  obj = { backgroundColor: importDefault(dependencyMap[1]).colors.WHITE };
  obj.iconBgSelected = obj;
  obj.iconBgVoiceMuted = { borderWidth: 1, borderColor: importDefault(dependencyMap[1]).colors.BACKGROUND_VOICE_MUTED, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_VOICE_MUTED };
  const obj2 = {};
  const colors = importDefault(dependencyMap[1]).colors;
  if (arg0) {
    let INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  } else {
    INTERACTIVE_TEXT_DEFAULT = arg1 ? colors.ICON_STRONG : colors.WHITE;
  }
  obj2.color = INTERACTIVE_TEXT_DEFAULT;
  obj.iconFill = obj2;
  const obj1 = { borderWidth: 1, borderColor: importDefault(dependencyMap[1]).colors.BACKGROUND_VOICE_MUTED, backgroundColor: importDefault(dependencyMap[1]).colors.BACKGROUND_VOICE_MUTED };
  obj.iconFillMuted = { color: importDefault(dependencyMap[1]).colors.ICON_MUTED };
  const obj3 = { color: importDefault(dependencyMap[1]).colors.ICON_MUTED };
  obj.iconFillRed = { color: importDefault(dependencyMap[1]).unsafe_rawColors.RED_400 };
  const obj4 = { color: importDefault(dependencyMap[1]).unsafe_rawColors.RED_400 };
  obj.iconFillSelected = { color: importDefault(dependencyMap[1]).colors.BLACK };
  const obj6 = {};
  const colors2 = importDefault(dependencyMap[1]).colors;
  obj6.backgroundColor = arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE;
  obj.iconBadgeIndicator = obj6;
  return obj;
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  const derivedStateFromSharedValue = require(dependencyMap[2]).useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode);
  return callback(derivedStateFromSharedValue, importDefault(dependencyMap[3])("VoicePanelStyles"));
};
