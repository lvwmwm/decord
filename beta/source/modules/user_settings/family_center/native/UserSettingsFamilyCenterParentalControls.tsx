// Module ID: 14465
// Function ID: 14466
// Name: UserSettingsFamilyCenterParentalControls
// Dependencies: [32, 19, 17, 1074, 6958, 21, 4836, 576, 1485, 6583, 6603, 6415, 14429, 14447, 1115, 2487, 7288, 14466, 14467, 9083, 6959, 6544, 14468, 9084, 12113, 2]
// Exports: default

// Module 14465 (UserSettingsFamilyCenterParentalControls)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6959 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flex: 1 }, segmentedControlContainer: obj2, content: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  let SafeAreaPaddingView;
  let SafeAreaPaddingView2;
  let closure_3;
  let id;
  let intl;
  let intl2;
  let items3;
  let obj10;
  let obj11;
  let obj12;
  let obj14;
  let obj16;
  let obj17;
  let obj18;
  let obj8;
  let obj9;
  let selectedSubPage;
  let stackNavigation;
  let tmp8;
  let tmp = closure_11();
  let obj = stackNavigation(selectedSubPage[8]);
  stackNavigation = obj.useStackNavigation();
  const tmp6 = require("useAnalyticsLocations");
  const analyticsLocations = tmp6(require("AnalyticsLocation").FAMILY_CENTER).analyticsLocations;
  [tmp8, importDefault] = _slicedToArray(id.useState(0), 2);
  const tmp7 = _slicedToArray(id.useState(0), 2);
  const obj3 = stackNavigation(selectedSubPage[11]);
  const settingNavigationRoute = obj3.useSettingNavigationRoute();
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
  _slicedToArray = tmp13;
  const tmp2Result = stackNavigation(selectedSubPage[12]);
  const selectedTeenUser = tmp2Result.useSelectedTeenUser();
  id = undefined;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp16 = require("useUserIsTeenAgeGroup")();
  let closure_5 = tmp16;
  const callback = obj2.useCallback((nativeEvent) => {
    importDefault(nativeEvent.nativeEvent.layout.width);
  }, []);
  const ref = obj2.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = obj2.useEffect(() => {
    const tmp = closure_3 && null != id && !ref.current;
    if (tmp) {
      ref.current = true;
      stackNavigation.setParams({ autoOpenCreate: false });
      const obj = { teenId: id };
      stackNavigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    }
  }, items);
  const items1 = [stackNavigation, selectedSubPage, id, tmp16];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let fn;
    let intl;
    if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
      if (null != id) {
        let obj = { title: intl.string(_modDef2487["1Op+NP"]), headerRight: fn };
        const setOptions = stackNavigation.setOptions;
        intl = intl3.intl;
        fn = undefined;
        if (!closure_5) {
          fn = (arg0) => {
            let intl;
            let teenId;
            let obj = {
              onPress() {
                const obj = { teenId };
                return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
              },
              label: intl.string(stackNavigation(selectedSubPage[14]).t.OYkgVk)
            };
            const HeaderTextButton = stackNavigation(selectedSubPage[16]).HeaderTextButton;
            const merged = Object.assign(arg0);
            intl = stackNavigation(selectedSubPage[14]).intl;
            return closure_2_9(HeaderTextButton, obj);
          };
        }
        setOptions(obj);
      }
    }
    stackNavigation.setOptions({ title: "Array", headerRight: "channel" });
  }, items1);
  const SCREEN_TIME_CONTROLS = FamilyCenterSubPages.SCREEN_TIME_CONTROLS;
  const obj4 = { label: intl.string(stackNavigation(selectedSubPage[14]).t["+o1pDZ"]), id: FamilyCenterSubPages.CONTENT_AND_SOCIAL, page: closure_9(require("FamilyCenterParentalControlsContentAndSocial"), {}) };
  intl = tmp2(tmp3[14]).intl;
  const items2 = [obj4, ];
  const obj5 = { label: intl2.string(stackNavigation(selectedSubPage[14]).t.OAuOHD), id: FamilyCenterSubPages.DATA_AND_PRIVACY, page: closure_9(require("FamilyCenterParentalControlsDataAndPrivacy"), {}) };
  intl2 = tmp2(tmp3[14]).intl;
  items2[1] = obj5;
  const useSegmentedControlState = stackNavigation(selectedSubPage[19]).useSegmentedControlState;
  const tmp2Result2 = stackNavigation(selectedSubPage[19]);
  const obj6 = {
    items: items2,
    onPageChange(arg0) {
      const obj = FamilyCenterActionCreatorsDefault;
      const tab = obj.selectTab(items2[arg0].id);
    },
    pageWidth: tmp8,
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  };
  const segmentedControlState = useSegmentedControlState(obj6);
  const AnalyticsLocationProvider = tmp2(tmp3[9]).AnalyticsLocationProvider;
  if (selectedSubPage === SCREEN_TIME_CONTROLS) {
    const obj7 = { value: analyticsLocations, children: closure_9(ref, obj8) };
    obj8 = { style: tmp.container, children: closure_9(SafeAreaPaddingView, obj9) };
    obj9 = { bottom: true, style: tmp.content, children: closure_9(require("FamilyCenterParentalControlsScreenTime"), obj10) };
    SafeAreaPaddingView = tmp2(tmp3[21]).SafeAreaPaddingView;
    obj11 = obj7;
    obj10 = { readOnly: tmp16 };
  } else {
    obj11 = { value: analyticsLocations, children: closure_10(closure_5, obj12) };
    obj12 = { style: tmp.container, onLayout: callback, children: items3 };
    const obj13 = { style: tmp.segmentedControlContainer, children: closure_9(stackNavigation(selectedSubPage[23]).SegmentedControl, obj14) };
    obj14 = { state: segmentedControlState };
    items3 = [closure_9(closure_5, obj13), ];
    const obj15 = { style: tmp.container, children: closure_9(ref, obj16) };
    obj16 = { children: closure_9(SafeAreaPaddingView2, obj17) };
    obj17 = { bottom: true, style: tmp.content, children: closure_9(stackNavigation(selectedSubPage[24]).SegmentedControlPages, obj18) };
    SafeAreaPaddingView2 = tmp2(tmp3[21]).SafeAreaPaddingView;
    obj18 = { state: segmentedControlState };
    items3[1] = closure_9(closure_5, obj15);
  }
  return closure_9(AnalyticsLocationProvider, obj11);
};
