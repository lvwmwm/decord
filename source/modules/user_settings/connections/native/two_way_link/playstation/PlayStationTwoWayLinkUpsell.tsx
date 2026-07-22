// Module ID: 13757
// Function ID: 104040
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: []
// Exports: PlayStationTwoWayLinkUpsell

// Module 13757 (PlayStationTwoWayLinkUpsell)
importAll(dependencyMap[0]);
({ HelpdeskArticles: closure_3, AnalyticsLocations: closure_4, PlatformTypes: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ upsellImage: { 0: true, -9223372036854775808: true, 9223372036854775807: true } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  let obj = importDefault(dependencyMap[4]);
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.v20wwm);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.body = intl2.format(arg1(dependencyMap[6]).t.lTZBit, { help_article: articleURL });
  obj = { style: callback().upsellImage };
  const tmp = callback();
  obj.source = importDefault(dependencyMap[8]);
  obj.resizeMode = "contain";
  obj.img = jsx(importDefault(dependencyMap[7]), obj);
  obj.newIndicatorDismissibleContent = arg1(dependencyMap[9]).DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(closure_2[10]).showModal(items, constants2.PLAYSTATION);
  };
  return jsx(arg1(dependencyMap[5]).OneWayToTwoWayLinkUpsell, obj);
};
