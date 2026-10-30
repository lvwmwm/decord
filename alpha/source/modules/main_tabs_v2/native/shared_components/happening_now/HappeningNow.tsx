// Module ID: 18062
// Function ID: 18063
// Name: HappeningNow
// Dependencies: [32, 19, 17, 17217, 1072, 21, 7236, 5009, 575, 5298, 7125, 18063, 1253, 5588, 1499, 18064, 7320, 7345, 18071, 18072, 5090, 11208, 12, 7288, 1114, 18073, 18074, 18091, 18092, 18093, 18077, 18090, 18094, 18089, 18076, 1380, 2]

// Module 18062 (HappeningNow)
import _mod12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import updateSharedValueIfChanged from "updateSharedValueIfChanged" /* 11208 */;
import happeningNowRankingUtils from "happeningNowRankingUtils" /* 18071 */;
import HappeningNowCardPlaceholder from "HappeningNowCardPlaceholder" /* 18073 */;
import HappeningNowCardLiveStageDefault from "HappeningNowCardLiveStage" /* 18074 */;
import HappeningNowCardUnifiedVCDefault from "HappeningNowCardUnifiedVC" /* 18076 */;
import HappeningNowCardActivityDefault from "HappeningNowCardActivity" /* 18077 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 18089 */;
import HappeningNowCardVoiceDefault from "HappeningNowCardVoice" /* 18090 */;
import HappeningNowCardEventDefault from "HappeningNowCardEvent" /* 18091 */;
import HappeningNowCardActiveChannelDefault from "HappeningNowCardActiveChannel" /* 18092 */;
import HappeningNowCardUserDefault from "HappeningNowCardUser" /* 18093 */;
import HappeningNowActions from "HappeningNowActions" /* 18094 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HappeningNowConstants from "HappeningNowConstants" /* 17217 */;
import ReanimatedHelperTypes from "ReanimatedHelperTypes" /* 7236 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let viewableItems;

let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
class HappeningNowScrollView {
  constructor(ref) {
    ref = ref.ref;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const GestureDetector = LegacyBaseButton.GestureDetector;
    const merged1 = Object.assign(merged);
    return <GestureDetector gesture={gesture}>{null}</GestureDetector>;
  }
}
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
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: metroImportDefault, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: metroImportAll, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: c9 } = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const createContext = react.createContext;
const context = createContext(ReanimatedHelperTypes.createFakeSharedValue([]));
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING }, loading: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
let closure_13 = createStyles.createStyles(obj);
const Gesture = LegacyBaseButton.Gesture;
const NativeResult = Gesture.Native();
const authStore3 = NativeResult.disallowInterruption(true);
const maintainVisibleContentPosition = { disabled: true };
HappeningNowScrollView.displayName = "HappeningNowScrollView";
const memoResult = react.memo(function HappeningNow(listRef) {
  let intl;
  let loading;
  let obj6;
  let tmp21;
  let tmp31Result;
  listRef = listRef.listRef;
  let data;
  _slicedToArray = undefined;
  let ref;
  let sharedValue;
  let callback2;
  const cards = listRef.cards;
  let tmp = closure_13();
  const tmp2 = listRef;
  let tmp3 = data;
  let obj = listRef(data[14]);
  const isFocused1 = obj.useIsFocused();
  let obj2 = { withoutUserCards: "HermesInternal", guildId: "Array", showMultipleActivitiesPerChannel: "Islam", isFocused: isFocused1 };
  const tmp7 = _slicedToArray(isFocused1(data[15])(cards, obj2), 2);
  data = tmp7[0];
  const tmp6 = _slicedToArray;
  const tmp9 = isFocused1(data[16]);
  const analyticsLocations = tmp9(isFocused1(data[17]).ACTIVITIES_HAPPENING_NOW).analyticsLocations;
  ref = ref.useRef(0);
  const obj4 = { data, isFocused: isFocused1, loading: tmp8 };
  const isFocused = obj4.isFocused;
  _slicedToArray = ref.useRef(obj4);
  const tmp11 = isFocused1(data[10])(() => {
    const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(ref.current, closure_3.current.data.length), card_types: data.map((item) => closure_1_9[item.kind]) };
    data = closure_3.current.data;
    const obj2 = listRef(first[11]);
    const merged = Object.assign(obj2.getAffinityProperties(closure_3.current.data));
    return obj;
  });
  let closure_4 = tmp11;
  const effect = ref.useEffect(() => {
    closure_3.current = obj4;
  });
  const items = [isFocused, tmp11];
  const effect1 = ref.useEffect(() => {
    let tmp = !isFocused;
    if (tmp) {
      const current = closure_3.current;
      tmp = !current.loading && current.data.length > 0;
      const tmp3 = !current.loading && current.data.length > 0;
    }
    if (tmp) {
      const obj = isFocused1(first[12]);
      obj.track(constants.ACTIVITY_CARDS_VIEWED, closure_4());
    }
  }, items);
  isFocused1(data[13])(() => () => {
    const current = ref.current;
    const tmp = !current.loading && current.data.length > 0;
    if (tmp) {
      const obj = ref(isFocused[12]);
      obj.track(constants.ACTIVITY_CARDS_VIEWED, closure_1_4());
    }
  });
  const items1 = [isFocused1, listRef];
  const effect2 = ref.useEffect(() => {
    const tmp = isFocused1;
    if (!tmp) {
      const current = listRef.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      ref.current = 0;
    }
  }, items1);
  const findIndexResult = data.findIndex((item) => {
    const obj = listRef(first[18]);
    return obj.cardSize(item) === callback2;
  });
  let c5 = findIndexResult;
  let num = Infinity;
  const tmp5 = isFocused1;
  if (findIndexResult >= 0) {
    num = sharedValue * findIndexResult;
  }
  const items2 = [findIndexResult, num];
  const callback = obj3.useCallback((arg0, arg1) => {
    let sum1;
    const sum = arg1 + arg0;
    if (sum < num) {
      sum1 = sum / metroImportDefault | 0;
    } else {
      sum1 = c5 + ((sum - tmp2) / metroImportAll | 0);
    }
    if (sum1 > ref.current) {
      ref.current = sum1;
    }
  }, items2);
  const tmp6Result = tmp6(tmp5(tmp3[19])(num, callback), 2);
  const first1 = tmp6Result[0];
  if (tmp6Result[1]) {
    tmp21 = sharedValue;
  }
  const items3 = [data];
  const memo = obj3.useMemo(() => {
    const obj = happeningNowRankingUtils;
    const result = obj.filterHappeningNowCards(first);
    const obj2 = happeningNowRankingUtils;
    return obj2.sortHappeningNowCards(result);
  }, items3);
  const items4 = [tmp7[1]];
  const tmp2Result = tmp2(tmp3[19]);
  const happeningNowScrollSnapping = tmp2Result.useHappeningNowScrollSnapping(listRef);
  const callback1 = obj3.useCallback((index) => {
    const obj = { index: index.index, loading, panelVariant: true };
    return renderCard(index.item, obj);
  }, items4);
  const tmp2Result2 = tmp2(tmp3[20]);
  sharedValue = tmp2Result2.useSharedValue([]);
  const items5 = [sharedValue];
  callback2 = obj3.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const obj = updateSharedValueIfChanged;
    const result = obj.updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => closure_1_18(item.item)));
  }, items5);
  const items6 = [callback2];
  const memo1 = obj3.useMemo(() => {
    const obj = _mod12;
    return obj.debounce(callback2, 130);
  }, items6);
  if (0 === data.length) {
    let tmp30;
    if (!tmp7[1]) {
      tmp30 = <num />;
    }
    return tmp30;
  }
  if (tmp7[1]) {
    const obj5 = { style: tmp.loading, children: renderCard(data.length > 0 ? data[0] : { kind: "placeholder", index: 0 }, obj6) };
    obj6 = { index: 0, loading: tmp7[1], fullwidth: true, panelVariant: true };
    tmp31Result = tmp31(num, obj5);
  } else {
    const Provider = context.Provider;
    const obj7 = { value: sharedValue, children: null };
    const AnalyticsLocationProvider = tmp2(tmp3[16]).AnalyticsLocationProvider;
    ({ ref: listRef, horizontal: true, renderScrollComponent: HappeningNowScrollView, decelerationRate: "fast", onScroll: first1, maintainVisibleContentPosition, snapToInterval: tmp21, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false, accessibilityLabel: intl.string(tmp2(tmp3[24]).t["1+boPi"]), contentContainerStyle: tmp.containerInner, data: memo, renderItem: callback1, onViewableItemsChanged: memo1, keyExtractor, getItemType });
    const FlashList = tmp2(tmp3[23]).FlashList;
    intl = tmp2(tmp3[24]).intl;
    tmp31Result = tmp31(Provider, obj7);
  }
  tmp30 = tmp31Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default memoResult;
export const ViewableHappeningNowCardKeysContext = context;
