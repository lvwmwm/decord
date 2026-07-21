// Module ID: 7452
// Function ID: 59752
// Name: navigateToSocialLayerStorefrontWithGuildPreview
// Dependencies: []
// Exports: default, eagerNavigateToSocialLayerStorefront, eagerNavigateToSocialLayerStorefrontForApplication

// Module 7452 (navigateToSocialLayerStorefrontWithGuildPreview)
function navigateToSocialLayerStorefrontWithGuildPreview(arg0) {
  return _navigateToSocialLayerStorefrontWithGuildPreview(...arguments);
}
async function _navigateToSocialLayerStorefrontWithGuildPreview(arg0, arg1) {
  const fn = function*(arg0) {
    let guildId;
    let invite;
    let pageIndex;
    let skuId;
    let slug;
    ({ guildId, invite, pageIndex, skuId, slug } = arg0);
    yield undefined;
    let _Set = null;
    if (null != invite) {
      let guild = invite.guild;
      let id;
      if (null != guild) {
        id = guild.id;
      }
      _Set = Set;
      const guild2 = invite.guild;
      let features;
      if (null != guild2) {
        features = guild2.features;
      }
      const prototype = _Set.prototype;
      _Set = new _Set(features);
      guildId = id;
    }
    if (null != guildId) {
      guild = guild.getGuild(guildId);
      let joinedAt;
      if (null != guild) {
        joinedAt = guild.joinedAt;
      }
      if (null == joinedAt) {
        if (null != _Set) {
          if (!_Set.has(constants.PREVIEW_ENABLED)) {
            if (null != invite) {
              let obj = { inviteKey: invite.code };
              obj = { location: "game_shop" };
              obj.context = obj;
              obj.skipOnboarding = true;
              return yield callback2(closure_2[8]).acceptInvite(obj);
            }
          }
        }
        obj = callback(closure_2[7]);
        const obj1 = { shouldNavigate: false };
        yield obj.startLurking(guildId, {}, obj1);
      }
      return callback(closure_2[6]).transitionTo(closure_7.CHANNELS_GAME_SHOP(guildId, pageIndex, skuId, slug));
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ GuildFeatures: closure_6, Routes: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/slayer_storefront/navigateToSocialLayerStorefront.tsx");

export default function navigateToSocialLayerStorefront(arg0) {
  let applicationId;
  let guildId;
  let invite;
  let pageIndex;
  let skuId;
  let slug;
  ({ applicationId, guildId, pageIndex, invite, skuId, slug } = arg0);
  let applicationIdFromGuildId = applicationId;
  if (null == applicationId) {
    applicationIdFromGuildId = applicationIdFromGuildId.getApplicationIdFromGuildId(guildId);
  }
  let socialLayerStorefrontGuildId = guildId;
  if (null == guildId) {
    let obj = arg1(dependencyMap[5]);
    socialLayerStorefrontGuildId = obj.getSocialLayerStorefrontGuildId(applicationId);
  }
  if (null == applicationIdFromGuildId) {
    if (null == socialLayerStorefrontGuildId) {
      if (null == invite) {
        let resolved = Promise.resolve();
      }
      return resolved;
    }
  }
  if (null != applicationIdFromGuildId) {
    resolved = Promise.resolve(arg1(dependencyMap[6]).transitionTo(closure_7.COLLECTIBLES_SHOP_GAME_SHOP(applicationIdFromGuildId, pageIndex, skuId, slug)));
    const obj3 = arg1(dependencyMap[6]);
  } else {
    obj = { guildId: socialLayerStorefrontGuildId, pageIndex, invite, skuId, slug };
    resolved = navigateToSocialLayerStorefrontWithGuildPreview(obj);
  }
};
export const eagerNavigateToSocialLayerStorefront = function eagerNavigateToSocialLayerStorefront(forceFetch) {
  let guildId;
  let invite;
  ({ guildId, invite } = forceFetch);
  if (null != invite) {
    const guild = invite.guild;
    let id;
    if (null != guild) {
      id = guild.id;
    }
    guildId = id;
  }
  if (null != guildId) {
    let obj = arg1(dependencyMap[4]);
    obj = { eager: true, forceFetch: forceFetch.forceFetch };
    const socialLayerStorefront = obj.fetchSocialLayerStorefront(guildId, obj);
  }
};
export const eagerNavigateToSocialLayerStorefrontForApplication = function eagerNavigateToSocialLayerStorefrontForApplication(arg0) {
  let applicationId;
  let forceFetch;
  ({ applicationId, forceFetch } = arg0);
  const socialLayerStorefrontForApplication = arg1(dependencyMap[4]).fetchSocialLayerStorefrontForApplication(applicationId, { eager: true, forceFetch });
};
export { navigateToSocialLayerStorefrontWithGuildPreview };
