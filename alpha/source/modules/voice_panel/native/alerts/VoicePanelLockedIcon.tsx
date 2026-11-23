// Module ID: 19352
// Function ID: 19353
// Name: VoicePanelLockedIcon
// Dependencies: [19, 21, 4913, 575, 7324, 1186, 19353, 2]
// Exports: default

// Module 19352 (VoicePanelLockedIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import NativeViewDefault from "NativeView" /* 7324 */;
import AssetRegistryDefault from "AssetRegistry" /* 19353 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
const obj = { container: size, icon: {} };
size = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
let closure_4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = closure_4();
  ({ style: tmp.icon, source: AssetRegistryDefault, size: native.IconSizes.LARGE });
  NativeViewDefault;
  const Icon = native.Icon;
  return <tmp2 style={tmp.container}>{null}</tmp2>;
};
