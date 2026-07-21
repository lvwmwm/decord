// Module ID: 10420
// Function ID: 80291
// Name: UnreadSettingNoticeConnected
// Dependencies: []
// Exports: default

// Module 10420 (UnreadSettingNoticeConnected)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).ChannelNotificationSettingsFlags;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_LOW);
obj.content = obj;
obj.informations = { flex: 1 };
obj.actions = {};
obj.inlineTextWithIcon = { ty: 8, c: null, o: "\u270A\u{1F3FF}" };
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  const arg1 = channel;
  const tmp = callback3();
  let obj = { style: tmp.content };
  obj = { id: channel.channel.id };
  const items = [callback(importDefault(dependencyMap[6]), obj), , ];
  obj = { style: tmp.informations };
  const obj1 = { variant: "text-md/semibold" };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.i4xQ5o);
  obj.children = callback(arg1(dependencyMap[7]).Text, obj1);
  items[1] = callback(View, obj);
  const obj2 = { style: tmp.actions };
  const obj3 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress(self) {
      callback(closure_2[10])(self.channel.guild_id, self.channel.id, constants.UNREADS_ONLY_MENTIONS);
      self.clearUnreadsNotice();
    }
  };
  const obj4 = { hasMaxConnections: true, isBoostOnlySubscription: true };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[8]).t.KyUKhT);
  obj3.children = callback(arg1(dependencyMap[7]).Text, obj4);
  obj2.children = callback(arg1(dependencyMap[9]).PressableOpacity, obj3);
  items[2] = callback(View, obj2);
  obj.children = items;
  return callback2(View, obj);
};
