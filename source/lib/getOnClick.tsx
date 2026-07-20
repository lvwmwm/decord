// Module ID: 8332
// Function ID: 66035
// Name: openInviteModal
// Dependencies: []
// Exports: default

// Module 8332 (openInviteModal)
let AbortCodes;
let AppContext;
let JoinGuildSources;
let Routes;
function openInviteModal() {
  return _openInviteModal(...arguments);
}
function _openInviteModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _openInviteModal = obj;
  return obj(...arguments);
}
function _handleInviteCodedLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleInviteCodedLink = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
importDefault(dependencyMap[3]);
importDefault(dependencyMap[4]);
let closure_6 = importDefault(dependencyMap[5]);
let closure_7 = importDefault(dependencyMap[6]);
importDefault(dependencyMap[7]);
let closure_8 = importDefault(dependencyMap[8]);
importDefault(dependencyMap[9]);
let closure_9 = importDefault(dependencyMap[10]);
let closure_10 = importDefault(dependencyMap[11]);
let closure_11 = importDefault(dependencyMap[12]);
({ AbortCodes, AnalyticEvents: closure_12, AppContext, InviteStates: closure_13, JoinGuildSources, Routes } = arg1(dependencyMap[13]));
const tmp6 = arg1(dependencyMap[13]);
({ CollectibleShopTab: closure_14, CollectiblesMobileShopScreen: closure_15 } = arg1(dependencyMap[14]));
const isGameShopPath = arg1(dependencyMap[15]).isGameShopPath;
let closure_17 = { skipExtensionCheck: undefined, analyticsLocations: [] };
const tmp7 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[47]).fileFinishedImporting("lib/getOnClick.tsx");

