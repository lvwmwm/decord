// Module ID: 19387
// Function ID: 19388
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 7402, 7086, 7101, 1113, 7109, 15808, 2]

// Module 19387 (VoicePanelChannelOptInNotice)
import Fragment from "Fragment" /* 21 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7402 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function VoicePanelChannelOptInNotice(channel) {
  let intl;
  let intl2;
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const style = channel.style;
  const callback = react.useCallback(() => {
    const obj = OptInChannelsActionCreators;
    const obj2 = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj2);
  }, items);
  let obj2 = { label: intl.string(channel(1113).t["9mysCh"]), subLabel: intl2.string(channel(1113).t.PDUCIN), icon: null, onPress: callback, start: true, end: true, arrow: true };
  analyticsSection(7086);
  const TableRow = channel(7101).TableRow;
  intl = channel(1113).intl;
  intl2 = channel(1113).intl;
  ({ IconComponent: channel(15808).ChannelListMagnifyingGlassIcon });
  const TableRowIcon = channel(7109).TableRowIcon;
  return <tmp2 style={style}>{null}</tmp2>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
