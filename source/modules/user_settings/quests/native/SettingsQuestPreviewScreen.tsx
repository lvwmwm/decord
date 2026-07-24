// Module ID: 14116
// Function ID: 108488
// Name: SettingsQuestPreviewScreen
// Dependencies: [57, 31, 27, 6941, 1278, 33, 689, 4130, 1457, 566, 14117, 14119, 1212, 8404, 9480, 686, 14120, 8799, 8797, 14125, 2]
// Exports: default

// Module 14116 (SettingsQuestPreviewScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_5, ActivityIndicator: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.controlBarContainer = { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 };
_createForOfIteratorHelperLoose.segmentedControlContainer = { paddingHorizontal: PX_16 };
_createForOfIteratorHelperLoose.pagesContainer = { flex: 1, width: "100%" };
_createForOfIteratorHelperLoose.activityIndicator = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.allSectionsContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_80 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_80 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx");

export default function SettingsQuestPreviewScreen() {
  let closure_10;
  let tmp17;
  let obj = params(first[8]);
  params = obj.useRoute().params;
  let tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let questId;
  if (null != params) {
    questId = params.questId;
  }
  const tmp4 = callback(stateFromStores.useState(questId), 2);
  first = tmp4[0];
  callback = tmp6;
  let obj1 = params(first[9]);
  let items = [callback2];
  let items1 = [first];
  stateFromStores = obj1.useStateFromStores(items, () => {
    let quest;
    if (null != first) {
      quest = callback2.getQuest(first);
    }
    return quest;
  }, items1);
  let obj2 = params(first[9]);
  const items2 = [memo];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => memo.theme);
  const items3 = [stateFromStores];
  callback = stateFromStores.useCallback(() => {
    let tmp = null;
    if (null != stateFromStores) {
      const obj = { quest: stateFromStores };
      tmp = outer1_10(params(first[10]).QuestCardPreview, obj);
    }
    return tmp;
  }, items3);
  const items4 = [first, stateFromStores1, ];
  let userStatus;
  if (null != stateFromStores) {
    userStatus = stateFromStores.userStatus;
  }
  items4[2] = userStatus;
  const callback1 = stateFromStores.useCallback(() => {
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
      return outer1_10(params(first[11]).QuestEmbedPreview, obj, combined);
    }
  }, items4);
  callback2 = stateFromStores.useCallback(() => null, []);
  const items5 = [stateFromStores, first, callback, callback1, callback2, tmp.allSectionsContainer];
  memo = stateFromStores.useMemo(() => {
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
  [tmp17, closure_10] = callback(stateFromStores.useState(0), 2);
  const tmp18 = callback(stateFromStores.useState(0), 2);
  const first1 = tmp18[0];
  const callback3 = stateFromStores.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = params(first[13]);
  const segmentedControlState = obj3.useSegmentedControlState({ items: memo, pageWidth: tmp17, defaultIndex: 0, onPageChange: tmp18[1] });
  const items6 = [first1, memo];
  let questId1;
  const memo1 = stateFromStores.useMemo(() => {
    let id;
    if (null != memo[first1]) {
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
  const effect = stateFromStores.useEffect(() => {
    let questId;
    if (null != params) {
      questId = params.questId;
    }
    if (null != questId) {
      tmp6(params.questId);
    }
  }, items7);
  const items8 = [first];
  const effect1 = stateFromStores.useEffect(() => {
    if (null != first) {
      const questPreview = params(first[14]).fetchQuestPreview(first);
      const obj = params(first[14]);
    }
  }, items8);
  const items9 = [first];
  const effect2 = stateFromStores.useEffect(() => {
    function listener(arg0) {
      let tmp2 = null != outer1_2;
      if (tmp2) {
        tmp2 = tmp === outer1_2;
      }
      if (tmp2) {
        const questPreview = params(first[14]).fetchQuestPreview(outer1_2);
        const obj = params(first[14]);
      }
    }
    const subscription = tmp(first[15]).subscribe("QUEST_PREVIEW_UPDATE", listener);
    return () => {
      callback(first[15]).unsubscribe("QUEST_PREVIEW_UPDATE", listener);
    };
  }, items9);
  const items10 = [first];
  const callback4 = stateFromStores.useCallback(() => {
    if (null != first) {
      const questPreview = params(first[14]).fetchQuestPreview(first);
      const obj = params(first[14]);
    }
  }, items10);
  let obj4 = params(first[9]);
  const items11 = [callback2];
  const items12 = [first];
  const stateFromStores2 = obj4.useStateFromStores(items11, () => {
    let result = null != first;
    if (result) {
      result = callback2.isFetchingQuestPreview(first);
    }
    return result;
  }, items12);
  let obj5 = params(first[9]);
  const items13 = [callback2];
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
      obj = { animating: true, size: "large", style: tmp.activityIndicator };
      obj.children = callback2(callback, obj);
      let tmp30Result = callback2(stateFromStores1, obj);
    }
    return tmp30Result;
  }
  obj1 = { style: tmp.container };
  obj2 = { style: tmp.controlBarContainer, children: callback2(params(first[16]).MobileQuestPreviewControlBar, { questId: first, setQuestId: tmp6, refreshQuest: callback4 }) };
  const items15 = [callback2(stateFromStores1, obj2), , ];
  let tmp32 = null != stateFromStores && null == stateFromStores3;
  if (tmp32) {
    obj3 = {};
    obj4 = { style: tmp.segmentedControlContainer };
    obj5 = { state: segmentedControlState };
    obj4.children = callback2(params(first[17]).SegmentedControl, obj5);
    const items16 = [callback2(stateFromStores1, obj4), ];
    const obj6 = { style: tmp.pagesContainer, onLayout: callback3 };
    const obj7 = { state: segmentedControlState };
    obj6.children = callback2(params(first[18]).SegmentedControlPages, obj7);
    items16[1] = callback2(callback1, obj6);
    obj3.children = items16;
    tmp32 = first1(closure_12, obj3);
  }
  items15[1] = tmp32;
  items15[2] = callback2(params(first[19]).QuestBarPreview, { quest: stateFromStores, isVisible: memo1 });
  obj1.children = items15;
  tmp30Result = first1(stateFromStores1, obj1);
};
