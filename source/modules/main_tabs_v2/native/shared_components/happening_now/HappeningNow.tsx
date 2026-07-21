// Module ID: 14794
// Function ID: 111465
// Name: shouldTrackViewedEvent
// Dependencies: []

// Module 14794 (shouldTrackViewedEvent)
let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
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
        merged = importDefault(dependencyMap[26]);
        merged = Object.assign(kind);
        merged = obj;
        merged = fullWidth;
        merged = Object.assign(fullWidth);
        return <merged {...obj} />;
      } else if ("guild-event" === kind) {
        merged = jsx;
        merged = importDefault;
        merged = dependencyMap;
        obj = {};
        merged = obj;
        merged = kind;
        merged = importDefault(dependencyMap[27]);
        merged = Object.assign(kind);
        merged = obj;
        merged = fullWidth;
        merged = Object.assign(fullWidth);
        return <merged {...obj} />;
      } else if ("active-channel" === kind) {
        const obj1 = {};
        const merged1 = Object.assign(kind);
        merged = fullWidth;
        merged = Object.assign(fullWidth);
        return jsx(importDefault(dependencyMap[28]), obj1);
      } else if ("user" === kind) {
        const obj2 = {};
        const merged2 = Object.assign(kind);
        const merged3 = Object.assign(fullWidth);
        return jsx(importDefault(dependencyMap[29]), obj2);
      } else if ("activity" === kind) {
        const obj3 = {};
        const merged4 = Object.assign(kind);
        const merged5 = Object.assign(fullWidth);
        return jsx(importDefault(dependencyMap[30]), obj3);
      } else if ("voice" === kind) {
        const obj4 = {};
        const merged6 = Object.assign(kind);
        const merged7 = Object.assign(fullWidth);
        return jsx(importDefault(dependencyMap[31]), obj4);
      } else if ("invite" === kind) {
        const obj5 = {};
        const merged8 = Object.assign(kind);
        const merged9 = Object.assign(fullWidth);
        return jsx(fullWidth(dependencyMap[32]).HappeningNowCardInvite, obj5);
      } else if ("customize-guild" === kind) {
        const obj6 = {};
        const merged10 = Object.assign(kind);
        const merged11 = Object.assign(fullWidth);
        return jsx(fullWidth(dependencyMap[32]).HappeningNowCardCustomizeGuild, obj6);
      } else if ("create-channel" === kind) {
        const obj7 = {};
        const merged12 = Object.assign(kind);
        const merged13 = Object.assign(fullWidth);
        return jsx(fullWidth(dependencyMap[32]).HappeningNowCardCreateChannel, obj7);
      } else if ("student-hub-add-channel" === kind) {
        const obj8 = {};
        const merged14 = Object.assign(kind);
        const merged15 = Object.assign(fullWidth);
        return jsx(fullWidth(dependencyMap[32]).HappeningNowStudentHubAddServer, obj8);
      } else if ("embedded-activity" === kind) {
        const obj9 = {};
        const merged16 = Object.assign(kind);
        const merged17 = Object.assign(fullWidth);
        obj9["cardKey"] = keyExtractor(kind);
        return jsx(importDefault(dependencyMap[33]), obj9);
      } else if ("unified-vc" === kind) {
        const obj10 = {};
        const merged18 = Object.assign(kind);
        const merged19 = Object.assign(fullWidth);
        obj10["cardKey"] = keyExtractor(kind);
        return jsx(importDefault(dependencyMap[34]), obj10);
      } else {
        merged = fullWidth;
        obj = fullWidth(dependencyMap[35]);
        obj.assertNever(kind);
      }
    }
  }
  return jsx(fullWidth(dependencyMap[25]).HappeningNowCardPlaceholder, { fullWidth: fullWidth.fullwidth, panelVariant: fullWidth.panelVariant });
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
                    arg1(dependencyMap[35]).assertNever(kind);
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
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: closure_7, HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN: closure_8, HAPPENING_NOW_PANELS_CONTAINER_PADDING, HappeningNowKindIds: closure_9 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const jsx = arg1(dependencyMap[5]).jsx;
const tmp3 = arg1(dependencyMap[3]);
const context = importAllResult.createContext(arg1(dependencyMap[6]).createFakeSharedValue([]));
const obj2 = arg1(dependencyMap[6]);
let obj = { containerInner: { paddingLeft: HAPPENING_NOW_PANELS_CONTAINER_PADDING, paddingRight: HAPPENING_NOW_PANELS_CONTAINER_PADDING } };
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_8, flex: 1 };
obj.loading = obj;
let closure_13 = arg1(dependencyMap[7]).createStyles(obj);
const Gesture = arg1(dependencyMap[9]).Gesture;
const obj3 = arg1(dependencyMap[7]);
let closure_14 = Gesture.Native().disallowInterruption(true);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let obj = { gesture: closure_14 };
  obj = { ref };
  const merged = Object.assign(arg0);
  obj.children = <closure_5 {...obj} />;
  return jsx(ref(dependencyMap[9]).GestureDetector, obj);
});
forwardRefResult.displayName = "HappeningNowScrollView";
const NativeResult = Gesture.Native();
const memoResult = importAllResult.memo((listRef) => {
  listRef = listRef.listRef;
  const arg1 = listRef;
  let num;
  let sharedValue;
  let callback2;
  const tmp = callback2();
  let obj = arg1(dependencyMap[14]);
  const isFocused = obj.useIsFocused();
  const importDefault = isFocused;
  const tmp3 = callback(importDefault(dependencyMap[15])(listRef.cards, { withoutUserCards: undefined, guildId: undefined, showMultipleActivitiesPerChannel: true, isFocused }), 2);
  let first = tmp3[0];
  const dependencyMap = first;
  let callback = tmp4;
  const ref = importAllResult.useRef(0);
  obj = { data: first, isFocused, loading: tmp3[1] };
  function useTrackActivityCardsView(isFocused, ref) {
    const listRef = isFocused;
    isFocused = ref;
    isFocused = isFocused.isFocused;
    const first = isFocused;
    let closure_3 = ref.useRef(isFocused);
    const tmp = isFocused(first[10])(() => {
      const data = closure_3.current.data;
      const obj = { context: "messages", num_cards: closure_3.current.data.length, max_viewed_card_index: Math.min(arg1.current, closure_3.current.data.length), card_types: data.map((arg0) => closure_9[arg0.kind]) };
      const merged = Object.assign(arg0(isFocused[11]).getAffinityProperties(closure_3.current.data));
      return obj;
    });
    const effect = ref.useEffect(() => {
      closure_3.current = arg0;
    });
    const items = [isFocused, tmp];
    const effect1 = ref.useEffect(() => {
      let tmp = !isFocused;
      if (tmp) {
        tmp = callback(closure_3.current);
      }
      if (tmp) {
        arg1(isFocused[12]).track(constants.ACTIVITY_CARDS_VIEWED, tmp());
        const obj = arg1(isFocused[12]);
      }
    }, items);
    isFocused(first[13])(() => () => {
      if (callback3(ref.current)) {
        callback(closure_2[12]).track(constants.ACTIVITY_CARDS_VIEWED, callback2());
        const obj = callback(closure_2[12]);
      }
    });
  }(obj, ref);
  const items = [isFocused, listRef];
  const effect = importAllResult.useEffect(() => {
    if (!isFocused) {
      const current = listRef.current;
      if (null != current) {
        current.scrollToOffset({ -437125116: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002488040065571517, -435748860: -823154013994709700000000000000000000000000000000000000000000000 });
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
  callback = importAllResult.useCallback((arg0, arg1) => {
    const sum = arg1 + arg0;
    if (sum < num) {
      let sum1 = sum / sharedValue | 0;
    } else {
      sum1 = findIndexResult + ((sum - num) / callback2 | 0);
    }
    if (sum1 > ref.current) {
      ref.current = sum1;
    }
  }, items1);
  const tmp12 = callback(importDefault(dependencyMap[19])(num, callback), 2);
  if (tmp12[1]) {
    const tmp13 = sharedValue;
  }
  const items2 = [first];
  const memo = importAllResult.useMemo(() => {
    const result = listRef(first[18]).filterHappeningNowCards(first);
    const obj = listRef(first[18]);
    return listRef(first[18]).sortHappeningNowCards(result);
  }, items2);
  let obj2 = arg1(dependencyMap[19]);
  const items3 = [tmp3[1]];
  const happeningNowScrollSnapping = obj2.useHappeningNowScrollSnapping(listRef);
  const callback1 = importAllResult.useCallback((index) => callback(index.item, { index: index.index, loading: tmp4, panelVariant: true }), items3);
  let obj3 = arg1(dependencyMap[20]);
  sharedValue = obj3.useSharedValue([]);
  const items4 = [sharedValue];
  callback2 = importAllResult.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const result = listRef(first[21]).updateSharedValueArrayIfChanged(sharedValue, viewableItems.map((item) => callback(item.item)));
  }, items4);
  const items5 = [callback2];
  const memo1 = importAllResult.useMemo(() => listRef(first[22]).debounce(callback2, 130), items5);
  if (0 === first.length) {
    if (!tmp4) {
      return <num />;
    }
  }
  if (!tmp3[1]) {
    obj = { value: sharedValue };
    const obj1 = { value: tmp5(importDefault(dependencyMap[17]).ACTIVITIES_HAPPENING_NOW).analyticsLocations };
    obj2 = { ref: listRef, horizontal: true, renderScrollComponent: forwardRefResult, decelerationRate: "fast", onScroll: tmp12[0], snapToInterval: tmp13, snapToOffsets: happeningNowScrollSnapping, showsHorizontalScrollIndicator: false };
    const intl = arg1(dependencyMap[24]).intl;
    obj2.accessibilityLabel = intl.string(arg1(dependencyMap[24]).t.1+boPi);
    obj2.contentContainerStyle = tmp.containerInner;
    obj2.data = memo;
    obj2.renderItem = callback1;
    obj2.onViewableItemsChanged = memo1;
    obj2.keyExtractor = keyExtractor;
    obj2.getItemType = getItemType;
    obj1.children = jsx(arg1(dependencyMap[23]).FlashList, obj2);
    obj.children = jsx(arg1(dependencyMap[16]).AnalyticsLocationProvider, obj1);
    tmp22(context.Provider, obj);
  }
  obj3 = { style: tmp.loading };
  first = renderCard(first.length > 0 ? first[0] : {}, { loading: tmp4 });
  obj3.children = first;
  <num {...obj3} />;
});
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx");

export default memoResult;
export const ViewableHappeningNowCardKeysContext = context;
