// Module ID: 13649
// Function ID: 103405
// Name: FamilyCenterLoading
// Dependencies: []
// Exports: default

// Module 13649 (FamilyCenterLoading)
let FamilyCenterSubPages;
function FamilyCenterLoading() {
  const obj = { hideTitle: null, initialRouteName: null, style: callback3().loadingContainer, children: callback2(closure_6, {}) };
  return callback2(arg1(dependencyMap[10]).Stack, obj);
}
function FamilyCenter() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  const acceptedRequestsCount = obj.useAcceptedRequestsCount();
  const tmp4 = importDefault(dependencyMap[16])();
  const selectedTab = importDefault(dependencyMap[17])().selectedTab;
  let obj1 = arg1(dependencyMap[18]);
  const selectedTeenId = obj1.useSelectedTeenId();
  let obj2 = arg1(dependencyMap[19]);
  const items = [closure_7];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ familyCenterInitialized: closure_7.getIsInitialized(), isLoading: closure_7.isLoading() }));
  const familyCenterInitialized = stateFromStoresObject.familyCenterInitialized;
  const arg1 = familyCenterInitialized;
  const isLoading = stateFromStoresObject.isLoading;
  const importDefault = isLoading;
  const dependencyMap = tmp8;
  const currentUser = currentUser.getCurrentUser();
  const tmp9 = callback(React.useState(0), 2);
  let callback = tmp9[1];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = arg1(dependencyMap[20]);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[21]).intl;
  obj.label = intl.string(importDefault(dependencyMap[22]).bdBmqy);
  obj.id = FamilyCenterSubPages.ACTIVITY;
  obj.page = callback2(importDefault(dependencyMap[23]), {});
  const items1 = [obj, ];
  obj1 = {};
  const intl2 = arg1(dependencyMap[21]).intl;
  obj1.label = intl2.string(importDefault(dependencyMap[22]).gVWG+6);
  obj1.id = FamilyCenterSubPages.REQUESTS;
  obj1.page = callback2(importDefault(dependencyMap[24]), {});
  items1[1] = obj1;
  obj.items = items1;
  obj.onPageChange = function onPageChange(arg0) {
    return isLoading(tmp8[25]).selectTab(closure_17[arg0]);
  };
  obj.pageWidth = tmp9[0];
  obj.defaultIndex = items.indexOf(selectedTab);
  const segmentedControlState = obj3.useSegmentedControlState(obj);
  obj2 = { ageGroup: tmp4, numOfAcceptedRequests: acceptedRequestsCount, selectedTab, selectedTeenId };
  const React = obj2;
  let closure_5 = React.useRef(obj2);
  const effect = React.useEffect(() => {
    closure_5.current = obj2;
  });
  const items2 = [familyCenterInitialized, null != tmp4];
  const effect1 = React.useEffect(() => {
    let ageGroup;
    let numOfAcceptedRequests;
    let selectedTab;
    let selectedTeenId;
    if (familyCenterInitialized) {
      if (tmp8) {
        ({ ageGroup, numOfAcceptedRequests, selectedTab, selectedTeenId } = ref.current);
        let obj = isLoading(tmp8[26]);
        obj = { is_considered_adult: "adult" === ageGroup, num_of_accepted_links: numOfAcceptedRequests, selected_teen_id: selectedTeenId, initial_page: closure_13[selectedTab], source: constants3.SETTINGS };
        obj.track(constants.FAMILY_CENTER_VIEWED, obj);
        obj = { name: familyCenterInitialized(tmp8[28]).MetricEvents.FAMILY_CENTER_VIEW };
        isLoading(tmp8[27]).increment(obj);
        const obj3 = isLoading(tmp8[27]);
      }
    }
  }, items2);
  importDefault(dependencyMap[29])(() => {
    let obj = familyCenterInitialized(tmp8[30]);
    obj = { dismissAction: constants2.AUTO, forceTrack: true };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(familyCenterInitialized(tmp8[31]).DismissibleContent.FAMILY_CENTER_NEW_BADGE, obj);
    let canRefetchResult = !isLoading;
    if (canRefetchResult) {
      canRefetchResult = closure_7.canRefetch();
    }
    if (canRefetchResult) {
      isLoading(tmp8[25]).initialPageLoad();
      const obj3 = isLoading(tmp8[25]);
    }
  });
  if (familyCenterInitialized) {
    if (null != currentUser) {
      if (!tmp8) {
        arg1(dependencyMap[32]).openAgeGateModal(AgeGateSource.FAMILY_CENTER);
        return null;
      }
    }
  }
  obj3 = { value: importDefault(dependencyMap[13])(importDefault(dependencyMap[14]).FAMILY_CENTER).analyticsLocations };
  let obj4 = { style: tmp.container, onLayout: callback };
  const obj5 = { style: tmp.segmentedControlContainer, children: callback2(arg1(dependencyMap[33]).SegmentedControl, { state: segmentedControlState }) };
  const items3 = [callback2(closure_5, obj5), ];
  let obj6 = { style: tmp.container };
  if (isLoading) {
    let tmp25Result = tmp25(FamilyCenterLoading, {});
  } else {
    const obj7 = { state: segmentedControlState };
    tmp25Result = tmp25(arg1(dependencyMap[34]).SegmentedControlPages, obj7);
  }
  obj6.children = tmp25Result;
  obj6 = callback2(closure_5, obj6);
  items3[1] = obj6;
  obj4.children = items3;
  obj4 = closure_16(closure_5, obj4);
  obj3.children = obj4;
  callback2(arg1(dependencyMap[13]).AnalyticsLocationProvider, obj3);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const AgeGateSource = arg1(dependencyMap[6]).AgeGateSource;
const ContentDismissActionType = arg1(dependencyMap[7]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[2]);
({ FamilyCenterPageLocationAnalyticsIds: closure_12, FamilyCenterSubPageAnalyticsIds: closure_13, FamilyCenterSubPages } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[9]));
const items = [, ];
({ ACTIVITY: arr[0], REQUESTS: arr[1] } = FamilyCenterSubPages);
let obj = arg1(dependencyMap[11]);
obj = { container: { marginVertical: 10388343592192675000000000000000000, marginHorizontal: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000217279425302 } };
obj = { paddingTop: importDefault(dependencyMap[12]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[12]).space.PX_16 };
obj.segmentedControlContainer = obj;
obj.loadingContainer = { minHeight: "100%" };
let closure_18 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenter.tsx");

export default function FamilyCenterContainer() {
  return callback2(FamilyCenter, {});
};
