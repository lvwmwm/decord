// Module ID: 9605
// Function ID: 74839
// Name: StickerPackBanner
// Dependencies: []
// Exports: default

// Module 9605 (StickerPackBanner)
importAll(dependencyMap[0]);
({ Image: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  let containerStyle;
  let stickerPack;
  let style;
  ({ containerStyle, style, stickerPack } = arg0);
  let obj = arg1(dependencyMap[3]);
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    obj = { style: containerStyle };
    obj = {};
    const obj1 = { uri: stickerPackBannerAssetUrl };
    obj.source = obj1;
    obj.style = style;
    obj.resizeMode = "contain";
    obj.children = <closure_2 {...obj} />;
    tmp2 = <closure_3 {...obj} />;
  }
  return tmp2;
};
