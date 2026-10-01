// Module ID: 9682
// Function ID: 9683
// Name: LongPressForumPostActionSheet
// Dependencies: [19, 4470, 4471, 6724, 502, 2067, 4851, 1074, 2052, 21, 9683, 9706, 1115, 9707, 9709, 6389, 6531, 4773, 7184, 9067, 4795, 4785, 9711, 5409, 9713, 9714, 11, 6603, 6798, 8085, 10820, 4800, 10818, 1981, 4775, 10822, 9613, 9600, 10424, 10854, 10416, 5203, 4790, 6876, 1177, 10092, 6610, 4527, 504, 6722, 6687, 7310, 2021, 4989, 10437, 5896, 6618, 1610, 10464, 6620, 2]
// Exports: default

// Module 9682 (LongPressForumPostActionSheet)
import Fragment from "Fragment" /* 21 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6620 */;
import buildFavoritesSectionButtonsDefault from "buildFavoritesSectionButtons" /* 9683 */;
import useFavoritesGuildChannelActionsDefault from "useFavoritesGuildChannelActions" /* 10437 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6724 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2067 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let c9;
let closure_12;
let unpackModuleId;
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId, ChannelSettingsSections: closure_12 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default function ForumPostLongPressActionSheet(thread) {
  let archived;
  let closure_2;
  let constants2;
  let constants3;
  let constants4;
  let intl;
  let intl10;
  let intl12;
  let intl15;
  let intl2;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items8;
  let items9;
  let locked;
  let obj37;
  let parentChannel;
  let tmp20;
  let tmp21;
  let tmpResult;
  thread = thread.thread;
  ({ parentChannel, onClose: importDefault } = thread);
  dependencyMap = thread.getGuildId();
  const tmp = thread;
  let tmp2 = dependencyMap;
  let obj = thread(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_2));
  let obj2 = thread(504);
  const items1 = [JoinedThreadsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(thread.id));
  let obj3 = thread(504);
  const items2 = [JoinedThreadsStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => JoinedThreadsStore.isMuted(thread.id));
  const items3 = [ReadStateStore];
  const obj4 = thread(504);
  const stateFromStores3 = obj4.useStateFromStores(items3, () => ReadStateStore.hasUnreadOrMentions(thread.id));
  const obj5 = thread(9709);
  const canMarkChannelUnread = obj5.useCanMarkChannelUnread(thread);
  const items4 = [LurkingStore];
  const obj6 = thread(504);
  const stateFromStores4 = obj6.useStateFromStores(items4, () => {
    const isLurkingResult = null != closure_2 && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  });
  const obj7 = thread(6722);
  const firstMessage = obj7.useFirstForumPostMessage(thread).firstMessage;
  const obj8 = thread(6687);
  const isThreadModerator = obj8.useIsThreadModerator(parentChannel);
  const obj9 = thread(6687);
  const canManageThread = obj9.useCanManageThread(thread);
  const obj10 = thread(6687);
  const canUnarchiveThread = obj10.useCanUnarchiveThread(thread);
  const obj11 = thread(7310);
  const existingPin = obj11.useExistingPin(thread);
  const items5 = [ThreadMessageStore];
  const obj12 = thread(504);
  const stateFromStores5 = obj12.useStateFromStores(items5, () => {
    let num = ThreadMessageStore.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const DeveloperMode = thread(2021).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const items6 = [AuthenticationStore];
  let id;
  const obj13 = thread(504);
  const stateFromStores6 = obj13.useStateFromStores(items6, () => id.getId());
  if (firstMessage != null) {
    id = firstMessage.author.id;
  }
  const tmp18 = useChannelNameDefault(thread);
  const tmp19 = useFavoritesGuildChannelActionsDefault(thread, "ForumPostLongPressActionSheet");
  if (null != stateFromStores) {
    GuildIconDefault;
    tmp21 = <tmp17Result guild={stateFromStores} size={tmp(5896).GuildIconSizes.LARGE} />;
    tmp20 = jsx;
  } else {
    tmp20 = jsx;
    const Avatar = tmp(1177).Avatar;
    tmp21 = <Avatar size={tmp(1177).AvatarSizes.LARGE} channel={thread} />;
  }
  let tmp24 = stateFromStores6 === id;
  let closure_3 = tmp24;
  const threadMetadata = thread.threadMetadata;
  if (threadMetadata != null) {
    archived = threadMetadata.archived;
  }
  const threadMetadata2 = thread.threadMetadata;
  if (threadMetadata2 != null) {
    locked = threadMetadata2.locked;
  }
  const items7 = [];
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  const tmp26 = buildFavoritesSectionButtonsDefault(tmp19);
  if (null != tmp26) {
    const obj16 = { sectionKey: "favorites", buttons: items8 };
    items8 = [tmp26];
    items7.push(obj16);
  }
  const obj17 = { sectionKey: "mark-as-read", buttons: [] };
  const MarkChannelUnreadExperiment = tmp(9706).MarkChannelUnreadExperiment;
  if (MarkChannelUnreadExperiment.getConfig({ location: "forum_post_action_sheet" }).enabled) {
    if (!stateFromStores3) {
      if (canMarkChannelUnread) {
        let buttons = obj17.buttons;
        const push = buttons.push;
        const obj18 = {
          label: intl.string(tmp(1115).t.RpE9k7),
          IconComponent: tmp(9707).ChatMarkUnreadIcon,
          onPress() {
                  require("markChannelUnread")(thread.id);
                }
        };
        intl = tmp(1115).intl;
        push(obj18);
      }
      items7.push(obj17);
      const obj19 = { sectionKey: "channel-actions", buttons: [] };
      if (!stateFromStores4) {
        const buttons1 = obj19.buttons;
        const push3 = buttons1.push;
        const obj20 = { label: null, IconComponent: null, onPress: null };
        let intl3 = tmp(1115).intl;
        const string = intl3.string;
        const t = tmp(1115).t;
        if (stateFromStores1) {
          obj20.label = string(t["2LsZdT"]);
          obj20.IconComponent = tmp(4773).UserMinusIcon;
          obj20.onPress = function onPress() {
            const obj = require("ThreadActionCreators");
            return obj.leaveThread(thread, "Context Menu");
          };
          push3(obj20);
        } else {
          obj20.label = string(t.ihLPiO);
          obj20.IconComponent = tmp(9067).BellIcon;
          obj20.onPress = function onPress() {
            const obj = require("ThreadActionCreators");
            return obj.joinThread(thread, "Context Menu");
          };
          push3(obj20);
        }
      }
      if (archived) {
        if (canUnarchiveThread) {
          const buttons2 = obj19.buttons;
          const push5 = buttons2.push;
          const obj21 = {
            label: intl5.string(tmp(1115).t.cnRubV),
            IconComponent: tmp(4795).ClockIcon,
            onPress() {
                      const obj = require("ThreadActionCreators");
                      obj.unarchiveThread(thread, false);
                    }
          };
          intl5 = tmp(1115).intl;
          push5(obj21);
        }
      } else if (canManageThread) {
        const buttons3 = obj19.buttons;
        const push4 = buttons3.push;
        const obj22 = {
          label: intl4.string(tmp(1115).t.BTs4Kb),
          IconComponent: tmp(4785).XLargeIcon,
          onPress() {
                  const obj = require("ThreadActionCreators");
                  obj.archiveThread(thread, false);
                }
        };
        intl4 = tmp(1115).intl;
        push4(obj22);
      }
      if (canManageThread) {
        const buttons4 = obj19.buttons;
        const push6 = buttons4.push;
        const obj23 = { label: null, IconComponent: null, onPress: null };
        let intl6 = tmp(1115).intl;
        const string2 = intl6.string;
        const t2 = tmp(1115).t;
        if (locked) {
          obj23.label = string2(t2["/OKSxp"]);
          obj23.IconComponent = tmp(9711).LockUnlockedIcon;
          obj23.onPress = function onPress() {
            const obj = require("ThreadActionCreators");
            obj.unlockThread(thread);
          };
          push6(obj23);
        } else {
          obj23.label = string2(t2["Ur/0Na"]);
          obj23.IconComponent = tmp(5409).LockIcon;
          obj23.onPress = function onPress() {
            const obj = require("ThreadActionCreators");
            obj.lockThread(thread);
          };
          push6(obj23);
        }
      }
      const tmp38 = tmp24 && !(!isThreadModerator && thread.isLockedThread());
      if (tmp38) {
        const buttons5 = obj19.buttons;
        const push7 = buttons5.push;
        const obj24 = {
          label: intl7.string(tmp(1115).t.NP1yHG),
          IconComponent: tmp(9713).PencilIcon,
          onPress() {
                  let items;
                  let obj2;
                  let obj3;
                  const obj = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: obj2.castChannelIdAsMessageId(thread.id), isEdit: true, analyticsLocations: items, analyticsLocationObject: obj3 };
                  const openCreateForumPostModal = thread(isThreadModerator[25]).openCreateForumPostModal;
                  thread(isThreadModerator[25]);
                  obj2 = require("SnowflakeUtils");
                  items = [require("AnalyticsLocation").FORUM_CHANNEL, require("AnalyticsLocation").GUILD_CHANNEL];
                  obj3 = { section: constants3.CHANNEL_LIST, object: constants2.CONTEXT_MENU };
                  const result = openCreateForumPostModal(obj);
                }
        };
        intl7 = tmp(1115).intl;
        push7(obj24);
      }
      if (canManageThread) {
        const buttons6 = obj19.buttons;
        const push8 = buttons6.push;
        const obj25 = {
          label: intl8.string(tmp(1115).t.SGuVbR),
          IconComponent: tmp(6798).SettingsIcon,
          onPress() {
                  const obj = require("ChannelSettingsActionCreators");
                  obj.setSection(constants4.OVERVIEW);
                  const obj2 = require("ChannelSettingsActionCreators");
                  obj2.open(thread.id);
                }
        };
        intl8 = tmp(1115).intl;
        push8(obj25);
        let num = 0;
        if (parentChannel.availableTags.length > 0) {
          const buttons7 = obj19.buttons;
          const push9 = buttons7.push;
          const obj26 = {
            label: intl9.string(tmp(1115).t["436ZFw"]),
            IconComponent: tmp(10820).TagsIcon,
            onPress() {
                      const obj = require("ActionSheetActionCreators");
                      const obj2 = { thread, parentChannel, canManageThread };
                      obj.openLazy(thread(isThreadModerator[33])(isThreadModerator[32], isThreadModerator.paths), "ForumPostTagsActionSheet", obj2);
                    }
          };
          intl9 = tmp(1115).intl;
          push9(obj26);
        }
      }
      const buttons8 = obj19.buttons;
      const push10 = buttons8.push;
      const obj27 = {
        label: intl10.string(tmp(1115).t.WqhZss),
        IconComponent: tmp(4775).LinkIcon,
        onPress() {
              const obj = thread(isThreadModerator[35]);
              const obj2 = { section: constants3.CONTEXT_MENU };
              const result = obj.handleCopyLinkForumPost(thread.guild_id, thread.id, obj2);
            }
      };
      intl10 = tmp(1115).intl;
      push10(obj27);
      items7.push(obj19);
      if (!stateFromStores4) {
        const obj28 = { sectionKey: "notifications", buttons: [] };
        const buttons9 = obj28.buttons;
        const push11 = buttons9.push;
        const obj29 = { label: null, IconComponent: null, onPress: null };
        const intl11 = tmp(1115).intl;
        const string3 = intl11.string;
        const t3 = tmp(1115).t;
        if (stateFromStores2) {
          obj29.label = string3(t3["0JQfsP"]);
          obj29.IconComponent = tmp(9067).BellIcon;
          obj29.onPress = function onPress() {
            const obj = require("ThreadActionCreators");
            const obj2 = { muted: !stateFromStores2 };
            return obj.setNotificationSettings(thread, obj2);
          };
          push11(obj29);
        } else {
          obj29.label = string3(t3["nP+Ykd"]);
          obj29.IconComponent = tmp(9613).BellSlashIcon;
          obj29.onPress = function onPress() {
            const openLazy = require("ActionSheetActionCreators").openLazy;
            require("ActionSheetActionCreators");
            const obj = { guildId: thread.getGuildId(), channelId: thread.id };
            const tmp2 = thread(isThreadModerator[33])(isThreadModerator[37], isThreadModerator.paths);
            const combined = "muteSettings" + thread.id;
            openLazy(tmp2, combined, obj);
          };
          push11(obj29);
        }
        const buttons10 = obj28.buttons;
        const push12 = buttons10.push;
        const obj30 = {
          label: intl12.string(tmp(1115).t.HcoRu0),
          IconComponent: tmp(10424).ChannelNotificationIcon,
          onPress() {
                  const obj = thread(isThreadModerator[39]);
                  return obj.showThreadNotificationsBottomSheet(thread);
                },
          disableColor: true
        };
        intl12 = tmp(1115).intl;
        push12(obj30);
        items7.push(obj28);
      }
      const obj31 = { sectionKey: "admin-actions", buttons: [] };
      if (isThreadModerator) {
        const buttons11 = obj31.buttons;
        const push13 = buttons11.push;
        const obj32 = { label: null, IconComponent: null, onPress: null };
        const intl13 = tmp(1115).intl;
        const string4 = intl13.string;
        const t4 = tmp(1115).t;
        if (hasFlagResult) {
          obj32.label = string4(t4.trD8ao);
          obj32.IconComponent = tmp(10416).PinIcon;
          obj32.onPress = function onPress() {
            const obj = require("ThreadActionCreators");
            return obj.unpin(thread);
          };
          push13(obj32);
        } else {
          obj32.label = string4(t4.EnaWhu);
          obj32.IconComponent = tmp(10416).PinIcon;
          obj32.onPress = function onPress() {
            let intl;
            let intl2;
            let intl3;
            let intl4;
            if (null != existingPin) {
              const obj2 = {
                title: intl.string(thread(isThreadModerator[12]).t.IMbjxo),
                body: intl2.string(thread(isThreadModerator[12]).t["mi5+Vl"]),
                cancelText: intl3.string(thread(isThreadModerator[12]).t.gm1Vej),
                confirmText: intl4.string(thread(isThreadModerator[12]).t.p89ACt),
                onConfirm() {
                    const obj = stateFromStores2(isThreadModerator[18]);
                    obj.replacePin(existingPin, thread);
                  }
              };
              const show = require("AlertActionCreators").show;
              require("AlertActionCreators");
              intl = thread(isThreadModerator[12]).intl;
              intl2 = thread(isThreadModerator[12]).intl;
              intl3 = thread(isThreadModerator[12]).intl;
              intl4 = thread(isThreadModerator[12]).intl;
              show(obj2);
            } else {
              let obj = require("ThreadActionCreators");
              obj.pin(thread);
            }
          };
          push13(obj32);
        }
      }
      if (isThreadModerator) {
        let string5Result;
        if (tmp24) {
          tmp24 = !isThreadModerator;
        }
        if (tmp24) {
          tmp24 = stateFromStores5 > 0;
        }
        let closure_7 = tmp24;
        const buttons12 = obj31.buttons;
        const push14 = buttons12.push;
        const intl14 = tmp(1115).intl;
        const string5 = intl14.string;
        const t5 = tmp(1115).t;
        if (tmp24) {
          string5Result = string5(t5.xwMqD7);
        } else {
          string5Result = string5(t5.nEOg1N);
        }
        const obj33 = {
          label: string5Result,
          IconComponent: tmp(4790).TrashIcon,
          onPress() {
                  let intl6;
                  let intl7;
                  let stringResult1;
                  let stringResult2;
                  let user;
                  const intl = thread(isThreadModerator[12]).intl;
                  const stringResult = intl.string(thread(isThreadModerator[12]).t.nEOg1N);
                  const intl2 = thread(isThreadModerator[12]).intl;
                  const su3voL = thread(isThreadModerator[12]).t.su3voL;
                  ({ postName: null }.postName) = "\"" + thread.name + "\"";
                  const tmp4 = thread;
                  const tmp6 = closure_7;
                  if (tmp6) {
                    const intl4 = tmp(tmp2[12]).intl;
                    stringResult1 = intl4.string(tmp(tmp2[12]).t.xwMqD7);
                    const intl5 = tmp(tmp2[12]).intl;
                    stringResult2 = intl5.string(tmp(tmp2[12]).t.RUHcyk);
                  } else {
                    let tmp7 = closure_3;
                    if (tmp7) {
                      tmp7 = !isThreadModerator;
                    }
                    stringResult2 = tmp5;
                    stringResult1 = stringResult;
                    if (tmp7) {
                      const intl3 = tmp(tmp2[12]).intl;
                      const format = intl3.format;
                      const _HermesInternal = HermesInternal;
                      const obj = { postName: "\"" + tmp4.name + "\"" };
                      const prop = tmp(tmp2[12]).t["6/pY2+"];
                      stringResult2 = format(prop, obj);
                      stringResult1 = stringResult;
                    }
                  }
                  let obj2 = {
                    title: stringResult1,
                    body: stringResult2,
                    cancelText: intl6.string(tmp(tmp2[12]).t.gm1Vej),
                    confirmText: intl7.string(tmp(tmp2[12]).t.p89ACt),
                    onConfirm() {
                      if (closure_1_7) {
                        const deleteMessage = stateFromStores2(isThreadModerator[43]).deleteMessage;
                        id = user.id;
                        stateFromStores2(isThreadModerator[43]);
                        const obj2 = stateFromStores2(isThreadModerator[26]);
                        deleteMessage(id, obj2.castChannelIdAsMessageId(user.id));
                      } else {
                        const tmpResult2 = stateFromStores2(isThreadModerator[29]);
                        tmpResult2.deleteChannel(user.id);
                      }
                    },
                    confirmColor: tmp(tmp2[44]).ButtonColors.RED
                  };
                  const show = require("AlertActionCreators").show;
                  require("AlertActionCreators");
                  intl6 = tmp(tmp2[12]).intl;
                  intl7 = tmp(tmp2[12]).intl;
                  show(obj2);
                }
        };
        push14(obj33);
      }
      items7.push(obj31);
      if (setting) {
        const obj34 = { sectionKey: "developer-actions", buttons: items9 };
        const push15 = items7.push;
        const obj35 = {
          label: intl15.string(tmp(1115).t.DQ797g),
          IconComponent: tmp(10092).IdIcon,
          onPress() {
                  const obj = thread(isThreadModerator[46]);
                  obj.copy(thread.id);
                  const obj2 = thread(isThreadModerator[47]);
                  obj2.presentPostIdCopied();
                }
        };
        intl15 = tmp(1115).intl;
        items9 = [obj35];
        push15(obj34);
      }
      const obj36 = {
        showGradient: true,
        startExpanded: tmpResult.isMetaQuest(),
        header: tmp20(tmp(10464).ActionSheetIconHeader, obj37),
        children: items7.map((buttons) => {
              buttons = buttons.buttons;
              const sectionKey = buttons.sectionKey;
              const Group = ActionSheetRow2.ActionSheetRow.Group;
              return <Group key={sectionKey} hasIcons>{buttons.map((item, index) => {
                let IconComponent;
                let closure_0;
                let disableColor;
                let isDestructive;
                let label;
                let trailing;
                ({ label, onPress: closure_0 } = item);
                ({ IconComponent, disableColor, isDestructive, trailing } = item);
                const intl = thread(closure_1_2[12]).intl;
                let tmp3 = label === intl.string(thread(closure_1_2[12]).t.nEOg1N);
                if (!tmp3) {
                  const intl2 = tmp(tmp2[12]).intl;
                  tmp3 = label === intl2.string(tmp(tmp2[12]).t.xwMqD7);
                }
                const ActionSheetRow = tmp(tmp2[59]).ActionSheetRow;
                const obj = {
                  variant: str,
                  icon: closure_1_14(thread(closure_1_2[59]).ActionSheetRow.Icon, { IconComponent, disableColor }),
                  label,
                  trailing,
                  onPress() {
                    closure_0();
                    closure_2_1();
                  }
                };
                return closure_1_14(ActionSheetRow, obj, index);
              })}</Group>;
            })
      };
      const ActionSheet = tmp(6618).ActionSheet;
      tmpResult = tmp(1610);
      obj37 = { title: tmp18, icon: tmp21 };
      return tmp20(ActionSheet, obj36);
    }
  }
  const buttons13 = obj17.buttons;
  const push2 = buttons13.push;
  const obj38 = {
    label: intl2.string(tmp(1115).t.e6RscS),
    IconComponent: tmp(6389).EyeIcon,
    onPress() {
      const obj = thread(isThreadModerator[16]);
      const obj2 = { object: constants2.MARK_FORUM_POST_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
      obj.ack(thread.id, obj2, true, true);
    }
  };
  intl2 = tmp(1115).intl;
  push2(obj38);
};
