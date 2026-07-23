// Module ID: 13832
// Function ID: 105924
// Name: FamilyCenterParentalControlsSettings
// Dependencies: [57, 31, 27, 653, 6770, 33, 4130, 689, 1456, 5464, 5484, 6653, 6829, 13796, 13814, 1212, 2198, 9122, 13833, 13834, 8360, 6771, 5121, 13835, 8760, 8758, 2]
// Exports: default

// Module 13832 (FamilyCenterParentalControlsSettings)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { FamilyCenterSubPages } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", flex: 1 } };
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.segmentedControlContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default function FamilyCenterParentalControlsSettings() {
  let tmp = _createForOfIteratorHelperLoose();
  let obj = stackNavigation(selectedSubPage[8]);
  stackNavigation = obj.useStackNavigation();
  const tmp4 = callback(isFamilyCenterV3Enabled.useState(0), 2);
  const importDefault = tmp4[1];
  let obj1 = stackNavigation(selectedSubPage[11]);
  const settingNavigationRoute = obj1.useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  selectedSubPage = undefined;
  if (null != params) {
    selectedSubPage = params.selectedSubPage;
  }
  if (null == selectedSubPage) {
    selectedSubPage = items2.CONTENT_AND_SOCIAL;
  }
  const params2 = settingNavigationRoute.params;
  let autoOpenCreate;
  if (null != params2) {
    autoOpenCreate = params2.autoOpenCreate;
  }
  callback = tmp9;
  let obj2 = stackNavigation(selectedSubPage[12]);
  isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterParentalControlsSettings" });
  let obj3 = stackNavigation(selectedSubPage[13]);
  const selectedTeenUser = obj3.useSelectedTeenUser();
  let id;
  if (null != selectedTeenUser) {
    id = selectedTeenUser.id;
  }
  const tmp13 = importDefault(selectedSubPage[14])();
  let closure_6 = tmp13;
  callback = isFamilyCenterV3Enabled.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let closure_7 = isFamilyCenterV3Enabled.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = isFamilyCenterV3Enabled.useEffect(() => {
    let tmp = _slicedToArray;
    if (_slicedToArray) {
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
  const layoutEffect = isFamilyCenterV3Enabled.useLayoutEffect(() => {
    if (isFamilyCenterV3Enabled) {
      if (selectedSubPage === items2.SCREEN_TIME_CONTROLS) {
        if (null != id) {
          let obj = {};
          let fn;
          let intl = stackNavigation(selectedSubPage[15]).intl;
          obj.title = intl.string(callback(selectedSubPage[16])["1Op+NP"]);
          if (!closure_6) {
            fn = (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj["onPress"] = function onPress() {
                return outer2_0.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, { teenId: outer2_5 });
              };
              const intl = stackNavigation(selectedSubPage[15]).intl;
              obj["label"] = intl.string(stackNavigation(selectedSubPage[15]).t.OYkgVk);
              return outer2_9(stackNavigation(selectedSubPage[17]).HeaderTextButton, obj);
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
    isFamilyCenterV3Enabled = selectedSubPage === items2.SCREEN_TIME_CONTROLS;
  }
  obj = {};
  let intl = stackNavigation(selectedSubPage[15]).intl;
  obj.label = intl.string(stackNavigation(selectedSubPage[15]).t["+o1pDZ"]);
  obj.id = items2.CONTENT_AND_SOCIAL;
  obj.page = callback2(importDefault(selectedSubPage[18]), {});
  items2 = [obj, ];
  obj = {};
  const intl2 = stackNavigation(selectedSubPage[15]).intl;
  obj.label = intl2.string(stackNavigation(selectedSubPage[15]).t.OAuOHD);
  obj.id = items2.DATA_AND_PRIVACY;
  obj.page = callback2(importDefault(selectedSubPage[19]), {});
  items2[1] = obj;
  let obj6 = stackNavigation(selectedSubPage[20]);
  obj1 = {
    items: items2,
    onPageChange(arg0) {
      const tab = callback(selectedSubPage[21]).selectTab(items2[arg0].id);
    },
    pageWidth: tmp4[0],
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  };
  const segmentedControlState = obj6.useSegmentedControlState(obj1);
  obj2 = { value: importDefault(selectedSubPage[9])(importDefault(selectedSubPage[10]).FAMILY_CENTER).analyticsLocations };
  if (isFamilyCenterV3Enabled) {
    obj3 = { style: tmp.container };
    const obj4 = { bottom: true, style: tmp.content };
    const obj5 = { readOnly: tmp13 };
    obj4.children = callback2(importDefault(selectedSubPage[23]), obj5);
    obj3.children = callback2(stackNavigation(selectedSubPage[22]).SafeAreaPaddingView, obj4);
    obj2.children = callback2(closure_6, obj3);
    let tmp26 = obj2;
  } else {
    obj6 = { style: tmp.container, onLayout: callback };
    const obj7 = { style: tmp.segmentedControlContainer };
    const obj8 = { state: segmentedControlState };
    obj7.children = callback2(stackNavigation(selectedSubPage[24]).SegmentedControl, obj8);
    const items3 = [callback2(id, obj7), ];
    const obj9 = { style: tmp.container };
    const obj10 = {};
    const obj11 = { bottom: true, style: tmp.content };
    const obj12 = { state: segmentedControlState };
    obj11.children = callback2(stackNavigation(selectedSubPage[25]).SegmentedControlPages, obj12);
    obj10.children = callback2(stackNavigation(selectedSubPage[22]).SafeAreaPaddingView, obj11);
    obj9.children = callback2(closure_6, obj10);
    items3[1] = callback2(id, obj9);
    obj6.children = items3;
    obj2.children = callback3(id, obj6);
    tmp26 = obj2;
  }
  return callback2(stackNavigation(selectedSubPage[9]).AnalyticsLocationProvider, tmp26);
};
