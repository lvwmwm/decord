// Module ID: 15152
// Function ID: 15153
// Name: useSelectedTab
// Dependencies: [7811, 7812, 1074, 563, 7813, 1241, 2]
// Exports: default

// Module 15152 (useSelectedTab)
import useStateFromStores from "useStateFromStores" /* 563 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7813 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7811 */;

require = fn;
const FamilyCenterConstants = fn(7812);
({ FamilyCenterAction: closure_4, FamilyCenterSubPages } = FamilyCenterConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  let obj = {
    selectedTab: null,
    handleTabChange(tab) {
      tab = FamilyCenterActionCreatorsDefault.selectTab(tab);
      AnalyticsUtilsDefault.track(constants.FAMILY_CENTER_ACTION, { action: TabChange.TabChange, tab });
    }
  };
  const items = [FamilyCenterStore];
  obj.selectedTab = useStateFromStores.useStateFromStores(items, () => selectedTab.getSelectedTab());
  return obj;
};
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };
