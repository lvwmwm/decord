// Module ID: 12284
// Function ID: 95762
// Name: createResolvingGuildInvite
// Dependencies: [27, 1391, 4149, 1348, 1917, 1838, 4115, 3767, 1849, 9479, 653, 6979, 7633, 1212, 7625, 689, 3969, 3976, 10953, 10954, 1387, 1920, 7635, 11759, 11758, 9481, 9480, 12285, 1360, 7476, 1392, 1825, 4593, 5702, 4320, 2]
// Exports: createDisabledGuildInvite, createErroredGuildInvite, createExpiredGuildInvite, createGuildInvite, createResolvingGuildInvite

// Module 12284 (createResolvingGuildInvite)
import { Image } from "getHeaderTextForInvite";
import isGuildOwner from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";
import ME from "ME";
import InviteSendStates from "InviteSendStates";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let closure_5;
({ getGuildIconURL: closure_4, getGuildAcronym: closure_5 } = isGuildOwner);
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = ME);
({ InviteTargetTypes: closure_17, InviteTypes: closure_18 } = InviteSendStates);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx");

export const createResolvingGuildInvite = function createResolvingGuildInvite(closure_2) {
  const tmp = importDefault(7633)(closure_2);
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerText = intl.string(require(1212) /* getSystemLocale */.t["N/g9Z4"]).toUpperCase();
  ({ resolvingGradientEnd: obj.resolvingGradientEnd, resolvingGradientStart: obj.resolvingGradientStart } = tmp.colors);
  obj.type = constants5.GUILD;
  const merged = Object.assign(tmp.baseColors);
  return obj;
};
export const createExpiredGuildInvite = function createExpiredGuildInvite(author, arg1, closure_2) {
  const tmp = importDefault(7633)(closure_2);
  const colors = tmp.colors;
  let obj = {};
  const merged = Object.assign(tmp.baseColors);
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (arg1) {
    let str = string(t.C89OLE);
  } else {
    str = string(t.YVub5y);
  }
  obj["headerText"] = str.toUpperCase();
  obj["titleColor"] = require(7625) /* processColorOrThrow */.processColorOrThrow(importDefault(689).unsafe_rawColors.RED_400);
  if (arg1) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1212) /* getSystemLocale */.t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (null != author) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = { username: importDefault(3969).getFormattedName(author.author) };
      stringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["9Akp1s"], obj);
      const obj4 = importDefault(3969);
    } else {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t["SMJr+a"]);
    }
  }
  obj["subtitle"] = stringResult;
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj["titleText"] = intl5.string(require(1212) /* getSystemLocale */.t["Jhx/ud"]);
  const obj2 = require(7625) /* processColorOrThrow */;
  if (obj5.isThemeDark(closure_2)) {
    let tmp14Result = tmp14(10953);
  } else {
    tmp14Result = tmp14(10954);
  }
  obj["thumbnailUrl"] = Image.resolveAssetSource(tmp14Result).uri;
  obj["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
  obj["subtitleColor"] = colors.subtitleColor;
  obj["type"] = constants5.GUILD;
  return obj;
};
export const createDisabledGuildInvite = function createDisabledGuildInvite(invite, closure_2) {
  const tmp = importDefault(7633)(closure_2);
  if (null != invite.guild) {
    let obj = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
    let fromInviteGuildResult = obj.fromInviteGuild(invite.guild);
  } else {
    let channel = invite.channel;
    let id;
    if (null != channel) {
      id = channel.id;
    }
    channel = channel.getChannel(id);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    fromInviteGuildResult = store.getGuild(guild_id);
  }
  let tmp10;
  if (null != fromInviteGuildResult) {
    tmp10 = callback(fromInviteGuildResult, 48, false);
  }
  obj = {};
  const merged = Object.assign(tmp.baseColors);
  obj["extendedType"] = CodedLinkExtendedType.GUILD_INVITE_DISABLED;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["headerText"] = intl.string(require(1212) /* getSystemLocale */.t["Hyx2F/"]).toUpperCase();
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["titleText"] = intl2.string(require(1212) /* getSystemLocale */.t.tQ4AnN);
  const str = intl.string(require(1212) /* getSystemLocale */.t["Hyx2F/"]);
  obj["titleColor"] = require(7625) /* processColorOrThrow */.processColorOrThrow(importDefault(689).unsafe_rawColors.RED_345);
  let name;
  if (null != fromInviteGuildResult) {
    name = fromInviteGuildResult.name;
  }
  if (null == name) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    name = intl3.string(require(1212) /* getSystemLocale */.t.wBceYP);
  }
  obj["guildName"] = name;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj["subtitle"] = intl4.string(require(1212) /* getSystemLocale */.t["x+XpjL"]);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj["helpCenterArticleLabel"] = intl5.string(require(1212) /* getSystemLocale */.t["4FlZqw"]);
  const obj3 = require(7625) /* processColorOrThrow */;
  obj["helpCenterArticleURL"] = importDefault(1920).getArticleURL(constants.INVITE_DISABLED);
  let tmp16;
  if (null != tmp10) {
    tmp16 = tmp10;
  }
  obj["guildIcon"] = tmp16;
  const obj4 = importDefault(1920);
  obj["thumbnailUrl"] = require(7635) /* frozen */.getAssetUriForEmbed(importDefault(11759));
  let tmp17;
  if (null == tmp10) {
    let tmp18;
    if (null != fromInviteGuildResult) {
      tmp18 = callback2(fromInviteGuildResult);
    }
    tmp17 = tmp18;
  }
  obj["thumbnailText"] = tmp17;
  obj["subtitleColor"] = tmp.colors.subtitleColor;
  obj["type"] = constants5.GUILD;
  return obj;
};
export const createErroredGuildInvite = function createErroredGuildInvite(code, arg1, closure_2) {
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(7633)(closure_2));
  inviteError = inviteError.getInviteError(code);
  let obj = require(11758) /* getDescriptiveInviteError */;
  code = undefined;
  if (null != inviteError) {
    code = inviteError.code;
  }
  const descriptiveInviteError = obj.getDescriptiveInviteError(code);
  obj = {};
  const merged = Object.assign(baseColors);
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (arg1) {
    let str = string(t.C89OLE);
  } else {
    str = string(t.YVub5y);
  }
  obj["headerText"] = str.toUpperCase();
  const tmp = importDefault(7633)(closure_2);
  obj["titleColor"] = require(7625) /* processColorOrThrow */.processColorOrThrow(importDefault(689).unsafe_rawColors.RED_400);
  let description;
  if (null != descriptiveInviteError) {
    description = descriptiveInviteError.description;
  }
  if (null == description) {
    let message;
    if (null != inviteError) {
      message = inviteError.message;
    }
    description = message;
  }
  obj["subtitle"] = description;
  let title;
  if (null != descriptiveInviteError) {
    title = descriptiveInviteError.title;
  }
  if (null == title) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    title = intl2.string(require(1212) /* getSystemLocale */.t["Jhx/ud"]);
  }
  obj["titleText"] = title;
  const obj3 = require(7625) /* processColorOrThrow */;
  if (obj4.isThemeDark(closure_2)) {
    let tmp12Result = tmp12(10953);
  } else {
    tmp12Result = tmp12(10954);
  }
  obj["thumbnailUrl"] = Image.resolveAssetSource(tmp12Result).uri;
  obj["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
  obj["subtitleColor"] = colors.subtitleColor;
  obj["type"] = constants5.GUILD;
  return obj;
};
export const createGuildInvite = function createGuildInvite(invite, isOwnInvite, closure_2) {
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenBackgroundColor2;
  let acceptLabelGreenColor;
  let acceptLabelGreenColor2;
  let approximate_member_count;
  let approximate_presence_count;
  let baseColors;
  let colors;
  let target_user;
  ({ colors, baseColors } = importDefault(7633)(closure_2));
  let guild = null;
  if (null != invite.guild) {
    guild = store.getGuild(invite.guild.id);
  }
  let obj = importDefault(9481);
  const items = [closure_8];
  const tmp = importDefault(7633)(closure_2);
  const channel = importDefault(9480)(invite).channel;
  const tmp5 = null != channel && channel.isGuildVocal();
  let isGuildStageVoiceResult;
  if (null != channel) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  ({ target_user, approximate_member_count, approximate_presence_count } = invite);
  let flag = true;
  if (tmp9) {
    let obj1 = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
    guild = obj1.fromInviteGuild(invite.guild);
    flag = false;
  }
  let obj2 = require(12285) /* getHeaderTextForInvite */;
  obj = { isVoiceChannel: tmp5, isOwnInvite };
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(constants3.HUB);
  }
  obj.isHubGuild = null != hasItem && hasItem;
  obj.isStream = invite.target_type === constants4.STREAM;
  obj.isStage = null != isGuildStageVoiceResult && isGuildStageVoiceResult;
  let obj4 = require(1360) /* hasFlag */;
  const flags = invite.flags;
  let num2 = 0;
  if (null != flags) {
    num2 = flags;
  }
  obj.isGuest = obj4.hasFlag(num2, require(7476) /* set */.GuildInviteFlags.IS_GUEST_INVITE);
  const str = obj2.getHeaderTextForInvite(obj);
  if (null != guild) {
    let name = guild.name;
  }
  let icon;
  if (null != guild) {
    icon = guild.icon;
  }
  if (null != icon) {
    let obj5 = importDefault(1392);
    obj = {};
    let id;
    if (null != guild) {
      id = guild.id;
    }
    obj.id = id;
    let icon1;
    if (null != guild) {
      icon1 = guild.icon;
    }
    obj.icon = icon1;
    obj.canAnimate = true;
    obj.size = 128;
    const guildIconURL = obj5.getGuildIconURL(obj);
  } else if (null != guild) {
    const tmp15 = callback2(guild);
  }
  let splash;
  if (null != guild) {
    splash = guild.splash;
  }
  if (null != splash) {
    obj1 = {};
    ({ id: obj9.id, splash: obj9.splash } = guild);
    obj1.size = 400 * importDefault(1825)();
    const guildSplashURL = importDefault(1392).getGuildSplashURL(obj1);
    if (null != guildSplashURL) {
      const tmp23 = guildSplashURL;
    }
    const obj8 = importDefault(1392);
  }
  if (tmp5) {
    if (flag) {
      if (null != target_user) {
        if (tmp8) {
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj2 = {};
          const obj15 = importDefault(1392);
          obj2.name = importDefault(3969).getFormattedName(target_user);
          const obj17 = importDefault(3969);
          const intl4 = require(1212) /* getSystemLocale */.intl;
          const obj3 = {};
          name = undefined;
          if (null != guild) {
            name = guild.name;
          }
          obj3.guildName = name;
          let str3 = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.u0vaDE, obj3);
          let tmp33 = null != activeStreamForUser.getActiveStreamForUser(target_user.id, channel.getGuildId());
          let tmp31 = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.QmlLEq, obj2);
          let uri = Image.resolveAssetSource(obj15.getUserAvatarSource(target_user)).uri;
          const formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.QmlLEq, obj2);
        }
      }
    }
    const assetSource = Image.resolveAssetSource(require(4593) /* getThreadChannelIcon */.getChannelIcon(channel));
    uri = undefined;
    if (null != assetSource) {
      uri = assetSource.uri;
    }
    str3 = "";
    let tmp30 = uri;
    tmp31 = name;
    uri = guildIconURL;
    let tmp32 = tmp15;
    tmp33 = flag;
    const obj14 = require(4593) /* getThreadChannelIcon */;
  } else {
    if (null != channel) {
      if (channel.type === constants2.GUILD_STAGE_VOICE) {
        const assetSource1 = Image.resolveAssetSource(require(4593) /* getThreadChannelIcon */.getChannelIcon(channel));
        let uri1;
        if (null != assetSource1) {
          uri1 = assetSource1.uri;
        }
        str3 = "";
        tmp30 = uri1;
        tmp31 = name;
        uri = guildIconURL;
        tmp32 = tmp15;
        tmp33 = flag;
        const obj13 = require(4593) /* getThreadChannelIcon */;
      }
    }
    if (null == approximate_member_count) {
      tmp31 = name;
      uri = guildIconURL;
      tmp32 = tmp15;
      tmp33 = flag;
      str3 = "";
      if (null != channel) {
        const assetSource2 = Image.resolveAssetSource(require(4593) /* getThreadChannelIcon */.getChannelIcon(channel));
        let uri2;
        if (null != assetSource2) {
          uri2 = assetSource2.uri;
        }
        tmp30 = uri2;
        tmp31 = name;
        uri = guildIconURL;
        tmp32 = tmp15;
        tmp33 = flag;
        str3 = "";
        const obj10 = require(4593) /* getThreadChannelIcon */;
      }
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4 = { membersOnline: approximate_presence_count };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj5 = {};
    let num11 = 0;
    if (null != approximate_member_count) {
      num11 = approximate_member_count;
    }
    obj5.count = num11;
    const formatToPlainStringResult1 = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["LC+S+m"], obj4);
    str3 = "";
    tmp31 = name;
    uri = guildIconURL;
    tmp32 = tmp15;
    tmp33 = flag;
    const formatToPlainStringResult2 = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.zRl6XR, obj5);
    const tmp28 = formatToPlainStringResult1;
  }
  if (tmp5) {
    ({ acceptLabelGreenColor: acceptLabelGreenColor2, acceptLabelGreenBackgroundColor: acceptLabelGreenBackgroundColor2 } = colors);
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const string = intl7.string;
    if (tmp7) {
      let stringResult = string(_7vb2cc);
    } else {
      stringResult = string(_7vb2cc.gpqgah);
    }
  } else {
    if (tmp33) {
      ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
      const intl6 = require(1212) /* getSystemLocale */.intl;
      let stringResult1 = intl6.string(require(1212) /* getSystemLocale */.t.cEnaWx);
    } else {
      ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
      const intl5 = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl5.string(require(1212) /* getSystemLocale */.t.XpeFYr);
    }
    let guildBadgeImageSource;
    if (null != guild) {
      guildBadgeImageSource = require(5702) /* resolveImageSource */.getGuildBadgeImageSource(guild, closure_2);
      const obj19 = require(5702) /* resolveImageSource */;
    }
    const obj6 = {};
    const merged = Object.assign(baseColors);
    let formatted;
    if (null != str) {
      formatted = str.toUpperCase();
    }
    obj6["headerText"] = formatted;
    obj6["headerColor"] = colors.headerColor;
    obj6["acceptLabelText"] = stringResult1;
    obj6["onlineText"] = tmp28;
    obj6["memberText"] = formatToPlainStringResult2;
    obj6["channelIcon"] = tmp30;
    obj6["titleText"] = tmp31;
    obj6["titleColor"] = colors.titleColor;
    let tmp77;
    if (null != uri) {
      tmp77 = uri;
    }
    obj6["thumbnailUrl"] = tmp77;
    obj6["thumbnailText"] = tmp32;
    obj6["subtitle"] = str3;
    let subtitleColor;
    if ("" !== str3) {
      subtitleColor = colors.subtitleColor;
    }
    obj6["subtitleColor"] = subtitleColor;
    obj6["acceptLabelBackgroundColor"] = acceptLabelGreenBackgroundColor;
    obj6["acceptLabelBorderColor"] = undefined;
    obj6["acceptLabelColor"] = acceptLabelGreenColor;
    obj6["embedCanBeTapped"] = true;
    obj6["canBeAccepted"] = canAcceptInviteResult;
    let channelName;
    if (null != channel) {
      channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_12, closure_11);
      const obj21 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    }
    obj6["channelName"] = channelName;
    let GUILD = invite.type;
    if (null == GUILD) {
      GUILD = constants5.GUILD;
    }
    obj6["type"] = GUILD;
    obj6["inviteSplash"] = tmp23;
    let assetUriForEmbed;
    if (null != guildBadgeImageSource) {
      assetUriForEmbed = require(7635) /* frozen */.getAssetUriForEmbed(guildBadgeImageSource);
      const obj22 = require(7635) /* frozen */;
    }
    obj6["badgeIconUrl"] = assetUriForEmbed;
    return obj6;
  }
};
