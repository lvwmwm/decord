// Module ID: 14407
// Function ID: 14408
// Name: useSelectedTab
// Dependencies: [6957, 6958, 1074, 563, 6959, 1241, 2]
// Exports: default

// Module 14407 (useSelectedTab)
import useStateFromStores from "useStateFromStores" /* 563 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6959 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
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
