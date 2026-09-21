// Module ID: 17534
// Function ID: 17535
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 558, 568, 7360, 1119, 5828, 14115, 5822, 5804, 2]

// Module 17534 (VoicePanelChannelOptInNotice)
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7360 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsSection) => {
  const cResult = channel(568).c(12);
  ({ style, channel } = analyticsSection);
  analyticsSection = analyticsSection.analyticsSection;
  if (cResult[0] === analyticsSection) {
    if (cResult[1] === channel.guild_id) {
      if (cResult[2] === channel.id) {
        let tmp4 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t["9mysCh"]);
        const intl2 = tmp(1119).intl;
        const stringResult1 = intl2.string(tmp(1119).t.PDUCIN);
        const obj2 = { IconComponent: tmp(14115).ChannelListMagnifyingGlassIcon };
        const tmp12 = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(14115).ChannelListMagnifyingGlassIcon });
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        cResult[6] = tmp12;
        let tmp8 = tmp12;
        let tmp7 = stringResult1;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[4];
        tmp7 = cResult[5];
        tmp8 = cResult[6];
      }
      if (cResult[7] !== tmp4) {
        const obj3 = { label: tmp6, subLabel: tmp7, icon: tmp8, onPress: tmp4, start: true, end: true, arrow: true };
        const tmp15 = jsx(tmp(5822).TableRow, { label: tmp6, subLabel: tmp7, icon: tmp8, onPress: tmp4, start: true, end: true, arrow: true });
        cResult[7] = tmp4;
        cResult[8] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === style) {
        if (cResult[10] === tmp13) {
          let tmp16 = cResult[11];
        }
        return tmp16;
      }
      const obj4 = { style, children: tmp13 };
      const tmp19 = jsx(analyticsSection(5804), { style, children: tmp13 });
      cResult[9] = style;
      cResult[10] = tmp13;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    }
  }
  const fn = function l() {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  };
  cResult[0] = analyticsSection;
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = noop.useCallback(() => {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  }, items);
  const obj = { style: channel.style, children: null };
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1119).intl;
  obj2.label = intl.string(channel(1119).t["9mysCh"]);
  const intl2 = channel(1119).intl;
  obj2.subLabel = intl2.string(channel(1119).t.PDUCIN);
  const tmp2 = analyticsSection(5804);
  obj2.icon = jsx(channel(5828).TableRowIcon, { IconComponent: channel(14115).ChannelListMagnifyingGlassIcon });
  obj2.onPress = callback;
  obj.children = jsx(channel(5822).TableRow, { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true });
  return <tmp2 style={arg0.style}>{null}</tmp2>;
}));
