// Module ID: 17605
// Function ID: 17606
// Name: ServerPreviewBannerControls
// Dependencies: [19, 17, 1087, 21, 4971, 587, 558, 576, 7449, 7959, 6929, 1128, 17606, 2]

// Module 17605 (ServerPreviewBannerControls)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import AssetRegistryDefault from "AssetRegistry" /* 6929 */;
import transitionToGuild from "transitionToGuild" /* 7449 */;
import IconButton2 from "IconButton" /* 7959 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 17606 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ServerPreviewBannerControls() {
  let first;
  let intl;
  let items;
  let tmp12;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = transitionToGuild;
      obj.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "md", variant: "secondary-overlay", icon: AssetRegistryDefault, onPress: first, accessibilityLabel: intl.string(intl2.t["13/7kX"]), maxFontSizeMultiplier: 1.5 };
    const IconButton = tmp(7959).IconButton;
    intl = tmp(1128).intl;
    const tmp10 = metroRequire(IconButton, obj2);
    const tmp11 = metroRequire(ServerPreviewPillDefault, {});
    cResult[1] = tmp10;
    cResult[2] = tmp11;
    tmp7 = tmp11;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.row) {
    const obj3 = { style: tmp4.row, children: items };
    items = [tmp6, tmp7];
    const tmp15 = metroImportDefault(View, obj3);
    cResult[3] = tmp4.row;
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (function ServerPreviewBannerControls() {
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
});
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default tmp3;
