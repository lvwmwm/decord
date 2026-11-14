// Module ID: 19198
// Function ID: 19199
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 7877, 7722, 7443, 1113, 7455, 16277, 2]

// Module 19198 (VoicePanelChannelOptInNotice)
import Fragment from "Fragment" /* 21 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7877 */;
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
  analyticsSection(7722);
  const TableRow = channel(7443).TableRow;
  intl = channel(1113).intl;
  intl2 = channel(1113).intl;
  ({ IconComponent: channel(16277).ChannelListMagnifyingGlassIcon });
  const TableRowIcon = channel(7455).TableRowIcon;
  return <tmp2 style={style}>{null}</tmp2>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
