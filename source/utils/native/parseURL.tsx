// Module ID: 4109
// Function ID: 34007
// Name: parseQuery
// Dependencies: []
// Exports: default

// Module 4109 (parseQuery)
function parseQuery(arg0) {
  const entries = Object.entries(importDefault(dependencyMap[5]).parse(arg0));
  return Object.fromEntries(entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const items = [tmp, ];
    let first = tmp2;
    if (Array.isArray(tmp2)) {
      first = tmp2[0];
    }
    items[1] = first;
    return items;
  }));
}
let closure_3 = importDefault(dependencyMap[0]);
({ AnalyticEvents: closure_4, GuildSettingsSections: closure_5, GuildSettingsSubsections: closure_6, LinkingTypes: closure_7 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ CollectibleShopTab: closure_8, CollectiblesMobileShopScreen: closure_9 } = arg1(dependencyMap[2]));
const UPDATE_CONFIG = arg1(dependencyMap[3]).UPDATE_CONFIG;
const tmp3 = arg1(dependencyMap[2]);
({ MobileWebRedirectCheckoutDeepLinkActions: closure_11, MobileWebRedirectCheckoutDeepLinkQueryKeys: closure_12 } = arg1(dependencyMap[4]));
let closure_13 = /feature\/([\w-]+)/;
let closure_14 = /feature\/boost\/([0-9]+)/;
let closure_15 = /users\/(\d+)/;
let closure_16 = /(?:connect|oauth2)\/authorize/;
let closure_17 = /login\/one-time/;
let closure_18 = /promos\.discord\.gg/;
let closure_19 = /mweb-handoff/;
let closure_20 = /connections\/(xbox|playstation|playstation-stg|crunchyroll)\/link/;
let closure_21 = /connections\/([a-z-]+)/;
let closure_22 = /guilds\/(\d+)\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
let closure_23 = /guilds\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
let closure_24 = /activate/;
let closure_25 = /^\/quests\/(\d+)/;
let closure_26 = /^\/quest-preview\/(\d+)/;
let closure_27 = /^\/quest-home/;
let closure_28 = /subscriptions\/(\d+)/;
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("utils/native/parseURL.tsx");

