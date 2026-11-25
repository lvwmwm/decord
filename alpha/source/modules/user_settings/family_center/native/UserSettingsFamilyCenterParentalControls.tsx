// Module ID: 16389
// Function ID: 16390
// Name: UserSettingsFamilyCenterParentalControls
// Dependencies: [19, 17, 1071, 8171, 21, 5012, 575, 1500, 6348, 6349, 8444, 7319, 16349, 16368, 1112, 2846, 8962, 16390, 16391, 8574, 8172, 7449, 16392, 8575, 13563, 2]
// Exports: default

// Module 16389 (UserSettingsFamilyCenterParentalControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import _modDef2846 from "module_2846" /* 2846 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8171 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8172 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flex: 1 }, segmentedControlContainer: obj2, content: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  let SafeAreaPaddingView;
  let SafeAreaPaddingView2;
  let closure_2;
  let intl;
  let intl2;
  let items3;
  let obj10;
  let obj12;
  let obj14;
  let obj15;
  let obj16;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let onLayout;
  let ref;
  let selectedSubPage;
  let stackNavigation;
  let tmp = closure_10();
  let obj = stackNavigation(1500);
  stackNavigation = obj.useStackNavigation();
  const tmp6 = selectedSubPage(6348);
  const analyticsLocations = tmp6(selectedSubPage(6349).FAMILY_CENTER).analyticsLocations;
  const tmp7 = selectedSubPage(8444)();
  const width = tmp7.width;
  let num = 0;
  ({ ref, onLayout } = tmp7);
  if (undefined !== width) {
    num = width;
  }
  const tmp2Result = stackNavigation(7319);
  const settingNavigationRoute = tmp2Result.useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  selectedSubPage = undefined;
  if (params != null) {
    selectedSubPage = params.selectedSubPage;
  }
  if (selectedSubPage == null) {
    selectedSubPage = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  }
  const params2 = settingNavigationRoute.params;
  let autoOpenCreate;
  if (params2 != null) {
    autoOpenCreate = params2.autoOpenCreate;
  }
  dependencyMap = tmp12;
  const tmp2Result3 = stackNavigation(16349);
  const selectedTeenUser = tmp2Result3.useSelectedTeenUser();
  let id;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp15 = selectedSubPage(16368)();
  let closure_4 = tmp15;
  ref = id.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = id.useEffect(() => {
    const tmp = closure_2 && null != id && !ref.current;
    if (tmp) {
      ref.current = true;
      stackNavigation.setParams({ autoOpenCreate: false });
      const obj = { teenId: id };
      stackNavigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    }
  }, items);
  const items1 = [stackNavigation, selectedSubPage, id, tmp15];
  const layoutEffect = id.useLayoutEffect(() => {
    let fn;
    let intl;
    if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
      if (null != id) {
        let obj = { title: intl.string(_modDef2846["1Op+NP"]), headerRight: fn };
        const setOptions = stackNavigation.setOptions;
        intl = intl3.intl;
        fn = undefined;
        if (!closure_4) {
          fn = (arg0) => {
            let intl;
            let teenId;
            let obj = {
              onPress() {
                const obj = { teenId };
                return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
              },
              label: intl.string(stackNavigation(closure_2[14]).t.OYkgVk)
            };
            const HeaderTextButton = stackNavigation(closure_2[16]).HeaderTextButton;
            const merged = Object.assign(arg0);
            intl = stackNavigation(closure_2[14]).intl;
            return closure_2_8(HeaderTextButton, obj);
          };
        }
        setOptions(obj);
      }
    }
    stackNavigation.setOptions({ title: "Array", headerRight: "analyticsLocations" });
  }, items1);
  const SCREEN_TIME_CONTROLS = FamilyCenterSubPages.SCREEN_TIME_CONTROLS;
  const obj2 = { label: intl.string(stackNavigation(1112).t["+o1pDZ"]), id: FamilyCenterSubPages.CONTENT_AND_SOCIAL, page: closure_8(selectedSubPage(16390), {}) };
  intl = tmp2(1112).intl;
  const items2 = [obj2, ];
  const obj3 = { label: intl2.string(stackNavigation(1112).t.OAuOHD), id: FamilyCenterSubPages.DATA_AND_PRIVACY, page: closure_8(selectedSubPage(16391), {}) };
  intl2 = tmp2(1112).intl;
  items2[1] = obj3;
  const useSegmentedControlState = stackNavigation(8574).useSegmentedControlState;
  const tmp2Result4 = stackNavigation(8574);
  const obj4 = {
    items: items2,
    onPageChange(arg0) {
      const obj = FamilyCenterActionCreatorsDefault;
      const tab = obj.selectTab(items2[arg0].id);
    },
    pageWidth: num,
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  };
  const segmentedControlState = useSegmentedControlState(obj4);
  const AnalyticsLocationProvider = tmp2(6348).AnalyticsLocationProvider;
  if (selectedSubPage === SCREEN_TIME_CONTROLS) {
    const obj5 = { value: analyticsLocations, children: closure_8(ref, obj6) };
    obj6 = { style: tmp.container, children: closure_8(SafeAreaPaddingView, obj7) };
    obj7 = { bottom: true, style: tmp.content, children: closure_8(selectedSubPage(16392), obj8) };
    SafeAreaPaddingView = tmp2(7449).SafeAreaPaddingView;
    obj9 = obj5;
    obj8 = { readOnly: tmp15 };
  } else {
    obj9 = { value: analyticsLocations, children: closure_9(closure_4, obj10) };
    obj10 = { style: tmp.container, ref, onLayout, children: items3 };
    const obj11 = { style: tmp.segmentedControlContainer, children: closure_8(stackNavigation(8575).SegmentedControl, obj12) };
    obj12 = { state: segmentedControlState };
    items3 = [closure_8(closure_4, obj11), ];
    const obj13 = { style: tmp.container, children: closure_8(ref, obj14) };
    obj14 = { children: closure_8(SafeAreaPaddingView2, obj15) };
    obj15 = { bottom: true, style: tmp.content, children: closure_8(stackNavigation(13563).SegmentedControlPages, obj16) };
    SafeAreaPaddingView2 = tmp2(7449).SafeAreaPaddingView;
    obj16 = { state: segmentedControlState };
    items3[1] = closure_8(closure_4, obj13);
  }
  return closure_8(AnalyticsLocationProvider, obj9);
};
