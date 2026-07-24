// Module ID: 7701
// Function ID: 61306
// Name: SettingsUpsellsConfigRegistry
// Dependencies: [31, 7690, 7702, 7703, 7704, 1327, 2]
// Exports: useIarReportSettingsUpsells, useSettingsUpsellsConfigs

// Module 7701 (SettingsUpsellsConfigRegistry)
import result from "result";

const require = arg1;
const obj = {};
obj[require("ReportNames").SettingsUpsells.SAFETY_DM_SPAM_FILTER] = require("items");
obj[require("ReportNames").SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] = require("items");
obj[require("ReportNames").SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] = require("items");
const result = require("items").fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export const SettingsUpsellsConfigRegistry = obj;
export const useIarReportSettingsUpsells = function useIarReportSettingsUpsells(reportSubType) {
  let closure_0 = reportSubType;
  let items = [reportSubType];
  return React.useMemo(() => {
    let tmp = null;
    if (null != closure_0) {
      tmp = (function getIarReportSubtypeUpsells(closure_0) {
        const items = [];
        const entries = Object.entries(outer2_3);
        const item = entries.forEach((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          let hasItem = null == tmp2.eligibleReportSubtypes;
          if (!hasItem) {
            const eligibleReportSubtypes = tmp2.eligibleReportSubtypes;
            hasItem = eligibleReportSubtypes.includes(closure_0);
          }
          if (hasItem) {
            items.push(tmp);
          }
        });
        let tmp2 = null;
        if (0 !== items.length) {
          tmp2 = items;
        }
        return tmp2;
      })(closure_0);
    }
    return tmp;
  }, items);
};
export const useSettingsUpsellsConfigs = function useSettingsUpsellsConfigs(settingsUpsells, type) {
  let closure_0 = settingsUpsells;
  let closure_1 = type;
  const items = [settingsUpsells, type];
  return React.useMemo(() => {
    const mapped = settingsUpsells.map((arg0) => (function getSettingsUpsellsConfig(arg0, outer1_1) {
      let eligibleChannelTypes;
      let predicate;
      ({ predicate, eligibleChannelTypes } = outer3_3[arg0]);
      let tmp2 = null == predicate;
      if (!tmp2) {
        let predicateResult;
        if (null != predicate) {
          predicateResult = predicate();
        }
        tmp2 = true === predicateResult;
      }
      if (tmp2) {
        tmp2 = tmp4;
      }
      let tmp5 = null;
      if (tmp2) {
        tmp5 = tmp;
      }
      return tmp5;
    })(arg0, outer1_1));
    return mapped.filter(settingsUpsells(type[5]).isNotNullish);
  }, items);
};
