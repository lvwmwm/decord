// Module ID: 15810
// Function ID: 15811
// Name: ServerPreviewBannerControls
// Dependencies: [19, 17, 1074, 21, 4836, 576, 6760, 7363, 5941, 1115, 15811, 2]
// Exports: default

// Module 15810 (ServerPreviewBannerControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AssetRegistryDefault from "AssetRegistry" /* 5941 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import IconButton2 from "IconButton" /* 7363 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 15811 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let rect;
const View = react_native.View;
const MOBILE_GUILD_UPSELL_LIST = Constants.MOBILE_GUILD_UPSELL_LIST;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { row: rect };
rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  let intl;
  let items;
  let obj = { style: closure_8().row, children: items };
  closure_8();
  const callback = react.useCallback(() => {
    const obj = transitionToGuild;
    obj.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
  }, []);
  const obj2 = { size: "md", variant: "secondary-overlay", icon: AssetRegistryDefault, onPress: callback, accessibilityLabel: intl.string(intl2.t["13/7kX"]), maxFontSizeMultiplier: 1.5 };
  const IconButton = IconButton2.IconButton;
  intl = intl2.intl;
  items = [metroRequire(IconButton, obj2), metroRequire(ServerPreviewPillDefault, {})];
  return metroImportDefault(View, obj);
};
