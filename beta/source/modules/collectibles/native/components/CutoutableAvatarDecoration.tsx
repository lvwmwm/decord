// Module ID: 8275
// Function ID: 8276
// Name: CutoutableAvatarDecoration
// Dependencies: [19, 17, 4825, 21, 563, 1397, 1364, 8276, 8272, 5899, 2]
// Exports: default

// Module 8275 (CutoutableAvatarDecoration)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  let avatarDecorationUrl;
  let sizeStyle;
  let source;
  let style;
  let useReducedMotion;
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  const cutout = size.cutout;
  let tmp2 = decorationStyle;
  let tmp = size;
  let obj = size(decorationStyle[4]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
  ({ avatarDecorationUrl, style, sizeStyle, source } = memo);
  let tmp6 = null;
  if (null != avatarDecoration) {
    tmp6 = null;
    if (null != avatarDecorationUrl) {
      let tmp9;
      const tmpResult = tmp(tmp2[6]);
      if (tmpResult.isAndroid()) {
        if (tmp5) {
          let tmp16;
          if (null != cutout) {
            let obj3 = { url: avatarDecorationUrl, style: sizeStyle };
            avatarDecoration(tmp2[7]);
            tmp16 = <tmp19 style={style} cutouts={cutout.nativeCutouts}>{null}</tmp19>;
          } else {
            tmp16 = <stateFromStores style={style} pointerEvents="none">{null}</stateFromStores>;
          }
          tmp9 = tmp16;
        }
        tmp6 = tmp9;
      }
      if (null != cutout) {
        avatarDecoration(tmp2[7]);
        tmp9 = <tmp12 style={style} cutouts={cutout.nativeCutouts}>{null}</tmp12>;
      } else {
        tmp9 = jsx(avatarDecoration(tmp2[9]), { source, style });
      }
    }
  }
  return tmp6;
};
