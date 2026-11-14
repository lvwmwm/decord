// Module ID: 9502
// Function ID: 9503
// Name: CutoutableAvatarDecoration
// Dependencies: [19, 5307, 21, 563, 1414, 9503, 6020, 2]
// Exports: default

// Module 9502 (CutoutableAvatarDecoration)
import Fragment from "Fragment" /* 21 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  let shouldAnimate;
  let source;
  let style;
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  const cutout = size.cutout;
  let stateFromStores;
  let tmp = decorationStyle;
  let obj = size(decorationStyle[3]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  const items1 = [animate, size, avatarDecoration, decorationStyle, stateFromStores];
  const memo = animate.useMemo(() => {
    let items;
    let str2;
    let tmp2 = true === animate;
    const tmp = animate;
    if (tmp2) {
      tmp2 = !stateFromStores;
    }
    if (!tmp2) {
      tmp2 = "always" === tmp;
    }
    if (tmp2) {
      tmp2 = null != avatarDecoration;
    }
    const obj = AvatarUtils;
    const obj2 = { avatarDecoration, canAnimate: tmp2, size };
    const avatarDecorationURL = obj.getAvatarDecorationURL(obj2);
    const obj3 = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: { width: size, height: size }, style: items, shouldAnimate: tmp2, source: { uri: str2 } };
    size = { width: size, height: size };
    items = [size, decorationStyle];
    str2 = avatarDecorationURL;
    if (avatarDecorationURL == null) {
      str2 = "";
    }
    return obj3;
  }, items1);
  ({ shouldAnimate, style, source } = memo);
  let tmp5 = null;
  if (null != avatarDecoration) {
    tmp5 = null;
    if (null != memo.avatarDecorationUrl) {
      let tmp8;
      if (null != cutout) {
        let obj3 = { source, style: tmp4, enableAnimation: shouldAnimate };
        avatarDecoration(tmp[5]);
        tmp8 = <tmp11 style={style} cutouts={cutout.nativeCutouts}>{null}</tmp11>;
      } else {
        tmp8 = jsx(avatarDecoration(tmp[6]), { source, style, enableAnimation: shouldAnimate, pointerEvents: "none" });
      }
      tmp5 = tmp8;
    }
  }
  return tmp5;
};
