// Module ID: 8495
// Function ID: 8496
// Name: getOnClick
// Dependencies: [32, 5, 5440, 6054, 6932, 502, 2125, 2087, 5073, 5432, 2116, 4939, 5963, 1085, 1087, 6933, 584, 5074, 8496, 8518, 2000, 6097, 6949, 8513, 5072, 5077, 7378, 4800, 1265, 11609, 13033, 10853, 7014, 11613, 13037, 10685, 10155, 9165, 1384, 9167, 5977, 13038, 7262, 5107, 5422, 8264, 10742, 2]
// Exports: default

// Module 8495 (getOnClick)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import URLUtilsDefault from "URLUtils" /* 1384 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import openURLDefault from "openURL" /* 4800 */;
import CodedLink from "CodedLink" /* 5077 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5107 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 6933 */;
import safeTransitionToDefault from "safeTransitionTo" /* 6949 */;
import _slicedToArray2 from "_slicedToArray" /* 7378 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8496 */;
import QuestUtils from "QuestUtils" /* 9167 */;
import storefrontCodedLink from "storefrontCodedLink" /* 10685 */;
import SuspiciousDownloadModalActionCreatorsDefault from "SuspiciousDownloadModalActionCreators" /* 10742 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6054 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6932 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import InviteStore from "InviteStore" /* 5073 */;
import MessageStore from "MessageStore" /* 5432 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, closure_5, invite, openCollectiblesShopMobile, roles;

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
const QuestContent = tmp11(5977);
const SocialLayerStorefrontNativeActionCreators = tmp(10155);
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
          return { value: "IconComponent", done: "+51" };
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
              const obj5 = { type: "DISPLAYED_INVITE_SHOW", code, username: "Array", deeplinkAttemptId: "code", invite_instance_id };
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
            return { value: "IconComponent", done: "+51" };
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
          return { value: "IconComponent", done: "+51" };
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
          return { value: "IconComponent", done: "+51" };
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
obj = { skipExtensionCheck: "Array", analyticsLocations: [] };
let result = size.fileFinishedImporting("lib/getOnClick.tsx");

export default function getOnClick(url) {
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
  _require = url;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = obj;
  }
  ({ analyticsLocations: importDefault, messageId: dependencyMap, channelId } = tmp);
  pathname = undefined;
  let obj2;
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  const skipExtensionCheck = tmp.skipExtensionCheck;
  obj = require("findCodedLinks");
  const findCodedLinkResult = obj.findCodedLink(url);
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
            result = { applicationId: "backgroundColor", skuId: "IconComponent" };
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
        openURLDefault(url);
        return true;
      }
      result = { applicationId: code, skuId: "Array" };
    };
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5077).CodedLinkType.ACTIVITY_BOOKMARK) {
      return (preventDefault) => {
        let currentChannelId;
        let isCurrentlyInInstance;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const code = currentChannelId.code;
        url = currentChannelId.url;
        const application = obj2.getApplication(code);
        const uRL = new URL(url);
        let searchParams = uRL.searchParams;
        const value = searchParams.get("referrer_id");
        let closure_2 = value;
        const tmp6 = dependencyMap;
        const tmp5 = url;
        obj = url(dependencyMap[29]);
        const playInContext = obj.getPlayInContext(code);
        currentChannelId = playInContext.currentChannelId;
        ({ instanceId: pathname, isCurrentlyInInstance } = playInContext);
        if (playInContext.canLaunchInChannel) {
          let flag2 = !isCurrentlyInInstance && null != currentChannelId;
          if (flag2) {
            let searchParams2 = uRL.searchParams;
            let getCustomActivityLinkParams = tmp5(tmp6[30]).getCustomActivityLinkParams;
            const searchParams3 = uRL.searchParams;
            tmp5(tmp6[30]);
            const value2 = searchParams2.get("link_id");
            const customActivityLinkParams = getCustomActivityLinkParams(code, value2, searchParams3.get("custom_id"));
            const then2 = customActivityLinkParams.then;
            url = pathname((applicationId) => {
              let c3 = 0;
              let c4 = 0;
              const iter = (function*(arg0, value) {
                let obj6;
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    return { value, done: true };
                  } else {
                    return { value: "IconComponent", done: "+51" };
                  }
                } else {
                  try {
                    let customId;
                    c4 = 2;
                    if (0 === channelId) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        return { value, done: true };
                      } else {
                        referrerId = tmp4;
                        closure_1 = tmp;
                        customId = applicationId.customId;
                        channelId = 1;
                        c4 = 1;
                        return { value: "Set", done: true };
                      }
                    } else if (1 === channelId) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        return { value, done: true };
                      } else {
                        const obj5 = { channelId, applicationId, isStart: null == c4, customId, referrerId, analyticsLocations };
                        channelId = 2;
                        c4 = 1;
                        const obj7 = { value: obj6.runPrimaryAppCommandOrJoinEmbeddedActivity(obj5), done: false };
                        obj6 = code(referrerId[31]);
                        return obj7;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      return { value, done: true };
                    } else {
                      c4 = 3;
                      return { value: "IconComponent", done: "+51" };
                    }
                  } catch (tmp6) {
                    c4 = 3;
                    throw tmp6;
                  }
                }
              })();
              iter.next();
              return iter;
            });
            const then2Result = then2(function() {
              return closure_0(...arguments);
            });
            then2Result.catch(() => {

            });
            flag2 = true;
          }
          return flag2;
        } else {
          let id;
          if (application != null) {
            const bot = application.bot;
            if (bot != null) {
              id = bot.id;
            }
          }
          let flag = null != id;
          if (flag) {
            obj2 = require("ChannelActionCreators");
            let obj3 = { recipientIds: id };
            const then = obj2.openPrivateChannel(obj3).then;
            obj2.openPrivateChannel(obj3);
            url = pathname(function*(arg0, value) {
              let closure_1;
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: "+51" };
                }
              } else {
                try {
                  let referrerId;
                  let customId;
                  c4 = 2;
                  if (0 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      referrerId = tmp4;
                      customId = undefined;
                      const searchParams = tmp.searchParams;
                      const getCustomActivityLinkParams = code(closure_2[30]).getCustomActivityLinkParams;
                      const searchParams2 = tmp.searchParams;
                      const tmp22 = code(closure_2[30]);
                      closure_2 = searchParams.get("link_id");
                      c3 = 1;
                      c4 = 1;
                      const obj4 = { value: getCustomActivityLinkParams(channelId, closure_2, searchParams2.get("custom_id")), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    customId = value.customId;
                    const obj5 = { targetApplicationId: channelId, channelId, analyticsLocations, customId, referrerId };
                    uRL(closure_2[33])(obj5);
                    c4 = 3;
                    return { value: "IconComponent", done: "+51" };
                  }
                } catch (tmp5) {
                  c4 = 3;
                  throw tmp5;
                }
              }
            });
            const nextPromise = then(function() {
              return closure_0(...arguments);
            });
            nextPromise.catch(() => {

            });
            flag = true;
          }
          return flag;
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5077).CodedLinkType.GUILD_PRODUCT) {
      return (preventDefault) => {
        let closure_129_0;
        let closure_129_1;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        [closure_129_0, closure_129_1] = _undefined.code.split("-");
        _slicedToArray(_undefined.code.split("-"), 2);
        const promise = asyncRequire(13037, dependencyMap.paths);
        promise.then((openGuildProductLink) => {
          openGuildProductLink.openGuildProductLink(closure_1_0, closure_1_1);
        });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(5077).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
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
    if (findCodedLinkResult.type === tmp2(5077).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
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
    if (findCodedLinkResult.type === tmp2(5077).CodedLinkType.QUESTS_EMBED) {
      const tmp2Result = tmp2(9165);
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
    if (findCodedLinkResult.type === tmp2(5077).CodedLinkType.COLLECTIBLES_SHOP) {
      return (preventDefault) => {
        let code;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = url(dependencyMap[41]);
        const enabled = obj.isVirtualCurrencyEnabled().enabled;
        const promise = url(dependencyMap[20])(dependencyMap[42], dependencyMap.paths);
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
  let obj3 = URLUtilsDefault;
  let toURLSafeResult = obj3.toURLSafe(url);
  if (toURLSafeResult == null) {
    toURLSafeResult = {};
  }
  ({ host, hostname, pathname } = toURLSafeResult);
  ({ search, hash } = toURLSafeResult);
  const tmp5Result = URLUtilsDefault;
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
          const result = url(dependencyMap[36]).openSocialLayerStorefrontUnsupportedOnMobileAlert();
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
    if (findCodedLinkResult.type === tmp2(5077).CodedLinkType.APP_OAUTH2_LINK) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = AppAnalyticsUtilsDefault;
        obj2 = { application_id: _undefined.code };
        obj.trackWithMetadata(authStore2.APP_OAUTH2_LINK_EMBED_URL_CLICKED, obj2);
        openURLDefault(url);
        return true;
      };
    }
    return fn;
  }
  const tmp2Result3 = tmp2(5422);
  let result = tmp2Result3.tryParseEventDetailsPath(pathname);
  if (!skipExtensionCheck) {
    const tmp2Result4 = tmp2(8264);
    if (null != tmp2Result4.isSuspiciousDownload(url)) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = SuspiciousDownloadModalActionCreatorsDefault;
        obj.show(url);
        return true;
      };
    }
  }
};
