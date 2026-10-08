// Module ID: 16282
// Function ID: 16283
// Name: HappeningNow
// Dependencies: [32, 109, 19, 17, 15391, 1085, 21, 6754, 5090, 587, 6326, 558, 576, 16283, 6637, 1264, 5392, 1503, 16284, 6841, 6865, 16291, 16292, 4810, 10352, 12, 1126, 8600, 16293, 16294, 16311, 16312, 16313, 16297, 16310, 16314, 16309, 16296, 1387, 2]

// Module 16282 (HappeningNow)
import _mod12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import updateSharedValueIfChanged from "updateSharedValueIfChanged" /* 10352 */;
import HappeningNowAnalytics from "HappeningNowAnalytics" /* 16283 */;
import happeningNowRankingUtils from "happeningNowRankingUtils" /* 16291 */;
import HappeningNowCardPlaceholder from "HappeningNowCardPlaceholder" /* 16293 */;
import HappeningNowCardLiveStageDefault from "HappeningNowCardLiveStage" /* 16294 */;
import HappeningNowCardUnifiedVCDefault from "HappeningNowCardUnifiedVC" /* 16296 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 16297 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 16309 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 16310 */;
import HappeningNowCardEventDefault from "HappeningNowCardEvent" /* 16311 */;
import HappeningNowCardActiveChannelDefault from "HappeningNowCardActiveChannel" /* 16312 */;
import HappeningNowCardUserDefault from "HappeningNowCardUser" /* 16313 */;
import HappeningNowActions from "HappeningNowActions" /* 16314 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HappeningNowConstants from "HappeningNowConstants" /* 15391 */;
import ReanimatedHelperTypes from "ReanimatedHelperTypes" /* 6754 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, scrollToOffsetResult, viewableItems;

let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
function renderCard(kind, fullWidth) {
  if ("placeholder" !== kind.kind) {
    if (!fullWidth.loading) {
      switch (kind.kind) {
        case "live-guild-stage":
        {
          HappeningNowCardLiveStageDefault;
          const merged = Object.assign(kind);
          const merged1 = Object.assign(fullWidth);
          return <tmp112 />;
        }
        case "guild-event":
        {
          HappeningNowCardEventDefault;
          const merged2 = Object.assign(kind);
          const merged3 = Object.assign(fullWidth);
          return <tmp102 />;
        }
        case "active-channel":
        {
          HappeningNowCardActiveChannelDefault;
          const merged4 = Object.assign(kind);
          const merged5 = Object.assign(fullWidth);
          return <tmp92 />;
        }
        case "user":
        {
          HappeningNowCardUserDefault;
          const merged6 = Object.assign(kind);
          const merged7 = Object.assign(fullWidth);
          return <tmp82 />;
        }
        case "activity":
        {
          HappeningNowCardActivityDefault;
          const merged8 = Object.assign(kind);
          const merged9 = Object.assign(fullWidth);
          return <tmp72 />;
        }
        case "voice":
        {
          HappeningNowCardVoiceDefault;
          const merged10 = Object.assign(kind);
          const merged11 = Object.assign(fullWidth);
          return <tmp62 />;
        }
        case "invite":
        {
          const HappeningNowCardInvite = HappeningNowActions.HappeningNowCardInvite;
          const merged12 = Object.assign(kind);
          const merged13 = Object.assign(fullWidth);
          return <HappeningNowCardInvite />;
        }
        case "customize-guild":
        {
          const HappeningNowCardCustomizeGuild = HappeningNowActions.HappeningNowCardCustomizeGuild;
          const merged14 = Object.assign(kind);
          const merged15 = Object.assign(fullWidth);
          return <HappeningNowCardCustomizeGuild />;
        }
        case "create-channel":
        {
          const HappeningNowCardCreateChannel = HappeningNowActions.HappeningNowCardCreateChannel;
          const merged16 = Object.assign(kind);
          const merged17 = Object.assign(fullWidth);
          return <HappeningNowCardCreateChannel />;
        }
        case "student-hub-add-channel":
        {
          const HappeningNowStudentHubAddServer = HappeningNowActions.HappeningNowStudentHubAddServer;
          const merged18 = Object.assign(kind);
          const merged19 = Object.assign(fullWidth);
          return <HappeningNowStudentHubAddServer />;
        }
        case "embedded-activity":
        {
          HappeningNowCardEmbeddedActivityDefault;
          const merged20 = Object.assign(kind);
          const merged21 = Object.assign(fullWidth);
          return <tmp15 cardKey={keyExtractor(arg0)} />;
        }
        case "unified-vc":
        {
          HappeningNowCardUnifiedVCDefault;
          const merged22 = Object.assign(kind);
          const merged23 = Object.assign(fullWidth);
          return <tmp4 cardKey={keyExtractor(arg0)} />;
        }
        default:
        {
          const obj13 = GlobalUtils;
          obj13.assertNever(kind);
          break;
        }
      }
    }
  }
  return jsx(HappeningNowCardPlaceholder.HappeningNowCardPlaceholder, { fullWidth: fullWidth.fullwidth, panelVariant: fullWidth.panelVariant });
}
function keyExtractor(kind) {
  let combined;
  let combined1;
  let userId2;
  switch (kind.kind) {
    case "placeholder":
    {
      const _HermesInternal7 = HermesInternal;
      return "" + kind.kind + "-" + kind.index;
    }
    case "live-guild-stage":
    {
      const _HermesInternal6 = HermesInternal;
      return "" + kind.kind + "-" + kind.stage.id;
    }
    case "guild-event":
    {
      const _HermesInternal5 = HermesInternal;
      return "" + kind.kind + "-" + kind.event.id;
    }
    case "active-channel":
    {
      const _HermesInternal4 = HermesInternal;
      return "" + kind.kind + "-" + kind.channelId;
    }
    case "user":
    {
      let kind3;
      let userId3;
      ({ kind: kind3, userId: userId3 } = kind);
      let _HermesInternal3 = HermesInternal;
      combined = "" + kind3 + "-" + userId3;
      return combined;
    }
    case "activity":
    {
      let kind3;
      let userId3;
      ({ kind: kind3, userId: userId3 } = kind);
      let _HermesInternal3 = HermesInternal;
      combined = "" + kind3 + "-" + userId3;
      return combined;
    }
    case "voice":
    {
      let kind2;
      let voiceState;
      ({ kind: kind2, voiceState } = kind);
      userId2 = voiceState.channelId ?? kind.userId;
      let _HermesInternal2 = HermesInternal;
      combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    }
    case "unified-vc":
    {
      let kind2;
      let voiceState;
      ({ kind: kind2, voiceState } = kind);
      userId2 = voiceState.channelId ?? kind.userId;
      let _HermesInternal2 = HermesInternal;
      combined1 = "" + kind2 + "-" + userId2;
      return combined1;
    }
    case "invite":
    {
      return kind.kind;
    }
    case "customize-guild":
    {
      return kind.kind;
    }
    case "create-channel":
    {
      return kind.kind;
    }
    case "student-hub-add-channel":
    {
      return kind.kind;
    }
    case "embedded-activity":
    {
      const kindValue = kind.kind;
      const userId = kind.voiceState.channelId ?? kind.userId;
      const _HermesInternal = HermesInternal;
      return "" + kindValue + "-" + userId + "-" + kind.activity.applicationId;
    }
    default:
    {
      const obj = GlobalUtils;
      obj.assertNever(kind);
      break;
    }
  }
}
function getItemType(kind) {
  return kind.kind;
}
let ref = ["ref"];
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: c9, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: c10, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: unpackModuleId } = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const createContext = react.createContext;
const context = createContext(ReanimatedHelperTypes.createFakeSharedValue([]));
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING }, loading: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
let closure_15 = createStyles.createStyles(obj);
const Gesture = LegacyBaseButton.Gesture;
const NativeResult = Gesture.Native();
const gesture = NativeResult.disallowInterruption(true);
const maintainVisibleContentPosition = { disabled: true };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNowScrollView(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged = Object.assign(tmp4);
  const tmp11 = <GestureDetector gesture={gesture}>{null}</GestureDetector>;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : (function HappeningNowScrollView(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged1 = Object.assign(merged);
  return <GestureDetector gesture={gesture}>{null}</GestureDetector>;
});
const renderScrollComponent = tmp6;
tmp6.displayName = "HappeningNowScrollView";
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackActivityCardsView(isFocused, arg1) {
  let tmp3;
  let tmp6;
  _require = isFocused;
  importDefault = arg1;
  let tmp = isFocused;
  let obj = require("react");
  const cResult = obj.c(10);
  isFocused = isFocused.isFocused;
  let obj2 = react;
  let closure_3 = react.useRef(isFocused);
  if (cResult[0] !== arg1) {
    const fn = function c() {
      let data;
      const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length), card_types: data.map((item) => closure_1_11[item.kind]) };
      data = closure_3.current.data;
      const obj2 = HappeningNowAnalytics;
      const merged = Object.assign(obj2.getAffinityProperties(closure_3.current.data));
      return obj;
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const tmp5 = require("useStableCallback")(tmp3);
  let closure_4 = tmp5;
  const tmp4 = importDefault;
  if (cResult[2] !== isFocused) {
    const fn2 = function p() {
      closure_3.current = current;
    };
    cResult[2] = isFocused;
    cResult[3] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  const effect = obj2.useEffect(tmp6);
  if (cResult[4] === tmp5) {
    let tmp8;
    let tmp9;
    let tmp11;
    if (cResult[5] === isFocused) {
      tmp8 = cResult[6];
      tmp9 = cResult[7];
    }
    const effect1 = obj2.useEffect(tmp8, tmp9);
    if (cResult[8] !== tmp5) {
      const fn4 = function h() {
        return () => {
          current = ref.current;
          const tmp = !current.loading && current.data.length > 0;
          if (tmp) {
            const obj = closure_1(isFocused[15]);
            obj.track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
          }
        };
      };
      cResult[8] = tmp5;
      cResult[9] = fn4;
      tmp11 = fn4;
    } else {
      tmp11 = cResult[9];
    }
    tmp4(tmp[16])(tmp11);
  }
  const fn3 = function v() {
    let tmp = !isFocused;
    if (tmp) {
      current = closure_3.current;
      tmp = !current.loading && current.data.length > 0;
      const tmp3 = !current.loading && current.data.length > 0;
    }
    if (tmp) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.ACTIVITY_CARDS_VIEWED, closure_4());
    }
  };
  const items = [isFocused, tmp5];
  cResult[4] = tmp5;
  cResult[5] = isFocused;
  cResult[6] = fn3;
  cResult[7] = items;
  tmp9 = items;
  tmp8 = fn3;
}) : (function useTrackActivityCardsView(isFocused, arg1) {
  let current = isFocused;
  importDefault = arg1;
  isFocused = isFocused.isFocused;
  let closure_3 = react.useRef(isFocused);
  let tmp = require("useStableCallback")(() => {
    let data;
    const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length), card_types: data.map((item) => closure_1_11[item.kind]) };
    data = closure_3.current.data;
    const obj2 = HappeningNowAnalytics;
    const merged = Object.assign(obj2.getAffinityProperties(closure_3.current.data));
    return obj;
  });
  let closure_4 = tmp;
  const effect = react.useEffect(() => {
    closure_3.current = current;
  });
  const items = [isFocused, tmp];
  const effect1 = react.useEffect(() => {
    let tmp = !isFocused;
    if (tmp) {
      current = closure_3.current;
      tmp = !current.loading && current.data.length > 0;
      const tmp3 = !current.loading && current.data.length > 0;
    }
    if (tmp) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.ACTIVITY_CARDS_VIEWED, closure_4());
    }
  }, items);
  require("useMountEffect")(() => () => {
    current = ref.current;
    const tmp = !current.loading && current.data.length > 0;
    if (tmp) {
      const obj = closure_1(isFocused[15]);
      obj.track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
    }
  });
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNow(listRef) {
  let arr;
  let loading;
  let sharedValue;
  let tmp10;
  let tmp6;
  let tmp = listRef;
  const tmp2 = dependencyMap;
  let obj = listRef(576);
  const cResult = obj.c(46);
  listRef = listRef.listRef;
  const cards = listRef.cards;
  const tmp4 = closure_15();
  const obj2 = listRef(1503);
  const isFocused = obj2.useIsFocused();
  if (cResult[0] !== isFocused) {
    const obj3 = { withoutUserCards: "IconComponent", guildId: "Array", showMultipleActivitiesPerChannel: "OTA Test", isFocused };
    cResult[0] = isFocused;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  [arr, tmp10] = isFocused(16284)(cards, tmp6);
  dependencyMap = tmp10;
  _slicedToArray(isFocused(16284)(cards, tmp6), 2);
  const tmp11 = isFocused(6841);
  const analyticsLocations = tmp11(isFocused(6865).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
  ref = sharedValue.useRef(0);
  const obj4 = sharedValue;
  if (cResult[2] === arr) {
    if (cResult[3] === isFocused) {
      let tmp13;
      if (cResult[4] === tmp10) {
        tmp13 = cResult[5];
      }
      closure_19(tmp13, ref);
      if (cResult[6] === isFocused) {
        let tmp16;
        let tmp17;
        let tmp20;
        if (cResult[7] === listRef) {
          tmp16 = cResult[8];
          tmp17 = cResult[9];
        }
        const effect = obj4.useEffect(tmp16, tmp17);
        const _Symbol = Symbol;
        class N {
          constructor() {
            tmp = closure_1;
            if (!tmp) {
              tmp2 = listRef;
              current = listRef.current;
              tmp3 = null;
              if (current != null) {
                scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
              }
              tmp5 = closure_3;
              num = 0;
              closure_3.current = 0;
            }
            return;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
          cResult[10] = A;
          tmp20 = A;
        } else {
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
        }
        const findIndexResult = arr.findIndex(tmp20);
        _slicedToArray = findIndexResult;
        let num8 = Infinity;
        if (findIndexResult >= 0) {
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
          num8 = closure_9 * findIndexResult;
        }
        if (cResult[11] === findIndexResult) {
          class A {
            constructor(arg0) {
              obj = listRef(closure_2[21]);
              return obj.cardSize(listRef) === closure_1_10;
            }
          }
          const first = tmp8(tmp7(16292)(num8, tmp22), 2)[0];
          _slicedToArray(isFocused(16292)(num8, tmp22), 2);
          class N {
            constructor() {
              tmp = closure_1;
              if (!tmp) {
                tmp2 = listRef;
                current = listRef.current;
                tmp3 = null;
                if (current != null) {
                  scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                }
                tmp5 = closure_3;
                num = 0;
                closure_3.current = 0;
              }
              return;
            }
          }
          if (cResult[14] !== arr) {
            class A {
              constructor(arg0) {
                obj = listRef(closure_2[21]);
                return obj.cardSize(listRef) === closure_1_10;
              }
            }
            let result = obj6.filterHappeningNowCards(arr);
            const tmpResult = tmp(16291);
            const result1 = tmpResult.sortHappeningNowCards(result);
            class N {
              constructor() {
                tmp = closure_1;
                if (!tmp) {
                  tmp2 = listRef;
                  current = listRef.current;
                  tmp3 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp5 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
            cResult[14] = arr;
            cResult[15] = result1;
          } else {
            class A {
              constructor(arg0) {
                obj = listRef(closure_2[21]);
                return obj.cardSize(listRef) === closure_1_10;
              }
            }
          }
          const tmpResult3 = tmp(16292);
          const happeningNowScrollSnapping = tmpResult3.useHappeningNowScrollSnapping(listRef);
          if (cResult[16] !== tmp10) {
            class Y {
              constructor(arg0) {
                obj = { index: listRef.index, loading: closure_2, panelVariant: true };
                return renderCard(listRef.item, obj);
              }
            }
            cResult[16] = tmp10;
            class N {
              constructor() {
                tmp = closure_1;
                if (!tmp) {
                  tmp2 = listRef;
                  current = listRef.current;
                  tmp3 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp5 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
          } else {
            class Y {
              constructor(arg0) {
                obj = { index: listRef.index, loading: closure_2, panelVariant: true };
                return renderCard(listRef.item, obj);
              }
            }
          }
          const tmpResult4 = tmp(4810);
          sharedValue = tmpResult4.useSharedValue([]);
          if (cResult[18] !== sharedValue) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                return;
              }
            }
            cResult[18] = sharedValue;
            class N {
              constructor() {
                tmp = closure_1;
                if (!tmp) {
                  tmp2 = listRef;
                  current = listRef.current;
                  tmp3 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp5 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
          } else {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                return;
              }
            }
          }
          class D {
            constructor(arg0, arg1) {
              sum = arg1 + listRef;
              if (sum < closure_5) {
                tmp6 = closure_9;
                sum1 = sum / closure_9 | 0;
              } else {
                tmp3 = closure_4;
                tmp4 = closure_10;
                sum1 = closure_4 + ((sum - tmp2) / closure_10 | 0);
              }
              if (sum1 > closure_3.current) {
                closure_3.current = sum1;
              }
              return;
            }
          }
          if (0 === arr.length) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                return;
              }
            }
          }
          if (tmp10) {
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                return;
              }
            }
            const obj5 = { index: 0, loading: tmp10, fullwidth: true, panelVariant: true };
            const tmp43 = renderCard(arr.length > 0 ? arr[0] : { kind: "placeholder", index: 0 }, obj5);
            class N {
              constructor() {
                tmp = closure_1;
                if (!tmp) {
                  tmp2 = listRef;
                  current = listRef.current;
                  tmp3 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp5 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
            cResult[23] = arr[0];
            cResult[24] = arr.length;
            cResult[25] = tmp10;
            cResult[26] = tmp43;
          } else {
            let tmp34;
            class X {
              constructor(arg0) {
                viewableItems = listRef.viewableItems;
                obj = closure_0(closure_2[24]);
                result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                return;
              }
            }
            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[24]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                  return;
                }
              }
              const stringResult = obj10.string(tmp(1126).t["1+boPi"]);
              class N {
                constructor() {
                  tmp = closure_1;
                  if (!tmp) {
                    tmp2 = listRef;
                    current = listRef.current;
                    tmp3 = null;
                    if (current != null) {
                      scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                    }
                    tmp5 = closure_3;
                    num = 0;
                    closure_3.current = 0;
                  }
                  return;
                }
              }
              tmp34 = stringResult;
            } else {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[24]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                  return;
                }
              }
            }
            if (cResult[31] === tmp33) {
              class X {
                constructor(arg0) {
                  viewableItems = listRef.viewableItems;
                  obj = closure_0(closure_2[24]);
                  result = obj.updateSharedValueArrayIfChanged(closure_6, viewableItems.map(() => { /* body not rendered: F147099 */ }));
                  return;
                }
              }
            }
            class N {
              constructor() {
                tmp = closure_1;
                if (!tmp) {
                  tmp2 = listRef;
                  current = listRef.current;
                  tmp3 = null;
                  if (current != null) {
                    scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
                  }
                  tmp5 = closure_3;
                  num = 0;
                  closure_3.current = 0;
                }
                return;
              }
            }
            class D {
              constructor(arg0, arg1) {
                sum = arg1 + listRef;
                if (sum < closure_5) {
                  tmp6 = closure_9;
                  sum1 = sum / closure_9 | 0;
                } else {
                  tmp3 = closure_4;
                  tmp4 = closure_10;
                  sum1 = closure_4 + ((sum - tmp2) / closure_10 | 0);
                }
                if (sum1 > closure_3.current) {
                  closure_3.current = sum1;
                }
                return;
              }
            }
            cResult[31] = tmp33;
            cResult[32] = first;
            cResult[33] = tmp26;
            cResult[34] = listRef;
            cResult[35] = happeningNowScrollSnapping;
            cResult[36] = tmp30;
            cResult[37] = tmp25;
            cResult[38] = tmp4.containerInner;
            cResult[39] = jsx(tmp(8600).FlashList, { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: first, maintainVisibleContentPosition, snapToInterval: tmp25, snapToOffsets: null, showsHorizontalScrollIndicator: false, accessibilityLabel: tmp34, contentContainerStyle: tmp4.containerInner, data: tmp26, renderItem: tmp30, onViewableItemsChanged: tmp33, keyExtractor, getItemType });
            const tmp41 = jsx(tmp(8600).FlashList, { ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: first, maintainVisibleContentPosition, snapToInterval: tmp25, snapToOffsets: null, showsHorizontalScrollIndicator: false, accessibilityLabel: tmp34, contentContainerStyle: tmp4.containerInner, data: tmp26, renderItem: tmp30, onViewableItemsChanged: tmp33, keyExtractor, getItemType });
          }
        }
        class D {
          constructor(arg0, arg1) {
            sum = arg1 + listRef;
            if (sum < closure_5) {
              tmp6 = closure_9;
              sum1 = sum / closure_9 | 0;
            } else {
              tmp3 = closure_4;
              tmp4 = closure_10;
              sum1 = closure_4 + ((sum - tmp2) / closure_10 | 0);
            }
            if (sum1 > closure_3.current) {
              closure_3.current = sum1;
            }
            return;
          }
        }
        cResult[11] = findIndexResult;
        cResult[12] = num8;
        cResult[13] = D;
      }
      class N {
        constructor() {
          tmp = closure_1;
          if (!tmp) {
            tmp2 = listRef;
            current = listRef.current;
            tmp3 = null;
            if (current != null) {
              scrollToOffsetResult = current.scrollToOffset({ offset: 0, animated: false });
            }
            tmp5 = closure_3;
            num = 0;
            closure_3.current = 0;
          }
          return;
        }
      }
      const items = [isFocused, listRef];
      cResult[6] = isFocused;
      cResult[7] = listRef;
      cResult[9] = items;
      tmp17 = items;
      tmp16 = N;
    }
  }
  const obj8 = { data: arr, isFocused, loading: tmp10 };
  cResult[2] = arr;
  cResult[3] = isFocused;
  cResult[4] = tmp10;
  cResult[5] = obj8;
  tmp13 = obj8;
}) : (function HappeningNow(listRef) {
  let intl;
  let obj4;
  let tmp18;
  let tmp28Result;
  listRef = listRef.listRef;
  let data;
  ref = undefined;
  let num;
  let sharedValue;
  let callback2;
  const cards = listRef.cards;
  let tmp = closure_15();
  const tmp2 = listRef;
  let obj = listRef(data[17]);
  const isFocused = obj.useIsFocused();
  const tmp7 = ref(isFocused(data[18])(cards, { withoutUserCards: "IconComponent", guildId: "Array", showMultipleActivitiesPerChannel: "OTA Test", isFocused }), 2);
  data = tmp7[0];
  const loading = tmp8;
  let obj2 = num;
  const tmp9 = isFocused(data[19]);
  const analyticsLocations = tmp9(isFocused(data[20]).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
  const tmp6 = ref;
  ref = num.useRef(0);
  closure_19({ data, isFocused, loading: tmp7[1] }, ref);
  const items = [isFocused, listRef];
  const effect = num.useEffect(() => {
    const tmp = isFocused;
    if (!tmp) {
      const current = listRef.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      ref.current = 0;
    }
  }, items);
  const findIndexResult = data.findIndex((item) => {
    const obj = listRef(first[21]);
    return obj.cardSize(item) === closure_1_10;
  });
  let c5 = findIndexResult;
  num = Infinity;
  const tmp5 = isFocused;
  if (findIndexResult >= 0) {
    num = closure_9 * findIndexResult;
  }
  const items1 = [findIndexResult, num];
  const callback = obj2.useCallback((arg0, arg1) => {
    let sum1;
    const sum = arg1 + arg0;
    if (sum < num) {
      sum1 = sum / React4 | 0;
    } else {
      sum1 = c5 + ((sum - tmp2) / authStore | 0);
    }
    if (sum1 > ref.current) {
      ref.current = sum1;
    }
  }, items1);
  const tmp6Result = tmp6(tmp5(data[22])(num, callback), 2);
  const first1 = tmp6Result[0];
  if (tmp6Result[1]) {
    tmp18 = closure_9;
  }
  const items2 = [data];
  const memo = obj2.useMemo(() => {
    const obj = happeningNowRankingUtils;
    const result = obj.filterHappeningNowCards(first);
    const obj2 = happeningNowRankingUtils;
    return obj2.sortHappeningNowCards(result);
  }, items2);
  const items3 = [tmp7[1]];
  const tmp2Result = tmp2(data[22]);
  const happeningNowScrollSnapping = tmp2Result.useHappeningNowScrollSnapping(listRef);
  const callback1 = obj2.useCallback((index) => {
    const obj = { index: index.index, loading, panelVariant: true };
    return renderCard(index.item, obj);
  }, items3);
  const tmp2Result2 = tmp2(data[23]);
  sharedValue = tmp2Result2.useSharedValue([]);
  const items4 = [sharedValue];
  callback2 = obj2.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const obj = updateSharedValueIfChanged;
    const result = obj.updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => closure_1_21(item.item)));
  }, items4);
  const items5 = [callback2];
  const memo1 = obj2.useMemo(() => {
    const obj = _mod12;
    return obj.debounce(callback2, 130);
  }, items5);
  if (0 === data.length) {
    let tmp27;
    if (!tmp7[1]) {
      tmp27 = <callback2 />;
    }
    return tmp27;
  }
  if (tmp7[1]) {
    const obj3 = { style: tmp.loading, children: renderCard(data.length > 0 ? data[0] : { kind: "placeholder", index: 0 }, obj4) };
    obj4 = { index: 0, loading: tmp7[1], fullwidth: true, panelVariant: true };
    tmp28Result = tmp28(callback2, obj3);
  } else {
    const Provider = context.Provider;
    const obj5 = { value: sharedValue, children: null };
    const AnalyticsLocationProvider = tmp2(tmp3[19]).AnalyticsLocationProvider;
    ({ ref: listRef, horizontal: true, renderScrollComponent, decelerationRate: "fast", onScroll: first1, maintainVisibleContentPosition, snapToInterval: tmp18, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: intl.string(tmp2(data[26]).t["1+boPi"]), contentContainerStyle: tmp.containerInner, data: memo, renderItem: callback1, onViewableItemsChanged: memo1, keyExtractor, getItemType });
    const FlashList = tmp2(tmp3[27]).FlashList;
    intl = tmp2(tmp3[26]).intl;
    tmp28Result = tmp28(Provider, obj5);
  }
  tmp27 = tmp28Result;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default memoResult;
export const ViewableHappeningNowCardKeysContext = context;
