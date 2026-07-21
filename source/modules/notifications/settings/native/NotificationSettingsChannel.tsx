// Module ID: 10273
// Function ID: 79370
// Name: NotificationSettingsChannel
// Dependencies: []
// Exports: default

// Module 10273 (NotificationSettingsChannel)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { head_shaking_horizontally: "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", disappointed: true, pensive: null, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.screenContainer = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default function NotificationSettingsChannel(channel) {
  const arg1 = channel;
  let obj = arg1(closure_2[6]);
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = arg1(closure_2[7]).intl;
  const importDefault = intl.string(arg1(closure_2[7]).t.h850Ss);
  closure_2 = importDefault(closure_2[8])(channel.channel);
  let obj1 = arg1(closure_2[9]);
  const React = obj1.useNavigation();
  const layoutEffect = React.useLayoutEffect(() => {
    let obj = {
      title: "" + closure_1 + " (" + closure_2 + ")",
      headerTitle() {
        return callback2(callback(closure_2[10]).NavigatorHeader, { title: closure_1, subtitle: closure_2 });
      }
    };
    store.setOptions(obj);
    if (arg0.inGuildContext) {
      obj = { headerLeft: arg0(closure_2[10]).getHeaderBackButton(() => closure_3.popToTop()) };
      store.setOptions(obj);
      const obj3 = arg0(closure_2[10]);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = React.useCallback(() => arg0(closure_2[6]).updateChannelToGuildDefault(arg0.channel.guild_id, arg0.channel.id), items);
  const callback1 = React.useCallback(() => {
    let obj = callback(closure_2[11]);
    obj = { muted: false };
    const result = obj.updateChannelOverrideSettings(arg0.channel.guild_id, arg0.channel.id, obj, arg0(closure_2[12]).NotificationLabels.Unmuted);
  }, items1);
  let obj2 = arg1(closure_2[13]);
  const items2 = [closure_5];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({ config: closure_5.getChannelMuteConfig(arg0.channel.guild_id, arg0.channel.id), muted: closure_5.isChannelMuted(arg0.channel.guild_id, arg0.channel.id) }));
  obj = { style: callback2().screenContainer };
  let muted = stateFromStoresObject.muted;
  if (muted) {
    obj = {};
    obj1 = { marginBottom: 16 };
    obj.style = obj1;
    const intl2 = arg1(closure_2[7]).intl;
    obj.title = intl2.string(arg1(closure_2[7]).t.6MCxAy);
    let obj6 = arg1(closure_2[15]);
    obj.subtitle = obj6.getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
    obj.onPressUnmute = callback1;
    muted = callback(arg1(closure_2[15]).NotificationSettingsMuteBanner, obj);
  }
  const items3 = [muted, , , , , ];
  obj2 = { channel: channel.channel };
  items3[1] = callback(arg1(closure_2[16]).NotificationSettingsChannelPresets, obj2);
  items3[2] = callback(arg1(closure_2[17]).NotificationSettingsChannelMessageNotification, { style: { marginTop: 24 }, channel: channel.channel });
  items3[3] = callback(arg1(closure_2[18]).NotificationSettingsChannelMessageUnread, { style: { marginTop: 24 }, channel: channel.channel });
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const obj5 = {};
    obj6 = { marginTop: 24 };
    obj5.style = obj6;
    obj5.channel = channel.channel;
    isForumLikeChannelResult = callback(arg1(closure_2[19]).NotificationSettingsChannelPost, obj5);
  }
  items3[4] = isForumLikeChannelResult;
  let tmp15 = !channelPresetInheritance.inherited;
  if (tmp15) {
    const obj7 = {};
    const obj8 = { marginTop: 24 };
    obj7.style = obj8;
    const obj9 = { variant: "secondary", onPress: callback };
    const intl3 = arg1(closure_2[7]).intl;
    obj9.text = intl3.string(arg1(closure_2[7]).t.3PBFN6);
    obj7.children = callback(arg1(closure_2[20]).Button, obj9);
    tmp15 = callback(View, obj7);
  }
  items3[5] = tmp15;
  obj.children = items3;
  return closure_7(arg1(closure_2[14]).Form, obj);
};
