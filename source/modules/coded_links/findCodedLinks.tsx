// Module ID: 4114
// Function ID: 34025
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4115, 653, 655, 4118, 1445, 4119, 4120, 7676, 4563, 4046, 7781, 4116, 6978, 8954, 8310, 6932, 4988, 2]
// Exports: findCodedLink, isSuspiciousCodedLink, remainingPathFromDiscordHostMatch

// Module 4114 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PRIMARY_DOMAIN } from "ME";
import { CollectibleShopTab } from "items";
import importDefaultResult from "set";
import importDefaultResult1 from "set";
import importDefaultResult2 from "set";
import importDefaultResult3 from "set";
import importDefaultResult4 from "set";

let require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getHost(GUILD_TEMPLATE_HOST) {
  if (null == GUILD_TEMPLATE_HOST) {
    return { host: null, pathPrefix: null };
  } else if (GUILD_TEMPLATE_HOST.indexOf("/") >= 0) {
    const parsed = require(1445) /* Url */.parse(GUILD_TEMPLATE_HOST, undefined, true);
    let obj = {};
    ({ host: obj3.host, pathname: obj3.pathPrefix } = parsed);
    return obj;
  } else {
    obj = { host: GUILD_TEMPLATE_HOST, pathPrefix: null };
    return obj;
  }
}
function isHostMatch(host, host2) {
  let replaced;
  if (null != host2.host) {
    replaced = str.replace(/^www[.]/i, "");
  }
  return replaced === host.host;
}
function remainingPathFromHostMatch(closure_22, pathname) {
  if (isHostMatch(closure_22, pathname)) {
    pathname = pathname.pathname;
    let str2 = "";
    if (null != pathname) {
      str2 = pathname;
    }
    const pathPrefix = closure_22.pathPrefix;
    let str3 = "";
    if (null != pathPrefix) {
      str3 = pathPrefix;
    }
    if (str2.startsWith(str3)) {
      const substr = str2.substring(str3.length);
      let tmp2 = null;
      if ("" !== substr) {
        tmp2 = substr;
      }
      return tmp2;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function getPathsFromURL(target) {
  const tmp = parseURLSafely(target);
  if (null != tmp) {
    if (null != tmp.pathname) {
      let obj = { url: tmp, inviteHostRemainingPath: remainingPathFromHostMatch(host, tmp), templateHostRemainingPath: remainingPathFromHostMatch(host1, tmp) };
      let tmp4 = remainingPathFromHostMatch(host2, tmp);
      if (null == tmp4) {
        tmp4 = remainingPathFromHostMatch(closure_22, tmp);
      }
      if (null == tmp4) {
        tmp4 = remainingPathFromHostMatch(closure_23, tmp);
      }
      if (null == tmp4) {
        tmp4 = remainingPathFromHostMatch(host3, tmp);
      }
      if (null == tmp4) {
        tmp4 = remainingPathFromHostMatch(host4, tmp);
      }
      obj.primaryHostRemainingPath = tmp4;
    }
    return obj;
  }
  obj = { url: null, inviteHostRemainingPath: null, templateHostRemainingPath: null, primaryHostRemainingPath: null };
}
function findCodedLinks(sanitizeUrlResult) {
  if (null == sanitizeUrlResult) {
    return [];
  } else {
    const str = sanitizeUrlResult.replace(regExp1, (arg0, arg1, arg2, arg3) => {
      let combined = arg0;
      if (null == arg2) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "http://" + arg3;
      }
      return combined;
    });
    let obj = { allowLinks: true };
    let items = [];
    let combined = items;
    const _default = combined(4120).default;
    const parseToASTResult = combined(4120).default.parseToAST(str, true, obj);
    combined(7676).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === combined(outer1_1[8]).AST_KEY.LINK;
      if (tmp) {
        tmp = "string" === typeof type.target;
      }
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        combined.push(type.target);
      }
    });
    let match = str.match(closure_18);
    if (null == items) {
      items = [];
    }
    if (null == match) {
      match = [];
    }
    combined = items.concat(match);
    const obj2 = combined(7676);
    return (function coerceLinksToCodedLinks(combined) {
      let done;
      if (null != combined) {
        if (0 !== combined.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(value) {
            let applicationId;
            let inviteHostRemainingPath;
            let primaryHostRemainingPath;
            let skuId;
            let templateHostRemainingPath;
            let url;
            let closure_0 = value;
            function add(INVITE, inviteKeyFromUrlParams) {
              if (!value.has(inviteKeyFromUrlParams)) {
                value.add(inviteKeyFromUrlParams);
                const obj = { type: INVITE, code: inviteKeyFromUrlParams, url: value };
                outer1_1.push(obj);
              }
            }
            let formatted = outer2_31(value);
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = formatted);
            if (null != url) {
              if (null != url.pathname) {
                formatted = combined;
                formatted = outer2_1;
                if (obj9.isBuildOverrideLink(value)) {
                  add(combined(outer2_1[5]).CodedLinkType.BUILD_OVERRIDE, value);
                }
                let obj = combined(outer2_1[9]);
                if (obj.isManualBuildOverrideLink(value)) {
                  add(combined(outer2_1[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE, value);
                }
                obj9 = combined(outer2_1[9]);
                if (obj2.isExperimentEmbedURL(value)) {
                  add(combined(outer2_1[5]).CodedLinkType.EXPERIMENT, value);
                }
                let match;
                if (null != inviteHostRemainingPath) {
                  match = inviteHostRemainingPath.match(outer2_4);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = combined(outer2_1[11]).generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    const invite = outer2_2.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (obj4.isEmbeddedApplicationInvite(invite)) {
                        add(combined(outer2_1[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE, inviteKeyFromUrlParams);
                      }
                      obj4 = combined(outer2_1[12]);
                    }
                    if (value.includes("\\")) {
                      return 0;
                    } else {
                      add(combined(outer2_1[5]).CodedLinkType.INVITE, inviteKeyFromUrlParams);
                    }
                    const obj3 = combined(outer2_1[11]);
                  }
                }
                let match1;
                if (null != templateHostRemainingPath) {
                  match1 = templateHostRemainingPath.match(outer2_4);
                }
                if (null != match1) {
                  add(combined(outer2_1[5]).CodedLinkType.TEMPLATE, templateHostRemainingPath.substring(1));
                }
                let match2;
                if (null != primaryHostRemainingPath) {
                  match2 = primaryHostRemainingPath.match(outer2_6);
                }
                if (null != match2) {
                  formatted = match2[1].toUpperCase();
                  formatted = combined;
                  formatted = outer2_1;
                  if (formatted === combined(outer2_1[5]).CodedLinkType.INVITE) {
                    if (value.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = combined(outer2_1[11]).generateInviteKeyFromUrlParams(match2[2], url.search);
                      add(combined(outer2_1[5]).CodedLinkType.INVITE, inviteKeyFromUrlParams1);
                      const obj5 = combined(outer2_1[11]);
                    }
                  } else {
                    add(formatted, match2[2]);
                  }
                  const str24 = match2[1];
                }
                let match3;
                if (null != primaryHostRemainingPath) {
                  match3 = primaryHostRemainingPath.match(outer2_5);
                }
                if (null != match3) {
                  add(combined(outer2_1[5]).CodedLinkType.CHANNEL_LINK, primaryHostRemainingPath.replace("/channels/", ""));
                }
                let tmp47 = null;
                if (null != url.pathname) {
                  const match4 = str6.match(outer2_7);
                  let tmp49 = null;
                  if (null != match4) {
                    tmp49 = null;
                    if (match4.length >= 4) {
                      obj = { guildId: match4[1], guildEventId: match4[2], recurrenceId: match4[4] };
                      tmp49 = obj;
                    }
                  }
                  tmp47 = tmp49;
                }
                if (null != tmp47) {
                  const _HermesInternal = HermesInternal;
                  let str7 = "";
                  combined = "" + tmp47.guildId + "-" + tmp47.guildEventId;
                  if (null != tmp47.recurrenceId) {
                    const _HermesInternal2 = HermesInternal;
                    str7 = "-" + tmp47.recurrenceId;
                  }
                  add(combined(outer2_1[5]).CodedLinkType.EVENT, combined + str7);
                }
                let match5;
                if (null != primaryHostRemainingPath) {
                  match5 = primaryHostRemainingPath.match(outer2_16);
                }
                if (null != match5) {
                  if (null != url.query) {
                    formatted = combined;
                    formatted = outer2_1;
                    formatted = combined(outer2_1[13]).parseOAuth2AuthorizeProps(url.query);
                    const clientId = formatted.clientId;
                    let tmp57 = null == clientId;
                    if (!tmp57) {
                      tmp57 = "" === clientId;
                    }
                    if (!tmp57) {
                      const scopes = formatted.scopes;
                      tmp57 = null != scopes && scopes.some((arg0) => arg0 !== combined(outer3_1[14]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      const tmp58 = null != scopes && scopes.some((arg0) => arg0 !== combined(outer3_1[14]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                    }
                    if (!tmp57) {
                      add(combined(outer2_1[5]).CodedLinkType.APP_OAUTH2_LINK, clientId);
                    }
                    const obj10 = combined(outer2_1[13]);
                  }
                }
                let match6;
                if (null != primaryHostRemainingPath) {
                  match6 = primaryHostRemainingPath.match(outer2_8);
                }
                if (null != match6) {
                  add(combined(outer2_1[5]).CodedLinkType.APP_DIRECTORY_PROFILE, match6[2]);
                }
                let match7;
                if (null != primaryHostRemainingPath) {
                  match7 = primaryHostRemainingPath.match(outer2_9);
                }
                if (null != match7) {
                  if (null != match7[3]) {
                    const storefrontSKUCodedLink = combined(outer2_1[15]).makeStorefrontSKUCodedLink(tmp69, tmp70);
                    add(combined(outer2_1[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, storefrontSKUCodedLink);
                    const obj7 = combined(outer2_1[15]);
                  } else {
                    add(combined(outer2_1[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT, tmp69);
                  }
                }
                let match8;
                if (null != primaryHostRemainingPath) {
                  match8 = primaryHostRemainingPath.match(outer2_10);
                }
                if (null != match8) {
                  add(combined(outer2_1[5]).CodedLinkType.ACTIVITY_BOOKMARK, match8[1]);
                }
                let match9;
                if (null != primaryHostRemainingPath) {
                  match9 = primaryHostRemainingPath.match(outer2_11);
                }
                if (null != match9) {
                  const _HermesInternal3 = HermesInternal;
                  add(combined(outer2_1[5]).CodedLinkType.GUILD_PRODUCT, "" + match9[1] + "-" + match9[2]);
                }
                let match10;
                if (null != primaryHostRemainingPath) {
                  match10 = primaryHostRemainingPath.match(outer2_13);
                }
                if (null != match10) {
                  add(combined(outer2_1[5]).CodedLinkType.SERVER_SHOP, match10[1]);
                }
                let match11;
                if (null != primaryHostRemainingPath) {
                  match11 = primaryHostRemainingPath.match(outer2_12);
                }
                if (null != match11) {
                  let tmp98 = match11[1];
                  if (null == tmp98) {
                    tmp98 = match11[2];
                  }
                  const _HermesInternal4 = HermesInternal;
                  formatted = add(combined(outer2_1[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT, "" + match11[3] + "-" + tmp98);
                }
                formatted = outer2_33;
                formatted = outer2_33(value);
                if (null != formatted) {
                  formatted = combined;
                  formatted = outer2_1;
                  formatted = add(combined(outer2_1[5]).CodedLinkType.QUESTS_EMBED, formatted);
                }
                formatted = undefined;
                if (null != primaryHostRemainingPath) {
                  formatted = outer2_15;
                  formatted = primaryHostRemainingPath.match(outer2_15);
                }
                if (null != formatted) {
                  formatted = combined;
                  formatted = outer2_1;
                  formatted = add(combined(outer2_1[5]).CodedLinkType.GAME_PROFILE, formatted[1]);
                }
                if ("/shop" === primaryHostRemainingPath) {
                  formatted = null;
                  if (null != url.query) {
                    formatted = combined;
                    formatted = outer2_1;
                    formatted = combined(outer2_1[16]).parse(url.query);
                    const obj8 = combined(outer2_1[16]);
                  }
                  formatted = undefined;
                  if (null != formatted) {
                    formatted = formatted.tab;
                  }
                  formatted = outer2_3;
                  if (formatted === outer2_3.GAME_SHOPS) {
                    formatted = undefined;
                    if (null != formatted) {
                      formatted = formatted.applicationId;
                    }
                    if (null != formatted) {
                      formatted = undefined;
                      if (null != formatted) {
                        formatted = formatted.skuId;
                      }
                      if (null != formatted) {
                        ({ applicationId, skuId } = formatted);
                        formatted = "string" === typeof applicationId && "string" === typeof skuId;
                        if (formatted) {
                          formatted = combined;
                          formatted = outer2_1;
                          formatted = globalThis;
                          const _HermesInternal6 = HermesInternal;
                          formatted = add(combined(outer2_1[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP, "" + skuId + "-" + applicationId);
                        }
                      }
                    }
                  }
                  formatted = undefined;
                  if (null != url.hash) {
                    formatted = outer2_17;
                    formatted = str15.match(outer2_17);
                  }
                  formatted = combined;
                  formatted = outer2_1;
                  let str17 = "";
                  if (null != formatted) {
                    str17 = formatted;
                  }
                  formatted = undefined;
                  if (null != formatted) {
                    formatted = formatted[1];
                  }
                  let str18 = "";
                  if (null != formatted) {
                    str18 = formatted;
                  }
                  formatted = globalThis;
                  const _HermesInternal5 = HermesInternal;
                  formatted = add(combined(outer2_1[5]).CodedLinkType.COLLECTIBLES_SHOP, "" + str17 + "-" + str18);
                }
              }
            }
            return 0;
          }
          const tmp7 = outer1_27(combined);
          let iter = tmp7();
          if (!iter.done) {
            do {
              let _loopResult = _loop(iter.value);
              let iter2 = tmp7();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
          return items;
        }
      }
      return [];
    })(combined).slice(0, 10);
  }
}
function parseQuestsEmbedCode(target) {
  const tmp = getPathsFromURL(target);
  let match;
  if (null != tmp) {
    if (null != tmp.primaryHostRemainingPath) {
      match = str.match(closure_14);
    }
  }
  let tmp4;
  if (null != match) {
    tmp4 = match[1];
  }
  let tmp5 = null;
  if (null != tmp4) {
    tmp5 = tmp4;
  }
  return tmp5;
}
function parseURLSafely(url) {
  return require(1445) /* Url */.parse(url);
}
const re4 = /^\/([a-zA-Z0-9-]+)$/;
const re5 = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/;
const re6 = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/;
const regExp = new RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?");
const re8 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/;
const re9 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/;
const re10 = /^\/activities\/([0-9-]+)\/?$/;
const re11 = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
const re12 = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/;
const re13 = /^\/channels\/([0-9]+)\/shop$/;
const re14 = /^\/quests\/([0-9-]+)\/?$/;
const re15 = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/;
const re16 = /^\/oauth2\/authorize/;
const re17 = /^#itemSkuId=([0-9]+)$/;
let tmp3 = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i;
let closure_18 = tmp3;
let host = getHost(window.GLOBAL_ENV.INVITE_HOST);
const host1 = getHost(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST);
if (null == WEBAPP_ENDPOINT) {
  let _HermesInternal = HermesInternal;
  WEBAPP_ENDPOINT = "//canary." + PRIMARY_DOMAIN;
}
let host2 = getHost(WEBAPP_ENDPOINT);
let closure_22 = getHost("//canary." + PRIMARY_DOMAIN);
let closure_23 = getHost("//ptb." + PRIMARY_DOMAIN);
let host3 = getHost("discordapp.com");
let host4 = getHost("discord.com");
host = host.host;
let str2 = "";
let str3 = "";
if (null != host) {
  str3 = host;
}
let items = [require("set").escape(str3), , , , ];
host2 = host1.host;
let tmp9 = str2;
if (null != host2) {
  tmp9 = host2;
}
items[1] = require("set").escape(tmp9);
host3 = host2.host;
let tmp10 = str2;
if (null != host3) {
  tmp10 = host3;
}
items[2] = require("set").escape(tmp10);
host4 = host3.host;
let tmp11 = str2;
if (null != host4) {
  tmp11 = host4;
}
items[3] = require("set").escape(tmp11);
const host5 = host4.host;
if (null != host5) {
  str2 = host5;
}
items[4] = require("set").escape(str2);
const found = items.filter(Boolean);
const regExp1 = new RegExp("((https?://[^ ]*)|^|\\s)(" + found.join("|") + ")", "g");
const result = require("items").fileFinishedImporting("modules/coded_links/findCodedLinks.tsx");

export default findCodedLinks;
export const DEVLINK_REGEX = tmp3;
export const remainingPathFromDiscordHostMatch = function remainingPathFromDiscordHostMatch(parseURLSafelyResult) {
  let tmp = remainingPathFromHostMatch(host2, parseURLSafelyResult);
  if (null == tmp) {
    tmp = remainingPathFromHostMatch(closure_22, parseURLSafelyResult);
  }
  if (null == tmp) {
    tmp = remainingPathFromHostMatch(closure_23, parseURLSafelyResult);
  }
  if (null == tmp) {
    tmp = remainingPathFromHostMatch(host3, parseURLSafelyResult);
  }
  if (null == tmp) {
    tmp = remainingPathFromHostMatch(host4, parseURLSafelyResult);
  }
  return tmp;
};
export { getPathsFromURL };
export const isSuspiciousCodedLink = function isSuspiciousCodedLink(arr) {
  if (arr.includes("\\")) {
    const tmp2 = parseURLSafely(arr);
    const require = tmp2;
    if (null == tmp2) {
      return false;
    } else if (isHostMatch(host, tmp2)) {
      return true;
    } else {
      const items = [host2, closure_22, closure_23, host3, host4];
      if (items.some((arg0) => outer1_29(arg0, closure_0))) {
        let hasItem;
        if (null != tmp2.pathname) {
          const formatted = str.toUpperCase();
          hasItem = formatted.includes(require(4119) /* CodedLinkType */.CodedLinkType.INVITE);
        }
        return null != hasItem && hasItem;
      }
    }
  }
  return false;
};
export { parseQuestsEmbedCode };
export { parseURLSafely };
export const findCodedLink = function findCodedLink(sanitizeUrlResult) {
  return findCodedLinks(sanitizeUrlResult)[0];
};
