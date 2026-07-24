// Module ID: 15400
// Function ID: 117535
// Name: GuildChannelLabel
// Dependencies: [31, 27, 9141, 33, 4130, 689, 4320, 15401, 4593, 15403, 15393, 2]

// Module 15400 (GuildChannelLabel)
import get_ActivityIndicator from "get ActivityIndicator";
import { CHANNEL_LIST_SEARCH_LAYOUT as closure_5 } from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  let obj = { style: callback().content };
  const tmp = callback();
  const tmp2 = importDefault(4320)(channel);
  obj = { channel, layout: closure_5, name: tmp2 };
  obj.children = require(15401) /* ChannelContentComponent */.renderChannelContent(obj);
  return <closure_4 channel={channel} layout={closure_5} name={tmp2} />;
}
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 } };
obj = { width: 20, height: 20, marginRight: 8, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
obj.simpleIcon = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function GuildChannelRow(channel) {
  let extras;
  let icon;
  let iconWidth;
  let onPress;
  let subtitle;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  let obj = { channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 };
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  const tmp3 = callback();
  let obj1 = require(15403) /* LaunchpadChannelIcon */;
  obj = { channel, unread: false, mentionCount: 0, voiceStates };
  const channelAccessibilityProps = obj1.getChannelAccessibilityProps(obj);
  obj = {};
  obj1 = { style: tmp3.simpleIcon, source: require(4593) /* getThreadChannelIcon */.getSimpleChannelIcon(channel) };
  obj.icon = <closure_3 style={tmp3.simpleIcon} source={require(4593) /* getThreadChannelIcon */.getSimpleChannelIcon(channel)} />;
  obj.iconWidth = 32;
  ({ icon, iconWidth } = obj);
  const obj2 = {};
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  obj2["containerStyle"] = tmp3.container;
  obj2["iconContainerStyle"] = tmp3.iconContainer;
  obj2["icon"] = icon;
  obj2["iconWidth"] = iconWidth;
  obj2["label"] = <GuildChannelLabel channel={channel} />;
  obj2["subLabel"] = subtitle;
  obj2["onPress"] = onPress;
  obj2["trailing"] = trailing;
  obj2["extras"] = extras;
  return jsx(require(15393) /* SearchListRow */.SearchListRow, {});
});
const result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default memoResult;
