// Module ID: 16760
// Function ID: 16761
// Name: UserSettingsFamilyCenter
// Dependencies: [32, 19, 17, 7715, 1383, 1072, 1097, 7716, 21, 6027, 1113, 2538, 5023, 575, 7086, 5624, 5634, 7717, 5014, 1497, 7326, 7351, 8369, 16761, 16762, 8371, 563, 8980, 16763, 16803, 1252, 6540, 6545, 5593, 16821, 6739, 572, 9214, 14177, 2]
// Exports: default

// Module 16760 (UserSettingsFamilyCenter)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AgeGateConstants from "AgeGateConstants" /* 1097 */;
import intl3 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef2538 from "module_2538" /* 2538 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6540 */;
import MetricEvents from "MetricEvents" /* 6545 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6739 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7086 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7717 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7715 */;
import UserStore_mod from "UserStore" /* 1383 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7716 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_7, navigation;

let FamilyCenterSubPages;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function FamilyCenterLoading() {
  const obj = { justify: "center", align: "center", style: closure_19().loadingContainer, children: authStore3(metroRequire, {}) };
  const Stack = Stack_Stack.Stack;
  return authStore3(Stack, obj);
}
function FamilyCenterLoadError() {
  let intl2;
  let items1;
  let items2;
  const tmp = closure_19();
  const intl = intl3.intl;
  const stringResult = intl.string(_modDef2538.nGX8Co);
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
}
function FamilyCenter() {
  let closure_3;
  let closure_4;
  let closure_5;
  let familyCenterInitialized;
  let intl;
  let intl2;
  let isLoading;
  let items1;
  let items5;
  let obj10;
  let obj12;
  let ref;
  let tmp15;
  let tmp18Result;
  let tmp27;
  let tmp = closure_19();
  let tmp2 = navigation;
  let obj = navigation(isLoading[19]);
  navigation = obj.useNavigation();
  const tmp6 = familyCenterInitialized(isLoading[20]);
  const analyticsLocations = tmp6(familyCenterInitialized(isLoading[21]).FAMILY_CENTER).analyticsLocations;
  let obj2 = navigation(isLoading[22]);
  const acceptedRequestsCount = obj2.useAcceptedRequestsCount();
  const tmp8 = familyCenterInitialized(isLoading[23])();
  const selectedTab = familyCenterInitialized(isLoading[24])().selectedTab;
  let obj3 = navigation(isLoading[25]);
  const selectedTeenId = obj3.useSelectedTeenId();
  items = [closure_7];
  const obj4 = navigation(isLoading[26]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => {
    const obj = { familyCenterInitialized: closure_7.getIsInitialized(), isLoading: closure_7.isLoading(), hasLoadFailed: closure_7.hasInitialLoadFailed() };
    return obj;
  });
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  const hasLoadFailed = stateFromStoresObject.hasLoadFailed;
  _slicedToArray = tmp12;
  let tmp13 = familyCenterInitialized;
  const currentUser = UserStore.getCurrentUser();
  if (familyCenterInitialized) {
    tmp13 = !isLoading;
  }
  if (tmp13) {
    tmp13 = !hasLoadFailed;
  }
  if (tmp13) {
    tmp13 = null != currentUser;
  }
  if (tmp13) {
    tmp13 = !tmp12;
  }
  react = tmp13;
  [tmp15, closure_5] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj5 = {
    items: items1,
    onPageChange(arg0) {
      const obj = familyCenterInitialized(isLoading[17]);
      return obj.selectTab(items[arg0]);
    },
    pageWidth: tmp15,
    defaultIndex: items.indexOf(selectedTab)
  };
  const obj6 = { label: intl.string(familyCenterInitialized(isLoading[11]).bdBmqy), id: FamilyCenterSubPages.ACTIVITY, page: closure_14(familyCenterInitialized(isLoading[28]), {}) };
  const useSegmentedControlState = tmp2(tmp3[27]).useSegmentedControlState;
  tmp2(isLoading[27]);
  intl = tmp2(tmp3[10]).intl;
  items1 = [obj6, ];
  const obj7 = { label: intl2.string(familyCenterInitialized(isLoading[11])["gVWG+6"]), id: FamilyCenterSubPages.REQUESTS, page: closure_14(familyCenterInitialized(isLoading[29]), {}) };
  intl2 = tmp2(tmp3[10]).intl;
  items1[1] = obj7;
  const segmentedControlState = useSegmentedControlState(obj5);
  const obj8 = { ageGroup: tmp8, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  closure_7 = react.useRef(obj8);
  const effect = react.useEffect(() => {
    closure_7.current = obj8;
  });
  const items2 = [familyCenterInitialized, null != tmp8];
  const effect1 = react.useEffect(() => {
    let ageGroup;
    let numOfAcceptedRequests;
    let selectedTab;
    let selectedTeenId;
    const tmp = familyCenterInitialized;
    if (tmp) {
      const tmp2 = closure_3;
      if (tmp2) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = closure_7.current);
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
  familyCenterInitialized(isLoading[33])(() => {
    const canRefetchResult = !isLoading && FamilyCenterStore.canRefetch();
    if (canRefetchResult) {
      const obj = FamilyCenterActionCreatorsDefault;
      obj.initialPageLoad();
    }
  });
  familyCenterInitialized(isLoading[34])();
  UserStore = react.useRef(false);
  const items3 = [tmp13];
  const effect2 = react.useEffect(() => {
    const tmp = closure_4 && !ref.current;
    if (tmp) {
      ref.current = true;
      const obj = AgeGateModalActionCreators;
      obj.openAgeGateModal(AgeGateSource.FAMILY_CENTER);
    }
  }, items3);
  const items4 = [navigation];
  const effect3 = react.useEffect(() => {
    function handleGateClose(arg0) {
      if (ref.current) {
        tmp2.current = false;
        if (true !== tmp) {
          handleGateClose.goBack();
        }
      }
    }
    let obj = familyCenterInitialized(isLoading[36]);
    const subscription = obj.subscribe("AGE_GATE_MODAL_CLOSE", handleGateClose);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("AGE_GATE_MODAL_CLOSE", handleGateClose);
    };
  }, items4);
  let tmp18Result2 = null;
  if (!tmp13) {
    const obj9 = { value: analyticsLocations, children: tmp27(closure_5, obj10) };
    obj10 = { style: tmp.container, onLayout: callback, children: items5 };
    const obj11 = { style: tmp.segmentedControlContainer, children: closure_14(tmp2(isLoading[37]).SegmentedControl, obj12) };
    const AnalyticsLocationProvider = tmp2(tmp3[20]).AnalyticsLocationProvider;
    obj12 = { state: segmentedControlState };
    items5 = [closure_14(closure_5, obj11), ];
    const obj13 = { style: tmp.container, children: tmp18Result };
    tmp27 = closure_15;
    if (hasLoadFailed) {
      tmp18Result = tmp18(FamilyCenterLoadError, {});
    } else if (isLoading) {
      tmp18Result = tmp18(FamilyCenterLoading, {});
    } else {
      const obj14 = { state: segmentedControlState };
      tmp18Result = tmp18(tmp2(tmp3[38]).SegmentedControlPages, obj14);
    }
    items5[1] = closure_14(closure_5, obj13);
    tmp18Result2 = tmp18(AnalyticsLocationProvider, obj9);
  }
  return tmp18Result2;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
let UserStore = UserStore_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const AgeGateSource = AgeGateConstants.AgeGateSource;
({ FamilyCenterPageLocationAnalyticsIds: unpackModuleId, FamilyCenterSubPageAnalyticsIds: closure_12, FamilyCenterSubPages } = FamilyCenterConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flex: 1 }, segmentedControlContainer: obj2, loadingContainer: { minHeight: "100%" }, loadErrorContainer: obj3, loadErrorText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_19 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return authStore3(FamilyCenter, {});
};
