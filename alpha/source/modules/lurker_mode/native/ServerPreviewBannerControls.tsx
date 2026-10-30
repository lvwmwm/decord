// Module ID: 18181
// Function ID: 18182
// Name: ServerPreviewBannerControls
// Dependencies: [19, 17, 1072, 21, 5009, 575, 7516, 8020, 6997, 1114, 18182, 2]
// Exports: default

// Module 18181 (ServerPreviewBannerControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import AssetRegistryDefault from "AssetRegistry" /* 6997 */;
import transitionToGuild from "transitionToGuild" /* 7516 */;
import IconButton2 from "IconButton" /* 8020 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 18182 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
