// Module ID: 10370
// Function ID: 80013
// Name: ForumPostLongPressActionSheet
// Dependencies: [31, 3759, 3760, 5683, 1194, 1838, 653, 1355, 33, 10218, 1212, 8777, 5069, 4072, 7006, 10234, 4094, 4084, 10371, 4652, 9142, 9581, 21, 5482, 5791, 7685, 10373, 4098, 9889, 1934, 4074, 9348, 10232, 10310, 10235, 10375, 9989, 4470, 4089, 6691, 1273, 7609, 5490, 3830, 566, 5681, 5650, 9173, 3803, 4320, 10377, 5513, 5498, 1553, 10378, 5500, 2]
// Exports: default

// Module 10370 (ForumPostLongPressActionSheet)
import "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { ChannelFlags } from "set";
import { jsx } from "MuteSettings";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, ChannelSettingsSections: closure_11 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx");

export default function ForumPostLongPressActionSheet(thread) {
  let importDefault;
  let parentChannel;
  thread = thread.thread;
  ({ parentChannel, onClose: importDefault } = thread);
  const dependencyMap = thread.getGuildId();
  let obj = thread(566);
  let items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(closure_2));
  let obj1 = thread(566);
  let items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_4.hasJoined(thread.id));
  let obj2 = thread(566);
  let items2 = [closure_4];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_4.isMuted(thread.id));
  let obj3 = thread(566);
  let items3 = [_isNativeReflectConstruct];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = outer1_3.isLurking(closure_2);
    }
    return isLurkingResult;
  });
  const firstMessage = thread(5681).useFirstForumPostMessage(thread).firstMessage;
  let obj5 = thread(5681);
  const isThreadModerator = thread(5650).useIsThreadModerator(parentChannel);
  let obj6 = thread(5650);
  let canManageThread = thread(5650).useCanManageThread(thread);
  let obj7 = thread(5650);
  const canUnarchiveThread = thread(5650).useCanUnarchiveThread(thread);
  let obj8 = thread(5650);
  const existingPin = thread(9173).useExistingPin(thread);
  let obj9 = thread(9173);
  const items4 = [closure_5];
  const stateFromStores4 = thread(566).useStateFromStores(items4, () => {
    const count = outer1_5.getCount(thread.id);
    let num = 0;
    if (null != count) {
      num = count;
    }
    return num;
  });
  const DeveloperMode = thread(3803).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj10 = thread(566);
  const items5 = [closure_6];
  let id;
  const stateFromStores5 = thread(566).useStateFromStores(items5, () => outer1_6.getId());
  if (null != firstMessage) {
    id = firstMessage.author.id;
  }
  let obj11 = thread(566);
  const tmp13 = importDefault(4320)(thread, true);
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: thread(5513).GuildIconSizes.LARGE };
    let tmp18 = jsx(importDefault(5513), { guild: stateFromStores, size: thread(5513).GuildIconSizes.LARGE });
    const tmp22 = importDefault(5513);
  } else {
    obj = { size: thread(1273).AvatarSizes.LARGE, channel: thread };
    tmp18 = jsx(thread(1273).Avatar, { size: thread(1273).AvatarSizes.LARGE, channel: thread });
  }
  obj1 = { thread, parentChannel, hasJoinedPost: stateFromStores1, muted: stateFromStores2, isModerator: isThreadModerator, isAuthor: stateFromStores5 === id, canManageThread, developerModeEnabled: setting, existingPin, messageCount: stateFromStores4, canUnarchiveThread, isLurking: stateFromStores3, favorites: importDefault(10377)(thread, "ForumPostLongPressActionSheet") };
  const tmp14 = importDefault(10377)(thread, "ForumPostLongPressActionSheet");
  obj2 = { showGradient: true };
  const arr7 = (function getActionSheetButtons(thread) {
    let canUnarchiveThread;
    let closure_5;
    let developerModeEnabled;
    let favorites;
    let hasJoinedPost;
    let messageCount;
    let parentChannel;
    thread = thread.thread;
    const muted = thread.muted;
    const isModerator = thread.isModerator;
    let isAuthor = thread.isAuthor;
    const canManageThread = thread.canManageThread;
    ({ existingPin: closure_5, parentChannel } = thread);
    const isLurking = thread.isLurking;
    isAuthor = undefined;
    let items = [];
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
    let tmp3 = outer1_1(10218)(favorites);
    if (null != tmp3) {
      let obj = { sectionKey: "favorites" };
      const items1 = [tmp3];
      obj.buttons = items1;
      items.push(obj);
    }
    obj = { sectionKey: "mark-as-read" };
    obj = {};
    let intl = thread(1212).intl;
    obj.label = intl.string(thread(1212).t.e6RscS);
    obj.IconComponent = thread(8777).EyeIcon;
    obj.onPress = function onPress() {
      let obj = thread(isModerator[12]);
      obj = { object: outer2_9.MARK_FORUM_POST_AS_READ_BUTTON, objectType: outer2_8.ACK_MANUAL };
      obj.ack(thread.id, obj, true, true);
    };
    const items2 = [obj];
    obj.buttons = items2;
    items.push(obj);
    const obj1 = { sectionKey: "channel-actions", buttons: [] };
    if (!isLurking) {
      const buttons = obj1.buttons;
      const push = buttons.push;
      let obj2 = {};
      let intl2 = thread(1212).intl;
      const string = intl2.string;
      const t = thread(1212).t;
      if (hasJoinedPost) {
        obj2.label = string(t["2LsZdT"]);
        obj2.IconComponent = tmp6(4072).UserMinusIcon;
        obj2.onPress = function onPress() {
          return outer2_1(isModerator[14]).leaveThread(thread, "Context Menu");
        };
        push(obj2);
      } else {
        obj2.label = string(t.ihLPiO);
        obj2.IconComponent = tmp6(10234).BellIcon;
        obj2.onPress = function onPress() {
          return outer2_1(isModerator[14]).joinThread(thread, "Context Menu");
        };
        push(obj2);
      }
    }
    if (archived) {
      if (canUnarchiveThread) {
        const buttons1 = obj1.buttons;
        const obj3 = {};
        let intl4 = thread(1212).intl;
        obj3.label = intl4.string(thread(1212).t.cnRubV);
        obj3.IconComponent = thread(4094).ClockIcon;
        obj3.onPress = function onPress() {
          outer2_1(isModerator[14]).unarchiveThread(thread, false);
        };
        buttons1.push(obj3);
      }
    } else if (canManageThread) {
      const buttons2 = obj1.buttons;
      const obj4 = {};
      let intl3 = thread(1212).intl;
      obj4.label = intl3.string(thread(1212).t.BTs4Kb);
      obj4.IconComponent = thread(4084).XLargeIcon;
      obj4.onPress = function onPress() {
        outer2_1(isModerator[14]).archiveThread(thread, false);
      };
      buttons2.push(obj4);
    }
    if (canManageThread) {
      const buttons3 = obj1.buttons;
      const push2 = buttons3.push;
      const obj5 = {};
      let intl5 = thread(1212).intl;
      const string2 = intl5.string;
      const t2 = thread(1212).t;
      if (locked) {
        obj5.label = string2(t2["/OKSxp"]);
        obj5.IconComponent = tmp16(10371).LockUnlockedIcon;
        obj5.onPress = function onPress() {
          outer2_1(isModerator[14]).unlockThread(thread);
        };
        push2(obj5);
      } else {
        obj5.label = string2(t2["Ur/0Na"]);
        obj5.IconComponent = tmp16(4652).LockIcon;
        obj5.onPress = function onPress() {
          outer2_1(isModerator[14]).lockThread(thread);
        };
        push2(obj5);
      }
    }
    const hasFlagResult = thread.hasFlag(outer1_12.PINNED);
    let tmp21 = isAuthor;
    if (isAuthor) {
      tmp21 = !tmp20;
    }
    if (tmp21) {
      const buttons4 = obj1.buttons;
      const obj6 = {};
      let intl6 = thread(1212).intl;
      obj6.label = intl6.string(thread(1212).t.NP1yHG);
      obj6.IconComponent = thread(9142).PencilIcon;
      obj6.onPress = function onPress() {
        let obj = thread(isModerator[21]);
        obj = { guildId: parentChannel.guild_id, parentChannelId: parentChannel.id, threadId: thread.id, messageId: outer2_1(isModerator[22]).castChannelIdAsMessageId(thread.id), isEdit: true };
        const items = [outer2_1(isModerator[23]).FORUM_CHANNEL, outer2_1(isModerator[23]).GUILD_CHANNEL];
        obj.analyticsLocations = items;
        obj = { section: outer2_10.CHANNEL_LIST, object: outer2_9.CONTEXT_MENU };
        obj.analyticsLocationObject = obj;
        const result = obj.openCreateForumPostModal(obj);
      };
      buttons4.push(obj6);
    }
    if (canManageThread) {
      const buttons5 = obj1.buttons;
      const obj7 = {};
      let intl7 = thread(1212).intl;
      obj7.label = intl7.string(thread(1212).t.SGuVbR);
      obj7.IconComponent = thread(5791).SettingsIcon;
      obj7.onPress = function onPress() {
        outer2_1(isModerator[25]).setSection(outer2_11.OVERVIEW);
        const obj = outer2_1(isModerator[25]);
        outer2_1(isModerator[25]).open(thread.id);
      };
      buttons5.push(obj7);
      if (parentChannel.availableTags.length > 0) {
        const buttons6 = obj1.buttons;
        const obj8 = {};
        const intl8 = thread(1212).intl;
        obj8.label = intl8.string(thread(1212).t["436ZFw"]);
        obj8.IconComponent = thread(10373).TagsIcon;
        obj8.onPress = function onPress() {
          let obj = outer2_1(isModerator[27]);
          obj = { thread, parentChannel, canManageThread };
          obj.openLazy(thread(isModerator[29])(isModerator[28], isModerator.paths), "ForumPostTagsActionSheet", obj);
        };
        buttons6.push(obj8);
      }
    }
    const buttons7 = obj1.buttons;
    const obj9 = {};
    const intl9 = thread(1212).intl;
    obj9.label = intl9.string(thread(1212).t.WqhZss);
    obj9.IconComponent = thread(4074).LinkIcon;
    obj9.onPress = function onPress() {
      let obj = thread(isModerator[31]);
      obj = { section: outer2_10.CONTEXT_MENU };
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
        const intl11 = thread(1212).intl;
        const string4 = intl11.string;
        const t3 = thread(1212).t;
        if (hasFlagResult) {
          obj11.label = string4(t3.trD8ao);
          obj11.IconComponent = tmp38(9989).PinIcon;
          obj11.onPress = function onPress() {
            return outer2_1(isModerator[14]).unpin(thread);
          };
          push4(obj11);
        } else {
          obj11.label = string4(t3.EnaWhu);
          obj11.IconComponent = tmp38(9989).PinIcon;
          obj11.onPress = function onPress() {
            if (null != closure_5) {
              let obj = {};
              const intl = thread(isModerator[10]).intl;
              obj.title = intl.string(thread(isModerator[10]).t.IMbjxo);
              const intl2 = thread(isModerator[10]).intl;
              obj.body = intl2.string(thread(isModerator[10]).t["mi5+Vl"]);
              const intl3 = thread(isModerator[10]).intl;
              obj.cancelText = intl3.string(thread(isModerator[10]).t.gm1Vej);
              const intl4 = thread(isModerator[10]).intl;
              obj.confirmText = intl4.string(thread(isModerator[10]).t.p89ACt);
              obj.onConfirm = function onConfirm() {
                outer3_1(table[14]).replacePin(outer1_5, outer1_0);
              };
              outer2_1(isModerator[37]).show(obj);
              const obj2 = outer2_1(isModerator[37]);
            } else {
              obj = outer2_1(isModerator[14]);
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
            const intl13 = thread(1212).intl;
            obj13.label = intl13.string(thread(1212).t.DQ797g);
            obj13.IconComponent = thread(7609).IdIcon;
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
      const intl12 = thread(1212).intl;
      let string5 = intl12.string;
      let t4 = thread(1212).t;
      if (isAuthor) {
        let string5Result = string5(t4.xwMqD7);
      } else {
        string5Result = string5(t4.nEOg1N);
      }
      obj14.label = string5Result;
      t4 = thread;
      string5 = dependencyMap;
      obj14.IconComponent = thread(4089).TrashIcon;
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
            stringResult2 = intl3.format(thread(isModerator[10]).t["6/pY2+"], obj);
            stringResult1 = stringResult;
          }
        }
        obj = { title: stringResult1, body: stringResult2 };
        const intl6 = thread(isModerator[10]).intl;
        obj.cancelText = intl6.string(thread(isModerator[10]).t.gm1Vej);
        const intl7 = thread(isModerator[10]).intl;
        obj.confirmText = intl7.string(thread(isModerator[10]).t.p89ACt);
        obj.onConfirm = function onConfirm() {
          if (outer1_7) {
            let tmpResult = tmp(tmp2[39]);
            tmpResult = tmp(tmp2[22]);
            tmpResult.deleteMessage(outer1_0.id, tmpResult.castChannelIdAsMessageId(outer1_0.id));
          } else {
            tmp(tmp2[25]).deleteChannel(outer1_0.id);
            const tmpResult1 = tmp(tmp2[25]);
          }
        };
        obj.confirmColor = thread(isModerator[40]).ButtonColors.RED;
        outer2_1(isModerator[37]).show(obj);
      };
      obj14 = buttons9.push(obj14);
    } else {
      const obj15 = { sectionKey: "notifications", buttons: [] };
      let buttons10 = obj15.buttons;
      let push3 = buttons10.push;
      let obj16 = {};
      let tmp33 = thread;
      let intl10 = thread(1212).intl;
      let string3 = intl10.string;
      let flag = thread(1212).t;
      if (muted) {
        obj16.label = string3(flag["0JQfsP"]);
        obj16.IconComponent = tmp33(10234).BellIcon;
        obj16.onPress = function onPress() {
          let obj = outer2_1(isModerator[14]);
          obj = { muted: !muted };
          return obj.setNotificationSettings(thread, obj);
        };
        push3(obj16);
      } else {
        obj16.label = string3(flag["nP+Ykd"]);
        obj16.IconComponent = tmp33(10232).BellSlashIcon;
        obj16.onPress = function onPress() {
          let obj = outer2_1(isModerator[27]);
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
      intl10 = thread(1212).intl;
      string3 = intl10.string;
      obj17.label = string3(thread(1212).t.HcoRu0);
      obj17.IconComponent = thread(10235).ChannelNotificationIcon;
      obj17.onPress = function onPress() {
        return thread(isModerator[35]).showThreadNotificationsBottomSheet(thread);
      };
      flag = true;
      obj17.disableColor = true;
      push3(obj17);
      obj16 = items.push(obj15);
    }
  })(obj1);
  obj2.startExpanded = thread(1553).isMetaQuest();
  obj3 = { title: tmp13, icon: tmp18 };
  obj2.header = jsx(thread(10378).ActionSheetIconHeader, { title: tmp13, icon: tmp18 });
  obj2.children = arr7.map((buttons) => {
    buttons = buttons.buttons;
    let obj = {
      hasIcons: true,
      children: buttons.map((arg0, arg1) => {
        let IconComponent;
        let closure_0;
        let disableColor;
        let isDestructive;
        let label;
        ({ label, onPress: closure_0 } = arg0);
        ({ IconComponent, disableColor, isDestructive } = arg0);
        const intl = thread(1212).intl;
        let tmp = label === intl.string(thread(1212).t.nEOg1N);
        if (!tmp) {
          const intl2 = thread(1212).intl;
          tmp = label === intl2.string(thread(1212).t.xwMqD7);
        }
        const obj = {
          variant: str,
          icon: outer2_13(thread(5500).ActionSheetRow.Icon, { IconComponent, disableColor }),
          label,
          onPress() {
            callback();
            outer2_1();
          }
        };
        return outer2_13(thread(5500).ActionSheetRow, obj, arg1);
      })
    };
    return outer1_13(thread(5500).ActionSheetRow.Group, obj, buttons.sectionKey);
  });
  return jsx(thread(5498).ActionSheet, { showGradient: true });
};
