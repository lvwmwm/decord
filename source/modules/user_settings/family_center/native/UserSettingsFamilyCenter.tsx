// Module ID: 13823
// Function ID: 105940
// Name: FamilyCenterLoading
// Dependencies: [57, 31, 27, 6769, 1849, 653, 1197, 1345, 6770, 33, 4541, 4130, 689, 5462, 5482, 7122, 13824, 13825, 7124, 624, 8404, 1212, 2198, 13826, 13866, 6771, 675, 6836, 6841, 4559, 3946, 1334, 5587, 8799, 8797, 2]
// Exports: default

// Module 13823 (FamilyCenterLoading)
import _slicedToArray from "_slicedToArray";
import DismissibleContent from "DismissibleContent";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { AgeGateSource } from "result";
import { ContentDismissActionType } from "ContentDismissActionType";
import items from "items";
import jsxProd from "SegmentedControl";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let FamilyCenterSubPages;
let closure_12;
let closure_13;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
const require = arg1;
function FamilyCenterLoading() {
  const obj = { justify: "center", align: "center", style: _createForOfIteratorHelperLoose().loadingContainer, children: callback2(closure_6, {}) };
  return callback2(require(4541) /* Stack */.Stack, obj);
}
function FamilyCenter() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = familyCenterInitialized(7122);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp4 = isLoading(13824)();
  const selectedTab = isLoading(13825)().selectedTab;
  let obj1 = familyCenterInitialized(7124);
  const selectedTeenId = obj1.useSelectedTeenId();
  let obj2 = familyCenterInitialized(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ familyCenterInitialized: outer1_7.getIsInitialized(), isLoading: outer1_7.isLoading() }));
  familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  isLoading = stateFromStoresObject.isLoading;
  const dependencyMap = tmp8;
  currentUser = currentUser.getCurrentUser();
  const tmp9 = callback(obj2.useState(0), 2);
  callback = tmp9[1];
  callback = obj2.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = familyCenterInitialized(8404);
  obj = {};
  obj = {};
  const intl = familyCenterInitialized(1212).intl;
  obj.label = intl.string(isLoading(2198).bdBmqy);
  obj.id = FamilyCenterSubPages.ACTIVITY;
  obj.page = callback2(isLoading(13826), {});
  const items1 = [obj, ];
  obj1 = {};
  const intl2 = familyCenterInitialized(1212).intl;
  obj1.label = intl2.string(isLoading(2198)["gVWG+6"]);
  obj1.id = FamilyCenterSubPages.REQUESTS;
  obj1.page = callback2(isLoading(13866), {});
  items1[1] = obj1;
  obj.items = items1;
  obj.onPageChange = function onPageChange(arg0) {
    return isLoading(tmp8[25]).selectTab(outer1_17[arg0]);
  };
  obj.pageWidth = tmp9[0];
  obj.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = obj3.useSegmentedControlState(obj);
  obj2 = { ageGroup: tmp4, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  let closure_5 = obj2.useRef(obj2);
  const effect = obj2.useEffect(() => {
    closure_5.current = obj2;
  });
  const items2 = [familyCenterInitialized, null != tmp4];
  const effect1 = obj2.useEffect(() => {
    let ageGroup;
    let numOfAcceptedRequests;
    let selectedTab;
    let selectedTeenId;
    if (familyCenterInitialized) {
      if (tmp8) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        let obj = isLoading(tmp8[26]);
        obj = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: outer1_13[selectedTab], source: outer1_12.SETTINGS };
        obj.track(outer1_9.FAMILY_CENTER_VIEWED, obj);
        obj = { name: familyCenterInitialized(tmp8[28]).MetricEvents.FAMILY_CENTER_VIEW };
        isLoading(tmp8[27]).increment(obj);
        const obj3 = isLoading(tmp8[27]);
      }
    }
  }, items2);
  isLoading(4559)(() => {
    let obj = familyCenterInitialized(tmp8[30]);
    obj = { dismissAction: outer1_11.AUTO, forceTrack: true };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(familyCenterInitialized(tmp8[31]).DismissibleContent.FAMILY_CENTER_NEW_BADGE, obj);
    let canRefetchResult = !isLoading;
    if (canRefetchResult) {
      canRefetchResult = outer1_7.canRefetch();
    }
    if (canRefetchResult) {
      isLoading(tmp8[25]).initialPageLoad();
      const obj3 = isLoading(tmp8[25]);
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp8) {
        familyCenterInitialized(5587).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  obj3 = { value: isLoading(5462)(isLoading(5482).FAMILY_CENTER).analyticsLocations };
  let obj4 = { style: tmp.container, onLayout: callback };
  const obj5 = { style: tmp.segmentedControlContainer, children: callback2(familyCenterInitialized(8799).SegmentedControl, { state: segmentedControlState }) };
  const items3 = [callback2(closure_5, obj5), ];
  let obj6 = { style: tmp.container };
  if (isLoading) {
    let tmp25Result = tmp25(FamilyCenterLoading, {});
  } else {
    const obj7 = { state: segmentedControlState };
    tmp25Result = tmp25(familyCenterInitialized(8797).SegmentedControlPages, obj7);
  }
  obj6.children = tmp25Result;
  obj6 = callback2(closure_5, obj6);
  items3[1] = obj6;
  obj4.children = items3;
  obj4 = closure_16(closure_5, obj4);
  obj3.children = obj4;
  callback2(familyCenterInitialized(5462).AnalyticsLocationProvider, obj3);
}
({ View: closure_5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ FamilyCenterPageLocationAnalyticsIds: closure_12, FamilyCenterSubPageAnalyticsIds: closure_13, FamilyCenterSubPages } = items);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
_createForOfIteratorHelperLoose = { container: { display: "flex", flex: 1 } };
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.segmentedControlContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.loadingContainer = { minHeight: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return callback2(FamilyCenter, {});
};
