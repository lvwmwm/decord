// Module ID: 15364
// Function ID: 117162
// Name: PX_8
// Dependencies: [31, 27, 10109, 1348, 9168, 9140, 33, 689, 4130, 566, 10107, 15365, 5462, 5482, 15363, 4528, 7423, 1557, 477, 4110, 6707, 11434, 11426, 3991, 4131, 4134, 4542, 10117, 3989, 5217, 15366, 15378, 15467, 15469, 15470, 15471, 4489, 2]

// Module 15364 (PX_8)
import importAllResult from "SearchFreezeContainer";
import get_ActivityIndicator from "module_10117";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import createChannelState from "createChannelState";
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens";
import jsxProd from "DirectMessageIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
const View = get_ActivityIndicator.View;
({ deleteChannelDetailsSearchState: closure_7, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = createChannelState);
const SPRING_CHANNEL_HEADER = ChannelDetailsNavigatorScreens.SPRING_CHANNEL_HEADER;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
let obj = {};
obj = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj["flex"] = 1;
obj.detailsContainer = obj;
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingTop: PX_8 };
obj.information = _createForOfIteratorHelperLoose;
obj.linkedLobby = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.search = { flex: 1, flexGrow: 1 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.searchLocked = { marginTop: ChannelDetailsNavigatorScreens.CHANNEL_DETAILS_TOP_MARGIN, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.autocompleteSuggestions = { zIndex: 10 };
let obj3 = { marginTop: ChannelDetailsNavigatorScreens.CHANNEL_DETAILS_TOP_MARGIN, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.newHeader = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12, zIndex: 10 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_15 = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}" };
let obj4 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12, zIndex: 10 };
const memoResult = importAllResult.memo(function ChannelDetails(channelId) {
  let componentWidth;
  let dismissed;
  let isShowing;
  let onBackPress;
  let onLayoutMeasure;
  let setDismissed;
  channelId = channelId.channelId;
  const isSearchLocked = channelId.isSearchLocked;
  ({ onBackPress, componentWidth, isShowing } = channelId);
  if (isShowing === undefined) {
    isShowing = true;
  }
  const onChannelDeleted = channelId.onChannelDeleted;
  let flag = channelId.expandTopic;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let channelDetailsSearchContext;
  let c6;
  let c7;
  let ref;
  let context;
  let top;
  let sharedValue;
  let tmp = callback();
  let obj = channelId(isShowing[9]);
  const items = [c6];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.getChannel(channelId));
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [stateFromStores, onChannelDeleted];
  const effect = onChannelDeleted.useEffect(() => {
    if (null == stateFromStores) {
      if (null != onChannelDeleted) {
        onChannelDeleted();
      }
    }
  }, items1);
  let obj2 = channelId(isShowing[10]);
  channelDetailsSearchContext = obj2.useChannelDetailsSearchContext(channelId, guild_id);
  let obj3 = channelId(isShowing[11]);
  const searchSuggestionsGesture = obj3.useSearchSuggestionsGesture(channelDetailsSearchContext);
  ({ dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const tmp7 = context(channelId);
  c6 = tmp7;
  const tmp8 = ref(channelId);
  c7 = tmp8;
  ref = onChannelDeleted.useRef(null);
  context = onChannelDeleted.useContext(channelId(isShowing[14]).SwipeForMemberListContext);
  let obj4 = channelId(isShowing[15]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(isShowing[16])();
  top = isSearchLocked(isShowing[17])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
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
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => channelId(isShowing[20]).trackAppUIViewed(), []);
  const items3 = [tmp7, isSearchLocked, tmp8, channelDetailsSearchContext];
  const effect1 = onChannelDeleted.useEffect(() => {
    if (!isSearchLocked) {
      if ("initial" !== c7) {
        const current = ref.current;
        if (c6) {
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
  let obj5 = channelId(isShowing[23]);
  sharedValue = obj5.useSharedValue(undefined);
  const items4 = [sharedValue];
  callback = onChannelDeleted.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > outer1_13) {
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
  let obj6 = channelId(isShowing[23]);
  class Q {
    constructor() {
      value = c11.get();
      obj = { position: "relative" };
      str = "auto";
      if (c6) {
        str = "none";
      }
      obj.pointerEvents = str;
      obj2 = channelId(c2[24]);
      num = 1;
      if (c6) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, channelId(c2[25]).timingFast, "animate-always");
      withSpringResult = undefined;
      if (null != value) {
        num2 = 0;
        if (value >= 0) {
          tmp3 = channelId;
          tmp4 = c2;
          num3 = 26;
          obj3 = channelId(c2[26]);
          tmp5 = c6;
          num4 = 0;
          if (!c6) {
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
  obj = { headerHeight: sharedValue, isSearchActive: tmp7, withTiming: channelId(isShowing[24]).withTiming, timingFast: channelId(isShowing[25]).timingFast, withSpring: channelId(isShowing[26]).withSpring, SPRING_CHANNEL_HEADER: top };
  Q.__closure = obj;
  Q.__workletHash = 8423441529588;
  Q.__initData = closure_15;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = obj6.useAnimatedStyle(Q);
  const effect2 = onChannelDeleted.useEffect(() => {
    const result = isSearchLocked(isShowing[27]).initializeAutocomplete(channelDetailsSearchContext);
    const obj = isSearchLocked(isShowing[27]);
    const result1 = isSearchLocked(isShowing[21]).initializeSearchQuery(channelDetailsSearchContext);
  }, items5);
  const items6 = [channelDetailsSearchContext, isShowing];
  const effect3 = onChannelDeleted.useEffect(() => {
    if (isShowing) {
      const result = isSearchLocked(isShowing[27]).clearAllSearchMesssages();
      const obj = isSearchLocked(isShowing[27]);
      isSearchLocked(isShowing[21]).updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
      const obj2 = isSearchLocked(isShowing[21]);
    }
  }, items6);
  const items7 = [channelId, channelDetailsSearchContext];
  const effect4 = onChannelDeleted.useEffect(() => () => {
    const result = isSearchLocked(isShowing[27]).clearAllSearchMesssages();
    callback(outer1_0);
    const obj = isSearchLocked(isShowing[27]);
    isSearchLocked(isShowing[21]).deleteSearchQuery(outer1_5);
  }, items7);
  const items8 = [channelId];
  const effect5 = onChannelDeleted.useEffect(() => {
    const bestActiveInputForChannelId = channelId(isShowing[28]).getBestActiveInputForChannelId(channelId);
    if (null != bestActiveInputForChannelId) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: tmp6(isSearchLocked(isShowing[13]).CHANNEL_DETAILS).analyticsLocations };
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
      tmp = isSearchLocked(isShowing[30]);
      obj4 = { ref, channelId, guildId: guild_id, onSuggestionsLayoutMesure: onLayoutMeasure, onBackPress, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed };
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        dismissed = isShowing;
        setDismissed = channelId(isShowing[18]);
        isAndroidResult = setDismissed.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj4.showBackButton = isAndroidResult;
      obj3.children = sharedValue(tmp, obj4);
      const items11 = [sharedValue(stateFromStores, obj3), ];
      obj5 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      items11[1] = sharedValue(isSearchLocked(isShowing[31]), obj5);
      obj2.children = items11;
      let tmp42 = obj2;
      const tmp44 = stateFromStores;
    } else {
      obj6 = { style: tmp.newHeader };
      const obj7 = { ref, channel: stateFromStores, onBackPress, onSuggestionsLayoutMeasure: onLayoutMeasure, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, componentWidth };
      const items12 = [sharedValue(isSearchLocked(isShowing[32]), obj7), ];
      const obj8 = { style: animatedStyle };
      const obj9 = { style: tmp.information, onLayout: callback };
      const obj10 = { channel: stateFromStores };
      const items13 = [sharedValue(isSearchLocked(isShowing[33]), obj10), , ];
      const obj11 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items13[1] = sharedValue(isSearchLocked(isShowing[34]), obj11);
      let tmp33 = null;
      if (!stateFromStores.isPrivate()) {
        const obj12 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp33 = sharedValue(isSearchLocked(isShowing[35]), obj12);
      }
      items13[2] = tmp33;
      obj9.children = items13;
      obj8.children = closure_12(isSearchLocked(isShowing[23]).View, obj9);
      items12[1] = sharedValue(isSearchLocked(isShowing[23]).View, obj8);
      obj6.children = items12;
      const items14 = [closure_12(stateFromStores, obj6), ];
      const obj13 = { freeze: !isShowing };
      const obj14 = { style: tmp.search, collapsable: false };
      const obj15 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj14.children = sharedValue(isSearchLocked(isShowing[31]), obj15);
      obj13.children = sharedValue(stateFromStores, obj14);
      items14[1] = sharedValue(channelId(isShowing[36]).Freeze, obj13);
      obj2.children = items14;
      tmp42 = obj2;
      const tmp29 = stateFromStores;
      const tmp30 = sharedValue;
    }
    obj1.children = closure_12(stateFromStores, tmp42);
    obj1 = tmp23(channelId(isShowing[29]).GestureDetector, obj1);
    obj.children = obj1;
    sharedValue(channelId(isShowing[12]).AnalyticsLocationProvider, obj);
    const tmp26 = closure_12;
    const tmp27 = stateFromStores;
  }
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default memoResult;
