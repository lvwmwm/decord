// Module ID: 16590
// Function ID: 16591
// Name: GuildsBarFooterWrapper
// Dependencies: [16522, 21, 5090, 587, 558, 576, 4778, 16248, 6166, 2]

// Module 16590 (GuildsBarFooterWrapper)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16248 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16522 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp3;
const NativeViewDefault = tmp3(6166);
const GUILD_ITEM_HIT_SLOP = GuildsBarConstants.GUILD_ITEM_HIT_SLOP;
const jsx = Fragment.jsx;
let obj = { footerWrapper: obj2 };
obj2 = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING };
let closure_5 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarFooterWrapper(children) {
  const obj = react;
  const cResult = obj.c(9);
  children = children.children;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_5();
  const obj3 = useHomeDrawerGesture;
  const isHomeDrawerEnabled = obj3.useIsHomeDrawerEnabled();
  if (cResult[0] === isHomeDrawerEnabled) {
    let tmp7;
    if (cResult[1] === token) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp5.footerWrapper) {
      let tmp10;
      if (cResult[4] === tmp7) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === children) {
        let tmp11;
        if (cResult[7] === tmp10) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      const tmp13 = jsx(NativeViewDefault, { style: tmp10, children });
      cResult[6] = children;
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
    const items = [tmp5.footerWrapper, tmp7];
    cResult[3] = tmp5.footerWrapper;
    cResult[4] = tmp7;
    cResult[5] = items;
    tmp10 = items;
  }
  let tmp8 = null;
  if (!isHomeDrawerEnabled) {
    tmp8 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
    const obj5 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
  }
  cResult[0] = isHomeDrawerEnabled;
  cResult[1] = token;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function GuildsBarFooterWrapper(children) {
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
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default tmp2;
