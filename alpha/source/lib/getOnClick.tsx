// Module ID: 8945
// Function ID: 8946
// Name: getOnClick
// Dependencies: [32, 5, 2038, 6855, 7406, 502, 4926, 4885, 5749, 6061, 4917, 5045, 6772, 1072, 1074, 7407, 572, 5750, 8946, 8967, 1994, 6902, 7421, 8962, 5748, 5752, 7834, 5705, 1252, 13693, 11688, 14749, 11692, 7835, 14753, 11561, 10669, 9673, 1377, 9678, 6786, 14754, 7719, 5760, 5654, 8711, 11616, 2]
// Exports: default

// Module 8945 (getOnClick)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import URLUtilsDefault from "URLUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import openURLDefault from "openURL" /* 5705 */;
import CodedLink from "CodedLink" /* 5752 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5760 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 7407 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7421 */;
import _slicedToArray2 from "_slicedToArray" /* 7834 */;
import activityBookmarkUtils from "activityBookmarkUtils" /* 7835 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8946 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import storefrontCodedLink from "storefrontCodedLink" /* 11561 */;
import SuspiciousDownloadModalActionCreatorsDefault from "SuspiciousDownloadModalActionCreators" /* 11616 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11692 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6855 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7406 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import InviteStore from "InviteStore" /* 5749 */;
import MessageStore from "MessageStore" /* 6061 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, closure_5, customId, invite, openCollectiblesShopMobile, roles;

let AbortCodes;
let AppContext;
let JoinGuildSources;
let Routes;
let closure_12;
let closure_14;
let closure_15;
let map1;
let tmp;
let tmp11;
const QuestContent = tmp11(6786);
const SocialLayerStorefrontNativeActionCreators = tmp(10669);
function openInviteModal() {
  return obj(...arguments);
}
let obj = function _openInviteModal() {
  obj = _asyncToGenerator(async (arg0, code, invite_instance_id) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value, arg2) => {
      let obj2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              c3 = 1;
              c2 = 1;
              const obj5 = { type: "DISPLAYED_INVITE_SHOW", code, username: "Array", deeplinkAttemptId: "applicationId", invite_instance_id };
              const obj6 = { value: obj2.dispatch(obj5), done: false };
              obj2 = DispatcherDefault;
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleInviteCodedLink() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_3;
    let code = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp2;
              code = undefined;
              let flattenedGuildIds;
              let id;
              let hasItem;
              let closure_6;
              let id2;
              roles = undefined;
              let _Set1;
              code = code.code;
              const obj12 = require("InviteCodeUtils");
              const inviteInstanceId = obj12.getInviteInstanceId(code, closure_1);
              _undefined = invite.getInvite(code);
              const tmp11 = null != _undefined && _undefined.state !== constants.ERROR;
              if (tmp11) {
                if (null != _undefined) {
                  if (_undefined.state !== closure_133_13.EXPIRED) {
                    if (_undefined.state !== closure_133_13.BANNED) {
                      if (_undefined.state !== closure_133_13.ERROR) {
                        flattenedGuildIds = closure_133_11.getFlattenedGuildIds();
                        id = undefined;
                        if (_undefined != null) {
                          const guild = _undefined.guild;
                          if (guild != null) {
                            id = guild.id;
                          }
                        }
                        hasItem = null != id && flattenedGuildIds.includes(id);
                        closure_6 = false;
                        const tmp42 = hasItem;
                        if (tmp42) {
                          if (null != _undefined.roles) {
                            if (_undefined.roles.length > 0) {
                              id2 = closure_133_6.getId();
                              roles = closure_133_7.getMember(id, id2);
                              let roles1;
                              const _Set = Set;
                              if (roles != null) {
                                roles1 = roles.roles;
                              }
                              flattenedGuildIds = roles1;
                              if (roles1 == null) {
                                flattenedGuildIds = [];
                              }
                              const self = this;
                              const self2 = this;
                              _Set1 = new _Set(flattenedGuildIds);
                              roles = _undefined.roles;
                              closure_6 = roles.some((id) => !set.has(id.id));
                            }
                          }
                        }
                        const tmp51 = hasItem;
                        if (tmp51) {
                          const tmp52 = closure_6;
                          if (!tmp52) {
                            const obj8 = closure_133_1(closure_133_2[18]);
                            obj8.transitionToInvite(_undefined, { forceTransition: true });
                          }
                        }
                        c6 = 3;
                        c7 = 1;
                        const obj5 = { value: closure_133_17(_undefined, code, inviteInstanceId), done: false };
                        return obj5;
                      }
                    }
                  }
                  c6 = 2;
                  c7 = 1;
                  const obj6 = { value: closure_133_17(_undefined, code, inviteInstanceId), done: false };
                  return obj6;
                }
              } else {
                c6 = 1;
                c7 = 1;
                const obj7 = { inviteInstanceId };
                const obj9 = { value: obj4.resolveInvite(code, "Markdown Link", obj7), done: false };
                obj4 = InstantInviteActionCreatorsDefault;
                return obj9;
              }
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              invite = value.invite;
              let c2 = invite;
              if (invite == null) {
                c2 = undefined;
              }
              _undefined = c2;
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          }
          c7 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp63) {
          c7 = 3;
          throw tmp63;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AbortCodes, AnalyticEvents: closure_12, AppContext, InviteStates: map1, JoinGuildSources, Routes } = Constants);
({ CollectibleShopTab: closure_14, CollectiblesMobileShopScreen: closure_15 } = CollectiblesShopConstants);
const isGameShopPath = SocialLayerStorefrontConstants.isGameShopPath;
let closure_20 = { skipExtensionCheck: "Array", analyticsLocations: [] };
let result = size.fileFinishedImporting("lib/getOnClick.tsx");

export default function getOnClick(assetURL) {
  let _undefined;
  let analyticsLocations;
  let channelId;
  let fn;
  let hash;
  let host;
  let hostname;
  let pathname;
  let paths;
  let search;
  _require = assetURL;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_20;
  }
  ({ analyticsLocations: importDefault, messageId: dependencyMap, channelId } = tmp);
  pathname = undefined;
  let obj2;
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  const skipExtensionCheck = tmp.skipExtensionCheck;
  obj = require("findCodedLinks");
  const findCodedLinkResult = obj.findCodedLink(assetURL);
  let c3 = findCodedLinkResult;
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      function handleInviteCodedLink() {
        return closure_1_19(...arguments);
      }
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      handleInviteCodedLink(c3, dependencyMap);
      return true;
    };
  }
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      let applicationId;
      let skuId;
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      const code = _undefined.code;
      const tmp2 = _undefined;
      if (_undefined.type !== CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE) {
        let result;
        if (tmp2.type !== CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT) {
          const tmp3Result = _slicedToArray2;
          result = tmp3Result.parseStorefrontSkuCodedLink(code);
          if (result == null) {
            result = { applicationId: "Array", skuId: "flexDirection" };
          }
        }
        ({ applicationId, skuId } = result);
        const guildId = SelectedGuildStore.getGuildId();
        if (null != applicationId) {
          obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId, channel_id: SelectedChannelStore.getChannelId() };
          const track = AnalyticsUtilsDefault.track;
          const APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED = authStore2.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED;
          AnalyticsUtilsDefault;
          track(APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, obj);
        }
        openURLDefault(assetURL);
        return true;
      }
      result = { applicationId: code, skuId: "a" };
    };
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5752).CodedLinkType.ACTIVITY_BOOKMARK) {
      return (preventDefault) => {
        let c3;
        let canLaunchInChannel;
        let isCurrentlyInInstance;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const code = _undefined.code;
        const url = _undefined.url;
        const application = obj2.getApplication(code);
        const uRL = new URL(url);
        const searchParams = uRL.searchParams;
        const value = searchParams.get("referrer_id");
        const referrerId = value;
        obj = assetURL(dependencyMap[29]);
        const playInContext = obj.getPlayInContext(code);
        ({ currentChannelId: c3, isCurrentlyInInstance, canLaunchInChannel } = playInContext);
        if (!isCurrentlyInInstance) {
          let tmp8 = !canLaunchInChannel;
          if (tmp8) {
            let bot;
            if (application != null) {
              bot = application.bot;
            }
            tmp8 = null == bot;
          }
          if (tmp8) {
            const tmp5Result = assetURL(dependencyMap[30]);
            tmp8 = !tmp5Result.canOpenFrame(application);
          }
          isCurrentlyInInstance = tmp8;
        }
        let flag = !isCurrentlyInInstance;
        if (flag) {
          const searchParams2 = uRL.searchParams;
          const getCustomActivityLinkParams = assetURL(dependencyMap[31]).getCustomActivityLinkParams;
          const searchParams3 = uRL.searchParams;
          assetURL(dependencyMap[31]);
          const value2 = searchParams2.get("link_id");
          const customActivityLinkParams = getCustomActivityLinkParams(code, value2, searchParams3.get("custom_id"));
          const nextPromise = customActivityLinkParams.then((customId) => {
            let tmp3;
            customId = customId.customId;
            obj = { applicationId: code, channelId: tmp3, fromLink: true, linkChannelId: obj2.getLinkChannelId(uRL), customId, referrerId, analyticsLocations: importDefault };
            tmp3 = null;
            const launch = GamesActionCreatorsDefault.launch;
            GamesActionCreatorsDefault;
            if (canLaunchInChannel) {
              tmp3 = _undefined;
            }
            obj2 = activityBookmarkUtils;
            return launch(obj);
          });
          nextPromise.catch(() => {

          });
          flag = true;
        }
        return flag;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5752).CodedLinkType.GUILD_PRODUCT) {
      return (preventDefault) => {
        let closure_129_0;
        let closure_129_1;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        [closure_129_0, closure_129_1] = _undefined.code.split("-");
        _slicedToArray(_undefined.code.split("-"), 2);
        const promise = asyncRequire(14753, dependencyMap.paths);
        promise.then((openGuildProductLink) => {
          openGuildProductLink.openGuildProductLink(closure_1_0, closure_1_1);
        });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5752).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
      return (preventDefault) => {
        obj = storefrontCodedLink;
        const result = obj.parseStorefrontCodedLink(_undefined.code);
        if (null == result) {
          return false;
        } else {
          const scopeId = result.scopeId;
          if (result.skuIds.length > 1) {
            return false;
          } else {
            if (preventDefault != null) {
              preventDefault.preventDefault();
            }
            obj2 = { skuId: _slicedToArray(result.skuIds, 1)[0], analyticsLocations: importDefault };
            const result1 = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal(obj2);
            return true;
          }
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5752).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      return (preventDefault) => {
        obj = storefrontCodedLink;
        const result = obj.parseStorefrontCodedLink(_undefined.code);
        if (null == result) {
          return false;
        } else {
          const scopeId = result.scopeId;
          if (result.skuIds.length > 1) {
            return false;
          } else {
            if (preventDefault != null) {
              preventDefault.preventDefault();
            }
            obj2 = { skuId: _slicedToArray(result.skuIds, 1)[0], analyticsLocations: importDefault };
            const result1 = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal(obj2);
            return true;
          }
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5752).CodedLinkType.QUESTS_EMBED) {
      const tmp2Result = tmp2(9673);
      if (tmp2Result.getIsEligibleForQuests()) {
        return function(preventDefault) {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          obj = URLUtilsDefault;
          let toURLSafeResult = obj.toURLSafe(_undefined.url);
          const tmp3 = _undefined;
          if (toURLSafeResult == null) {
            toURLSafeResult = {};
          }
          const search = toURLSafeResult.search;
          let tmp4;
          let tmp5;
          if (null != search) {
            const _URLSearchParams = URLSearchParams;
            const self = this;
            const self2 = this;
            const uRLSearchParams = new URLSearchParams(search);
            const value = uRLSearchParams.get("sort");
            const value2 = uRLSearchParams.get("filter");
            tmp4 = value2;
            tmp5 = value;
          }
          obj2 = { scrollToQuestId: tmp3.code, sort: tmp5, filter: tmp4, fromContent: QuestContent.QuestContent.QUEST_SHARE_LINK };
          const openQuestHome = QuestUtils.openQuestHome;
          if (tmp5 == null) {
            tmp5 = null;
          }
          if (tmp4 == null) {
            tmp4 = null;
          }
          openQuestHome(obj2);
          return true;
        };
      }
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5752).CodedLinkType.COLLECTIBLES_SHOP) {
      return (preventDefault) => {
        let code;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = assetURL(dependencyMap[41]);
        const enabled = obj.isVirtualCurrencyEnabled().enabled;
        const promise = assetURL(dependencyMap[20])(dependencyMap[42], dependencyMap.paths);
        promise.then((openCollectiblesShopMobile) => {
          let tmp10;
          openCollectiblesShopMobile = openCollectiblesShopMobile.openCollectiblesShopMobile;
          const str = code.code;
          const tmp3 = _slicedToArray(str.split("-"), 2)[1];
          const tmp5 = enabled;
          if (tmp5) {
            let ORBS;
            if (tmp2 === constants.ORBS) {
              ORBS = constants2.ORBS;
            }
            obj = { analyticsSource: importDefault[importDefault.length - 1], analyticsLocations: importDefault, screen: ORBS, initialProductSkuId: tmp10 };
            tmp10 = undefined;
            if ("" !== tmp3) {
              tmp10 = tmp3;
            }
            const result = openCollectiblesShopMobile(obj);
          }
          ORBS = tmp4 ? tmp7.SHOP_ALL : tmp7.FEATURED_PAGE;
        });
        return true;
      };
    }
  }
  let tmp5 = importDefault;
  const obj3 = URLUtilsDefault;
  let toURLSafeResult = obj3.toURLSafe(assetURL);
  if (toURLSafeResult == null) {
    toURLSafeResult = {};
  }
  ({ host, hostname, pathname } = toURLSafeResult);
  ({ search, hash } = toURLSafeResult);
  let tmp5Result = URLUtilsDefault;
  let tmp7 = hostname;
  const isDiscordHostname = tmp5Result.isDiscordHostname;
  if (hostname == null) {
    tmp7 = null;
  }
  let isDiscordHostnameResult = isDiscordHostname(tmp7);
  if (!isDiscordHostnameResult) {
    const isDiscordLocalhost = URLUtilsDefault.isDiscordLocalhost;
    URLUtilsDefault;
    if (host == null) {
      host = null;
    }
    if (hostname == null) {
      hostname = null;
    }
    isDiscordHostnameResult = isDiscordLocalhost(host, hostname);
  }
  if (isDiscordHostnameResult) {
    if (null != pathname) {
      let tmp10 = isGameShopPath;
      if (isGameShopPath(pathname)) {
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          const result = assetURL(dependencyMap[36]).openSocialLayerStorefrontUnsupportedOnMobileAlert();
          return true;
        };
      }
    }
  }
  if (null != pathname) {
    if (isDiscordHostnameResult) {
      const tmp5Result4 = URLUtilsDefault;
      if (tmp5Result4.isAppRoute(pathname)) {
        obj2 = { navigationReplace: false, openChannel: true };
        if (null != search) {
          obj2.search = search;
        }
        if (null != hash) {
          obj2.hash = hash;
        }
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          safeTransitionToDefault(pathname, obj2);
          return true;
        };
      }
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5752).CodedLinkType.APP_OAUTH2_LINK) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = AppAnalyticsUtilsDefault;
        obj2 = { application_id: _undefined.code };
        obj.trackWithMetadata(authStore2.APP_OAUTH2_LINK_EMBED_URL_CLICKED, obj2);
        openURLDefault(assetURL);
        return true;
      };
    }
    return fn;
  }
  const tmp2Result3 = tmp2(5654);
  let result = tmp2Result3.tryParseEventDetailsPath(pathname);
  if (!skipExtensionCheck) {
    const tmp2Result4 = tmp2(8711);
    if (null != tmp2Result4.isSuspiciousDownload(assetURL)) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = SuspiciousDownloadModalActionCreatorsDefault;
        obj.show(assetURL);
        return true;
      };
    }
  }
};
