// Module ID: 16940
// Function ID: 16941
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 6534, 5901, 5917, 1115, 5923, 13388, 2]

// Module 16940 (VoicePanelChannelOptInNotice)
import Fragment from "Fragment" /* 21 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6534 */;
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
  let obj2 = { label: intl.string(channel(1115).t["9mysCh"]), subLabel: intl2.string(channel(1115).t.PDUCIN), icon: null, onPress: callback, start: true, end: true, arrow: true };
  analyticsSection(5901);
  const TableRow = channel(5917).TableRow;
  intl = channel(1115).intl;
  intl2 = channel(1115).intl;
  ({ IconComponent: channel(13388).ChannelListMagnifyingGlassIcon });
  const TableRowIcon = channel(5923).TableRowIcon;
  return <tmp2 style={style}>{null}</tmp2>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
