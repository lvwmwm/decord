// Module ID: 10316
// Function ID: 79647
// Name: NotificationSettingsChannel
// Dependencies: [31, 27, 4325, 33, 4130, 689, 10317, 1212, 4320, 1456, 5087, 5079, 5073, 566, 7636, 10319, 10320, 10324, 10331, 10337, 4543, 2]
// Exports: default

// Module 10316 (NotificationSettingsChannel)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: 16 };
_createForOfIteratorHelperLoose.screenContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default function NotificationSettingsChannel(channel) {
  const _require = channel;
  let obj = _require(10317);
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = _require(1212).intl;
  const importDefault = intl.string(_require(1212).t.h850Ss);
  const dependencyMap = importDefault(4320)(channel.channel);
  let obj1 = _require(1456);
  const React = obj1.useNavigation();
  const layoutEffect = React.useLayoutEffect(() => {
    let obj = {
      title: "" + closure_1 + " (" + dependencyMap + ")",
      headerTitle() {
        return outer2_6(callback(table[10]).NavigatorHeader, { title: outer1_1, subtitle: outer1_2 });
      }
    };
    store.setOptions(obj);
    if (channel.inGuildContext) {
      obj = { headerLeft: channel(5087).getHeaderBackButton(() => outer1_3.popToTop()) };
      store.setOptions(obj);
      const obj3 = channel(5087);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = React.useCallback(() => channel(10317).updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id), items);
  const callback1 = React.useCallback(() => {
    let obj = callback(5079);
    obj = { muted: false };
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, channel(5073).NotificationLabels.Unmuted);
  }, items1);
  let obj2 = _require(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({ config: outer1_5.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: outer1_5.isChannelMuted(channel.channel.guild_id, channel.channel.id) }));
  obj = { style: _createForOfIteratorHelperLoose().screenContainer };
  let muted = stateFromStoresObject.muted;
  if (muted) {
    obj = {};
    obj1 = { marginBottom: 16 };
    obj.style = obj1;
    const intl2 = _require(1212).intl;
    obj.title = intl2.string(_require(1212).t["6MCxAy"]);
    let obj6 = _require(10319);
    obj.subtitle = obj6.getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
    obj.onPressUnmute = callback1;
    muted = callback(_require(10319).NotificationSettingsMuteBanner, obj);
  }
  const items3 = [muted, , , , , ];
  obj2 = { channel: channel.channel };
  items3[1] = callback(_require(10320).NotificationSettingsChannelPresets, obj2);
  items3[2] = callback(_require(10324).NotificationSettingsChannelMessageNotification, { style: { marginTop: 24 }, channel: channel.channel });
  items3[3] = callback(_require(10331).NotificationSettingsChannelMessageUnread, { style: { marginTop: 24 }, channel: channel.channel });
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const obj5 = {};
    obj6 = { marginTop: 24 };
    obj5.style = obj6;
    obj5.channel = channel.channel;
    isForumLikeChannelResult = callback(_require(10337).NotificationSettingsChannelPost, obj5);
  }
  items3[4] = isForumLikeChannelResult;
  let tmp15 = !channelPresetInheritance.inherited;
  if (tmp15) {
    const obj7 = {};
    const obj8 = { marginTop: 24 };
    obj7.style = obj8;
    const obj9 = { variant: "secondary", onPress: callback };
    const intl3 = _require(1212).intl;
    obj9.text = intl3.string(_require(1212).t["3PBFN6"]);
    obj7.children = callback(_require(4543).Button, obj9);
    tmp15 = callback(View, obj7);
  }
  items3[5] = tmp15;
  obj.children = items3;
  return closure_7(_require(7636).Form, obj);
};
