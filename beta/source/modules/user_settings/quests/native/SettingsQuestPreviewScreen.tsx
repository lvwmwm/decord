// Module ID: 17775
// Function ID: 17776
// Name: SettingsQuestPreviewScreen
// Dependencies: [32, 19, 17, 8808, 1192, 21, 575, 5306, 1503, 504, 17776, 17778, 1113, 7994, 7983, 10133, 572, 17779, 11251, 14944, 17782, 2]
// Exports: default

// Module 17775 (SettingsQuestPreviewScreen)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import QuestActionCreators from "QuestActionCreators" /* 10133 */;
import QuestCardPreview from "QuestCardPreview" /* 17776 */;
import QuestEmbedPreview from "QuestEmbedPreview" /* 17778 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestStore from "QuestStore" /* 8808 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_192 = nativeDefault.space.PX_192;
let createStyles = createStyles_mod;
let obj = { container: obj2, controlBarContainer: obj3, segmentedControlContainer: { paddingHorizontal: PX_16 }, pagesContainer: { flex: 1, width: "100%" }, activityIndicator: obj4, allSectionsContainer: { marginBottom: PX_192 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: PX_16, paddingTop: PX_16 / 2, paddingBottom: PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_32 };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/quests/native/SettingsQuestPreviewScreen.tsx");

export default function SettingsQuestPreviewScreen() {
  let callback2;
  let closure_1;
  let closure_3;
  let items15;
  let items16;
  let memo;
  let obj11;
  let obj4;
  let obj9;
  let onLayout;
  let params;
  let questId;
  let ref;
  let stateFromStores;
  let tmp8;
  const tmp = params;
  let tmp2 = questId;
  let obj = params(questId[8]);
  params = obj.useRoute().params;
  let tmp3 = closure_13();
  importDefault = tmp3;
  let obj2 = stateFromStores;
  questId = undefined;
  const useState = stateFromStores.useState;
  if (params != null) {
    questId = params.questId;
  }
  [questId, tmp8] = useState(questId);
  const tmp5 = _slicedToArray;
  _slicedToArray = tmp8;
  let items = [callback2];
  let items1 = [questId];
  const tmpResult = tmp(tmp2[9]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    let quest;
    if (null != first) {
      quest = QuestStore.getQuest(tmp);
    }
    return quest;
  }, items1);
  const items2 = [memo];
  const tmpResult5 = tmp(tmp2[9]);
  const stateFromStores1 = tmpResult5.useStateFromStores(items2, () => memo.theme);
  const items3 = [stateFromStores];
  const callback = obj2.useCallback(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { quest: tmp };
      tmp2 = authStore(QuestCardPreview.QuestCardPreview, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [questId, stateFromStores1, ];
  let userStatus;
  const useCallback = obj2.useCallback;
  if (stateFromStores != null) {
    userStatus = stateFromStores.userStatus;
  }
  items4[2] = userStatus;
  const callback1 = useCallback(() => {
    if (null == first) {
      return null;
    } else {
      let completedAt;
      if (stateFromStores != null) {
        const userStatus = tmp14.userStatus;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
      }
      let progress;
      if (stateFromStores != null) {
        const userStatus2 = tmp14.userStatus;
        if (userStatus2 != null) {
          progress = userStatus2.progress;
        }
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp + "-" + tmp13 + "-" + completedAt + "-" + progress;
      const obj = { questId: first };
      return authStore(QuestEmbedPreview.QuestEmbedPreview, obj, combined);
    }
  }, items4);
  callback2 = obj2.useCallback(() => null, []);
  const items5 = [stateFromStores, questId, callback, callback1, callback2, tmp3.allSectionsContainer];
  memo = obj2.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let tmp3;
    const obj = { id: "all", label: intl.string(intl5.t.Y9DnPa), page: tmp3 };
    intl = intl5.intl;
    tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = null;
      if (null != first) {
        const obj2 = { style: closure_1.allSectionsContainer, children: items };
        items = [callback(), callback1()];
        tmp3 = unpackModuleId(hasOwnProperty, obj2);
      }
    }
    const items1 = [obj, , , ];
    const obj3 = { id: "bar", label: intl2.string(intl5.t.uL4oBf), page: callback2() };
    intl2 = tmp(1113).intl;
    items1[1] = obj3;
    const obj4 = { id: "card", label: intl3.string(intl5.t.MAvIf1), page: callback() };
    intl3 = tmp(1113).intl;
    items1[2] = obj4;
    const obj5 = { id: "embed", label: intl4.string(intl5.t.AswoU2), page: callback1() };
    intl4 = tmp(1113).intl;
    items1[3] = obj5;
    return items1;
  }, items5);
  const items6 = [tmp9];
  const items7 = [questId];
  const tmpResult6 = tmp(tmp2[9]);
  const stateFromStores2 = tmpResult6.useStateFromStores(items6, () => {
    let fetchQuestPreviewError = null;
    if (null != first) {
      fetchQuestPreviewError = QuestStore.getFetchQuestPreviewError(tmp);
    }
    return fetchQuestPreviewError;
  }, items7);
  let tmp19 = null != stateFromStores;
  const tmp18 = require("useMeasuredLayout");
  if (tmp19) {
    tmp19 = null == stateFromStores2;
  }
  const tmp18Result = tmp18({ isMounted: tmp19 });
  const width = tmp18Result.width;
  let num = 0;
  ({ ref, onLayout } = tmp18Result);
  if (undefined !== width) {
    num = width;
  }
  const tmp5Result = tmp5(obj2.useState(0), 2);
  const first1 = tmp5Result[0];
  const tmp23 = tmp5Result[1];
  const tmpResult7 = tmp(tmp2[14]);
  const segmentedControlState = tmpResult7.useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: 0, onPageChange: tmp23 });
  const items8 = [first1, memo];
  let questId1;
  const memo1 = obj2.useMemo(() => {
    let id;
    if (memo[first1] != null) {
      id = tmp.id;
    }
    return "all" === id || "bar" === id;
  }, items8);
  const useEffect = obj2.useEffect;
  if (params != null) {
    questId1 = params.questId;
  }
  const items9 = [questId1];
  const effect = useEffect(() => {
    questId = undefined;
    if (params != null) {
      questId = tmp.questId;
    }
    if (null != questId) {
      closure_3(params.questId);
    }
  }, items9);
  const items10 = [questId];
  const effect1 = obj2.useEffect(() => {
    if (null != first) {
      const obj = QuestActionCreators;
      const questPreview = obj.fetchQuestPreview(tmp);
    }
  }, items10);
  const items11 = [questId];
  const effect2 = obj2.useEffect(() => {
    function listener(quest_id) {
      const tmp2 = null != questId && quest_id.quest_id === questId;
      if (tmp2) {
        const obj = params(first[15]);
        const questPreview = obj.fetchQuestPreview(tmp);
      }
    }
    let obj = closure_1(first[16]);
    const subscription = obj.subscribe("QUEST_PREVIEW_UPDATE", listener);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("QUEST_PREVIEW_UPDATE", listener);
    };
  }, items11);
  const items12 = [questId];
  const callback3 = obj2.useCallback(() => {
    if (null != first) {
      const obj = QuestActionCreators;
      const questPreview = obj.fetchQuestPreview(tmp);
    }
  }, items12);
  const items13 = [tmp9];
  const items14 = [questId];
  const tmpResult8 = tmp(tmp2[9]);
  if (tmpResult8.useStateFromStores(items13, () => {
    const result = null != first && QuestStore.isFetchingQuestPreview(tmp);
    return result;
  }, items14)) {
    let tmp31Result2;
    if (null == stateFromStores) {
      let obj3 = { style: tmp3.container, children: first1(callback, obj4) };
      obj4 = { animating: true, size: "large", style: tmp3.activityIndicator };
      tmp31Result2 = first1(stateFromStores1, obj3);
    }
    return tmp31Result2;
  }
  let obj5 = { style: tmp3.container, children: items15 };
  items15 = [, , ];
  const obj6 = { style: tmp3.controlBarContainer, children: first1(tmp(tmp2[17]).MobileQuestPreviewControlBar, { questId, setQuestId: tmp8, refreshQuest: callback3 }) };
  items15[0] = first1(stateFromStores1, obj6);
  let tmp31Result = null != stateFromStores && null == stateFromStores2;
  if (tmp31Result) {
    const obj7 = { children: items16 };
    const obj8 = { style: tmp3.segmentedControlContainer, children: first1(tmp(tmp2[18]).SegmentedControl, obj9) };
    obj9 = { state: segmentedControlState };
    items16 = [first1(stateFromStores1, obj8), ];
    const obj10 = { style: tmp3.pagesContainer, ref, onLayout, children: first1(tmp(tmp2[19]).SegmentedControlPages, obj11) };
    obj11 = { state: segmentedControlState };
    items16[1] = first1(callback1, obj10);
    tmp31Result = tmp31(closure_12, obj7);
  }
  items15[1] = tmp31Result;
  items15[2] = first1(tmp(tmp2[20]).QuestBarPreview, { quest: stateFromStores, isVisible: memo1 });
  tmp31Result2 = tmp31(tmp32, obj5);
};
