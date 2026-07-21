// Module ID: 13711
// Function ID: 103735
// Name: FamilyCenterParentalControlsSettings
// Dependencies: []
// Exports: default

// Module 13711 (FamilyCenterParentalControlsSettings)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
const FamilyCenterSubPages = arg1(dependencyMap[4]).FamilyCenterSubPages;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: {} };
obj = { paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.segmentedControlContainer = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.content = { paddingBottom: importDefault(dependencyMap[7]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj1 = { paddingBottom: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[8]);
  const stackNavigation = obj.useStackNavigation();
  const arg1 = stackNavigation;
  const tmp4 = callback(React.useState(0), 2);
  const importDefault = tmp4[1];
  let obj1 = arg1(dependencyMap[11]);
  const settingNavigationRoute = obj1.useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  let selectedSubPage;
  if (null != params) {
    selectedSubPage = params.selectedSubPage;
  }
  if (null == selectedSubPage) {
    selectedSubPage = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  }
  const dependencyMap = selectedSubPage;
  const params2 = settingNavigationRoute.params;
  let autoOpenCreate;
  if (null != params2) {
    autoOpenCreate = params2.autoOpenCreate;
  }
  let callback = tmp9;
  let obj2 = arg1(dependencyMap[12]);
  let isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterParentalControlsSettings" });
  const React = isFamilyCenterV3Enabled;
  let obj3 = arg1(dependencyMap[13]);
  const selectedTeenUser = obj3.useSelectedTeenUser();
  let id;
  if (null != selectedTeenUser) {
    id = selectedTeenUser.id;
  }
  const tmp13 = importDefault(dependencyMap[14])();
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let closure_7 = React.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = React.useEffect(() => {
    let tmp = tmp9;
    if (tmp9) {
      tmp = null != id;
    }
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      let obj = { autoOpenCreate: false };
      stackNavigation.setParams(obj);
      obj = { teenId: id };
      stackNavigation.navigate(ref.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    }
  }, items);
  const items1 = [stackNavigation, selectedSubPage, isFamilyCenterV3Enabled, id, tmp13];
  const layoutEffect = React.useLayoutEffect(() => {
    if (isFamilyCenterV3Enabled) {
      if (selectedSubPage === items2.SCREEN_TIME_CONTROLS) {
        if (null != id) {
          const obj = {};
          let fn;
          const intl = stackNavigation(selectedSubPage[15]).intl;
          obj.title = intl.string(callback(selectedSubPage[16]).1Op+NP);
          if (!tmp13) {
            fn = (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["onPress"] = function onPress() {
                return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, { teenId: closure_5 });
              };
              const intl = callback(closure_2[15]).intl;
              obj["label"] = intl.string(callback(closure_2[15]).t.OYkgVk);
              return callback2(callback(closure_2[17]).HeaderTextButton, obj);
            };
          }
          obj.headerRight = fn;
          stackNavigation.setOptions(obj);
        }
      }
    }
    stackNavigation.setOptions({ title: undefined, headerRight: undefined });
  }, items1);
  if (isFamilyCenterV3Enabled) {
    isFamilyCenterV3Enabled = selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS;
  }
  obj = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj.label = intl.string(arg1(dependencyMap[15]).t.+o1pDZ);
  obj.id = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  obj.page = callback2(importDefault(dependencyMap[18]), {});
  const items2 = [obj, ];
  obj = {};
  const intl2 = arg1(dependencyMap[15]).intl;
  obj.label = intl2.string(arg1(dependencyMap[15]).t.OAuOHD);
  obj.id = FamilyCenterSubPages.DATA_AND_PRIVACY;
  obj.page = callback2(importDefault(dependencyMap[19]), {});
  items2[1] = obj;
  const FamilyCenterSubPages = items2;
  let obj6 = arg1(dependencyMap[20]);
  obj1 = {
    items: items2,
    onPageChange(arg0) {
      const tab = callback(selectedSubPage[21]).selectTab(items2[arg0].id);
    },
    pageWidth: tmp4[0],
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  };
  const segmentedControlState = obj6.useSegmentedControlState(obj1);
  obj2 = { value: importDefault(dependencyMap[9])(importDefault(dependencyMap[10]).FAMILY_CENTER).analyticsLocations };
  if (isFamilyCenterV3Enabled) {
    obj3 = { style: tmp.container };
    const obj4 = { bottom: true, style: tmp.content };
    const obj5 = { readOnly: tmp13 };
    obj4.children = callback2(importDefault(dependencyMap[23]), obj5);
    obj3.children = callback2(arg1(dependencyMap[22]).SafeAreaPaddingView, obj4);
    obj2.children = callback2(tmp13, obj3);
    let tmp26 = obj2;
  } else {
    obj6 = { style: tmp.container, onLayout: callback };
    const obj7 = { style: tmp.segmentedControlContainer };
    const obj8 = { state: segmentedControlState };
    obj7.children = callback2(arg1(dependencyMap[24]).SegmentedControl, obj8);
    const items3 = [callback2(id, obj7), ];
    const obj9 = { style: tmp.container };
    const obj10 = {};
    const obj11 = { bottom: true, style: tmp.content };
    const obj12 = { state: segmentedControlState };
    obj11.children = callback2(arg1(dependencyMap[25]).SegmentedControlPages, obj12);
    obj10.children = callback2(arg1(dependencyMap[22]).SafeAreaPaddingView, obj11);
    obj9.children = callback2(tmp13, obj10);
    items3[1] = callback2(id, obj9);
    obj6.children = items3;
    obj2.children = callback3(id, obj6);
    tmp26 = obj2;
  }
  return callback2(arg1(dependencyMap[9]).AnalyticsLocationProvider, tmp26);
};
