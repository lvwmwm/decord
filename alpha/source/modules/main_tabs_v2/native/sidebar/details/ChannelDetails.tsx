// Module ID: 18989
// Function ID: 18990
// Name: ChannelDetails
// Dependencies: [19, 17, 14131, 4992, 9980, 10323, 21, 575, 5143, 504, 14078, 18990, 7465, 7490, 1499, 14229, 5400, 7261, 1627, 1377, 5100, 7799, 14142, 14117, 1652, 5380, 5383, 5773, 14151, 5333, 5430, 18991, 19001, 19117, 19119, 19120, 19121, 19122, 6127, 2]

// Module 18989 (ChannelDetails)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14117 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14142 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 14151 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SearchQueryStore from "SearchQueryStore" /* 14131 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9980 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10323 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let CHANNEL_DETAILS_TOP_MARGIN;
let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
let unpackModuleId;
const DeviceUtils = tmp(5100);
({ View: closure_4, StyleSheet } = react_native);
({ deleteChannelDetailsSearchState: metroImportDefault, useChannelDetailsSearchActiveSource: metroImportAll, useIsChannelDetailsSearchActive: c9 } = ChannelDetailsStore);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { detailsContainer: obj2, information: obj3, linkedLobby: obj4, search: { flex: 1, flexGrow: 1 }, searchLocked: obj5, autocompleteSuggestions: { zIndex: 10 }, newHeader: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flex: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj5 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj6 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
let closure_14 = createStyles(obj);
let closure_15 = { code: "(function ChannelDetailsTsx1(){let[headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER]=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};})" };
const memoResult = react.memo(function ChannelDetails(channelId) {
  let GestureDetector;
  let SearchSuggestionsProvider;
  let componentWidth;
  let detectorRef;
  let gesture;
  let isShowing;
  let items11;
  let items15;
  let obj12;
  let obj18;
  let obj19;
  let obj4;
  let obj5;
  let onBackPress;
  let suggestionsContext;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp40;
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
  let channelDetailsSearchContext;
  let closure_6;
  let closure_7;
  let ref;
  let nativeStackNavigation;
  let context;
  let top;
  let sharedValue;
  let tmp = closure_14();
  let tmp3 = isShowing;
  let obj = channelId(isShowing[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [stateFromStores, onChannelDeleted];
  const effect = onChannelDeleted.useEffect(() => {
    if (null == stateFromStores) {
      if (onChannelDeleted != null) {
        tmp();
      }
    }
  }, items1);
  const tmp2Result = channelId(tmp3[10]);
  channelDetailsSearchContext = tmp2Result.useChannelDetailsSearchContext(channelId, guild_id);
  const tmp2Result7 = channelId(tmp3[11]);
  const searchSuggestionsGesture = tmp2Result7.useSearchSuggestionsGesture(channelDetailsSearchContext);
  ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
  const tmp9 = isSearchLocked(tmp3[12]);
  const analyticsLocations = tmp9(isSearchLocked(tmp3[13]).CHANNEL_DETAILS).analyticsLocations;
  const tmp10 = nativeStackNavigation(channelId);
  closure_6 = tmp10;
  const tmp11 = ref(channelId);
  closure_7 = tmp11;
  ref = onChannelDeleted.useRef(null);
  const tmp2Result8 = channelId(tmp3[14]);
  nativeStackNavigation = tmp2Result8.useNativeStackNavigation();
  context = onChannelDeleted.useContext(tmp2(tmp3[15]).SwipeForMemberListContext);
  const tmp2Result9 = channelId(tmp3[16]);
  const isScreenReaderEnabled = tmp2Result9.useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp3[17])();
  top = isSearchLocked(tmp3[18])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      let tmp4;
      const tmpResult = DeviceUtils;
      if (!tmpResult.isIpadOS()) {
        tmp4 = null;
      }
      return tmp4;
    }
    tmp4 = { paddingTop: top };
  }, items2);
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => {
    const obj = channelId(isShowing[21]);
    return obj.trackAppUIViewed();
  }, []);
  const items3 = [tmp10, isSearchLocked, tmp11, channelDetailsSearchContext];
  const effect1 = onChannelDeleted.useEffect(() => {
    const tmp = isSearchLocked;
    if (!tmp) {
      if ("initial" !== closure_7) {
        const current = ref.current;
        if (closure_6) {
          if (current != null) {
            current.focus();
          }
        } else {
          if (current != null) {
            current.blur();
          }
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            const obj = SearchPlatformActionCreatorsDefault;
            obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
            const obj2 = SearchPlatformUtilsDefault;
            const initialMessages = obj2.fetchInitialMessages(tmp5);
          }
        }
      }
    }
  }, items3);
  const tmp2Result10 = channelId(tmp3[24]);
  sharedValue = tmp2Result10.useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback = onChannelDeleted.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > PX_8) {
      const value = sharedValue.get();
      let tmp3 = null != value;
      const obj = sharedValue;
      if (tmp3) {
        const _Math = Math;
        tmp3 = Math.abs(height - value) < 0.001;
      }
      if (!tmp3) {
        const result = obj.set(height);
      }
    }
  }, items4);
  const items5 = [closure_15, sharedValue, tmp10, , , , ];
  const useAnimatedStyle = tmp2(tmp3[24]).useAnimatedStyle;
  channelId(tmp3[24]);
  items5[3] = channelId(tmp3[25]).withTiming;
  items5[4] = channelId(tmp3[26]).timingFast;
  items5[5] = channelId(tmp3[27]).withSpring;
  items5[6] = context;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items5;
  class ChannelDetailsTsx1 {
    constructor() {
      let num;
      let range;
      let tmp3;
      let tmp5Result;
      const value = _undefined.get();
      let str = "auto";
      if (c1) {
        str = "none";
      }
      const obj = { position: "relative", pointerEvents: str, opacity: tmp3(num, c3, "animate-always"), height: tmp5Result };
      num = 1;
      tmp3 = c2;
      if (c1) {
        num = 0;
      }
      tmp5Result = undefined;
      if (null != value) {
        if (value >= 0) {
          let num3 = 0;
          const tmp5 = c4;
          if (!c1) {
            num3 = value;
          }
          const obj2 = { clamp: range };
          const merged = Object.assign(c5);
          range = { min: 0, max: value };
          tmp5Result = tmp5(num3, obj2);
        }
      }
      return obj;
    }
  }
  const items6 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  ChannelDetailsTsx1.__closure = items6;
  ChannelDetailsTsx1.__workletHash = 13793252970861;
  ChannelDetailsTsx1.__initData = tmp23;
  const items7 = [channelDetailsSearchContext];
  const animatedStyle = useAnimatedStyle(ChannelDetailsTsx1);
  const effect2 = obj3.useEffect(() => {
    const obj = SearchActionCreatorsDefault;
    const result = obj.initializeAutocomplete(channelDetailsSearchContext);
    const obj2 = SearchPlatformActionCreatorsDefault;
    const result1 = obj2.initializeSearchQuery(channelDetailsSearchContext);
  }, items7);
  const items8 = [channelDetailsSearchContext, isShowing];
  const effect3 = obj3.useEffect(() => {
    const tmp = isShowing;
    if (tmp) {
      const obj = SearchActionCreatorsDefault;
      const result = obj.clearAllSearchMesssages();
      const obj2 = SearchPlatformActionCreatorsDefault;
      obj2.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
    }
  }, items8);
  const items9 = [channelId, channelDetailsSearchContext];
  const effect4 = obj3.useEffect(() => () => {
    const obj = isSearchLocked(isShowing[28]);
    const result = obj.clearAllSearchMesssages();
    closure_7(channelId);
    const obj2 = isSearchLocked(isShowing[22]);
    obj2.deleteSearchQuery(channelDetailsSearchContext);
  }, items9);
  const items10 = [channelId, nativeStackNavigation];
  const effect5 = obj3.useEffect(() => {
    let obj = nativeStackNavigation;
    if ("channel-details-navigator" === nativeStackNavigation.getId()) {
      return obj.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          const obj = channelId(isShowing[29]);
          const bestActiveInputForChannelId = obj.getBestActiveInputForChannelId(closure_1_0);
          if (bestActiveInputForChannelId != null) {
            bestActiveInputForChannelId.closeCustomKeyboard();
          }
        }
      });
    }
  }, items10);
  let tmp36Result2 = null;
  if (null != stateFromStores) {
    let obj2 = { value: analyticsLocations, children: top(SearchSuggestionsProvider, obj4) };
    const AnalyticsLocationProvider = tmp2(tmp3[12]).AnalyticsLocationProvider;
    obj4 = { value: suggestionsContext, children: top(GestureDetector, obj5) };
    SearchSuggestionsProvider = tmp2(tmp3[11]).SearchSuggestionsProvider;
    const obj6 = { ref: detectorRef, style: items11, accessibilityViewIsModal: true, onAccessibilityEscape: onBackPress, children: null };
    items11 = [tmp.detailsContainer, memo];
    const obj7 = { style: null, children: null };
    obj5 = { gesture, children: sharedValue(stateFromStores, tmp40) };
    GestureDetector = tmp2(tmp3[30]).GestureDetector;
    if (isSearchLocked) {
      const items12 = [, ];
      ({ searchLocked: arr16[0], autocompleteSuggestions: arr16[1] } = tmp);
      obj7.style = items12;
      const obj8 = { ref, channelId, guildId: guild_id, onBackPress, showBackButton: isAndroidResult };
      const tmp8Result = isSearchLocked(tmp3[31]);
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        const tmp2Result12 = channelId(tmp3[19]);
        isAndroidResult = tmp2Result12.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj7.children = top(tmp8Result, obj8);
      const items13 = [top(stateFromStores, obj7), ];
      const obj9 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      items13[1] = top(isSearchLocked(tmp3[32]), obj9);
      obj6.children = items13;
      tmp40 = obj6;
    } else {
      obj7.style = tmp.newHeader;
      const obj10 = { ref, channel: stateFromStores, onBackPress, componentWidth };
      const items14 = [top(isSearchLocked(tmp3[33]), obj10), ];
      const obj11 = { style: animatedStyle, children: sharedValue(stateFromStores, obj12) };
      obj12 = { style: tmp.information, onLayout: callback, children: items15 };
      const View = tmp8(tmp3[24]).View;
      const obj13 = { channel: stateFromStores };
      items15 = [top(isSearchLocked(tmp3[34]), obj13), , , ];
      const obj14 = { channel: stateFromStores };
      items15[1] = top(channelId(tmp3[35]).PinotChannelDetailsLabel, obj14);
      const obj15 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items15[2] = top(isSearchLocked(tmp3[36]), obj15);
      let tmp36Result = null;
      if (!stateFromStores.isPrivate()) {
        const obj16 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp36Result = tmp36(tmp8(tmp3[37]), obj16);
      }
      items15[3] = tmp36Result;
      items14[1] = top(View, obj11);
      obj7.children = items14;
      const items16 = [sharedValue(stateFromStores, obj7), ];
      const obj17 = { freeze: !isShowing, children: top(stateFromStores, obj18) };
      obj18 = { style: tmp.search, collapsable: false, children: top(isSearchLocked(tmp3[32]), obj19) };
      const Freeze = tmp2(tmp3[38]).Freeze;
      obj19 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      items16[1] = top(Freeze, obj17);
      obj6.children = items16;
      tmp40 = obj6;
    }
    tmp36Result2 = tmp36(AnalyticsLocationProvider, obj2);
  }
  return tmp36Result2;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default memoResult;
