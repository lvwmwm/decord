// Module ID: 11623
// Function ID: 90268
// Name: MuteAppDMActionSheet
// Dependencies: []
// Exports: default

// Module 11623 (MuteAppDMActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.sheet = obj;
obj.iconContainer = {};
obj.iconBackground = {};
obj.content = { padding: 16 };
obj.headerText = {};
obj.infoText = {};
obj.dismissButtonContainer = { marginTop: 8 };
const obj1 = { Text: null, a: "center", Set: "center", url: -352059390, children: -353173502, Object: -352059390, borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_NOTIFICATION };
obj.mutedNotificationContainer = obj1;
obj.mutedNotification = { "Null": null, "Null": null };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  const tmp = callback3();
  const arg1 = tmp;
  const importDefault = channel.channel;
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet };
  obj = { style: tmp.content };
  obj = { style: tmp.iconContainer };
  const obj1 = { style: tmp.iconBackground, IconComponent: arg1(dependencyMap[7]).BellIcon, active: true };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.uAmAiL);
  obj.children = callback(importDefault(dependencyMap[6]), obj1);
  const items = [callback(View, obj), , , , ];
  const obj2 = { cachedAt: true, edpbxy: true, style: tmp.headerText };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.uAmAiL);
  items[1] = callback(arg1(dependencyMap[9]).Text, obj2);
  const obj3 = { cachedAt: 1, edpbxy: 1, style: tmp.infoText };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[8]).t.mscFJU);
  items[2] = callback(arg1(dependencyMap[9]).Text, obj3);
  const obj4 = { variant: "destructive" };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj4.text = intl4.string(arg1(dependencyMap[8]).t.uAmAiL);
  obj4.onPress = function onPress() {
    let obj = channel(closure_2[11]);
    obj = { muted: true };
    const result = obj.updateChannelOverrideSettings(null, channel.id, obj, tmp(closure_2[12]).NotificationLabels.Muted);
    channel(closure_2[13]).hideActionSheet();
    const obj3 = channel(closure_2[13]);
    obj = { key: "NOTIFICATIONS_MUTED" };
    const intl = tmp(closure_2[8]).intl;
    obj.content = intl.string(tmp(closure_2[8]).t.EgGpkx);
    obj.icon = function icon() {
      let obj = { style: lib.mutedNotificationContainer };
      obj = { source: callback(closure_2[16]), color: callback(closure_2[4]).unsafe_rawColors.WHITE, style: lib.mutedNotification };
      obj.children = callback2(lib(closure_2[15]).Icon, obj);
      return callback2(closure_3, obj);
    };
    channel(closure_2[14]).open(obj);
  };
  items[3] = callback(arg1(dependencyMap[10]).Button, obj4);
  const obj5 = { style: tmp.dismissButtonContainer };
  const obj6 = { variant: "secondary" };
  const intl5 = arg1(dependencyMap[8]).intl;
  obj6.text = intl5.string(arg1(dependencyMap[8]).t.WAI6xu);
  obj6.onPress = function onPress() {
    channel(closure_2[13]).hideActionSheet();
  };
  obj5.children = callback(arg1(dependencyMap[10]).Button, obj6);
  items[4] = callback(View, obj5);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[5]).BottomSheet, obj);
};
