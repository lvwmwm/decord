// Module ID: 13651
// Function ID: 103418
// Name: useSelectedMyFamilyTab
// Dependencies: []
// Exports: default

// Module 13651 (useSelectedMyFamilyTab)
let FamilyCenterSubPages;
let closure_3 = importDefault(dependencyMap[0]);
({ FamilyCenterAction: closure_4, FamilyCenterSubPages } = arg1(dependencyMap[1]));
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  const obj = {};
  const items = [closure_3];
  obj.selectedTab = arg1(dependencyMap[3]).useStateFromStores(items, () => selectedTab.getSelectedTab());
  obj.handleTabChange = function handleTabChange(tab) {
    let obj = callback(closure_2[4]);
    tab = obj.selectTab(tab);
    obj = { action: TabChange.TabChange, tab };
    callback(closure_2[5]).track(constants.FAMILY_CENTER_ACTION, obj);
  };
  return obj;
};
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };
