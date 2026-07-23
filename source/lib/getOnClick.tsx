// Module ID: 8343
// Function ID: 66107
// Name: openInviteModal
// Dependencies: [57, 5, 4167, 6758, 5613, 1194, 1917, 1838, 4115, 4349, 1906, 3947, 4970, 653, 655, 5614, 686, 4116, 7460, 8344, 1934, 5048, 5628, 8353, 4114, 4119, 6932, 3821, 675, 10524, 11087, 12209, 10486, 4140, 10827, 12213, 9734, 10465, 1443, 10919, 4981, 12214, 6773, 4324, 4321, 12215, 12217, 2]
// Exports: default

// Module 8343 (openInviteModal)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import items from "items";
import { isGameShopPath } from "STOREFRONT_MARKETING_GUILD_ID";

let AbortCodes;
let AppContext;
let JoinGuildSources;
let Routes;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function openInviteModal() {
  return _openInviteModal(...arguments);
}
function _openInviteModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleInviteCodedLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AbortCodes, AnalyticEvents: closure_12, AppContext, InviteStates: closure_13, JoinGuildSources, Routes } = ME);
({ CollectibleShopTab: closure_14, CollectiblesMobileShopScreen: closure_15 } = items);
let closure_17 = { skipExtensionCheck: undefined, analyticsLocations: [] };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("lib/getOnClick.tsx");

