// Module ID: 10420
// Function ID: 80280
// Name: UnreadSettingNoticeConnected
// Dependencies: [1194, 1348, 1906, 4142, 669, 2, 57, 31, 4120, 1347, 7814, 4163]
// Exports: default

// Module 10420 (UnreadSettingNoticeConnected)
import "_isNativeReflectConstruct";
import { View } from "_isNativeReflectConstruct";
import { ChannelNotificationSettingsFlags as closure_4 } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

({ jsx: closure_5, jsxs: closure_6 } = _isNativeReflectConstruct);
set = {};
set = { paddingVertical: require("result2").space.PX_12, paddingHorizontal: require("result2").space.PX_16, borderBottomColor: require("result2").colors.BORDER_SUBTLE, backgroundColor: require("result2").colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(require("result2").shadows.SHADOW_LOW);
set.content = set;
set.informations = { flex: 1 };
set.actions = {};
set.inlineTextWithIcon = {};
set = set.createStyles(set);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  const arg1 = channel;
  const tmp = set();
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
  const obj4 = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[8]).t.KyUKhT);
  obj3.children = callback(arg1(dependencyMap[7]).Text, obj4);
  obj2.children = callback(arg1(dependencyMap[9]).PressableOpacity, obj3);
  items[2] = callback(View, obj2);
  obj.children = items;
  return callback2(View, obj);
};
