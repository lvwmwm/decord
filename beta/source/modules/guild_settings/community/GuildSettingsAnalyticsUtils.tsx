// Module ID: 17484
// Function ID: 17485
// Name: GuildSettingsAnalyticsUtils
// Dependencies: [19, 4754, 2067, 17485, 1074, 504, 1115, 17503, 1882, 2]
// Exports: getGuildAnalyticsCardProps, useGuildAnalyticsOverview

// Module 17484 (GuildSettingsAnalyticsUtils)
import intl3 from "intl" /* 1115 */;
import NumberUtils from "NumberUtils" /* 1882 */;
import GuildSettingsAnalyticsActionCreators from "GuildSettingsAnalyticsActionCreators" /* 17503 */;
import react from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSettingsAnalyticsStore from "GuildSettingsAnalyticsStore" /* 17485 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportDefault;
let metroRequire;
({ AbortCodes: metroRequire, GuildFeatures: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsUtils.tsx");

export const useGuildAnalyticsOverview = function useGuildAnalyticsOverview(guildId) {
  let closure_1;
  let guild;
  let intl;
  let intl2;
  let memberCount;
  _require = guildId;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0), items1);
  let obj2 = require("get initialized");
  const items2 = [GuildMemberCountStore];
  const items3 = [guildId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => memberCount.getMemberCount(closure_0), items3);
  let tmp5 = null == stateFromStores || null == stateFromStores1;
  if (!tmp5) {
    const features = stateFromStores.features;
    const hasItem = features.has(constants2.PARTNERED);
    let tmp8 = !hasItem;
    const tmp6 = constants2;
    if (tmp8) {
      const features2 = stateFromStores.features;
      tmp8 = !features2.has(tmp6.VERIFIED);
    }
    if (tmp8) {
      tmp8 = stateFromStores1 < 500;
    }
    tmp5 = tmp8;
  }
  dependencyMap = tmp5;
  const items4 = [GuildSettingsAnalyticsStore];
  const items5 = [guildId];
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items4, () => {
    let overviewAnalytics = null;
    if (null != guildId) {
      overviewAnalytics = GuildSettingsAnalyticsStore.getOverviewAnalytics(tmp);
    }
    const obj = { analytics: overviewAnalytics, errorCode: GuildSettingsAnalyticsStore.getError() };
    return obj;
  }, items5);
  const errorCode = stateFromStoresObject.errorCode;
  const items6 = [guildId, tmp5];
  const analytics = stateFromStoresObject.analytics;
  const effect = react.useEffect(() => {
    const tmp2 = null == guildId || closure_1;
    if (!tmp2) {
      const obj = GuildSettingsAnalyticsActionCreators;
      const engagementOverview = obj.fetchEngagementOverview(tmp);
      const obj2 = GuildSettingsAnalyticsActionCreators;
      const growthActivationOverview = obj2.fetchGrowthActivationOverview(tmp);
      const obj3 = GuildSettingsAnalyticsActionCreators;
      const growthActivationRetention = obj3.fetchGrowthActivationRetention(tmp);
    }
  }, items6);
  let obj3 = { analytics, notice: null };
  if (!tmp5) {
    let tmp12;
    if (errorCode !== constants.NOT_ENOUGH_GUILD_MEMBERS) {
      tmp12 = null;
      if (null != errorCode) {
        const obj4 = { type: "critical", message: intl.string(tmp(1115).t.Iju63e) };
        intl = tmp(1115).intl;
        tmp12 = obj4;
      }
    }
    obj3.notice = tmp12;
    return obj3;
  }
  const obj5 = { type: "info", message: intl2.string(tmp(1115).t["FsgE/B"]) };
  intl2 = tmp(1115).intl;
  tmp12 = obj5;
};
export const getGuildAnalyticsCardProps = function getGuildAnalyticsCardProps(communicators, communicatorsChange, stateFromStores, arg3) {
  let formatToPlainStringResult;
  let obj2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  if (null != communicatorsChange) {
    const _Number = Number;
    if (!Number.isNaN(communicatorsChange)) {
      const intl = intl3.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { percentage: obj2.truncateAndLocalizeNumber(Math.abs(communicatorsChange), stateFromStores) };
      const nskeMw = intl3.t.nskeMw;
      const _Math = Math;
      obj2 = NumberUtils;
      formatToPlainStringResult = formatToPlainString(nskeMw, obj);
    }
    let combined = null;
    if (null != communicators) {
      let str2 = "";
      const obj3 = NumberUtils;
      const result = obj3.truncateAndLocalizeNumber(communicators, stateFromStores);
      if (flag) {
        str2 = "%";
      }
      const _HermesInternal = HermesInternal;
      combined = "" + result + str2;
    }
    const obj4 = { localizedNumber: combined, subtext: formatToPlainStringResult, isTrendingUp: tmp11, isTrendingDown: tmp12 };
    return obj4;
  }
  formatToPlainStringResult = null;
  if (null != communicators) {
    const intl2 = intl3.intl;
    formatToPlainStringResult = intl2.string(intl3.t.xO2msf);
  }
};
