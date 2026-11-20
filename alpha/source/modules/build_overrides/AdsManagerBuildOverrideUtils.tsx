// Module ID: 1383
// Function ID: 1384
// Name: AdsManagerBuildOverrideUtils
// Dependencies: [2]
// Exports: adsManagerOverrideLinkMeta

// Module 1383 (AdsManagerBuildOverrideUtils)
import size from "module_2" /* 2 */;

function isAdsManagerBuildOverrideLink(url) {
  if (null != url) {
    if (re0.test(url)) {
      try {
        let hasItem;
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(url);
        if ("/_dev-tools" === uRL.pathname) {
          const searchParams2 = tmp4.searchParams;
          hasItem = searchParams2.has("buildOverride");
        } else {
          hasItem = "/__development/link" === tmp5.pathname || "/__development/link/" === tmp5.pathname;
          if (hasItem) {
            const searchParams = tmp5.searchParams;
            hasItem = searchParams.has("s");
          }
        }
        return hasItem;
      } catch (err) {
        return false;
      }
    }
  }
  return false;
}
const re0 = /^https:\/\/(?:dads|dads-stg)\.discord\.tools\/(?:__development\/link\/?|_dev-tools)\?\S+$/i;
const discord_campaign_builder = "discord_campaign_builder";
const result = size.fileFinishedImporting("modules/build_overrides/AdsManagerBuildOverrideUtils.tsx");

export { isAdsManagerBuildOverrideLink };
export function adsManagerOverrideLinkMeta(url) {
  let date;
  let expiresAt;
  let obj4;
  let obj7;
  let targetBuildOverride;
  if (isAdsManagerBuildOverrideLink(url)) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(url);
      if ("/_dev-tools" === uRL.pathname) {
        const searchParams = tmp5.searchParams;
        const all = searchParams.getAll("buildOverride");
        if (1 !== all.length) {
          return null;
        } else {
          const first = all[0];
          const index = first.indexOf(":");
          const first1 = all[0];
          const substr = first1.slice(0, index);
          const first2 = all[0];
          const str14 = first2.slice(index + 1);
          const trimmed = str14.trim();
          let tmp23 = null;
          if (-1 !== index) {
            if ("branch" === substr) {
              tmp23 = null;
              if (0 !== trimmed.length) {
                let tmp27;
                if ("id" !== substr) {
                  const obj2 = { targetBuildOverride: obj4, expiresAt: "", validForUserIds: [] };
                  obj4 = {};
                  const obj6 = { type: substr, id: trimmed };
                  obj4[discord_campaign_builder] = obj6;
                  tmp27 = obj2;
                } else {
                  tmp27 = null;
                }
                tmp23 = tmp27;
              }
            } else {
              tmp23 = null;
            }
          }
          return tmp23;
        }
      } else {
        const searchParams2 = tmp6.searchParams;
        const all1 = searchParams2.getAll("s");
        if (1 === all1.length) {
          if (tmp32[0].length <= 16384) {
            const obj9 = /^([A-Za-z0-9+/=]+)\.([A-Za-z0-9+/=]+)$/;
            const match = obj9.exec(all1[0]);
            if (null == match) {
              return null;
            } else {
              const _JSON = JSON;
              const _atob = atob;
              const parsed = JSON.parse(atob(match[2]));
              if (null != parsed) {
                if (typeof parsed === "object") {
                  if ("targetBuildOverride" in parsed) {
                    if ("expiresAt" in parsed) {
                      ({ targetBuildOverride, expiresAt } = parsed);
                      if (typeof expiresAt === "string") {
                        const _Number = Number;
                        const _Date2 = Date;
                        if (Number.isFinite(Date.parse(expiresAt))) {
                          if (null != targetBuildOverride) {
                            if (typeof targetBuildOverride === "object") {
                              const _Object = Object;
                              if (1 === Object.keys(targetBuildOverride).length) {
                                if (discord_campaign_builder in targetBuildOverride) {
                                  let tmp12 = null;
                                  if (null != targetBuildOverride[discord_campaign_builder]) {
                                    tmp12 = null;
                                    if (typeof targetBuildOverride[discord_campaign_builder] === "object") {
                                      tmp12 = null;
                                      if ("type" in targetBuildOverride[discord_campaign_builder]) {
                                        if ("branch" === targetBuildOverride[discord_campaign_builder].type) {
                                          tmp12 = null;
                                          if ("id" in targetBuildOverride[discord_campaign_builder]) {
                                            tmp12 = null;
                                            if (typeof targetBuildOverride[discord_campaign_builder].id === "string") {
                                              tmp12 = null;
                                              const str12 = targetBuildOverride[discord_campaign_builder].id;
                                              if (0 !== str12.trim().length) {
                                                const obj = { targetBuildOverride: obj7, expiresAt: date.toUTCString(), validForUserIds: [] };
                                                obj7 = {};
                                                const obj8 = { type: null, id: null };
                                                ({ type: obj3.type, id: obj3.id } = targetBuildOverride[discord_campaign_builder]);
                                                obj7[discord_campaign_builder] = obj8;
                                                const _Date = Date;
                                                const self3 = this;
                                                const self4 = this;
                                                tmp12 = obj;
                                                date = new Date(expiresAt);
                                              }
                                            }
                                          }
                                        } else {
                                          tmp12 = null;
                                        }
                                      }
                                    }
                                  }
                                  return tmp12;
                                } else {
                                  return null;
                                }
                              }
                            }
                          }
                          return null;
                        }
                      }
                      return null;
                    }
                  }
                }
              }
              return null;
            }
          }
        }
        return null;
      }
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
}
