// Module ID: 14873
// Function ID: 113421
// Dependencies: [31, 33, 4130, 689, 3834, 14802, 3991, 4542, 7589, 2]

// Module 14873
import importAllResult from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { height: 1, marginTop: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.separator = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_6 = { code: "function GuildsBarSeparatorTsx1(){const{withSpring,guildItemSize,panelX,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{maxWidth:withSpring(Math.max(guildItemSize,panelX.get()+guildItemSize),HOME_DRAWER_FLING_PHYSICS)};}" };
const memoResult = importAllResult.memo(function GuildsBarSeparator() {
  let obj = token(3834);
  token = obj.useToken(panelX(689).modules.mobile.GUILD_BAR_ITEM_SIZE);
  panelX = importAllResult.useContext(token(14802).HomeDrawerStateContext).panelX;
  const tmp = callback();
  const fn = function l() {
    const obj = {};
    const bound = Math.max(token, panelX.get() + token);
    obj.maxWidth = token(outer1_2[7]).withSpring(bound, token(outer1_2[5]).HOME_DRAWER_FLING_PHYSICS);
    return obj;
  };
  obj = { withSpring: token(4542).withSpring, guildItemSize: token, panelX, HOME_DRAWER_FLING_PHYSICS: token(14802).HOME_DRAWER_FLING_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 1425261651828;
  fn.__initData = closure_6;
  const animatedStyle = token(3991).useAnimatedStyle(fn);
  const style = [tmp.separator, animatedStyle];
  return jsx(panelX(7589), { style });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;
