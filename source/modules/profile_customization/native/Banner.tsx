// Module ID: 8305
// Function ID: 65393
// Name: ProfileBanner
// Dependencies: [31, 27, 653, 33, 4130, 665, 5085, 2]
// Exports: default

// Module 8305 (ProfileBanner)
import "result";
import { View } from "get ActivityIndicator";
import { BANNER_HEIGHT } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ root: { width: "100%" }, image: { width: "100%", height: "100%" } });
const result = require("ME").fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

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
  let obj = { backgroundColor: require(665) /* pad2 */.int2hex(backgroundColor), height: bannerHeight + bannerSafeArea };
  obj = { style: items };
  items = [tmp.root, obj, style];
  let tmp4 = null;
  if (null != bannerSource) {
    obj = { style: tmp.image, source: bannerSource };
    tmp4 = jsx(importDefault(5085), { style: tmp.image, source: bannerSource });
  }
  obj.children = tmp4;
  return <View style={items} />;
};
