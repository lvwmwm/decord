// Module ID: 14941
// Function ID: 112479
// Name: IAPUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 14941 (IAPUpsellActionSheet)
importAll(dependencyMap[0]);
const Routes = arg1(dependencyMap[1]).Routes;
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  let markAsDismissed;
  ({ guildId: closure_0, markAsDismissed } = arg0);
  const importDefault = markAsDismissed;
  const obj = { imageSource: importDefault(dependencyMap[6]) };
  const intl = arg1(dependencyMap[7]).intl;
  obj.header = intl.string(arg1(dependencyMap[7]).t.rBw4cE);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.body = intl2.string(arg1(dependencyMap[7]).t.mKHibc);
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.cta = intl3.string(arg1(dependencyMap[7]).t.RzWDqY);
  obj.onCTAPress = function onCTAPress() {
    callback(closure_2[8]).transitionTo(closure_3.CHANNEL(callback, constants.ROLE_SUBSCRIPTIONS));
    markAsDismissed(constants2.UNKNOWN);
  };
  obj.markAsDismissed = markAsDismissed;
  return jsx(importDefault(dependencyMap[5]), obj);
};
