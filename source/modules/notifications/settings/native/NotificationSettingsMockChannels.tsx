// Module ID: 10289
// Function ID: 79445
// Name: NotificationSettingsMockChannels
// Dependencies: []
// Exports: default

// Module 10289 (NotificationSettingsMockChannels)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UnreadSetting = arg1(dependencyMap[2]).UnreadSetting;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.card = obj;
obj.channel = {};
obj.channelName = { ty: 8, c: null, o: "\u270A\u{1F3FF}" };
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockChannels.tsx");

export default function NotificationSettingsMockChannels(unreadSetting) {
  const tmp = callback2();
  const arg1 = tmp;
  let obj = { resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  const intl = arg1(dependencyMap[6]).intl;
  obj.name = intl.string(arg1(dependencyMap[6]).t.EjLobP);
  const items = [obj, , ];
  obj = { resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.name = intl2.string(arg1(dependencyMap[6]).t.Wgpwpp);
  items[1] = obj;
  obj = { resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.name = intl3.string(arg1(dependencyMap[6]).t.g9VImh);
  items[2] = obj;
  if (unreadSetting.unreadSetting === UnreadSetting.ALL_MESSAGES) {
    items[1].resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  }
  return callback(View, {
    style: tmp.card,
    children: items.map((unread) => {
      let obj = { style: tmp.channel };
      obj = { style: tmp.channelName };
      obj = { unread: unread.unread, resolvedUnreadSetting: unread.resolvedUnreadSetting };
      const items = [callback2(callback(closure_2[7]), obj), , ];
      const obj1 = { style: { marginLeft: 12 }, size: "xs" };
      let str;
      if (unread.resolvedUnreadSetting === constants.ONLY_MENTIONS) {
        str = "text-muted";
      }
      obj1.color = str;
      items[1] = callback2(closure_6(closure_2[8]).TextIcon, obj1);
      const obj2 = { style: { marginLeft: 4 }, variant: "text-sm/semibold" };
      let str2;
      if (unread.resolvedUnreadSetting === constants.ONLY_MENTIONS) {
        str2 = "text-muted";
      }
      obj2.color = str2;
      obj2.children = unread.name;
      items[2] = callback2(closure_6(closure_2[9]).Text, obj2);
      obj.children = items;
      const items1 = [closure_6(closure_3, obj), ];
      const obj3 = {};
      let num = 0;
      if (unread.badged) {
        num = 1;
      }
      obj3.value = num;
      items1[1] = callback2(closure_6(closure_2[10]).Badge, obj3);
      obj.children = items1;
      return closure_6(closure_3, obj, unread.name);
    })
  });
};
