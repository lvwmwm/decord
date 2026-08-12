// Module ID: 15886
// Function ID: 15887
// Name: MainTabsEmptyChatPanel
// Dependencies: [19, 17, 21, 4344, 712, 11055, 1628, 9755, 15887, 2]
// Exports: default

// Module 15886 (MainTabsEmptyChatPanel)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((left, marginTop) => {
  let obj = { container: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.left = left;
  obj.marginTop = marginTop;
  obj.backgroundColor = importDefault(712).colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND;
  obj.borderTopWidth = importDefault(712).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderTopColor = importDefault(712).colors.APP_FRAME_BORDER;
  obj.borderLeftWidth = importDefault(712).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj.borderLeftColor = importDefault(712).colors.APP_FRAME_BORDER;
  obj.borderTopLeftRadius = importDefault(712).modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS;
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsEmptyChatPanel.tsx");

export default function MainTabsEmptyChatPanel() {
  let obj = require(11055) /* sum */;
  const drawerWidth = obj.useDrawerWidth();
  const tmp3 = importDefault;
  const tmp4 = callback(drawerWidth, importDefault(1628)().top);
  let tmp5 = null;
  if (obj2.useIsFavoritesGuildSelected()) {
    obj = { style: null, pointerEvents: "box-none", children: null };
    obj[0] = tmp4.container;
    obj[2] = jsx(tmp3(15887), {});
    tmp5 = <closure_4 style={null} pointerEvents="box-none">{null}</closure_4>;
  }
  return tmp5;
};
