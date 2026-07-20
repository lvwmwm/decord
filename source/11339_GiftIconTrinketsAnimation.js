// Module ID: 11339
// Function ID: 88177
// Name: GiftIconTrinketsAnimation
// Dependencies: []

// Module 11339 (GiftIconTrinketsAnimation)
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_6 = arg1(dependencyMap[4]).createStyles((width) => {
  const sum = arg1(dependencyMap[5]).SMALL_BUTTON_HEIGHT + arg1(dependencyMap[5]).SMALL_BUTTON_PADDING + 2;
  const container = { paddingTop: false, backgroundColor: false, position: false, top: false, left: false, right: false, bottom: false, zIndex: false, width: sum, height: sum };
  const containerRefresh = { width, height: width };
  return { container, containerRefresh, trinkets: { <string:3069928428>: "%ArrayProto_keys%", <string:626741994>: "RELEASE_ACTIVITY_WEB_VIEW", <string:609397321>: "isArray", <string:1653350028>: "ParentalControlledDefaultGuildsRestricted", <string:810669942>: "isArray", <string:4191642289>: "ISK", <string:3243313249>: "isArray" }, trinketsRefresh: {} };
});
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let obj = arg1(dependencyMap[6]);
  const enabled = obj.useMobileVisualRefreshConfig({ location: "GiftIconTrinketsAnimation" }).enabled;
  let obj1 = arg1(dependencyMap[7]);
  const tmp = callback(obj1.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  let obj2 = arg1(dependencyMap[9]);
  const items = [closure_4];
  let stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp3 = enabled ? tmp.trinketsRefresh : tmp.trinkets;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    obj = { style: enabled ? tmp.containerRefresh : tmp.container, pointerEvents: "none" };
    if (obj6.isAndroid()) {
      obj = { url: trinketsAnimationUrl };
      stateFromStores = !stateFromStores;
      obj.autoplay = stateFromStores;
      obj.style = tmp3;
      let tmp8Result = tmp8(arg1(dependencyMap[12]).APNGPlayer, obj);
    } else {
      obj1 = {};
      obj2 = { uri: trinketsAnimationUrl };
      obj1.source = obj2;
      obj1.style = tmp3;
      obj1.resizeMode = "contain";
      obj1.enableAnimation = !stateFromStores;
      tmp8Result = tmp8(importDefault(dependencyMap[13]), obj1);
    }
    obj.children = tmp8Result;
    <View {...obj} />;
    const obj6 = arg1(dependencyMap[11]);
    const tmp4 = jsx;
    const tmp5 = View;
  }
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;
