// Module ID: 14405
// Function ID: 14406
// Name: UserSettingsFamilyCenter
// Dependencies: [32, 19, 17, 6957, 1372, 1074, 1099, 6958, 21, 5279, 4836, 576, 6583, 6603, 8105, 14406, 14407, 8107, 563, 9083, 1115, 2487, 14408, 14448, 6959, 1241, 5179, 5184, 5298, 6632, 9084, 12113, 2]
// Exports: default

// Module 14405 (UserSettingsFamilyCenter)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AgeGateConstants from "AgeGateConstants" /* 1099 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import MetricEvents from "MetricEvents" /* 5184 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6959 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let FamilyCenterSubPages;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj2;
let unpackModuleId;
function FamilyCenterLoading() {
  const obj = { justify: "center", align: "center", style: closure_18().loadingContainer, children: authStore2(metroRequire, {}) };
  const Stack = Stack_Stack.Stack;
  return authStore2(Stack, obj);
}
function FamilyCenter() {
  let closure_2;
  let familyCenterInitialized;
  let intl;
  let intl2;
  let isLoading;
  let items1;
  let items3;
  let obj7;
  let obj9;
  let tmp12;
  let tmp15Result;
  let tmp23;
  let tmp = closure_18();
  let tmp2 = dependencyMap;
  const tmp3 = isLoading(6583);
  const analyticsLocations = tmp3(isLoading(6603).FAMILY_CENTER).analyticsLocations;
  let obj = familyCenterInitialized(8105);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp6 = isLoading(14406)();
  const selectedTab = isLoading(14407)().selectedTab;
  let obj2 = familyCenterInitialized(8107);
  const selectedTeenId = obj2.useSelectedTeenId();
  let obj3 = familyCenterInitialized(563);
  items = [FamilyCenterStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading() };
    return obj;
  });
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  const tmp10 = null != tmp6;
  dependencyMap = tmp10;
  const currentUser = UserStore.getCurrentUser();
  const tmp11 = _slicedToArray(obj7.useState(0), 2);
  [tmp12, _slicedToArray] = tmp11;
  const callback = obj7.useCallback((nativeEvent) => {
    _slicedToArray(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj4 = {
    items: items1,
    onPageChange(arg0) {
      const obj = isLoading(closure_2[24]);
      return obj.selectTab(items[arg0]);
    },
    pageWidth: tmp12,
    defaultIndex: items.indexOf(selectedTab)
  };
  const obj5 = { label: intl.string(isLoading(2487).bdBmqy), id: FamilyCenterSubPages.ACTIVITY, page: closure_14(isLoading(14408), {}) };
  const useSegmentedControlState = familyCenterInitialized(9083).useSegmentedControlState;
  familyCenterInitialized(9083);
  intl = familyCenterInitialized(1115).intl;
  items1 = [obj5, ];
  const obj6 = { label: intl2.string(isLoading(2487)["gVWG+6"]), id: FamilyCenterSubPages.REQUESTS, page: closure_14(isLoading(14448), {}) };
  intl2 = familyCenterInitialized(1115).intl;
  items1[1] = obj6;
  const segmentedControlState = useSegmentedControlState(obj4);
  obj7 = { ageGroup: tmp6, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  const ref = obj7.useRef(obj7);
  const effect = obj7.useEffect(() => {
    ref.current = obj7;
  });
  const items2 = [familyCenterInitialized, tmp10];
  const effect1 = obj7.useEffect(() => {
    let ageGroup;
    let numOfAcceptedRequests;
    let selectedTab;
    let selectedTeenId;
    const tmp = familyCenterInitialized;
    if (tmp) {
      const tmp2 = closure_2;
      if (tmp2) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        const obj2 = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: closure_12[selectedTab], source: unpackModuleId.SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
        const obj3 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        const increment = MonitoringAgentDefault.increment;
        MonitoringAgentDefault;
        increment(obj3);
      }
    }
  }, items2);
  isLoading(5298)(() => {
    const canRefetchResult = !isLoading && FamilyCenterStore.canRefetch();
    if (canRefetchResult) {
      const obj = FamilyCenterActionCreatorsDefault;
      obj.initialPageLoad();
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      let tmp15Result2;
      if (!tmp10) {
        const tmp4Result = familyCenterInitialized(6632);
        tmp4Result.openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        tmp15Result2 = null;
      }
      return tmp15Result2;
    }
  }
  const obj8 = { value: analyticsLocations, children: tmp23(ref, obj9) };
  obj9 = { style: tmp.container, onLayout: callback, children: items3 };
  const obj10 = { style: tmp.segmentedControlContainer, children: closure_14(familyCenterInitialized(9084).SegmentedControl, { state: segmentedControlState }) };
  const AnalyticsLocationProvider = tmp4(6583).AnalyticsLocationProvider;
  items3 = [closure_14(ref, obj10), ];
  const obj11 = { style: tmp.container, children: tmp15Result };
  tmp23 = closure_15;
  if (isLoading) {
    tmp15Result = tmp15(FamilyCenterLoading, {});
  } else {
    const obj12 = { state: segmentedControlState };
    tmp15Result = tmp15(tmp4(12113).SegmentedControlPages, obj12);
  }
  items3[1] = closure_14(ref, obj11);
  tmp15Result2 = tmp15(AnalyticsLocationProvider, obj8);
}
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const AgeGateSource = AgeGateConstants.AgeGateSource;
({ FamilyCenterPageLocationAnalyticsIds: unpackModuleId, FamilyCenterSubPageAnalyticsIds: closure_12, FamilyCenterSubPages } = FamilyCenterConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
let obj = { container: { display: "flex", flex: 1 }, segmentedControlContainer: obj2, loadingContainer: { minHeight: "100%" } };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return authStore2(FamilyCenter, {});
};
