// Module ID: 15797
// Function ID: 121962
// Dependencies: [31, 33, 5072, 5517, 5165, 1212, 5170, 12852, 2]

// Module 15797
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = importAllResult.useCallback(() => {
    let obj = channel(outer1_2[2]);
    obj = { section: analyticsSection };
    obj.setOptInChannel(channel.guild_id, channel.id, true, obj);
  }, items);
  let obj = { style: channel.style };
  obj = {};
  const intl = channel(1212).intl;
  obj.label = intl.string(channel(1212).t["9mysCh"]);
  const intl2 = channel(1212).intl;
  obj.subLabel = intl2.string(channel(1212).t.PDUCIN);
  obj = { IconComponent: channel(12852).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(channel(5170).TableRowIcon, { IconComponent: channel(12852).ChannelListMagnifyingGlassIcon });
  obj.onPress = callback;
  obj.start = true;
  obj.end = true;
  obj.arrow = true;
  obj.children = jsx(channel(5165).TableRow, { IconComponent: channel(12852).ChannelListMagnifyingGlassIcon });
  return jsx(analyticsSection(5517), { IconComponent: channel(12852).ChannelListMagnifyingGlassIcon });
});
const result = require("_persistOptInChannelUpdates2").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
