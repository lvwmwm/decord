// Module ID: 7458
// Function ID: 59808
// Name: navigateToSocialLayerStorefrontWithGuildPreview
// Dependencies: [5, 1838, 5613, 653, 7459, 5611, 1198, 5736, 7460, 2]
// Exports: default, eagerNavigateToSocialLayerStorefront, eagerNavigateToSocialLayerStorefrontForApplication

// Module 7458 (navigateToSocialLayerStorefrontWithGuildPreview)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
function navigateToSocialLayerStorefrontWithGuildPreview(arg0) {
  return _navigateToSocialLayerStorefrontWithGuildPreview(...arguments);
}
async function _navigateToSocialLayerStorefrontWithGuildPreview(arg0, arg1) {
  let iter = (function*(arg0) {
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
      guild = outer2_4.getGuild(guildId);
      let joinedAt;
      if (null != guild) {
        joinedAt = guild.joinedAt;
      }
      if (null == joinedAt) {
        if (null != _Set) {
          if (!_Set.has(outer2_6.PREVIEW_ENABLED)) {
            if (null != invite) {
              let obj = { inviteKey: invite.code };
              obj = { location: "game_shop" };
              obj.context = obj;
              obj.skipOnboarding = true;
              return yield outer2_1(outer2_2[8]).acceptInvite(obj);
            }
          }
        }
        obj = outer2_0(outer2_2[7]);
        const obj1 = { shouldNavigate: false };
        yield obj.startLurking(guildId, {}, obj1);
      }
      return outer2_0(outer2_2[6]).transitionTo(outer2_7.CHANNELS_GAME_SHOP(guildId, pageIndex, skuId, slug));
    }
  })();
  iter.next();
  return iter;
}
({ GuildFeatures: closure_6, Routes: closure_7 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/slayer_storefront/navigateToSocialLayerStorefront.tsx");

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
    let obj = require(5611) /* _createForOfIteratorHelperLoose */;
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
    resolved = Promise.resolve(require(1198) /* shouldNavigate */.transitionTo(closure_7.COLLECTIBLES_SHOP_GAME_SHOP(applicationIdFromGuildId, pageIndex, skuId, slug)));
    const obj3 = require(1198) /* shouldNavigate */;
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
    let obj = require(7459) /* _fetchSocialLayerStorefront */;
    obj = { eager: true, forceFetch: forceFetch.forceFetch };
    const socialLayerStorefront = obj.fetchSocialLayerStorefront(guildId, obj);
  }
};
export const eagerNavigateToSocialLayerStorefrontForApplication = function eagerNavigateToSocialLayerStorefrontForApplication(arg0) {
  let applicationId;
  let forceFetch;
  ({ applicationId, forceFetch } = arg0);
  const socialLayerStorefrontForApplication = require(7459) /* _fetchSocialLayerStorefront */.fetchSocialLayerStorefrontForApplication(applicationId, { eager: true, forceFetch });
};
export { navigateToSocialLayerStorefrontWithGuildPreview };
