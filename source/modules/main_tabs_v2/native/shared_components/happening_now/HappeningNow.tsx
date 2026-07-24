// Module ID: 14968
// Function ID: 114031
// Name: shouldTrackViewedEvent
// Dependencies: [57, 31, 27, 14233, 653, 33, 7679, 4130, 689, 5217, 8435, 14969, 675, 4559, 1457, 14970, 5462, 5482, 14977, 14978, 3991, 10051, 22, 7527, 1212, 14979, 14980, 14997, 14999, 15000, 14983, 14996, 15001, 14995, 14982, 1327, 2]

// Module 14968 (shouldTrackViewedEvent)
import _slicedToArray from "_slicedToArray";
import importAllResult from "useVoiceChannelUsers";
import get_ActivityIndicator from "HAPPENING_NOW_CONTENT_HEIGHT";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import { jsx } from "HappeningNowCardEmbeddedActivity";
import createFakeSharedValue from "createFakeSharedValue";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { Gesture } from "Directions";

let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function shouldTrackViewedEvent(loading) {
  let tmp = !loading.loading;
  if (tmp) {
    tmp = loading.data.length > 0;
  }
  return tmp;
}
function renderCard(kind, fullWidth) {
  if ("placeholder" !== kind.kind) {
    if (!fullWidth.loading) {
      kind = kind.kind;
      if ("live-guild-stage" === kind) {
        let merged = jsx;
        merged = importDefault;
        merged = dependencyMap;
        let obj = {};
        merged = obj;
        merged = kind;
        merged = importDefault(14980);
        merged = Object.assign(kind);
        merged = obj;
        merged = fullWidth;
        merged = Object.assign(fullWidth);
        return <merged />;
      } else if ("guild-event" === kind) {
        merged = jsx;
        merged = importDefault;
        merged = dependencyMap;
        obj = {};
        merged = obj;
        merged = kind;
        merged = importDefault(14997);
        merged = Object.assign(kind);
        merged = obj;
        merged = fullWidth;
        merged = Object.assign(fullWidth);
        return <merged />;
      } else if ("active-channel" === kind) {
        const obj1 = {};
        const merged1 = Object.assign(kind);
        merged = fullWidth;
        merged = Object.assign(fullWidth);
        return jsx(importDefault(14999), {});
      } else if ("user" === kind) {
        const obj2 = {};
        const merged2 = Object.assign(kind);
        const merged3 = Object.assign(fullWidth);
        return jsx(importDefault(15000), {});
      } else if ("activity" === kind) {
        const obj3 = {};
        const merged4 = Object.assign(kind);
        const merged5 = Object.assign(fullWidth);
        return jsx(importDefault(14983), {});
      } else if ("voice" === kind) {
        const obj4 = {};
        const merged6 = Object.assign(kind);
        const merged7 = Object.assign(fullWidth);
        return jsx(importDefault(14996), {});
      } else if ("invite" === kind) {
        const obj5 = {};
        const merged8 = Object.assign(kind);
        const merged9 = Object.assign(fullWidth);
        return jsx(require(15001) /* trackClick */.HappeningNowCardInvite, {});
      } else if ("customize-guild" === kind) {
        const obj6 = {};
        const merged10 = Object.assign(kind);
        const merged11 = Object.assign(fullWidth);
        return jsx(require(15001) /* trackClick */.HappeningNowCardCustomizeGuild, {});
      } else if ("create-channel" === kind) {
        const obj7 = {};
        const merged12 = Object.assign(kind);
        const merged13 = Object.assign(fullWidth);
        return jsx(require(15001) /* trackClick */.HappeningNowCardCreateChannel, {});
      } else if ("student-hub-add-channel" === kind) {
        const obj8 = {};
        const merged14 = Object.assign(kind);
        const merged15 = Object.assign(fullWidth);
        return jsx(require(15001) /* trackClick */.HappeningNowStudentHubAddServer, {});
      } else if ("embedded-activity" === kind) {
        const obj9 = {};
        const merged16 = Object.assign(kind);
        const merged17 = Object.assign(fullWidth);
        obj9["cardKey"] = keyExtractor(kind);
        return jsx(importDefault(14995), {});
      } else if ("unified-vc" === kind) {
        const obj10 = {};
        const merged18 = Object.assign(kind);
        const merged19 = Object.assign(fullWidth);
        obj10["cardKey"] = keyExtractor(kind);
        return jsx(importDefault(14982), {});
      } else {
        merged = require;
        obj = require(1327) /* isDiscordFrontendDevelopment */;
        obj.assertNever(kind);
      }
    }
  }
  return jsx(require(14979) /* HappeningNowCardPlaceholder */.HappeningNowCardPlaceholder, { fullWidth: fullWidth.fullwidth, panelVariant: fullWidth.panelVariant });
}
function keyExtractor(kind) {
  kind = kind.kind;
  if ("placeholder" === kind) {
    const _HermesInternal8 = HermesInternal;
    return "" + kind.kind + "-" + kind.index;
  } else if ("live-guild-stage" === kind) {
    const _HermesInternal7 = HermesInternal;
    return "" + kind.kind + "-" + kind.stage.id;
  } else if ("guild-event" === kind) {
    const _HermesInternal6 = HermesInternal;
    return "" + kind.kind + "-" + kind.event.id;
  } else if ("active-channel" === kind) {
    const _HermesInternal5 = HermesInternal;
    return "" + kind.kind + "-" + kind.channelId;
  } else {
    if ("user" !== kind) {
      if ("activity" !== kind) {
        if ("voice" === kind) {
          let userId3 = kind.voiceState.channelId;
          if (null == userId3) {
            userId3 = kind.userId;
          }
          const _HermesInternal3 = HermesInternal;
          return "" + kind.kind + "-" + userId3;
        } else {
          if ("invite" !== kind) {
            if ("customize-guild" !== kind) {
              if ("create-channel" !== kind) {
                if ("student-hub-add-channel" !== kind) {
                  if ("embedded-activity" === kind) {
                    const kind2 = kind.kind;
                    let userId2 = kind.voiceState.channelId;
                    if (null == userId2) {
                      userId2 = kind.userId;
                    }
                    const _HermesInternal2 = HermesInternal;
                    return "" + kind2 + "-" + userId2 + "-" + kind.activity.applicationId;
                  } else if ("unified-vc" === kind) {
                    let userId = kind.voiceState.channelId;
                    if (null == userId) {
                      userId = kind.userId;
                    }
                    const _HermesInternal = HermesInternal;
                    return "" + kind.kind + "-" + userId;
                  } else {
                    require(1327) /* isDiscordFrontendDevelopment */.assertNever(kind);
                  }
                }
              }
            }
          }
          return kind.kind;
        }
      }
    }
    const _HermesInternal4 = HermesInternal;
    return "" + kind.kind + "-" + kind.userId;
  }
}
function getItemType(kind) {
  return kind.kind;
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: closure_7, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: closure_8, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: closure_9 } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const context = importAllResult.createContext(createFakeSharedValue.createFakeSharedValue([]));
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING } };
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, flex: 1 };
obj.loading = obj;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = Gesture.Native().disallowInterruption(true);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let obj = { gesture: closure_14 };
  obj = { ref };
  const merged = Object.assign(arg0);
  obj.children = <closure_5 ref={arg1} />;
  return jsx(require(5217) /* Directions */.GestureDetector, { ref });
});
forwardRefResult.displayName = "HappeningNowScrollView";
const NativeResult = Gesture.Native();
const memoResult = importAllResult.memo((listRef) => {
  listRef = listRef.listRef;
  let num;
  let sharedValue;
  let callback2;
  let tmp = callback2();
  let obj = listRef(first[14]);
  let isFocused = obj.useIsFocused();
  const tmp3 = callback(isFocused(first[15])(listRef.cards, { withoutUserCards: undefined, guildId: undefined, showMultipleActivitiesPerChannel: true, isFocused }), 2);
  first = tmp3[0];
  callback = tmp4;
  ref = ref.useRef(0);
  obj = { data: first, isFocused, loading: tmp3[1] };
  (function useTrackActivityCardsView(isFocused, ref) {
    let closure_0 = isFocused;
    let closure_1 = ref;
    isFocused = isFocused.isFocused;
    let _slicedToArray = ref.useRef(isFocused);
    let tmp = isFocused(first[10])(() => {
      const data = _slicedToArray.current.data;
      const obj = { context: "messages", num_cards: _slicedToArray.current.data.length, max_viewed_card_index: Math.min(ref.current, _slicedToArray.current.data.length), card_types: data.map((arg0) => outer3_9[arg0.kind]) };
      const merged = Object.assign(listRef(first[11]).getAffinityProperties(_slicedToArray.current.data));
      return obj;
    });
    const effect = ref.useEffect(() => {
      _slicedToArray.current = closure_0;
    });
    const items = [isFocused, tmp];
    const effect1 = ref.useEffect(() => {
      let tmp = !isFocused;
      if (tmp) {
        tmp = outer2_16(_slicedToArray.current);
      }
      if (tmp) {
        isFocused(first[12]).track(outer2_10.ACTIVITY_CARDS_VIEWED, tmp());
        const obj = isFocused(first[12]);
      }
    }, items);
    isFocused(first[13])(() => () => {
      if (outer3_16(outer1_3.current)) {
        isFocused(first[12]).track(outer3_10.ACTIVITY_CARDS_VIEWED, outer1_4());
        const obj = isFocused(first[12]);
      }
    });
  })(obj, ref);
  let items = [isFocused, listRef];
  let effect = ref.useEffect(() => {
    if (!isFocused) {
      const current = listRef.current;
      if (null != current) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      ref.current = 0;
    }
  }, items);
  const findIndexResult = first.findIndex((kind) => listRef(first[18]).cardSize(kind) === callback2);
  num = Infinity;
  if (findIndexResult >= 0) {
    num = sharedValue * findIndexResult;
  }
  const items1 = [findIndexResult, num];
  callback = ref.useCallback((arg0, arg1) => {
    const sum = arg1 + arg0;
    if (sum < num) {
      let sum1 = sum / sharedValue | 0;
    } else {
      sum1 = closure_5 + ((sum - num) / callback2 | 0);
    }
    if (sum1 > ref.current) {
      ref.current = sum1;
    }
  }, items1);
  const tmp12 = callback(isFocused(first[19])(num, callback), 2);
  if (tmp12[1]) {
    const tmp13 = sharedValue;
  }
  const items2 = [first];
  const memo = ref.useMemo(() => {
    const result = listRef(first[18]).filterHappeningNowCards(first);
    const obj = listRef(first[18]);
    return listRef(first[18]).sortHappeningNowCards(result);
  }, items2);
  let obj2 = listRef(first[19]);
  const items3 = [tmp3[1]];
  const happeningNowScrollSnapping = obj2.useHappeningNowScrollSnapping(listRef);
  const callback1 = ref.useCallback((index) => outer1_17(index.item, { index: index.index, loading: _slicedToArray, panelVariant: true }), items3);
  let obj3 = listRef(first[20]);
  sharedValue = obj3.useSharedValue([]);
  const items4 = [sharedValue];
  callback2 = ref.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const result = listRef(first[21]).updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => outer2_18(item.item)));
  }, items4);
  const items5 = [callback2];
  const memo1 = ref.useMemo(() => listRef(first[22]).debounce(callback2, 130), items5);
  if (0 === first.length) {
    if (!tmp4) {
      return <num />;
    }
  }
  if (!tmp3[1]) {
    obj = { value: sharedValue };
    const obj1 = { value: tmp5(isFocused(first[17]).ACTIVITIES_HAPPENING_NOW).analyticsLocations };
    obj2 = { ref: listRef, horizontal: true, renderScrollComponent: closure_15, decelerationRate: "fast", onScroll: tmp12[0], snapToInterval: tmp13, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false };
    const intl = listRef(first[24]).intl;
    obj2.accessibilityLabel = intl.string(listRef(first[24]).t["1+boPi"]);
    obj2.contentContainerStyle = tmp.containerInner;
    obj2.data = memo;
    obj2.renderItem = callback1;
    obj2.onViewableItemsChanged = memo1;
    obj2.keyExtractor = keyExtractor;
    obj2.getItemType = getItemType;
    obj1.children = jsx(listRef(first[23]).FlashList, { ref: listRef, horizontal: true, renderScrollComponent: closure_15, decelerationRate: "fast", onScroll: tmp12[0], snapToInterval: tmp13, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false });
    obj.children = jsx(listRef(first[16]).AnalyticsLocationProvider, { value: tmp5(isFocused(first[17]).ACTIVITIES_HAPPENING_NOW).analyticsLocations });
    tmp22(context.Provider, obj);
  }
  obj3 = { style: tmp.loading };
  const obj4 = { index: 0, loading: tmp3[1], fullwidth: true, panelVariant: true };
  first = renderCard(first.length > 0 ? first[0] : { kind: "placeholder", index: 0 }, obj4);
  obj3.children = first;
  <num style={tmp.loading} />;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default memoResult;
export const ViewableHappeningNowCardKeysContext = context;
