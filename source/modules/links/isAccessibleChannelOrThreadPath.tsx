// Module ID: 5628
// Function ID: 48036
// Name: _isAccessibleChannelOrThreadPath
// Dependencies: [5, 1908, 5054, 1348, 1910, 1838, 653, 1355, 5629, 5631, 5640, 5609, 5643, 5645, 5605, 5646, 5647, 4041, 5648, 5607, 1327, 5690, 4140, 4321, 2]
// Exports: default

// Module 5628 (_isAccessibleChannelOrThreadPath)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
async function _isAccessibleChannelOrThreadPath(arg0, arg1) {
  let iter = (function*(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    yield undefined;
    const guild = outer2_8.getGuild(guildId);
    const unsafeMutableRoles = outer2_7.getUnsafeMutableRoles(guildId);
    if (null == guild) {
      if (guildId !== outer2_10) {
        if (channelId !== outer2_12.GAME_SHOP) {
          return false;
        }
      }
    }
    if (null == channelId) {
      return true;
    } else {
      if (outer2_11(channelId)) {
        if (outer2_12.VIBEGRATIONS === channelId) {
          let result = null != guild;
          if (result) {
            result = outer2_0(outer2_2[8]).canManageVibegrations(guild, "isAccessibleChannelOrThreadPath");
            const obj15 = outer2_0(outer2_2[8]);
          }
          return result;
        } else if (outer2_12.ROLE_SUBSCRIPTIONS === channelId) {
          return outer2_0(outer2_2[9]).areRoleSubscriptionsVisibleInGuild(guildId, unsafeMutableRoles);
        } else if (outer2_12.SERVER_MONETIZATION_ONBOARDING === channelId) {
          let result1 = null != guild;
          if (result1) {
            result1 = outer2_0(outer2_2[10]).canUserSeeMonetizationOnboarding(guild);
            const obj13 = outer2_0(outer2_2[10]);
          }
          return result1;
        } else if (outer2_12.GAME_SHOP === channelId) {
          let tmp50 = guild;
          if (null == guild) {
            let obj = { id: guildId, type: "id-only" };
            tmp50 = obj;
          }
          return outer2_0(outer2_2[11]).hasSocialLayerStorefront(tmp50);
        } else if (outer2_12.GUILD_SHOP === channelId) {
          return outer2_0(outer2_2[12]).isGuildShopVisibleInGuild(guild, unsafeMutableRoles);
        } else if (outer2_12.MEMBER_APPLICATIONS === channelId) {
          return outer2_0(outer2_2[13]).canReviewGuildMemberApplications(guildId);
        } else if (outer2_12.GUILD_HOME === channelId) {
          return outer2_0(outer2_2[14]).canSeeOnboardingHome(guildId);
        } else if (outer2_12.CHANNEL_BROWSER === channelId) {
          let hasItem = null != guild;
          if (hasItem) {
            const features3 = guild.features;
            hasItem = features3.has(outer2_9.COMMUNITY);
          }
          return hasItem;
        } else if (outer2_12.GUILD_ONBOARDING === channelId) {
          return outer2_5.shouldShowOnboarding(guildId);
        } else if (outer2_12.CUSTOMIZE_COMMUNITY === channelId) {
          let hasItem1 = null != guild;
          if (hasItem1) {
            const features2 = guild.features;
            hasItem1 = features2.has(outer2_9.COMMUNITY);
          }
          return hasItem1;
        } else if (outer2_12.MEMBER_SAFETY === channelId) {
          return outer2_0(outer2_2[15]).canAccessMemberSafetyPage(guildId);
        } else if (outer2_12.GUILD_BOOSTS === channelId) {
          return true;
        } else if (outer2_12.REPORT_TO_MOD === channelId) {
          let tmp32 = null != guild;
          if (tmp32) {
            tmp32 = outer2_1(outer2_2[16])(guild);
          }
          return tmp32;
        } else if (outer2_12.GAME_SERVERS === channelId) {
          let hasItem2 = outer2_0(outer2_2[17]).getGameServerEnabled(guildId, "isAccessibleChannelOrThreadPath") && null != guild;
          if (hasItem2) {
            const features = guild.features;
            hasItem2 = features.has(outer2_9.GAME_SERVERS);
          }
          return hasItem2;
        } else if (outer2_12.GUILD_OFFICIAL_MESSAGES === channelId) {
          return outer2_0(outer2_2[18]).isGuildOfficialMessagesEnabled(guild, "isAccessibleChannelOrThreadPath");
        } else if (outer2_12.GUILD_SPACE === channelId) {
          return outer2_0(outer2_2[19]).canUseGuildSpace(guild, "isAccessibleChannelOrThreadPath");
        } else {
          outer2_0(outer2_2[20]).assertNever(channelId);
          const obj16 = outer2_0(outer2_2[20]);
        }
      }
      const channel = outer2_6.getChannel(channelId);
      let tmp9 = null != channel;
      let tmp10 = channel;
      if (!tmp9) {
        obj = outer2_1(outer2_2[21]);
        yield obj.loadThread(channelId);
        let channel1 = outer2_6.getChannel(channelId);
        let tmp16 = null == channel1;
        if (tmp16) {
          tmp16 = guildId === outer2_10;
        }
        if (tmp16) {
          channel1 = yield outer2_1(outer2_2[22]).openChannel(channelId);
          const obj2 = outer2_1(outer2_2[22]);
        }
        tmp9 = null != channel1;
        tmp10 = channel1;
      }
      if (tmp9) {
        let canViewChannelResult = outer2_0(outer2_2[23]).canViewChannel(tmp10);
        if (!canViewChannelResult) {
          canViewChannelResult = outer2_4.isChannelGatedAndVisible(guildId, channelId);
        }
        tmp9 = canViewChannelResult;
        const obj3 = outer2_0(outer2_2[23]);
      }
      return tmp9;
    }
  })();
  iter.next();
  return iter;
}
({ GuildFeatures: closure_9, ME: closure_10 } = ME);
({ isStaticChannelRoute: closure_11, StaticChannelRoute: closure_12 } = set);
let result = set.fileFinishedImporting("modules/links/isAccessibleChannelOrThreadPath.tsx");

export default function isAccessibleChannelOrThreadPath() {
  return _isAccessibleChannelOrThreadPath(...arguments);
};
