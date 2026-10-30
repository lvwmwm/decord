// Module ID: 9301
// Function ID: 9302
// Name: GameProfileScreen
// Dependencies: [32, 19, 17, 9302, 21, 5009, 575, 5629, 1114, 8733, 9303, 5704, 9320, 7474, 8674, 5090, 9300, 9321, 5249, 9322, 9327, 9344, 5253, 9346, 5267, 5270, 9347, 9345, 9349, 9592, 9602, 9603, 5590, 2]
// Exports: default

// Module 9301 (GameProfileScreen)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9300 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 9327 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 9346 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameProfileStore from "GameProfileStore" /* 9302 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;
let set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
function GetButton(onPress) {
  let intl;
  let intl2;
  onPress = onPress.onPress;
  const obj = { variant: "primary", size: "sm", text: intl.string(intl3.t.l8JeHg), onPress, accessibilityLabel: intl2.string(intl3.t.Vsxqmz) };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return metroImportAll(Button, obj);
}
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingContainer: obj2, scrollView: obj3, stickyHeader: { position: "absolute", top: 0, left: 0, right: 0 } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_10 = createStyles(obj);
let closure_12 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_13 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_14 = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_15 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let __initData = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_16;
  let closure_4;
  let data;
  let isLoading;
  let items14;
  let items16;
  let obj13;
  let obj9;
  let selectionVersion;
  let tmp5Result4;
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  let ref;
  let closure_11;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  __initData = undefined;
  let gameProfileStoreWebsites;
  let memo;
  let ref2;
  let ref3;
  let callback1;
  selectionVersion = undefined;
  let first3;
  let closure_24;
  let callback3;
  const initialTab = gameId.initialTab;
  let tmp = ref();
  let tmp2 = gameId;
  let tmp3 = sourceUserId;
  let obj = gameId(sourceUserId[9]);
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmp6 = source(sourceUserId[10]);
  const tmp6Result = tmp6(source(sourceUserId[11]).openURL);
  react = tmp6Result;
  let obj2 = react;
  const viewId = num(react.useState(() => {
    const obj = gameId(sourceUserId[12]);
    return obj.generateViewId();
  }), 1)[0];
  ref = react.useRef(null);
  let obj3 = gameId(sourceUserId[13]);
  const game = obj3.useGame(gameId);
  ({ data, isLoading } = game);
  let tmp12 = source(sourceUserId[14])(data);
  const tmp13 = num(react.useState(null), 2);
  const first1 = tmp13[0];
  let name;
  const tmp15 = tmp13[1];
  if (data != null) {
    name = data.name;
  }
  const tmp2Result = tmp2(tmp3[15]);
  sharedValue = tmp2Result.useSharedValue(0);
  ref = obj2.useRef(false);
  closure_11 = obj2.useRef(false);
  let items = [gameId, num];
  const items1 = [gameId];
  const callback = obj2.useCallback(() => {
    closure_11.current = true;
    const obj = GameProfileActionCreatorsDefault;
    const result = obj.clearGameProfilePendingReturn(gameId);
    let tmp3 = num > 0;
    const tmp2 = num;
    if (tmp3) {
      tmp3 = !ref.current;
    }
    if (tmp3) {
      ref.current = true;
      const current = ref.current;
      if (current != null) {
        const obj2 = { y: tmp2, animated: false };
        current.scrollTo(obj2);
      }
    }
  }, items);
  const effect = obj2.useEffect(() => () => {
    if (!ref.current) {
      const obj = source(sourceUserId[16]);
      const result = obj.clearGameProfilePendingReturn(gameId);
    }
  }, items1);
  let id;
  const tmp5Result = source(tmp3[17]);
  if (data != null) {
    id = data.id;
  }
  tmp5Result({ gameId: id, scrollY: sharedValue });
  const tmp2Result8 = tmp2(tmp3[15]);
  sharedValue1 = tmp2Result8.useSharedValue(0);
  const tmp2Result9 = tmp2(tmp3[15]);
  sharedValue2 = tmp2Result9.useSharedValue(0);
  const tmp2Result10 = tmp2(tmp3[15]);
  class W {
    constructor() {
      let tmp = sharedValue1.get() > 0;
      const obj = sharedValue1;
      if (tmp) {
        const value = sharedValue.get();
        tmp = value >= obj.get() - 56;
      }
      return tmp;
    }
  }
  W.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  W.__workletHash = 15395308691297;
  W.__initData = sharedValue1;
  let fn = function j(arg0, arg1) {
    if (arg0 !== arg1) {
      num = 0;
      set = sharedValue2.set;
      const withTiming = timing.withTiming;
      timing;
      if (arg0) {
        num = 1;
      }
      const result = set(withTiming(num, { duration: 150 }));
    }
  };
  fn.__closure = { stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[18]).withTiming };
  fn.__workletHash = 3161097061646;
  fn.__initData = sharedValue2;
  ({ stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[18]).withTiming });
  const animatedReaction = tmp2Result10.useAnimatedReaction(W, fn);
  const tmp2Result11 = tmp2(tmp3[15]);
  class Q {
    constructor() {
      let items;
      let obj3;
      const obj = { transform: items };
      const obj2 = { translateY: obj3.interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
      items = [obj2];
      obj3 = ReanimatedRexport;
      return obj;
    }
  }
  Q.__closure = { interpolate: tmp2(tmp3[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  Q.__workletHash = 16452163547712;
  Q.__initData = sharedValue3;
  ({ interpolate: tmp2(tmp3[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 });
  const animatedStyle = tmp2Result11.useAnimatedStyle(Q);
  const tmp2Result12 = tmp2(tmp3[15]);
  sharedValue3 = tmp2Result12.useSharedValue(Infinity);
  const tmp8Result = num(obj2.useState(false), 2);
  first2 = tmp8Result[0];
  __initData = tmp30;
  const tmp2Result13 = tmp2(tmp3[15]);
  class Z {
    constructor() {
      const value = sharedValue.get();
      return value > sharedValue3.get() - 56;
    }
  }
  Z.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  Z.__workletHash = 14521195063038;
  Z.__initData = first2;
  class X {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_16)(arg0);
      }
    }
  }
  X.__closure = { runOnJS: tmp2(tmp3[15]).runOnJS, setShowGetButton: tmp8Result[1] };
  X.__workletHash = 15045914286853;
  X.__initData = __initData;
  ({ runOnJS: tmp2(tmp3[15]).runOnJS, setShowGetButton: tmp8Result[1] });
  const animatedReaction1 = tmp2Result13.useAnimatedReaction(Z, X);
  const tmp2Result14 = tmp2(tmp3[19]);
  gameProfileStoreWebsites = tmp2Result14.useGameProfileStoreWebsites(data);
  const items2 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items2);
  ref2 = obj2.useRef(undefined);
  ref3 = obj2.useRef(null);
  const items3 = [name];
  const effect1 = obj2.useEffect(() => {
    ref2.current = name;
  }, items3);
  const items4 = [first1];
  const effect2 = obj2.useEffect(() => {
    ref3.current = first1;
  }, items4);
  const items5 = [gameId, viewId, source];
  callback1 = obj2.useCallback((action) => {
    let guildId;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const communityGuildId = obj.communityGuildId;
    const similarGameId = obj.similarGameId;
    const obj2 = GameProfileAnalyticUtils;
    const guildIdAndVerifiedFromInvite = obj2.getGuildIdAndVerifiedFromInvite(ref3.current);
    let str = ref2.current;
    const trackGameProfileAction = GameProfileAnalyticUtils.trackGameProfileAction;
    GameProfileAnalyticUtils;
    if (str == null) {
      str = "";
    }
    const obj3 = { gameName: str, gameId, action, similarGameId, viewId, guildId, isVerified: null == communityGuildId && guildIdAndVerifiedFromInvite.isVerified, source };
    guildId = communityGuildId;
    if (communityGuildId == null) {
      guildId = guildIdAndVerifiedFromInvite.guildId;
    }
    const result = trackGameProfileAction(obj3);
  }, items5);
  ({ navigation, selectionVersion } = source(tmp3[21])(callback1, initialTab));
  const selectedTab = navigation.selectedTab;
  source(tmp3[21])(callback1, initialTab);
  const tmp8Result2 = num(obj2.useState(0), 2);
  first3 = tmp8Result2[0];
  closure_24 = tmp8Result2[1];
  const items6 = [first3];
  const callback2 = obj2.useCallback((nativeEvent) => {
    closure_24(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items7 = [selectionVersion];
  const memo1 = obj2.useMemo(() => ({ paddingBottom: first3 }), items6);
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (selectionVersion > 0) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: false });
      }
    }
  }, items7);
  const items8 = [memo, callback1, tmp6Result];
  callback3 = obj2.useCallback(() => {
    let obj;
    let tmp12;
    let tmp14;
    if (1 === memo.length) {
      const first = _slicedToArray(arr, 1)[0];
      callback1(first.action);
      closure_4(first.url);
    } else if (memo.length > 1) {
      const obj2 = { key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY, content: tmp12(tmp14, obj), stackingBehavior: "stack" };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      let str = ref2.current;
      tmp12 = metroImportAll;
      tmp14 = GameProfileStoreLinksActionSheetDefault;
      if (str == null) {
        str = "";
      }
      obj = { gameName: str, websiteButtons: memo, trackAction: callback1 };
      showActionSheet(obj2);
    }
  }, items8);
  const items9 = [gameId, source, sourceUserId, viewId];
  const effect3 = obj2.useEffect(() => {
    let str;
    const obj = { source, viewId, gameId, gameName: str, authorId: sourceUserId, profileType: GameProfileAnalyticUtils.GameProfileTypes.FullProfile };
    str = ref2.current;
    const trackGameProfileOpen = GameProfileAnalyticUtils.trackGameProfileOpen;
    GameProfileAnalyticUtils;
    if (str == null) {
      str = "";
    }
    trackGameProfileOpen(obj);
  }, items9);
  const items10 = [gameId, source, sourceUserId, viewId];
  const effect4 = obj2.useEffect(() => () => {
    let guildId;
    let isVerified;
    let similarGames;
    let str;
    const obj = gameId(sourceUserId[12]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const obj2 = { viewId, gameId, gameName: str, playedFriendIds: [], playedFriendsData: [], similarGames, guildId, isVerified };
    str = ref.current;
    const trackGameProfileClose = gameId(sourceUserId[12]).trackGameProfileClose;
    gameId(sourceUserId[12]);
    const tmp3 = gameId;
    if (str == null) {
      str = "";
    }
    similarGames = first1.getSimilarGames(tmp3);
    if (similarGames == null) {
      similarGames = [];
    }
    const result = trackGameProfileClose(obj2);
  }, items10);
  const items11 = [sharedValue1];
  const items12 = [sharedValue3];
  const callback4 = obj2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items11);
  const items13 = [memo, first2, callback3];
  const callback5 = obj2.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items12);
  const memo2 = obj2.useMemo(() => {
    let onPress;
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => {
          const obj = { onPress };
          return name(closure_11, obj);
        };
      }
    }
    return fn;
  }, items13);
  const obj7 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback, children: null };
  if (!isLoading) {
    let tmp56;
    let tmp56Result5;
    if (null != data) {
      tmp56 = name;
      const obj8 = { ref, style: tmp.scrollView, contentContainerStyle: memo1, lockableScrollableContentOffsetY: sharedValue, children: sharedValue(tmp5Result4, obj9) };
      const BottomSheetScrollView = tmp2(tmp3[25]).BottomSheetScrollView;
      obj9 = { obscured: tmp12, children: items14 };
      tmp5Result4 = source(tmp3[26]);
      let tmp56Result = selectedTab === tmp2(tmp3[27]).GameProfileNavTab.OVERVIEW;
      if (tmp56Result) {
        const obj10 = { game: data, invite: first1, viewId, source, trackAction: callback1, onGuildInviteResolved: tmp15, closeModal: source(tmp3[22]).hideAllActionSheets, scrollY: sharedValue, websiteButtons: memo, onStoreLinksMeasured: callback5, onHeaderHeightMeasured: callback4 };
        const tmp5Result5 = source(tmp3[28]);
        tmp56Result = tmp56(tmp5Result5, obj10);
      }
      items14 = [tmp56Result, ];
      let tmp56Result4 = selectedTab === tmp2(tmp3[27]).GameProfileNavTab.COMMUNITIES;
      if (tmp56Result4) {
        const obj11 = { game: data, viewId, scrollY: sharedValue, trackAction: callback1, closeModal: source(tmp3[22]).hideAllActionSheets };
        const tmp5Result6 = source(tmp3[29]);
        tmp56Result4 = tmp56(tmp5Result6, obj11);
      }
      items14[1] = tmp56Result4;
      tmp56Result5 = tmp56(BottomSheetScrollView, obj8);
    }
    const items15 = [tmp56Result5, , , ];
    const obj12 = { style: items16, pointerEvents: "box-none", children: tmp56(source(tmp3[30]), obj13) };
    items16 = [tmp.stickyHeader, animatedStyle];
    const View = tmp5(tmp3[15]).View;
    obj13 = { game: data, headerRight: memo2 };
    items15[1] = tmp56(View, obj12);
    let tmp56Result6 = !isLoading && null != data;
    if (tmp56Result6) {
      const obj14 = { game: data, navigation, onLayout: callback2 };
      tmp56Result6 = tmp56(tmp5(tmp3[31]), obj14);
    }
    items15[2] = tmp56Result6;
    const obj15 = { variant: "overlay", onPress: bottomSheetClose };
    items15[3] = tmp56(tmp2(tmp3[32]).ActionSheetHeaderBar, obj15);
    obj7.children = items15;
    return sharedValue(tmp50, obj7);
  }
  const obj16 = { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) };
  tmp56Result5 = name(viewId, obj16);
  tmp56 = name;
};
