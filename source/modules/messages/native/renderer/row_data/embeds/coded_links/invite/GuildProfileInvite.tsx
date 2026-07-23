// Module ID: 12292
// Function ID: 95795
// Name: createGuildProfileInvite
// Dependencies: [57, 1921, 9479, 653, 6979, 7633, 5129, 3976, 689, 1387, 8583, 8581, 1392, 1833, 1825, 1212, 10942, 5702, 6980, 21, 1912, 5489, 665, 7625, 7635, 2]
// Exports: createGuildProfileInvite

// Module 12292 (createGuildProfileInvite)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";
import { GuildFeatures } from "ME";
import { InviteTypes } from "InviteSendStates";

const require = arg1;
let result = require("CodedLinkExtendedType").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx");

export const createGuildProfileInvite = function createGuildProfileInvite(invite, closure_2) {
  let tmp10;
  let tmp11;
  let tmp = importDefault(7633)(closure_2);
  let obj = id(5129);
  const guildProfileFromInvite = obj.buildGuildProfileFromInvite(invite);
  let obj1 = id(3976);
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  let tmp4 = obj1.isThemeDark(closure_2) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_160;
  let fromGuildProfileResult = null;
  if (null != guildProfileFromInvite) {
    let obj2 = id(1387);
    fromGuildProfileResult = obj2.fromGuildProfile(guildProfileFromInvite);
  }
  let obj3 = id(8583);
  const profilePrimaryColor = obj3.getProfilePrimaryColor(guildProfileFromInvite);
  let obj4 = id(8581);
  if (null != profilePrimaryColor) {
    tmp4 = profilePrimaryColor;
  }
  const isThemeDarkResult = obj1.isThemeDark(closure_2);
  let memberCount;
  [tmp10, tmp11] = callback(obj4.getBackgroundForProfile(closure_2, tmp4), 2);
  if (null != guildProfileFromInvite) {
    memberCount = guildProfileFromInvite.memberCount;
  }
  if (null == memberCount) {
    memberCount = invite.approximate_member_count;
  }
  let onlineCount;
  if (null != guildProfileFromInvite) {
    onlineCount = guildProfileFromInvite.onlineCount;
  }
  if (null == onlineCount) {
    onlineCount = invite.approximate_presence_count;
  }
  let icon;
  if (null != guildProfileFromInvite) {
    icon = guildProfileFromInvite.icon;
  }
  if (null != icon) {
    obj = {};
    ({ id: obj8.id, icon: obj8.icon } = guildProfileFromInvite);
    obj.canAnimate = true;
    obj.size = 128;
    const guildIconURL = importDefault(1392).getGuildIconURL(obj);
    const obj7 = importDefault(1392);
  } else {
    let name;
    if (null != guildProfileFromInvite) {
      name = guildProfileFromInvite.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    const acronym = id(1833).getAcronym(str);
    const obj6 = id(1833);
  }
  let hasItem;
  if (null != fromGuildProfileResult) {
    const features = fromGuildProfileResult.features;
    hasItem = features.has(GuildFeatures.DISCOVERABLE);
  }
  let tmp24;
  if (hasItem) {
    let customBanner;
    if (null != guildProfileFromInvite) {
      customBanner = guildProfileFromInvite.customBanner;
    }
    if (null != customBanner) {
      obj = {};
      ({ id: obj10.id, customBanner: obj10.splash } = guildProfileFromInvite);
      obj.size = 400 * importDefault(1825)();
      const guildDiscoverySplashURL = importDefault(1392).getGuildDiscoverySplashURL(obj);
      if (null != guildDiscoverySplashURL) {
        tmp24 = guildDiscoverySplashURL;
      }
      const obj9 = importDefault(1392);
    }
  }
  let tmp29 = null != memberCount && memberCount >= 5;
  if (!tmp29) {
    tmp29 = null != onlineCount && onlineCount > 0;
    const tmp30 = null != onlineCount && onlineCount > 0;
  }
  let tmp31;
  let tmp32;
  if (tmp29) {
    let formatToPlainStringResult;
    if (null != onlineCount) {
      let intl = id(1212).intl;
      obj1 = { membersOnline: onlineCount };
      formatToPlainStringResult = intl.formatToPlainString(id(1212).t["LC+S+m"], obj1);
    }
    let formatToPlainStringResult1;
    if (null != memberCount) {
      const intl2 = id(1212).intl;
      obj2 = { count: memberCount };
      formatToPlainStringResult1 = intl2.formatToPlainString(id(1212).t.zRl6XR, obj2);
    }
    tmp32 = formatToPlainStringResult1;
    tmp31 = formatToPlainStringResult;
  }
  let guildProfileCTAType = null;
  if (null != guildProfileFromInvite) {
    guildProfileCTAType = id(10942).getGuildProfileCTAType(guildProfileFromInvite, invite.code);
    const obj13 = id(10942);
  }
  if (id(10942).CTATypes.IS_MEMBER === guildProfileCTAType) {
    const intl7 = id(1212).intl;
    let stringResult = intl7.string(id(1212).t.IRoQXr);
  } else if (id(10942).CTATypes.HAS_APPLICATION === guildProfileCTAType) {
    const intl6 = id(1212).intl;
    stringResult = intl6.string(id(1212).t["4yfIDk"]);
  } else if (id(10942).CTATypes.APPLY_TO_JOIN === guildProfileCTAType) {
    const intl5 = id(1212).intl;
    stringResult = intl5.string(id(1212).t["7XdMW2"]);
  } else if (id(10942).CTATypes.ACCEPT_ROLES === guildProfileCTAType) {
    const intl4 = id(1212).intl;
    stringResult = intl4.string(id(1212).t.MMlhsr);
  } else {
    if (id(10942).CTATypes.LURK_DISCOVERABLE !== guildProfileCTAType) {
      const JOIN_VIA_INVITE = id(10942).CTATypes.JOIN_VIA_INVITE;
    }
    const intl3 = id(1212).intl;
    stringResult = intl3.string(id(1212).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != fromGuildProfileResult) {
    guildBadgeImageSource = id(5702).getGuildBadgeImageSource(fromGuildProfileResult, closure_2);
    const obj14 = id(5702);
  }
  let found;
  if (null != guildProfileFromInvite) {
    const traits = guildProfileFromInvite.traits;
    if (null != traits) {
      found = traits.filter((label) => {
        let tmp = null != label;
        if (tmp) {
          tmp = label.label.trim().length > 0;
          const str = label.label;
        }
        return tmp;
      });
    }
  }
  let formatToPlainStringResult2;
  if (null != guildProfileFromInvite) {
    const obj15 = id(6980);
    const establishedDate = obj15.getEstablishedDate(importDefault(21).extractTimestamp(guildProfileFromInvite.id), locale.locale);
    const intl8 = id(1212).intl;
    obj3 = { createdAtDate: establishedDate };
    formatToPlainStringResult2 = intl8.formatToPlainString(id(1212).t.zb2Q56, obj3);
    const obj16 = importDefault(21);
  }
  let mapped;
  if (null != invite.roles) {
    if (invite.roles.length > 0) {
      if (null != invite.guild) {
        id = invite.guild.id;
        const items = [];
        HermesBuiltin.arraySpread(invite.roles, 0);
        const sorted = items.sort(id(1912).sortInviteRoles);
        mapped = sorted.map((color) => {
          let customIconSrc;
          let unicodeEmoji;
          let obj = id(outer1_2[20]);
          const result = obj.inviteRoleToDisplayData(id, color);
          let obj1 = id(outer1_2[21]);
          let roleIconData = obj1.getRoleIconData(result, 16);
          if (null == roleIconData) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          color = color.color;
          let num = 0;
          if (null != color) {
            num = color;
          }
          const obj4 = id(outer1_2[22]);
          if (null != customIconSrc) {
            obj = { source: customIconSrc };
            let surrogates;
            if (null != unicodeEmoji) {
              surrogates = unicodeEmoji.surrogates;
            }
            obj.unicodeEmoji = surrogates;
            obj.name = color.name;
            obj.size = 16;
            const intl = id(outer1_2[15]).intl;
            obj = { name: color.name };
            obj.alt = intl.formatToPlainString(id(outer1_2[15]).t["9+YWrE"], obj);
            const tmp3 = obj;
          }
          obj1 = { id: color.id, name: color.name };
          const int2hexResult = id(outer1_2[22]).int2hex(num);
          obj1.color = id(outer1_2[23]).processColorOrThrow(int2hexResult);
          obj1.roleIcon = tmp3;
          return obj1;
        });
      }
    }
  }
  obj4 = {};
  const merged = Object.assign(tmp.baseColors);
  obj4["extendedType"] = CodedLinkExtendedType.GUILD_PROFILE_INVITE;
  obj4["acceptLabelText"] = stringResult;
  obj4["onlineText"] = tmp31;
  obj4["memberText"] = tmp32;
  let name1;
  if (null != guildProfileFromInvite) {
    name1 = guildProfileFromInvite.name;
  }
  obj4["titleText"] = name1;
  let tmp71;
  if (null != guildIconURL) {
    tmp71 = guildIconURL;
  }
  obj4["thumbnailUrl"] = tmp71;
  obj4["thumbnailText"] = acronym;
  let description;
  if (null != guildProfileFromInvite) {
    description = guildProfileFromInvite.description;
  }
  let str2 = "";
  if (null != description) {
    str2 = description;
  }
  obj4["bodyText"] = str2;
  obj4["embedCanBeTapped"] = true;
  obj4["canBeAccepted"] = true;
  let GUILD = invite.type;
  if (null == GUILD) {
    GUILD = InviteTypes.GUILD;
  }
  obj4["type"] = GUILD;
  obj4["inviteSplash"] = tmp24;
  const tmp9 = callback(obj4.getBackgroundForProfile(closure_2, tmp4), 2);
  obj4["bannerColor"] = id(7625).processColorOrThrow(tmp10);
  const obj19 = id(7625);
  obj4["bannerColorSecondary"] = id(7625).processColorOrThrow(tmp11);
  if (null == found) {
    found = [];
  }
  let tmp74 = found.length > 0;
  if (!tmp74) {
    let gameApplicationIds;
    if (null != guildProfileFromInvite) {
      gameApplicationIds = guildProfileFromInvite.gameApplicationIds;
    }
    if (null == gameApplicationIds) {
      gameApplicationIds = [];
    }
    tmp74 = gameApplicationIds.length > 0;
  }
  obj4["hasProfileOverflow"] = tmp74;
  let assetUriForEmbed;
  if (null != guildBadgeImageSource) {
    assetUriForEmbed = id(7635).getAssetUriForEmbed(guildBadgeImageSource);
    const obj21 = id(7635);
  }
  obj4["badgeIconUrl"] = assetUriForEmbed;
  obj4["acceptLabelBackgroundColor"] = tmp.colors.acceptLabelGreenBackgroundColor;
  obj4["establishedText"] = formatToPlainStringResult2;
  obj4["headerText"] = null;
  obj4["roles"] = mapped;
  let stringResult1;
  if (null != mapped) {
    if (mapped.length > 0) {
      const intl9 = id(1212).intl;
      stringResult1 = intl9.string(id(1212).t.stcSfI);
    }
  }
  obj4["rolesHeadingText"] = stringResult1;
  return obj4;
};
