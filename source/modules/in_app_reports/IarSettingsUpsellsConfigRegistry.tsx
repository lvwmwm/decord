// Module ID: 7606
// Function ID: 60973
// Name: SettingsUpsellsConfigRegistry
// Dependencies: []
// Exports: useIarReportSettingsUpsells, useSettingsUpsellsConfigs

// Module 7606 (SettingsUpsellsConfigRegistry)
let closure_2 = importAll(dependencyMap[0]);
const obj = {};
obj[arg1(dependencyMap[1]).SettingsUpsells.SAFETY_DM_SPAM_FILTER] = importDefault(dependencyMap[2]);
obj[arg1(dependencyMap[1]).SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] = importDefault(dependencyMap[3]);
obj[arg1(dependencyMap[1]).SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export const SettingsUpsellsConfigRegistry = obj;
export const useIarReportSettingsUpsells = function useIarReportSettingsUpsells(reportSubType) {
  const arg1 = reportSubType;
  const items = [reportSubType];
  return React.useMemo(() => {
    let tmp = null;
    if (null != arg0) {
      tmp = function getIarReportSubtypeUpsells(arg0) {
        const items = [];
        const entries = Object.entries(closure_3);
        const item = entries.forEach((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          let hasItem = null == tmp2.eligibleReportSubtypes;
          if (!hasItem) {
            const eligibleReportSubtypes = tmp2.eligibleReportSubtypes;
            hasItem = eligibleReportSubtypes.includes(arg0);
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
      }(arg0);
    }
    return tmp;
  }, items);
};
export const useSettingsUpsellsConfigs = function useSettingsUpsellsConfigs(settingsUpsells, type) {
  type = settingsUpsells;
  const dependencyMap = type;
  const items = [settingsUpsells, type];
  return React.useMemo(() => {
    const mapped = arg0.map((arg0) => function getSettingsUpsellsConfig(arg0, closure_1) {
      let eligibleChannelTypes;
      let predicate;
      ({ predicate, eligibleChannelTypes } = closure_3[arg0]);
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
    }(arg0, closure_1));
    return mapped.filter(arg0(arg1[5]).isNotNullish);
  }, items);
};
