// Module ID: 5626
// Function ID: 48004
// Name: _isAccessibleChannelOrThreadPath
// Dependencies: []
// Exports: default

// Module 5626 (_isAccessibleChannelOrThreadPath)
async function _isAccessibleChannelOrThreadPath(arg0, arg1) {
  const fn = function*(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    yield undefined;
    const guild = guild.getGuild(guildId);
    const unsafeMutableRoles = unsafeMutableRoles.getUnsafeMutableRoles(guildId);
    if (null == guild) {
      if (guildId !== closure_10) {
        if (channelId !== constants2.GAME_SHOP) {
          return false;
        }
      }
    }
    if (null == channelId) {
      return true;
    } else {
      if (callback3(channelId)) {
        if (constants2.ROLE_SUBSCRIPTIONS === channelId) {
          return callback(closure_2[8]).areRoleSubscriptionsVisibleInGuild(guildId, unsafeMutableRoles);
        } else if (constants2.SERVER_MONETIZATION_ONBOARDING === channelId) {
          let result = null != guild;
          if (result) {
            result = callback(closure_2[9]).canUserSeeMonetizationOnboarding(guild);
            const obj12 = callback(closure_2[9]);
          }
          return result;
        } else if (constants2.GAME_SHOP === channelId) {
          let tmp48 = guild;
          if (null == guild) {
            let obj = { id: guildId, type: "id-only" };
            tmp48 = obj;
          }
          return callback(closure_2[10]).hasSocialLayerStorefront(tmp48);
        } else if (constants2.GUILD_SHOP === channelId) {
          return callback(closure_2[11]).isGuildShopVisibleInGuild(guild, unsafeMutableRoles);
        } else if (constants2.MEMBER_APPLICATIONS === channelId) {
          return callback(closure_2[12]).canReviewGuildMemberApplications(guildId);
        } else if (constants2.GUILD_HOME === channelId) {
          return callback(closure_2[13]).canSeeOnboardingHome(guildId);
        } else if (constants2.CHANNEL_BROWSER === channelId) {
          let hasItem = null != guild;
          if (hasItem) {
            const features3 = guild.features;
            hasItem = features3.has(constants.COMMUNITY);
          }
          return hasItem;
        } else if (constants2.GUILD_ONBOARDING === channelId) {
          return closure_5.shouldShowOnboarding(guildId);
        } else if (constants2.CUSTOMIZE_COMMUNITY === channelId) {
          let hasItem1 = null != guild;
          if (hasItem1) {
            const features2 = guild.features;
            hasItem1 = features2.has(constants.COMMUNITY);
          }
          return hasItem1;
        } else if (constants2.MEMBER_SAFETY === channelId) {
          return callback(closure_2[14]).canAccessMemberSafetyPage(guildId);
        } else if (constants2.GUILD_BOOSTS === channelId) {
          return true;
        } else if (constants2.REPORT_TO_MOD === channelId) {
          let tmp30 = null != guild;
          if (tmp30) {
            tmp30 = callback2(closure_2[15])(guild);
          }
          return tmp30;
        } else if (constants2.GAME_SERVERS === channelId) {
          let hasItem2 = callback(closure_2[16]).getGameServerEnabled(guildId, "isAccessibleChannelOrThreadPath") && null != guild;
          if (hasItem2) {
            const features = guild.features;
            hasItem2 = features.has(constants.GAME_SERVERS);
          }
          return hasItem2;
        } else if (constants2.GUILD_OFFICIAL_MESSAGES === channelId) {
          return callback(closure_2[17]).isGuildOfficialMessagesEnabled(guild, "isAccessibleChannelOrThreadPath");
        } else {
          callback(closure_2[18]).assertNever(channelId);
          const obj14 = callback(closure_2[18]);
        }
      }
      const channel = store.getChannel(channelId);
      let tmp9 = null != channel;
      let tmp10 = channel;
      if (!tmp9) {
        obj = callback2(closure_2[19]);
        yield obj.loadThread(channelId);
        let channel1 = store.getChannel(channelId);
        let tmp16 = null == channel1;
        if (tmp16) {
          tmp16 = guildId === closure_10;
        }
        if (tmp16) {
          channel1 = yield callback2(closure_2[20]).openChannel(channelId);
          const obj2 = callback2(closure_2[20]);
        }
        tmp9 = null != channel1;
        tmp10 = channel1;
      }
      if (tmp9) {
        let canViewChannelResult = callback(closure_2[21]).canViewChannel(tmp10);
        if (!canViewChannelResult) {
          canViewChannelResult = channelGatedAndVisible.isChannelGatedAndVisible(guildId, channelId);
        }
        tmp9 = canViewChannelResult;
        const obj3 = callback(closure_2[21]);
      }
      return tmp9;
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ GuildFeatures: closure_9, ME: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ isStaticChannelRoute: closure_11, StaticChannelRoute: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/links/isAccessibleChannelOrThreadPath.tsx");

export default function isAccessibleChannelOrThreadPath() {
  return _isAccessibleChannelOrThreadPath(...arguments);
};
