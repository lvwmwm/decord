// Module ID: 18361
// Function ID: 18362
// Name: GuildsBarSeparator
// Dependencies: [19, 21, 5009, 575, 18024, 5090, 7235, 5591, 6954, 2]

// Module 18361 (GuildsBarSeparator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import useToken from "useToken" /* 5591 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7235 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18024 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let tmp2;
const NativeViewDefault = tmp2(6954);
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  const tmp = closure_4(guildItemSize);
  let obj = useHomeDrawerGesture;
  const panelTranslateX = obj.useHomeDrawerState().panelTranslateX;
  const obj2 = ReanimatedRexport;
  const fn = function n() {
    let items;
    const obj = { transform: items };
    items = [{ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) }];
    ({ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) });
    return obj;
  };
  fn.__closure = { panelTranslateX, guildItemSize };
  fn.__workletHash = 7666765056610;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let items = [tmp.separator, animatedStyle];
  return jsx(ReanimatedNativeViewDefault, { style: items });
}
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((width) => {
  const obj = { separator: size };
  size = { height: 1, width, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, transformOrigin: "0% 50%" };
  return obj;
});
const __initData = { code: "function GuildsBarSeparatorTsx1(){const{panelTranslateX,guildItemSize}=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};}" };
const memoResult = react.memo(function GuildsBarSeparator() {
  let tmp5Result;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp4 = closure_4(token);
  const obj2 = useHomeDrawerGesture;
  if (obj2.useIsHomeDrawerEnabled()) {
    const obj3 = { guildItemSize: token };
    tmp5Result = tmp5(GuildsBarHomeDrawerSeparator, obj3);
  } else {
    const obj4 = { style: tmp4.separator };
    tmp5Result = tmp5(NativeViewDefault, obj4);
  }
  return tmp5Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;