export default function getOnClick(outer1_0) {
  let channelId;
  let dependencyMap;
  let hash;
  let host;
  let hostname;
  let importDefault;
  let pathname;
  let search;
  let tmp = arg1;
  const _require = outer1_0;
  if (arg1 === undefined) {
    tmp = closure_17;
  }
  ({ analyticsLocations: importDefault, messageId: dependencyMap, channelId } = tmp);
  let c3;
  pathname = undefined;
  let obj;
  obj = _require(4114);
  const findCodedLinkResult = obj.findCodedLink(outer1_0);
  c3 = findCodedLinkResult;
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      if (null != preventDefault) {
        preventDefault.preventDefault();
      }
      (function handleInviteCodedLink(c3, closure_2) {
        return outer2_20(...arguments);
      })(c3, closure_2);
      return true;
    };
  }
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      let applicationId;
      let skuId;
      if (null != preventDefault) {
        preventDefault.preventDefault();
      }
      const code = _undefined.code;
      if (_undefined.type !== outer1_0(outer1_2[25]).CodedLinkType.APP_DIRECTORY_PROFILE) {
        if (_undefined.type !== outer1_0(outer1_2[25]).CodedLinkType.APP_DIRECTORY_STOREFRONT) {
          let obj = outer1_0(outer1_2[26]);
          let result = obj.parseStorefrontSkuCodedLink(code);
          if (null == result) {
            obj = { applicationId: undefined, skuId: undefined };
            result = obj;
          }
        }
        ({ applicationId, skuId } = result);
        const guildId = outer1_10.getGuildId();
        if (null != guildId) {
          const tmp9 = guildId;
        }
        if (null != applicationId) {
          obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: tmp9, channel_id: outer1_9.getChannelId() };
          outer1_1(outer1_2[28]).track(outer1_12.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, obj);
          const obj4 = outer1_1(outer1_2[28]);
        }
        outer1_1(outer1_2[27])(outer1_0);
        return true;
      }
      result = { applicationId: code, skuId: undefined };
    };
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === _require(4119).CodedLinkType.ACTIVITY_BOOKMARK) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const code = _undefined.code;
        const application = obj.getApplication(code);
        const uRL = new URL(_undefined.url);
        const searchParams = uRL.searchParams;
        let value = searchParams.get("referrer_id");
        let tmp5;
        if (null != value) {
          tmp5 = value;
        }
        let closure_2 = tmp5;
        _undefined = outer1_1(outer1_2[29])();
        obj = outer1_0(outer1_2[30]);
        const playInContext = obj.getPlayInContext(code);
        const currentChannelId = playInContext.currentChannelId;
        const instanceId = playInContext.instanceId;
        if (playInContext.canLaunchInChannel) {
          let flag2 = !playInContext.isCurrentlyInInstance && null != currentChannelId;
          if (flag2) {
            const searchParams2 = uRL.searchParams;
            const searchParams3 = uRL.searchParams;
            value = searchParams2.get("link_id");
            const customActivityLinkParams = outer1_0(outer1_2[31]).getCustomActivityLinkParams(code, value, searchParams3.get("custom_id"));
            const obj4 = outer1_0(outer1_2[31]);
            customActivityLinkParams.then((() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = pathname(tmp);
              return function() {
                return callback(...arguments);
              };
            })()).catch(() => {

            });
            flag2 = true;
            const nextPromise = customActivityLinkParams.then((() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = pathname(tmp);
              return function() {
                return callback(...arguments);
              };
            })());
          }
          return flag2;
        } else {
          let id;
          if (null != application) {
            const bot = application.bot;
            if (null != bot) {
              id = bot.id;
            }
          }
          let flag = null != id;
          if (flag) {
            obj = { recipientIds: id };
            const obj2 = outer1_1(outer1_2[33]);
            const openPrivateChannelResult = outer1_1(outer1_2[33]).openPrivateChannel(obj);
            outer1_1(outer1_2[33]).openPrivateChannel(obj).then((() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = pathname(tmp);
              return function() {
                return callback(...arguments);
              };
            })()).catch(() => {

            });
            flag = true;
            const nextPromise1 = outer1_1(outer1_2[33]).openPrivateChannel(obj).then((() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = pathname(tmp);
              return function() {
                return callback(...arguments);
              };
            })());
          }
          return flag;
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === _require(4119).CodedLinkType.GUILD_PRODUCT) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const tmp2 = _undefined(_undefined.code.split("-"), 2);
        const outer1_0 = tmp2[0];
        let closure_1 = tmp2[1];
        outer1_0(outer1_2[20])(outer1_2[35], outer1_2.paths).then((openGuildProductLink) => {
          openGuildProductLink.openGuildProductLink(closure_0, closure_1);
        });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === _require(4119).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const str = _undefined.code;
        const tmp2 = _undefined(_undefined.code.split("-"), 2);
        const result = outer1_0(outer1_2[36]).openSocialLayerStorefrontProductDetailsModal({ skuId: _undefined(_undefined.code.split("-"), 2)[0], analyticsLocations: closure_1 });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === _require(4119).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const str = _undefined.code;
        const tmp2 = _undefined(_undefined.code.split("-"), 2);
        const result = outer1_0(outer1_2[36]).openSocialLayerStorefrontProductDetailsModal({ skuId: _undefined(_undefined.code.split("-"), 2)[0], analyticsLocations: closure_1 });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === _require(4119).CodedLinkType.QUESTS_EMBED) {
      if (obj2.getIsEligibleForQuests()) {
        return (preventDefault) => {
          if (null != preventDefault) {
            preventDefault.preventDefault();
          }
          let obj = outer1_1(outer1_2[38]);
          let toURLSafeResult = obj.toURLSafe(_undefined.url);
          if (null == toURLSafeResult) {
            toURLSafeResult = {};
          }
          const search = toURLSafeResult.search;
          let tmp2;
          let tmp3;
          if (null != search) {
            const _URLSearchParams = URLSearchParams;
            const uRLSearchParams = new URLSearchParams(search);
            let value = uRLSearchParams.get("sort");
            let tmp10;
            if (null != value) {
              tmp10 = value;
            }
            value = uRLSearchParams.get("filter");
            let tmp12;
            if (null != value) {
              tmp12 = value;
            }
            tmp3 = tmp12;
            tmp2 = tmp10;
          }
          obj = { scrollToQuestId: _undefined.code };
          let tmp13 = null;
          if (null != tmp2) {
            tmp13 = tmp2;
          }
          obj.sort = tmp13;
          let tmp14 = null;
          if (null != tmp3) {
            tmp14 = tmp3;
          }
          obj.filter = tmp14;
          obj.fromContent = outer1_0(outer1_2[40]).QuestContent.QUEST_SHARE_LINK;
          outer1_0(outer1_2[39]).openQuestHome(obj);
          return true;
        };
      }
      obj2 = _require(10465);
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === _require(4119).CodedLinkType.COLLECTIBLES_SHOP) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const enabled = outer1_0(outer1_2[41]).isVirtualCurrencyEnabled().enabled;
        let obj = outer1_0(outer1_2[41]);
        outer1_0(outer1_2[20])(outer1_2[42], outer1_2.paths).then((openCollectiblesShopMobile) => {
          const tmp3 = callback(outer1_3.code.split("-"), 2)[1];
          if (enabled) {
            if (tmp2 === outer2_14.ORBS) {
              let ORBS = outer2_15.ORBS;
            }
            const obj = { analyticsSource: outer1_1[outer1_1.length - 1], analyticsLocations: outer1_1, screen: ORBS };
            let tmp9;
            if (tmp4) {
              tmp9 = tmp3;
            }
            obj.initialProductSkuId = tmp9;
            const result = openCollectiblesShopMobile.openCollectiblesShopMobile(obj);
          }
          ORBS = tmp4 ? tmp6.SHOP_ALL : tmp6.FEATURED_PAGE;
        });
        return true;
      };
    }
  }
  let toURLSafeResult = importDefault(1443).toURLSafe(outer1_0);
  if (null == toURLSafeResult) {
    toURLSafeResult = {};
  }
  ({ host, hostname, pathname } = toURLSafeResult);
  ({ search, hash } = toURLSafeResult);
  const obj3 = importDefault(1443);
  let tmp19 = null;
  if (null != hostname) {
    tmp19 = hostname;
  }
  let isDiscordHostnameResult = importDefault(1443).isDiscordHostname(tmp19);
  if (!isDiscordHostnameResult) {
    let tmp23 = null;
    if (null != host) {
      tmp23 = host;
    }
    let tmp24 = null;
    if (null != hostname) {
      tmp24 = hostname;
    }
    isDiscordHostnameResult = importDefault(1443).isDiscordLocalhost(tmp23, tmp24);
    const obj6 = importDefault(1443);
  }
  if (isDiscordHostnameResult) {
    if (null != pathname) {
      if (isGameShopPath(pathname)) {
        return (preventDefault) => {
          if (null != preventDefault) {
            preventDefault.preventDefault();
          }
          const result = outer1_0(outer1_2[36]).openSocialLayerStorefrontUnsupportedOnMobileAlert();
          return true;
        };
      }
    }
  }
  if (null != pathname) {
    if (isDiscordHostnameResult) {
      if (obj7.isAppRoute(pathname)) {
        obj = { navigationReplace: false, openChannel: true };
        if (null != search) {
          obj.search = search;
        }
        if (null != hash) {
          obj.hash = hash;
        }
        return (preventDefault) => {
          if (null != preventDefault) {
            preventDefault.preventDefault();
          }
          outer1_1(outer1_2[22])(pathname, obj);
          return true;
        };
      }
      obj7 = importDefault(1443);
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === _require(4119).CodedLinkType.APP_OAUTH2_LINK) {
      let fn = (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        let obj = outer1_1(outer1_2[43]);
        obj = { application_id: _undefined.code };
        obj.trackWithMetadata(outer1_12.APP_OAUTH2_LINK_EMBED_URL_CLICKED, obj);
        outer1_1(outer1_2[27])(closure_0);
        return true;
      };
    }
    return fn;
  }
  const obj5 = importDefault(1443);
  let result = _require(4321).tryParseEventDetailsPath(pathname);
  if (!tmp.skipExtensionCheck) {
    if (null != obj9.isSuspiciousDownload(outer1_0)) {
      fn = (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        outer1_1(outer1_2[46]).show(closure_0);
        return true;
      };
    }
    obj9 = _require(12215);
  }
};
