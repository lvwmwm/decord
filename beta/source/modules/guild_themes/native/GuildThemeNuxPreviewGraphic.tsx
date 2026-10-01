// Module ID: 15795
// Function ID: 15796
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: [19, 17, 21, 4836, 576, 15796, 2]
// Exports: default

// Module 15795 (GuildThemeNuxPreviewGraphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import GuildThemePreviewArtDefault from "GuildThemePreviewArt" /* 15796 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { container: { width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 } };
({ width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 });
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  GuildThemePreviewArtDefault;
  return <tmp2 accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={closure_4().container}>{null}</tmp2>;
};
