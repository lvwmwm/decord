// Module ID: 8255
// Function ID: 65128
// Name: ProfileBanner
// Dependencies: []
// Exports: default

// Module 8255 (ProfileBanner)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const BANNER_HEIGHT = arg1(dependencyMap[2]).BANNER_HEIGHT;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles({ root: { width: "100%" }, image: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

export default function ProfileBanner(bannerHeight) {
  let backgroundColor;
  let bannerSafeArea;
  let bannerSource;
  let style;
  ({ bannerSource, bannerSafeArea } = bannerHeight);
  ({ style, backgroundColor } = bannerHeight);
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  bannerHeight = bannerHeight.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = BANNER_HEIGHT;
  }
  const tmp = callback();
  let obj = { backgroundColor: arg1(dependencyMap[5]).int2hex(backgroundColor), height: bannerHeight + bannerSafeArea };
  obj = { style: items };
  const items = [tmp.root, obj, style];
  let tmp4 = null;
  if (null != bannerSource) {
    obj = { style: tmp.image, source: bannerSource };
    tmp4 = jsx(importDefault(dependencyMap[6]), obj);
  }
  obj.children = tmp4;
  return <View {...obj} />;
};
