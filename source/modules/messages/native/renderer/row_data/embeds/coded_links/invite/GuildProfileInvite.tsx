// Module ID: 12167
// Function ID: 93583
// Name: createGuildProfileInvite
// Dependencies: []
// Exports: createGuildProfileInvite

// Module 12167 (createGuildProfileInvite)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const CodedLinkExtendedType = arg1(dependencyMap[2]).CodedLinkExtendedType;
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const InviteTypes = arg1(dependencyMap[4]).InviteTypes;
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx");

export const createGuildProfileInvite = function createGuildProfileInvite(invite, theme) {
  let tmp10;
  let tmp11;
  const tmp = importDefault(dependencyMap[5])(theme);
  let obj = theme(dependencyMap[6]);
  const guildProfileFromInvite = obj.buildGuildProfileFromInvite(invite);
  let obj1 = theme(dependencyMap[7]);
  const unsafe_rawColors = importDefault(dependencyMap[8]).unsafe_rawColors;
  let tmp4 = obj1.isThemeDark(theme) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_160;
  let fromGuildProfileResult = null;
  if (null != guildProfileFromInvite) {
    let obj2 = theme(dependencyMap[9]);
    fromGuildProfileResult = obj2.fromGuildProfile(guildProfileFromInvite);
  }
  let obj3 = theme(dependencyMap[10]);
  const profilePrimaryColor = obj3.getProfilePrimaryColor(guildProfileFromInvite);
  let obj4 = theme(dependencyMap[11]);
  if (null != profilePrimaryColor) {
    tmp4 = profilePrimaryColor;
  }
  const isThemeDarkResult = obj1.isThemeDark(theme);
  let memberCount;
  [tmp10, tmp11] = callback(obj4.getBackgroundForProfile(theme, tmp4), 2);
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
    const guildIconURL = importDefault(dependencyMap[12]).getGuildIconURL(obj);
    const obj7 = importDefault(dependencyMap[12]);
  } else {
    let name;
    if (null != guildProfileFromInvite) {
      name = guildProfileFromInvite.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    const acronym = theme(dependencyMap[13]).getAcronym(str);
    const obj6 = theme(dependencyMap[13]);
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
      obj.size = 400 * importDefault(dependencyMap[14])();
      const guildDiscoverySplashURL = importDefault(dependencyMap[12]).getGuildDiscoverySplashURL(obj);
      if (null != guildDiscoverySplashURL) {
        tmp24 = guildDiscoverySplashURL;
      }
      const obj9 = importDefault(dependencyMap[12]);
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
      const intl = theme(dependencyMap[15]).intl;
      obj1 = { membersOnline: onlineCount };
      formatToPlainStringResult = intl.formatToPlainString(theme(dependencyMap[15]).t.LC+S+m, obj1);
    }
    let formatToPlainStringResult1;
    if (null != memberCount) {
      const intl2 = theme(dependencyMap[15]).intl;
      obj2 = { count: memberCount };
      formatToPlainStringResult1 = intl2.formatToPlainString(theme(dependencyMap[15]).t.zRl6XR, obj2);
    }
    tmp32 = formatToPlainStringResult1;
    tmp31 = formatToPlainStringResult;
  }
  let guildProfileCTAType = null;
  if (null != guildProfileFromInvite) {
    guildProfileCTAType = theme(dependencyMap[16]).getGuildProfileCTAType(guildProfileFromInvite, invite.code);
    const obj13 = theme(dependencyMap[16]);
  }
  if (theme(dependencyMap[16]).CTATypes.IS_MEMBER === guildProfileCTAType) {
    const intl7 = theme(dependencyMap[15]).intl;
    let stringResult = intl7.string(theme(dependencyMap[15]).t.IRoQXr);
  } else if (theme(dependencyMap[16]).CTATypes.HAS_APPLICATION === guildProfileCTAType) {
    const intl6 = theme(dependencyMap[15]).intl;
    stringResult = intl6.string(theme(dependencyMap[15]).t.4yfIDk);
  } else if (theme(dependencyMap[16]).CTATypes.APPLY_TO_JOIN === guildProfileCTAType) {
    const intl5 = theme(dependencyMap[15]).intl;
    stringResult = intl5.string(theme(dependencyMap[15]).t.7XdMW2);
  } else if (theme(dependencyMap[16]).CTATypes.ACCEPT_ROLES === guildProfileCTAType) {
    const intl4 = theme(dependencyMap[15]).intl;
    stringResult = intl4.string(theme(dependencyMap[15]).t.MMlhsr);
  } else {
    if (theme(dependencyMap[16]).CTATypes.LURK_DISCOVERABLE !== guildProfileCTAType) {
      const JOIN_VIA_INVITE = theme(dependencyMap[16]).CTATypes.JOIN_VIA_INVITE;
    }
    const intl3 = theme(dependencyMap[15]).intl;
    stringResult = intl3.string(theme(dependencyMap[15]).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != fromGuildProfileResult) {
    guildBadgeImageSource = theme(dependencyMap[17]).getGuildBadgeImageSource(fromGuildProfileResult, theme);
    const obj14 = theme(dependencyMap[17]);
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
    const obj15 = theme(dependencyMap[18]);
    const establishedDate = obj15.getEstablishedDate(importDefault(dependencyMap[19]).extractTimestamp(guildProfileFromInvite.id), locale.locale);
    const intl8 = theme(dependencyMap[15]).intl;
    obj3 = { createdAtDate: establishedDate };
    formatToPlainStringResult2 = intl8.formatToPlainString(theme(dependencyMap[15]).t.zb2Q56, obj3);
    const obj16 = importDefault(dependencyMap[19]);
  }
  let mapped;
  if (null != invite.roles) {
    if (invite.roles.length > 0) {
      if (null != invite.guild) {
        theme = invite.guild.id;
        const items = [];
        HermesBuiltin.arraySpread(invite.roles, 0);
        const sorted = items.sort(theme(dependencyMap[20]).sortInviteRoles);
        mapped = sorted.map((color) => {
          let customIconSrc;
          let unicodeEmoji;
          let obj = id(closure_2[20]);
          const result = obj.inviteRoleToDisplayData(id, color);
          let obj1 = id(closure_2[21]);
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
          const obj4 = id(closure_2[22]);
          if (null != customIconSrc) {
            obj = { source: customIconSrc };
            let surrogates;
            if (null != unicodeEmoji) {
              surrogates = unicodeEmoji.surrogates;
            }
            obj.unicodeEmoji = surrogates;
            obj.name = color.name;
            obj.size = 16;
            const intl = id(closure_2[15]).intl;
            obj = { name: color.name };
            obj.alt = intl.formatToPlainString(id(closure_2[15]).t.9+YWrE, obj);
            const tmp3 = obj;
          }
          obj1 = { id: color.id, name: color.name };
          const int2hexResult = id(closure_2[22]).int2hex(num);
          obj1.color = id(closure_2[23]).processColorOrThrow(int2hexResult);
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
  const tmp9 = callback(obj4.getBackgroundForProfile(theme, tmp4), 2);
  obj4["bannerColor"] = theme(dependencyMap[23]).processColorOrThrow(tmp10);
  const obj19 = theme(dependencyMap[23]);
  obj4["bannerColorSecondary"] = theme(dependencyMap[23]).processColorOrThrow(tmp11);
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
    assetUriForEmbed = theme(dependencyMap[24]).getAssetUriForEmbed(guildBadgeImageSource);
    const obj21 = theme(dependencyMap[24]);
  }
  obj4["badgeIconUrl"] = assetUriForEmbed;
  obj4["acceptLabelBackgroundColor"] = tmp.colors.acceptLabelGreenBackgroundColor;
  obj4["establishedText"] = formatToPlainStringResult2;
  obj4["headerText"] = null;
  obj4["roles"] = mapped;
  let stringResult1;
  if (null != mapped) {
    if (mapped.length > 0) {
      const intl9 = theme(dependencyMap[15]).intl;
      stringResult1 = intl9.string(theme(dependencyMap[15]).t.stcSfI);
    }
  }
  obj4["rolesHeadingText"] = stringResult1;
  return obj4;
};
