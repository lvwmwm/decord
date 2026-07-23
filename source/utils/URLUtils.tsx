// Module ID: 1443
// Function ID: 16797
// Name: isOriginalContentTypeDifferent
// Dependencies: [653, 1444, 1445, 1443, 1327, 22, 2]

// Module 1443 (isOriginalContentTypeDifferent)
import { Routes } from "ME";
import set from "Url";

function isOriginalContentTypeDifferent(arg0, arg1) {
  return null != arg0 && null != arg1 && arg0 !== arg1;
}
function isDiscordHostname(hostname, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let tmp = null != hostname;
  if (tmp) {
    let isMatch = regex.test(hostname);
    if (!isMatch) {
      if (flag) {
        flag = set1.has(hostname.toLowerCase());
      }
      isMatch = flag;
    }
    tmp = isMatch;
  }
  return tmp;
}
function isDiscordProtocol(protocol) {
  let tmp = null != protocol;
  if (tmp) {
    tmp = "discord:" === protocol;
  }
  return tmp;
}
function isDiscordDirectAssetUrl(outer1_0) {
  if (null == outer1_0) {
    return false;
  } else {
    const toURLSafeResult = importDefault(1443).toURLSafe(outer1_0);
    let tmp9 = null != toURLSafeResult;
    if (tmp9) {
      let tmp3 = !require(1327) /* isDiscordFrontendDevelopment */.isDiscordBackendDevelopment();
      if (!tmp3) {
        let tmp4 = "localhost" !== toURLSafeResult.hostname;
        if (tmp4) {
          tmp4 = "127.0.0.1" !== toURLSafeResult.hostname;
        }
        tmp3 = tmp4;
      }
      let tmp5 = !tmp3;
      if (tmp3) {
        const _window = window;
        let isMatch = toURLSafeResult.hostname === window.GLOBAL_ENV.CDN_HOST;
        if (!isMatch) {
          isMatch = regex2.test(toURLSafeResult.hostname);
        }
        tmp5 = isMatch;
      }
      tmp9 = tmp5;
      const obj = require(1327) /* isDiscordFrontendDevelopment */;
    }
    return tmp9;
  }
}
function isDiscordProxiedAssetUrl(outer1_0, arg1, arg2) {
  if (isOriginalContentTypeDifferent(arg1, arg2)) {
    if (null == outer1_0) {
      return false;
    } else {
      const url = importDefault(1443).toURLSafe(outer1_0);
      let tmp8 = null != url;
      if (tmp8) {
        let tmp4 = !require(1327) /* isDiscordFrontendDevelopment */.isDiscordBackendDevelopment();
        if (!tmp4) {
          let tmp5 = "localhost" !== url.hostname;
          if (tmp5) {
            tmp5 = "127.0.0.1" !== url.hostname;
          }
          tmp4 = tmp5;
        }
        if (!tmp4) {
          tmp4 = "4000" !== url.port;
        }
        let isMatch = !tmp4;
        if (tmp4) {
          isMatch = regex3.test(url.hostname);
        }
        tmp8 = isMatch;
        const obj = require(1327) /* isDiscordFrontendDevelopment */;
      }
      return tmp8;
    }
  } else {
    return false;
  }
}
function isAllowedGifProviderUrl(outer1_0) {
  if (null == outer1_0) {
    return false;
  } else {
    const toURLSafeResult = importDefault(1443).toURLSafe(outer1_0);
    let hasItem = null != toURLSafeResult;
    if (hasItem) {
      hasItem = set.has(toURLSafeResult.hostname);
    }
    return hasItem;
  }
}
function isDiscordUrl(ctaLink, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != ctaLink) {
    const toURLSafeResult = importDefault(1443).toURLSafe(ctaLink);
    let hostname;
    if (null != toURLSafeResult) {
      hostname = toURLSafeResult.hostname;
    }
    if (null != hostname) {
      if (isDiscordHostname(hostname, flag)) {
        return true;
      }
    }
    const obj = importDefault(1443);
  }
  return false;
}
function isDiscordUri(ctaLink) {
  let tmp = null != ctaLink;
  if (tmp) {
    tmp = isDiscordProtocol(importAll(1445).parse(ctaLink).protocol);
    const obj = importAll(1445);
  }
  return tmp;
}
const re5 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
const re6 = /^.*\.discordapp\.net$/;
const re7 = /^.*\.media\.discordapp\.net$/;
let set = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com", "static.klipy.com", "media.giphy.com", "i.giphy.com"]);
const regExp = new RegExp("(?:(?:(?:[a-z]+:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + require("b").v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"]*)?", "ig");
const items = [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST];
const set1 = new Set(items);
let result = set.fileFinishedImporting("utils/URLUtils.tsx");

