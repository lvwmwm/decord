// Module ID: 18701
// Function ID: 18702
// Name: GuildsBarSeparator
// Dependencies: [19, 21, 5143, 575, 18365, 1652, 5734, 7104, 2]

// Module 18701 (GuildsBarSeparator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5734 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18365 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let obj1;

let tmp2;
const NativeViewDefault = tmp2(7104);
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  let tmp3;
  let tmp4;
  let tmp5;
  guildItemSize = guildItemSize.guildItemSize;
  const tmp = closure_4(guildItemSize);
  let obj = useHomeDrawerGesture;
  const panelTranslateX = obj.useHomeDrawerState().panelTranslateX;
  const obj2 = _mod1652;
  let items = [closure_5, panelTranslateX, guildItemSize];
  let c0;
  let c1;
  [tmp3, tmp4, tmp5] = items;
  class GuildsBarSeparatorTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { scaleX: Math.max(1, (closure_0.get() + closure_1) / closure_1) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp4, tmp5];
  GuildsBarSeparatorTsx1.__closure = items1;
  GuildsBarSeparatorTsx1.__workletHash = 16141865753371;
  GuildsBarSeparatorTsx1.__initData = tmp3;
  const animatedStyle = obj2.useAnimatedStyle(GuildsBarSeparatorTsx1);
  const items2 = [tmp.separator, animatedStyle];
  return jsx(_modDef1652.View, { style: items2 });
}
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((width) => {
  const obj = { separator: size };
  size = { height: 1, width, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, transformOrigin: "0% 50%" };
  return obj;
});
let closure_5 = { code: "(function GuildsBarSeparatorTsx1(){let[panelTranslateX,guildItemSize]=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};})" };
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
