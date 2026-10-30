// Module ID: 18365
// Function ID: 18366
// Name: GuildsBarFooterWrapper
// Dependencies: [18302, 21, 5009, 575, 5591, 18024, 6954, 2]
// Exports: default

// Module 18365 (GuildsBarFooterWrapper)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import NativeViewDefault from "NativeView" /* 6954 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18024 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18302 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const GUILD_ITEM_HIT_SLOP = GuildsBarConstants.GUILD_ITEM_HIT_SLOP;
const jsx = Fragment.jsx;
let obj = { footerWrapper: obj2 };
obj2 = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  children = children.children;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = closure_5();
  const obj2 = useHomeDrawerGesture;
  const isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  const tmp4 = jsx;
  const tmp5 = NativeViewDefault;
  if (!isHomeDrawerEnabled) {
    tmp6 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
    const obj3 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
  }
  style[1] = tmp6;
  return tmp4(tmp5, { style, children });
};
