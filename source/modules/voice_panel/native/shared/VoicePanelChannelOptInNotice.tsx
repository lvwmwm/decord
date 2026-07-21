// Module ID: 15672
// Function ID: 119746
// Dependencies: []

// Module 15672
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const analyticsSection = channel.analyticsSection;
  const importDefault = analyticsSection;
  const items = [channel, analyticsSection];
  const callback = importAllResult.useCallback(() => {
    let obj = channel(closure_2[2]);
    obj = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj);
  }, items);
  let obj = { style: channel.style };
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.label = intl.string(arg1(dependencyMap[5]).t.9mysCh);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.subLabel = intl2.string(arg1(dependencyMap[5]).t.PDUCIN);
  obj = { IconComponent: arg1(dependencyMap[7]).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(arg1(dependencyMap[6]).TableRowIcon, obj);
  obj.onPress = callback;
  obj.start = true;
  obj.end = true;
  obj.arrow = true;
  obj.children = jsx(arg1(dependencyMap[4]).TableRow, obj);
  return jsx(importDefault(dependencyMap[3]), obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
