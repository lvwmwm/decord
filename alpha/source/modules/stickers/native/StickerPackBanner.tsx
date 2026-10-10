// Module ID: 9771
// Function ID: 9772
// Name: StickerPackBanner
// Dependencies: [19, 17, 21, 558, 576, 5749, 6156, 2]

// Module 9771 (StickerPackBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6156 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const StickersUtils = tmp(5749);
const View = react_native.View;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function StickerPackBanner(arg0) {
  let containerStyle;
  let stickerPack;
  let style;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(10);
  ({ containerStyle, style, stickerPack } = arg0);
  if (cResult[0] !== stickerPack) {
    const tmpResult = StickersUtils;
    const stickerPackBannerAssetUrl = tmpResult.getStickerPackBannerAssetUrl(stickerPack, 1024);
    cResult[0] = stickerPack;
    cResult[1] = stickerPackBannerAssetUrl;
    tmp4 = stickerPackBannerAssetUrl;
  } else {
    tmp4 = cResult[1];
  }
  let tmp6 = null;
  if (null != tmp4) {
    let tmp7;
    if (cResult[2] !== tmp4) {
      const obj2 = { uri: tmp4 };
      cResult[2] = tmp4;
      cResult[3] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === style) {
      let tmp8;
      if (cResult[5] === tmp7) {
        tmp8 = cResult[6];
      }
      if (cResult[7] === containerStyle) {
        let tmp12;
        if (cResult[8] === tmp8) {
          tmp12 = cResult[9];
        }
        tmp6 = tmp12;
      }
      const tmp15 = <View style={containerStyle}>{tmp8}</View>;
      cResult[7] = containerStyle;
      cResult[8] = tmp8;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
    const tmp11 = jsx(FastImageDefault, { source: tmp7, style, resizeMode: "contain" });
    cResult[4] = style;
    cResult[5] = tmp7;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  return tmp6;
}) : (function StickerPackBanner(arg0) {
  let containerStyle;
  let stickerPack;
  let style;
  ({ containerStyle, style, stickerPack } = arg0);
  const obj = StickersUtils;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp3 = null;
  if (null != stickerPackBannerAssetUrl) {
    tmp3 = <View style={containerStyle}>{null}</View>;
    const obj4 = { uri: stickerPackBannerAssetUrl };
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default tmp3;