export default function parseURL(target) {
  let attachmentManifest;
  let attemptId;
  let channelId;
  let custom_id;
  let filter;
  let fingerprint;
  let fingerprint2;
  let fingerprint3;
  let host;
  let hostname;
  let installationId;
  let key;
  let link_id;
  let pathname;
  let protocol;
  let query;
  let redirect;
  let referrer_id;
  let shareId;
  let sort;
  let text;
  let userId;
  let username;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  function isValidUUID(shareId) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(shareId);
  }
  const arg1 = isValidUUID;
  let obj = importDefault(dependencyMap[6]);
  let sanitizeUrlResult = obj.sanitizeUrl(target);
  if (null == sanitizeUrlResult) {
    obj = {};
    obj = {};
    sanitizeUrlResult = closure_7;
    obj.type = closure_7.NONE;
    obj.payload = obj;
    return obj;
  } else {
    sanitizeUrlResult = importDefault;
    sanitizeUrlResult = dependencyMap;
    obj = importDefault(dependencyMap[7]);
    sanitizeUrlResult = obj.parse(sanitizeUrlResult);
    ({ host, pathname, query } = sanitizeUrlResult);
    let str13 = "";
    let str = "";
    ({ protocol, hostname } = sanitizeUrlResult);
    sanitizeUrlResult = parseQuery;
    if (null != query) {
      str = query;
    }
    const sanitizeUrlResultResult = sanitizeUrlResult(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = sanitizeUrlResultResult);
    ({ username, custom_id, link_id } = sanitizeUrlResultResult);
    let obj1 = arg1(dependencyMap[8]);
    const findCodedLinkResult = obj1.findCodedLink(sanitizeUrlResult);
    if (null != findCodedLinkResult) {
      const type = findCodedLinkResult.type;
      sanitizeUrlResult = arg1;
      sanitizeUrlResult = dependencyMap;
      if (arg1(dependencyMap[9]).CodedLinkType.INVITE === type) {
        obj = { fingerprint, attemptId, installationId };
        obj = {};
        sanitizeUrlResult = closure_7;
        obj.type = closure_7.INVITE;
        obj.inviteCode = findCodedLinkResult.code;
        obj.username = username;
        obj.deeplinkAttemptId = attemptId;
        obj.payload = obj;
        return obj;
      } else {
        sanitizeUrlResult = arg1;
        sanitizeUrlResult = dependencyMap;
        if (arg1(dependencyMap[9]).CodedLinkType.TEMPLATE === type) {
          obj = { fingerprint, attemptId, installationId };
          obj = {};
          sanitizeUrlResult = closure_7;
          obj.type = closure_7.GUILD_TEMPLATE;
          obj.guildTemplateCode = findCodedLinkResult.code;
          obj.payload = obj;
          return obj;
        } else {
          sanitizeUrlResult = arg1;
          sanitizeUrlResult = dependencyMap;
          if (arg1(dependencyMap[9]).CodedLinkType.BUILD_OVERRIDE !== type) {
            sanitizeUrlResult = arg1;
            sanitizeUrlResult = dependencyMap;
            if (arg1(dependencyMap[9]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              sanitizeUrlResult = arg1;
              sanitizeUrlResult = dependencyMap;
              if (arg1(dependencyMap[9]).CodedLinkType.EXPERIMENT !== type) {
                sanitizeUrlResult = arg1;
                sanitizeUrlResult = dependencyMap;
                if (arg1(dependencyMap[9]).CodedLinkType.EVENT !== type) {
                  sanitizeUrlResult = arg1;
                  sanitizeUrlResult = dependencyMap;
                  if (arg1(dependencyMap[9]).CodedLinkType.CHANNEL_LINK !== type) {
                    sanitizeUrlResult = arg1;
                    sanitizeUrlResult = dependencyMap;
                    if (arg1(dependencyMap[9]).CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
                      sanitizeUrlResult = arg1;
                      sanitizeUrlResult = dependencyMap;
                      if (arg1(dependencyMap[9]).CodedLinkType.ACTIVITY_BOOKMARK === type) {
                        obj1 = { fingerprint, attemptId, installationId };
                        let obj2 = { type: closure_7.ACTIVITY, applicationId: findCodedLinkResult.code, customId: custom_id, referrerId: referrer_id, linkId: link_id, isDeepLink: flag };
                        obj1.payload = obj2;
                        return obj1;
                      } else {
                        sanitizeUrlResult = arg1;
                        sanitizeUrlResult = dependencyMap;
                        if (arg1(dependencyMap[9]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                          sanitizeUrlResult = arg1;
                          sanitizeUrlResult = dependencyMap;
                          if (arg1(dependencyMap[9]).CodedLinkType.GUILD_PRODUCT !== type) {
                            sanitizeUrlResult = arg1;
                            sanitizeUrlResult = dependencyMap;
                            if (arg1(dependencyMap[9]).CodedLinkType.SERVER_SHOP !== type) {
                              sanitizeUrlResult = arg1;
                              sanitizeUrlResult = dependencyMap;
                              if (arg1(dependencyMap[9]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                sanitizeUrlResult = arg1;
                                sanitizeUrlResult = dependencyMap;
                                if (arg1(dependencyMap[9]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                  sanitizeUrlResult = arg1;
                                  sanitizeUrlResult = dependencyMap;
                                  if (arg1(dependencyMap[9]).CodedLinkType.QUESTS_EMBED !== type) {
                                    sanitizeUrlResult = arg1;
                                    sanitizeUrlResult = dependencyMap;
                                    if (arg1(dependencyMap[9]).CodedLinkType.GAME_PROFILE === type) {
                                      const obj3 = { fingerprint, attemptId, installationId };
                                      const obj4 = { type: closure_7.GAME_PROFILE, gameId: findCodedLinkResult.code };
                                      obj3.payload = obj4;
                                      return obj3;
                                    } else {
                                      sanitizeUrlResult = arg1;
                                      sanitizeUrlResult = dependencyMap;
                                      if (arg1(dependencyMap[9]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                        sanitizeUrlResult = arg1;
                                        sanitizeUrlResult = dependencyMap;
                                        if (arg1(dependencyMap[9]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                          sanitizeUrlResult = arg1;
                                          sanitizeUrlResult = dependencyMap;
                                          if (arg1(dependencyMap[9]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                            sanitizeUrlResult = arg1;
                                            sanitizeUrlResult = dependencyMap;
                                            if (arg1(dependencyMap[9]).CodedLinkType.COLLECTIBLES_SHOP === type) {
                                              obj2 = arg1(dependencyMap[10]);
                                              const tmp12 = callback(findCodedLinkResult.code.split("-"), 2)[1];
                                              if (obj2.isVirtualCurrencyEnabled().enabled) {
                                                if (tmp11 === constants2.ORBS) {
                                                  let FEATURED_PAGE = constants3.ORBS;
                                                }
                                                const obj5 = { fingerprint, attemptId, installationId };
                                                const obj6 = { type: closure_7.SHOP, screen: FEATURED_PAGE };
                                                let tmp17;
                                                if (str13 !== tmp12) {
                                                  tmp17 = tmp12;
                                                }
                                                obj6.skuId = tmp17;
                                                obj5.payload = obj6;
                                                return obj5;
                                              }
                                              FEATURED_PAGE = constants3.FEATURED_PAGE;
                                              const str3 = findCodedLinkResult.code;
                                              const tmp10 = callback(findCodedLinkResult.code.split("-"), 2);
                                            } else {
                                              const _Error = Error;
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
          const obj7 = { fingerprint, attemptId, installationId };
          const obj8 = {};
          sanitizeUrlResult = closure_7;
          obj8.type = closure_7.BUILD_OVERRIDE;
          obj8.overrideUrl = findCodedLinkResult.code;
          obj7.payload = obj8;
          return obj7;
        }
      }
    }
    const findGiftCodesResult = arg1(dependencyMap[11]).findGiftCodes(sanitizeUrlResult);
    if (findGiftCodesResult.length > 0) {
      let obj9 = { fingerprint, attemptId, installationId };
      let obj10 = {};
      sanitizeUrlResult = closure_7;
      obj10.type = closure_7.GIFT_CODE;
      obj10.giftCode = findGiftCodesResult[0];
      obj9.payload = obj10;
      return obj9;
    } else {
      sanitizeUrlResult = arg1;
      sanitizeUrlResult = dependencyMap;
      obj = arg1(dependencyMap[12]);
      const result = obj.findRemoteAuthFingerprint(host, pathname);
      if (null != result) {
        if (result.length > 0) {
          let obj11 = { fingerprint, attemptId, installationId };
          let obj12 = {};
          sanitizeUrlResult = closure_7;
          obj12.type = closure_7.REMOTE_AUTH;
          obj12.remoteAuthFingerprint = result;
          obj11.payload = obj12;
          return obj11;
        }
      }
      obj9 = importDefault(dependencyMap[13]);
      if (!obj9.isDiscordHostname(host)) {
        obj10 = importDefault(dependencyMap[13]);
        if (!obj10.isDiscordProtocol(protocol)) {
          obj11 = importDefault(dependencyMap[13]);
        }
        sanitizeUrlResult = undefined;
        if (null != host) {
          sanitizeUrlResult = closure_18;
          sanitizeUrlResult = host.match(closure_18);
        }
        if (null != sanitizeUrlResult) {
          const obj13 = { fingerprint, attemptId, installationId };
          const obj14 = {};
          sanitizeUrlResult = closure_7;
          obj14.type = closure_7.PROMOTIONS;
          obj14.url = sanitizeUrlResult;
          obj13.payload = obj14;
          let obj17 = obj13;
        } else {
          sanitizeUrlResult = UPDATE_CONFIG;
          sanitizeUrlResult = undefined;
          if (null != UPDATE_CONFIG) {
            sanitizeUrlResult = UPDATE_CONFIG;
            sanitizeUrlResult = UPDATE_CONFIG.url.host;
          }
          if (host === sanitizeUrlResult) {
            const obj15 = { fingerprint, attemptId, installationId };
            const obj16 = {};
            sanitizeUrlResult = closure_7;
            obj16.type = closure_7.MOBILE_NATIVE_UPDATE;
            obj16.url = sanitizeUrlResult;
            obj15.payload = obj16;
            obj17 = obj15;
          } else {
            obj17 = { fingerprint, attemptId, installationId };
            let obj18 = {};
            sanitizeUrlResult = closure_7;
            obj18.type = closure_7.NONE;
            obj17.payload = obj18;
          }
        }
        return obj17;
      }
      if (null != pathname) {
        sanitizeUrlResult = arg1;
        sanitizeUrlResult = dependencyMap;
        obj = arg1(dependencyMap[14]);
        sanitizeUrlResult = obj.tryParseDiceRollLink(pathname);
        if (null != sanitizeUrlResult) {
          const obj19 = { fingerprint, attemptId, installationId };
          const obj20 = {};
          sanitizeUrlResult = closure_7;
          obj20.type = closure_7.ROLL_DICE;
          ({ guildId: obj91.guildId, channelId: obj91.channelId, diceCount: obj91.diceCount, diceSides: obj91.diceSides } = sanitizeUrlResult);
          obj19.payload = obj20;
          return obj19;
        } else {
          sanitizeUrlResult = arg1;
          sanitizeUrlResult = dependencyMap;
          obj = arg1(dependencyMap[14]);
          sanitizeUrlResult = obj.tryParseChannelPath(pathname);
          if (null != sanitizeUrlResult) {
            sanitizeUrlResult = parseQuery;
            if (null != query) {
              str13 = query;
            }
            let obj21 = { fingerprint, attemptId, installationId };
            const obj22 = {};
            if (null != sanitizeUrlResult.messageId) {
              sanitizeUrlResult = closure_7;
              let CHANNEL = closure_7.MESSAGE;
            } else {
              sanitizeUrlResult = closure_7;
              CHANNEL = closure_7.CHANNEL;
            }
            obj22.type = CHANNEL;
            ({ guildId: obj89.guildId, channelId: obj89.channelId, messageId: obj89.messageId } = sanitizeUrlResult);
            obj22.summaryId = sanitizeUrlResult(str13).summaryId;
            obj21.payload = obj22;
            return obj21;
          } else {
            sanitizeUrlResult = closure_25;
            const match = pathname.match(closure_25);
            if (null != match) {
              if (match.length > 1) {
                const obj23 = { fingerprint, attemptId, installationId };
                const obj24 = {};
                sanitizeUrlResult = closure_7;
                obj24.type = closure_7.QUESTS;
                obj24.questId = match[1];
                obj24.referrerId = referrer_id;
                obj24.sort = sort;
                obj24.filter = filter;
                obj23.payload = obj24;
                return obj23;
              }
            }
            const match1 = pathname.match(closure_26);
            if (null != match1) {
              if (match1.length > 1) {
                let obj25 = { fingerprint, attemptId, installationId };
                let obj26 = {};
                sanitizeUrlResult = closure_7;
                obj26.type = closure_7.QUEST_PREVIEW_TOOL;
                obj26.questId = match1[1];
                obj25.payload = obj26;
                return obj25;
              }
            }
            if (null != pathname.match(closure_27)) {
              sanitizeUrlResult = importDefault;
              sanitizeUrlResult = dependencyMap;
              let obj78 = importDefault(dependencyMap[5]);
              sanitizeUrlResult = str13;
              if (null != query) {
                sanitizeUrlResult = query;
              }
              let ad_creative_ids = obj78.parse(sanitizeUrlResult).ad_creative_ids;
              if (null == ad_creative_ids) {
                ad_creative_ids = [];
              }
              const items = [ad_creative_ids];
              const flatResult = items.flat();
              if (flatResult.length > 0) {
                const obj27 = { fingerprint, attemptId, installationId };
                const obj28 = {};
                sanitizeUrlResult = closure_7;
                obj28.type = closure_7.QUEST_HOME_PREVIEW;
                obj28.adCreativeIds = flatResult;
                obj27.payload = obj28;
                let obj29 = obj27;
              } else {
                obj29 = { fingerprint, attemptId, installationId };
                const obj30 = {};
                sanitizeUrlResult = closure_7;
                obj30.type = closure_7.QUESTS;
                obj30.referrerId = referrer_id;
                obj30.sort = sort;
                obj30.filter = filter;
                obj29.payload = obj30;
              }
              return obj29;
            } else {
              sanitizeUrlResult = closure_28;
              if (null != pathname.match(closure_28)) {
                const obj31 = { fingerprint, attemptId, installationId };
                const obj32 = {};
                sanitizeUrlResult = closure_7;
                obj32.type = closure_7.SUBSCRIPTION_SETTINGS;
                obj31.payload = obj32;
                return obj31;
              } else {
                sanitizeUrlResult = closure_15;
                const match2 = pathname.match(closure_15);
                if (null != match2) {
                  if (match2.length > 1) {
                    const obj33 = { fingerprint, attemptId, installationId };
                    const obj34 = {};
                    sanitizeUrlResult = closure_7;
                    obj34.type = closure_7.USER_PROFILE;
                    obj34.userId = match2[1];
                    obj33.payload = obj34;
                    return obj33;
                  }
                }
                if (null != pathname.match(closure_16)) {
                  obj12 = arg1(dependencyMap[15]);
                  let tmp33 = str13;
                  if (null != query) {
                    tmp33 = query;
                  }
                  const result1 = obj12.parseOAuth2AuthorizeProps(tmp33);
                  if (null != result1) {
                    const obj35 = { fingerprint, attemptId, installationId };
                    const obj36 = {};
                    sanitizeUrlResult = closure_7;
                    obj36.type = closure_7.OAUTH2_AUTHORIZE;
                    const obj37 = {};
                    sanitizeUrlResult = obj37;
                    sanitizeUrlResult = result1;
                    sanitizeUrlResult = Object.assign(result1);
                    obj37["wasDeepLink"] = flag;
                    obj36.props = obj37;
                    obj35.payload = obj36;
                    return obj35;
                  }
                }
                if (null != pathname.match(closure_17)) {
                  sanitizeUrlResult = str13;
                  sanitizeUrlResult = parseQuery;
                  if (null != query) {
                    sanitizeUrlResult = query;
                  }
                  const token = sanitizeUrlResult(sanitizeUrlResult).token;
                  const obj38 = { fingerprint, attemptId, installationId };
                  const obj39 = {};
                  sanitizeUrlResult = closure_7;
                  obj39.type = closure_7.ONE_TIME_LOGIN;
                  sanitizeUrlResult = null;
                  if (null != token) {
                    sanitizeUrlResult = token;
                  }
                  obj39.token = sanitizeUrlResult;
                  obj38.payload = obj39;
                  return obj38;
                } else {
                  sanitizeUrlResult = closure_14;
                  const match3 = pathname.match(closure_14);
                  if (null != match3) {
                    if (match3.length > 1) {
                      const obj40 = { fingerprint, attemptId, installationId };
                      let obj41 = {};
                      sanitizeUrlResult = closure_7;
                      obj41.type = closure_7.BOOST_MARKETING;
                      obj41.guildId = match3[1];
                      obj40.payload = obj41;
                      return obj40;
                    }
                  }
                  const match4 = pathname.match(closure_13);
                  if (null != match4) {
                    if (match4.length > 1) {
                      sanitizeUrlResult = match4[1];
                      if ("composeMessage" === sanitizeUrlResult) {
                        const obj42 = {};
                        sanitizeUrlResult = closure_7;
                        obj42.type = closure_7.COMPOSE_MESSAGE;
                        let tmp37 = obj42;
                      } else if ("contactSync" === sanitizeUrlResult) {
                        const obj43 = { type: closure_7.CONTACT_SYNC };
                        tmp37 = obj43;
                      } else if ("addFriends" === sanitizeUrlResult) {
                        const obj44 = { type: closure_7.ADD_FRIENDS };
                        tmp37 = obj44;
                      } else if ("friends" === sanitizeUrlResult) {
                        let tmp96 = str13;
                        if (null != query) {
                          tmp96 = query;
                        }
                        const obj45 = { type: closure_7.FRIENDS, userId: parseQuery(tmp96).user_id };
                        tmp37 = obj45;
                        const tmp95 = parseQuery;
                      } else if ("editProfile" === sanitizeUrlResult) {
                        const obj46 = { type: closure_7.EDIT_PROFILE };
                        tmp37 = obj46;
                      } else if ("voiceChannel" === sanitizeUrlResult) {
                        let tmp91 = str13;
                        if (null != query) {
                          tmp91 = query;
                        }
                        const obj47 = { type: closure_7.VOICE_CHANNEL };
                        ({ guild_id: obj36.guildId, channel_id: obj36.channelId, user_id: obj36.userId, via: obj36.via, action: obj36.action } = parseQuery(tmp91));
                        tmp37 = obj47;
                        const tmp90 = parseQuery;
                        const tmp90Result = parseQuery(tmp91);
                      } else if ("sessionManagement" === sanitizeUrlResult) {
                        const obj48 = { type: closure_7.SESSION_MANAGEMENT };
                        tmp37 = obj48;
                      } else if ("messageRequests" === sanitizeUrlResult) {
                        const obj49 = { type: closure_7.MESSAGE_REQUESTS };
                        tmp37 = obj49;
                      } else if ("home" === sanitizeUrlResult) {
                        let tmp85 = str13;
                        if (null != query) {
                          tmp85 = query;
                        }
                        const obj50 = { type: closure_7.GUILD_HOME };
                        ({ guild_id: obj33.guildId, highlight_channel_id: obj33.highlightChannelId, highlight_message_id: obj33.highlightMessageId } = parseQuery(tmp85));
                        tmp37 = obj50;
                        const tmp84 = parseQuery;
                        const tmp84Result = parseQuery(tmp85);
                      } else if ("icymi" === sanitizeUrlResult) {
                        const obj51 = { type: closure_7.ICYMI };
                        tmp37 = obj51;
                      } else if ("connections" === sanitizeUrlResult) {
                        let tmp81 = str13;
                        if (null != query) {
                          tmp81 = query;
                        }
                        const obj52 = { type: closure_7.CONNECTIONS, source: parseQuery(tmp81).source };
                        tmp37 = obj52;
                        const tmp80 = parseQuery;
                      } else if ("family-center" === sanitizeUrlResult) {
                        const obj53 = { type: closure_7.FAMILY_CENTER, pathname };
                        tmp37 = obj53;
                      } else if ("promo-url" === sanitizeUrlResult) {
                        let tmp78 = str13;
                        if (null != query) {
                          tmp78 = query;
                        }
                        const promo_url = parseQuery(tmp78).promo_url;
                        tmp37 = null;
                        if (undefined !== promo_url) {
                          obj = {};
                          sanitizeUrlResult = closure_7;
                          obj.type = closure_7.FEATURE_PROMO_URL;
                          obj.promoUrl = promo_url;
                          tmp37 = obj;
                        }
                        const tmp77 = parseQuery;
                      } else if ("account-standing" === sanitizeUrlResult) {
                        const obj54 = { type: closure_7.ACCOUNT_STANDING, pathname };
                        tmp37 = obj54;
                      } else if ("mobile-web-redirect-checkout" === sanitizeUrlResult) {
                        obj25 = arg1(dependencyMap[16]);
                        let result2 = obj25.isMobileWebRedirectCheckoutEnabled();
                        if (result2) {
                          obj26 = arg1(dependencyMap[17]);
                          result2 = !obj26.isMetaQuest();
                        }
                        let tmp70 = str13;
                        if (null != query) {
                          tmp70 = query;
                        }
                        let DEFAULT = parseQuery(tmp70)[closure_12.DEEP_LINK_ACTION];
                        tmp37 = null;
                        if (result2) {
                          const obj55 = { type: closure_7.MOBILE_WEB_REDIRECT_CHECKOUT };
                          if (null == DEFAULT) {
                            DEFAULT = constants4.DEFAULT;
                          }
                          obj55.deepLinkAction = DEFAULT;
                          obj55.guildId = tmp73;
                          tmp37 = obj55;
                        }
                        const tmp69 = parseQuery;
                        const tmp69Result = parseQuery(tmp70);
                      } else if ("open-shop" === sanitizeUrlResult) {
                        const obj56 = { type: closure_7.SHOP };
                        tmp37 = obj56;
                      } else if ("authorized-apps" === sanitizeUrlResult) {
                        const obj57 = { type: closure_7.AUTHORIZED_APPS };
                        tmp37 = obj57;
                      } else if ("share" === sanitizeUrlResult) {
                        obj21 = arg1(dependencyMap[18]);
                        tmp37 = null;
                        if (obj21.isIOS()) {
                          let tmp56 = str13;
                          if (null != query) {
                            tmp56 = query;
                          }
                          const tmp55Result = parseQuery(tmp56);
                          ({ shareId, attachmentManifest } = tmp55Result);
                          let tmp58;
                          ({ text, channelId } = tmp55Result);
                          if ("string" === typeof shareId) {
                            if (isValidUUID(shareId)) {
                              tmp58 = shareId;
                            }
                          }
                          if ("string" === typeof attachmentManifest) {
                            const _JSON = JSON;
                            let parsed = JSON.parse(attachmentManifest);
                          } else {
                            parsed = [];
                          }
                          const _Array = Array;
                          if (!Array.isArray(parsed)) {
                            parsed = [];
                          }
                          const obj58 = {
                            type: closure_7.SHARE,
                            text,
                            channelId,
                            shareId: tmp58,
                            attachmentManifest: parsed.filter((originalFilename) => {
                                                      let tmp = "string" === typeof originalFilename.originalFilename && "string" === typeof originalFilename.temporaryFilename;
                                                      if (tmp) {
                                                        tmp = isValidUUID(originalFilename.temporaryFilename);
                                                      }
                                                      return tmp;
                                                    })
                          };
                          tmp37 = obj58;
                          const tmp55 = parseQuery;
                        }
                      } else if ("dave-protocol-verification" === sanitizeUrlResult) {
                        let tmp48 = str13;
                        if (null != query) {
                          tmp48 = query;
                        }
                        ({ userId, fingerprint: fingerprint2 } = parseQuery(tmp48));
                        tmp37 = null;
                        if (null != userId) {
                          tmp37 = null;
                          if (null != fingerprint2) {
                            obj18 = arg1(dependencyMap[19]);
                            const obj59 = { location: "parseUrl" };
                            tmp37 = null;
                            if (obj18.getSecureFramesDeeplinkExperiment(obj59).enabled) {
                              let obj60 = { type: closure_7.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                              tmp37 = obj60;
                            }
                          }
                        }
                        const tmp47 = parseQuery;
                        const tmp47Result = parseQuery(tmp48);
                      } else if ("gift" === sanitizeUrlResult) {
                        const obj61 = { type: closure_7.GIFT };
                        tmp37 = obj61;
                      } else if ("store" === sanitizeUrlResult) {
                        let tmp44 = str13;
                        if (null != query) {
                          tmp44 = query;
                        }
                        let obj62 = { type: closure_7.NITRO_HOME, section: parseQuery(tmp44).section };
                        tmp37 = obj62;
                        const tmp43 = parseQuery;
                      } else if ("connected-games" === sanitizeUrlResult) {
                        const obj63 = { type: closure_7.CONNECTED_GAMES };
                        tmp37 = obj63;
                      } else if ("boost-settings" === sanitizeUrlResult) {
                        const obj64 = { type: closure_7.BOOST_SETTINGS };
                        tmp37 = obj64;
                      } else if ("quest-preview-tool" === sanitizeUrlResult) {
                        let tmp39 = str13;
                        if (null != query) {
                          tmp39 = query;
                        }
                        const obj65 = { type: closure_7.QUEST_PREVIEW_TOOL, questId: parseQuery(tmp39).quest_id };
                        tmp37 = obj65;
                        const tmp38 = parseQuery;
                      } else {
                        tmp37 = null;
                        if ("subscription-settings" === sanitizeUrlResult) {
                          obj = {};
                          sanitizeUrlResult = closure_7;
                          obj.type = closure_7.SUBSCRIPTION_SETTINGS;
                          tmp37 = obj;
                        }
                      }
                      if (null != tmp37) {
                        const obj66 = { fingerprint, attemptId, installationId, payload: tmp37 };
                        return obj66;
                      }
                    }
                  }
                  sanitizeUrlResult = arg1;
                  sanitizeUrlResult = dependencyMap;
                  obj41 = arg1(dependencyMap[14]);
                  sanitizeUrlResult = obj41.tryParseEventDetailsPath(pathname);
                  if (null != sanitizeUrlResult) {
                    const obj67 = { fingerprint, attemptId, installationId };
                    const obj68 = {};
                    sanitizeUrlResult = closure_7;
                    obj68.type = closure_7.GUILD_EVENT_DETAILS;
                    ({ guildEventId: obj66.guildEventId, guildId: obj66.guildId, recurrenceId: obj66.recurrenceId } = sanitizeUrlResult);
                    obj67.payload = obj68;
                    return obj67;
                  } else {
                    sanitizeUrlResult = closure_19;
                    if (null != pathname.match(closure_19)) {
                      sanitizeUrlResult = parseQuery;
                      sanitizeUrlResult = globalThis;
                      const _decodeURIComponent = decodeURIComponent;
                      sanitizeUrlResult = parseQuery(decodeURIComponent(query));
                      ({ key, redirect, fingerprint: fingerprint3 } = sanitizeUrlResult);
                      if (null != key) {
                        if (null != redirect) {
                          const _URL = URL;
                          const _location = location;
                          const _window = window;
                          const _HermesInternal2 = HermesInternal;
                          sanitizeUrlResult = new.target;
                          sanitizeUrlResult = new.target;
                          sanitizeUrlResult = redirect;
                          sanitizeUrlResult = new URL(redirect, str13 + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
                          if (null != fingerprint3) {
                            const searchParams = sanitizeUrlResult.searchParams;
                            sanitizeUrlResult = searchParams.append("fingerprint", fingerprint3);
                          }
                          const obj69 = { fingerprint: fingerprint3, attemptId, installationId };
                          const obj70 = {};
                          sanitizeUrlResult = closure_7;
                          obj70.type = closure_7.MOBILE_WEB_HANDOFF;
                          obj70.nonce = key;
                          obj70.redirectUrl = sanitizeUrlResult;
                          obj70.fingerprint = fingerprint3;
                          obj69.payload = obj70;
                          return obj69;
                        }
                      }
                      sanitizeUrlResult = importDefault;
                      sanitizeUrlResult = dependencyMap;
                      obj60 = importDefault(dependencyMap[20]);
                      sanitizeUrlResult = constants;
                      const obj71 = { reason: "invalid_query_params" };
                      sanitizeUrlResult = arg1;
                      obj62 = arg1(dependencyMap[21]);
                      obj71.fingerprint = obj62.maybeExtractId(fingerprint3);
                      const obj72 = { fingerprint: fingerprint3 };
                      sanitizeUrlResult = obj60.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj71, obj72);
                      const _Error2 = Error;
                      sanitizeUrlResult = new.target;
                      sanitizeUrlResult = new.target;
                      sanitizeUrlResult = new Error("Missing nonce or redirect query params");
                      throw sanitizeUrlResult;
                    } else {
                      sanitizeUrlResult = closure_20;
                      sanitizeUrlResult = pathname.match(closure_20);
                      if (null != sanitizeUrlResult) {
                        sanitizeUrlResult = globalThis;
                        sanitizeUrlResult = str13;
                        sanitizeUrlResult = parseQuery;
                        if (null != query) {
                          sanitizeUrlResult = query;
                        }
                        sanitizeUrlResult = sanitizeUrlResult(decodeURIComponent(sanitizeUrlResult));
                        const obj73 = { fingerprint, attemptId, installationId };
                        const obj74 = {};
                        sanitizeUrlResult = closure_7;
                        obj74.type = closure_7.USER_CONNECTIONS_LINK_CALLBACK;
                        obj74.provider = sanitizeUrlResult[1];
                        ({ code: obj58.callbackCode, state: obj58.callbackState } = sanitizeUrlResult);
                        obj73.payload = obj74;
                        return obj73;
                      } else {
                        sanitizeUrlResult = closure_21;
                        sanitizeUrlResult = pathname.match(closure_21);
                        if (null != sanitizeUrlResult) {
                          sanitizeUrlResult = callback;
                          sanitizeUrlResult = callback(sanitizeUrlResult, 2);
                          sanitizeUrlResult = sanitizeUrlResult[0];
                          sanitizeUrlResult = globalThis;
                          sanitizeUrlResult = str13;
                          sanitizeUrlResult = parseQuery;
                          if (null != query) {
                            sanitizeUrlResult = query;
                          }
                          const obj75 = { fingerprint, attemptId, installationId };
                          const obj76 = {};
                          sanitizeUrlResult = closure_7;
                          obj76.type = closure_7.USER_CONNECTIONS_CALLBACK;
                          obj76.provider = sanitizeUrlResult[1];
                          obj76.searchParams = sanitizeUrlResult(decodeURIComponent(sanitizeUrlResult));
                          obj75.payload = obj76;
                          return obj75;
                        } else {
                          sanitizeUrlResult = closure_22;
                          sanitizeUrlResult = pathname.match(closure_22);
                          if (null != sanitizeUrlResult) {
                            sanitizeUrlResult = callback;
                            sanitizeUrlResult = callback(sanitizeUrlResult, 4);
                            const obj77 = { fingerprint, attemptId, installationId };
                            obj78 = {};
                            sanitizeUrlResult = closure_7;
                            obj78.type = closure_7.GUILD_SETTINGS;
                            obj78.guildId = sanitizeUrlResult[1];
                            sanitizeUrlResult = importDefault;
                            sanitizeUrlResult = dependencyMap;
                            sanitizeUrlResult = closure_5;
                            obj78.settingsSection = importDefault(dependencyMap[22])(closure_5, sanitizeUrlResult[2]);
                            sanitizeUrlResult = closure_6;
                            obj78.settingsSubsection = importDefault(dependencyMap[22])(closure_6, sanitizeUrlResult[3]);
                            obj77.payload = obj78;
                            return obj77;
                          } else {
                            sanitizeUrlResult = closure_23;
                            sanitizeUrlResult = pathname.match(closure_23);
                            if (null != sanitizeUrlResult) {
                              sanitizeUrlResult = callback;
                              sanitizeUrlResult = callback(sanitizeUrlResult, 3);
                              sanitizeUrlResult = str13;
                              sanitizeUrlResult = parseQuery;
                              if (null != query) {
                                sanitizeUrlResult = query;
                              }
                              const obj79 = { fingerprint, attemptId, installationId };
                              const obj80 = {};
                              sanitizeUrlResult = closure_7;
                              obj80.type = closure_7.GUILD_SETTINGS_PICKER;
                              sanitizeUrlResult = importDefault;
                              sanitizeUrlResult = dependencyMap;
                              sanitizeUrlResult = closure_5;
                              obj80.settingsSection = importDefault(dependencyMap[22])(closure_5, sanitizeUrlResult[1]);
                              sanitizeUrlResult = closure_6;
                              obj80.settingsSubsection = importDefault(dependencyMap[22])(closure_6, sanitizeUrlResult[2]);
                              obj80.feature = sanitizeUrlResult(sanitizeUrlResult).feature;
                              obj79.payload = obj80;
                              return obj79;
                            } else {
                              sanitizeUrlResult = closure_24;
                              if (null != pathname.match(closure_24)) {
                                sanitizeUrlResult = globalThis;
                                sanitizeUrlResult = str13;
                                sanitizeUrlResult = parseQuery;
                                if (null != query) {
                                  sanitizeUrlResult = query;
                                }
                                const obj81 = { fingerprint, attemptId, installationId };
                                const obj82 = {};
                                sanitizeUrlResult = closure_7;
                                obj82.type = closure_7.ACTIVATE_DEVICE;
                                obj82.userCode = sanitizeUrlResult(decodeURIComponent(sanitizeUrlResult)).user_code;
                                obj81.payload = obj82;
                                return obj81;
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
};
