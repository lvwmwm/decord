// Module ID: 19935
// Function ID: 19936
// Name: VoicePanelLockedIcon
// Dependencies: [19, 21, 5243, 575, 7656, 1187, 19936, 2]
// Exports: default

// Module 19935 (VoicePanelLockedIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import NativeViewDefault from "NativeView" /* 7656 */;
import AssetRegistryDefault from "AssetRegistry" /* 19936 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
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
