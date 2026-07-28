// Module ID: 15906
// Function ID: 122656
// Dependencies: [31, 33, 5107, 5550, 5198, 1212, 5204, 12960, 2]

// Module 15906
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
  obj = { IconComponent: channel(12960).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(channel(5204).TableRowIcon, { IconComponent: channel(12960).ChannelListMagnifyingGlassIcon });
  obj.onPress = callback;
  obj.start = true;
  obj.end = true;
  obj.arrow = true;
  obj.children = jsx(channel(5198).TableRow, { IconComponent: channel(12960).ChannelListMagnifyingGlassIcon });
  return jsx(analyticsSection(5550), { IconComponent: channel(12960).ChannelListMagnifyingGlassIcon });
});
const result = require("_persistOptInChannelUpdates2").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default memoResult;
