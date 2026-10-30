// Module ID: 13155
// Function ID: 13156
// Name: GameOrganizationIcon
// Dependencies: [32, 19, 17, 21, 5009, 575, 5712, 2]
// Exports: default

// Module 13155 (GameOrganizationIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((width, borderRadius) => {
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
  iconUrl = iconUrl.iconUrl;
  let sm = iconUrl.borderRadius;
  if (sm === undefined) {
    sm = nativeDefault.radii.sm;
  }
  let num = iconUrl.size;
  if (num === undefined) {
    num = 48;
  }
  closure_1 = undefined;
  const tmp3 = closure_6(num, sm);
  [first, closure_1] = react.useState(null);
  [][0] = iconUrl;
  if (null != iconUrl) {
    let tmp10;
    if (iconUrl !== first) {
      const obj2 = { uri: iconUrl };
      tmp10 = jsx(FastImageDefault, { source: obj2, style: tmp3.icon, resizeMode: "cover", accessible: false, onError: tmp6 });
    }
    return tmp10;
  }
  const items = [, ];
  ({ icon: arr[0], placeholder: arr[1] } = tmp3);
  tmp10 = <View style={items} />;
};
