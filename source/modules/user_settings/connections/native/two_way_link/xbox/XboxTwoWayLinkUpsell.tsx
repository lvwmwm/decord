// Module ID: 13747
// Function ID: 103998
// Name: XboxTwoWayLinkUpsell
// Dependencies: []
// Exports: XboxTwoWayLinkUpsell

// Module 13747 (XboxTwoWayLinkUpsell)
importAll(dependencyMap[0]);
({ HelpdeskArticles: closure_3, AnalyticsLocations: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ upsellImage: { position: true, bottom: true, zIndex: true } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = function XboxTwoWayLinkUpsell() {
  let obj = importDefault(dependencyMap[4]);
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.2okkZV);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.body = intl2.format(arg1(dependencyMap[6]).t.OnERSS, { help_article: articleURL });
  obj = { style: callback().upsellImage };
  const tmp = callback();
  obj.source = importDefault(dependencyMap[8]);
  obj.resizeMode = "contain";
  obj.img = jsx(importDefault(dependencyMap[7]), obj);
  obj.newIndicatorDismissibleContent = arg1(dependencyMap[9]).DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(closure_2[10]).showModal(items);
  };
  return jsx(arg1(dependencyMap[5]).OneWayToTwoWayLinkUpsell, obj);
};
