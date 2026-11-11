// Module ID: 18969
// Function ID: 18970
// Name: GuildsBarSeparator
// Dependencies: [19, 21, 5243, 575, 5839, 18618, 1652, 7656, 2]

// Module 18969 (GuildsBarSeparator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5839 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18618 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let obj1;

let tmp2;
let tmp3;
const _modDef1652 = tmp3(1652);
const NativeViewDefault = tmp2(7656);
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  guildItemSize = guildItemSize.guildItemSize;
  const tmp = closure_4(guildItemSize);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const obj2 = useHomeDrawerGesture;
  const panelTranslateX = obj2.useHomeDrawerState().panelTranslateX;
  let items = [closure_5, token, panelTranslateX, guildItemSize];
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  const obj3 = _mod1652;
  class GuildsBarSeparatorTsx1 {
    constructor() {
      obj = { backgroundColor: closure_0, transform: null };
      obj1 = { scaleX: Math.max(1, (closure_1.get() + closure_2) / closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  GuildsBarSeparatorTsx1.__closure = items1;
  GuildsBarSeparatorTsx1.__workletHash = 17321522248050;
  GuildsBarSeparatorTsx1.__initData = tmp5;
  const animatedStyle = obj3.useAnimatedStyle(GuildsBarSeparatorTsx1);
  const items2 = [tmp.separator, animatedStyle];
  return jsx(_modDef1652.View, { style: items2 });
}
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((width) => {
  const obj = { separator: size };
  size = { height: 1, width, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, transformOrigin: "0% 50%" };
  return obj;
});
let closure_5 = { code: "(function GuildsBarSeparatorTsx1(){let[separatorColor,panelTranslateX,guildItemSize]=this.__closure;return{backgroundColor:separatorColor,transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};})" };
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
