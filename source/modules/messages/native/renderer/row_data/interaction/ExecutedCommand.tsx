// Module ID: 7910
// Function ID: 62927
// Name: getCommandUserAvatar
// Dependencies: []
// Exports: createExecutedCommand

// Module 7910 (getCommandUserAvatar)
function getCommandUserAvatar(interaction, getGuildId) {
  let guildId;
  let guildMemberAvatar;
  let user;
  interaction = interaction.interaction;
  user = undefined;
  if (null != interaction) {
    user = interaction.user;
  }
  let id;
  if (null != user) {
    id = user.id;
  }
  const user1 = user.getUser(id);
  if (null != user1) {
    let channel = getGuildId;
    if (null == getGuildId) {
      channel = channel.getChannel(interaction.getChannelId());
    }
    let obj = { user: user1, guildMemberAvatar: require(dependencyMap[7]).getUserAuthor(user1, channel).guildMemberAvatar };
    guildId = undefined;
    if (null != getGuildId) {
      guildId = getGuildId.getGuildId();
    }
    obj.guildId = guildId;
    ({ user, guildMemberAvatar, guildId } = obj);
    require(dependencyMap[5]);
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        obj = { userId: user.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = importDefault(dependencyMap[6]).getGuildMemberAvatarSource(obj, user);
        const obj3 = importDefault(dependencyMap[6]);
      }
      return tmp13(guildMemberAvatarSource).uri;
    }
    guildMemberAvatarSource = user.getAvatarSource(undefined);
    const obj2 = require(dependencyMap[7]);
  }
}
const processColor = require(dependencyMap[0]).processColor;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const MessageTypes = require(dependencyMap[4]).MessageTypes;
const _module = require(dependencyMap[16]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx");

export const createExecutedCommand = function createExecutedCommand(message, channel, roleStyle, forcedTheme, defaultUsernameColor) {
  let tmp = null != message.activityInstance;
  if (tmp) {
    tmp = undefined !== message.activityInstance;
  }
  if (null != message.interaction) {
    let tmp5 = message.type === MessageTypes.CHAT_INPUT_COMMAND;
    if (!tmp5) {
      tmp5 = message.type === MessageTypes.INTERACTION_PREMIUM_UPSELL;
    }
    let obj = require(dependencyMap[8]);
    const result = obj.isPrimaryEntryPointCommandMessage(message);
    let obj1 = require(dependencyMap[7]);
    const userAuthor = obj1.getUserAuthor(message.interaction.user, channel);
    const colorString = userAuthor.colorString;
    const displayName = message.interaction.displayName;
    const internal = importDefault(dependencyMap[9]).internal;
    const semanticColor = internal.resolveSemanticColor(forcedTheme, importDefault(dependencyMap[9]).colors.MENTION_BACKGROUND);
    let obj2 = require(dependencyMap[10]);
    const initialInteractionMetadata = obj2.getInitialInteractionMetadata(message);
    let type;
    if (null != initialInteractionMetadata) {
      type = initialInteractionMetadata.type;
    }
    let tmp18 = null;
    if (type === require(dependencyMap[11]).InteractionTypes.APPLICATION_COMMAND) {
      tmp18 = null;
      if (null != initialInteractionMetadata.target_user) {
        const prototype = ctor.prototype;
        tmp18 = new ctor(initialInteractionMetadata.target_user);
      }
    }
    let obj3 = require(dependencyMap[7]);
    const userAuthor1 = obj3.getUserAuthor(tmp18, channel);
    const colorString2 = userAuthor1.colorString;
    let tmp27 = defaultUsernameColor;
    if ("username" === roleStyle) {
      let tmp29;
      if (null != colorString2) {
        tmp29 = colorString2;
      }
      const tmp28Result = processColor(tmp29);
      tmp27 = defaultUsernameColor;
      if (null != tmp28Result) {
        tmp27 = tmp28Result;
      }
      const tmp28 = processColor;
    }
    let tmp31 = defaultUsernameColor;
    if ("username" === roleStyle) {
      let tmp33;
      if (null != colorString) {
        tmp33 = colorString;
      }
      const tmp32Result = processColor(tmp33);
      tmp31 = defaultUsernameColor;
      if (null != tmp32Result) {
        tmp31 = tmp32Result;
      }
      const tmp32 = processColor;
    }
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let id = message.interaction.user.id;
    let obj4 = require(dependencyMap[12]);
    const result1 = obj4.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
    let obj5 = require(dependencyMap[12]);
    id = undefined;
    if (null != tmp18) {
      id = tmp18.id;
    }
    let processColorStringsResult = null;
    const result2 = obj5.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
    if (result1) {
      let obj6 = require(dependencyMap[12]);
      processColorStringsResult = obj6.processColorStrings(userAuthor.colorStrings);
    }
    let processColorStringsResult1 = null;
    if (result2) {
      let obj7 = require(dependencyMap[12]);
      processColorStringsResult1 = obj7.processColorStrings(userAuthor1.colorStrings);
    }
    obj = {};
    let obj9 = require(dependencyMap[7]);
    obj.username = obj9.getUserAuthor(message.interaction.user, channel).nick;
    obj = { "Bool(false)": null, "Bool(false)": "0e96bcd2b2f1118c31b249938bd6d191", userId: id, messageChannelId: message.channel_id, linkColor: tmp31 };
    let tmp51;
    if (null != colorString) {
      tmp51 = colorString;
    }
    const tmp50Result = processColor(tmp51);
    let tmp53 = null;
    if (null != tmp50Result) {
      tmp53 = tmp50Result;
    }
    obj.roleColor = tmp53;
    obj.roleColors = processColorStringsResult;
    let tmp54 = "dot" === roleStyle;
    let tmp55 = tmp54;
    if (tmp54) {
      tmp55 = null != colorString;
    }
    obj.shouldShowRoleDot = tmp55;
    obj.usernameOnClick = obj;
    if (tmp) {
      if (!result) {
        const result3 = require(dependencyMap[13]).isActivitiesInTextEnabled(channel);
        const intl = require(dependencyMap[14]).intl;
        const formatToParts = intl.formatToParts;
        const t = require(dependencyMap[14]).t;
        if (result3) {
          obj1 = {};
          const merged = Object.assign(obj);
          obj2 = { action: "bindTapActivityText", applicationUserId: message.author.id, messageChannelId: message.channel_id };
          obj1["activityTextOnClick"] = obj2;
          let formatToPartsResult = formatToParts(t.R/mrBi, obj1);
        } else {
          obj3 = {};
          const merged1 = Object.assign(obj);
          formatToPartsResult = formatToParts(t.k964Wm, obj3);
        }
        const obj12 = require(dependencyMap[13]);
      }
      obj4 = { userId: message.interaction.user.id, username: obj.username, usernameColor: tmp31, avatarURL: tmp3, targetUsernameColor: tmp27, content: formatToPartsResult };
      obj5 = { PIN_PERMISSION_MIGRATION_COMPLETE: "isArray", clearCommunicationDisabledNotice: "resolve", fetchCollectiblesCategories: "title", color: processColor(semanticColor) };
      obj4.commandNameBackgroundStyles = obj5;
      obj4.showAppsIcon = true;
      return obj4;
    }
    let result4 = displayName;
    if (result) {
      result4 = require(dependencyMap[15]).formatPrimaryEntryPointCommandName(displayName);
      const obj16 = require(dependencyMap[15]);
    }
    const intl2 = require(dependencyMap[14]).intl;
    obj6 = {};
    const merged2 = Object.assign(obj);
    obj6["commandName"] = result4;
    if (null == channel) {
      obj7 = {};
    } else {
      const obj8 = { "Bool(false)": null, "Bool(false)": null, userId: message.interaction.user.id, messageId: message.id, applicationUserId: message.author.id };
      ({ type: obj19.messageType, channel_id: obj19.messageChannelId } = message);
      obj7 = obj8;
    }
    obj6["commandNameOnClick"] = obj7;
    formatToPartsResult = intl2.formatToParts(require(dependencyMap[14]).t.SSrolr, obj6);
    if (null != tmp18) {
      const intl3 = require(dependencyMap[14]).intl;
      obj9 = {};
      const merged3 = Object.assign(obj);
      obj9["commandName"] = result4;
      obj9["commandNameOnClick"] = {};
      obj9["targetUsername"] = require(dependencyMap[7]).getUserAuthor(tmp18, channel).nick;
      const obj10 = { "Bool(false)": null, "Bool(false)": null };
      let id1;
      if (null != tmp18) {
        id1 = tmp18.id;
      }
      obj10.userId = id1;
      obj10.messageChannelId = message.channel_id;
      obj10.linkColor = tmp27;
      let tmp78;
      if (null != colorString2) {
        tmp78 = colorString2;
      }
      const tmp77Result = processColor(tmp78);
      let tmp80 = null;
      if (null != tmp77Result) {
        tmp80 = tmp77Result;
      }
      obj10.roleColor = tmp80;
      obj10.roleColors = processColorStringsResult1;
      if (tmp54) {
        tmp54 = null != colorString2;
      }
      obj10.shouldShowRoleDot = tmp54;
      obj9["targetUsernameOnClick"] = obj10;
      formatToPartsResult = intl3.formatToParts(require(dependencyMap[14]).t.mqKdCM, obj9);
      const obj23 = require(dependencyMap[7]);
      const tmp77 = processColor;
    }
    const tmp3 = getCommandUserAvatar(message, channel);
    const tmp50 = processColor;
  }
};
