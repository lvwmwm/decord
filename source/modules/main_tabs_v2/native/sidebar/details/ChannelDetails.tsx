// Module ID: 15201
// Function ID: 114670
// Name: PX_8
// Dependencies: []

// Module 15201 (PX_8)
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ deleteChannelDetailsSearchState: closure_7, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[5]);
const SPRING_CHANNEL_HEADER = tmp4.SPRING_CHANNEL_HEADER;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
const PX_8 = importDefault(dependencyMap[7]).space.PX_8;
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj["flex"] = 1;
obj.detailsContainer = obj;
obj1 = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_12, paddingTop: PX_8 };
obj.information = obj1;
const tmp5 = arg1(dependencyMap[6]);
obj.linkedLobby = { marginTop: importDefault(dependencyMap[7]).space.PX_12, marginBottom: importDefault(dependencyMap[7]).space.PX_4 };
obj.search = { "Bool(true)": "<string:2491613185>", "Bool(true)": "<string:2941583362>" };
const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_12, marginBottom: importDefault(dependencyMap[7]).space.PX_4 };
obj.searchLocked = { marginTop: tmp4.CHANNEL_DETAILS_TOP_MARGIN, marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.autocompleteSuggestions = { zIndex: 10 };
const obj3 = { marginTop: tmp4.CHANNEL_DETAILS_TOP_MARGIN, marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.newHeader = { paddingBottom: importDefault(dependencyMap[7]).space.PX_12, zIndex: 10 };
let closure_14 = obj1.createStyles(obj);
let closure_15 = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}" };
const obj4 = { paddingBottom: importDefault(dependencyMap[7]).space.PX_12, zIndex: 10 };
const memoResult = importAllResult.memo(function ChannelDetails(channelId) {
  let componentWidth;
  let dismissed;
  let isShowing;
  let onBackPress;
  let onLayoutMeasure;
  let setDismissed;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const isSearchLocked = channelId.isSearchLocked;
  const importDefault = isSearchLocked;
  ({ onBackPress, componentWidth, isShowing } = channelId);
  if (isShowing === undefined) {
    isShowing = true;
  }
  const dependencyMap = isShowing;
  const onChannelDeleted = channelId.onChannelDeleted;
  let flag = channelId.expandTopic;
  if (flag === undefined) {
    flag = false;
  }
  let View;
  let closure_5;
  let closure_6;
  let tmp8;
  let ref;
  let context;
  let SPRING_CHANNEL_HEADER;
  let sharedValue;
  let tmp = callback();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => tmp7.getChannel(channelId));
  View = stateFromStores;
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [stateFromStores, onChannelDeleted];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      if (null != onChannelDeleted) {
        onChannelDeleted();
      }
    }
  }, items1);
  let obj2 = arg1(dependencyMap[10]);
  const channelDetailsSearchContext = obj2.useChannelDetailsSearchContext(channelId, guild_id);
  closure_5 = channelDetailsSearchContext;
  let obj3 = arg1(dependencyMap[11]);
  const searchSuggestionsGesture = obj3.useSearchSuggestionsGesture(channelDetailsSearchContext);
  ({ dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const tmp7 = context(channelId);
  closure_6 = tmp7;
  tmp8 = ref(channelId);
  ref = importAllResult.useRef(null);
  context = importAllResult.useContext(arg1(dependencyMap[14]).SwipeForMemberListContext);
  let obj4 = arg1(dependencyMap[15]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  let isAndroidResult = importDefault(dependencyMap[16])();
  const top = importDefault(dependencyMap[17])().top;
  SPRING_CHANNEL_HEADER = top;
  const items2 = [top, context];
  const memo = importAllResult.useMemo(() => {
    let obj = channelId(isShowing[18]);
    if (!obj.isAndroid()) {
      if (!obj2.isIpadOS()) {
        let tmp4 = null;
      }
      return tmp4;
    }
    obj = { paddingTop: top };
    tmp4 = obj;
  }, items2);
  const layoutEffect = importAllResult.useLayoutEffect(() => channelId(isShowing[20]).trackAppUIViewed(), []);
  const items3 = [tmp7, isSearchLocked, tmp8, channelDetailsSearchContext];
  const effect1 = importAllResult.useEffect(() => {
    if (!isSearchLocked) {
      if ("initial" !== tmp8) {
        const current = ref.current;
        if (tmp7) {
          if (null != current) {
            current.focus();
          }
        } else {
          if (null != current) {
            current.blur();
          }
          if (!channelDetailsSearchContext.isInitialSearchQuery(channelDetailsSearchContext)) {
            isSearchLocked(isShowing[21]).updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
            const obj = isSearchLocked(isShowing[21]);
            const initialMessages = isSearchLocked(isShowing[22]).fetchInitialMessages(channelDetailsSearchContext);
            const obj2 = isSearchLocked(isShowing[22]);
          }
        }
      }
    }
  }, items3);
  let obj5 = arg1(dependencyMap[23]);
  sharedValue = obj5.useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > closure_13) {
      const value = sharedValue.get();
      let tmp4 = null != value;
      if (tmp4) {
        const _Math = Math;
        tmp4 = Math.abs(height - value) < 0.001;
      }
      if (!tmp4) {
        const result = sharedValue.set(height);
      }
    }
  }, items4);
  let obj6 = arg1(dependencyMap[23]);
  class Q {
    constructor() {
      value = closure_11.get();
      obj = { position: "relative" };
      str = "auto";
      if (closure_6) {
        str = "none";
      }
      obj.pointerEvents = str;
      obj2 = channelId(closure_2[24]);
      num = 1;
      if (closure_6) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, channelId(closure_2[25]).timingFast, "animate-always");
      withSpringResult = undefined;
      if (null != value) {
        num2 = 0;
        if (value >= 0) {
          tmp3 = channelId;
          tmp4 = closure_2;
          num3 = 26;
          obj3 = channelId(closure_2[26]);
          tmp5 = closure_6;
          num4 = 0;
          if (!closure_6) {
            num4 = value;
          }
          obj = {};
          tmp6 = top;
          tmp7 = obj;
          merged = Object.assign(top);
          obj1 = {};
          obj1.min = 0;
          obj1.max = value;
          str2 = "clamp";
          obj["clamp"] = obj1;
          withSpringResult = obj3.withSpring(num4, obj);
        }
      }
      obj.height = withSpringResult;
      return obj;
    }
  }
  obj = { headerHeight: sharedValue, isSearchActive: tmp7, withTiming: arg1(dependencyMap[24]).withTiming, timingFast: arg1(dependencyMap[25]).timingFast, withSpring: arg1(dependencyMap[26]).withSpring, SPRING_CHANNEL_HEADER };
  Q.__closure = obj;
  Q.__workletHash = 8423441529588;
  Q.__initData = closure_15;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = obj6.useAnimatedStyle(Q);
  const effect2 = importAllResult.useEffect(() => {
    const result = isSearchLocked(isShowing[27]).initializeAutocomplete(channelDetailsSearchContext);
    const obj = isSearchLocked(isShowing[27]);
    const result1 = isSearchLocked(isShowing[21]).initializeSearchQuery(channelDetailsSearchContext);
  }, items5);
  const items6 = [channelDetailsSearchContext, isShowing];
  const effect3 = importAllResult.useEffect(() => {
    if (isShowing) {
      const result = isSearchLocked(isShowing[27]).clearAllSearchMesssages();
      const obj = isSearchLocked(isShowing[27]);
      isSearchLocked(isShowing[21]).updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
      const obj2 = isSearchLocked(isShowing[21]);
    }
  }, items6);
  const items7 = [channelId, channelDetailsSearchContext];
  const effect4 = importAllResult.useEffect(() => () => {
    const result = callback(closure_2[27]).clearAllSearchMesssages();
    callback2(closure_0);
    const obj = callback(closure_2[27]);
    callback(closure_2[21]).deleteSearchQuery(closure_5);
  }, items7);
  const items8 = [channelId];
  const effect5 = importAllResult.useEffect(() => {
    const bestActiveInputForChannelId = channelId(isShowing[28]).getBestActiveInputForChannelId(channelId);
    if (null != bestActiveInputForChannelId) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: tmp6(importDefault(dependencyMap[13]).CHANNEL_DETAILS).analyticsLocations };
    let obj1 = { gesture: searchSuggestionsGesture.gesture };
    obj2 = {};
    const items9 = [tmp.detailsContainer, memo];
    obj2.style = items9;
    obj2.accessibilityViewIsModal = true;
    obj2.onAccessibilityEscape = onBackPress;
    if (isSearchLocked) {
      obj3 = {};
      const items10 = [, ];
      ({ searchLocked: arr14[0], autocompleteSuggestions: arr14[1] } = tmp);
      obj3.style = items10;
      tmp = importDefault(dependencyMap[30]);
      obj4 = { ref, channelId, guildId: guild_id, onSuggestionsLayoutMesure: onLayoutMeasure, onBackPress, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed };
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        dismissed = dependencyMap;
        setDismissed = arg1(dependencyMap[18]);
        isAndroidResult = setDismissed.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj4.showBackButton = isAndroidResult;
      obj3.children = sharedValue(tmp, obj4);
      const items11 = [sharedValue(View, obj3), ];
      obj5 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      items11[1] = sharedValue(importDefault(dependencyMap[31]), obj5);
      obj2.children = items11;
      let tmp42 = obj2;
      const tmp44 = View;
    } else {
      obj6 = { style: tmp.newHeader };
      const obj7 = { ref, channel: stateFromStores, onBackPress, onSuggestionsLayoutMeasure: onLayoutMeasure, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, componentWidth };
      const items12 = [sharedValue(importDefault(dependencyMap[32]), obj7), ];
      const obj8 = { style: animatedStyle };
      const obj9 = { style: tmp.information, onLayout: callback };
      const obj10 = { channel: stateFromStores };
      const items13 = [sharedValue(importDefault(dependencyMap[33]), obj10), , ];
      const obj11 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items13[1] = sharedValue(importDefault(dependencyMap[34]), obj11);
      let tmp33 = null;
      if (!stateFromStores.isPrivate()) {
        const obj12 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp33 = sharedValue(importDefault(dependencyMap[35]), obj12);
      }
      items13[2] = tmp33;
      obj9.children = items13;
      obj8.children = closure_12(importDefault(dependencyMap[23]).View, obj9);
      items12[1] = sharedValue(importDefault(dependencyMap[23]).View, obj8);
      obj6.children = items12;
      const items14 = [closure_12(View, obj6), ];
      const obj13 = { freeze: !isShowing };
      const obj14 = { style: tmp.search, collapsable: false };
      const obj15 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj14.children = sharedValue(importDefault(dependencyMap[31]), obj15);
      obj13.children = sharedValue(View, obj14);
      items14[1] = sharedValue(arg1(dependencyMap[36]).Freeze, obj13);
      obj2.children = items14;
      tmp42 = obj2;
      const tmp29 = View;
      const tmp30 = sharedValue;
    }
    obj1.children = closure_12(View, tmp42);
    obj1 = tmp23(arg1(dependencyMap[29]).GestureDetector, obj1);
    obj.children = obj1;
    sharedValue(arg1(dependencyMap[12]).AnalyticsLocationProvider, obj);
    const tmp26 = closure_12;
    const tmp27 = View;
  }
});
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default memoResult;
