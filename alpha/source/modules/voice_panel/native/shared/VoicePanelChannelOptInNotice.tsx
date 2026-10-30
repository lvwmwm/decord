// Module ID: 19170
// Function ID: 19171
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 7276, 6954, 6969, 1114, 6977, 15620, 2]

// Module 19170 (VoicePanelChannelOptInNotice)
import Fragment from "Fragment" /* 21 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7276 */;
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
  let obj2 = { label: intl.string(channel(1114).t["9mysCh"]), subLabel: intl2.string(channel(1114).t.PDUCIN), icon: null, onPress: callback, start: true, end: true, arrow: true };
  analyticsSection(6954);
  const TableRow = channel(6969).TableRow;
  intl = channel(1114).intl;
  intl2 = channel(1114).intl;
  ({ IconComponent: channel(15620).ChannelListMagnifyingGlassIcon });
  const TableRowIcon = channel(6977).TableRowIcon;
  return <tmp2 style={style}>{null}</tmp2>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
