// Module ID: 15072
// Function ID: 15073
// Name: GuildInvite
// Dependencies: [17, 4876, 6708, 4858, 4921, 4880, 5744, 4951, 1384, 10097, 1072, 7872, 8386, 1114, 8373, 575, 5063, 5016, 13185, 13186, 4872, 2062, 8388, 14282, 14281, 10099, 10098, 7873, 15073, 1397, 8950, 1410, 1893, 8595, 9288, 5647, 2]
// Exports: createDisabledGuildInvite, createErroredGuildInvite, createExpiredGuildInvite, createGuildInvite, createResolvingGuildInvite

// Module 15072 (GuildInvite)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1114 */;
import FlagUtils from "FlagUtils" /* 1397 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import react_nativeDefault from "react-native" /* 1893 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4872 */;
import shared from "shared" /* 5016 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import useChannelName from "useChannelName" /* 5647 */;
import Constants2 from "Constants" /* 7872 */;
import InviteTargetTypes from "InviteTargetTypes" /* 7873 */;
import react_native2 from "react-native" /* 8373 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8386 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8388 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8950 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 9288 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10097 */;
import GuestUtilsDefault from "GuestUtils" /* 10099 */;
import InviteErrorUtils from "InviteErrorUtils" /* 14281 */;
import AssetRegistryDefault from "AssetRegistry" /* 14282 */;
import getHeaderTextForInvite2 from "getHeaderTextForInvite" /* 15073 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import InviteStore from "InviteStore" /* 5744 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
const Image = react_native.Image;
({ getGuildIconURL: closure_4, getGuildAcronym: hasOwnProperty } = GuildRecord);
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = Constants);
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx");

export function createResolvingGuildInvite(theme) {
  let str;
  const tmp = getEmbedThemeColorsDefault(theme);
  const colors = tmp.colors;
  const obj = { headerText: str.toUpperCase(), resolvingGradientEnd: null, resolvingGradientStart: null, type: InviteTypes.GUILD };
  const baseColors = tmp.baseColors;
  const intl = intl8.intl;
  ({ resolvingGradientEnd: obj.resolvingGradientEnd, resolvingGradientStart: obj.resolvingGradientStart } = colors);
  str = intl.string(intl8.t["N/g9Z4"]);
  const merged = Object.assign(baseColors);
  return obj;
}
export function createExpiredGuildInvite(author, arg1, theme) {
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
  const obj = { headerText: str.toUpperCase(), titleColor: tmp6Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400), subtitle: stringResult, titleText: intl5.string(tmp6(1114).t["Jhx/ud"]), thumbnailUrl: resolveAssetSource(tmpResult2).uri, type: InviteTypes.GUILD };
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
  tmp6Result = tmp6(8373);
  if (arg1) {
    const intl4 = tmp6(1114).intl;
    stringResult = intl4.string(tmp6(1114).t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (author != null) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = tmp6(1114).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const obj2 = { username: tmpResult.getFormattedName(author.author) };
      const v9Akp1s = tmp6(1114).t["9Akp1s"];
      tmpResult = UserUtilsDefault;
      stringResult = formatToPlainString(v9Akp1s, obj2);
    } else {
      const intl2 = tmp6(1114).intl;
      stringResult = intl2.string(tmp6(1114).t["SMJr+a"]);
    }
  }
  intl5 = tmp6(1114).intl;
  resolveAssetSource = Image.resolveAssetSource;
  const tmp6Result2 = tmp6(5016);
  if (tmp6Result2.isThemeDark(theme)) {
    tmpResult2 = tmp(13185);
  } else {
    tmpResult2 = tmp(13186);
  }
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = colors);
  return obj;
}
export function createDisabledGuildInvite(invite, theme) {
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
  const obj2 = { extendedType: CodedLinkExtendedType.GUILD_INVITE_DISABLED, headerText: str.toUpperCase(), titleText: intl2.string(intl8.t.tQ4AnN), titleColor: obj3.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_345), guildName: name, subtitle: intl4.string(intl8.t["x+XpjL"]), helpCenterArticleLabel: intl5.string(intl8.t["4FlZqw"]), helpCenterArticleURL: tmpResult.getArticleURL(constants.INVITE_DISABLED), guildIcon: tmp16, thumbnailUrl: tmp14Result.getAssetUriForEmbed(AssetRegistryDefault), thumbnailText: tmp17, subtitleColor: colors.subtitleColor, type: InviteTypes.GUILD };
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
    const intl3 = tmp14(1114).intl;
    name = intl3.string(tmp14(1114).t.wBceYP);
  }
  intl4 = tmp14(1114).intl;
  intl5 = tmp14(1114).intl;
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
}
export function createErroredGuildInvite(code, arg1, theme) {
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
  const obj = { headerText: str.toUpperCase(), titleColor: tmp5Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400), subtitle: description, titleText: title, thumbnailUrl: resolveAssetSource(tmpResult).uri, type: InviteTypes.GUILD };
  const merged = Object.assign(baseColors);
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
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
    const intl2 = tmp5(1114).intl;
    title = intl2.string(tmp5(1114).t["Jhx/ud"]);
  }
  resolveAssetSource = Image.resolveAssetSource;
  const tmp5Result2 = shared;
  if (tmp5Result2.isThemeDark(theme)) {
    tmpResult = tmp(13185);
  } else {
    tmpResult = tmp(13186);
  }
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = colors);
  return obj;
}
export function createGuildInvite(invite, isOwnInvite, theme) {
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
  let tmp15;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp32;
  let tmp52;
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
  const channel = tmp(10098)(invite).channel;
  const tmp7 = null != channel && channel.isGuildVocal();
  let flag;
  if (channel != null) {
    flag = channel.isGuildStageVoice();
  }
  if (flag == null) {
    flag = false;
  }
  ({ target_user, approximate_member_count, approximate_presence_count } = invite);
  const target_type = invite.target_type;
  let tmp9 = null != invite.guild;
  const STREAM = InviteTargetTypes.InviteTargetTypes.STREAM;
  if (tmp9) {
    tmp9 = null == guild;
  }
  let flag2 = true;
  if (tmp9) {
    const tmp8Result = GuildRecordUtils;
    guild = tmp8Result.fromInviteGuild(invite.guild);
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
    const obj2 = { id, icon: icon1, canAnimate: true, size: 128 };
    icon1 = undefined;
    if (guild != null) {
      icon1 = guild.icon;
    }
    guildIconURL = getGuildIconURL(obj2);
  } else if (null != guild) {
    tmp15 = hasOwnProperty(guild);
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  let tmp22;
  if (null != splash) {
    ({ id: obj5.id, splash: obj5.splash } = guild);
    const obj3 = { id: null, splash: null, size: 400 * react_nativeDefault() };
    const getGuildSplashURL = AvatarUtilsDefault.getGuildSplashURL;
    AvatarUtilsDefault;
    const guildSplashURL = getGuildSplashURL(obj3);
    tmp22 = guildSplashURL;
  }
  if (tmp7) {
    if (flag2) {
      if (null != target_user) {
        if (target_type === STREAM) {
          const resolveAssetSource4 = Image.resolveAssetSource;
          const tmpResult7 = AvatarUtilsDefault;
          const uri = resolveAssetSource4(tmpResult7.getUserAvatarSource(target_user)).uri;
          const intl3 = tmp8(1114).intl;
          const formatToPlainString2 = intl3.formatToPlainString;
          const obj4 = { name: tmpResult8.getFormattedName(target_user) };
          const QmlLEq = tmp8(1114).t.QmlLEq;
          tmpResult8 = UserUtilsDefault;
          const formatToPlainString2Result = formatToPlainString2(QmlLEq, obj4);
          const intl4 = tmp8(1114).intl;
          const formatToPlainString3 = intl4.formatToPlainString;
          let name1;
          const u0vaDE = tmp8(1114).t.u0vaDE;
          if (guild != null) {
            name1 = guild.name;
          }
          const obj6 = { guildName: name1 };
          str3 = formatToPlainString3(u0vaDE, obj6);
          tmp26 = null != ApplicationStreamingStore.getActiveStreamForUser(target_user.id, channel.getGuildId());
          tmp28 = uri;
          tmp29 = formatToPlainString2Result;
        }
      }
    }
    const resolveAssetSource3 = Image.resolveAssetSource;
    const tmp8Result11 = utils_ChannelUtils;
    const assetSource3 = resolveAssetSource3(tmp8Result11.getChannelIcon(channel));
    let uri1;
    if (assetSource3 != null) {
      uri1 = assetSource3.uri;
    }
    str3 = "";
    tmp30 = uri1;
    tmp26 = flag2;
    tmp27 = tmp15;
    tmp28 = guildIconURL;
    tmp29 = name;
  } else {
    if (null != channel) {
      if (channel.type === constants2.GUILD_STAGE_VOICE) {
        const resolveAssetSource2 = Image.resolveAssetSource;
        const tmp8Result12 = utils_ChannelUtils;
        const assetSource2 = resolveAssetSource2(tmp8Result12.getChannelIcon(channel));
        let uri2;
        if (assetSource2 != null) {
          uri2 = assetSource2.uri;
        }
        str3 = "";
        tmp30 = uri2;
        tmp26 = flag2;
        tmp27 = tmp15;
        tmp28 = guildIconURL;
        tmp29 = name;
      }
    }
    if (null == approximate_member_count) {
      str3 = "";
      tmp26 = flag2;
      tmp27 = tmp15;
      tmp28 = guildIconURL;
      tmp29 = name;
      if (null != channel) {
        const resolveAssetSource = Image.resolveAssetSource;
        const tmp8Result13 = utils_ChannelUtils;
        const assetSource = resolveAssetSource(tmp8Result13.getChannelIcon(channel));
        let uri3;
        if (assetSource != null) {
          uri3 = assetSource.uri;
        }
        tmp30 = uri3;
        str3 = "";
        tmp26 = flag2;
        tmp27 = tmp15;
        tmp28 = guildIconURL;
        tmp29 = name;
      }
    }
    const intl = tmp8(1114).intl;
    const obj7 = { membersOnline: approximate_presence_count };
    const formatToPlainStringResult = intl.formatToPlainString(intl8.t["LC+S+m"], obj7);
    const intl2 = tmp8(1114).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const zRl6XR = tmp8(1114).t.zRl6XR;
    if (approximate_member_count == null) {
      approximate_member_count = 0;
    }
    str3 = "";
    tmp26 = flag2;
    tmp27 = tmp15;
    tmp28 = guildIconURL;
    tmp29 = name;
    const obj8 = { count: approximate_member_count };
    formatToPlainStringResult1 = formatToPlainString(zRl6XR, obj8);
    tmp32 = formatToPlainStringResult;
  }
  if (tmp7) {
    let stringResult;
    ({ acceptLabelGreenColor: acceptLabelGreenColor2, acceptLabelGreenBackgroundColor: acceptLabelGreenBackgroundColor2 } = colors);
    const intl7 = tmp8(1114).intl;
    const string = intl7.string;
    const t = tmp8(1114).t;
    if (flag) {
      stringResult = string(t["7vb2cc"]);
    } else {
      stringResult = string(t.gpqgah);
    }
    stringResult1 = stringResult;
    acceptLabelGreenBackgroundColor = acceptLabelGreenBackgroundColor2;
    acceptLabelGreenColor = acceptLabelGreenColor2;
  } else if (tmp26) {
    ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
    const intl6 = tmp8(1114).intl;
    stringResult1 = intl6.string(tmp8(1114).t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = tmp8(1114).intl;
    stringResult1 = intl5.string(tmp8(1114).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != guild) {
    const tmp8Result14 = GuildBadgeImageSource;
    guildBadgeImageSource = tmp8Result14.getGuildBadgeImageSource(guild, theme);
  }
  const obj9 = { headerText: formatted, headerColor: colors.headerColor, acceptLabelText: stringResult1, onlineText: tmp32, memberText: formatToPlainStringResult1, channelIcon: tmp30, titleText: tmp29, titleColor: colors.titleColor, thumbnailUrl: tmp52, thumbnailText: tmp27, subtitle: str3, subtitleColor, acceptLabelBackgroundColor: acceptLabelGreenBackgroundColor, acceptLabelBorderColor: undefined, acceptLabelColor: acceptLabelGreenColor, embedCanBeTapped: true, canBeAccepted: canAcceptInviteResult, channelName, type: GUILD, inviteSplash: tmp22, badgeIconUrl: assetUriForEmbed };
  const merged = Object.assign(baseColors);
  formatted = undefined;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  tmp52 = undefined;
  if (null != tmp28) {
    tmp52 = tmp28;
  }
  subtitleColor = undefined;
  if ("" !== str3) {
    subtitleColor = colors.subtitleColor;
  }
  channelName = undefined;
  if (null != channel) {
    const tmp8Result15 = useChannelName;
    channelName = tmp8Result15.computeChannelName(channel, UserStore, RelationshipStore);
  }
  GUILD = invite.type;
  if (GUILD == null) {
    GUILD = InviteTypes.GUILD;
  }
  assetUriForEmbed = undefined;
  if (null != guildBadgeImageSource) {
    const tmp8Result16 = renderer_EmbedUtils;
    assetUriForEmbed = tmp8Result16.getAssetUriForEmbed(guildBadgeImageSource);
  }
  return obj9;
}
