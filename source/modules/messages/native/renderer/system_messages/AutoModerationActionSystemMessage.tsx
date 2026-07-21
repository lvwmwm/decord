// Module ID: 7694
// Function ID: 61370
// Name: createAutoModerationActionSystemMessage
// Dependencies: []
// Exports: createAutoModerationActionSystemMessage

// Module 7694 (createAutoModerationActionSystemMessage)
const _module = require(dependencyMap[0]);
({ processColor: closure_3, Image: closure_4 } = _module);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const Permissions = require(dependencyMap[6]).Permissions;
const _module1 = require(dependencyMap[7]);
let closure_11 = _module1.memoize((arg0) => {
  let obj = require(dependencyMap[8]);
  const unsafe_rawColors = importDefault(dependencyMap[9]).unsafe_rawColors;
  obj = {};
  const isThemeDarkResult = obj.isThemeDark(arg0);
  const tmp2 = obj.isThemeDark(arg0) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_630;
  obj.defaultUsernameColor = require(dependencyMap[10]).processColorOrThrow(tmp2);
  return obj;
});
const _module2 = require(dependencyMap[30]);
const result = _module2.fileFinishedImporting("modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx");

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
  let obj = require(dependencyMap[11]);
  if (obj.isAutomodMessageRecord(message)) {
    let obj1 = require(dependencyMap[11]);
    const result = obj1.extractAutomodMessageFields(message);
    ({ keyword, embedChannel, flaggedMessageId, embedChannelId, quarantineType } = result);
    ({ ruleName, content, interactionUserId } = result);
    const channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let obj3 = require(dependencyMap[12]);
    const messageAuthor = obj3.getMessageAuthor(message);
    ({ guildMemberAvatar, colorString, iconRoleId } = messageAuthor);
    const author = message.author;
    let obj4 = require(dependencyMap[11]);
    let str = obj4.getActionHeaderTextMobile(message, author, interactionUserId);
    const intl = require(dependencyMap[13]).intl;
    const stringResult = intl.string(require(dependencyMap[13]).t.94JbM3);
    let obj5 = require(dependencyMap[11]);
    const result1 = obj5.isAutomodNotification(message);
    let tmp16 = stringResult;
    let tmp17 = null;
    if (result1) {
      let obj6 = require(dependencyMap[11]);
      let resolvedReason = obj6.extractAutomodNotificationFields(message);
      const notificationType = resolvedReason.notificationType;
      if (require(dependencyMap[11]).IS_BACKWARDS_COMPAT_RAID_TYPE !== notificationType) {
        let id = require;
        id = dependencyMap;
        if (require(dependencyMap[14]).AutomodNotificationEmbedTypeKeys.RAID !== notificationType) {
          id = require;
          id = dependencyMap;
          if (require(dependencyMap[14]).AutomodNotificationEmbedTypeKeys.MENTION_RAID === notificationType) {
            obj = {};
            let fromNowResult;
            if (null != resolvedReason.raidDatetime) {
              fromNowResult = importDefault(dependencyMap[15])(resolvedReason.raidDatetime).fromNow();
              const obj18 = importDefault(dependencyMap[15])(resolvedReason.raidDatetime);
            }
            obj.subtitleLeft = fromNowResult;
            const intl5 = require(dependencyMap[13]).intl;
            obj.header = intl5.string(require(dependencyMap[13]).t.C2uIXE);
            const internal3 = importDefault(dependencyMap[9]).internal;
            obj.headerColor = require(dependencyMap[10]).processColorOrThrow(internal3.resolveSemanticColor(theme, importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_CRITICAL));
            const obj19 = require(dependencyMap[10]);
            obj.headerIconURL = closure_4.resolveAssetSource(require(dependencyMap[18]).makeSource(importDefault(dependencyMap[20]))).uri;
            const obj20 = require(dependencyMap[18]);
            const internal4 = importDefault(dependencyMap[9]).internal;
            obj.headerIconColor = require(dependencyMap[10]).processColorOrThrow(internal4.resolveSemanticColor(theme, importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_CRITICAL));
            const intl6 = require(dependencyMap[13]).intl;
            obj.body = intl6.string(require(dependencyMap[13]).t.SWIWEV);
            obj.shouldShowActions = false;
            str = "";
            tmp16 = stringResult;
            tmp17 = obj;
            const obj21 = require(dependencyMap[10]);
          } else {
            id = require;
            id = dependencyMap;
            if (require(dependencyMap[14]).AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === notificationType) {
              let obj7 = require(dependencyMap[11]);
              const userIdOfAutomodAction = obj7.getUserIdOfAutomodAction(message);
              const user = user.getUser(userIdOfAutomodAction);
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
              let obj8 = require(dependencyMap[21]);
              let avatar;
              if (null != member) {
                avatar = member.avatar;
              }
              if (null != avatar) {
                if (null != guildId) {
                  let obj9 = require(dependencyMap[18]);
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
                const intl2 = require(dependencyMap[13]).intl;
                obj1.header = intl2.string(require(dependencyMap[13]).t.lVLiFp);
                let obj12 = require(dependencyMap[10]);
                const internal = importDefault(dependencyMap[9]).internal;
                obj1.headerColor = obj12.processColorOrThrow(internal.resolveSemanticColor(theme, importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_POSITIVE));
                let obj13 = require(dependencyMap[18]);
                obj1.headerIconURL = closure_4.resolveAssetSource(obj13.makeSource(importDefault(dependencyMap[22]))).uri;
                let obj14 = require(dependencyMap[10]);
                const internal2 = importDefault(dependencyMap[9]).internal;
                obj1.headerIconColor = obj14.processColorOrThrow(internal2.resolveSemanticColor(theme, importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_POSITIVE));
                const intl3 = require(dependencyMap[13]).intl;
                obj1.body = intl3.string(require(dependencyMap[13]).t.QV/8u5);
                obj1.shouldShowActions = false;
                const ensureAvatarSourceResult = obj8.ensureAvatarSource(guildMemberAvatarSource);
                obj1.subtitleRight = importDefault(dependencyMap[15])(message.timestamp).fromNow();
                const intl4 = require(dependencyMap[13]).intl;
                obj1.subtitleLeft = intl4.string(require(dependencyMap[13]).t.qlFrXW);
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
                const obj16 = importDefault(dependencyMap[15])(message.timestamp);
              }
              guildMemberAvatarSource = author.getAvatarSource(undefined, false, 16);
            } else {
              const obj2 = {};
              id = require;
              id = dependencyMap;
              const intl17 = require(dependencyMap[13]).intl;
              obj2.header = intl17.string(require(dependencyMap[13]).t.VdZCcC);
              id = importDefault;
              const internal7 = importDefault(dependencyMap[9]).internal;
              obj2.headerColor = require(dependencyMap[10]).processColorOrThrow(internal7.resolveSemanticColor(theme, importDefault(dependencyMap[9]).colors.TEXT_SUBTLE));
              id = closure_4;
              const obj49 = require(dependencyMap[10]);
              obj2.headerIconURL = closure_4.resolveAssetSource(require(dependencyMap[18]).makeSource(importDefault(dependencyMap[20]))).uri;
              const obj50 = require(dependencyMap[18]);
              const internal8 = importDefault(dependencyMap[9]).internal;
              obj2.headerIconColor = require(dependencyMap[10]).processColorOrThrow(internal8.resolveSemanticColor(theme, importDefault(dependencyMap[9]).colors.TEXT_SUBTLE));
              const intl18 = require(dependencyMap[13]).intl;
              obj2.body = intl18.string(require(dependencyMap[13]).t.NxHYX/);
              obj2.shouldShowActions = false;
              str = "";
              tmp16 = stringResult;
              tmp17 = obj2;
              const obj51 = require(dependencyMap[10]);
            }
          }
        }
      }
      let fromNowResult1;
      if (null != resolvedReason.raidDatetime) {
        fromNowResult1 = importDefault(dependencyMap[15])(resolvedReason.raidDatetime).fromNow();
        const obj22 = importDefault(dependencyMap[15])(resolvedReason.raidDatetime);
      }
      const tmp56 = resolvedReason.raidType === require(dependencyMap[16]).AutomodRaidAlertTypes.DM_RAID;
      let str2 = "";
      if (null != resolvedReason.raidDatetime) {
        const _Date = Date;
        const date = new Date(resolvedReason.raidDatetime);
        str2 = date.toLocaleString(require(dependencyMap[13]).intl.currentLocale, require(dependencyMap[17]).DATE_CONFIG);
      }
      const intl7 = require(dependencyMap[13]).intl;
      const formatToPlainString = intl7.formatToPlainString;
      const t = require(dependencyMap[13]).t;
      if (tmp56) {
        obj3 = { dmsSent: resolvedReason.dmsSent };
        let formatToPlainStringResult = formatToPlainString(t.5C8Mh3, obj3);
      } else {
        obj4 = { joinCount: resolvedReason.joinAttempts };
        formatToPlainStringResult = formatToPlainString(t.4ylIiu, obj4);
      }
      obj5 = { subtitleLeft: formatToPlainStringResult, severity: formatToPlainStringResult, subtitleRight: fromNowResult1, startTime: fromNowResult1 };
      const intl8 = require(dependencyMap[13]).intl;
      const string = intl8.string;
      const t2 = require(dependencyMap[13]).t;
      if (tmp56) {
        let stringResult1 = string(t2.8+lHUb);
      } else {
        stringResult1 = string(t2.xMwcwV);
      }
      obj5.header = stringResult1;
      let num19 = 10;
      let tmp71 = importDefault;
      let num20 = 9;
      const internal5 = importDefault(dependencyMap[9]).internal;
      obj5.headerColor = require(dependencyMap[10]).processColorOrThrow(internal5.resolveSemanticColor(theme, importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_CRITICAL));
      let intl9 = closure_4;
      let resolveAssetSource = closure_4.resolveAssetSource;
      let internal6 = require(dependencyMap[18]);
      let intl10 = internal6.makeSource;
      if (tmp56) {
        let tmp73 = tmp72[19];
      } else {
        tmp73 = tmp72[20];
      }
      obj5.headerIconURL = resolveAssetSource(intl10(tmp71(tmp73))).uri;
      const obj27 = require(dependencyMap[10]);
      tmp71 = importDefault;
      internal6 = importDefault(dependencyMap[num20]).internal;
      obj5.headerIconColor = require(dependencyMap[num19]).processColorOrThrow(internal6.resolveSemanticColor(theme, importDefault(dependencyMap[num20]).colors.TEXT_FEEDBACK_CRITICAL));
      intl10 = require(dependencyMap[13]).intl;
      obj6 = { dateTime: str2 };
      obj5.body = intl10.formatToPlainString(require(dependencyMap[13]).t.4QIIZl, obj6);
      obj5.shouldShowActions = true;
      intl9 = require(dependencyMap[13]).intl;
      num19 = intl9.string;
      num20 = require(dependencyMap[13]).t.ufawcw;
      num19(num20);
      resolveAssetSource = require(dependencyMap[11]);
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
          roleIcon = require(dependencyMap[23]).getRoleIcon(obj7);
          const obj32 = require(dependencyMap[23]);
        }
      }
      obj8 = {};
      const merged = Object.assign(importDefault(dependencyMap[24])(message));
      obj8["roleIcon"] = roleIcon;
      obj8["authorId"] = author.id;
      const intl11 = require(dependencyMap[13]).intl;
      obj8["username"] = intl11.string(require(dependencyMap[13]).t.hG1StD);
      const obj35 = require(dependencyMap[21]);
      const obj36 = require(dependencyMap[18]);
      obj8["avatarURL"] = obj35.ensureAvatarSource(obj36.makeSource(require(dependencyMap[21]).getAutomodAvatarURL())).uri;
      let tmp98;
      if (null != colorString) {
        tmp98 = colorString;
      }
      obj8["colorString"] = callback(tmp98);
      obj9 = { headerText: str };
      id = dependencyMap;
      const intl12 = require(dependencyMap[13]).intl;
      obj9.headerBadgeText = intl12.string(require(dependencyMap[13]).t.70CJbT);
      let str8 = "";
      if (null != keyword) {
        id = require;
        id = dependencyMap;
        const intl13 = require(dependencyMap[13]).intl;
        const obj10 = { keyword };
        str8 = intl13.formatToPlainString(require(dependencyMap[13]).t.SYIUTR, obj10);
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
            id = require(dependencyMap[25]).computeChannelName(embedChannel, user, closure_8);
            const obj41 = require(dependencyMap[25]);
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
      const obj37 = require(dependencyMap[21]);
      const tmp97 = callback;
      obj11.communicationDisabled = require(dependencyMap[26]).isMemberCommunicationDisabled(member1);
      const obj42 = require(dependencyMap[26]);
      obj11.timestamp = require(dependencyMap[27]).accessibilityLabelCalendarFormat(message.timestamp);
      obj9.message = obj11;
      obj9.notification = tmp17;
      const intl14 = require(dependencyMap[13]).intl;
      obj12 = { ruleName };
      obj9.ruleDisplayText = intl14.formatToPlainString(require(dependencyMap[13]).t.ZoOyKB, obj12);
      id = null;
      if (null != quarantineType) {
        id = require;
        id = dependencyMap;
        const intl15 = require(dependencyMap[13]).intl;
        obj13 = { reason: require(dependencyMap[11]).getQuarantineReasonString(quarantineType) };
        id = intl15.formatToPlainString(require(dependencyMap[13]).t.26bB2M, obj13);
        const obj46 = require(dependencyMap[11]);
      }
      obj9.reasonDisplayText = id;
      id = require;
      id = dependencyMap;
      id = closure_4;
      const obj43 = require(dependencyMap[27]);
      id = dependencyMap;
      id = importDefault;
      if (result1) {
        id = id[28];
      } else {
        id = id[29];
      }
      obj9.actionsIconURL = closure_4.resolveAssetSource(require(dependencyMap[18]).makeSource(id(id))).uri;
      id = require;
      id = dependencyMap;
      const intl16 = require(dependencyMap[13]).intl;
      const string2 = intl16.string;
      const t3 = require(dependencyMap[13]).t;
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
      require(dependencyMap[21]);
      if (null == guildMemberAvatar) {
        let avatarSource = author.getAvatarSource(undefined);
        const uri = tmp83(avatarSource).uri;
      }
      obj14 = { userId: author.id, avatar: guildMemberAvatar, guildId };
      avatarSource = require(dependencyMap[18]).getGuildMemberAvatarSource(obj14, author);
      const obj30 = require(dependencyMap[18]);
    }
    const canResult = closure_7.can(Permissions.VIEW_CHANNEL, embedChannel);
  } else {
    id = null;
    return null;
  }
};
