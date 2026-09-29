// Module ID: 17584
// Function ID: 17585
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 7390, 5838, 5854, 1115, 5860, 14142, 2]

// Module 17584 (VoicePanelChannelOptInNotice)
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7390 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default noop.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = noop.useCallback(() => {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  }, items);
  const obj = { style: channel.style, children: null };
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1115).intl;
  obj2.label = intl.string(channel(1115).t["9mysCh"]);
  const intl2 = channel(1115).intl;
  obj2.subLabel = intl2.string(channel(1115).t.PDUCIN);
  const tmp2 = analyticsSection(5838);
  obj2.icon = jsx(channel(5860).TableRowIcon, { IconComponent: channel(14142).ChannelListMagnifyingGlassIcon });
  obj2.onPress = callback;
  obj.children = jsx(channel(5854).TableRow, { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true });
  return <tmp2 style={arg0.style}>{null}</tmp2>;
});
