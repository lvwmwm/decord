// Module ID: 17821
// Function ID: 17822
// Name: ActivityShelfItemBackground
// Dependencies: [32, 19, 21, 5092, 558, 576, 11770, 6161, 6156, 2]

// Module 17821 (ActivityShelfItemBackground)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6156 */;
import NativeViewDefault from "NativeView" /* 6161 */;
import BrokenImageDefault from "BrokenImage" /* 11770 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((aspectRatio) => {
  const obj = { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage: obj2 };
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityShelfItemBackground(aspectRatio) {
  let accessibilityLabel;
  let first;
  let imageBackground;
  let tmp23;
  const obj = react2;
  const cResult = obj.c(15);
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp3 = closure_6(aspectRatio.aspectRatio);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  let closure_0 = tmp4[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp4[0]) {
      let tmp15;
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          let tmp5;
          let tmp6;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function y() {
              return closure_0(true);
            };
            cResult[5] = fn;
            tmp5 = fn;
          } else {
            tmp5 = cResult[5];
          }
          if (cResult[6] !== imageBackground.url) {
            const obj2 = { uri: imageBackground.url };
            cResult[6] = imageBackground.url;
            cResult[7] = obj2;
            tmp6 = obj2;
          } else {
            tmp6 = cResult[7];
          }
          if (accessibilityLabel == null) {
            accessibilityLabel = "";
          }
          if (cResult[8] === tmp3.activityImage) {
            if (cResult[9] === tmp6) {
              let tmp7;
              if (cResult[10] === accessibilityLabel) {
                tmp7 = cResult[11];
              }
              if (cResult[12] === tmp3.previewImage) {
                let tmp11;
                if (cResult[13] === tmp7) {
                  tmp11 = cResult[14];
                }
                return tmp11;
              }
              const tmp14 = jsx(NativeViewDefault, { style: tmp3.previewImage, children: tmp7 });
              cResult[12] = tmp3.previewImage;
              cResult[13] = tmp7;
              cResult[14] = tmp14;
              tmp11 = tmp14;
            }
          }
          const tmp10 = jsx(FastImageDefault, { onError: tmp5, source: tmp6, style: tmp3.activityImage, accessibilityRole: "image", accessibilityLabel });
          cResult[8] = tmp3.activityImage;
          cResult[9] = tmp6;
          cResult[10] = accessibilityLabel;
          cResult[11] = tmp10;
          tmp7 = tmp10;
        }
      }
      if (cResult[3] !== tmp3.previewImage) {
        const tmp18 = jsx(NativeViewDefault, { style: tmp3.previewImage });
        cResult[3] = tmp3.previewImage;
        cResult[4] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[4];
      }
      return tmp15;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = jsx(BrokenImageDefault, {});
    cResult[0] = tmp22;
    first = tmp22;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.previewImage) {
    const tmp26 = jsx(NativeViewDefault, { style: tmp3.previewImage, children: first });
    cResult[1] = tmp3.previewImage;
    cResult[2] = tmp26;
    tmp23 = tmp26;
  } else {
    tmp23 = cResult[2];
  }
  return tmp23;
}) : (function ActivityShelfItemBackground(aspectRatio) {
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
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;
