// Module ID: 10310
// Function ID: 79614
// Name: MuteSettings
// Dependencies: [31, 1348, 1838, 3767, 1849, 653, 33, 4126, 1212, 10311, 4098, 5501, 5165, 1273, 10313, 4320, 10314, 5498, 5186, 2]
// Exports: MuteSettingsHint, default

// Module 10310 (MuteSettings)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx");

export default function MuteSettings(guildId) {
  let muteConfig;
  let muted;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const onOptionPress = guildId.onOptionPress;
  guild = guild.getGuild(guildId);
  channel = channel.getChannel(channelId);
  const items = [channelId];
  const memo = guild.useMemo(() => guildId(onOptionPress[9]).getMuteSettings(channelId), items);
  const items1 = [channelId, guildId, onOptionPress];
  ({ muteConfig, muted } = memo);
  guild = guild.useCallback((muteDurationSeconds) => {
    let obj = channelId(onOptionPress[10]);
    obj.hideActionSheet();
    obj = { channelId, guildId, muteDurationSeconds, onOptionPress };
    const result = guildId(onOptionPress[9]).handleMuteSettingPress(obj);
  }, items1);
  const items2 = [channelId, guildId];
  const items3 = [channel, guild];
  const callback = guild.useCallback(() => {
    channelId(onOptionPress[10]).hideActionSheet();
    const obj = channelId(onOptionPress[10]);
    guildId(onOptionPress[9]).handleUnmutePress(channelId, guildId);
  }, items2);
  const items4 = [channel, guild];
  const memo1 = guild.useMemo(() => guildId(onOptionPress[9]).getMuteSettingLabel(channel, guild), items3);
  const memo2 = guild.useMemo(() => guildId(onOptionPress[9]).getMuteSettingSublabel(channel, guild), items4);
  if (null != channel) {
    if (muted) {
      let obj = {};
      obj = { hasIcons: true };
      let obj1 = {};
      const obj2 = { disableColor: true, source: channelId(onOptionPress[14]) };
      obj1.icon = callback(guildId(onOptionPress[13]).Icon, obj2);
      const intl = guildId(onOptionPress[8]).intl;
      const obj3 = {};
      const obj9 = guildId(onOptionPress[15]);
      obj3.name = obj9.computeChannelName(channel, closure_7, closure_6, true);
      obj1.label = intl.format(guildId(onOptionPress[8]).t["eC+9rj"], obj3);
      obj1.onPress = callback;
      obj.children = callback(guildId(onOptionPress[12]).TableRow, obj1);
      const items5 = [callback(guildId(onOptionPress[11]).TableRowGroup, obj), ];
      let obj4 = { muteConfig };
      const tmp17 = channelId(onOptionPress[16]);
      const tmp7 = callback2;
      const tmp8 = closure_10;
      const tmp9 = callback;
      const MuteSettingType = guildId(onOptionPress[16]).MuteSettingType;
      obj4.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
      obj4 = tmp9(tmp17, obj4);
      items5[1] = obj4;
      obj.children = items5;
      tmp7(tmp8, obj);
      const isPrivateResult = channel.isPrivate();
    }
  }
  obj1 = guildId(onOptionPress[9]);
  const muteOptions = obj1.getMuteOptions();
  const obj5 = {
    hasIcons: false,
    children: muteOptions.map((arg0) => {
      let guildId;
      let label;
      ({ label, duration: guildId } = arg0);
      return outer1_9(guildId(onOptionPress[12]).TableRow, {
        label,
        onPress() {
          return outer1_5(closure_0);
        }
      }, label);
    })
  };
  const obj6 = {};
  const items6 = [callback(guildId(onOptionPress[18]).BottomSheetTitleHeader, { title: memo1, subtitle: memo2 }), callback(guildId(onOptionPress[11]).TableRowGroup, obj5)];
  obj6.children = items6;
  return callback2(guildId(onOptionPress[17]).ActionSheet, obj6);
};
export const MuteSettingsHint = function MuteSettingsHint(guildMessageNotifications) {
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    let obj = { variant: "text-sm/medium", color: "text-default" };
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.children = intl5.string(require(1212) /* getSystemLocale */.t.t0mEt2);
    let tmp4 = callback(require(4126) /* Text */.Text, obj);
  } else if (tmp) {
    obj = { variant: "text-sm/medium", color: "text-default" };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {
      mutedHook(children) {
          const obj = { variant: "text-sm/medium", color: "text-feedback-critical", children };
          return outer1_9(outer1_0(outer1_2[7]).Text, obj, arg1);
        }
    };
    obj.children = intl4.format(require(1212) /* getSystemLocale */.t.O34r15, obj1);
    tmp4 = callback(require(4126) /* Text */.Text, obj);
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const obj2 = { variant: "text-sm/medium", color: "text-default" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj3 = {
      notificationHook(children) {
          const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
          return outer1_9(outer1_0(outer1_2[7]).Text, obj, arg1);
        }
    };
    obj2.children = intl3.format(require(1212) /* getSystemLocale */.t.nRwUIL, obj3);
    tmp4 = callback(require(4126) /* Text */.Text, obj2);
  } else {
    if (guildMessageNotifications !== UserNotificationSettings.ALL_MESSAGES) {
      tmp4 = null;
    }
    obj = { variant: "text-sm/medium", color: "text-default" };
    if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.mUbulW);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.GGAdHV);
    }
    obj.children = stringResult;
    callback(require(4126) /* Text */.Text, obj);
    const tmp5 = callback;
  }
  return tmp4;
};
