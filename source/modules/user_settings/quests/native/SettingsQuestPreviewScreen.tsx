// Module ID: 13952
// Function ID: 106009
// Name: SettingsQuestPreviewScreen
// Dependencies: []
// Exports: default

// Module 13952 (SettingsQuestPreviewScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
const PX_16 = importDefault(dependencyMap[6]).space.PX_16;
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.controlBarContainer = { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 };
obj.segmentedControlContainer = { paddingHorizontal: PX_16 };
obj.pagesContainer = { backgroundColor: false, borderRadius: false };
const tmp3 = arg1(dependencyMap[5]);
obj.activityIndicator = { marginTop: importDefault(dependencyMap[6]).space.PX_32 };
const obj1 = { marginTop: importDefault(dependencyMap[6]).space.PX_32 };
obj.allSectionsContainer = { marginBottom: importDefault(dependencyMap[6]).space.PX_80 };
let closure_13 = obj.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[6]).space.PX_80 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx");

export default function SettingsQuestPreviewScreen() {
  let tmp17;
  let obj = arg1(dependencyMap[8]);
  const params = obj.useRoute().params;
  const arg1 = params;
  const tmp = callback3();
  const importDefault = tmp;
  let questId;
  if (null != params) {
    questId = params.questId;
  }
  const tmp4 = callback(React.useState(questId), 2);
  const first = tmp4[0];
  const dependencyMap = first;
  let callback = tmp6;
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_8];
  const items1 = [first];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let quest;
    if (null != first) {
      quest = callback2.getQuest(first);
    }
    return quest;
  }, items1);
  const React = stateFromStores;
  let obj2 = arg1(dependencyMap[9]);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => memo.theme);
  const items3 = [stateFromStores];
  callback = React.useCallback(() => {
    let tmp = null;
    if (null != stateFromStores) {
      const obj = { quest: stateFromStores };
      tmp = callback(params(first[10]).QuestCardPreview, obj);
    }
    return tmp;
  }, items3);
  const items4 = [first, stateFromStores1, ];
  let userStatus;
  if (null != stateFromStores) {
    userStatus = stateFromStores.userStatus;
  }
  items4[2] = userStatus;
  const callback1 = React.useCallback(() => {
    if (null == first) {
      return null;
    } else {
      let completedAt;
      if (null != stateFromStores) {
        const userStatus = stateFromStores.userStatus;
        if (null != userStatus) {
          completedAt = userStatus.completedAt;
        }
      }
      let progress;
      if (null != stateFromStores) {
        const userStatus2 = stateFromStores.userStatus;
        if (null != userStatus2) {
          progress = userStatus2.progress;
        }
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp16 + "-" + tmp17 + "-" + completedAt + "-" + progress;
      const obj = { questId: first };
      return callback(params(first[11]).QuestEmbedPreview, obj, combined);
    }
  }, items4);
  const callback2 = React.useCallback(() => null, []);
  closure_8 = callback2;
  const items5 = [stateFromStores, first, callback, callback1, callback2, tmp.allSectionsContainer];
  const memo = React.useMemo(() => {
    let obj = { id: "all" };
    const intl = params(first[12]).intl;
    obj.label = intl.string(params(first[12]).t.Y9DnPa);
    let tmp = null;
    if (null != stateFromStores) {
      tmp = null;
      if (null != first) {
        obj = { style: tmp.allSectionsContainer };
        const items = [callback(), callback1()];
        obj.children = items;
        tmp = first1(stateFromStores1, obj);
      }
    }
    obj.page = tmp;
    const items1 = [obj, , , ];
    obj = { id: "bar" };
    const intl2 = params(first[12]).intl;
    obj.label = intl2.string(params(first[12]).t.uL4oBf);
    obj.page = callback2();
    items1[1] = obj;
    const obj1 = { id: "card" };
    const intl3 = params(first[12]).intl;
    obj1.label = intl3.string(params(first[12]).t.MAvIf1);
    obj1.page = callback();
    items1[2] = obj1;
    const obj2 = { id: "embed" };
    const intl4 = params(first[12]).intl;
    obj2.label = intl4.string(params(first[12]).t.AswoU2);
    obj2.page = callback1();
    items1[3] = obj2;
    return items1;
  }, items5);
  closure_9 = memo;
  [tmp17, closure_10] = callback(React.useState(0), 2);
  const tmp18 = callback(React.useState(0), 2);
  const first1 = tmp18[0];
  const callback3 = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = arg1(dependencyMap[13]);
  const segmentedControlState = obj3.useSegmentedControlState({ items: memo, pageWidth: tmp17, defaultIndex: 0, onPageChange: tmp18[1] });
  const items6 = [first1, memo];
  let questId1;
  const memo1 = React.useMemo(() => {
    let id;
    if (null != memo[closure_11]) {
      id = tmp.id;
    }
    let tmp3 = "all" === id;
    if (!tmp3) {
      tmp3 = "bar" === id;
    }
    return tmp3;
  }, items6);
  if (null != params) {
    questId1 = params.questId;
  }
  const items7 = [questId1];
  const effect = React.useEffect(() => {
    let questId;
    if (null != params) {
      questId = params.questId;
    }
    if (null != questId) {
      tmp6(params.questId);
    }
  }, items7);
  const items8 = [first];
  const effect1 = React.useEffect(() => {
    if (null != first) {
      const questPreview = params(first[14]).fetchQuestPreview(first);
      const obj = params(first[14]);
    }
  }, items8);
  const items9 = [first];
  const effect2 = React.useEffect(() => {
    function listener(arg0) {
      let tmp2 = null != closure_2;
      if (tmp2) {
        tmp2 = tmp === closure_2;
      }
      if (tmp2) {
        const questPreview = listener(closure_2[14]).fetchQuestPreview(closure_2);
        const obj = listener(closure_2[14]);
      }
    }
    const params = listener;
    const subscription = tmp(first[15]).subscribe("QUEST_PREVIEW_UPDATE", listener);
    return () => {
      callback(closure_2[15]).unsubscribe("QUEST_PREVIEW_UPDATE", listener);
    };
  }, items9);
  const items10 = [first];
  const callback4 = React.useCallback(() => {
    if (null != first) {
      const questPreview = params(first[14]).fetchQuestPreview(first);
      const obj = params(first[14]);
    }
  }, items10);
  let obj4 = arg1(dependencyMap[9]);
  const items11 = [closure_8];
  const items12 = [first];
  const stateFromStores2 = obj4.useStateFromStores(items11, () => {
    let result = null != first;
    if (result) {
      result = callback2.isFetchingQuestPreview(first);
    }
    return result;
  }, items12);
  let obj5 = arg1(dependencyMap[9]);
  const items13 = [closure_8];
  const items14 = [first];
  const stateFromStores3 = obj5.useStateFromStores(items13, () => {
    let fetchQuestPreviewError = null;
    if (null != first) {
      fetchQuestPreviewError = callback2.getFetchQuestPreviewError(first);
    }
    return fetchQuestPreviewError;
  }, items14);
  if (stateFromStores2) {
    if (null == stateFromStores) {
      obj = { style: tmp.container };
      obj = { style: tmp.activityIndicator };
      obj.children = callback2(callback, obj);
      let tmp30Result = callback2(stateFromStores1, obj);
    }
    return tmp30Result;
  }
  obj1 = { style: tmp.container };
  obj2 = { style: tmp.controlBarContainer, children: callback2(arg1(dependencyMap[16]).MobileQuestPreviewControlBar, { questId: first, setQuestId: tmp6, refreshQuest: callback4 }) };
  const items15 = [callback2(stateFromStores1, obj2), , ];
  let tmp32 = null != stateFromStores && null == stateFromStores3;
  if (tmp32) {
    obj3 = {};
    obj4 = { style: tmp.segmentedControlContainer };
    obj5 = { state: segmentedControlState };
    obj4.children = callback2(arg1(dependencyMap[17]).SegmentedControl, obj5);
    const items16 = [callback2(stateFromStores1, obj4), ];
    const obj6 = { style: tmp.pagesContainer, onLayout: callback3 };
    const obj7 = { state: segmentedControlState };
    obj6.children = callback2(arg1(dependencyMap[18]).SegmentedControlPages, obj7);
    items16[1] = callback2(callback1, obj6);
    obj3.children = items16;
    tmp32 = first1(closure_12, obj3);
  }
  items15[1] = tmp32;
  items15[2] = callback2(arg1(dependencyMap[19]).QuestBarPreview, { quest: stateFromStores, isVisible: memo1 });
  obj1.children = items15;
  tmp30Result = first1(stateFromStores1, obj1);
};
