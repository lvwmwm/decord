// Module ID: 13005
// Function ID: 13006
// Name: ConjureAppSheetIcon
// Dependencies: [19, 17, 21, 5140, 575, 11480, 5842, 1411, 2]
// Exports: default

// Module 13005 (ConjureAppSheetIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import FastImageDefault from "FastImage" /* 5842 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((borderRadius) => {
  const obj = { icon: size };
  size = { width: 48, height: 48, borderRadius, overflow: "hidden" };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureAppSheetIcon.tsx");

export default function ConjureAppSheetIcon(arg0) {
  let application;
  let radius;
  let tmp8;
  ({ application, radius } = arg0);
  if (radius === undefined) {
    radius = nativeDefault.radii.lg;
  }
  const tmp3 = closure_4(radius);
  if (null == application.icon) {
    ({ id: obj5.applicationId, name: obj5.name } = application);
    tmp8 = <View style={tmp3.icon}>{null}</View>;
  } else {
    FastImageDefault;
    const obj9 = { id: null, icon: null, size: 48 };
    ({ id: obj3.id, icon: obj3.icon } = application);
    tmp8 = <tmp7 source={AvatarUtilsDefault.getApplicationIconSource(obj9)} style={tmp3.icon} />;
  }
  return tmp8;
};
