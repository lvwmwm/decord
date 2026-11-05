// Module ID: 19625
// Function ID: 19626
// Name: VoicePanelLockedIcon
// Dependencies: [19, 21, 5143, 575, 7104, 1187, 19626, 2]
// Exports: default

// Module 19625 (VoicePanelLockedIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import NativeViewDefault from "NativeView" /* 7104 */;
import AssetRegistryDefault from "AssetRegistry" /* 19626 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
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