export default {
  URL_REGEX: regExp,
  makeUrl(BILLING_LOGIN_HANDOFF, arg1) {
    let result = arg1;
    if (null == arg1) {
      result = require(1327) /* isDiscordFrontendDevelopment */.isDiscordFrontendDevelopment();
      const obj = require(1327) /* isDiscordFrontendDevelopment */;
    }
    if (result) {
      const _window = window;
      let host = window.GLOBAL_ENV.INVITE_HOST;
    } else {
      const _location = location;
      host = location.host;
    }
    return "" + location.protocol + "//" + host + BILLING_LOGIN_HANDOFF;
  },
  isOriginalContentTypeDifferent,
  isDiscordHostname,
  isDiscordLocalhost(host, hostname) {
    let tmp = null != host;
    if (tmp) {
      tmp = null != hostname;
    }
    if (tmp) {
      const _window = window;
      tmp = window.location.host === host;
    }
    return tmp;
  },
  isDiscordProtocol,
  isDiscordUrl,
  isDiscordUri,
  isDiscordCdnUrl(src) {
    let tmp = null != src;
    if (tmp) {
      const _window = window;
      tmp = importAll(1445).parse(src).hostname === window.GLOBAL_ENV.CDN_HOST;
      const obj = importAll(1445);
    }
    return tmp;
  },
  isDiscordDirectAssetUrl,
  isDiscordProxiedAssetUrl,
  isAllowedGifProviderUrl,
  isDiscordAssetUrl(outer1_0) {
    const tmp = !isDiscordDirectAssetUrl(outer1_0);
    let tmp2 = !tmp;
    if (tmp) {
      const tmp6 = !isDiscordProxiedAssetUrl(outer1_0, arg1, arg2);
      let tmp7 = !tmp6;
      if (tmp6) {
        tmp7 = isAllowedGifProviderUrl(outer1_0);
      }
      tmp2 = tmp7;
    }
    return tmp2;
  },
  isDiscordUrlOrUri(ctaLink) {
    let tmp = isDiscordUrl(ctaLink);
    if (!tmp) {
      tmp = isDiscordUri(ctaLink);
    }
    return tmp;
  },
  isAppRoute(pathname) {
    const formatted = pathname.toLowerCase();
    let startsWithResult = formatted.startsWith("/channels/");
    if (!startsWithResult) {
      startsWithResult = formatted.startsWith(Routes.ACTIVITY);
    }
    return startsWithResult;
  },
  format(arg0) {
    return importAll(1445).format(arg0);
  },
  formatPathWithQuery(pathname) {
    let obj = importAll(1445);
    obj = { pathname, query: importDefault(22).pickBy(arg1) };
    return obj.format(obj);
  },
  formatSearch(arg0) {
    let obj = importAll(1445);
    obj = { query: importDefault(22).pickBy(arg0) };
    return obj.format(obj);
  },
  safeParseWithQuery(aPIEndpoint) {
    return importAll(1445).parse(aPIEndpoint, true);
  },
  toURLSafe(outer1_0, arg1) {
    const uRL = new URL(outer1_0, arg1);
    return uRL;
  },
  safeDecodeURIComponent(hash) {
    return decodeURIComponent(hash);
  }
};
