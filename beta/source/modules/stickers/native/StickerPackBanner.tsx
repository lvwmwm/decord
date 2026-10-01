// Module ID: 9861
// Function ID: 9862
// Name: StickerPackBanner
// Dependencies: [19, 17, 21, 5198, 2]
// Exports: default

// Module 9861 (StickerPackBanner)
import Fragment from "Fragment" /* 21 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Image: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  let containerStyle;
  let stickerPack;
  let style;
  ({ containerStyle, style, stickerPack } = arg0);
  const obj = StickersUtils;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    tmp2 = <_false style={containerStyle}>{null}</_false>;
    const obj4 = { uri: stickerPackBannerAssetUrl };
  }
  return tmp2;
};
