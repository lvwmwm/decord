// Module ID: 13976
// Function ID: 13977
// Name: GameOrganizationIcon
// Dependencies: [32, 19, 17, 21, 5243, 575, 5957, 2154, 2]
// Exports: default

// Module 13976 (GameOrganizationIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2154 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((width, borderRadius) => {
  const obj = { icon: size, placeholder: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
  size = { width, height: width, borderRadius, overflow: "hidden" };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationIcon.tsx");

export default function GameOrganizationIcon(iconUrl) {
  let closure_1;
  let first;
  let items;
  let obj3;
  let obj4;
  let obj6;
  iconUrl = iconUrl.iconUrl;
  let sm = iconUrl.borderRadius;
  if (sm === undefined) {
    sm = nativeDefault.radii.sm;
  }
  let num = iconUrl.size;
  if (num === undefined) {
    num = 48;
  }
  const fallback = iconUrl.fallback;
  closure_1 = undefined;
  const tmp3 = closure_7(num, sm);
  [first, closure_1] = react.useState(null);
  [][0] = iconUrl;
  if (null != iconUrl) {
    let tmp13Result;
    if (iconUrl !== first) {
      const obj2 = { uri: obj3.getSizedImageAssetURL(iconUrl, obj4) };
      FastImageDefault;
      obj4 = { size: num };
      tmp13Result = <tmp10 source={obj2} style={tmp3.icon} resizeMode="cover" accessible={false} onError={tmp6} />;
      obj3 = ImageProxyUtils;
    }
    return tmp13Result;
  }
  const tmp13 = jsx;
  const tmp14 = View;
  if (null != fallback) {
    obj6 = { style: tmp3.icon, children: fallback };
    const obj5 = { style: tmp3.icon, children: fallback };
  } else {
    obj6 = { style: items };
    items = [, ];
    ({ icon: arr[0], placeholder: arr[1] } = tmp3);
  }
  tmp13Result = tmp13(tmp14, obj6);
};
