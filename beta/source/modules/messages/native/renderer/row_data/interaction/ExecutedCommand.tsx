// Module ID: 13495
// Function ID: 13496
// Name: ExecutedCommand
// Dependencies: [17, 1390, 2045, 1376, 1078, 1404, 1401, 4990, 11741, 580, 7768, 1982, 8224, 8226, 9596, 1119, 9401, 2]
// Exports: createExecutedCommand

// Module 13495 (ExecutedCommand)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 580 */;
import Constants from "Constants" /* 1078 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1404 */;
import Server from "Server" /* 1982 */;
import useMessageAuthor from "useMessageAuthor" /* 4990 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7768 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8224 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 8226 */;
import ApplicationInteractionInfoUtils from "ApplicationInteractionInfoUtils" /* 11741 */;
import UserRecord from "UserRecord" /* 1390 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1376 */;
import size from "module_2" /* 2 */;

const processColor = _mod17.processColor;
const MessageTypes = Constants.MessageTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx");

export const createExecutedCommand = function createExecutedCommand(message, channel, roleStyle, forcedTheme, defaultUsernameColor) {
  let tmp = null != message.activityInstance;
  if (tmp) {
    tmp = undefined !== message.activityInstance;
  }
  if (null != message.interaction) {
    const interaction = message.interaction;
    let user1;
    if (interaction != null) {
      user1 = interaction.user;
    }
    let id1;
    if (user1 != null) {
      id1 = user1.id;
    }
    const user2 = UserStore.getUser(id1);
    if (null == user2) {
      const result = ApplicationInteractionInfoUtils.isPrimaryEntryPointCommandMessage(message);
      const tmp14 = message.type === MessageTypes.CHAT_INPUT_COMMAND || message.type === tmp13.INTERACTION_PREMIUM_UPSELL;
      const userAuthor = useMessageAuthor.getUserAuthor(message.interaction.user, channel);
      const colorString = userAuthor.colorString;
      const displayName = message.interaction.displayName;
      const internal = nativeDefault.internal;
      const semanticColor = internal.resolveSemanticColor(forcedTheme, nativeDefault.colors.MENTION_BACKGROUND);
      const initialInteractionMetadata = ApplicationCommandUtils.getInitialInteractionMetadata(message);
      let type;
      if (initialInteractionMetadata != null) {
        type = initialInteractionMetadata.type;
      }
      let tmp24 = null;
      if (type === Server.InteractionTypes.APPLICATION_COMMAND) {
        tmp24 = null;
        if (null != initialInteractionMetadata.target_user) {
          tmp24 = new UserRecord(initialInteractionMetadata.target_user);
        }
      }
      const userAuthor1 = useMessageAuthor.getUserAuthor(tmp24, channel);
      const colorString2 = userAuthor1.colorString;
      let tmp33 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp34Result = processColor(colorString2);
        if (tmp34Result == null) {
          tmp34Result = defaultUsernameColor;
        }
        tmp33 = tmp34Result;
      }
      let tmp37 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp38Result = processColor(colorString);
        if (tmp38Result == null) {
          tmp38Result = defaultUsernameColor;
        }
        tmp37 = tmp38Result;
      }
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const id = message.interaction.user.id;
      const tmp16Result = useMessageAuthor;
      const result1 = enhanced_role_colors_EnhancedRoleColorUtils.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
      const tmp16Result11 = enhanced_role_colors_EnhancedRoleColorUtils;
      let id2;
      if (tmp24 != null) {
        id2 = tmp24.id;
      }
      let processColorStringsResult = null;
      const result2 = enhanced_role_colors_EnhancedRoleColorUtils.isNativeMessageEligibleForEnhancedRoleColors(guildId, id2);
      if (result1) {
        processColorStringsResult = tmp16(8224).processColorStrings(userAuthor.colorStrings);
        const tmp16Result13 = tmp16(8224);
      }
      let processColorStringsResult1 = null;
      if (result2) {
        processColorStringsResult1 = tmp16(8224).processColorStrings(userAuthor1.colorStrings);
        const tmp16Result14 = tmp16(8224);
      }
      let user = obj.getUser(id);
      if (user == null) {
        user = message.interaction.user;
      }
      const tmp16Result12 = enhanced_role_colors_EnhancedRoleColorUtils;
      const displayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user, guildId);
      if (null != tmp24) {
        let user3 = obj.getUser(tmp24.id);
        if (user3 == null) {
          user3 = tmp24;
        }
        const displayNameFontIdForMobileUser1 = tmp16(8226).getDisplayNameFontIdForMobileUser(user3, guildId);
        const tmp16Result16 = tmp16(8226);
      }
      const obj2 = { username: null, usernameOnClick: null };
      const tmp16Result15 = createDisplayNameStylesMobile;
      obj2.username = useMessageAuthor.getUserAuthor(message.interaction.user, channel).nick;
      const obj3 = { name: "usernameOnClick", action: "bindUserMenu", userId: id, messageChannelId: message.channel_id, linkColor: tmp37, roleColor: null, roleColors: null, shouldShowRoleDot: null, fontId: null };
      let tmp51Result = tmp51(colorString);
      if (tmp51Result == null) {
        tmp51Result = null;
      }
      obj3.roleColor = tmp51Result;
      obj3.roleColors = processColorStringsResult;
      let tmp54 = "dot" === roleStyle;
      let tmp55 = tmp54;
      if (tmp54) {
        tmp55 = null != colorString;
      }
      obj3.shouldShowRoleDot = tmp55;
      obj3.fontId = displayNameFontIdForMobileUser;
      obj2.usernameOnClick = obj3;
      if (tmp) {
        if (!result) {
          const result3 = tmp16(9596).isActivitiesInTextEnabled(channel);
          const intl = tmp16(1119).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp16(1119).t;
          if (result3) {
            const obj9 = {};
            const merged = Object.assign(obj2);
            const obj10 = { action: "bindTapActivityText", applicationUserId: message.author.id, messageChannelId: message.channel_id };
            obj9.activityTextOnClick = obj10;
            let formatToPartsResult = formatToParts(t["R/mrBi"], obj9);
          } else {
            const obj11 = {};
            const merged1 = Object.assign(obj2);
            formatToPartsResult = formatToParts(t.k964Wm, obj11);
          }
          const tmp16Result18 = tmp16(9596);
        }
        const obj12 = { userId: message.interaction.user.id, username: obj2.username, usernameColor: tmp37, avatarURL: undefined, targetUsernameColor: tmp33, content: formatToPartsResult, commandNameBackgroundStyles: null, showAppsIcon: true };
        const obj13 = { color: tmp51(semanticColor), borderRadius: 4, spaceAround: true };
        obj12.commandNameBackgroundStyles = obj13;
        return obj12;
      }
      let result4 = displayName;
      if (result) {
        result4 = tmp16(9401).formatPrimaryEntryPointCommandName(displayName);
        const tmp16Result19 = tmp16(9401);
      }
      const intl2 = tmp16(1119).intl;
      const obj14 = {};
      const merged2 = Object.assign(obj2);
      obj14.commandName = result4;
      if (null == channel) {
        let obj15 = {};
      } else {
        const obj16 = { name: "commandNameOnClick", action: "bindTapCommandName", userId: message.interaction.user.id, messageId: message.id, applicationUserId: message.author.id, messageType: null, messageChannelId: null };
        ({ type: obj26.messageType, channel_id: obj26.messageChannelId } = message);
        obj15 = obj16;
      }
      obj14.commandNameOnClick = obj15;
      formatToPartsResult = intl2.formatToParts(tmp16(1119).t.SSrolr, obj14);
      if (null != tmp24) {
        const intl3 = tmp16(1119).intl;
        const obj17 = {};
        const merged3 = Object.assign(obj2);
        obj17.commandName = result4;
        obj17.commandNameOnClick = {};
        obj17.targetUsername = tmp16(4990).getUserAuthor(tmp24, channel).nick;
        let id3;
        if (tmp24 != null) {
          id3 = tmp24.id;
        }
        const obj18 = { name: "targetUsernameOnClick", action: "bindUserMenu", userId: id3, messageChannelId: message.channel_id, linkColor: tmp33, roleColor: null, roleColors: null, shouldShowRoleDot: null, fontId: null };
        let tmp51Result2 = tmp51(colorString2);
        if (tmp51Result2 == null) {
          tmp51Result2 = null;
        }
        obj18.roleColor = tmp51Result2;
        obj18.roleColors = processColorStringsResult1;
        if (tmp54) {
          tmp54 = null != colorString2;
        }
        obj18.shouldShowRoleDot = tmp54;
        obj18.fontId = displayNameFontIdForMobileUser1;
        obj17.targetUsernameOnClick = obj18;
        formatToPartsResult = intl3.formatToParts(tmp16(1119).t.mqKdCM, obj17);
        const tmp16Result20 = tmp16(4990);
      }
      const tmp16Result17 = useMessageAuthor;
    } else {
      if (channel == null) {
        channel = ChannelStore.getChannel(message.getChannelId());
      }
      let obj19 = dependencyMap;
      const guildMemberAvatar = useMessageAuthor.getUserAuthor(user2, channel).guildMemberAvatar;
      let guildId1;
      if (channel != null) {
        guildId1 = channel.getGuildId();
      }
      utils_AvatarUtils;
      if (null == guildMemberAvatar) {
        let avatarSource = user2.getAvatarSource(undefined);
        const uri = tmp10(avatarSource).uri;
      }
      obj19 = { userId: user2.id, avatar: guildMemberAvatar, guildId: guildId1 };
      avatarSource = AvatarUtilsDefault.getGuildMemberAvatarSource(obj19, user2);
    }
  }
};
