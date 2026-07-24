// Module ID: 15015
// Function ID: 114407
// Name: ThreadLongPressActionSheetConnected
// Dependencies: [31, 1348, 1838, 4146, 3760, 653, 33, 1212, 8777, 5069, 10218, 4072, 7006, 10225, 9123, 4094, 4084, 10371, 4652, 9142, 7685, 4074, 10229, 10232, 4098, 10310, 1934, 10234, 10235, 10375, 566, 5650, 22, 9180, 4320, 3803, 10377, 5513, 1273, 5498, 10378, 5500, 7609, 5490, 3830, 2]
// Exports: default

// Module 15015 (ThreadLongPressActionSheetConnected)
import useCanStartPublicThread from "useCanStartPublicThread";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "useHandleJoinThreadVoice";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
function ThreadLongPressActionSheetConnected(channel) {
  let hasJoined;
  let isMuted;
  channel = channel.channel;
  const onClose = channel.onClose;
  let arr5;
  const dependencyMap = channel.getGuildId();
  let obj = channel(566);
  let items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(closure_2));
  let obj1 = channel(566);
  let items1 = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMuted: outer1_7.isMuted(channel.id), hasJoined: outer1_7.hasJoined(channel.id) }));
  ({ isMuted, hasJoined } = stateFromStoresObject);
  let obj2 = channel(5650);
  const canManageThread = obj2.useCanManageThread(channel);
  let obj3 = channel(5650);
  const isThreadModerator = obj3.useIsThreadModerator(channel);
  let obj4 = channel(5650);
  const canUnarchiveThread = obj4.useCanUnarchiveThread(channel);
  let obj5 = channel(5650);
  const canJoinThreadVoice = obj5.useCanJoinThreadVoice(channel);
  let obj6 = channel(566);
  let items2 = [closure_6];
  const stateFromStores1 = obj6.useStateFromStores(items2, () => outer1_6.isInChannel(channel.id));
  const items3 = [closure_6];
  const stateFromStores2 = channel(566).useStateFromStores(items3, () => !onClose(22).isEmpty(outer1_6.getVoiceStatesForChannel(channel.id)));
  let obj8 = channel(566);
  const tmp9 = onClose(9180)(channel);
  const DeveloperMode = channel(3803).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp10 = onClose(4320)(channel, true);
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: channel(5513).GuildIconSizes.LARGE };
    let tmp16 = callback(onClose(5513), obj);
    const tmp20 = onClose(5513);
  } else {
    obj = { size: channel(1273).AvatarSizes.LARGE, channel };
    tmp16 = callback(channel(1273).Avatar, obj);
  }
  obj1 = { channel, guild: stateFromStores, canManageThread, canModerateThread: isThreadModerator, canUnarchiveThread, isMuted, hasJoined, isForumPost: channel.isForumPost() };
  let tmp22 = null;
  if (canJoinThreadVoice) {
    tmp22 = null;
    if (!stateFromStores1) {
      tmp22 = tmp9;
    }
  }
  obj1.handleJoinThreadVoice = tmp22;
  obj1.hasActiveThreadVoice = stateFromStores2;
  obj1.favorites = onClose(10377)(channel, "ThreadLongPressActionSheet");
  arr5 = (function getActionSheetButtons(channel) {
    let canManageThread;
    let canModerateThread;
    let canUnarchiveThread;
    let favorites;
    let handleJoinThreadVoice;
    let hasActiveThreadVoice;
    let hasJoined;
    let isForumPost;
    let isMuted;
    channel = channel.channel;
    ({ canModerateThread, isMuted } = channel);
    ({ isForumPost, handleJoinThreadVoice } = channel);
    const items = [];
    let obj = { sectionKey: "mark-as-read" };
    obj = {};
    ({ canManageThread, canUnarchiveThread, hasJoined, hasActiveThreadVoice, favorites } = channel);
    const intl = channel(1212).intl;
    obj.label = intl.string(channel(1212).t.e6RscS);
    obj.IconComponent = channel(8777).EyeIcon;
    obj.onPress = function onPress() {
      let obj = channel(paths[9]);
      obj = { section: outer2_10.THREAD_ACTION_SHEET, object: outer2_9.MARK_THREAD_AS_READ_BUTTON, objectType: outer2_8.ACK_MANUAL };
      obj.ack(channel.id, obj, true, true);
    };
    const items1 = [obj];
    obj.buttons = items1;
    items.push(obj);
    const tmp2 = onClose(10218)(favorites);
    if (null != tmp2) {
      obj = { sectionKey: "favorites" };
      const items2 = [tmp2];
      obj.buttons = items2;
      items.push(obj);
    }
    const obj1 = { sectionKey: "channel-actions", buttons: [] };
    const buttons = obj1.buttons;
    const push = buttons.push;
    if (hasJoined) {
      let obj2 = {};
      const intl3 = channel(1212).intl;
      let string2 = intl3.string;
      let t2 = channel(1212).t;
      if (isForumPost) {
        let string2Result = string2(t2["2LsZdT"]);
      } else {
        string2Result = string2(t2["fa/84m"]);
      }
      obj2.label = string2Result;
      t2 = channel;
      string2 = dependencyMap;
      obj2.IconComponent = channel(4072).UserMinusIcon;
      obj2.isDestructive = true;
      obj2.onPress = function onPress() {
        onClose(paths[12]).leaveThread(channel, "Context Menu");
      };
      obj2 = push(obj2);
    } else {
      const obj3 = {};
      const intl2 = channel(1212).intl;
      const string = intl2.string;
      const t = channel(1212).t;
      if (isForumPost) {
        let stringResult = string(t.ihLPiO);
      } else {
        stringResult = string(t["10kukS"]);
      }
      obj3.label = stringResult;
      obj3.IconComponent = channel(10225).GroupPlusIcon;
      obj3.onPress = function onPress() {
        onClose(paths[12]).joinThread(channel, "Context Menu");
      };
      push(obj3);
      if (null == handleJoinThreadVoice) {
        const threadMetadata = channel.threadMetadata;
        if (null != threadMetadata) {
          if (threadMetadata.archived) {
            if (canUnarchiveThread) {
              const buttons1 = obj1.buttons;
              let obj4 = {};
              const intl5 = channel(1212).intl;
              let string5 = intl5.string;
              let t5 = channel(1212).t;
              if (isForumPost) {
                let string5Result = string5(t5.cnRubV);
              } else {
                string5Result = string5(t5.S9E4G7);
              }
              obj4.label = string5Result;
              t5 = channel;
              string5 = dependencyMap;
              obj4.IconComponent = channel(4094).ClockIcon;
              obj4.onPress = function onPress() {
                onClose(paths[12]).unarchiveThread(channel, false);
              };
              obj4 = buttons1.push(obj4);
            }
          }
          if (canModerateThread) {
            const buttons2 = obj1.buttons;
            const push2 = buttons2.push;
            let obj5 = {};
            const intl6 = channel(1212).intl;
            let string6 = intl6.string;
            let t6 = channel(1212).t;
            if (isLockedThreadResult) {
              if (isForumPost) {
                let string6Result = string6(t6["/OKSxp"]);
              } else {
                string6Result = string6(t6["jeyb/W"]);
              }
              obj5.label = string6Result;
              t6 = channel;
              string6 = dependencyMap;
              obj5.IconComponent = channel(10371).LockUnlockedIcon;
              obj5.onPress = function onPress() {
                onClose(paths[12]).unlockThread(channel);
              };
              obj5 = push2(obj5);
            } else {
              if (isForumPost) {
                let string6Result1 = string6(t6["Ur/0Na"]);
              } else {
                string6Result1 = string6(t6.HoCqm8);
              }
              obj5.label = string6Result1;
              obj5.IconComponent = channel(4652).LockIcon;
              obj5.onPress = function onPress() {
                onClose(paths[12]).lockThread(channel);
              };
              push2(obj5);
            }
            isLockedThreadResult = channel.isLockedThread();
          }
          if (!canModerateThread) {
            const buttons3 = obj1.buttons;
            const obj6 = {};
            const intl8 = channel(1212).intl;
            obj6.label = intl8.string(channel(1212).t.WqhZss);
            obj6.IconComponent = channel(4074).LinkIcon;
            obj6.isDestructive = false;
            obj6.onPress = function onPress() {
              const result = channel(paths[22]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            };
            buttons3.push(obj6);
            items.push(obj1);
            const obj7 = { sectionKey: "notifications", buttons: [] };
            const buttons4 = obj7.buttons;
            const push3 = buttons4.push;
            let obj8 = {};
            const intl9 = channel(1212).intl;
            let string8 = intl9.string;
            let t8 = channel(1212).t;
            if (isMuted) {
              if (isForumPost) {
                let string8Result = string8(t8["0JQfsP"]);
              } else {
                string8Result = string8(t8["Cq/TzF"]);
              }
              obj8.label = string8Result;
              t8 = channel;
              string8 = dependencyMap;
              obj8.IconComponent = channel(10234).BellIcon;
              obj8.onPress = function onPress() {
                let obj = onClose(paths[12]);
                obj = { muted: !isMuted };
                const result = obj.setNotificationSettings(channel, obj);
              };
              obj8 = push3(obj8);
            } else {
              if (isForumPost) {
                let string8Result1 = string8(t8["nP+Ykd"]);
              } else {
                string8Result1 = string8(t8.bUUd8q);
              }
              obj8.label = string8Result1;
              obj8.IconComponent = channel(10232).BellSlashIcon;
              obj8.onPress = function onPress() {
                let obj = onClose(paths[24]);
                obj = {};
                const combined = "muteSettings" + channel.id;
                obj.guildId = channel.getGuildId();
                obj.channelId = channel.id;
                obj.openLazy(channel(paths[26])(paths[25], paths.paths), combined, obj);
              };
              push3(obj8);
              const buttons5 = obj7.buttons;
              const obj9 = {};
              const intl10 = channel(1212).intl;
              obj9.label = intl10.string(channel(1212).t.h850Ss);
              obj9.IconComponent = channel(10235).ChannelNotificationIcon;
              obj9.onPress = function onPress() {
                const result = channel(paths[29]).showThreadNotificationsBottomSheet(channel);
              };
              obj9.disableColor = true;
              buttons5.push(obj9);
              items.push(obj7);
              return items;
            }
          } else {
            const buttons6 = obj1.buttons;
            let obj10 = {};
            const intl7 = channel(1212).intl;
            let string7 = intl7.string;
            let t7 = channel(1212).t;
            if (isForumPost) {
              let string7Result = string7(t7.NP1yHG);
            } else {
              string7Result = string7(t7["2Mk1TP"]);
            }
            obj10.label = string7Result;
            t7 = channel;
            string7 = dependencyMap;
            obj10.IconComponent = channel(9142).PencilIcon;
            obj10.onPress = function onPress() {
              onClose(paths[20]).setSection(outer2_11.OVERVIEW);
              const obj = onClose(paths[20]);
              onClose(paths[20]).open(channel.id);
            };
            obj10 = buttons6.push(obj10);
          }
        }
        if (canManageThread) {
          const buttons7 = obj1.buttons;
          const obj11 = {};
          const intl4 = channel(1212).intl;
          const string4 = intl4.string;
          const t4 = channel(1212).t;
          if (isForumPost) {
            let string4Result = string4(t4.BTs4Kb);
          } else {
            string4Result = string4(t4.wiIevd);
          }
          obj11.label = string4Result;
          obj11.IconComponent = channel(4084).XLargeIcon;
          obj11.onPress = function onPress() {
            onClose(paths[12]).archiveThread(channel, false);
          };
          buttons7.push(obj11);
        }
      } else {
        const buttons8 = obj1.buttons;
        let obj12 = {};
        const intl11 = channel(1212).intl;
        let string3 = intl11.string;
        let t3 = channel(1212).t;
        if (hasActiveThreadVoice) {
          let string3Result = string3(t3["0D/6Rz"]);
        } else {
          string3Result = string3(t3.My50nf);
        }
        obj12.label = string3Result;
        t3 = channel;
        string3 = dependencyMap;
        obj12.IconComponent = channel(9123).PhoneCallIcon;
        obj12.onPress = handleJoinThreadVoice;
        obj12 = buttons8.push(obj12);
      }
    }
  })(obj1);
  const items4 = [arr5.length, setting, onClose];
  const effect = setting.useEffect(() => {
    if (!tmp) {
      onClose();
    }
  }, items4);
  obj2 = {};
  obj3 = { title: tmp10, icon: tmp16 };
  obj2.header = callback(channel(10378).ActionSheetIconHeader, obj3);
  const items5 = [
    arr5.map((buttons) => {
      let obj = { hasIcons: true };
      buttons = buttons.buttons;
      obj.children = buttons.map((onPress) => {
        let IconComponent;
        let disableColor;
        let isDestructive;
        let label;
        let trailing;
        onPress = onPress.onPress;
        ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
        const obj = { label };
        let str = "default";
        if (isDestructive) {
          str = "danger";
        }
        obj.variant = str;
        obj.icon = outer2_12(channel(5500).ActionSheetRow.Icon, { IconComponent, disableColor });
        obj.trailing = trailing;
        obj.onPress = function onPress() {
          outer2_1();
          onPress();
        };
        return outer2_12(channel(5500).ActionSheetRow, obj, arg1);
      });
      return outer1_12(channel(5500).ActionSheetRow.Group, obj, buttons.sectionKey);
    }),

  ];
  if (setting) {
    obj4 = { hasIcons: true };
    obj5 = {};
    obj6 = { IconComponent: channel(7609).IdIcon };
    obj5.icon = callback(channel(5500).ActionSheetRow.Icon, obj6);
    let intl = channel(1212).intl;
    obj5.label = intl.string(channel(1212).t.DQ797g);
    obj5.onPress = function onPress() {
      onClose();
      channel(5490).copy(channel.id);
      const obj = channel(5490);
      channel(3830).presentIdCopied();
    };
    obj4.children = callback(channel(5500).ActionSheetRow, obj5);
    setting = callback(channel(5500).ActionSheetRow.Group, obj4, "developer-actions");
  }
  items5[1] = setting;
  obj2.children = items5;
  return closure_13(channel(5498).ActionSheet, obj2);
}
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, ChannelSettingsSections: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default function ThreadLongPressActionSheet(arg0) {
  let onClose;
  let require;
  ({ channelId: require, onClose } = arg0);
  let obj = require(stateFromStores[30]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(closure_0));
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, onClose };
    tmp3 = callback(ThreadLongPressActionSheetConnected, obj);
  }
  return tmp3;
};
