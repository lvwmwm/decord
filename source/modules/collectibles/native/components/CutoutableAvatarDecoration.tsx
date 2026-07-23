// Module ID: 7872
// Function ID: 62701
// Name: CutoutableAvatarDecoration
// Dependencies: [31, 27, 4122, 33, 624, 1392, 477, 7873, 7876, 5085, 2]
// Exports: default

// Module 7872 (CutoutableAvatarDecoration)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/components/CutoutableAvatarDecoration.tsx");

export default function CutoutableAvatarDecoration(size) {
  let avatarDecorationUrl;
  let sizeStyle;
  let source;
  let style;
  size = size.size;
  const avatarDecoration = size.avatarDecoration;
  const decorationStyle = size.decorationStyle;
  const animate = size.animate;
  let cutout = size.cutout;
  let obj = size(decorationStyle[4]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const items1 = [animate, size, avatarDecoration, decorationStyle, stateFromStores];
  const memo = animate.useMemo(() => {
    let tmp = animate;
    if (animate) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      tmp = null != avatarDecoration;
    }
    let obj = size(decorationStyle[5]);
    obj = { avatarDecoration, canAnimate: tmp, size };
    const avatarDecorationURL = obj.getAvatarDecorationURL(obj);
    obj = { avatarDecorationUrl: avatarDecorationURL, sizeStyle: obj1, style: items };
    items = [{ width: size, height: size }, decorationStyle];
    obj.shouldAnimate = tmp;
    const obj3 = {};
    let str = "";
    if (null != avatarDecorationURL) {
      str = avatarDecorationURL;
    }
    obj3.uri = str;
    obj.source = obj3;
    return obj;
  }, items1);
  ({ avatarDecorationUrl, style, sizeStyle, source } = memo);
  let tmp4 = null;
  if (null != avatarDecoration) {
    tmp4 = null;
    if (null != avatarDecorationUrl) {
      let obj1 = size(decorationStyle[6]);
      if (!obj1.isAndroid()) {
        if (null != cutout) {
          obj = { style, cutouts: cutout.nativeCutouts };
          obj = { source, style: sizeStyle };
          obj.children = jsx(avatarDecoration(decorationStyle[9]), { source, style: sizeStyle });
          let tmp10 = jsx(avatarDecoration(decorationStyle[7]), { source, style: sizeStyle });
          const tmp14 = avatarDecoration(decorationStyle[7]);
        } else {
          obj1 = { source, style };
          tmp10 = jsx(avatarDecoration(decorationStyle[9]), { source, style });
        }
      }
      if (null != cutout) {
        const obj2 = { style, cutouts: cutout.nativeCutouts };
        let obj3 = { url: avatarDecorationUrl, style: sizeStyle };
        cutout = jsx(avatarDecoration(decorationStyle[8]), { url: avatarDecorationUrl, style: sizeStyle });
        obj2.children = cutout;
        let tmp19 = jsx(avatarDecoration(decorationStyle[7]), { style, cutouts: cutout.nativeCutouts });
        const tmp23 = avatarDecoration(decorationStyle[7]);
      } else {
        const obj4 = { style, pointerEvents: "none" };
        const obj5 = { url: avatarDecorationUrl, style: sizeStyle };
        obj4.children = jsx(avatarDecoration(decorationStyle[8]), { url: avatarDecorationUrl, style: sizeStyle });
        tmp19 = <stateFromStores style={style} pointerEvents="none" />;
      }
    }
  }
  return tmp4;
};
