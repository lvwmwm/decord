// Module ID: 16665
// Function ID: 16666
// Name: UserSettingsFamilyCenter
// Dependencies: [32, 19, 17, 7703, 1389, 1084, 1109, 7704, 21, 558, 576, 6015, 1125, 2536, 5014, 7072, 587, 5271, 5281, 7705, 5005, 7313, 7338, 8180, 16666, 16667, 8182, 573, 16668, 16708, 8938, 1264, 6527, 6532, 5300, 6726, 9182, 11240, 2]

// Module 16665 (UserSettingsFamilyCenter)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import AgeGateConstants from "AgeGateConstants" /* 1109 */;
import intl3 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import _modDef2536 from "module_2536" /* 2536 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5014 */;
import Text_Text from "Text/Text" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6527 */;
import MetricEvents from "MetricEvents" /* 6532 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7072 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7705 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7703 */;
import UserStore from "UserStore" /* 1389 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7704 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 5005 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let FamilyCenterSubPages;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp;
let unpackModuleId;
const Stack_Stack = tmp(6015);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const AgeGateSource = AgeGateConstants.AgeGateSource;
({ FamilyCenterPageLocationAnalyticsIds: unpackModuleId, FamilyCenterSubPageAnalyticsIds: closure_12, FamilyCenterSubPages } = FamilyCenterConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterLoading() {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = syncedClientThemes(metroRequire, {});
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.loadingContainer) {
    const obj2 = { justify: "center", align: "center", style: tmp4.loadingContainer, children: first };
    const tmp11 = syncedClientThemes(Stack_Stack.Stack, obj2);
    cResult[1] = tmp4.loadingContainer;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function FamilyCenterLoading() {
  const obj = { justify: "center", align: "center", style: closure_19().loadingContainer, children: syncedClientThemes(metroRequire, {}) };
  const Stack = Stack_Stack.Stack;
  return syncedClientThemes(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterLoadError() {
  let children;
  let intl2;
  let items1;
  let items2;
  let tmp11;
  let tmp15;
  let tmp20;
  let tmp8;
  let tmp9;
  let obj = children(576);
  const cResult = obj.c(10);
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef2536.nGX8Co);
    cResult[0] = stringResult;
    children = stringResult;
  } else {
    children = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(first, "assertive");
    };
    items = [children];
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "lg", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const CircleErrorIcon = tmp(7072).CircleErrorIcon;
    const tmp14 = closure_14(CircleErrorIcon, obj2);
    cResult[3] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp4.loadErrorText) {
    const obj3 = { align: "center", spacing: nativeDefault.space.PX_12, children: items1 };
    const Stack = tmp(6015).Stack;
    items1 = [tmp11, ];
    const obj4 = { variant: "text-md/medium", color: "text-strong", style: tmp4.loadErrorText, children };
    items1[1] = closure_14(children(5271).Text, obj4);
    const tmp19 = closure_15(Stack, obj3);
    cResult[4] = tmp4.loadErrorText;
    cResult[5] = tmp19;
    tmp15 = tmp19;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {
      text: intl2.string(children(1125).t["7NqTJn"]),
      onPress() {
          const obj = FamilyCenterActionCreatorsDefault;
          return obj.initialPageLoad();
        }
    };
    const Button = tmp(5281).Button;
    intl2 = tmp(1125).intl;
    const tmp22 = closure_14(Button, obj5);
    cResult[6] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] === tmp4.loadErrorContainer) {
    let tmp23;
    if (cResult[8] === tmp15) {
      tmp23 = cResult[9];
    }
    return tmp23;
  }
  const obj6 = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style: tmp4.loadErrorContainer, children: items2 };
  const Stack2 = tmp(6015).Stack;
  items2 = [tmp15, tmp20];
  const tmp24 = closure_15(Stack2, obj6);
  cResult[7] = tmp4.loadErrorContainer;
  cResult[8] = tmp15;
  cResult[9] = tmp24;
  tmp23 = tmp24;
}) : (function FamilyCenterLoadError() {
  let intl2;
  let items1;
  let items2;
  const tmp = closure_19();
  const intl = intl3.intl;
  const stringResult = intl.string(_modDef2536.nGX8Co);
  require = stringResult;
  items = [stringResult];
  const effect = react.useEffect(() => {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(require, "assertive");
  }, items);
  let obj = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style: tmp.loadErrorContainer, children: items2 };
  const Stack = Stack_Stack.Stack;
  const obj2 = { align: "center", spacing: nativeDefault.space.PX_12, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  const obj3 = { size: "lg", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
  const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
  items1 = [closure_14(CircleErrorIcon, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-strong", style: tmp.loadErrorText, children: stringResult };
  items1[1] = closure_14(Text_Text.Text, obj4);
  items2 = [closure_15(Stack2, obj2), ];
  const obj5 = {
    text: intl2.string(intl3.t["7NqTJn"]),
    onPress() {
      const obj = FamilyCenterActionCreatorsDefault;
      return obj.initialPageLoad();
    }
  };
  const Button = components_Button_Button.Button;
  intl2 = intl3.intl;
  items2[1] = closure_14(Button, obj5);
  return closure_15(Stack, obj);
});
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flex: 1 }, segmentedControlContainer: obj2, loadingContainer: { minHeight: "100%" }, loadErrorContainer: obj3, loadErrorText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_19 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenter() {
  let closure_2;
  let current;
  let familyCenterInitialized;
  let isLoading;
  let obj7;
  let ref;
  let tmp10;
  let tmp11;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp26;
  let tmp27;
  let tmp = familyCenterInitialized;
  let tmp2 = dependencyMap;
  let obj = familyCenterInitialized(576);
  const cResult = obj.c(45);
  closure_19();
  const tmp6 = isLoading(7313);
  const analyticsLocations = tmp6(isLoading(7338).FAMILY_CENTER).analyticsLocations;
  let obj2 = familyCenterInitialized(8180);
  const acceptedRequestsCount = obj2.useAcceptedRequestsCount();
  const tmp8 = isLoading(16666)();
  const selectedTab = isLoading(16667)().selectedTab;
  let obj3 = familyCenterInitialized(8182);
  const selectedTeenId = obj3.useSelectedTeenId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [FamilyCenterStore];
    const fn = function c() {
      const obj = { familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading(), hasLoadFailed: FamilyCenterStore.hasInitialLoadFailed() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp10, tmp11);
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  dependencyMap = null != tmp8;
  const currentUser = UserStore.getCurrentUser();
  const tmp15 = _slicedToArray(react.useState(0), 2);
  [tmp16, _slicedToArray] = tmp15;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    cResult[2] = N;
  } else {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    const stringResult = obj5.string(isLoading(2536).bdBmqy);
    cResult[3] = stringResult;
    tmp18 = stringResult;
  } else {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    tmp22[0] = tmp18;
    tmp22[1] = FamilyCenterSubPages.ACTIVITY;
    tmp22[2] = closure_14(isLoading(16668), {});
    const intl = tmp(1125).intl;
    const stringResult1 = intl.string(isLoading(2536)["gVWG+6"]);
    cResult[4] = tmp22;
    cResult[5] = stringResult1;
    tmp21 = stringResult1;
    tmp20 = tmp22;
  } else {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    tmp21 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    tmp28[0] = tmp20;
    tmp28[1] = { label: tmp21, id: FamilyCenterSubPages.REQUESTS, page: closure_14(isLoading(16708), {}) };
    const fn2 = function w(arg0) {
      const obj = isLoading(closure_2[19]);
      return obj.selectTab(items[arg0]);
    };
    cResult[6] = tmp28;
    cResult[7] = fn2;
    tmp27 = fn2;
    const obj4 = { label: tmp21, id: FamilyCenterSubPages.REQUESTS, page: closure_14(isLoading(16708), {}) };
    tmp26 = tmp28;
  } else {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    tmp27 = cResult[7];
  }
  if (cResult[8] !== selectedTab) {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    const index = items.indexOf(selectedTab);
    cResult[8] = selectedTab;
    cResult[9] = index;
  } else {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  if (cResult[10] === tmp16) {
    class N {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.width);
      }
    }
    const tmpResult2 = tmp(8938);
    const segmentedControlState = tmpResult2.useSegmentedControlState(obj7);
    if (cResult[13] === tmp8) {
      class N {
        constructor(nativeEvent) {
          _slicedToArray(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    const obj6 = { ageGroup: tmp8, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
    cResult[13] = tmp8;
    cResult[14] = acceptedRequestsCount;
    cResult[15] = selectedTab;
    cResult[16] = selectedTeenId;
    cResult[17] = obj6;
  }
  obj7 = { items: tmp26, onPageChange: tmp27, pageWidth: tmp16, defaultIndex: tmp31 };
  cResult[10] = tmp16;
  cResult[11] = tmp31;
  cResult[12] = obj7;
}) : (function FamilyCenter() {
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
  let tmp = closure_19();
  let tmp2 = dependencyMap;
  const tmp3 = isLoading(7313);
  const analyticsLocations = tmp3(isLoading(7338).FAMILY_CENTER).analyticsLocations;
  let obj = familyCenterInitialized(8180);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp6 = isLoading(16666)();
  const selectedTab = isLoading(16667)().selectedTab;
  let obj2 = familyCenterInitialized(8182);
  const selectedTeenId = obj2.useSelectedTeenId();
  let obj3 = familyCenterInitialized(573);
  items = [FamilyCenterStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { familyCenterInitialized: FamilyCenterStore.getIsInitialized(), isLoading: FamilyCenterStore.isLoading(), hasLoadFailed: FamilyCenterStore.hasInitialLoadFailed() };
    return obj;
  });
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  const hasLoadFailed = stateFromStoresObject.hasLoadFailed;
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
      const obj = isLoading(closure_2[19]);
      return obj.selectTab(items[arg0]);
    },
    pageWidth: tmp12,
    defaultIndex: items.indexOf(selectedTab)
  };
  const obj5 = { label: intl.string(isLoading(2536).bdBmqy), id: FamilyCenterSubPages.ACTIVITY, page: closure_14(isLoading(16668), {}) };
  const useSegmentedControlState = familyCenterInitialized(8938).useSegmentedControlState;
  familyCenterInitialized(8938);
  intl = familyCenterInitialized(1125).intl;
  items1 = [obj5, ];
  const obj6 = { label: intl2.string(isLoading(2536)["gVWG+6"]), id: FamilyCenterSubPages.REQUESTS, page: closure_14(isLoading(16708), {}) };
  intl2 = familyCenterInitialized(1125).intl;
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
        const obj2 = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: authStore2[selectedTab], source: unpackModuleId.SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.FAMILY_CENTER_VIEWED, obj2);
        const obj3 = { name: MetricEvents.MetricEvents.FAMILY_CENTER_VIEW };
        const increment = MonitoringAgentDefault.increment;
        MonitoringAgentDefault;
        increment(obj3);
      }
    }
  }, items2);
  isLoading(5300)(() => {
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
        const tmp4Result = familyCenterInitialized(6726);
        tmp4Result.openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        tmp15Result2 = null;
      }
      return tmp15Result2;
    }
  }
  const obj8 = { value: analyticsLocations, children: tmp23(ref, obj9) };
  obj9 = { style: tmp.container, onLayout: callback, children: items3 };
  const obj10 = { style: tmp.segmentedControlContainer, children: closure_14(familyCenterInitialized(9182).SegmentedControl, { state: segmentedControlState }) };
  const AnalyticsLocationProvider = tmp4(7313).AnalyticsLocationProvider;
  items3 = [closure_14(ref, obj10), ];
  const obj11 = { style: tmp.container, children: tmp15Result };
  tmp23 = closure_15;
  if (hasLoadFailed) {
    tmp15Result = tmp15(closure_18, {});
  } else if (isLoading) {
    tmp15Result = tmp15(closure_17, {});
  } else {
    const obj12 = { state: segmentedControlState };
    tmp15Result = tmp15(tmp4(11240).SegmentedControlPages, obj12);
  }
  items3[1] = closure_14(ref, obj11);
  tmp15Result2 = tmp15(AnalyticsLocationProvider, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterContainer() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = syncedClientThemes(closure_20, {});
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FamilyCenterContainer() {
  return syncedClientThemes(closure_20, {});
});
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default tmp6;
