// Module ID: 18876
// Function ID: 18877
// Name: GuildSettingsAnalyticsUtils
// Dependencies: [19, 5116, 2090, 18877, 1087, 558, 576, 504, 1128, 18895, 1903, 2]
// Exports: getGuildAnalyticsCardProps

// Module 18876 (GuildSettingsAnalyticsUtils)
import intl4 from "intl" /* 1128 */;
import NumberUtils from "NumberUtils" /* 1903 */;
import GuildSettingsAnalyticsActionCreators from "GuildSettingsAnalyticsActionCreators" /* 18895 */;
import react from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5116 */;
import GuildStore from "GuildStore" /* 2090 */;
import GuildSettingsAnalyticsStore from "GuildSettingsAnalyticsStore" /* 18877 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportDefault;
let metroRequire;
function getNotice(errorCode, arg1) {
  let intl;
  let intl2;
  let intl3;
  let tmp4;
  const tmp = arg1;
  if (tmp) {
    const obj2 = { type: "info", message: intl3.string(intl4.t["FsgE/B"]), role: "none" };
    intl3 = intl4.intl;
    tmp4 = obj2;
  } else if (errorCode === metroRequire.NOT_ENOUGH_GUILD_MEMBERS) {
    const obj3 = { type: "info", message: intl2.string(intl4.t["FsgE/B"]), role: "status" };
    intl2 = intl4.intl;
    tmp4 = obj3;
  } else {
    tmp4 = null;
    if (null != errorCode) {
      const obj = { type: "critical", message: intl.string(intl4.t.Iju63e), role: "alert" };
      intl = intl4.intl;
      tmp4 = obj;
    }
  }
  return tmp4;
}
({ AbortCodes: metroRequire, GuildFeatures: metroImportDefault } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFailsMemberCount(arg0) {
  let closure_0;
  let first;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildStore.getGuild(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildMemberCountStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const fn2 = function y() {
      return GuildMemberCountStore.getMemberCount(closure_0);
    };
    const items3 = [arg0];
    cResult[5] = arg0;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11, tmp12);
  let tmp14 = null == stateFromStores || null == stateFromStores1;
  if (!tmp14) {
    const features = stateFromStores.features;
    const hasItem = features.has(constants2.PARTNERED);
    let tmp17 = !hasItem;
    const tmp15 = constants2;
    if (tmp17) {
      const features2 = stateFromStores.features;
      tmp17 = !features2.has(tmp15.VERIFIED);
    }
    if (tmp17) {
      tmp17 = stateFromStores1 < 500;
    }
    tmp14 = tmp17;
  }
  return tmp14;
}) : (function useFailsMemberCount(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  const items2 = [GuildMemberCountStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(closure_0), items3);
  let tmp3 = null == stateFromStores || null == stateFromStores1;
  if (!tmp3) {
    const features = stateFromStores.features;
    const hasItem = features.has(constants2.PARTNERED);
    let tmp6 = !hasItem;
    const tmp4 = constants2;
    if (tmp6) {
      const features2 = stateFromStores.features;
      tmp6 = !features2.has(tmp4.VERIFIED);
    }
    if (tmp6) {
      tmp6 = stateFromStores1 < 500;
    }
    tmp3 = tmp6;
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildAnalyticsOverview(arg0) {
  let analytics;
  let closure_0;
  let closure_1;
  let errorCode;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(14);
  const tmp4 = closure_8(arg0);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsAnalyticsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let overviewAnalytics = null;
      if (null != closure_0) {
        overviewAnalytics = GuildSettingsAnalyticsStore.getOverviewAnalytics(tmp);
      }
      const obj = { analytics: overviewAnalytics, errorCode: GuildSettingsAnalyticsStore.getError() };
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
  ({ analytics, errorCode } = stateFromStoresObject);
  if (cResult[4] === tmp4) {
    let tmp10;
    let tmp11;
    if (cResult[5] === arg0) {
      tmp10 = cResult[6];
      tmp11 = cResult[7];
    }
    const effect = react.useEffect(tmp10, tmp11);
    if (cResult[8] === errorCode) {
      let tmp14;
      if (cResult[9] === tmp4) {
        tmp14 = cResult[10];
      }
      if (cResult[11] === analytics) {
        let tmp17;
        if (cResult[12] === tmp14) {
          tmp17 = cResult[13];
        }
        return tmp17;
      }
      let obj2 = { analytics, notice: tmp14 };
      cResult[11] = analytics;
      cResult[12] = tmp14;
      cResult[13] = obj2;
      tmp17 = obj2;
    }
    const tmp16 = getNotice(errorCode, tmp4);
    cResult[8] = errorCode;
    cResult[9] = tmp4;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const fn2 = function y() {
    const tmp2 = null == closure_0 || closure_1;
    if (!tmp2) {
      const obj = GuildSettingsAnalyticsActionCreators;
      const engagementOverview = obj.fetchEngagementOverview(tmp);
      const obj2 = GuildSettingsAnalyticsActionCreators;
      const growthActivationOverview = obj2.fetchGrowthActivationOverview(tmp);
      const obj3 = GuildSettingsAnalyticsActionCreators;
      const growthActivationRetention = obj3.fetchGrowthActivationRetention(tmp);
    }
  };
  const items2 = [arg0, tmp4];
  cResult[4] = tmp4;
  cResult[5] = arg0;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp11 = items2;
  tmp10 = fn2;
}) : (function useGuildAnalyticsOverview(arg0) {
  let analytics;
  let closure_0;
  let closure_1;
  let errorCode;
  _require = arg0;
  const tmp = closure_8(arg0);
  dependencyMap = tmp;
  let obj = require("get initialized");
  const items = [GuildSettingsAnalyticsStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let overviewAnalytics = null;
    if (null != closure_0) {
      overviewAnalytics = GuildSettingsAnalyticsStore.getOverviewAnalytics(tmp);
    }
    const obj = { analytics: overviewAnalytics, errorCode: GuildSettingsAnalyticsStore.getError() };
    return obj;
  }, items1);
  const items2 = [arg0, tmp];
  ({ analytics, errorCode } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    const tmp2 = null == closure_0 || closure_1;
    if (!tmp2) {
      const obj = GuildSettingsAnalyticsActionCreators;
      const engagementOverview = obj.fetchEngagementOverview(tmp);
      const obj2 = GuildSettingsAnalyticsActionCreators;
      const growthActivationOverview = obj2.fetchGrowthActivationOverview(tmp);
      const obj3 = GuildSettingsAnalyticsActionCreators;
      const growthActivationRetention = obj3.fetchGrowthActivationRetention(tmp);
    }
  }, items2);
  let obj2 = { analytics, notice: getNotice(errorCode, tmp) };
  return obj2;
});
let result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsUtils.tsx");

export const useGuildAnalyticsOverview = tmp3;
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
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { percentage: obj2.truncateAndLocalizeNumber(Math.abs(communicatorsChange), stateFromStores) };
      const nskeMw = intl4.t.nskeMw;
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
    const intl2 = intl4.intl;
    formatToPlainStringResult = intl2.string(intl4.t.xO2msf);
  }
};
