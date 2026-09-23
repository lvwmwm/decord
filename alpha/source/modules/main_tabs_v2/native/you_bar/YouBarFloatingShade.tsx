// Module ID: 16798
// Function ID: 16799
// Name: YouBarFloatingShade
// Dependencies: [19, 17, 4646, 15425, 16684, 21, 4827, 504, 4524, 576, 15427, 1478, 4687, 16422, 4645, 1092, 5283, 2]

// Module 16798 (YouBarFloatingShade)
import initialize from "initialize" /* 504 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import useToken from "useToken" /* 4524 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4645 */;
import useChatLayoutDefault from "useChatLayout" /* 4687 */;
import LinearGradientDefault from "LinearGradient" /* 5283 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15427 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4646 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(15425).YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = fn(16684).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4827);
let closure_10 = createStyles.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default noop.memo(function YouBarFloatingShade() {
  const tmp = closure_10();
  const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  let width = useWindowDimensionsDefault().width;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    width = tmp7 + GUILD_LIST_WIDTH;
  }
  const gradientValue = client_themes_ClientThemesUtils.useGradientValue(tmp2(4645).GradientPercentage.END);
  const tmp2Result = client_themes_ClientThemesUtils;
  const token = useToken.useToken(tmp6(576).colors.BACKGROUND_BASE_LOWER);
  const tmp2Result6 = useToken;
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const tmp2Result7 = initialize;
  let token1 = null;
  if (null != stateFromStores) {
    token1 = tmp2Result8.useToken(tmp6(576).colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
  }
  if (null == token1) {
    token1 = token;
    if (null != gradientValue) {
      token1 = gradientValue;
    }
  }
  tmp2Result8 = useToken;
  let str = utils_ColorUtils.hex2rgb(token1, 1);
  if (str == null) {
    str = "transparent";
  }
  const tmp2Result9 = utils_ColorUtils;
  let str2 = utils_ColorUtils.hex2rgb(token1, 0);
  if (str2 == null) {
    str2 = "transparent";
  }
  const obj2 = { children: null };
  const obj3 = { style: null, pointerEvents: "box-only" };
  const items1 = [tmp.container, { height: youBarTotalHeight, opacity: 0 }];
  obj3.style = items1;
  const items2 = [React5(View, obj3), , ];
  const obj4 = { style: null, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" };
  const items3 = [tmp.container, ];
  const size = { bottom: sum / 2, height: sum / 2, width };
  items3[1] = size;
  obj4.style = items3;
  const items4 = [str2, str];
  obj4.colors = items4;
  items2[1] = React5(LinearGradientDefault, obj4);
  const obj5 = { style: null };
  const items5 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
  obj5.style = items5;
  items2[2] = React5(View, obj5);
  obj2.children = items2;
  return React7(React6, obj2);
});
