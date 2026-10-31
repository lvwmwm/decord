// Module ID: 10279
// Function ID: 10280
// Name: StickerPackBanner
// Dependencies: [19, 17, 21, 6560, 5717, 2]
// Exports: default

// Module 10279 (StickerPackBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import StickersUtils from "StickersUtils" /* 6560 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
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
};
