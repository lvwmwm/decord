// Module ID: 15539
// Function ID: 15540
// Name: GuildsBarHomeDrawerSeparator
// Dependencies: [19, 21, 4342, 712, 15225, 4083, 4754, 8054, 4065, 5821, 2]

// Module 15539 (GuildsBarHomeDrawerSeparator)
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  let panelX;
  let obj = guildItemSize(15225);
  panelX = obj.useHomeDrawerState().panelX;
  const tmp = callback(guildItemSize);
  const fn = function n() {
    const obj = { maxWidth: null };
    const bound = Math.max(guildItemSize, panelX.get() + guildItemSize);
    obj[0] = guildItemSize(outer1_2[6]).withSpring(bound, guildItemSize(outer1_2[4]).HOME_DRAWER_FLING_PHYSICS);
    return obj;
  };
  obj = { withSpring: guildItemSize(4754).withSpring, guildItemSize, panelX, HOME_DRAWER_FLING_PHYSICS: guildItemSize(15225).HOME_DRAWER_FLING_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 1425261651828;
  fn.__initData = closure_5;
  const animatedStyle = guildItemSize(4083).useAnimatedStyle(fn);
  const style = [tmp.separator, animatedStyle];
  return jsx(panelX(8054), { style });
}
let closure_4 = createCacheKey.createStyles((maxWidth) => {
  let obj = { separator: null };
  obj = { height: 1, maxWidth, marginTop: importDefault(712).modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: importDefault(712).modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: importDefault(712).colors.BORDER_SUBTLE };
  obj[0] = obj;
  return obj;
});
let closure_5 = { code: "function GuildsBarSeparatorTsx1(){const{withSpring,guildItemSize,panelX,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{maxWidth:withSpring(Math.max(guildItemSize,panelX.get()+guildItemSize),HOME_DRAWER_FLING_PHYSICS)};}" };
const memoResult = require("noop").memo(function GuildsBarSeparator() {
  let obj = require(4065) /* map */;
  const token = obj.useToken(importDefault(712).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = importDefault;
  const tmp4 = callback(token);
  if (obj2.useIsHomeDrawerEnabled()) {
    obj = { guildItemSize: null };
    obj[0] = token;
    let tmp5Result = tmp5(GuildsBarHomeDrawerSeparator, obj);
  } else {
    obj = { style: null };
    obj[0] = tmp4.separator;
    tmp5Result = tmp5(tmp2(5821), obj);
  }
  return tmp5Result;
});
const result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;