export default function getOnClick(closure_0) {
  let channelId;
  let hash;
  let host;
  let hostname;
  let pathname;
  let search;
  let tmp = arg1;
  const arg1 = closure_0;
  if (arg1 === undefined) {
    tmp = closure_17;
  }
  ({ analyticsLocations: closure_1, messageId: closure_2, channelId } = tmp);
  let closure_3;
  let closure_4;
  let closure_5;
  let obj = arg1(dependencyMap[24]);
  const findCodedLinkResult = obj.findCodedLink(closure_0);
  closure_3 = findCodedLinkResult;
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      if (null != preventDefault) {
        preventDefault.preventDefault();
      }
      function handleInviteCodedLink(findCodedLinkResult, closure_2) {
        return callback(...arguments);
      }(findCodedLinkResult, closure_2);
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
      const code = findCodedLinkResult.code;
      if (findCodedLinkResult.type !== preventDefault(closure_2[25]).CodedLinkType.APP_DIRECTORY_PROFILE) {
        if (findCodedLinkResult.type !== preventDefault(closure_2[25]).CodedLinkType.APP_DIRECTORY_STOREFRONT) {
          let obj = preventDefault(closure_2[26]);
          let result = obj.parseStorefrontSkuCodedLink(code);
          if (null == result) {
            obj = { applicationId: undefined, skuId: undefined };
            result = obj;
          }
        }
        ({ applicationId, skuId } = result);
        const guildId = guildId.getGuildId();
        if (null != guildId) {
          const tmp9 = guildId;
        }
        if (null != applicationId) {
          obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: tmp9, channel_id: channelId.getChannelId() };
          callback2(closure_2[28]).track(closure_12.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, obj);
          const obj4 = callback2(closure_2[28]);
        }
        callback2(closure_2[27])(preventDefault);
        return true;
      }
      result = { applicationId: code, skuId: undefined };
    };
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === arg1(dependencyMap[25]).CodedLinkType.ACTIVITY_BOOKMARK) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const code = closure_3.code;
        preventDefault = code;
        const application = obj.getApplication(code);
        const uRL = new URL(closure_3.url);
        const searchParams = uRL.searchParams;
        let value = searchParams.get("referrer_id");
        let tmp5;
        if (null != value) {
          tmp5 = value;
        }
        closure_3 = uRL(tmp5[29])();
        let obj = preventDefault(tmp5[30]);
        const playInContext = obj.getPlayInContext(code);
        const currentChannelId = playInContext.currentChannelId;
        const pathname = currentChannelId;
        obj = playInContext.instanceId;
        if (playInContext.canLaunchInChannel) {
          let flag2 = !playInContext.isCurrentlyInInstance && null != currentChannelId;
          if (flag2) {
            const searchParams2 = uRL.searchParams;
            const searchParams3 = uRL.searchParams;
            value = searchParams2.get("link_id");
            const customActivityLinkParams = preventDefault(tmp5[31]).getCustomActivityLinkParams(code, value, searchParams3.get("custom_id"));
            const obj4 = preventDefault(tmp5[31]);
            customActivityLinkParams.then(() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = currentChannelId(tmp);
              return function() {
                return callback(...arguments);
              };
            }()).catch(() => {

            });
            flag2 = true;
            const nextPromise = customActivityLinkParams.then(() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = currentChannelId(tmp);
              return function() {
                return callback(...arguments);
              };
            }());
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
            const obj2 = uRL(tmp5[33]);
            const openPrivateChannelResult = uRL(tmp5[33]).openPrivateChannel(obj);
            uRL(tmp5[33]).openPrivateChannel(obj).then(() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = currentChannelId(tmp);
              return function() {
                return callback(...arguments);
              };
            }()).catch(() => {

            });
            flag = true;
            const nextPromise1 = uRL(tmp5[33]).openPrivateChannel(obj).then(() => {
              // CreateGeneratorClosureLongIndex (0x67)
              let closure_0 = currentChannelId(tmp);
              return function() {
                return callback(...arguments);
              };
            }());
          }
          return flag;
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === arg1(dependencyMap[25]).CodedLinkType.GUILD_PRODUCT) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const tmp2 = findCodedLinkResult(findCodedLinkResult.code.split("-"), 2);
        const callback = tmp2[0];
        let closure_1 = tmp2[1];
        callback(closure_2[20])(closure_2[35], closure_2.paths).then((openGuildProductLink) => {
          openGuildProductLink.openGuildProductLink(closure_0, closure_1);
        });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === arg1(dependencyMap[25]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const str = findCodedLinkResult.code;
        const tmp2 = findCodedLinkResult(findCodedLinkResult.code.split("-"), 2);
        const result = preventDefault(closure_2[36]).openSocialLayerStorefrontProductDetailsModal({ skuId: findCodedLinkResult(findCodedLinkResult.code.split("-"), 2)[0], analyticsLocations: closure_1 });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === arg1(dependencyMap[25]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        const str = findCodedLinkResult.code;
        const tmp2 = findCodedLinkResult(findCodedLinkResult.code.split("-"), 2);
        const result = preventDefault(closure_2[36]).openSocialLayerStorefrontProductDetailsModal({ skuId: findCodedLinkResult(findCodedLinkResult.code.split("-"), 2)[0], analyticsLocations: closure_1 });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === arg1(dependencyMap[25]).CodedLinkType.QUESTS_EMBED) {
      if (obj2.getIsEligibleForQuests()) {
        return (preventDefault) => {
          if (null != preventDefault) {
            preventDefault.preventDefault();
          }
          let obj = callback2(closure_2[38]);
          let toURLSafeResult = obj.toURLSafe(findCodedLinkResult.url);
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
          obj = { scrollToQuestId: findCodedLinkResult.code };
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
          obj.fromContent = preventDefault(closure_2[40]).QuestContent.QUEST_SHARE_LINK;
          preventDefault(closure_2[39]).openQuestHome(obj);
          return true;
        };
      }
      const obj2 = arg1(dependencyMap[37]);
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === arg1(dependencyMap[25]).CodedLinkType.COLLECTIBLES_SHOP) {
      return (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        preventDefault = preventDefault(closure_2[41]).isVirtualCurrencyEnabled().enabled;
        const obj = preventDefault(closure_2[41]);
        preventDefault(closure_2[20])(closure_2[42], closure_2.paths).then((openCollectiblesShopMobile) => {
          const tmp3 = lib(lib.code.split("-"), 2)[1];
          if (enabled) {
            if (tmp2 === constants.ORBS) {
              let ORBS = constants2.ORBS;
            }
            const obj = { analyticsSource: closure_1[closure_1.length - 1], analyticsLocations: closure_1, screen: ORBS };
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
  let toURLSafeResult = importDefault(dependencyMap[38]).toURLSafe(closure_0);
  if (null == toURLSafeResult) {
    toURLSafeResult = {};
  }
  ({ host, hostname, pathname } = toURLSafeResult);
  closure_4 = pathname;
  ({ search, hash } = toURLSafeResult);
  const obj3 = importDefault(dependencyMap[38]);
  let tmp19 = null;
  if (null != hostname) {
    tmp19 = hostname;
  }
  let isDiscordHostnameResult = importDefault(dependencyMap[38]).isDiscordHostname(tmp19);
  if (!isDiscordHostnameResult) {
    let tmp23 = null;
    if (null != host) {
      tmp23 = host;
    }
    let tmp24 = null;
    if (null != hostname) {
      tmp24 = hostname;
    }
    isDiscordHostnameResult = importDefault(dependencyMap[38]).isDiscordLocalhost(tmp23, tmp24);
    const obj6 = importDefault(dependencyMap[38]);
  }
  if (isDiscordHostnameResult) {
    if (null != pathname) {
      if (isGameShopPath(pathname)) {
        return (preventDefault) => {
          if (null != preventDefault) {
            preventDefault.preventDefault();
          }
          const result = preventDefault(closure_2[36]).openSocialLayerStorefrontUnsupportedOnMobileAlert();
          return true;
        };
      }
    }
  }
  if (null != pathname) {
    if (isDiscordHostnameResult) {
      if (obj7.isAppRoute(pathname)) {
        obj = { "Bool(false)": true, "Bool(false)": true };
        closure_5 = obj;
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
          callback2(closure_2[22])(pathname, obj);
          return true;
        };
      }
      const obj7 = importDefault(dependencyMap[38]);
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === arg1(dependencyMap[25]).CodedLinkType.APP_OAUTH2_LINK) {
      let fn = (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        let obj = callback2(closure_2[43]);
        obj = { application_id: findCodedLinkResult.code };
        obj.trackWithMetadata(closure_12.APP_OAUTH2_LINK_EMBED_URL_CLICKED, obj);
        callback2(closure_2[27])(preventDefault);
        return true;
      };
    }
    return fn;
  }
  const obj5 = importDefault(dependencyMap[38]);
  const result = arg1(dependencyMap[44]).tryParseEventDetailsPath(pathname);
  if (!tmp.skipExtensionCheck) {
    if (null != obj9.isSuspiciousDownload(closure_0)) {
      fn = (preventDefault) => {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        callback2(closure_2[46]).show(preventDefault);
        return true;
      };
    }
    const obj9 = arg1(dependencyMap[45]);
  }
};
