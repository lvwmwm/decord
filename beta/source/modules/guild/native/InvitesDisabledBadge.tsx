// Module ID: 15939
// Function ID: 15940
// Name: InvitesDisabledBadge
// Dependencies: [19, 17, 21, 4836, 576, 1177, 12239, 2]

// Module 15939 (InvitesDisabledBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AssetRegistryDefault from "AssetRegistry" /* 12239 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 }, pauseBackground: size, pauseRing: size1 };
size = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, padding: native.BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -native.BADGE_PADDING, right: -native.BADGE_PADDING, padding: native.BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
let closure_5 = createStyles(obj);
const memoResult = react.memo(function InvitesDisabledBadge(style) {
  style = style.style;
  const tmp = closure_5();
  const items = [tmp.pauseRing, style];
  ({ style: tmp.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: AssetRegistryDefault });
  const ThemedIcon = native.ThemedIcon;
  return <View style={items}>{null}</View>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default memoResult;
