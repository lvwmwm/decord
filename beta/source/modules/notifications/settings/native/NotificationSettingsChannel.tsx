// Module ID: 9606
// Function ID: 9607
// Name: NotificationSettingsChannel
// Dependencies: [19, 17, 5017, 21, 4836, 576, 9607, 1115, 4989, 1485, 5936, 6540, 6535, 504, 8053, 9609, 9610, 9616, 9623, 9629, 5281, 2]
// Exports: default

// Module 9606 (NotificationSettingsChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 9607 */;
import react_mod from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { screenContainer: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default function NotificationSettingsChannel(channel) {
  let Button;
  let closure_1;
  let closure_2;
  let intl2;
  let intl3;
  let items3;
  let obj11;
  let options;
  let tmpResult;
  _require = channel;
  let tmp = _require;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = require("intl").intl;
  importDefault = intl.string(require("intl").t.h850Ss);
  dependencyMap = useChannelNameDefault(channel.channel);
  let obj2 = require("useNavigation");
  react = obj2.useNavigation();
  const tmp4 = closure_8();
  const layoutEffect = react.useLayoutEffect(() => {
    let obj3;
    let obj = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        const obj = { title, subtitle };
        return closure_2_6(channel(subtitle[10]).NavigatorHeader, obj);
      }
    };
    options.setOptions(obj);
    const tmp = options;
    if (channel.inGuildContext) {
      const setOptions = tmp.setOptions;
      const obj2 = { headerLeft: obj3.getHeaderBackButton(() => options.popToTop()) };
      obj3 = NavigatorHeader;
      setOptions(obj2);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = react.useCallback(() => {
    const obj = notficationSettingsChannelFlagUtils;
    return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const obj2 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
    const result = obj.updateChannelOverrideSettings(obj2);
  }, items1);
  let obj3 = require("get initialized");
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
    return obj;
  });
  let muted = stateFromStoresObject.muted;
  const obj4 = { style: tmp4.screenContainer, children: items3 };
  const Form = require("Form").Form;
  const tmp9 = closure_7;
  if (muted) {
    const obj5 = { style: { marginBottom: 16 }, title: intl2.string(tmp(1115).t["6MCxAy"]), subtitle: tmpResult.getMuteBannerSubtitleFromConfig(stateFromStoresObject.config), onPressUnmute: callback1 };
    const NotificationSettingsMuteBanner = tmp(9609).NotificationSettingsMuteBanner;
    intl2 = tmp(1115).intl;
    tmpResult = tmp(9609);
    muted = closure_6(NotificationSettingsMuteBanner, obj5);
  }
  items3 = [muted, , , , , ];
  const obj6 = { channel: channel.channel };
  items3[1] = closure_6(tmp(9610).NotificationSettingsChannelPresets, obj6);
  const obj7 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[2] = closure_6(tmp(9616).NotificationSettingsChannelMessageNotification, obj7);
  const obj8 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[3] = closure_6(tmp(9623).NotificationSettingsChannelMessageUnread, obj8);
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const obj9 = { style: { marginTop: 24 }, channel: channel.channel };
    isForumLikeChannelResult = tmp11(tmp(9629).NotificationSettingsChannelPost, obj9);
  }
  items3[4] = isForumLikeChannelResult;
  let tmp11Result = !channelPresetInheritance.inherited;
  if (tmp11Result) {
    const obj10 = { style: { marginTop: 24 }, children: closure_6(Button, obj11) };
    obj11 = { variant: "secondary", onPress: callback, text: intl3.string(tmp(1115).t["3PBFN6"]) };
    Button = tmp(5281).Button;
    intl3 = tmp(1115).intl;
    tmp11Result = tmp11(View, obj10);
  }
  items3[5] = tmp11Result;
  return tmp9(Form, obj4);
};
