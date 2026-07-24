// Module ID: 9648
// Function ID: 75091
// Name: StickerPackBanner
// Dependencies: [31, 27, 33, 4466, 2]
// Exports: default

// Module 9648 (StickerPackBanner)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
const result = require("jsxProd").fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  let containerStyle;
  let stickerPack;
  let style;
  ({ containerStyle, style, stickerPack } = arg0);
  let obj = require(4466) /* getStickerPackPreviewSticker */;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    obj = { style: containerStyle };
    obj = {};
    const obj1 = { uri: stickerPackBannerAssetUrl };
    obj.source = obj1;
    obj.style = style;
    obj.resizeMode = "contain";
    obj.children = <closure_2 />;
    tmp2 = <closure_3 />;
  }
  return tmp2;
};
