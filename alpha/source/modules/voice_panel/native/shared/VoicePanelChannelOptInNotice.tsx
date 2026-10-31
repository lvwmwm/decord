// Module ID: 19222
// Function ID: 19223
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 7282, 6960, 6975, 1113, 6983, 15661, 2]

// Module 19222 (VoicePanelChannelOptInNotice)
import Fragment from "Fragment" /* 21 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7282 */;
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
  analyticsSection(6960);
  const TableRow = channel(6975).TableRow;
  intl = channel(1113).intl;
  intl2 = channel(1113).intl;
  ({ IconComponent: channel(15661).ChannelListMagnifyingGlassIcon });
  const TableRowIcon = channel(6983).TableRowIcon;
  return <tmp2 style={style}>{null}</tmp2>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
