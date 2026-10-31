// Module ID: 1377
// Function ID: 1378
// Name: URLUtils
// Dependencies: [1072, 1378, 1379, 1380, 1377, 12, 2]

// Module 1377 (URLUtils)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1072 */;
import URLUtilsDefault from "URLUtils" /* 1377 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import urlParseAll from "urlParse" /* 1380 */;
import ip from "ip" /* 1378 */;
import size from "module_2" /* 2 */;

function isDiscordDirectAssetUrl(shareURI) {
  if (null == shareURI) {
    return false;
  } else {
    const obj5 = URLUtilsDefault;
    const toURLSafeResult = obj5.toURLSafe(shareURI);
    let tmp18 = null != toURLSafeResult;
    if (tmp18) {
      const obj = GlobalUtils;
      const result = obj.isDiscordBackendDevelopment();
      let tmp3 = !result;
      if (result) {
        tmp3 = "localhost" !== toURLSafeResult.hostname && "127.0.0.1" !== toURLSafeResult.hostname;
        const tmp4 = "localhost" !== toURLSafeResult.hostname && "127.0.0.1" !== toURLSafeResult.hostname;
      }
      let tmp5 = !tmp3;
      if (tmp3) {
        const tmpResult = GlobalUtils;
        const result1 = tmpResult.isDiscordBackendDevelopment();
        let tmp7 = !result1;
        if (result1) {
          const hostname = toURLSafeResult.hostname;
          const tmpResult3 = GlobalUtils;
          const devTunnelHostname = tmpResult3.getDevTunnelHostname();
          let tmp9 = null != devTunnelHostname;
          if (tmp9) {
            let tmp10 = hostname === devTunnelHostname;
            if (!tmp10) {
              const tmpResult4 = GlobalUtils;
              const devTunnelHostname1 = tmpResult4.getDevTunnelHostname();
              let tmp12 = null != devTunnelHostname1;
              if (tmp12) {
                const _HermesInternal = HermesInternal;
                tmp12 = hostname === "media--" + devTunnelHostname1;
              }
              tmp10 = tmp12;
            }
            tmp9 = tmp10;
          }
          tmp7 = !tmp9;
        }
        let tmp14 = !tmp7;
        if (tmp7) {
          const _window = window;
          const isMatch = toURLSafeResult.hostname === window.GLOBAL_ENV.CDN_HOST || re6.test(toURLSafeResult.hostname);
          tmp14 = isMatch;
        }
        tmp5 = tmp14;
      }
      tmp18 = tmp5;
    }
    return tmp18;
  }
}
function isDiscordProxiedAssetUrl(assetURL, arg1, arg2) {
  const tmp = null != arg1 && null != arg2 && arg1 !== arg2;
  if (tmp) {
    if (null == assetURL) {
      return false;
    } else {
      const obj4 = URLUtilsDefault;
      const url = obj4.toURLSafe(assetURL);
      let tmp15 = null != url;
      if (tmp15) {
        const obj = GlobalUtils;
        const result = obj.isDiscordBackendDevelopment();
        let tmp5 = !result;
        if (result) {
          tmp5 = "localhost" !== url.hostname && "127.0.0.1" !== url.hostname;
          const tmp6 = "localhost" !== url.hostname && "127.0.0.1" !== url.hostname;
        }
        if (!tmp5) {
          tmp5 = "4000" !== url.port;
        }
        let tmp7 = !tmp5;
        if (tmp5) {
          const tmp3Result = GlobalUtils;
          const result1 = tmp3Result.isDiscordBackendDevelopment();
          let tmp9 = !result1;
          if (result1) {
            const hostname = url.hostname;
            const tmp3Result2 = GlobalUtils;
            const devTunnelHostname = tmp3Result2.getDevTunnelHostname();
            let tmp11 = null != devTunnelHostname;
            if (tmp11) {
              const _HermesInternal = HermesInternal;
              tmp11 = hostname === "media--" + devTunnelHostname;
            }
            tmp9 = !tmp11;
          }
          let isMatch = !tmp9;
          if (tmp9) {
            isMatch = re7.test(url.hostname);
          }
          tmp7 = isMatch;
        }
        tmp15 = tmp7;
      }
      return tmp15;
    }
  } else {
    return false;
  }
}
const Routes = Constants.Routes;
const re5 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
const re6 = /^.*\.discordapp\.net$/;
const re7 = /^.*\.media\.discordapp\.net$/;
const set = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com", "static.klipy.com", "media.giphy.com", "i.giphy.com"]);
const regExp = new RegExp("(?:(?:(?:[a-z]+:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + ip.v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"]*)?", "ig");
const items = [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST];
const set1 = new Set(items);
let obj = {
  URL_REGEX: regExp,
  makeUrl(BILLING_LOGIN_HANDOFF, arg1) {
    if (arg1 == null) {
      let INVITE_HOST;
      const obj = GlobalUtils;
      if (!obj.isDiscordFrontendDevelopment()) {
        const _location = location;
        INVITE_HOST = location.host;
      }
      const _location2 = location;
      const _HermesInternal = HermesInternal;
      return "" + location.protocol + "//" + INVITE_HOST + BILLING_LOGIN_HANDOFF;
    }
    INVITE_HOST = window.GLOBAL_ENV.INVITE_HOST;
  },
  isOriginalContentTypeDifferent(arg0, arg1) {
    return null != arg0 && null != arg1 && arg0 !== arg1;
  },
  isDiscordHostname(hostname) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let tmp = null != hostname;
    if (tmp) {
      let isMatch = re5.test(hostname);
      if (!isMatch) {
        if (flag) {
          flag = set1.has(hostname.toLowerCase());
        }
        isMatch = flag;
      }
      tmp = isMatch;
    }
    return tmp;
  },
  isDiscordLocalhost(host, hostname) {
    let tmp = null != host && null != hostname;
    if (tmp) {
      const _window = window;
      tmp = window.location.host === host;
    }
    return tmp;
  },
  isDiscordProtocol(protocol) {
    return null != protocol && "discord:" === protocol;
  },
  isDiscordUrl(customInstallUrl, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (null != customInstallUrl) {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(customInstallUrl);
      let hostname;
      if (toURLSafeResult != null) {
        hostname = toURLSafeResult.hostname;
      }
      if (null != hostname) {
        if (flag === undefined) {
          flag = false;
        }
        let tmp5 = null != hostname;
        if (tmp5) {
          let isMatch = re5.test(hostname);
          if (!isMatch) {
            if (flag) {
              flag = set1.has(hostname.toLowerCase());
            }
            isMatch = flag;
          }
          tmp5 = isMatch;
        }
        if (tmp5) {
          return true;
        }
      }
    }
    return false;
  },
  isDiscordUri(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      const obj = urlParseAll;
      const protocol = obj.parse(arg0).protocol;
      tmp = null != protocol && "discord:" === protocol;
      const tmp4 = null != protocol && "discord:" === protocol;
    }
    return tmp;
  },
  isDiscordCdnUrl(src) {
    let tmp = null != src;
    if (tmp) {
      const _window = window;
      const obj = urlParseAll;
      tmp = obj.parse(src).hostname === window.GLOBAL_ENV.CDN_HOST;
    }
    return tmp;
  },
  isDiscordDirectAssetUrl,
  isDiscordProxiedAssetUrl,
  isAllowedGifProviderUrl(assetURL) {
    if (null == assetURL) {
      return false;
    } else {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(assetURL);
      const hasItem = null != toURLSafeResult && set.has(toURLSafeResult.hostname);
      return hasItem;
    }
  },
  isDiscordAssetUrl(assetURL, arg1, arg2) {
    let tmp = isDiscordDirectAssetUrl(assetURL);
    if (!tmp) {
      let tmp5 = isDiscordProxiedAssetUrl(assetURL, arg1, arg2);
      if (!tmp5) {
        let flag = false;
        if (null != assetURL) {
          const obj = URLUtilsDefault;
          const toURLSafeResult = obj.toURLSafe(assetURL);
          const hasItem = null != toURLSafeResult && set.has(toURLSafeResult.hostname);
          flag = hasItem;
        }
        tmp5 = flag;
      }
      tmp = tmp5;
    }
    return tmp;
  },
  isDiscordUrlOrUri(assetURL) {
    let flag = false;
    if (null != assetURL) {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(assetURL);
      let hostname;
      if (toURLSafeResult != null) {
        hostname = toURLSafeResult.hostname;
      }
      flag = false;
      if (null != hostname) {
        let tmp5 = null != hostname;
        if (tmp5) {
          tmp5 = re5.test(hostname) || false;
          re5.test(hostname) || false;
        }
        flag = false;
        if (tmp5) {
          flag = true;
        }
      }
    }
    if (!flag) {
      let tmp8 = null != assetURL;
      if (tmp8) {
        const obj2 = urlParseAll;
        const protocol = obj2.parse(assetURL).protocol;
        tmp8 = null != protocol && "discord:" === protocol;
        const tmp11 = null != protocol && "discord:" === protocol;
      }
      flag = tmp8;
    }
    return flag;
  },
  isAppRoute(pathname) {
    const formatted = pathname.toLowerCase();
    const startsWithResult = formatted.startsWith("/channels/") || formatted.startsWith(Routes.ACTIVITY);
    return startsWithResult;
  },
  format(arg0) {
    const obj = urlParseAll;
    return obj.format(arg0);
  },
  formatPathWithQuery(pathname, arg1) {
    let obj2;
    const obj = { pathname, query: obj2.pickBy(arg1) };
    const format = urlParseAll.format;
    urlParseAll;
    obj2 = _modDef12;
    return format(obj);
  },
  formatSearch(arg0) {
    let obj2;
    const obj = { query: obj2.pickBy(arg0) };
    const format = urlParseAll.format;
    urlParseAll;
    obj2 = _modDef12;
    return format(obj);
  },
  safeParseWithQuery(target) {
    try {
      const obj = urlParseAll;
      return obj.parse(target, true);
    } catch (err) {
      return null;
    }
  },
  toURLSafe(assetURL, arg1) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(assetURL, arg1);
      return uRL;
    } catch (err) {
      return null;
    }
  },
  toOriginSafe(assetURL) {
    let tmp = null;
    if (null != assetURL) {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(assetURL);
      let origin;
      if (toURLSafeResult != null) {
        origin = toURLSafeResult.origin;
      }
      if (origin == null) {
        origin = null;
      }
      tmp = origin;
    }
    return tmp;
  },
  safeDecodeURIComponent(parts) {
    try {
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(parts);
    } catch (err) {
      return null;
    }
  }
};
let result = size.fileFinishedImporting("utils/URLUtils.tsx");

export default obj;
