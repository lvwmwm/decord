// Module ID: 15219
// Function ID: 114942
// Name: GuildChannelLabel
// Dependencies: []

// Module 15219 (GuildChannelLabel)
function GuildChannelLabel(channel) {
  channel = channel.channel;
  let obj = { style: callback().content };
  const tmp = callback();
  const tmp2 = importDefault(dependencyMap[6])(channel);
  obj = { channel, layout: closure_5, name: tmp2 };
  obj.children = arg1(dependencyMap[7]).renderChannelContent(obj);
  return <closure_4 {...obj} />;
}
const importAllResult = importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = arg1(dependencyMap[2]).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let obj = { container: { paddingVertical: 10 }, content: { -9223372036854775808: true, filter: true }, iconContainer: { marginRight: 0 } };
obj = { useTrackPdpClick: null, GameDetectionDebugLevel: null, presenceCount: null, tintColor: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
obj.simpleIcon = obj;
let closure_7 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function GuildChannelRow(channel) {
  let extras;
  let icon;
  let iconWidth;
  let onPress;
  let subtitle;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  let obj = { <string:2363712652>: null, <string:2907811488>: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION", <string:1369596261>: "Missing required option for startPayment.", <string:3311642165>: null, <string:4150435980>: "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED", <string:2639942489>: "LocalPayment startPayment deferred payment failed." };
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  const tmp3 = callback();
  let obj1 = arg1(dependencyMap[9]);
  obj = { 9223372036854775807: null, 9223372036854775807: "2eaff20be2a75be7ccdd4c6f19f0eb36", 0: "img_account_sync_youtube_white", channel, voiceStates };
  const channelAccessibilityProps = obj1.getChannelAccessibilityProps(obj);
  obj = {};
  obj1 = { style: tmp3.simpleIcon, source: arg1(dependencyMap[8]).getSimpleChannelIcon(channel) };
  obj.icon = <closure_3 {...obj1} />;
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
  return jsx(arg1(dependencyMap[10]).SearchListRow, obj2);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default memoResult;
