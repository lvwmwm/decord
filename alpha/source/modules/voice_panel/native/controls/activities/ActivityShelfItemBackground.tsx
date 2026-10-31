// Module ID: 19257
// Function ID: 19258
// Name: ActivityShelfItemBackground
// Dependencies: [32, 19, 21, 5014, 6960, 12273, 5717, 2]

// Module 19257 (ActivityShelfItemBackground)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((aspectRatio) => {
  const obj = { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage: obj2 };
  return obj;
});
const memoResult = react.memo(function ActivityShelfItemBackground(aspectRatio) {
  let accessibilityLabel;
  let imageBackground;
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp = closure_5(aspectRatio.aspectRatio);
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
          FastImageDefault;
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
