// Module ID: 13004
// Function ID: 13005
// Name: GameOrganizationIcon
// Dependencies: [32, 19, 17, 21, 5005, 587, 558, 576, 5707, 2]

// Module 13004 (GameOrganizationIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5707 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((width, borderRadius) => {
  const obj = { icon: size, placeholder: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
  size = { width, height: width, borderRadius, overflow: "hidden" };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
  return obj;
});
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationIcon(iconUrl) {
  let borderRadius;
  let closure_129_1;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp = dependencyMap;
  const obj = react2;
  const cResult = obj.c(11);
  iconUrl = iconUrl.iconUrl;
  ({ borderRadius, size } = iconUrl);
  if (undefined === borderRadius) {
    borderRadius = nativeDefault.radii.sm;
  }
  let num = 48;
  const tmp4 = closure_7;
  if (undefined !== size) {
    num = size;
  }
  const tmp4Result = tmp4(num, borderRadius);
  [tmp7, closure_129_1] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] !== iconUrl) {
    const fn = function u() {
      let tmp2 = iconUrl;
      const tmp = closure_1_1;
      if (iconUrl == null) {
        tmp2 = null;
      }
      tmp(tmp2);
    };
    cResult[0] = iconUrl;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (null != iconUrl) {
    if (iconUrl !== tmp7) {
      let tmp9;
      if (cResult[5] !== iconUrl) {
        const obj2 = { uri: iconUrl };
        cResult[5] = iconUrl;
        cResult[6] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[6];
      }
      if (cResult[7] === tmp8) {
        if (cResult[8] === tmp4Result.icon) {
          if (cResult[9] === tmp9) {
            tmp10 = cResult[10];
          }
        }
      }
      const tmp13 = jsx(FastImageDefault, { source: tmp9, style: tmp4Result.icon, resizeMode: "cover", accessible: false, onError: tmp8 });
      cResult[7] = tmp8;
      cResult[8] = tmp4Result.icon;
      cResult[9] = tmp9;
      cResult[10] = tmp13;
      tmp10 = tmp13;
    }
    return tmp10;
  }
  if (cResult[2] === tmp4Result.icon) {
    let tmp14;
    if (cResult[3] === tmp4Result.placeholder) {
      tmp14 = cResult[4];
    }
    tmp10 = tmp14;
  }
  const items = [, ];
  ({ icon: arr[0], placeholder: arr[1] } = tmp4Result);
  const tmp15 = <View style={items} />;
  cResult[2] = tmp4Result.icon;
  cResult[3] = tmp4Result.placeholder;
  cResult[4] = tmp15;
  tmp14 = tmp15;
}) : (function GameOrganizationIcon(iconUrl) {
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
  const tmp3 = closure_7(num, sm);
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
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationIcon.tsx");

export default tmp2;
