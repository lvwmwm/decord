// Module ID: 7789
// Function ID: 61703
// Name: createAutoModerationActionSystemMessage
// Dependencies: [27, 1348, 1917, 3758, 3767, 1849, 653, 22, 3976, 689, 7714, 6740, 4360, 1212, 7767, 3712, 7790, 7791, 1392, 7794, 7579, 1395, 7795, 5486, 7741, 4320, 3747, 3800, 7796, 7797, 2]
// Exports: createAutoModerationActionSystemMessage

// Module 7789 (createAutoModerationActionSystemMessage)
import get_ActivityIndicator from "resetCache";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import apply from "registerAsset";

let closure_3;
let closure_4;
({ processColor: closure_3, Image: closure_4 } = get_ActivityIndicator);
let closure_11 = apply.memoize((arg0) => {
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  obj = {};
  const isThemeDarkResult = obj.isThemeDark(arg0);
  const tmp2 = obj.isThemeDark(arg0) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_630;
  obj.defaultUsernameColor = require(7714) /* processColorOrThrow */.processColorOrThrow(tmp2);
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx");

export const createAutoModerationActionSystemMessage = function createAutoModerationActionSystemMessage(message) {
  let colorString;
  let content;
  let embedChannel;
  let embedChannelId;
  let flaggedMessageId;
  let guildMemberAvatar;
  let iconRoleId;
  let interactionUserId;
  let keyword;
  let quarantineType;
  let roleStyle;
  let ruleName;
  let theme;
  ({ message, theme, roleStyle } = message);
  let defaultUsernameColor = callback2(theme).defaultUsernameColor;
  let obj = require(6740) /* getEmbedFieldFromMessage */;
  if (obj.isAutomodMessageRecord(message)) {
    let obj1 = require(6740) /* getEmbedFieldFromMessage */;
    const result = obj1.extractAutomodMessageFields(message);
    ({ keyword, embedChannel, flaggedMessageId, embedChannelId, quarantineType } = result);
    ({ ruleName, content, interactionUserId } = result);
    channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let obj3 = require(4360) /* useNullableMessageAuthor */;
    const messageAuthor = obj3.getMessageAuthor(message);
    ({ guildMemberAvatar, colorString, iconRoleId } = messageAuthor);
    const author = message.author;
    let obj4 = require(6740) /* getEmbedFieldFromMessage */;
    let str = obj4.getActionHeaderTextMobile(message, author, interactionUserId);
    const intl = require(1212) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1212) /* getSystemLocale */.t["94JbM3"]);
    let obj5 = require(6740) /* getEmbedFieldFromMessage */;
    const result1 = obj5.isAutomodNotification(message);
    let tmp16 = stringResult;
    let tmp17 = null;
    if (result1) {
      let obj6 = require(6740) /* getEmbedFieldFromMessage */;
      let resolvedReason = obj6.extractAutomodNotificationFields(message);
      const notificationType = resolvedReason.notificationType;
      if (require(6740) /* getEmbedFieldFromMessage */.IS_BACKWARDS_COMPAT_RAID_TYPE !== notificationType) {
        let id = require;
        id = dependencyMap;
        if (require(7767) /* AutomodNotificationEmbedTypeKeys */.AutomodNotificationEmbedTypeKeys.RAID !== notificationType) {
          id = require;
          id = dependencyMap;
          if (require(7767) /* AutomodNotificationEmbedTypeKeys */.AutomodNotificationEmbedTypeKeys.MENTION_RAID === notificationType) {
            obj = {};
            let fromNowResult;
            if (null != resolvedReason.raidDatetime) {
              fromNowResult = importDefault(3712)(resolvedReason.raidDatetime).fromNow();
              const obj18 = importDefault(3712)(resolvedReason.raidDatetime);
            }
            obj.subtitleLeft = fromNowResult;
            const intl5 = require(1212) /* getSystemLocale */.intl;
            obj.header = intl5.string(require(1212) /* getSystemLocale */.t.C2uIXE);
            const internal3 = importDefault(689).internal;
            obj.headerColor = require(7714) /* processColorOrThrow */.processColorOrThrow(internal3.resolveSemanticColor(theme, importDefault(689).colors.TEXT_FEEDBACK_CRITICAL));
            const obj19 = require(7714) /* processColorOrThrow */;
            obj.headerIconURL = closure_4.resolveAssetSource(require(1392) /* getAvatarURL */.makeSource(importDefault(7579))).uri;
            const obj20 = require(1392) /* getAvatarURL */;
            const internal4 = importDefault(689).internal;
            obj.headerIconColor = require(7714) /* processColorOrThrow */.processColorOrThrow(internal4.resolveSemanticColor(theme, importDefault(689).colors.TEXT_FEEDBACK_CRITICAL));
            const intl6 = require(1212) /* getSystemLocale */.intl;
            obj.body = intl6.string(require(1212) /* getSystemLocale */.t.SWIWEV);
            obj.shouldShowActions = false;
            str = "";
            tmp16 = stringResult;
            tmp17 = obj;
            const obj21 = require(7714) /* processColorOrThrow */;
          } else {
            id = require;
            id = dependencyMap;
            if (require(7767) /* AutomodNotificationEmbedTypeKeys */.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === notificationType) {
              let obj7 = require(6740) /* getEmbedFieldFromMessage */;
              const userIdOfAutomodAction = obj7.getUserIdOfAutomodAction(message);
              user = user.getUser(userIdOfAutomodAction);
              let member = null;
              if (null != userIdOfAutomodAction) {
                member = null;
                if (null != guildId) {
                  member = store.getMember(guildId, userIdOfAutomodAction);
                }
              }
              let nick;
              if (null != member) {
                nick = member.nick;
              }
              if (null == nick) {
                let username;
                if (null != user) {
                  username = user.username;
                }
                nick = username;
              }
              let obj8 = require(1395) /* ensureAvatarSource */;
              let avatar;
              if (null != member) {
                avatar = member.avatar;
              }
              if (null != avatar) {
                if (null != guildId) {
                  let obj9 = require(1392) /* getAvatarURL */;
                  obj = { userId: author.id };
                  let avatar1;
                  if (null != member) {
                    avatar1 = member.avatar;
                  }
                  obj.avatar = avatar1;
                  obj.guildId = guildId;
                  let guildMemberAvatarSource = obj9.getGuildMemberAvatarSource(obj, author);
                }
                obj1 = {};
                const intl2 = require(1212) /* getSystemLocale */.intl;
                obj1.header = intl2.string(require(1212) /* getSystemLocale */.t.lVLiFp);
                let obj12 = require(7714) /* processColorOrThrow */;
                const internal = importDefault(689).internal;
                obj1.headerColor = obj12.processColorOrThrow(internal.resolveSemanticColor(theme, importDefault(689).colors.TEXT_FEEDBACK_POSITIVE));
                let obj13 = require(1392) /* getAvatarURL */;
                obj1.headerIconURL = closure_4.resolveAssetSource(obj13.makeSource(importDefault(7795))).uri;
                let obj14 = require(7714) /* processColorOrThrow */;
                const internal2 = importDefault(689).internal;
                obj1.headerIconColor = obj14.processColorOrThrow(internal2.resolveSemanticColor(theme, importDefault(689).colors.TEXT_FEEDBACK_POSITIVE));
                const intl3 = require(1212) /* getSystemLocale */.intl;
                obj1.body = intl3.string(require(1212) /* getSystemLocale */.t["QV/8u5"]);
                obj1.shouldShowActions = false;
                const ensureAvatarSourceResult = obj8.ensureAvatarSource(guildMemberAvatarSource);
                obj1.subtitleRight = importDefault(3712)(message.timestamp).fromNow();
                const intl4 = require(1212) /* getSystemLocale */.intl;
                obj1.subtitleLeft = intl4.string(require(1212) /* getSystemLocale */.t.qlFrXW);
                obj1.enabledByAvatarURL = ensureAvatarSourceResult.uri;
                obj1.enabledByUsername = nick;
                colorString = undefined;
                if (null != member) {
                  colorString = member.colorString;
                }
                let tmp42;
                if (null != colorString) {
                  tmp42 = callback(member.colorString);
                }
                obj1.enabledByColor = tmp42;
                str = "";
                tmp16 = stringResult;
                tmp17 = obj1;
                const obj16 = importDefault(3712)(message.timestamp);
              }
              guildMemberAvatarSource = author.getAvatarSource(undefined, false, 16);
            } else {
              const obj2 = {};
              id = require;
              id = dependencyMap;
              const intl17 = require(1212) /* getSystemLocale */.intl;
              obj2.header = intl17.string(require(1212) /* getSystemLocale */.t.VdZCcC);
              id = importDefault;
              const internal7 = importDefault(689).internal;
              obj2.headerColor = require(7714) /* processColorOrThrow */.processColorOrThrow(internal7.resolveSemanticColor(theme, importDefault(689).colors.TEXT_SUBTLE));
              id = closure_4;
              const obj49 = require(7714) /* processColorOrThrow */;
              obj2.headerIconURL = closure_4.resolveAssetSource(require(1392) /* getAvatarURL */.makeSource(importDefault(7579))).uri;
              const obj50 = require(1392) /* getAvatarURL */;
              const internal8 = importDefault(689).internal;
              obj2.headerIconColor = require(7714) /* processColorOrThrow */.processColorOrThrow(internal8.resolveSemanticColor(theme, importDefault(689).colors.TEXT_SUBTLE));
              const intl18 = require(1212) /* getSystemLocale */.intl;
              obj2.body = intl18.string(require(1212) /* getSystemLocale */.t["NxHYX/"]);
              obj2.shouldShowActions = false;
              str = "";
              tmp16 = stringResult;
              tmp17 = obj2;
              const obj51 = require(7714) /* processColorOrThrow */;
            }
          }
        }
      }
      let fromNowResult1;
      if (null != resolvedReason.raidDatetime) {
        fromNowResult1 = importDefault(3712)(resolvedReason.raidDatetime).fromNow();
        const obj22 = importDefault(3712)(resolvedReason.raidDatetime);
      }
      const tmp56 = resolvedReason.raidType === require(7790) /* AutomodRaidAlertTypes */.AutomodRaidAlertTypes.DM_RAID;
      let str2 = "";
      if (null != resolvedReason.raidDatetime) {
        const _Date = Date;
        const date = new Date(resolvedReason.raidDatetime);
        str2 = date.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, require(7791) /* hasDetectedRaid */.DATE_CONFIG);
      }
      const intl7 = require(1212) /* getSystemLocale */.intl;
      const formatToPlainString = intl7.formatToPlainString;
      const t = require(1212) /* getSystemLocale */.t;
      if (tmp56) {
        obj3 = { dmsSent: resolvedReason.dmsSent };
        let formatToPlainStringResult = formatToPlainString(t["5C8Mh3"], obj3);
      } else {
        obj4 = { joinCount: resolvedReason.joinAttempts };
        formatToPlainStringResult = formatToPlainString(t["4ylIiu"], obj4);
      }
      obj5 = { subtitleLeft: formatToPlainStringResult, severity: formatToPlainStringResult, subtitleRight: fromNowResult1, startTime: fromNowResult1 };
      const intl8 = require(1212) /* getSystemLocale */.intl;
      const string = intl8.string;
      const t2 = require(1212) /* getSystemLocale */.t;
      if (tmp56) {
        let stringResult1 = string(t2["8+lHUb"]);
      } else {
        stringResult1 = string(t2.xMwcwV);
      }
      obj5.header = stringResult1;
      let num19 = 10;
      let tmp71 = importDefault;
      let num20 = 9;
      const internal5 = importDefault(689).internal;
      obj5.headerColor = require(7714) /* processColorOrThrow */.processColorOrThrow(internal5.resolveSemanticColor(theme, importDefault(689).colors.TEXT_FEEDBACK_CRITICAL));
      let intl9 = closure_4;
      let resolveAssetSource = closure_4.resolveAssetSource;
      let internal6 = require(1392) /* getAvatarURL */;
      let intl10 = internal6.makeSource;
      if (tmp56) {
        let tmp73 = 7794;
      } else {
        tmp73 = 7579;
      }
      obj5.headerIconURL = resolveAssetSource(intl10(tmp71(tmp73))).uri;
      const obj27 = require(7714) /* processColorOrThrow */;
      tmp71 = importDefault;
      internal6 = importDefault(dependencyMap[num20]).internal;
      obj5.headerIconColor = require(dependencyMap[num19]).processColorOrThrow(internal6.resolveSemanticColor(theme, importDefault(dependencyMap[num20]).colors.TEXT_FEEDBACK_CRITICAL));
      intl10 = require(1212) /* getSystemLocale */.intl;
      obj6 = { dateTime: str2 };
      obj5.body = intl10.formatToPlainString(require(1212) /* getSystemLocale */.t["4QIIZl"], obj6);
      obj5.shouldShowActions = true;
      intl9 = require(1212) /* getSystemLocale */.intl;
      num19 = intl9.string;
      num20 = require(1212) /* getSystemLocale */.t.ufawcw;
      num19(num20);
      resolveAssetSource = require(6740) /* getEmbedFieldFromMessage */;
      resolvedReason = resolvedReason.resolvedReason;
      const raidAlertResolveCTAText = resolveAssetSource.getRaidAlertResolveCTAText(resolvedReason);
      const obj28 = require(dependencyMap[num19]);
    }
    if (null == guildId) {
      let member1 = null;
      if (null != guildId) {
        member1 = store.getMember(guildId, author.id);
      }
      let roleIcon;
      if (null != iconRoleId) {
        if (null != guildId) {
          obj7 = { guildId, roleId: iconRoleId, size: 18 };
          roleIcon = require(5486) /* useRoleIcon */.getRoleIcon(obj7);
          const obj32 = require(5486) /* useRoleIcon */;
        }
      }
      obj8 = {};
      const merged = Object.assign(importDefault(7741)(message));
      obj8["roleIcon"] = roleIcon;
      obj8["authorId"] = author.id;
      const intl11 = require(1212) /* getSystemLocale */.intl;
      obj8["username"] = intl11.string(require(1212) /* getSystemLocale */.t.hG1StD);
      const obj35 = require(1395) /* ensureAvatarSource */;
      const obj36 = require(1392) /* getAvatarURL */;
      obj8["avatarURL"] = obj35.ensureAvatarSource(obj36.makeSource(require(1395) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
      let tmp98;
      if (null != colorString) {
        tmp98 = colorString;
      }
      obj8["colorString"] = callback(tmp98);
      obj9 = { headerText: str };
      id = dependencyMap;
      const intl12 = require(1212) /* getSystemLocale */.intl;
      obj9.headerBadgeText = intl12.string(require(1212) /* getSystemLocale */.t["70CJbT"]);
      let str8 = "";
      if (null != keyword) {
        id = require;
        id = dependencyMap;
        const intl13 = require(1212) /* getSystemLocale */.intl;
        const obj10 = { keyword };
        str8 = intl13.formatToPlainString(require(1212) /* getSystemLocale */.t.SYIUTR, obj10);
      }
      obj9.keywordDisplayText = str8;
      const obj11 = {};
      if (null == flaggedMessageId) {
        flaggedMessageId = message.id;
      }
      obj11.id = flaggedMessageId;
      id = undefined;
      if (null != embedChannel) {
        id = embedChannel.id;
      }
      if (null != id) {
        embedChannelId = id;
      }
      if (null == embedChannelId) {
        embedChannelId = message.channel_id;
      }
      obj11.channelId = embedChannelId;
      obj11.guildId = guildId;
      obj11.userId = author.id;
      id = undefined;
      if (canResult) {
        if (null == quarantineType) {
          if (null != embedChannel) {
            id = require;
            id = dependencyMap;
            id = user;
            id = closure_8;
            id = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(embedChannel, user, closure_8);
            const obj41 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
          }
        }
      }
      obj11.channelName = id;
      obj11.username = messageAuthor.nick;
      id = defaultUsernameColor;
      if ("username" === roleStyle) {
        id = undefined;
        id = callback;
        if (null != colorString) {
          id = colorString;
        }
        id = id(id);
        id = defaultUsernameColor;
      }
      obj11.usernameColor = id;
      id = undefined;
      id = callback;
      if (null != colorString) {
        id = colorString;
      }
      obj11.roleColor = id(id);
      obj11.shouldShowRoleDot = "dot" === roleStyle && null != colorString;
      id = undefined;
      id = callback;
      if (null != colorString) {
        id = colorString;
      }
      id = id(id);
      if (null != id) {
        defaultUsernameColor = id;
      }
      obj11.colorString = defaultUsernameColor;
      obj11.avatarURL = null;
      obj11.content = content;
      id = require;
      id = dependencyMap;
      const obj37 = require(1395) /* ensureAvatarSource */;
      const tmp97 = callback;
      obj11.communicationDisabled = require(3747) /* isCommunicationDisabled */.isMemberCommunicationDisabled(member1);
      const obj42 = require(3747) /* isCommunicationDisabled */;
      obj11.timestamp = require(3800) /* resetCache */.accessibilityLabelCalendarFormat(message.timestamp);
      obj9.message = obj11;
      obj9.notification = tmp17;
      const intl14 = require(1212) /* getSystemLocale */.intl;
      obj12 = { ruleName };
      obj9.ruleDisplayText = intl14.formatToPlainString(require(1212) /* getSystemLocale */.t.ZoOyKB, obj12);
      id = null;
      if (null != quarantineType) {
        id = require;
        id = dependencyMap;
        const intl15 = require(1212) /* getSystemLocale */.intl;
        obj13 = { reason: require(6740) /* getEmbedFieldFromMessage */.getQuarantineReasonString(quarantineType) };
        id = intl15.formatToPlainString(require(1212) /* getSystemLocale */.t["26bB2M"], obj13);
        const obj46 = require(6740) /* getEmbedFieldFromMessage */;
      }
      obj9.reasonDisplayText = id;
      id = require;
      id = dependencyMap;
      id = closure_4;
      const obj43 = require(3800) /* resetCache */;
      id = dependencyMap;
      id = importDefault;
      if (result1) {
        id = 7796;
      } else {
        id = 7797;
      }
      obj9.actionsIconURL = closure_4.resolveAssetSource(require(1392) /* getAvatarURL */.makeSource(id(id))).uri;
      id = require;
      id = dependencyMap;
      const intl16 = require(1212) /* getSystemLocale */.intl;
      const string2 = intl16.string;
      const t3 = require(1212) /* getSystemLocale */.t;
      if (result1) {
        id = string2(t3.UgXhdn);
      } else {
        id = string2(t3.DEoVWZ);
      }
      obj9.actionsText = id;
      obj9.feedbackText = tmp16;
      obj8["autoModerationContext"] = obj9;
      return obj8;
    } else {
      require(1395) /* ensureAvatarSource */;
      if (null == guildMemberAvatar) {
        let avatarSource = author.getAvatarSource(undefined);
        const uri = tmp83(avatarSource).uri;
      }
      obj14 = { userId: author.id, avatar: guildMemberAvatar, guildId };
      avatarSource = require(1392) /* getAvatarURL */.getGuildMemberAvatarSource(obj14, author);
      const obj30 = require(1392) /* getAvatarURL */;
    }
    canResult = closure_7.can(Permissions.VIEW_CHANNEL, embedChannel);
  } else {
    id = null;
    return null;
  }
};
