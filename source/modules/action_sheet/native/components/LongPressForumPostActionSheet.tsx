// Module ID: 10328
// Function ID: 79743
// Name: ForumPostLongPressActionSheet
// Dependencies: [0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10328 (ForumPostLongPressActionSheet)
import "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { ChannelFlags } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_5 = importDefault(dependencyMap[3]);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, ChannelSettingsSections: closure_11 } = __exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default function ForumPostLongPressActionSheet(thread) {
  let parentChannel;
  thread = thread.thread;
  const arg1 = thread;
  ({ parentChannel, onClose: closure_1 } = thread);
  const guildId = thread.getGuildId();
  let obj = arg1(guildId[44]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_2));
  let obj1 = arg1(guildId[44]);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_4.hasJoined(thread.id));
  let obj2 = arg1(guildId[44]);
  const items2 = [closure_4];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => closure_4.isMuted(thread.id));
  let obj3 = arg1(guildId[44]);
  const items3 = [closure_3];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(closure_2);
    }
    return isLurkingResult;
  });
  const firstMessage = arg1(guildId[45]).useFirstForumPostMessage(thread).firstMessage;
  const obj5 = arg1(guildId[45]);
  const isThreadModerator = arg1(guildId[46]).useIsThreadModerator(parentChannel);
  const obj6 = arg1(guildId[46]);
  const canManageThread = arg1(guildId[46]).useCanManageThread(thread);
  const obj7 = arg1(guildId[46]);
  const canUnarchiveThread = arg1(guildId[46]).useCanUnarchiveThread(thread);
  const obj8 = arg1(guildId[46]);
  const existingPin = arg1(guildId[47]).useExistingPin(thread);
  const obj9 = arg1(guildId[47]);
  const items4 = [closure_5];
  const stateFromStores4 = arg1(guildId[44]).useStateFromStores(items4, () => {
    const count = count.getCount(thread.id);
    let num = 0;
    if (null != count) {
      num = count;
    }
    return num;
  });
  const DeveloperMode = arg1(guildId[48]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const obj10 = arg1(guildId[44]);
  const items5 = [closure_6];
  let id;
  const stateFromStores5 = arg1(guildId[44]).useStateFromStores(items5, () => id.getId());
  if (null != firstMessage) {
    id = firstMessage.author.id;
  }
  const obj11 = arg1(guildId[44]);
  const tmp13 = importDefault(guildId[49])(thread, true);
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: arg1(guildId[51]).GuildIconSizes.LARGE };
    let tmp18 = jsx(importDefault(guildId[51]), obj);
    const tmp22 = importDefault(guildId[51]);
  } else {
    obj = { size: arg1(guildId[40]).AvatarSizes.LARGE, channel: thread };
    tmp18 = jsx(arg1(guildId[40]).Avatar, obj);
  }
  obj1 = { thread, parentChannel, hasJoinedPost: stateFromStores1, muted: stateFromStores2, isModerator: isThreadModerator, isAuthor: stateFromStores5 === id, canManageThread, developerModeEnabled: setting, existingPin, messageCount: stateFromStores4, canUnarchiveThread, isLurking: stateFromStores3, favorites: importDefault(guildId[50])(thread, "ForumPostLongPressActionSheet") };
  const tmp14 = importDefault(guildId[50])(thread, "ForumPostLongPressActionSheet");
  obj2 = { showGradient: true };
  const arr7 = function getActionSheetButtons(thread) {
    let canUnarchiveThread;
    let developerModeEnabled;
    let favorites;
    let hasJoinedPost;
    let messageCount;
    let parentChannel;
    thread = thread.thread;
    const muted = thread.muted;
    const isModerator = thread.isModerator;
    let closure_2 = isModerator;
    let isAuthor = thread.isAuthor;
    const canManageThread = thread.canManageThread;
    ({ existingPin: closure_5, parentChannel } = thread);
    const isLurking = thread.isLurking;
    isAuthor = undefined;
    const items = [];
    const threadMetadata = thread.threadMetadata;
    let archived;
    ({ hasJoinedPost, developerModeEnabled, messageCount, canUnarchiveThread, favorites } = thread);
    if (null != threadMetadata) {
      archived = threadMetadata.archived;
    }
    const threadMetadata2 = thread.threadMetadata;
    if (null != threadMetadata2) {
      const locked = threadMetadata2.locked;
    }
    const tmp3 = muted(closure_2[9])(favorites);
    if (null != tmp3) {
      let obj = { sectionKey: "favorites" };
      const items1 = [tmp3];
      obj.buttons = items1;
      items.push(obj);
    }
    obj = { sectionKey: "mark-as-read" };
    obj = {};
    const intl = thread(closure_2[10]).intl;
    obj.label = intl.string(thread(closure_2[10]).t.e6RscS);
    obj.IconComponent = thread(closure_2[11]).EyeIcon;
    obj.onPress = function onPress() {
      let obj = thread(isModerator[12]);
      obj = { object: constants2.MARK_FORUM_POST_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
      obj.ack(thread.id, obj, true, true);
    };
    const items2 = [obj];
    obj.buttons = items2;
    items.push(obj);
    const obj1 = { sectionKey: "channel-actions", buttons: [] };
    if (!isLurking) {
      const buttons = obj1.buttons;
      const push = buttons.push;
      const obj2 = {};
      const intl2 = thread(closure_2[10]).intl;
      const string = intl2.string;
      const t = thread(closure_2[10]).t;
      if (hasJoinedPost) {
        obj2.label = string(t.2LsZdT);
        obj2.IconComponent = tmp6(tmp7[13]).UserMinusIcon;
        obj2.onPress = function onPress() {
          return muted(isModerator[14]).leaveThread(thread, "Context Menu");
        };
        push(obj2);
      } else {
        obj2.label = string(t.ihLPiO);
        obj2.IconComponent = tmp6(tmp7[15]).BellIcon;
        obj2.onPress = function onPress() {
          return muted(isModerator[14]).joinThread(thread, "Context Menu");
        };
        push(obj2);
      }
    }
    if (archived) {
      if (canUnarchiveThread) {
        const buttons1 = obj1.buttons;
        const obj3 = {};
        const intl4 = thread(closure_2[10]).intl;
        obj3.label = intl4.string(thread(closure_2[10]).t.cnRubV);
        obj3.IconComponent = thread(closure_2[16]).ClockIcon;
        obj3.onPress = function onPress() {
          muted(isModerator[14]).unarchiveThread(thread, false);
        };
        buttons1.push(obj3);
      }
    } else if (canManageThread) {
      const buttons2 = obj1.buttons;
      const obj4 = {};
      const intl3 = thread(closure_2[10]).intl;
      obj4.label = intl3.string(thread(closure_2[10]).t.BTs4Kb);
      obj4.IconComponent = thread(closure_2[17]).XLargeIcon;
      obj4.onPress = function onPress() {
        muted(isModerator[14]).archiveThread(thread, false);
      };
      buttons2.push(obj4);
    }
    if (canManageThread) {
      const buttons3 = obj1.buttons;
      const push2 = buttons3.push;
      const obj5 = {};
      const intl5 = thread(closure_2[10]).intl;
      const string2 = intl5.string;
      const t2 = thread(closure_2[10]).t;
      if (locked) {
        obj5.label = string2(t2./OKSxp);
        obj5.IconComponent = tmp16(tmp17[18]).LockUnlockedIcon;
        obj5.onPress = function onPress() {
          muted(isModerator[14]).unlockThread(thread);
        };
        push2(obj5);
      } else {
        obj5.label = string2(t2.Ur/0Na);
        obj5.IconComponent = tmp16(tmp17[19]).LockIcon;
        obj5.onPress = function onPress() {
          muted(isModerator[14]).lockThread(thread);
        };
        push2(obj5);
      }
    }
    const hasFlagResult = thread.hasFlag(constants.PINNED);
    let tmp21 = isAuthor;
    if (isAuthor) {
      tmp21 = !tmp20;
    }
    if (tmp21) {
      const buttons4 = obj1.buttons;
      const obj6 = {};
      const intl6 = thread(closure_2[10]).intl;
      obj6.label = intl6.string(thread(closure_2[10]).t.NP1yHG);
      obj6.IconComponent = thread(closure_2[20]).PencilIcon;
      obj6.onPress = function onPress() {
        let obj = thread(isModerator[21]);
        obj = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: muted(isModerator[22]).castChannelIdAsMessageId(thread.id), isEdit: true };
        const items = [muted(isModerator[23]).FORUM_CHANNEL, muted(isModerator[23]).GUILD_CHANNEL];
        obj.analyticsLocations = items;
        obj = { section: constants3.CHANNEL_LIST, object: constants2.CONTEXT_MENU };
        obj.analyticsLocationObject = obj;
        const result = obj.openCreateForumPostModal(obj);
      };
      buttons4.push(obj6);
    }
    if (canManageThread) {
      const buttons5 = obj1.buttons;
      const obj7 = {};
      const intl7 = thread(closure_2[10]).intl;
      obj7.label = intl7.string(thread(closure_2[10]).t.SGuVbR);
      obj7.IconComponent = thread(closure_2[24]).SettingsIcon;
      obj7.onPress = function onPress() {
        muted(isModerator[25]).setSection(constants4.OVERVIEW);
        const obj = muted(isModerator[25]);
        muted(isModerator[25]).open(thread.id);
      };
      buttons5.push(obj7);
      if (parentChannel.availableTags.length > 0) {
        const buttons6 = obj1.buttons;
        const obj8 = {};
        const intl8 = thread(closure_2[10]).intl;
        obj8.label = intl8.string(thread(closure_2[10]).t.436ZFw);
        obj8.IconComponent = thread(closure_2[26]).TagsIcon;
        obj8.onPress = function onPress() {
          let obj = muted(isModerator[27]);
          obj = { thread, parentChannel, canManageThread };
          obj.openLazy(thread(isModerator[29])(isModerator[28], isModerator.paths), "ForumPostTagsActionSheet", obj);
        };
        buttons6.push(obj8);
      }
    }
    const buttons7 = obj1.buttons;
    const obj9 = {};
    const intl9 = thread(closure_2[10]).intl;
    obj9.label = intl9.string(thread(closure_2[10]).t.WqhZss);
    obj9.IconComponent = thread(closure_2[30]).LinkIcon;
    obj9.onPress = function onPress() {
      let obj = thread(isModerator[31]);
      obj = { section: constants3.CONTEXT_MENU };
      const result = obj.handleCopyLinkForumPost(thread.guild_id, thread.id, obj);
    };
    buttons7.push(obj9);
    items.push(obj1);
    if (isLurking) {
      const obj10 = { sectionKey: "admin-actions", buttons: [] };
      if (isModerator) {
        const buttons8 = obj10.buttons;
        const push4 = buttons8.push;
        const obj11 = {};
        const intl11 = thread(closure_2[10]).intl;
        const string4 = intl11.string;
        const t3 = thread(closure_2[10]).t;
        if (hasFlagResult) {
          obj11.label = string4(t3.trD8ao);
          obj11.IconComponent = tmp38(tmp39[36]).PinIcon;
          obj11.onPress = function onPress() {
            return muted(isModerator[14]).unpin(thread);
          };
          push4(obj11);
        } else {
          obj11.label = string4(t3.EnaWhu);
          obj11.IconComponent = tmp38(tmp39[36]).PinIcon;
          obj11.onPress = function onPress() {
            if (null != closure_5) {
              let obj = {};
              const intl = thread(isModerator[10]).intl;
              obj.title = intl.string(thread(isModerator[10]).t.IMbjxo);
              const intl2 = thread(isModerator[10]).intl;
              obj.body = intl2.string(thread(isModerator[10]).t.mi5+Vl);
              const intl3 = thread(isModerator[10]).intl;
              obj.cancelText = intl3.string(thread(isModerator[10]).t.gm1Vej);
              const intl4 = thread(isModerator[10]).intl;
              obj.confirmText = intl4.string(thread(isModerator[10]).t.p89ACt);
              obj.onConfirm = function onConfirm() {
                callback(closure_2[14]).replacePin(closure_5, closure_0);
              };
              muted(isModerator[37]).show(obj);
              const obj2 = muted(isModerator[37]);
            } else {
              obj = muted(isModerator[14]);
              obj.pin(thread);
            }
          };
          push4(obj11);
        }
      }
      if (!isModerator) {
        if (!isAuthor) {
          items.push(obj10);
          if (developerModeEnabled) {
            const obj12 = { sectionKey: "developer-actions" };
            const obj13 = {};
            const intl13 = thread(closure_2[10]).intl;
            obj13.label = intl13.string(thread(closure_2[10]).t.DQ797g);
            obj13.IconComponent = thread(closure_2[41]).IdIcon;
            obj13.onPress = function onPress() {
              thread(isModerator[42]).copy(thread.id);
              const obj = thread(isModerator[42]);
              thread(isModerator[43]).presentPostIdCopied();
            };
            const items3 = [obj13];
            obj12.buttons = items3;
            items.push(obj12);
          }
          return items;
        }
      }
      if (isAuthor) {
        isAuthor = !isModerator;
      }
      if (isAuthor) {
        isAuthor = messageCount > 0;
      }
      const buttons9 = obj10.buttons;
      let obj14 = {};
      const intl12 = thread(closure_2[10]).intl;
      let string5 = intl12.string;
      let t4 = thread(closure_2[10]).t;
      if (isAuthor) {
        let string5Result = string5(t4.xwMqD7);
      } else {
        string5Result = string5(t4.nEOg1N);
      }
      obj14.label = string5Result;
      t4 = thread;
      string5 = closure_2;
      obj14.IconComponent = thread(closure_2[38]).TrashIcon;
      obj14.onPress = function onPress() {
        const intl = thread(isModerator[10]).intl;
        const stringResult = intl.string(thread(isModerator[10]).t.nEOg1N);
        const intl2 = thread(isModerator[10]).intl;
        const su3voL = thread(isModerator[10]).t.su3voL;
        {}.postName = "\"" + thread.name + "\"";
        if (isAuthor) {
          const intl4 = thread(isModerator[10]).intl;
          let stringResult1 = intl4.string(thread(isModerator[10]).t.xwMqD7);
          const intl5 = thread(isModerator[10]).intl;
          let stringResult2 = intl5.string(thread(isModerator[10]).t.RUHcyk);
        } else {
          let tmp3 = isAuthor;
          if (isAuthor) {
            tmp3 = !isModerator;
          }
          stringResult1 = stringResult;
          stringResult2 = tmp2;
          if (tmp3) {
            const intl3 = thread(isModerator[10]).intl;
            let obj = {};
            const _HermesInternal = HermesInternal;
            obj.postName = "\"" + thread.name + "\"";
            stringResult2 = intl3.format(thread(isModerator[10]).t.6/pY2+, obj);
            stringResult1 = stringResult;
          }
        }
        obj = { title: stringResult1, body: stringResult2 };
        const intl6 = thread(isModerator[10]).intl;
        obj.cancelText = intl6.string(thread(isModerator[10]).t.gm1Vej);
        const intl7 = thread(isModerator[10]).intl;
        obj.confirmText = intl7.string(thread(isModerator[10]).t.p89ACt);
        obj.onConfirm = function onConfirm() {
          if (closure_7) {
            let tmpResult = tmp(tmp2[39]);
            tmpResult = tmp(tmp2[22]);
            tmpResult.deleteMessage(user.id, tmpResult.castChannelIdAsMessageId(user.id));
          } else {
            tmp(tmp2[25]).deleteChannel(user.id);
            const tmpResult1 = tmp(tmp2[25]);
          }
        };
        obj.confirmColor = thread(isModerator[40]).ButtonColors.RED;
        muted(isModerator[37]).show(obj);
      };
      obj14 = buttons9.push(obj14);
    } else {
      const obj15 = { sectionKey: "notifications", buttons: [] };
      let buttons10 = obj15.buttons;
      let push3 = buttons10.push;
      let obj16 = {};
      let tmp33 = thread;
      let tmp34 = closure_2;
      let intl10 = thread(closure_2[10]).intl;
      let string3 = intl10.string;
      let flag = thread(closure_2[10]).t;
      if (muted) {
        obj16.label = string3(flag.0JQfsP);
        obj16.IconComponent = tmp33(tmp34[15]).BellIcon;
        obj16.onPress = function onPress() {
          let obj = muted(isModerator[14]);
          obj = { muted: !muted };
          return obj.setNotificationSettings(thread, obj);
        };
        push3(obj16);
      } else {
        obj16.label = string3(flag.nP+Ykd);
        obj16.IconComponent = tmp33(tmp34[32]).BellSlashIcon;
        obj16.onPress = function onPress() {
          let obj = muted(isModerator[27]);
          obj = {};
          const combined = "muteSettings" + thread.id;
          obj.guildId = thread.getGuildId();
          obj.channelId = thread.id;
          obj.openLazy(thread(isModerator[29])(isModerator[33], isModerator.paths), combined, obj);
        };
        push3(obj16);
      }
      buttons10 = obj15.buttons;
      push3 = buttons10.push;
      const obj17 = {};
      tmp33 = thread;
      tmp34 = closure_2;
      intl10 = thread(closure_2[10]).intl;
      string3 = intl10.string;
      obj17.label = string3(thread(closure_2[10]).t.HcoRu0);
      obj17.IconComponent = thread(closure_2[34]).ChannelNotificationIcon;
      obj17.onPress = function onPress() {
        return thread(isModerator[35]).showThreadNotificationsBottomSheet(thread);
      };
      flag = true;
      obj17.disableColor = true;
      push3(obj17);
      obj16 = items.push(obj15);
    }
  }(obj1);
  obj2.startExpanded = arg1(guildId[53]).isMetaQuest();
  obj3 = { title: tmp13, icon: tmp18 };
  obj2.header = jsx(arg1(guildId[54]).ActionSheetIconHeader, obj3);
  obj2.children = arr7.map((buttons) => {
    buttons = buttons.buttons;
    const obj = {
      hasIcons: true,
      children: buttons.map((arg0, arg1) => {
        let IconComponent;
        let disableColor;
        let isDestructive;
        let label;
        ({ label, onPress: closure_0 } = arg0);
        ({ IconComponent, disableColor, isDestructive } = arg0);
        const intl = callback(closure_2[10]).intl;
        let tmp = label === intl.string(callback(closure_2[10]).t.nEOg1N);
        if (!tmp) {
          const intl2 = callback(closure_2[10]).intl;
          tmp = label === intl2.string(callback(closure_2[10]).t.xwMqD7);
        }
        const obj = {
          variant: str,
          icon: callback2(callback(closure_2[55]).ActionSheetRow.Icon, { IconComponent, disableColor }),
          label,
          onPress() {
            callback();
            callback2();
          }
        };
        return callback2(callback(closure_2[55]).ActionSheetRow, obj, arg1);
      })
    };
    return callback(thread(closure_2[55]).ActionSheetRow.Group, obj, buttons.sectionKey);
  });
  return jsx(arg1(guildId[52]).ActionSheet, obj2);
};
