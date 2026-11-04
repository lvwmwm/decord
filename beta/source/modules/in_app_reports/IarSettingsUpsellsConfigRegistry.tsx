// Module ID: 8364
// Function ID: 8365
// Name: IarSettingsUpsellsConfigRegistry
// Dependencies: [19, 8353, 8365, 8366, 8367, 1379, 2]
// Exports: useIarReportSettingsUpsells, useSettingsUpsellsConfigs

// Module 8364 (IarSettingsUpsellsConfigRegistry)
import GlobalUtils from "GlobalUtils" /* 1379 */;
import MenuTypes from "MenuTypes" /* 8353 */;
import IarSettingsUpsellsConfigDmSpamFilterDefault from "IarSettingsUpsellsConfigDmSpamFilter" /* 8365 */;
import IarSettingsUpsellsConfigScFiltersSexualMediaDefault from "IarSettingsUpsellsConfigScFiltersSexualMedia" /* 8366 */;
import IarSettingsUpsellsConfigScFiltersGraphicMediaDefault from "IarSettingsUpsellsConfigScFiltersGraphicMedia" /* 8367 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SettingsUpsellsConfigRegistry = {};
SettingsUpsellsConfigRegistry[MenuTypes.SettingsUpsells.SAFETY_DM_SPAM_FILTER] = IarSettingsUpsellsConfigDmSpamFilterDefault;
SettingsUpsellsConfigRegistry[MenuTypes.SettingsUpsells.SAFETY_SC_FILTERS_SEXUAL_MEDIA] = IarSettingsUpsellsConfigScFiltersSexualMediaDefault;
SettingsUpsellsConfigRegistry[MenuTypes.SettingsUpsells.SAFETY_SC_FILTERS_GRAPHIC_MEDIA] = IarSettingsUpsellsConfigScFiltersGraphicMediaDefault;
const result = size.fileFinishedImporting("modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx");

export { SettingsUpsellsConfigRegistry };
export function useIarReportSettingsUpsells(reportSubType) {
  let closure_0 = reportSubType;
  let items = [reportSubType];
  return react.useMemo(() => {
    let tmp = null;
    if (null != reportSubType) {
      const items = [];
      const tmp2 = globalThis;
      const _Object = Object;
      const entries = Object.entries(obj);
      const item = entries.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        let hasItem = null == tmp2.eligibleReportSubtypes;
        if (!hasItem) {
          const eligibleReportSubtypes = tmp2.eligibleReportSubtypes;
          hasItem = eligibleReportSubtypes.includes(closure_0);
        }
        if (hasItem) {
          items.push(tmp);
        }
      });
      let tmp5 = null;
      if (0 !== items.length) {
        tmp5 = items;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items);
}
export function useSettingsUpsellsConfigs(settingsUpsells, type) {
  let closure_1 = type;
  const items = [settingsUpsells, type];
  return react.useMemo(() => {
    const mapped = settingsUpsells.map((item) => {
      let eligibleChannelTypes;
      let predicate;
      ({ predicate, eligibleChannelTypes } = SettingsUpsellsConfigRegistry[item]);
      let tmp3 = null == predicate;
      if (!tmp3) {
        let predicateResult;
        if (predicate != null) {
          predicateResult = predicate();
        }
        tmp3 = true === predicateResult;
      }
      const tmp5 = null == type || null == eligibleChannelTypes || eligibleChannelTypes.includes(type);
      if (tmp3) {
        tmp3 = tmp5;
      }
      let tmp6 = null;
      if (tmp3) {
        tmp6 = tmp2;
      }
      return tmp6;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items);
}
