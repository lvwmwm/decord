// Module ID: 14749
// Function ID: 111210
// Dependencies: []

// Module 14749
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = {};
obj = { FITNESS: 15, GameIconImageSize: "badges", ExclusiveGesture: "message", paddingVertical: 0.044, paddingStart: 1, marginTop: importDefault(dependencyMap[3]).modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: importDefault(dependencyMap[3]).modules.mobile.GUILD_BAR_ITEM_MARGIN, backgroundColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE };
obj.separator = obj;
let closure_5 = arg1(dependencyMap[2]).createStyles(obj);
let closure_6 = { code: "function GuildsBarSeparatorTsx1(){const{withSpring,guildItemSize,panelX,HOME_DRAWER_FLING_PHYSICS}=this.__closure;return{maxWidth:withSpring(Math.max(guildItemSize,panelX.get()+guildItemSize),HOME_DRAWER_FLING_PHYSICS)};}" };
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function GuildsBarSeparator() {
  let obj = arg1(dependencyMap[4]);
  const token = obj.useToken(importDefault(dependencyMap[3]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const arg1 = token;
  const panelX = importAllResult.useContext(arg1(dependencyMap[5]).HomeDrawerStateContext).panelX;
  const importDefault = panelX;
  const tmp = callback();
  const fn = function l() {
    const obj = {};
    const bound = Math.max(token, panelX.get() + token);
    obj.maxWidth = token(closure_2[7]).withSpring(bound, token(closure_2[5]).HOME_DRAWER_FLING_PHYSICS);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, guildItemSize: token, panelX, HOME_DRAWER_FLING_PHYSICS: arg1(dependencyMap[5]).HOME_DRAWER_FLING_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 1425261651828;
  fn.__initData = closure_6;
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(fn);
  const style = [tmp.separator, animatedStyle];
  return jsx(importDefault(dependencyMap[8]), { style });
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;
