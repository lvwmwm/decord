// Module ID: 11564
// Function ID: 11565
// Name: ConjureAppSheetIcon
// Dependencies: [19, 17, 21, 5043, 575, 11565, 5730, 1413, 2]
// Exports: default

// Module 11564 (ConjureAppSheetIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import FastImageDefault from "FastImage" /* 5730 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((width, borderRadius) => {
  const obj = { icon: size };
  size = { width, height: width, borderRadius, overflow: "hidden" };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/ConjureAppSheetIcon.tsx");

export default function ConjureAppSheetIcon(size) {
  let application;
  let radius;
  let tmp8;
  ({ application, radius } = size);
  if (radius === undefined) {
    radius = nativeDefault.radii.lg;
  }
  let num = size.size;
  if (num === undefined) {
    num = 48;
  }
  const tmp3 = closure_4(num, radius);
  if (null == application.icon) {
    ({ id: obj5.applicationId, name: obj5.name } = application);
    tmp8 = <View style={tmp3.icon}>{null}</View>;
  } else {
    FastImageDefault;
    const obj9 = { id: null, icon: null, size: num };
    ({ id: obj3.id, icon: obj3.icon } = application);
    tmp8 = <tmp7 source={AvatarUtilsDefault.getApplicationIconSource(obj9)} style={tmp3.icon} />;
  }
  return tmp8;
};
