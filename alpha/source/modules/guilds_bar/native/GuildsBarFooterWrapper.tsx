// Module ID: 16699
// Function ID: 16700
// Name: GuildsBarFooterWrapper
// Dependencies: [16632, 21, 4757, 576, 4458, 16372, 5808, 2]
// Exports: default

// Module 16699 (GuildsBarFooterWrapper)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4458 */;
import NativeViewDefault from "NativeView" /* 5808 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16372 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16632 */;
import createStyles from "createStyles" /* 4757 */;
import size from "module_2" /* 2 */;

const GUILD_ITEM_HIT_SLOP = GuildsBarConstants.GUILD_ITEM_HIT_SLOP;
const jsx = jsxProd.jsx;
let obj = { footerWrapper: { display: "flex", alignSelf: "stretch", alignItems: "center", gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = closure_5();
  const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  const tmp4 = jsx;
  if (!isHomeDrawerEnabled) {
    const obj3 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
    tmp6 = obj3;
  }
  style[1] = tmp6;
  return tmp4(NativeViewDefault, { style, children: children.children });
};
