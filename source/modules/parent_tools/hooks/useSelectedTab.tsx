// Module ID: 13774
// Function ID: 105629
// Name: useSelectedMyFamilyTab
// Dependencies: [6769, 6770, 653, 624, 6771, 675, 2]
// Exports: default

// Module 13774 (useSelectedMyFamilyTab)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import { AnalyticEvents } from "ME";

let FamilyCenterSubPages;
let closure_4;
const require = arg1;
({ FamilyCenterAction: closure_4, FamilyCenterSubPages } = items);
const result = require("ME").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTab.tsx");

export default function useSelectedMyFamilyTab() {
  let obj = {};
  const items = [_isNativeReflectConstruct];
  obj.selectedTab = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_3.getSelectedTab());
  obj.handleTabChange = function handleTabChange(tab) {
    let obj = outer1_1(outer1_2[4]);
    tab = obj.selectTab(tab);
    obj = { action: outer1_4.TabChange, tab };
    outer1_1(outer1_2[5]).track(outer1_5.FAMILY_CENTER_ACTION, obj);
  };
  return obj;
};
export const FAMILY_CENTER_TAB_ANALYTICS_LABELS = { [FamilyCenterSubPages.ACTIVITY]: "family_center_activity_tab", [FamilyCenterSubPages.REQUESTS]: "family_center_requests_tab", [FamilyCenterSubPages.SETTINGS]: "family_center_settings_tab", [FamilyCenterSubPages.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel", [FamilyCenterSubPages.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel", [FamilyCenterSubPages.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel" };
