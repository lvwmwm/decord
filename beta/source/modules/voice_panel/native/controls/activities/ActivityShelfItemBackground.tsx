// Module ID: 16971
// Function ID: 16972
// Name: ActivityShelfItemBackground
// Dependencies: [32, 19, 17, 21, 4836, 5901, 11567, 2]

// Module 16971 (ActivityShelfItemBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((aspectRatio) => {
  const obj = { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage: obj2 };
  return obj;
});
const memoResult = react.memo(function ActivityShelfItemBackground(aspectRatio) {
  let accessibilityLabel;
  let imageBackground;
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp = closure_6(aspectRatio.aspectRatio);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_0 = tmp2[1];
  if ("not-found" !== imageBackground.state) {
    let tmp9Result;
    if (!tmp2[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          const obj2 = { style: tmp.previewImage, children: null };
          const obj4 = { uri: imageBackground.url };
          const tmp12 = NativeViewDefault;
          if (accessibilityLabel == null) {
            accessibilityLabel = "";
          }
          tmp9Result = tmp9(tmp12, obj2);
        }
      }
      tmp9Result = jsx(NativeViewDefault, { style: tmp.previewImage });
    }
    return tmp9Result;
  }
  NativeViewDefault;
  tmp9Result = <tmp7 style={tmp.previewImage}>{null}</tmp7>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;
