// Module ID: 15747
// Function ID: 15748
// Name: ThreadLongPressActionSheet
// Dependencies: [19, 2045, 2067, 4851, 4855, 4471, 1074, 21, 9706, 1115, 9707, 9709, 6389, 6531, 9683, 4773, 7184, 9492, 7305, 4795, 4785, 9711, 5409, 9713, 8085, 4775, 10418, 9613, 4800, 9600, 1981, 9067, 10424, 10854, 504, 6687, 12, 7329, 4989, 2021, 10437, 5896, 1177, 6618, 10464, 6620, 10092, 6610, 4527, 2]
// Exports: default

// Module 15747 (ThreadLongPressActionSheet)
import _modDef12 from "module_12" /* 12 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6620 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function ThreadLongPressActionSheetConnected(channel) {
  let ActionSheetRow;
  let Icon;
  let closure_2;
  let constants2;
  let constants3;
  let constants4;
  let hasJoined;
  let intl;
  let intl10;
  let intl12;
  let intl13;
  let intl2;
  let isMuted;
  let items6;
  let items8;
  let obj29;
  let obj31;
  let obj32;
  let tmp18;
  let tmp19;
  channel = channel.channel;
  const onClose = channel.onClose;
  let items5;
  dependencyMap = channel.getGuildId();
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj2 = channel(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { isMuted: JoinedThreadsStore.isMuted(channel.id), hasJoined: JoinedThreadsStore.hasJoined(channel.id) };
    return obj;
  });
  ({ isMuted, hasJoined } = stateFromStoresObject);
  const items2 = [ReadStateStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const obj4 = channel(9709);
  const canMarkChannelUnread = obj4.useCanMarkChannelUnread(channel);
  const obj5 = channel(6687);
  const canManageThread = obj5.useCanManageThread(channel);
  const obj6 = channel(6687);
  const isThreadModerator = obj6.useIsThreadModerator(channel);
  const obj7 = channel(6687);
  const canUnarchiveThread = obj7.useCanUnarchiveThread(channel);
  const obj8 = channel(6687);
  const canJoinThreadVoice = obj8.useCanJoinThreadVoice(channel);
  const items3 = [VoiceStateStore];
  const obj9 = channel(504);
  const stateFromStores2 = obj9.useStateFromStores(items3, () => VoiceStateStore.isInChannel(channel.id));
  const items4 = [VoiceStateStore];
  const obj10 = channel(504);
  const stateFromStores3 = obj10.useStateFromStores(items4, () => {
    const obj = _modDef12;
    return !obj.isEmpty(VoiceStateStore.getVoiceStatesForChannel(channel.id));
  });
  const tmp14 = onClose(7329)(channel);
  const tmp15 = onClose(4989)(channel);
  const DeveloperMode = channel(2021).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  const tmp17 = onClose(10437)(channel, "ThreadLongPressActionSheet");
  if (null != stateFromStores) {
    const obj11 = { guild: stateFromStores, size: tmp(5896).GuildIconSizes.LARGE };
    const tmp13Result = onClose(5896);
    tmp19 = closure_13(tmp13Result, obj11);
    tmp18 = closure_13;
  } else {
    tmp18 = closure_13;
    const obj12 = { size: tmp(1177).AvatarSizes.LARGE, channel };
    const Avatar = tmp(1177).Avatar;
    tmp19 = closure_13(Avatar, obj12);
  }
  const isForumPostResult = channel.isForumPost();
  let tmp23 = null;
  if (canJoinThreadVoice) {
    tmp23 = null;
    if (!stateFromStores2) {
      tmp23 = tmp14;
    }
  }
  const obj13 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(9706).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "thread_action_sheet" }).enabled) {
    if (!stateFromStores1) {
      if (canMarkChannelUnread) {
        let buttons = obj13.buttons;
        const push = buttons.push;
        const obj14 = {
          label: intl.string(tmp(1115).t.RpE9k7),
          IconComponent: tmp(9707).ChatMarkUnreadIcon,
          onPress() {
                  onClose(paths[11])(channel.id);
                }
        };
        intl = tmp(1115).intl;
        push(obj14);
      }
      items5 = [];
      items5.push(obj13);
      const tmp27 = onClose(9683)(tmp17);
      if (null != tmp27) {
        const obj15 = { sectionKey: "favorites", buttons: items6 };
        items6 = [tmp27];
        items5.push(obj15);
      }
      const obj16 = { sectionKey: "channel-actions", buttons: [] };
      const buttons1 = obj16.buttons;
      const push3 = buttons1.push;
      if (hasJoined) {
        let string2Result;
        const intl4 = tmp(1115).intl;
        const string2 = intl4.string;
        const t2 = tmp(1115).t;
        if (isForumPostResult) {
          string2Result = string2(t2["2LsZdT"]);
        } else {
          string2Result = string2(t2["fa/84m"]);
        }
        const obj17 = {
          label: string2Result,
          IconComponent: tmp(4773).UserMinusIcon,
          isDestructive: true,
          onPress() {
                  const obj = onClose(paths[16]);
                  obj.leaveThread(channel, "Context Menu");
                }
        };
        push3(obj17);
      } else {
        let stringResult;
        const intl3 = tmp(1115).intl;
        const string = intl3.string;
        const t = tmp(1115).t;
        if (isForumPostResult) {
          stringResult = string(t.ihLPiO);
        } else {
          stringResult = string(t["10kukS"]);
        }
        const obj18 = {
          label: stringResult,
          IconComponent: tmp(9492).GroupPlusIcon,
          onPress() {
                  const obj = onClose(paths[16]);
                  obj.joinThread(channel, "Context Menu");
                }
        };
        push3(obj18);
      }
      if (null != tmp23) {
        let string3Result;
        const buttons2 = obj16.buttons;
        const push4 = buttons2.push;
        const intl5 = tmp(1115).intl;
        const string3 = intl5.string;
        const t3 = tmp(1115).t;
        if (stateFromStores3) {
          string3Result = string3(t3["0D/6Rz"]);
        } else {
          string3Result = string3(t3.My50nf);
        }
        const obj19 = { label: string3Result, IconComponent: tmp(7305).PhoneCallIcon, onPress: tmp23 };
        push4(obj19);
      }
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (threadMetadata != null) {
        archived = threadMetadata.archived;
      }
      if (archived) {
        if (canUnarchiveThread) {
          let string5Result;
          const buttons3 = obj16.buttons;
          const push6 = buttons3.push;
          const intl7 = tmp(1115).intl;
          const string5 = intl7.string;
          const t5 = tmp(1115).t;
          if (isForumPostResult) {
            string5Result = string5(t5.cnRubV);
          } else {
            string5Result = string5(t5.S9E4G7);
          }
          const obj20 = {
            label: string5Result,
            IconComponent: tmp(4795).ClockIcon,
            onPress() {
                      const obj = onClose(paths[16]);
                      obj.unarchiveThread(channel, false);
                    }
          };
          push6(obj20);
        }
      } else if (canManageThread) {
        let string4Result;
        const buttons4 = obj16.buttons;
        const push5 = buttons4.push;
        const intl6 = tmp(1115).intl;
        const string4 = intl6.string;
        const t4 = tmp(1115).t;
        if (isForumPostResult) {
          string4Result = string4(t4.BTs4Kb);
        } else {
          string4Result = string4(t4.wiIevd);
        }
        const obj21 = {
          label: string4Result,
          IconComponent: tmp(4785).XLargeIcon,
          onPress() {
                  const obj = onClose(paths[16]);
                  obj.archiveThread(channel, false);
                }
        };
        push5(obj21);
      }
      if (isThreadModerator) {
        const buttons5 = obj16.buttons;
        const push7 = buttons5.push;
        const obj22 = { label: null, IconComponent: null, onPress: null };
        const isLockedThreadResult = channel.isLockedThread();
        const intl8 = tmp(1115).intl;
        const string6 = intl8.string;
        const t6 = tmp(1115).t;
        if (isLockedThreadResult) {
          let string6Result;
          if (isForumPostResult) {
            string6Result = string6(t6["/OKSxp"]);
          } else {
            string6Result = string6(t6["jeyb/W"]);
          }
          obj22.label = string6Result;
          obj22.IconComponent = tmp(9711).LockUnlockedIcon;
          obj22.onPress = function onPress() {
            const obj = onClose(paths[16]);
            obj.unlockThread(channel);
          };
          push7(obj22);
        } else {
          let string6Result1;
          if (isForumPostResult) {
            string6Result1 = string6(t6["Ur/0Na"]);
          } else {
            string6Result1 = string6(t6.HoCqm8);
          }
          obj22.label = string6Result1;
          obj22.IconComponent = tmp(5409).LockIcon;
          obj22.onPress = function onPress() {
            const obj = onClose(paths[16]);
            obj.lockThread(channel);
          };
          push7(obj22);
        }
      }
      if (isThreadModerator) {
        let string7Result;
        const buttons6 = obj16.buttons;
        const push8 = buttons6.push;
        const intl9 = tmp(1115).intl;
        const string7 = intl9.string;
        const t7 = tmp(1115).t;
        if (isForumPostResult) {
          string7Result = string7(t7.NP1yHG);
        } else {
          string7Result = string7(t7["2Mk1TP"]);
        }
        const obj23 = {
          label: string7Result,
          IconComponent: tmp(9713).PencilIcon,
          onPress() {
                  const obj = onClose(paths[24]);
                  obj.setSection(constants4.OVERVIEW);
                  const obj2 = onClose(paths[24]);
                  obj2.open(channel.id);
                }
        };
        push8(obj23);
      }
      const buttons7 = obj16.buttons;
      const push9 = buttons7.push;
      const obj24 = {
        label: intl10.string(tmp(1115).t.WqhZss),
        IconComponent: tmp(4775).LinkIcon,
        isDestructive: false,
        onPress() {
              const obj = channel(paths[26]);
              const result = obj.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
            }
      };
      intl10 = tmp(1115).intl;
      push9(obj24);
      items5.push(obj16);
      const obj25 = { sectionKey: "notifications", buttons: [] };
      const buttons8 = obj25.buttons;
      const push10 = buttons8.push;
      const obj26 = { label: null, IconComponent: null, onPress: null };
      const intl11 = tmp(1115).intl;
      const string8 = intl11.string;
      const t8 = tmp(1115).t;
      if (isMuted) {
        let string8Result;
        if (isForumPostResult) {
          string8Result = string8(t8["0JQfsP"]);
        } else {
          string8Result = string8(t8["Cq/TzF"]);
        }
        obj26.label = string8Result;
        obj26.IconComponent = tmp(9067).BellIcon;
        obj26.onPress = function onPress() {
          const obj = onClose(paths[16]);
          const obj2 = { muted: !isMuted };
          const result = obj.setNotificationSettings(channel, obj2);
        };
        push10(obj26);
      } else {
        let string8Result1;
        if (isForumPostResult) {
          string8Result1 = string8(t8["nP+Ykd"]);
        } else {
          string8Result1 = string8(t8.bUUd8q);
        }
        obj26.label = string8Result1;
        obj26.IconComponent = tmp(9613).BellSlashIcon;
        obj26.onPress = function onPress() {
          const openLazy = onClose(paths[28]).openLazy;
          onClose(paths[28]);
          const obj = { guildId: channel.getGuildId(), channelId: channel.id };
          const tmp2 = channel(paths[30])(paths[29], paths.paths);
          const combined = "muteSettings" + channel.id;
          openLazy(tmp2, combined, obj);
        };
        push10(obj26);
      }
      const buttons9 = obj25.buttons;
      const push11 = buttons9.push;
      const obj27 = {
        label: intl12.string(tmp(1115).t.h850Ss),
        IconComponent: tmp(10424).ChannelNotificationIcon,
        onPress() {
              const obj = channel(paths[33]);
              const result = obj.showThreadNotificationsBottomSheet(channel);
            },
        disableColor: true
      };
      intl12 = tmp(1115).intl;
      push11(obj27);
      items5.push(obj25);
      const items7 = [items5.length, setting, onClose];
      const effect = setting.useEffect(() => {
        const tmp = 0 !== items5.length || setting;
        if (!tmp) {
          onClose();
        }
      }, items7);
      const obj28 = { header: tmp18(tmp(10464).ActionSheetIconHeader, obj29), children: items8 };
      const ActionSheet = tmp(6618).ActionSheet;
      obj29 = { title: tmp15, icon: tmp19 };
      items8 = [
        items5.map((buttons) => {
              let obj = {
                hasIcons: true,
                children: buttons.map((onPress, index) => {
                  let IconComponent;
                  let disableColor;
                  let isDestructive;
                  let label;
                  let str;
                  let tmp3;
                  let trailing;
                  onPress = onPress.onPress;
                  ({ label, IconComponent, trailing, isDestructive, disableColor } = onPress);
                  const obj = {
                    label,
                    variant: str,
                    icon: closure_1_13(channel(tmp3[45]).ActionSheetRow.Icon, { IconComponent, disableColor }),
                    trailing,
                    onPress() {
                      onClose();
                      onPress();
                    }
                  };
                  str = "default";
                  const ActionSheetRow = channel(closure_1_2[45]).ActionSheetRow;
                  tmp3 = closure_1_2;
                  if (isDestructive) {
                    str = "danger";
                  }
                  return closure_1_13(ActionSheetRow, obj, index);
                })
              };
              buttons = buttons.buttons;
              const Group = ActionSheetRow2.ActionSheetRow.Group;
              return map1(Group, obj, buttons.sectionKey);
            }),

      ];
      const tmp57 = closure_14;
      if (setting) {
        const obj30 = { hasIcons: true, children: tmp18(ActionSheetRow, obj31) };
        let Group = tmp(6620).ActionSheetRow.Group;
        obj31 = {
          icon: tmp18(Icon, obj32),
          label: intl13.string(tmp(1115).t.DQ797g),
          onPress() {
                  onClose();
                  const obj = ClipboardUtils;
                  obj.copy(channel.id);
                  const obj2 = ToastUtils;
                  obj2.presentIdCopied();
                }
        };
        ActionSheetRow = tmp(6620).ActionSheetRow;
        obj32 = { IconComponent: tmp(10092).IdIcon };
        Icon = tmp(6620).ActionSheetRow.Icon;
        intl13 = tmp(1115).intl;
        let str = "developer-actions";
        setting = tmp18(Group, obj30, "developer-actions");
      }
      items8[1] = setting;
      return tmp57(ActionSheet, obj28);
    }
  }
  const buttons10 = obj13.buttons;
  const push2 = buttons10.push;
  const obj33 = {
    label: intl2.string(tmp(1115).t.e6RscS),
    IconComponent: tmp(6389).EyeIcon,
    onPress() {
      const obj = channel(paths[13]);
      const obj2 = { section: constants3.THREAD_ACTION_SHEET, object: constants2.MARK_THREAD_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
      obj.ack(channel.id, obj2, true, true);
    }
  };
  intl2 = tmp(1115).intl;
  push2(obj33);
}
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId, ChannelSettingsSections: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let result = size.fileFinishedImporting("modules/threads/native/components/ThreadLongPressActionSheet.tsx");

export default function ThreadLongPressActionSheet(arg0) {
  let onClose;
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [stateFromStores, onClose];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, onClose };
    tmp3 = closure_13(ThreadLongPressActionSheetConnected, obj2);
  }
  return tmp3;
};
