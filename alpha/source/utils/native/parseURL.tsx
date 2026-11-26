// Module ID: 5758
// Function ID: 5759
// Name: parseURL
// Dependencies: [32, 1071, 1073, 5667, 5759, 5760, 1489, 2069, 1382, 5761, 5765, 5789, 5787, 5790, 5837, 1380, 5666, 11, 5779, 5838, 1626, 1379, 5839, 1256, 1254, 5844, 2]
// Exports: default

// Module 5758 (parseURL)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import URLUtilsDefault from "URLUtils" /* 1380 */;
import urlParseDefault from "urlParse" /* 1382 */;
import _modDef1489 from "module_1489" /* 1489 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import _modDef2069 from "module_2069" /* 2069 */;
import LinkUtils from "LinkUtils" /* 5666 */;
import ConversationConstants from "ConversationConstants" /* 5667 */;
import MobileNativeUpdateConstants from "MobileNativeUpdateConstants" /* 5759 */;
import findCodedLinks from "findCodedLinks" /* 5761 */;
import CodedLink from "CodedLink" /* 5765 */;
import Authorize from "Authorize" /* 5779 */;
import conjureProjectLink from "conjureProjectLink" /* 5787 */;
import useVirtualCurrencyMobileEnabled from "useVirtualCurrencyMobileEnabled" /* 5789 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5790 */;
import QRLoginUtils from "QRLoginUtils" /* 5837 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 5838 */;
import SecureFramesDeeplinkExperiment from "SecureFramesDeeplinkExperiment" /* 5839 */;
import urlPartToSettingsEnumDefault from "urlPartToSettingsEnum" /* 5844 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 1071 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import PaymentConstants from "PaymentConstants" /* 5760 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function parseQuery(arg0) {
  try {
    const tmp = arg0;
    const tmp2 = importDefault;
    const _Object = Object;
    const _Object2 = Object;
    const obj = _modDef1489;
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
const CONVERSATION_QUERY_PARAM = ConversationConstants.CONVERSATION_QUERY_PARAM;
const UPDATE_CONFIG = MobileNativeUpdateConstants.UPDATE_CONFIG;
({ MobileWebRedirectCheckoutDeepLinkActions: closure_12, MobileWebRedirectCheckoutDeepLinkQueryKeys: map1 } = PaymentConstants);
const re14 = /feature\/([\w-]+)/;
const re15 = /feature\/boost\/([0-9]+)/;
const re16 = /users\/(\d+)/;
const re17 = /(?:connect|oauth2)\/authorize/;
const re18 = /login\/one-time/;
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
const re29 = /^\/subscriptions\/?$/;
let result = size.fileFinishedImporting("utils/native/parseURL.tsx");

export default function parseURL(arg0) {
  let attemptId;
  let channel_id;
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
  let obj103;
  let obj105;
  let obj107;
  let obj109;
  let obj111;
  let obj14;
  let obj16;
  let obj25;
  let obj27;
  let obj30;
  let obj32;
  let obj34;
  let obj36;
  let obj46;
  let obj48;
  let obj55;
  let obj57;
  let obj94;
  let pathname;
  let query;
  let redirect;
  let referrer_id;
  let sort;
  let tmp115;
  let tmp16;
  let tmp5Result11;
  let tmp86Result;
  let tmp98;
  let tmp99;
  let username;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = _modDef2069;
  const sanitizeUrlResult = obj.sanitizeUrl(arg0);
  if (null == sanitizeUrlResult) {
    const obj3 = { payload: obj4 };
    return obj3;
  } else {
    const tmpResult = urlParseDefault;
    const parsed = tmpResult.parse(sanitizeUrlResult);
    ({ host, hostname, pathname, query } = parsed);
    let str = query;
    const protocol = parsed.protocol;
    if (query == null) {
      str = "";
    }
    const tmp165Result = parseQuery(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp165Result);
    ({ username, didRegister, custom_id, link_id, channel_id } = tmp165Result);
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
                                        const tmp11 = _slicedToArray(str2.split("-"), 2)[1];
                                        if (enabled) {
                                          let FEATURED_PAGE;
                                          if (tmp10 === metroImportAll.ORBS) {
                                            FEATURED_PAGE = constants3.ORBS;
                                          }
                                          const obj13 = { fingerprint, attemptId, installationId, payload: obj14 };
                                          obj14 = { type: metroImportDefault.SHOP, screen: FEATURED_PAGE, skuId: tmp16 };
                                          tmp16 = undefined;
                                          if ("" !== tmp11) {
                                            tmp16 = tmp11;
                                          }
                                          return obj13;
                                        }
                                        FEATURED_PAGE = constants3.FEATURED_PAGE;
                                      } else if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                        if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE !== type) {
                                          if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                                            const obj15 = { fingerprint, attemptId, installationId, payload: obj16 };
                                            obj16 = { type: metroImportDefault.CONJURE_PROJECT_LINK, applicationId: findCodedLinkResult.code, ticket: tmp5Result11.conjureProjectLinkTicket(findCodedLinkResult.url) };
                                            tmp5Result11 = conjureProjectLink;
                                            return obj15;
                                          } else if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                            if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
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
          }
        }
        const obj17 = { fingerprint, attemptId, installationId, payload: obj18 };
        return obj17;
      }
    }
    const findGiftCodesResult = GiftCodeUtils.findGiftCodes(sanitizeUrlResult);
    if (findGiftCodesResult.length > 0) {
      const obj19 = { fingerprint, attemptId, installationId, payload: obj20 };
      return obj19;
    } else {
      const tmp5Result12 = QRLoginUtils;
      const result = tmp5Result12.findRemoteAuthFingerprint(host, pathname);
      if (null != result) {
        if (result.length > 0) {
          const obj21 = { fingerprint, attemptId, installationId, payload: obj22 };
          return obj21;
        }
      }
      const tmpResult8 = URLUtilsDefault;
      if (!tmpResult8.isDiscordHostname(host)) {
        let obj29;
        const tmpResult9 = URLUtilsDefault;
        if (!tmpResult9.isDiscordProtocol(protocol)) {
          URLUtilsDefault;
        }
        if ("promos.discord.gg" === hostname) {
          const obj23 = { fingerprint, attemptId, installationId, payload: obj25 };
          obj29 = obj23;
          obj25 = { type: metroImportDefault.PROMOTIONS, url: sanitizeUrlResult };
        } else {
          let host1;
          if (UPDATE_CONFIG != null) {
            host1 = UPDATE_CONFIG.url.host;
          }
          if (host === host1) {
            const obj26 = { fingerprint, attemptId, installationId, payload: obj27 };
            obj29 = obj26;
            obj27 = { type: metroImportDefault.MOBILE_NATIVE_UPDATE, url: sanitizeUrlResult };
          } else {
            obj29 = { fingerprint, attemptId, installationId, payload: obj30 };
            obj30 = { type: metroImportDefault.NONE };
          }
        }
        return obj29;
      }
      if (null != pathname) {
        const tmp5Result13 = findCodedLinks;
        const result1 = tmp5Result13.tryParseSocialLayerStorefrontPath(pathname, { allowUnpagedChannelPath: true });
        if (null != result1) {
          const obj31 = { fingerprint, attemptId, installationId, payload: obj32 };
          obj32 = { type: metroImportDefault.SOCIAL_LAYER_STOREFRONT, guildId: null, skuId: null };
          ({ guildId: obj102.guildId, skuId: obj102.skuId } = result1);
          return obj31;
        } else {
          const tmp5Result14 = LinkUtils;
          const tryParseDiceRollLinkResult = tmp5Result14.tryParseDiceRollLink(pathname);
          if (null != tryParseDiceRollLinkResult) {
            const obj33 = { fingerprint, attemptId, installationId, payload: obj34 };
            obj34 = { type: metroImportDefault.ROLL_DICE, guildId: null, channelId: null, diceCount: null, diceSides: null };
            ({ guildId: obj100.guildId, channelId: obj100.channelId, diceCount: obj100.diceCount, diceSides: obj100.diceSides } = tryParseDiceRollLinkResult);
            return obj33;
          } else {
            const tmp5Result15 = LinkUtils;
            const tryParseChannelPathResult = tmp5Result15.tryParseChannelPath(pathname);
            if (null != tryParseChannelPathResult) {
              let CHANNEL;
              if (query == null) {
                query = "";
              }
              const tmp165Result8 = parseQuery(query);
              let castResult = null;
              const summaryId = tmp165Result8.summaryId;
              if (null != tmp165Result8[CONVERSATION_QUERY_PARAM]) {
                castResult = null;
                const tmpResult11 = SnowflakeUtilsDefault;
                if (tmpResult11.isProbablyAValidSnowflake(tmp165Result8[CONVERSATION_QUERY_PARAM])) {
                  const tmpResult12 = SnowflakeUtilsDefault;
                  castResult = tmpResult12.cast(tmp152);
                }
              }
              const obj35 = { fingerprint, attemptId, installationId, payload: obj36 };
              if (null != tryParseChannelPathResult.messageId) {
                CHANNEL = metroImportDefault.MESSAGE;
              } else {
                CHANNEL = metroImportDefault.CHANNEL;
              }
              obj36 = { type: CHANNEL, guildId: null, channelId: null, messageId: null, summaryId, conversationId: castResult };
              ({ guildId: obj98.guildId, channelId: obj98.channelId, messageId: obj98.messageId } = tryParseChannelPathResult);
              return obj35;
            } else {
              const match = pathname.match(re25);
              if (null != match) {
                if (match.length > 1) {
                  const obj37 = { fingerprint, attemptId, installationId, payload: obj38 };
                  return obj37;
                }
              }
              const match1 = pathname.match(re26);
              if (null != match1) {
                if (match1.length > 1) {
                  const obj40 = { fingerprint, attemptId, installationId, payload: obj41 };
                  return obj40;
                }
              }
              if (null != pathname.match(re28)) {
                let str5 = query;
                const parse = _modDef1489.parse;
                _modDef1489;
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
                  const obj43 = { fingerprint, attemptId, installationId, payload: obj44 };
                  return obj43;
                }
              }
              if (null != pathname.match(re27)) {
                let obj47;
                let str27 = query;
                const parse2 = _modDef1489.parse;
                _modDef1489;
                if (query == null) {
                  str27 = "";
                }
                let ad_creative_ids1 = parse2(str27).ad_creative_ids;
                if (ad_creative_ids1 == null) {
                  ad_creative_ids1 = [];
                }
                const items1 = [ad_creative_ids1];
                const flatResult = items1.flat();
                if (flatResult.length > 0) {
                  const obj45 = { fingerprint, attemptId, installationId, payload: obj46 };
                  obj47 = obj45;
                  obj46 = { type: metroImportDefault.QUEST_HOME_PREVIEW, adCreativeIds: flatResult };
                } else {
                  obj47 = { fingerprint, attemptId, installationId, payload: obj48 };
                  obj48 = { type: metroImportDefault.QUESTS, referrerId: referrer_id, sort, filter };
                }
                return obj47;
              } else if (null != pathname.match(re29)) {
                const obj50 = { fingerprint, attemptId, installationId, payload: obj51 };
                return obj50;
              } else {
                const match2 = pathname.match(re16);
                if (null != match2) {
                  if (match2.length > 1) {
                    const obj52 = { fingerprint, attemptId, installationId, payload: obj53 };
                    return obj52;
                  }
                }
                if (null != pathname.match(re17)) {
                  let str6 = query;
                  const parseOAuth2AuthorizeProps = Authorize.parseOAuth2AuthorizeProps;
                  Authorize;
                  if (query == null) {
                    str6 = "";
                  }
                  const result2 = parseOAuth2AuthorizeProps(str6);
                  if (null != result2) {
                    const obj54 = { fingerprint, attemptId, installationId, payload: element };
                    element = { type: metroImportDefault.OAUTH2_AUTHORIZE, props: obj55 };
                    obj55 = { wasDeepLink: flag };
                    const merged = Object.assign(result2);
                    return obj54;
                  }
                }
                if (null != pathname.match(re18)) {
                  let str26 = query;
                  if (query == null) {
                    str26 = "";
                  }
                  let token = tmp165(str26).token;
                  const obj56 = { fingerprint, attemptId, installationId, payload: obj57 };
                  obj57 = { type: metroImportDefault.ONE_TIME_LOGIN, token };
                  if (token == null) {
                    token = null;
                  }
                  return obj56;
                } else {
                  const match3 = pathname.match(re15);
                  if (null != match3) {
                    if (match3.length > 1) {
                      const obj58 = { fingerprint, attemptId, installationId, payload: obj59 };
                      return obj58;
                    }
                  }
                  const match4 = pathname.match(re14);
                  if (null != match4) {
                    if (match4.length > 1) {
                      let tmp31 = null;
                      switch (match4[1]) {
                        case "composeMessage":
                        {
                          tmp31 = { type: metroImportDefault.COMPOSE_MESSAGE };
                          const obj60 = { type: metroImportDefault.COMPOSE_MESSAGE };
                          if (null != tmp31) {
                            return { fingerprint, attemptId, installationId, payload: tmp31 };
                          }
                          break;
                        }
                        case "contactSync":
                        {
                          tmp31 = { type: metroImportDefault.CONTACT_SYNC };
                          const obj62 = { type: metroImportDefault.CONTACT_SYNC };
                          break;
                        }
                        case "addFriends":
                        {
                          tmp31 = { type: metroImportDefault.ADD_FRIENDS };
                          const obj63 = { type: metroImportDefault.ADD_FRIENDS };
                          break;
                        }
                        case "friends":
                        {
                          let str18 = query;
                          if (query == null) {
                            str18 = "";
                          }
                          tmp31 = { type: metroImportDefault.FRIENDS, userId: parseQuery(str18).user_id };
                          const obj64 = { type: metroImportDefault.FRIENDS, userId: parseQuery(str18).user_id };
                          break;
                        }
                        case "editProfile":
                        {
                          tmp31 = { type: metroImportDefault.EDIT_PROFILE };
                          const obj66 = { type: metroImportDefault.EDIT_PROFILE };
                          break;
                        }
                        case "badges":
                        {
                          tmp31 = { type: metroImportDefault.BADGE_DIRECTORY };
                          const obj67 = { type: metroImportDefault.BADGE_DIRECTORY };
                          break;
                        }
                        case "voiceChannel":
                        {
                          let str17 = query;
                          if (query == null) {
                            str17 = "";
                          }
                          const obj68 = { type: metroImportDefault.VOICE_CHANNEL, guildId: null, channelId: null, userId: null, via: null, action: null };
                          ({ guild_id: obj42.guildId, channel_id: obj42.channelId, user_id: obj42.userId, via: obj42.via, action: obj42.action } = parseQuery(str17));
                          tmp31 = obj68;
                          parseQuery(str17);
                          break;
                        }
                        case "sessionManagement":
                        {
                          tmp31 = { type: metroImportDefault.SESSION_MANAGEMENT };
                          const obj69 = { type: metroImportDefault.SESSION_MANAGEMENT };
                          break;
                        }
                        case "messageRequests":
                        {
                          tmp31 = { type: metroImportDefault.MESSAGE_REQUESTS };
                          const obj70 = { type: metroImportDefault.MESSAGE_REQUESTS };
                          break;
                        }
                        case "home":
                        {
                          let str16 = query;
                          if (query == null) {
                            str16 = "";
                          }
                          const obj71 = { type: metroImportDefault.GUILD_HOME, guildId: null, highlightChannelId: null, highlightMessageId: null };
                          ({ guild_id: obj39.guildId, highlight_channel_id: obj39.highlightChannelId, highlight_message_id: obj39.highlightMessageId } = parseQuery(str16));
                          tmp31 = obj71;
                          parseQuery(str16);
                          break;
                        }
                        case "icymi":
                        {
                          tmp31 = { type: metroImportDefault.ICYMI };
                          const obj73 = { type: metroImportDefault.ICYMI };
                          break;
                        }
                        case "connections":
                        {
                          let str15 = query;
                          if (query == null) {
                            str15 = "";
                          }
                          tmp31 = { type: metroImportDefault.CONNECTIONS, source: parseQuery(str15).source };
                          const obj74 = { type: metroImportDefault.CONNECTIONS, source: parseQuery(str15).source };
                          break;
                        }
                        case "family-center":
                        {
                          tmp31 = { type: metroImportDefault.FAMILY_CENTER, pathname };
                          const obj75 = { type: metroImportDefault.FAMILY_CENTER, pathname };
                          break;
                        }
                        case "promo-url":
                        {
                          let str14 = query;
                          if (query == null) {
                            str14 = "";
                          }
                          const promo_url = tmp165(str14).promo_url;
                          tmp31 = null;
                          if (undefined !== promo_url) {
                            tmp31 = { type: metroImportDefault.FEATURE_PROMO_URL, promoUrl: promo_url };
                            const obj76 = { type: metroImportDefault.FEATURE_PROMO_URL, promoUrl: promo_url };
                          }
                          break;
                        }
                        case "account-standing":
                        {
                          tmp31 = { type: metroImportDefault.ACCOUNT_STANDING, pathname };
                          const obj77 = { type: metroImportDefault.ACCOUNT_STANDING, pathname };
                          break;
                        }
                        case "mobile-web-redirect-checkout":
                        {
                          const tmp5Result17 = MobileWebRedirectCheckoutUtils;
                          let result3 = tmp5Result17.isMobileWebRedirectCheckoutEnabled();
                          if (result3) {
                            const tmp5Result18 = MetaQuestUtils;
                            result3 = !tmp5Result18.isMetaQuest();
                          }
                          let str13 = query;
                          if (query == null) {
                            str13 = "";
                          }
                          let DEFAULT = parseQuery(str13)[map1.DEEP_LINK_ACTION];
                          tmp31 = null;
                          parseQuery(str13);
                          if (result3) {
                            const obj78 = { type: metroImportDefault.MOBILE_WEB_REDIRECT_CHECKOUT, deepLinkAction: DEFAULT, guildId: tmp67 };
                            if (DEFAULT == null) {
                              DEFAULT = constants4.DEFAULT;
                            }
                            tmp31 = obj78;
                          }
                          break;
                        }
                        case "open-shop":
                        {
                          tmp31 = { type: metroImportDefault.SHOP };
                          const obj79 = { type: metroImportDefault.SHOP };
                          break;
                        }
                        case "authorized-apps":
                        {
                          tmp31 = { type: metroImportDefault.AUTHORIZED_APPS };
                          const obj80 = { type: metroImportDefault.AUTHORIZED_APPS };
                          break;
                        }
                        case "share":
                        {
                          let attachmentManifest;
                          let channelId;
                          let shareId;
                          let text;
                          tmp31 = null;
                          const tmp5Result19 = PlatformUtils;
                          if (tmp5Result19.isIOS()) {
                            let items3;
                            let str12 = query;
                            if (query == null) {
                              str12 = "";
                            }
                            function isValidUUID(shareId) {
                              const obj = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                              return obj.test(shareId);
                            }
                            const tmp165Result12 = parseQuery(str12);
                            ({ shareId, attachmentManifest } = tmp165Result12);
                            let tmp44;
                            ({ text, channelId } = tmp165Result12);
                            if (typeof shareId === "string") {
                              if (isValidUUID(shareId)) {
                                tmp44 = shareId;
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
                              let tmp52 = nextResult;
                              if (null != nextResult) {
                                if (typeof tmp52.originalFilename === "string") {
                                  if (typeof tmp52.temporaryFilename === "string") {
                                    if (isValidUUID(tmp52.temporaryFilename)) {
                                      let obj81 = { originalFilename: null, temporaryFilename: null };
                                      ({ originalFilename: obj28.originalFilename, temporaryFilename: obj28.temporaryFilename } = tmp52);
                                      let tmp54 = obj81;
                                      let isSafeIntegerResult = typeof tmp52.originalSize === "number";
                                      if (isSafeIntegerResult) {
                                        let _Number = Number;
                                        isSafeIntegerResult = Number.isSafeInteger(tmp52.originalSize);
                                      }
                                      if (isSafeIntegerResult) {
                                        isSafeIntegerResult = tmp52.originalSize > 0;
                                      }
                                      if (isSafeIntegerResult) {
                                        tmp54.originalSize = tmp52.originalSize;
                                      }
                                      let arr = items4.push(tmp54);
                                    }
                                  }
                                }
                              }
                              continue;
                            }
                            tmp31 = { type: metroImportDefault.SHARE, text, channelId, shareId: tmp44, attachmentManifest: items4 };
                            const obj82 = { type: metroImportDefault.SHARE, text, channelId, shareId: tmp44, attachmentManifest: items4 };
                          }
                          break;
                        }
                        case "dave-protocol-verification":
                        {
                          let fingerprint2;
                          let userId;
                          let str11 = query;
                          if (query == null) {
                            str11 = "";
                          }
                          ({ userId, fingerprint: fingerprint2 } = parseQuery(str11));
                          tmp31 = null;
                          parseQuery(str11);
                          if (null != userId) {
                            tmp31 = null;
                            if (null != fingerprint2) {
                              tmp31 = null;
                              const tmp5Result20 = SecureFramesDeeplinkExperiment;
                              if (tmp5Result20.getSecureFramesDeeplinkExperiment({ location: "parseUrl" }).enabled) {
                                tmp31 = { type: metroImportDefault.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                                const obj83 = { type: metroImportDefault.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                              }
                            }
                          }
                          break;
                        }
                        case "agekey-return":
                        {
                          let str10 = query;
                          if (query == null) {
                            str10 = "";
                          }
                          const obj84 = { type: metroImportDefault.AGE_VERIFICATION_AGEKEY_RETURN, result: null, ageKeySaved: null, verificationId: null };
                          ({ result: obj24.result, ageKeySaved: obj24.ageKeySaved, verificationId: obj24.verificationId } = parseQuery(str10));
                          tmp31 = obj84;
                          parseQuery(str10);
                          break;
                        }
                        case "gift":
                        {
                          tmp31 = { type: metroImportDefault.GIFT };
                          const obj85 = { type: metroImportDefault.GIFT };
                          break;
                        }
                        case "store":
                        {
                          let str9 = query;
                          if (query == null) {
                            str9 = "";
                          }
                          tmp31 = { type: metroImportDefault.NITRO_HOME, section: parseQuery(str9).section };
                          const obj86 = { type: metroImportDefault.NITRO_HOME, section: parseQuery(str9).section };
                          break;
                        }
                        case "connected-games":
                        {
                          tmp31 = { type: metroImportDefault.CONNECTED_GAMES };
                          const obj87 = { type: metroImportDefault.CONNECTED_GAMES };
                          break;
                        }
                        case "boost-settings":
                        {
                          tmp31 = { type: metroImportDefault.BOOST_SETTINGS };
                          const obj88 = { type: metroImportDefault.BOOST_SETTINGS };
                          break;
                        }
                        case "quest-preview-tool":
                        {
                          let str8 = query;
                          if (query == null) {
                            str8 = "";
                          }
                          tmp31 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: parseQuery(str8).quest_id };
                          const obj89 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: parseQuery(str8).quest_id };
                          break;
                        }
                        case "subscription-settings":
                        {
                          tmp31 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                          const obj90 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                          break;
                        }
                        case "conjure":
                        {
                          let str7 = query;
                          if (query == null) {
                            str7 = "";
                          }
                          const project_id = tmp165(str7).project_id;
                          tmp31 = null;
                          if (null != project_id) {
                            tmp31 = { type: metroImportDefault.CONJURE, projectId: project_id };
                            const obj91 = { type: metroImportDefault.CONJURE, projectId: project_id };
                          }
                          break;
                        }
                        case "checkpoint":
                        {
                          tmp31 = { type: metroImportDefault.CHECKPOINT };
                          const obj92 = { type: metroImportDefault.CHECKPOINT };
                          break;
                        }
                      }
                    }
                  }
                  const obj49 = LinkUtils;
                  const result4 = obj49.tryParseEventDetailsPath(pathname);
                  const tmp86 = require;
                  if (null != result4) {
                    const obj93 = { fingerprint, attemptId, installationId, payload: obj94 };
                    obj94 = { type: metroImportDefault.GUILD_EVENT_DETAILS, guildEventId: null, guildId: null, recurrenceId: null };
                    ({ guildEventId: obj72.guildEventId, guildId: obj72.guildId, recurrenceId: obj72.recurrenceId } = result4);
                    return obj93;
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
                        const obj95 = { fingerprint: fingerprint3, attemptId, installationId, payload: obj96 };
                        return obj95;
                      }
                    }
                    const obj97 = { reason: "invalid_query_params", fingerprint: tmp86Result.maybeExtractId(fingerprint3) };
                    const track = AnalyticsUtilsDefault.track;
                    const MOBILE_WEB_HANDOFF_FAILURE = constants.MOBILE_WEB_HANDOFF_FAILURE;
                    AnalyticsUtilsDefault;
                    const obj99 = { fingerprint: fingerprint3 };
                    tmp86Result = tmp86(1254);
                    track(MOBILE_WEB_HANDOFF_FAILURE, obj97, obj99);
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error("Missing nonce or redirect query params");
                    throw error;
                  } else {
                    const match5 = pathname.match(re20);
                    if (null != match5) {
                      let str23 = query;
                      const _decodeURIComponent3 = decodeURIComponent;
                      if (query == null) {
                        str23 = "";
                      }
                      const obj101 = { fingerprint, attemptId, installationId, payload: obj103 };
                      obj103 = { type: metroImportDefault.USER_CONNECTIONS_LINK_CALLBACK, provider: match5[1], callbackCode: null, callbackState: null };
                      ({ code: obj65.callbackCode, state: obj65.callbackState } = parseQuery(_decodeURIComponent3(str23)));
                      parseQuery(_decodeURIComponent3(str23));
                      return obj101;
                    } else {
                      const match6 = pathname.match(re21);
                      if (null != match6) {
                        [first1, tmp115] = match6;
                        let str22 = query;
                        const _decodeURIComponent2 = decodeURIComponent;
                        const tmp116 = parseQuery;
                        if (query == null) {
                          str22 = "";
                        }
                        const obj104 = { fingerprint, attemptId, installationId, payload: obj105 };
                        obj105 = { type: metroImportDefault.USER_CONNECTIONS_CALLBACK, provider: tmp115, searchParams: tmp116(_decodeURIComponent2(str22)) };
                        return obj104;
                      } else {
                        const match7 = pathname.match(re22);
                        if (null != match7) {
                          const tmp106 = _slicedToArray(match7, 4);
                          const obj106 = { fingerprint, attemptId, installationId, payload: obj107 };
                          obj107 = { type: metroImportDefault.GUILD_SETTINGS, guildId: tmp106[1], settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp106[2]), settingsSubsection: urlPartToSettingsEnumDefault(metroRequire, tmp107) };
                          return obj106;
                        } else {
                          const match8 = pathname.match(re23);
                          if (null != match8) {
                            [, tmp98, tmp99] = match8;
                            let str21 = query;
                            const tmp100 = parseQuery;
                            if (query == null) {
                              str21 = "";
                            }
                            const obj108 = { fingerprint, attemptId, installationId, payload: obj109 };
                            obj109 = { type: metroImportDefault.GUILD_SETTINGS_PICKER, settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp98), settingsSubsection: urlPartToSettingsEnumDefault(metroRequire, tmp99), feature };
                            feature = tmp100(str21).feature;
                            return obj108;
                          } else if (null != pathname.match(re24)) {
                            let str20 = query;
                            const _decodeURIComponent = decodeURIComponent;
                            const tmp93 = parseQuery;
                            if (query == null) {
                              str20 = "";
                            }
                            const obj110 = { fingerprint, attemptId, installationId, payload: obj111 };
                            obj111 = { type: metroImportDefault.ACTIVATE_DEVICE, userCode: tmp93(_decodeURIComponent(str20)).user_code };
                            return obj110;
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
};
