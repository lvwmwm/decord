// Module ID: 14754
// Function ID: 111214
// Name: handleCreateJoinGuildPress
// Dependencies: []
// Exports: handleCreateJoinGuildPress

// Module 14754 (handleCreateJoinGuildPress)
function handleCreateJoinGuildPress() {
  return _handleCreateJoinGuildPress(...arguments);
}
function _handleCreateJoinGuildPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleCreateJoinGuildPress = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const View = arg1(dependencyMap[2]).View;
const importAllResult = importAll(dependencyMap[1]);
({ AnalyticsPages: closure_5, TooltipNames: closure_6, UpsellTypes: closure_7 } = arg1(dependencyMap[3]));
const PremiumUpsellTypes = arg1(dependencyMap[4]).PremiumUpsellTypes;
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ stretch: { alignSelf: "stretch" } });
let closure_11 = { onPress: handleCreateJoinGuildPress };
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function GuildsBarCreateJoinButton() {
  const tmp = importDefault(dependencyMap[13])("GuildsBarCreateJoinButton");
  let obj = arg1(dependencyMap[14]);
  obj = { style: callback2().stretch };
  const tmp2 = callback2();
  obj = { circle: !tmp, styles: obj.useGuildsBarAnimatedWrapperStyles(), overState: undefined, config: closure_11 };
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const intl = arg1(dependencyMap[15]).intl;
  obj.label = intl.string(arg1(dependencyMap[15]).t.l5WIbf);
  obj.expandedChildren = jsx(arg1(dependencyMap[16]).HomeDrawerAddServerRowExpandedChildren, {});
  const obj1 = { size: "md", color: importDefault(dependencyMap[18]).colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj.children = jsx(arg1(dependencyMap[17]).CirclePlusIcon, obj1);
  obj.children = jsx(importDefault(dependencyMap[14]), obj);
  return <View {...obj} />;
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default memoResult;
export { handleCreateJoinGuildPress };
