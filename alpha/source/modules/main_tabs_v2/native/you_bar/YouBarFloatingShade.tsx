// Module ID: 18414
// Function ID: 18415
// Name: YouBarFloatingShade
// Dependencies: [19, 17, 5033, 17004, 18302, 21, 5009, 504, 5591, 575, 17006, 1492, 5196, 18021, 5187, 1091, 5582, 2]

// Module 18414 (YouBarFloatingShade)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5187 */;
import useChatLayoutDefault from "useChatLayout" /* 5196 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useToken2 from "useToken" /* 5591 */;
import YouBarConstants from "YouBarConstants" /* 17004 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 17006 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18302 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
let closure_5 = YouBarConstants.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = GuildsBarConstants.GUILD_LIST_WIDTH;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
const memoResult = react.memo(function YouBarFloatingShade() {
  let gradientPreset;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  const tmp = closure_10();
  const obj = useYouBarTotalHeight;
  const youBarTotalHeight = obj.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  let width = useWindowDimensionsDefault().width;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    width = tmp7 + GUILD_LIST_WIDTH;
  }
  const tmp2Result = client_themes_ClientThemesUtils;
  const gradientValue = tmp2Result.useGradientValue(tmp2(5187).GradientPercentage.END);
  const tmp2Result6 = useToken2;
  const token = tmp2Result6.useToken(tmp6(575).colors.BACKGROUND_BASE_LOWER);
  const items = [ClientThemesBackgroundStore];
  const tmp2Result7 = get_initialized;
  const stateFromStores = tmp2Result7.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const useToken = useToken2.useToken;
  let token1 = null;
  useToken2;
  if (null != stateFromStores) {
    token1 = useToken(tmp6(575).colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
  }
  if (null == token1) {
    token1 = token;
    if (null != gradientValue) {
      token1 = gradientValue;
    }
  }
  const tmp2Result9 = utils_ColorUtils;
  let str = tmp2Result9.hex2rgb(token1, 1);
  if (str == null) {
    str = "transparent";
  }
  const tmp2Result10 = utils_ColorUtils;
  let str2 = tmp2Result10.hex2rgb(token1, 0);
  if (str2 == null) {
    str2 = "transparent";
  }
  const obj3 = { style: items1, pointerEvents: "box-only" };
  items1 = [tmp.container, { height: youBarTotalHeight, opacity: 0 }];
  const obj2 = { children: items2 };
  items2 = [metroImportDefault(View, obj3), , ];
  const obj4 = { style: items3, colors: items4, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" };
  items3 = [tmp.container, ];
  size = { bottom: sum / 2, height: sum / 2, width };
  items3[1] = size;
  items4 = [str2, str];
  items2[1] = metroImportDefault(LinearGradientDefault, obj4);
  const obj5 = { style: items5 };
  items5 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
  items2[2] = metroImportDefault(View, obj5);
  return React4(metroImportAll, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default memoResult;
