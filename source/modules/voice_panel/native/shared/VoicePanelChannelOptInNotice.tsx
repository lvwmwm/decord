// Module ID: 15935
// Function ID: 15936
// Dependencies: [19, 21, 5129, 5568, 5220, 1236, 5226, 12978, 2]

// Module 15935
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = importAllResult.useCallback(() => {
    let obj = channel(outer1_2[2]);
    obj = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj);
  }, items);
  let obj = { style: channel.style, children: null };
  obj = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["9mysCh"]);
  const intl2 = channel(1236).intl;
  obj[1] = intl2.string(channel(1236).t.PDUCIN);
  obj = { IconComponent: null };
  obj[0] = channel(12978).ChannelListMagnifyingGlassIcon;
  obj[2] = jsx(channel(5226).TableRowIcon, { IconComponent: null });
  obj[3] = callback;
  obj[1] = jsx(channel(5220).TableRow, { IconComponent: null });
  return jsx(analyticsSection(5568), { IconComponent: null });
});
const result = require("_persistOptInChannelUpdates2").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
