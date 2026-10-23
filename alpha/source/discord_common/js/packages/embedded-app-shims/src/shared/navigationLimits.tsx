// Module ID: 11475
// Function ID: 11476
// Name: navigationLimits
// Dependencies: [11476, 11478, 2]
// Exports: isAboutBlankUrl, isTooLongForCloudflare

// Module 11475 (navigationLimits)
import Safe5 from "Safe" /* 11476 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/navigationLimits.tsx");

export const isAboutBlankUrl = function isAboutBlankUrl(url) {
  const Safe = Safe5.Safe;
  let combined = url;
  const StringResult = Safe.String(url);
  if (StringResult.startsWith("about:blank/")) {
    const Safe2 = tmp(11476).Safe;
    const _HermesInternal = HermesInternal;
    const StringResult1 = Safe2.String(url);
    combined = "about:blank" + StringResult1.slice(12);
  }
  let startsWithResult = "about:blank" === combined;
  if (!startsWithResult) {
    const Safe3 = tmp(11476).Safe;
    const StringResult2 = Safe3.String(combined);
    startsWithResult = StringResult2.startsWith("about:blank#");
  }
  if (!startsWithResult) {
    const Safe4 = tmp(11476).Safe;
    const StringResult3 = Safe4.String(combined);
    startsWithResult = StringResult3.startsWith("about:blank?");
  }
  return startsWithResult;
};
export const isTooLongForCloudflare = function isTooLongForCloudflare(href, routerOrigin) {
  try {
    const self = this;
    const self2 = this;
    const uRL = new Safe5.Safe.Constructor.URL(href);
    const Safe = tmp2(11476).Safe;
    let tmp9 = Safe.URL(uRL).origin === routerOrigin;
    Safe.URL(uRL);
    if (tmp9) {
      const sum = routerOrigin.length + arr.length + arr2.length;
      tmp9 = sum > tmp2(11478).MAX_SAME_ORIGIN_URL_LENGTH;
    }
    return tmp9;
  } catch (err) {
    return false;
  }
};
