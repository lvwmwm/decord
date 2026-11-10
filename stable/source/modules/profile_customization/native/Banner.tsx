// Module ID: 8827
// Function ID: 8828
// Name: Banner
// Dependencies: [19, 17, 1072, 21, 5014, 1090, 5717, 2]
// Exports: default

// Module 8827 (Banner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const BANNER_HEIGHT = Constants.BANNER_HEIGHT;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ root: { width: "100%" }, image: { width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

export default function ProfileBanner(bannerHeight) {
  let backgroundColor;
  let bannerSafeArea;
  let bannerSource;
  let obj2;
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
  const tmp = closure_6();
  const obj = { backgroundColor: obj2.int2hex(backgroundColor), height: bannerHeight + bannerSafeArea };
  const items = [tmp.root, obj, style];
  let tmp3Result = null;
  obj2 = utils_ColorUtils;
  if (null != bannerSource) {
    const obj4 = { style: tmp.image, source: bannerSource };
    tmp3Result = tmp3(FastImageDefault, obj4);
  }
  return <tmp4 style={items}>{tmp3Result}</tmp4>;
};
