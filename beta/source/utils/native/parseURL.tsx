// Module ID: 4813
// Function ID: 4814
// Name: parseURL
// Dependencies: [32, 1074, 1076, 4814, 4815, 1473, 1930, 1368, 4816, 4821, 12501, 5089, 13393, 1366, 4990, 8516, 6826, 1610, 1364, 9173, 1241, 1254, 13394, 2]
// Exports: default

// Module 4813 (parseURL)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import urlParseDefault from "urlParse" /* 1368 */;
import _modDef1473 from "module_1473" /* 1473 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import _modDef1930 from "module_1930" /* 1930 */;
import MobileNativeUpdateConstants from "MobileNativeUpdateConstants" /* 4814 */;
import findCodedLinks from "findCodedLinks" /* 4816 */;
import CodedLink from "CodedLink" /* 4821 */;
import LinkUtils from "LinkUtils" /* 4990 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5089 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 6826 */;
import Authorize from "Authorize" /* 8516 */;
import SecureFramesDeeplinkExperiment from "SecureFramesDeeplinkExperiment" /* 9173 */;
import useVirtualCurrencyMobileEnabled from "useVirtualCurrencyMobileEnabled" /* 12501 */;
import QRLoginUtils from "QRLoginUtils" /* 13393 */;
import urlPartToSettingsEnumDefault from "urlPartToSettingsEnum" /* 13394 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import PaymentConstants from "PaymentConstants" /* 4815 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function parseQuery(arg0) {
  try {
    const tmp = arg0;
    const tmp2 = importDefault;
    const _Object = Object;
    const _Object2 = Object;
    const obj = _modDef1473;
    const entries = Object.entries(obj.parse(arg0));
    return fromEntries(entries.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const items = [tmp, ];
      let first = tmp2;
      if (Array.isArray(tmp2)) {
        first = tmp2[0];
      }
      items[1] = first;
      return items;
    }));
  } catch (err) {
    return {};
  }
}
({ AnalyticEvents: closure_4, GuildSettingsSections: hasOwnProperty, GuildSettingsSubsections: metroRequire, LinkingTypes: metroImportDefault } = Constants);
({ CollectibleShopTab: metroImportAll, CollectiblesMobileShopScreen: c9 } = CollectiblesShopConstants);
const UPDATE_CONFIG = MobileNativeUpdateConstants.UPDATE_CONFIG;
({ MobileWebRedirectCheckoutDeepLinkActions: unpackModuleId, MobileWebRedirectCheckoutDeepLinkQueryKeys: closure_12 } = PaymentConstants);
const re13 = /feature\/([\w-]+)/;
const re14 = /feature\/boost\/([0-9]+)/;
const re15 = /users\/(\d+)/;
const re16 = /(?:connect|oauth2)\/authorize/;
const re17 = /login\/one-time/;
const re18 = /promos\.discord\.gg/;
const re19 = /mweb-handoff/;
const re20 = /connections\/(xbox|playstation|playstation-stg|crunchyroll)\/link/;
const re21 = /connections\/([a-z-]+)/;
const re22 = /guilds\/(\d+)\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
const re23 = /guilds\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
const re24 = /activate/;
const re25 = /^\/quests\/(\d+)/;
const re26 = /^\/quest-preview\/(\d+)/;
const re27 = /^\/quest-home/;
const re28 = /^\/quest-bar-preview/;
const re29 = /subscriptions\/(\d+)/;
let result = size.fileFinishedImporting("utils/native/parseURL.tsx");

export default function parseURL(arg0) {
  let attemptId;
  let custom_id;
  let didRegister;
  let element;
  let feature;
  let filter;
  let fingerprint;
  let fingerprint3;
  let first1;
  let host;
  let hostname;
  let installationId;
  let key;
  let link_id;
  let obj101;
  let obj103;
  let obj14;
  let obj24;
  let obj26;
  let obj28;
  let obj30;
  let obj32;
  let obj42;
  let obj45;
  let obj51;
  let obj53;
  let obj87;
  let obj95;
  let obj97;
  let obj99;
  let pathname;
  let protocol;
  let query;
  let redirect;
  let referrer_id;
  let sort;
  let tmp113;
  let tmp15;
  let tmp82Result;
  let tmp96;
  let tmp97;
  let username;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = _modDef1930;
  const sanitizeUrlResult = obj.sanitizeUrl(arg0);
  if (null == sanitizeUrlResult) {
    const obj3 = { payload: obj4 };
    return obj3;
  } else {
    const tmpResult = urlParseDefault;
    const parsed = tmpResult.parse(sanitizeUrlResult);
    ({ host, pathname, query } = parsed);
    let str = query;
    ({ protocol, hostname } = parsed);
    if (query == null) {
      str = "";
    }
    const tmp158Result = parseQuery(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp158Result);
    ({ username, didRegister, custom_id, link_id } = tmp158Result);
    const obj2 = findCodedLinks;
    const findCodedLinkResult = obj2.findCodedLink(sanitizeUrlResult);
    if (null != findCodedLinkResult) {
      const type = findCodedLinkResult.type;
      if (CodedLink.CodedLinkType.INVITE === type) {
        const obj5 = { fingerprint, attemptId, installationId, didRegister: "true" === didRegister, payload: obj6 };
        return obj5;
      } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
        const obj7 = { fingerprint, attemptId, installationId, payload: obj8 };
        return obj7;
      } else {
        if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
          if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
            if (CodedLink.CodedLinkType.EXPERIMENT !== type) {
              if (CodedLink.CodedLinkType.EVENT !== type) {
                if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                  if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
                    if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      const obj9 = { fingerprint, attemptId, installationId, payload: obj10 };
                      return obj9;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED !== type) {
                                if (CodedLink.CodedLinkType.GAME_PROFILE === type) {
                                  const obj11 = { fingerprint, attemptId, installationId, payload: obj12 };
                                  return obj11;
                                } else if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type) {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP === type) {
                                        const str2 = findCodedLinkResult.code;
                                        const tmp5Result = useVirtualCurrencyMobileEnabled;
                                        const enabled = tmp5Result.isVirtualCurrencyEnabled().enabled;
                                        const tmp10 = _slicedToArray(str2.split("-"), 2)[1];
                                        if (enabled) {
                                          let FEATURED_PAGE;
                                          if (tmp9 === metroImportAll.ORBS) {
                                            FEATURED_PAGE = constants3.ORBS;
                                          }
                                          const obj13 = { fingerprint, attemptId, installationId, payload: obj14 };
                                          obj14 = { type: metroImportDefault.SHOP, screen: FEATURED_PAGE, skuId: tmp15 };
                                          tmp15 = undefined;
                                          if ("" !== tmp10) {
                                            tmp15 = tmp10;
                                          }
                                          return obj13;
                                        }
                                        FEATURED_PAGE = constants3.FEATURED_PAGE;
                                      } else if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                        if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                          const _Error2 = Error;
                                          const _HermesInternal = HermesInternal;
                                          throw Error("Unknown coded link type: " + findCodedLinkResult.type);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj15 = { fingerprint, attemptId, installationId, payload: obj16 };
        return obj15;
      }
    }
    const findGiftCodesResult = GiftCodeUtils.findGiftCodes(sanitizeUrlResult);
    if (findGiftCodesResult.length > 0) {
      const obj17 = { fingerprint, attemptId, installationId, payload: obj18 };
      return obj17;
    } else {
      const tmp5Result9 = QRLoginUtils;
      const result = tmp5Result9.findRemoteAuthFingerprint(host, pathname);
      if (null != result) {
        if (result.length > 0) {
          const obj20 = { fingerprint, attemptId, installationId, payload: obj21 };
          return obj20;
        }
      }
      const tmpResult6 = URLUtilsDefault;
      if (!tmpResult6.isDiscordHostname(host)) {
        let obj27;
        const tmpResult7 = URLUtilsDefault;
        if (!tmpResult7.isDiscordProtocol(protocol)) {
          URLUtilsDefault;
        }
        let match;
        if (host != null) {
          match = host.match(re18);
        }
        if (null != match) {
          const obj22 = { fingerprint, attemptId, installationId, payload: obj24 };
          obj27 = obj22;
          obj24 = { type: metroImportDefault.PROMOTIONS, url: sanitizeUrlResult };
        } else {
          let host1;
          if (UPDATE_CONFIG != null) {
            host1 = UPDATE_CONFIG.url.host;
          }
          if (host === host1) {
            const obj25 = { fingerprint, attemptId, installationId, payload: obj26 };
            obj27 = obj25;
            obj26 = { type: metroImportDefault.MOBILE_NATIVE_UPDATE, url: sanitizeUrlResult };
          } else {
            obj27 = { fingerprint, attemptId, installationId, payload: obj28 };
            obj28 = { type: metroImportDefault.NONE };
          }
        }
        return obj27;
      }
      if (null != pathname) {
        const tmp5Result10 = LinkUtils;
        const tryParseDiceRollLinkResult = tmp5Result10.tryParseDiceRollLink(pathname);
        if (null != tryParseDiceRollLinkResult) {
          const obj29 = { fingerprint, attemptId, installationId, payload: obj30 };
          obj30 = { type: metroImportDefault.ROLL_DICE, guildId: null, channelId: null, diceCount: null, diceSides: null };
          ({ guildId: obj92.guildId, channelId: obj92.channelId, diceCount: obj92.diceCount, diceSides: obj92.diceSides } = tryParseDiceRollLinkResult);
          return obj29;
        } else {
          const tmp5Result11 = LinkUtils;
          const tryParseChannelPathResult = tmp5Result11.tryParseChannelPath(pathname);
          if (null != tryParseChannelPathResult) {
            let CHANNEL;
            if (query == null) {
              query = "";
            }
            const obj31 = { fingerprint, attemptId, installationId, payload: obj32 };
            const summaryId = tmp158(query).summaryId;
            if (null != tryParseChannelPathResult.messageId) {
              CHANNEL = metroImportDefault.MESSAGE;
            } else {
              CHANNEL = metroImportDefault.CHANNEL;
            }
            obj32 = { type: CHANNEL, guildId: null, channelId: null, messageId: null, summaryId };
            ({ guildId: obj90.guildId, channelId: obj90.channelId, messageId: obj90.messageId } = tryParseChannelPathResult);
            return obj31;
          } else {
            const match1 = pathname.match(re25);
            if (null != match1) {
              if (match1.length > 1) {
                const obj33 = { fingerprint, attemptId, installationId, payload: obj35 };
                return obj33;
              }
            }
            const match2 = pathname.match(re26);
            if (null != match2) {
              if (match2.length > 1) {
                const obj36 = { fingerprint, attemptId, installationId, payload: obj38 };
                return obj36;
              }
            }
            if (null != pathname.match(re28)) {
              let str5 = query;
              const parse = _modDef1473.parse;
              _modDef1473;
              if (query == null) {
                str5 = "";
              }
              let ad_creative_ids = parse(str5).ad_creative_ids;
              if (ad_creative_ids == null) {
                ad_creative_ids = [];
              }
              const items = [ad_creative_ids];
              const first = _slicedToArray(items.flat(), 1)[0];
              if (null != first) {
                const obj39 = { fingerprint, attemptId, installationId, payload: obj40 };
                return obj39;
              }
            }
            if (null != pathname.match(re27)) {
              let obj44;
              let str25 = query;
              const parse2 = _modDef1473.parse;
              _modDef1473;
              if (query == null) {
                str25 = "";
              }
              let ad_creative_ids1 = parse2(str25).ad_creative_ids;
              if (ad_creative_ids1 == null) {
                ad_creative_ids1 = [];
              }
              const items1 = [ad_creative_ids1];
              const flatResult = items1.flat();
              if (flatResult.length > 0) {
                const obj41 = { fingerprint, attemptId, installationId, payload: obj42 };
                obj44 = obj41;
                obj42 = { type: metroImportDefault.QUEST_HOME_PREVIEW, adCreativeIds: flatResult };
              } else {
                obj44 = { fingerprint, attemptId, installationId, payload: obj45 };
                obj45 = { type: metroImportDefault.QUESTS, referrerId: referrer_id, sort, filter };
              }
              return obj44;
            } else if (null != pathname.match(re29)) {
              const obj46 = { fingerprint, attemptId, installationId, payload: obj47 };
              return obj46;
            } else {
              const match3 = pathname.match(re15);
              if (null != match3) {
                if (match3.length > 1) {
                  const obj48 = { fingerprint, attemptId, installationId, payload: obj49 };
                  return obj48;
                }
              }
              if (null != pathname.match(re16)) {
                let str6 = query;
                const parseOAuth2AuthorizeProps = Authorize.parseOAuth2AuthorizeProps;
                Authorize;
                if (query == null) {
                  str6 = "";
                }
                const result1 = parseOAuth2AuthorizeProps(str6);
                if (null != result1) {
                  const obj50 = { fingerprint, attemptId, installationId, payload: element };
                  element = { type: metroImportDefault.OAUTH2_AUTHORIZE, props: obj51 };
                  obj51 = { wasDeepLink: flag };
                  const merged = Object.assign(result1);
                  return obj50;
                }
              }
              if (null != pathname.match(re17)) {
                let str24 = query;
                if (query == null) {
                  str24 = "";
                }
                let token = tmp158(str24).token;
                const obj52 = { fingerprint, attemptId, installationId, payload: obj53 };
                obj53 = { type: metroImportDefault.ONE_TIME_LOGIN, token };
                if (token == null) {
                  token = null;
                }
                return obj52;
              } else {
                const match4 = pathname.match(re14);
                if (null != match4) {
                  if (match4.length > 1) {
                    const obj54 = { fingerprint, attemptId, installationId, payload: obj55 };
                    return obj54;
                  }
                }
                const match5 = pathname.match(re13);
                if (null != match5) {
                  if (match5.length > 1) {
                    let tmp30 = null;
                    switch (match5[1]) {
                      case "composeMessage":
                      {
                        tmp30 = { type: metroImportDefault.COMPOSE_MESSAGE };
                        const obj56 = { type: metroImportDefault.COMPOSE_MESSAGE };
                        if (null != tmp30) {
                          return { fingerprint, attemptId, installationId, payload: tmp30 };
                        }
                        break;
                      }
                      case "contactSync":
                      {
                        tmp30 = { type: metroImportDefault.CONTACT_SYNC };
                        const obj58 = { type: metroImportDefault.CONTACT_SYNC };
                        break;
                      }
                      case "addFriends":
                      {
                        tmp30 = { type: metroImportDefault.ADD_FRIENDS };
                        const obj60 = { type: metroImportDefault.ADD_FRIENDS };
                        break;
                      }
                      case "friends":
                      {
                        let str17 = query;
                        if (query == null) {
                          str17 = "";
                        }
                        tmp30 = { type: metroImportDefault.FRIENDS, userId: parseQuery(str17).user_id };
                        const obj61 = { type: metroImportDefault.FRIENDS, userId: parseQuery(str17).user_id };
                        break;
                      }
                      case "editProfile":
                      {
                        tmp30 = { type: metroImportDefault.EDIT_PROFILE };
                        const obj62 = { type: metroImportDefault.EDIT_PROFILE };
                        break;
                      }
                      case "voiceChannel":
                      {
                        let str16 = query;
                        if (query == null) {
                          str16 = "";
                        }
                        const obj63 = { type: metroImportDefault.VOICE_CHANNEL, guildId: null, channelId: null, userId: null, via: null, action: null };
                        ({ guild_id: obj37.guildId, channel_id: obj37.channelId, user_id: obj37.userId, via: obj37.via, action: obj37.action } = parseQuery(str16));
                        tmp30 = obj63;
                        parseQuery(str16);
                        break;
                      }
                      case "sessionManagement":
                      {
                        tmp30 = { type: metroImportDefault.SESSION_MANAGEMENT };
                        const obj64 = { type: metroImportDefault.SESSION_MANAGEMENT };
                        break;
                      }
                      case "messageRequests":
                      {
                        tmp30 = { type: metroImportDefault.MESSAGE_REQUESTS };
                        const obj65 = { type: metroImportDefault.MESSAGE_REQUESTS };
                        break;
                      }
                      case "home":
                      {
                        let str15 = query;
                        if (query == null) {
                          str15 = "";
                        }
                        const obj67 = { type: metroImportDefault.GUILD_HOME, guildId: null, highlightChannelId: null, highlightMessageId: null };
                        ({ guild_id: obj34.guildId, highlight_channel_id: obj34.highlightChannelId, highlight_message_id: obj34.highlightMessageId } = parseQuery(str15));
                        tmp30 = obj67;
                        parseQuery(str15);
                        break;
                      }
                      case "icymi":
                      {
                        tmp30 = { type: metroImportDefault.ICYMI };
                        const obj68 = { type: metroImportDefault.ICYMI };
                        break;
                      }
                      case "connections":
                      {
                        let str14 = query;
                        if (query == null) {
                          str14 = "";
                        }
                        tmp30 = { type: metroImportDefault.CONNECTIONS, source: parseQuery(str14).source };
                        const obj69 = { type: metroImportDefault.CONNECTIONS, source: parseQuery(str14).source };
                        break;
                      }
                      case "family-center":
                      {
                        tmp30 = { type: metroImportDefault.FAMILY_CENTER, pathname };
                        const obj70 = { type: metroImportDefault.FAMILY_CENTER, pathname };
                        break;
                      }
                      case "promo-url":
                      {
                        let str13 = query;
                        if (query == null) {
                          str13 = "";
                        }
                        const promo_url = tmp158(str13).promo_url;
                        tmp30 = null;
                        if (undefined !== promo_url) {
                          tmp30 = { type: metroImportDefault.FEATURE_PROMO_URL, promoUrl: promo_url };
                          const obj71 = { type: metroImportDefault.FEATURE_PROMO_URL, promoUrl: promo_url };
                        }
                        break;
                      }
                      case "account-standing":
                      {
                        tmp30 = { type: metroImportDefault.ACCOUNT_STANDING, pathname };
                        const obj72 = { type: metroImportDefault.ACCOUNT_STANDING, pathname };
                        break;
                      }
                      case "mobile-web-redirect-checkout":
                      {
                        const tmp5Result13 = MobileWebRedirectCheckoutUtils;
                        let result2 = tmp5Result13.isMobileWebRedirectCheckoutEnabled();
                        if (result2) {
                          const tmp5Result14 = MetaQuestUtils;
                          result2 = !tmp5Result14.isMetaQuest();
                        }
                        let str12 = query;
                        if (query == null) {
                          str12 = "";
                        }
                        let DEFAULT = parseQuery(str12)[constants5.DEEP_LINK_ACTION];
                        tmp30 = null;
                        parseQuery(str12);
                        if (result2) {
                          const obj73 = { type: metroImportDefault.MOBILE_WEB_REDIRECT_CHECKOUT, deepLinkAction: DEFAULT, guildId: tmp64 };
                          if (DEFAULT == null) {
                            DEFAULT = unpackModuleId.DEFAULT;
                          }
                          tmp30 = obj73;
                        }
                        break;
                      }
                      case "open-shop":
                      {
                        tmp30 = { type: metroImportDefault.SHOP };
                        const obj74 = { type: metroImportDefault.SHOP };
                        break;
                      }
                      case "authorized-apps":
                      {
                        tmp30 = { type: metroImportDefault.AUTHORIZED_APPS };
                        const obj75 = { type: metroImportDefault.AUTHORIZED_APPS };
                        break;
                      }
                      case "share":
                      {
                        let attachmentManifest;
                        let channelId;
                        let shareId;
                        let text;
                        tmp30 = null;
                        const tmp5Result15 = PlatformUtils;
                        if (tmp5Result15.isIOS()) {
                          let items3;
                          let str11 = query;
                          if (query == null) {
                            str11 = "";
                          }
                          function isValidUUID(shareId) {
                            const obj = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                            return obj.test(shareId);
                          }
                          const tmp158Result10 = parseQuery(str11);
                          ({ shareId, attachmentManifest } = tmp158Result10);
                          let tmp41;
                          ({ text, channelId } = tmp158Result10);
                          if (typeof shareId === "string") {
                            if (isValidUUID(shareId)) {
                              tmp41 = shareId;
                            }
                          }
                          let items2 = [];
                          if (typeof attachmentManifest === "string") {
                            try {
                              const _JSON = JSON;
                              items2 = JSON.parse(attachmentManifest);
                            } catch (err) {
                              items2 = [];
                            }
                          }
                          const _Array = Array;
                          if (Array.isArray(items2)) {
                            items3 = items2;
                          } else {
                            items3 = [];
                          }
                          const items4 = [];
                          const iter = items3[Symbol.iterator]();
                          const nextResult = iter.next();
                          while (iter !== undefined) {
                            let tmp49 = nextResult;
                            if (null != nextResult) {
                              if (typeof tmp49.originalFilename === "string") {
                                if (typeof tmp49.temporaryFilename === "string") {
                                  if (isValidUUID(tmp49.temporaryFilename)) {
                                    let obj76 = { originalFilename: null, temporaryFilename: null };
                                    ({ originalFilename: obj23.originalFilename, temporaryFilename: obj23.temporaryFilename } = tmp49);
                                    let tmp51 = obj76;
                                    let isSafeIntegerResult = typeof tmp49.originalSize === "number";
                                    if (isSafeIntegerResult) {
                                      let _Number = Number;
                                      isSafeIntegerResult = Number.isSafeInteger(tmp49.originalSize);
                                    }
                                    if (isSafeIntegerResult) {
                                      isSafeIntegerResult = tmp49.originalSize > 0;
                                    }
                                    if (isSafeIntegerResult) {
                                      tmp51.originalSize = tmp49.originalSize;
                                    }
                                    let arr = items4.push(tmp51);
                                  }
                                }
                              }
                            }
                            continue;
                          }
                          tmp30 = { type: metroImportDefault.SHARE, text, channelId, shareId: tmp41, attachmentManifest: items4 };
                          const obj77 = { type: metroImportDefault.SHARE, text, channelId, shareId: tmp41, attachmentManifest: items4 };
                        }
                        break;
                      }
                      case "dave-protocol-verification":
                      {
                        let fingerprint2;
                        let userId;
                        let str10 = query;
                        if (query == null) {
                          str10 = "";
                        }
                        ({ userId, fingerprint: fingerprint2 } = parseQuery(str10));
                        tmp30 = null;
                        parseQuery(str10);
                        if (null != userId) {
                          tmp30 = null;
                          if (null != fingerprint2) {
                            tmp30 = null;
                            const tmp5Result16 = SecureFramesDeeplinkExperiment;
                            if (tmp5Result16.getSecureFramesDeeplinkExperiment({ location: "parseUrl" }).enabled) {
                              tmp30 = { type: metroImportDefault.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                              const obj78 = { type: metroImportDefault.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                            }
                          }
                        }
                        break;
                      }
                      case "agekey-return":
                      {
                        let str9 = query;
                        if (query == null) {
                          str9 = "";
                        }
                        const obj79 = { type: metroImportDefault.AGE_VERIFICATION_AGEKEY_RETURN, result: null, ageKeySaved: null, verificationId: null };
                        ({ result: obj19.result, ageKeySaved: obj19.ageKeySaved, verificationId: obj19.verificationId } = parseQuery(str9));
                        tmp30 = obj79;
                        parseQuery(str9);
                        break;
                      }
                      case "gift":
                      {
                        tmp30 = { type: metroImportDefault.GIFT };
                        const obj80 = { type: metroImportDefault.GIFT };
                        break;
                      }
                      case "store":
                      {
                        let str8 = query;
                        if (query == null) {
                          str8 = "";
                        }
                        tmp30 = { type: metroImportDefault.NITRO_HOME, section: parseQuery(str8).section };
                        const obj81 = { type: metroImportDefault.NITRO_HOME, section: parseQuery(str8).section };
                        break;
                      }
                      case "connected-games":
                      {
                        tmp30 = { type: metroImportDefault.CONNECTED_GAMES };
                        const obj82 = { type: metroImportDefault.CONNECTED_GAMES };
                        break;
                      }
                      case "boost-settings":
                      {
                        tmp30 = { type: metroImportDefault.BOOST_SETTINGS };
                        const obj83 = { type: metroImportDefault.BOOST_SETTINGS };
                        break;
                      }
                      case "quest-preview-tool":
                      {
                        let str7 = query;
                        if (query == null) {
                          str7 = "";
                        }
                        tmp30 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: parseQuery(str7).quest_id };
                        const obj84 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: parseQuery(str7).quest_id };
                        break;
                      }
                      case "subscription-settings":
                      {
                        tmp30 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                        const obj85 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                        break;
                      }
                    }
                  }
                }
                const obj43 = LinkUtils;
                const result3 = obj43.tryParseEventDetailsPath(pathname);
                const tmp82 = require;
                if (null != result3) {
                  const obj86 = { fingerprint, attemptId, installationId, payload: obj87 };
                  obj87 = { type: metroImportDefault.GUILD_EVENT_DETAILS, guildEventId: null, guildId: null, recurrenceId: null };
                  ({ guildEventId: obj66.guildEventId, guildId: obj66.guildId, recurrenceId: obj66.recurrenceId } = result3);
                  return obj86;
                } else if (null != pathname.match(re19)) {
                  const _decodeURIComponent4 = decodeURIComponent;
                  ({ key, redirect, fingerprint: fingerprint3 } = parseQuery(decodeURIComponent(query)));
                  parseQuery(decodeURIComponent(query));
                  if (null != key) {
                    if (null != redirect) {
                      const _URL = URL;
                      const _location = location;
                      const _window = window;
                      const _HermesInternal2 = HermesInternal;
                      const self3 = this;
                      const self4 = this;
                      const uRL = new URL(redirect, "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
                      if (null != fingerprint3) {
                        const searchParams = uRL.searchParams;
                        searchParams.append("fingerprint", fingerprint3);
                      }
                      const obj88 = { fingerprint: fingerprint3, attemptId, installationId, payload: obj89 };
                      return obj88;
                    }
                  }
                  const obj91 = { reason: "invalid_query_params", fingerprint: tmp82Result.maybeExtractId(fingerprint3) };
                  const track = AnalyticsUtilsDefault.track;
                  const MOBILE_WEB_HANDOFF_FAILURE = constants.MOBILE_WEB_HANDOFF_FAILURE;
                  AnalyticsUtilsDefault;
                  const obj93 = { fingerprint: fingerprint3 };
                  tmp82Result = tmp82(1254);
                  track(MOBILE_WEB_HANDOFF_FAILURE, obj91, obj93);
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const error = new Error("Missing nonce or redirect query params");
                  throw error;
                } else {
                  const match6 = pathname.match(re20);
                  if (null != match6) {
                    let str21 = query;
                    const _decodeURIComponent3 = decodeURIComponent;
                    if (query == null) {
                      str21 = "";
                    }
                    const obj94 = { fingerprint, attemptId, installationId, payload: obj95 };
                    obj95 = { type: metroImportDefault.USER_CONNECTIONS_LINK_CALLBACK, provider: match6[1], callbackCode: null, callbackState: null };
                    ({ code: obj59.callbackCode, state: obj59.callbackState } = parseQuery(_decodeURIComponent3(str21)));
                    parseQuery(_decodeURIComponent3(str21));
                    return obj94;
                  } else {
                    const match7 = pathname.match(re21);
                    if (null != match7) {
                      [first1, tmp113] = match7;
                      let str20 = query;
                      const _decodeURIComponent2 = decodeURIComponent;
                      const tmp114 = parseQuery;
                      if (query == null) {
                        str20 = "";
                      }
                      const obj96 = { fingerprint, attemptId, installationId, payload: obj97 };
                      obj97 = { type: metroImportDefault.USER_CONNECTIONS_CALLBACK, provider: tmp113, searchParams: tmp114(_decodeURIComponent2(str20)) };
                      return obj96;
                    } else {
                      const match8 = pathname.match(re22);
                      if (null != match8) {
                        const tmp104 = _slicedToArray(match8, 4);
                        const obj98 = { fingerprint, attemptId, installationId, payload: obj99 };
                        obj99 = { type: metroImportDefault.GUILD_SETTINGS, guildId: tmp104[1], settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp104[2]), settingsSubsection: urlPartToSettingsEnumDefault(metroRequire, tmp105) };
                        return obj98;
                      } else {
                        const match9 = pathname.match(re23);
                        if (null != match9) {
                          [, tmp96, tmp97] = match9;
                          let str19 = query;
                          const tmp98 = parseQuery;
                          if (query == null) {
                            str19 = "";
                          }
                          const obj100 = { fingerprint, attemptId, installationId, payload: obj101 };
                          obj101 = { type: metroImportDefault.GUILD_SETTINGS_PICKER, settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp96), settingsSubsection: urlPartToSettingsEnumDefault(metroRequire, tmp97), feature };
                          feature = tmp98(str19).feature;
                          return obj100;
                        } else if (null != pathname.match(re24)) {
                          let str18 = query;
                          const _decodeURIComponent = decodeURIComponent;
                          const tmp91 = parseQuery;
                          if (query == null) {
                            str18 = "";
                          }
                          const obj102 = { fingerprint, attemptId, installationId, payload: obj103 };
                          obj103 = { type: metroImportDefault.ACTIVATE_DEVICE, userCode: tmp91(_decodeURIComponent(str18)).user_code };
                          return obj102;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
