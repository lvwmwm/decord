// Module ID: 9465
// Function ID: 73752
// Name: resolveVoiceChannelListInviteEmbedData
// Dependencies: []
// Exports: canShowVoiceChannelListInviteEmbed, createVoiceChannelListInviteEmbed

// Module 9465 (resolveVoiceChannelListInviteEmbedData)
function resolveVoiceChannelListInviteEmbedData(guild) {
  if (null == guild.guild) {
    return null;
  } else {
    guild = guild.getGuild(guild.guild.id);
    if (null == guild) {
      return null;
    } else {
      let channel = importDefault(dependencyMap[15])(guild).channel;
      if (null != channel) {
        if (channel.isGuildVocal()) {
          channel = channel.getChannel(channel.id);
          let tmp6 = null;
          if (closure_10.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
            const obj = { guild, channel };
            tmp6 = obj;
          }
          return tmp6;
        }
      }
      return null;
    }
  }
}
const processColor = require(dependencyMap[0]).processColor;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const getGuildIconSource = require(dependencyMap[3]).getGuildIconSource;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const CodedLinkExtendedType = require(dependencyMap[12]).CodedLinkExtendedType;
const BasicPermissions = require(dependencyMap[13]).BasicPermissions;
const InviteTypes = require(dependencyMap[14]).InviteTypes;
const _module = require(dependencyMap[24]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx");

export const canShowVoiceChannelListInviteEmbed = function canShowVoiceChannelListInviteEmbed(invite) {
  return null != resolveVoiceChannelListInviteEmbedData(invite);
};
export const createVoiceChannelListInviteEmbed = function createVoiceChannelListInviteEmbed(invite, theme) {
  let baseColors;
  let colors;
  const tmp = resolveVoiceChannelListInviteEmbedData(invite);
  if (null == tmp) {
    return null;
  } else {
    const guild = tmp.guild;
    const require = guild;
    const channel = tmp.channel;
    ({ colors, baseColors } = importDefault(dependencyMap[16])(theme));
    let assetUriForEmbed;
    if (null != guild.icon) {
      let obj = require(dependencyMap[17]);
      assetUriForEmbed = obj.getAssetUriForEmbed(getGuildIconSource(guild, 128, false));
    }
    const voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(channel.id, guild.id);
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(voiceStatesForChannelAlt.filter((voiceState) => voiceState.voiceState.selfStream), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(voiceStatesForChannelAlt.filter((voiceState) => !voiceState.voiceState.selfStream), arraySpreadResult);
    const substr = items.slice(0, 10);
    const importDefault = closure_4.displayNameStylesEnabled;
    const mapped = substr.map((member) => {
      member = member.member;
      if (null == member) {
        member = member.getMember(guild.id, member.user.id);
      }
      let avatar;
      if (null != member) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        let obj = { guildId: guild.id, userId: member.user.id, avatar: member.avatar, size: 24 };
        let guildMemberAvatarURLSimple = displayNameStylesEnabled(closure_2[18]).getGuildMemberAvatarURLSimple(obj);
        const obj2 = displayNameStylesEnabled(closure_2[18]);
      } else {
        obj = displayNameStylesEnabled(closure_2[18]);
        guildMemberAvatarURLSimple = obj.getUserAvatarURL(member.user, false, 24);
      }
      let assetUriForEmbed = guildMemberAvatarURLSimple;
      if ("number" === typeof guildMemberAvatarURLSimple) {
        assetUriForEmbed = guild(closure_2[17]).getAssetUriForEmbed(guildMemberAvatarURLSimple);
        const obj4 = guild(closure_2[17]);
      }
      let tmp13;
      if (displayNameStylesEnabled) {
        let fontId;
        if (null != member) {
          const displayNameStyles = member.displayNameStyles;
          if (null != displayNameStyles) {
            fontId = displayNameStyles.fontId;
          }
        }
        if (null == fontId) {
          const displayNameStyles2 = member.user.displayNameStyles;
          let fontId1;
          if (null != displayNameStyles2) {
            fontId1 = displayNameStyles2.fontId;
          }
          fontId = fontId1;
        }
        tmp13 = fontId;
      }
      obj = { userId: member.user.id };
      let nick = member.nick;
      if (null == nick) {
        nick = displayNameStylesEnabled(closure_2[19]).getName(member.user);
        const obj6 = displayNameStylesEnabled(closure_2[19]);
      }
      obj.displayName = nick;
      obj.avatarUrl = assetUriForEmbed;
      const selfStream = member.voiceState.selfStream;
      obj.isStreaming = null != selfStream && selfStream;
      obj.fontId = tmp13;
      return obj;
    });
    const startTime = startTime.getStartTime(channel);
    let tmp15;
    if (null != startTime) {
      tmp15 = startTime;
    }
    obj = {};
    const currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(guild.id);
    const merged = Object.assign(baseColors);
    const tmp21 = processColor;
    const tmp40 = importDefault(dependencyMap[16])(theme);
    const embedScrollGradientBackground = require(dependencyMap[20]).getEmbedScrollGradientBackground();
    let tmp25;
    if (null != embedScrollGradientBackground) {
      tmp25 = embedScrollGradientBackground;
    }
    let backgroundColor = tmp21(tmp25);
    if (null == backgroundColor) {
      backgroundColor = baseColors.backgroundColor;
    }
    obj["backgroundColor"] = backgroundColor;
    obj["extendedType"] = CodedLinkExtendedType.VOICE_CHANNEL_LIST_INVITE;
    obj["headerColor"] = colors.headerColor;
    obj["guildName"] = guild.name;
    obj["guildIcon"] = assetUriForEmbed;
    obj["headerText"] = "";
    const obj3 = require(dependencyMap[20]);
    obj["titleText"] = require(dependencyMap[21]).computeChannelName(channel, closure_12, closure_11);
    obj["titleColor"] = voiceStatesForChannelAlt.length > 0 ? colors.voiceActiveColor : colors.voiceMutedColor;
    const intl = require(dependencyMap[22]).intl;
    obj["acceptLabelText"] = intl.string(require(dependencyMap[22]).t.gpqgah);
    obj["acceptLabelColor"] = colors.acceptLabelGreenColor;
    obj["acceptLabelBackgroundColor"] = colors.acceptLabelGreenBackgroundColor;
    const obj4 = require(dependencyMap[21]);
    const items1 = [closure_8];
    obj["canBeAccepted"] = importDefault(dependencyMap[23]).canAcceptInvite(items1, invite);
    obj["embedCanBeTapped"] = true;
    obj["type"] = InviteTypes.GUILD;
    obj["voiceUsers"] = mapped;
    obj["voiceStartTimestamp"] = tmp15;
    const intl2 = require(dependencyMap[22]).intl;
    obj["emptyStateText"] = intl2.string(require(dependencyMap[22]).t.zSqdrS);
    const intl3 = require(dependencyMap[22]).intl;
    const obj5 = importDefault(dependencyMap[23]);
    obj["streamingLabel"] = intl3.string(require(dependencyMap[22]).t.dI3q4h).toUpperCase();
    obj["voiceHeaderBackgroundColor"] = colors.voiceHeaderBackgroundColor;
    obj["reducedMotion"] = closure_4.useReducedMotion;
    obj["isConnected"] = currentClientVoiceChannelId === channel.id;
    const intl4 = require(dependencyMap[22]).intl;
    obj["privacyHintText"] = intl4.string(require(dependencyMap[22]).t.fkg9mQ);
    return obj;
  }
};
