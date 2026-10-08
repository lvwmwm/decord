// Module ID: 13345
// Function ID: 13346
// Name: invite/GuildInvite
// Dependencies: [17, 2082, 5893, 2063, 2124, 2086, 5071, 4717, 1389, 9567, 1085, 7418, 7861, 1126, 7723, 587, 4922, 4929, 11414, 11415, 2078, 2127, 7863, 12503, 12502, 9569, 9568, 13346, 1402, 8486, 1414, 1897, 8134, 8842, 5417, 2]
// Exports: createDisabledGuildInvite, createErroredGuildInvite, createExpiredGuildInvite, createGuildInvite, createResolvingGuildInvite

// Module 13345 (invite/GuildInvite)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import react_nativeDefault from "react-native" /* 1897 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2078 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import shared from "shared" /* 4929 */;
import useChannelName from "useChannelName" /* 5417 */;
import react_native2 from "react-native" /* 7723 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7861 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7863 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8134 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8486 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 8842 */;
import CodedLinksConstants from "CodedLinksConstants" /* 9567 */;
import GuestUtilsDefault from "GuestUtils" /* 9569 */;
import InviteErrorUtils from "InviteErrorUtils" /* 12502 */;
import AssetRegistryDefault from "AssetRegistry" /* 12503 */;
import getHeaderTextForInvite2 from "getHeaderTextForInvite" /* 13346 */;
import GuildRecord from "GuildRecord" /* 2082 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import InviteStore from "InviteStore" /* 5071 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import Constants_mod from "Constants" /* 1085 */;
import Constants_mod2 from "Constants" /* 7418 */;
import size from "module_2" /* 2 */;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
const Image = react_native.Image;
({ getGuildIconURL: closure_4, getGuildAcronym: hasOwnProperty } = GuildRecord);
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let Constants = Constants_mod2;
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = Constants);
Constants = Constants_mod2;
({ InviteTargetTypes: closure_17, InviteTypes: closure_18 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx");

export const createResolvingGuildInvite = function createResolvingGuildInvite(theme) {
  let str;
  const tmp = getEmbedThemeColorsDefault(theme);
  const colors = tmp.colors;
  const obj = { headerText: str.toUpperCase(), resolvingGradientEnd: null, resolvingGradientStart: null, type: constants5.GUILD };
  const baseColors = tmp.baseColors;
  const intl = intl8.intl;
  ({ resolvingGradientEnd: obj.resolvingGradientEnd, resolvingGradientStart: obj.resolvingGradientStart } = colors);
  str = intl.string(intl8.t["N/g9Z4"]);
  const merged = Object.assign(baseColors);
  return obj;
};
export const createExpiredGuildInvite = function createExpiredGuildInvite(author, arg1, theme) {
  let intl5;
  let resolveAssetSource;
  let str;
  let stringResult;
  let tmp6;
  let tmp6Result;
  let tmpResult;
  let tmpResult2;
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const colors = tmp3.colors;
  const obj = { headerText: str.toUpperCase(), titleColor: tmp6Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400), subtitle: stringResult, titleText: intl5.string(tmp6(1126).t["Jhx/ud"]), thumbnailUrl: resolveAssetSource(tmpResult2).uri, type: constants5.GUILD };
  const merged = Object.assign(tmp3.baseColors);
  const intl = intl8.intl;
  const string = intl.string;
  const t = intl8.t;
  if (arg1) {
    str = string(t.C89OLE);
    tmp6 = tmp5;
  } else {
    str = string(t.YVub5y);
    tmp6 = tmp5;
  }
  tmp6Result = tmp6(7723);
  if (arg1) {
    const intl4 = tmp6(1126).intl;
    stringResult = intl4.string(tmp6(1126).t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (author != null) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = tmp6(1126).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const obj2 = { username: tmpResult.getFormattedName(author.author) };
      const v9Akp1s = tmp6(1126).t["9Akp1s"];
      tmpResult = UserUtilsDefault;
      stringResult = formatToPlainString(v9Akp1s, obj2);
    } else {
      const intl2 = tmp6(1126).intl;
      stringResult = intl2.string(tmp6(1126).t["SMJr+a"]);
    }
  }
  intl5 = tmp6(1126).intl;
  resolveAssetSource = Image.resolveAssetSource;
  const tmp6Result2 = tmp6(4929);
  if (tmp6Result2.isThemeDark(theme)) {
    tmpResult2 = tmp(11414);
  } else {
    tmpResult2 = tmp(11415);
  }
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = colors);
  return obj;
};
export const createDisabledGuildInvite = function createDisabledGuildInvite(invite, theme) {
  let fromInviteGuildResult;
  let intl2;
  let intl4;
  let intl5;
  let name;
  let obj3;
  let str;
  let tmp14Result;
  let tmp16;
  let tmp17;
  let tmpResult;
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const baseColors = tmp3.baseColors;
  const colors = tmp3.colors;
  if (null != invite.guild) {
    const obj = GuildRecordUtils;
    fromInviteGuildResult = obj.fromInviteGuild(invite.guild);
  } else {
    const channel = invite.channel;
    let id;
    const getGuild = GuildStore.getGuild;
    const getChannel = ChannelStore.getChannel;
    if (channel != null) {
      id = channel.id;
    }
    const channel1 = getChannel(id);
    let guild_id;
    if (channel1 != null) {
      guild_id = channel1.guild_id;
    }
    fromInviteGuildResult = getGuild(guild_id);
  }
  let tmp11;
  if (null != fromInviteGuildResult) {
    tmp11 = React3(fromInviteGuildResult, 48, false);
  }
  const obj2 = { extendedType: CodedLinkExtendedType.GUILD_INVITE_DISABLED, headerText: str.toUpperCase(), titleText: intl2.string(intl8.t.tQ4AnN), titleColor: obj3.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_345), guildName: name, subtitle: intl4.string(intl8.t["x+XpjL"]), helpCenterArticleLabel: intl5.string(intl8.t["4FlZqw"]), helpCenterArticleURL: tmpResult.getArticleURL(constants.INVITE_DISABLED), guildIcon: tmp16, thumbnailUrl: tmp14Result.getAssetUriForEmbed(AssetRegistryDefault), thumbnailText: tmp17, subtitleColor: colors.subtitleColor, type: constants5.GUILD };
  const merged = Object.assign(baseColors);
  const intl = intl8.intl;
  str = intl.string(intl8.t["Hyx2F/"]);
  intl2 = intl8.intl;
  name = undefined;
  obj3 = react_native2;
  if (fromInviteGuildResult != null) {
    name = fromInviteGuildResult.name;
  }
  if (name == null) {
    const intl3 = tmp14(1126).intl;
    name = intl3.string(tmp14(1126).t.wBceYP);
  }
  intl4 = tmp14(1126).intl;
  intl5 = tmp14(1126).intl;
  tmpResult = HelpdeskUtilsDefault;
  tmp17 = undefined;
  tmp14Result = renderer_EmbedUtils;
  tmp16 = tmp11;
  if (null == tmp11) {
    let tmp18;
    if (null != fromInviteGuildResult) {
      tmp18 = hasOwnProperty(fromInviteGuildResult);
    }
    tmp17 = tmp18;
  }
  return obj2;
};
export const createErroredGuildInvite = function createErroredGuildInvite(code, arg1, theme) {
  let baseColors;
  let colors;
  let description;
  let resolveAssetSource;
  let str;
  let title;
  let tmp5Result;
  let tmpResult;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const inviteError = InviteStore.getInviteError(code);
  code = undefined;
  const getDescriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError;
  InviteErrorUtils;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = getDescriptiveInviteError(code);
  const obj = { headerText: str.toUpperCase(), titleColor: tmp5Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400), subtitle: description, titleText: title, thumbnailUrl: resolveAssetSource(tmpResult).uri, type: constants5.GUILD };
  const merged = Object.assign(baseColors);
  const intl = tmp5(1126).intl;
  const string = intl.string;
  const t = tmp5(1126).t;
  if (arg1) {
    str = string(t.C89OLE);
  } else {
    str = string(t.YVub5y);
  }
  description = undefined;
  tmp5Result = react_native2;
  if (descriptiveInviteError != null) {
    description = descriptiveInviteError.description;
  }
  if (description == null) {
    let message;
    if (inviteError != null) {
      message = inviteError.message;
    }
    description = message;
  }
  title = undefined;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl2 = tmp5(1126).intl;
    title = intl2.string(tmp5(1126).t["Jhx/ud"]);
  }
  resolveAssetSource = Image.resolveAssetSource;
  const tmp5Result2 = shared;
  if (tmp5Result2.isThemeDark(theme)) {
    tmpResult = tmp(11414);
  } else {
    tmpResult = tmp(11415);
  }
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = colors);
  return obj;
};
export const createGuildInvite = function createGuildInvite(invite, isOwnInvite, theme) {
  let GUILD;
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenBackgroundColor2;
  let acceptLabelGreenColor;
  let acceptLabelGreenColor2;
  let approximate_member_count;
  let approximate_presence_count;
  let assetUriForEmbed;
  let baseColors;
  let channelName;
  let colors;
  let flag3;
  let formatToPlainStringResult1;
  let formatted;
  let guildIconURL;
  let hasFlag;
  let icon1;
  let name;
  let num;
  let str3;
  let stringResult1;
  let subtitleColor;
  let target_user;
  let tmp16;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp33;
  let tmp53;
  let tmpResult8;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  let guild = null;
  getEmbedThemeColorsDefault(theme);
  if (null != invite.guild) {
    guild = GuildStore.getGuild(invite.guild.id);
  }
  const items = [GuildMemberStore];
  const tmpResult = GuestUtilsDefault;
  const canAcceptInviteResult = tmpResult.canAcceptInvite(items, invite);
  const channel = tmp(9568)(invite).channel;
  const tmp7 = null != channel && channel.isGuildVocal();
  let flag;
  if (channel != null) {
    flag = channel.isGuildStageVoice();
  }
  if (flag == null) {
    flag = false;
  }
  ({ target_user, approximate_member_count, approximate_presence_count } = invite);
  let tmp8 = null != invite.guild;
  const target_type = invite.target_type;
  const STREAM = constants4.STREAM;
  if (tmp8) {
    tmp8 = null == guild;
  }
  let flag2 = true;
  if (tmp8) {
    const obj2 = GuildRecordUtils;
    guild = obj2.fromInviteGuild(invite.guild);
    flag2 = false;
  }
  const obj = { isVoiceChannel: tmp7, isOwnInvite, isHubGuild: flag3, isStream: target_type === STREAM, isStage: flag, isGuest: hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE) };
  flag3 = undefined;
  const getHeaderTextForInvite = getHeaderTextForInvite2.getHeaderTextForInvite;
  getHeaderTextForInvite2;
  if (guild != null) {
    const features = guild.features;
    flag3 = features.has(constants3.HUB);
  }
  if (flag3 == null) {
    flag3 = false;
  }
  num = invite.flags;
  hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  const str = getHeaderTextForInvite(obj);
  if (guild != null) {
    name = guild.name;
  }
  let icon;
  if (guild != null) {
    icon = guild.icon;
  }
  if (null != icon) {
    let id;
    const getGuildIconURL = AvatarUtilsDefault.getGuildIconURL;
    AvatarUtilsDefault;
    if (guild != null) {
      id = guild.id;
    }
    const obj3 = { id, icon: icon1, canAnimate: true, size: 128 };
    icon1 = undefined;
    if (guild != null) {
      icon1 = guild.icon;
    }
    guildIconURL = getGuildIconURL(obj3);
  } else if (null != guild) {
    tmp16 = hasOwnProperty(guild);
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  let tmp23;
  if (null != splash) {
    ({ id: obj5.id, splash: obj5.splash } = guild);
    const obj4 = { id: null, splash: null, size: 400 * react_nativeDefault() };
    const getGuildSplashURL = AvatarUtilsDefault.getGuildSplashURL;
    AvatarUtilsDefault;
    const guildSplashURL = getGuildSplashURL(obj4);
    tmp23 = guildSplashURL;
  }
  if (tmp7) {
    if (flag2) {
      if (null != target_user) {
        if (target_type === STREAM) {
          const resolveAssetSource4 = Image.resolveAssetSource;
          const tmpResult7 = AvatarUtilsDefault;
          const uri = resolveAssetSource4(tmpResult7.getUserAvatarSource(target_user)).uri;
          const intl3 = tmp10(1126).intl;
          const formatToPlainString2 = intl3.formatToPlainString;
          const obj6 = { name: tmpResult8.getFormattedName(target_user) };
          const QmlLEq = tmp10(1126).t.QmlLEq;
          tmpResult8 = UserUtilsDefault;
          const formatToPlainString2Result = formatToPlainString2(QmlLEq, obj6);
          const intl4 = tmp10(1126).intl;
          const formatToPlainString3 = intl4.formatToPlainString;
          let name1;
          const u0vaDE = tmp10(1126).t.u0vaDE;
          if (guild != null) {
            name1 = guild.name;
          }
          const obj7 = { guildName: name1 };
          str3 = formatToPlainString3(u0vaDE, obj7);
          tmp27 = null != ApplicationStreamingStore.getActiveStreamForUser(target_user.id, channel.getGuildId());
          tmp29 = uri;
          tmp30 = formatToPlainString2Result;
        }
      }
    }
    const resolveAssetSource3 = Image.resolveAssetSource;
    const tmp10Result7 = utils_ChannelUtils;
    const assetSource3 = resolveAssetSource3(tmp10Result7.getChannelIcon(channel));
    let uri1;
    if (assetSource3 != null) {
      uri1 = assetSource3.uri;
    }
    str3 = "";
    tmp31 = uri1;
    tmp27 = flag2;
    tmp28 = tmp16;
    tmp29 = guildIconURL;
    tmp30 = name;
  } else {
    if (null != channel) {
      if (channel.type === constants2.GUILD_STAGE_VOICE) {
        const resolveAssetSource2 = Image.resolveAssetSource;
        const tmp10Result8 = utils_ChannelUtils;
        const assetSource2 = resolveAssetSource2(tmp10Result8.getChannelIcon(channel));
        let uri2;
        if (assetSource2 != null) {
          uri2 = assetSource2.uri;
        }
        str3 = "";
        tmp31 = uri2;
        tmp27 = flag2;
        tmp28 = tmp16;
        tmp29 = guildIconURL;
        tmp30 = name;
      }
    }
    if (null == approximate_member_count) {
      str3 = "";
      tmp27 = flag2;
      tmp28 = tmp16;
      tmp29 = guildIconURL;
      tmp30 = name;
      if (null != channel) {
        const resolveAssetSource = Image.resolveAssetSource;
        const tmp10Result9 = utils_ChannelUtils;
        const assetSource = resolveAssetSource(tmp10Result9.getChannelIcon(channel));
        let uri3;
        if (assetSource != null) {
          uri3 = assetSource.uri;
        }
        tmp31 = uri3;
        str3 = "";
        tmp27 = flag2;
        tmp28 = tmp16;
        tmp29 = guildIconURL;
        tmp30 = name;
      }
    }
    const intl = tmp10(1126).intl;
    const obj8 = { membersOnline: approximate_presence_count };
    const formatToPlainStringResult = intl.formatToPlainString(intl8.t["LC+S+m"], obj8);
    const intl2 = tmp10(1126).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const zRl6XR = tmp10(1126).t.zRl6XR;
    if (approximate_member_count == null) {
      approximate_member_count = 0;
    }
    str3 = "";
    tmp27 = flag2;
    tmp28 = tmp16;
    tmp29 = guildIconURL;
    tmp30 = name;
    const obj9 = { count: approximate_member_count };
    formatToPlainStringResult1 = formatToPlainString(zRl6XR, obj9);
    tmp33 = formatToPlainStringResult;
  }
  if (tmp7) {
    let stringResult;
    ({ acceptLabelGreenColor: acceptLabelGreenColor2, acceptLabelGreenBackgroundColor: acceptLabelGreenBackgroundColor2 } = colors);
    const intl7 = tmp10(1126).intl;
    const string = intl7.string;
    const t = tmp10(1126).t;
    if (flag) {
      stringResult = string(t["7vb2cc"]);
    } else {
      stringResult = string(t.gpqgah);
    }
    stringResult1 = stringResult;
    acceptLabelGreenBackgroundColor = acceptLabelGreenBackgroundColor2;
    acceptLabelGreenColor = acceptLabelGreenColor2;
  } else if (tmp27) {
    ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
    const intl6 = tmp10(1126).intl;
    stringResult1 = intl6.string(tmp10(1126).t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = tmp10(1126).intl;
    stringResult1 = intl5.string(tmp10(1126).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != guild) {
    const tmp10Result10 = GuildBadgeImageSource;
    guildBadgeImageSource = tmp10Result10.getGuildBadgeImageSource(guild, theme);
  }
  const obj10 = { headerText: formatted, headerColor: colors.headerColor, acceptLabelText: stringResult1, onlineText: tmp33, memberText: formatToPlainStringResult1, channelIcon: tmp31, titleText: tmp30, titleColor: colors.titleColor, thumbnailUrl: tmp53, thumbnailText: tmp28, subtitle: str3, subtitleColor, acceptLabelBackgroundColor: acceptLabelGreenBackgroundColor, acceptLabelBorderColor: undefined, acceptLabelColor: acceptLabelGreenColor, embedCanBeTapped: true, canBeAccepted: canAcceptInviteResult, channelName, type: GUILD, inviteSplash: tmp23, badgeIconUrl: assetUriForEmbed };
  const merged = Object.assign(baseColors);
  formatted = undefined;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  tmp53 = undefined;
  if (null != tmp29) {
    tmp53 = tmp29;
  }
  subtitleColor = undefined;
  if ("" !== str3) {
    subtitleColor = colors.subtitleColor;
  }
  channelName = undefined;
  if (null != channel) {
    const tmp10Result11 = useChannelName;
    channelName = tmp10Result11.computeChannelName(channel, UserStore, RelationshipStore);
  }
  GUILD = invite.type;
  if (GUILD == null) {
    GUILD = constants5.GUILD;
  }
  assetUriForEmbed = undefined;
  if (null != guildBadgeImageSource) {
    const tmp10Result12 = renderer_EmbedUtils;
    assetUriForEmbed = tmp10Result12.getAssetUriForEmbed(guildBadgeImageSource);
  }
  return obj10;
};
