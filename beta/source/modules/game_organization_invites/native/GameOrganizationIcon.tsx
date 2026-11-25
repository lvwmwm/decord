// Module ID: 12091
// Function ID: 12092
// Name: GameOrganizationIcon
// Dependencies: [32, 19, 17, 21, 12092, 12096, 4913, 575, 5600, 2156, 2]
// Exports: default

// Module 12091 (GameOrganizationIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2156 */;
import FastImageDefault from "FastImage" /* 5600 */;
import GuildFallbackAbstractUI from "GuildFallbackAbstractUI" /* 12092 */;
import CharacterFallbackAbstractUI from "CharacterFallbackAbstractUI" /* 12096 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { guild: GuildFallbackAbstractUI.GuildFallbackAbstractUI, character: CharacterFallbackAbstractUI.CharacterFallbackAbstractUI };
let closure_8 = createStyles.createStyles((width, borderRadius) => {
  obj = { icon: size };
  size = { width, height: width, borderRadius, overflow: "hidden" };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationIcon.tsx");

export default function GameOrganizationIcon(iconUrl) {
  let borderRadius;
  let closure_1;
  let first;
  let obj3;
  let obj4;
  iconUrl = iconUrl.iconUrl;
  ({ size, borderRadius } = iconUrl);
  const fallback = iconUrl.fallback;
  if (borderRadius === undefined) {
    borderRadius = nativeDefault.radii.sm;
  }
  closure_1 = undefined;
  const tmp3 = closure_8(size, borderRadius);
  [first, closure_1] = react.useState(null);
  [][0] = iconUrl;
  if (null != iconUrl) {
    if (iconUrl !== first) {
      const obj2 = { uri: obj3.getSizedImageAssetURL(iconUrl, obj4) };
      FastImageDefault;
      obj4 = { size };
      obj3 = ImageProxyUtils;
      return <tmp10 source={obj2} style={tmp3.icon} resizeMode="cover" accessible={false} onError={tmp6} />;
    }
  }
  return <View style={tmp3.icon}>{jsx(obj[fallback], { width: size, height: size, accessible: false })}</View>;
};
