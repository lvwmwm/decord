// Module ID: 14852
// Function ID: 111918
// Name: ThreadLongPressActionSheetConnected
// Dependencies: [0, 0, 0, 0, 0, 0, 31, 33, 8835, 14857, 2, 31, 27, 33, 4126, 689, 1273, 12606, 4124, 2, 31, 27, 1917, 33, 4126, 689, 10249, 8823, 566, 14859, 9882, 1212, 11553, 4124, 14863, 2, 31, 1347, 4139, 4145, 1194, 4173, 4141, 4142, 33, 566]
// Exports: default

// Module 14852 (ThreadLongPressActionSheetConnected)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import module_31 from "module_31";
import initialize from "initialize";

function ThreadLongPressActionSheetConnected(channel) {
  let hasJoined;
  let isMuted;
  channel = channel.channel;
  const arg1 = channel;
  const onClose = channel.onClose;
  const importDefault = onClose;
  let closure_4;
  const guildId = channel.getGuildId();
  let obj = arg1(guildId[30]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_2));
  let obj1 = arg1(guildId[30]);
  const items1 = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ isMuted: closure_7.isMuted(channel.id), hasJoined: closure_7.hasJoined(channel.id) }));
  ({ isMuted, hasJoined } = stateFromStoresObject);
  let obj2 = arg1(guildId[31]);
  const canManageThread = obj2.useCanManageThread(channel);
  let obj3 = arg1(guildId[31]);
  const isThreadModerator = obj3.useIsThreadModerator(channel);
  let obj4 = arg1(guildId[31]);
  const canUnarchiveThread = obj4.useCanUnarchiveThread(channel);
  let obj5 = arg1(guildId[31]);
  const canJoinThreadVoice = obj5.useCanJoinThreadVoice(channel);
  let obj6 = arg1(guildId[30]);
  const items2 = [closure_6];
  const stateFromStores1 = obj6.useStateFromStores(items2, () => closure_6.isInChannel(channel.id));
  const items3 = [closure_6];
  const stateFromStores2 = arg1(guildId[30]).useStateFromStores(items3, () => !onClose(closure_2[32]).isEmpty(closure_6.getVoiceStatesForChannel(channel.id)));
  const obj8 = arg1(guildId[30]);
  const tmp9 = importDefault(guildId[33])(channel);
  const DeveloperMode = arg1(guildId[35]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const React = setting;
  const tmp10 = importDefault(guildId[34])(channel, true);
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: arg1(guildId[37]).GuildIconSizes.LARGE };
    let tmp16 = callback(importDefault(guildId[37]), obj);
    const tmp20 = importDefault(guildId[37]);
  } else {
    obj = { size: arg1(guildId[38]).AvatarSizes.LARGE, channel };
    tmp16 = callback(arg1(guildId[38]).Avatar, obj);
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
  obj1.favorites = importDefault(guildId[36])(channel, "ThreadLongPressActionSheet");
  const arr5 = function getActionSheetButtons(channel) {
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
    const onClose = isMuted;
    ({ isForumPost, handleJoinThreadVoice } = channel);
    const items = [];
    let obj = { sectionKey: "mark-as-read" };
    obj = {};
    ({ canManageThread, canUnarchiveThread, hasJoined, hasActiveThreadVoice, favorites } = channel);
    const intl = channel(closure_2[7]).intl;
    obj.label = intl.string(channel(closure_2[7]).t.e6RscS);
    obj.IconComponent = channel(closure_2[8]).EyeIcon;
    obj.onPress = function onPress() {
      let obj = channel(closure_2[9]);
      obj = { section: constants3.THREAD_ACTION_SHEET, object: constants2.MARK_THREAD_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
      obj.ack(channel.id, obj, true, true);
    };
    const items1 = [obj];
    obj.buttons = items1;
    items.push(obj);
    const tmp2 = onClose(closure_2[10])(favorites);
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
      const intl3 = channel(closure_2[7]).intl;
      let string2 = intl3.string;
      let t2 = channel(closure_2[7]).t;
      if (isForumPost) {
        let string2Result = string2(t2.2LsZdT);
      } else {
        string2Result = string2(t2.fa/84m);
      }
      obj2.label = string2Result;
      t2 = channel;
      string2 = closure_2;
      obj2.IconComponent = channel(closure_2[11]).UserMinusIcon;
      obj2.isDestructive = true;
      obj2.onPress = function onPress() {
        isMuted(closure_2[12]).leaveThread(channel, "Context Menu");
      };
      obj2 = push(obj2);
    } else {
      const obj3 = {};
      const intl2 = channel(closure_2[7]).intl;
      const string = intl2.string;
      const t = channel(closure_2[7]).t;
      if (isForumPost) {
        let stringResult = string(t.ihLPiO);
      } else {
        stringResult = string(t.10kukS);
      }
      obj3.label = stringResult;
      obj3.IconComponent = channel(closure_2[13]).GroupPlusIcon;
      obj3.onPress = function onPress() {
        isMuted(closure_2[12]).joinThread(channel, "Context Menu");
      };
      push(obj3);
      if (null == handleJoinThreadVoice) {
        const threadMetadata = channel.threadMetadata;
        if (null != threadMetadata) {
          if (threadMetadata.archived) {
            if (canUnarchiveThread) {
              const buttons1 = obj1.buttons;
              let obj4 = {};
              const intl5 = channel(closure_2[7]).intl;
              let string5 = intl5.string;
              let t5 = channel(closure_2[7]).t;
              if (isForumPost) {
                let string5Result = string5(t5.cnRubV);
              } else {
                string5Result = string5(t5.S9E4G7);
              }
              obj4.label = string5Result;
              t5 = channel;
              string5 = closure_2;
              obj4.IconComponent = channel(closure_2[15]).ClockIcon;
              obj4.onPress = function onPress() {
                isMuted(closure_2[12]).unarchiveThread(channel, false);
              };
              obj4 = buttons1.push(obj4);
            }
          }
          if (canModerateThread) {
            const buttons2 = obj1.buttons;
            const push2 = buttons2.push;
            let obj5 = {};
            const intl6 = channel(closure_2[7]).intl;
            let string6 = intl6.string;
            let t6 = channel(closure_2[7]).t;
            if (isLockedThreadResult) {
              if (isForumPost) {
                let string6Result = string6(t6./OKSxp);
              } else {
                string6Result = string6(t6.jeyb/W);
              }
              obj5.label = string6Result;
              t6 = channel;
              string6 = closure_2;
              obj5.IconComponent = channel(closure_2[17]).LockUnlockedIcon;
              obj5.onPress = function onPress() {
                isMuted(closure_2[12]).unlockThread(channel);
              };
              obj5 = push2(obj5);
            } else {
              if (isForumPost) {
                let string6Result1 = string6(t6.Ur/0Na);
              } else {
                string6Result1 = string6(t6.HoCqm8);
              }
              obj5.label = string6Result1;
              obj5.IconComponent = channel(closure_2[18]).LockIcon;
              obj5.onPress = function onPress() {
                isMuted(closure_2[12]).lockThread(channel);
              };
              push2(obj5);
            }
            const isLockedThreadResult = channel.isLockedThread();
          }
          if (!canModerateThread) {
            const buttons3 = obj1.buttons;
            const obj6 = {};
            const intl8 = channel(closure_2[7]).intl;
            obj6.label = intl8.string(channel(closure_2[7]).t.WqhZss);
            obj6.IconComponent = channel(closure_2[21]).LinkIcon;
            obj6.isDestructive = false;
            obj6.onPress = function onPress() {
              const result = channel(closure_2[22]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            };
            buttons3.push(obj6);
            items.push(obj1);
            const obj7 = { sectionKey: "notifications", buttons: [] };
            const buttons4 = obj7.buttons;
            const push3 = buttons4.push;
            let obj8 = {};
            const intl9 = channel(closure_2[7]).intl;
            let string8 = intl9.string;
            let t8 = channel(closure_2[7]).t;
            if (isMuted) {
              if (isForumPost) {
                let string8Result = string8(t8.0JQfsP);
              } else {
                string8Result = string8(t8.Cq/TzF);
              }
              obj8.label = string8Result;
              t8 = channel;
              string8 = closure_2;
              obj8.IconComponent = channel(closure_2[27]).BellIcon;
              obj8.onPress = function onPress() {
                let obj = isMuted(closure_2[12]);
                obj = { muted: !isMuted };
                const result = obj.setNotificationSettings(channel, obj);
              };
              obj8 = push3(obj8);
            } else {
              if (isForumPost) {
                let string8Result1 = string8(t8.nP+Ykd);
              } else {
                string8Result1 = string8(t8.bUUd8q);
              }
              obj8.label = string8Result1;
              obj8.IconComponent = channel(closure_2[23]).BellSlashIcon;
              obj8.onPress = function onPress() {
                let obj = isMuted(paths[24]);
                obj = {};
                const combined = "muteSettings" + channel.id;
                obj.guildId = channel.getGuildId();
                obj.channelId = channel.id;
                obj.openLazy(channel(paths[26])(paths[25], paths.paths), combined, obj);
              };
              push3(obj8);
              const buttons5 = obj7.buttons;
              const obj9 = {};
              const intl10 = channel(closure_2[7]).intl;
              obj9.label = intl10.string(channel(closure_2[7]).t.h850Ss);
              obj9.IconComponent = channel(closure_2[28]).ChannelNotificationIcon;
              obj9.onPress = function onPress() {
                const result = channel(closure_2[29]).showThreadNotificationsBottomSheet(channel);
              };
              obj9.disableColor = true;
              buttons5.push(obj9);
              items.push(obj7);
              return items;
            }
          } else {
            const buttons6 = obj1.buttons;
            let obj10 = {};
            const intl7 = channel(closure_2[7]).intl;
            let string7 = intl7.string;
            let t7 = channel(closure_2[7]).t;
            if (isForumPost) {
              let string7Result = string7(t7.NP1yHG);
            } else {
              string7Result = string7(t7.2Mk1TP);
            }
            obj10.label = string7Result;
            t7 = channel;
            string7 = closure_2;
            obj10.IconComponent = channel(closure_2[19]).PencilIcon;
            obj10.onPress = function onPress() {
              isMuted(closure_2[20]).setSection(constants4.OVERVIEW);
              const obj = isMuted(closure_2[20]);
              isMuted(closure_2[20]).open(channel.id);
            };
            obj10 = buttons6.push(obj10);
          }
        }
        if (canManageThread) {
          const buttons7 = obj1.buttons;
          const obj11 = {};
          const intl4 = channel(closure_2[7]).intl;
          const string4 = intl4.string;
          const t4 = channel(closure_2[7]).t;
          if (isForumPost) {
            let string4Result = string4(t4.BTs4Kb);
          } else {
            string4Result = string4(t4.wiIevd);
          }
          obj11.label = string4Result;
          obj11.IconComponent = channel(closure_2[16]).XLargeIcon;
          obj11.onPress = function onPress() {
            isMuted(closure_2[12]).archiveThread(channel, false);
          };
          buttons7.push(obj11);
        }
      } else {
        const buttons8 = obj1.buttons;
        let obj12 = {};
        const intl11 = channel(closure_2[7]).intl;
        let string3 = intl11.string;
        let t3 = channel(closure_2[7]).t;
        if (hasActiveThreadVoice) {
          let string3Result = string3(t3.0D/6Rz);
        } else {
          string3Result = string3(t3.My50nf);
        }
        obj12.label = string3Result;
        t3 = channel;
        string3 = closure_2;
        obj12.IconComponent = channel(closure_2[14]).PhoneCallIcon;
        obj12.onPress = handleJoinThreadVoice;
        obj12 = buttons8.push(obj12);
      }
    }
  }(obj1);
  closure_4 = arr5;
  const items4 = [arr5.length, setting, onClose];
  const effect = React.useEffect(() => {
    if (!tmp) {
      onClose();
    }
  }, items4);
  obj2 = {};
  obj3 = { title: tmp10, icon: tmp16 };
  obj2.header = callback(arg1(guildId[40]).ActionSheetIconHeader, obj3);
  const items5 = [
    arr5.map((buttons) => {
      const obj = { hasIcons: true };
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
        obj.icon = callback(onPress(closure_2[41]).ActionSheetRow.Icon, { IconComponent, disableColor });
        obj.trailing = trailing;
        obj.onPress = function onPress() {
          callback();
          onPress();
        };
        return callback(onPress(closure_2[41]).ActionSheetRow, obj, arg1);
      });
      return callback(channel(closure_2[41]).ActionSheetRow.Group, obj, buttons.sectionKey);
    }),

  ];
  if (setting) {
    obj4 = { hasIcons: true };
    obj5 = {};
    obj6 = { IconComponent: arg1(guildId[42]).IdIcon };
    obj5.icon = callback(arg1(guildId[41]).ActionSheetRow.Icon, obj6);
    const intl = arg1(guildId[7]).intl;
    obj5.label = intl.string(arg1(guildId[7]).t.DQ797g);
    obj5.onPress = function onPress() {
      onClose();
      channel(closure_2[43]).copy(channel.id);
      const obj = channel(closure_2[43]);
      channel(closure_2[44]).presentIdCopied();
    };
    obj4.children = callback(arg1(guildId[41]).ActionSheetRow, obj5);
    setting = callback(arg1(guildId[41]).ActionSheetRow.Group, obj4, "developer-actions");
  }
  items5[1] = setting;
  obj2.children = items5;
  return closure_13(arg1(guildId[39]).ActionSheet, obj2);
}
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, ChannelSettingsSections: closure_11 } = require("__exportStarResult1"));
({ jsx: closure_12, jsxs: closure_13 } = module_31);
const result = initialize.fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default function ThreadLongPressActionSheet(arg0) {
  let onClose;
  ({ channelId: closure_0, onClose } = arg0);
  const importDefault = onClose;
  let obj = arg1(dependencyMap[30]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  const dependencyMap = stateFromStores;
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
