// Module ID: 16762
// Function ID: 16763
// Name: useSelectedTab
// Dependencies: [7715, 7716, 1072, 563, 7717, 1252, 2]
// Exports: default

// Module 16762 (useSelectedTab)
import useStateFromStores from "useStateFromStores" /* 563 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7717 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7715 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7716 */;
import size from "module_2" /* 2 */;

let FamilyCenterSubPages;
let closure_4;
({ FamilyCenterAction: closure_4, FamilyCenterSubPages } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  let TabChange;
  let items;
  let obj2;
  let selectedTab;
  let obj = {
    selectedTab: obj2.useStateFromStores(items, () => selectedTab.getSelectedTab()),
    handleTabChange(tab) {
      const obj = FamilyCenterActionCreatorsDefault;
      tab = obj.selectTab(tab);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: TabChange.TabChange, tab };
      obj2.track(constants.FAMILY_CENTER_ACTION, obj3);
    }
  };
  obj2 = useStateFromStores;
  items = [FamilyCenterStore];
  return obj;
};
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };
