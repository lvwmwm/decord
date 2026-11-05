// Module ID: 9474
// Function ID: 9475
// Name: GameProfileScreen
// Dependencies: [32, 19, 17, 9475, 21, 5143, 575, 5770, 1113, 8887, 9476, 5846, 9493, 7622, 8828, 1652, 9473, 9494, 5380, 1705, 9495, 9500, 9517, 5384, 9519, 5398, 5402, 9520, 9518, 9522, 9768, 9778, 9779, 5733, 2]
// Exports: default

// Module 9474 (GameProfileScreen)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5384 */;
import components_Button_Button from "components/Button/Button" /* 5770 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9473 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9493 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 9500 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 9519 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameProfileStore from "GameProfileStore" /* 9475 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
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
let closure_12 = { code: "(function GameProfileScreenTsx1(){let[heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT]=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;})" };
let closure_13 = { code: "(function GameProfileScreenTsx2(isVisible,wasVisible){let[stickyHeaderVisible,withTiming]=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}})" };
let closure_14 = { code: "(function GameProfileScreenTsx3(){let[interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT]=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};})" };
let closure_15 = { code: "(function GameProfileScreenTsx4(){let[scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT]=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;})" };
let closure_16 = { code: "(function GameProfileScreenTsx5(shouldShow,prevShouldShow){let[scheduleOnRN,setShowGetButton]=this.__closure;if(shouldShow!==prevShouldShow){scheduleOnRN(setShowGetButton,shouldShow);}})" };
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_4;
  let data;
  let isLoading;
  let items24;
  let items26;
  let obj10;
  let obj6;
  let selectionVersion;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp5Result4;
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  closure_10 = undefined;
  let sharedValue1;
  let sharedValue3;
  let first2;
  let gameProfileStoreWebsites;
  let memo;
  let ref2;
  let ref3;
  let callback1;
  selectionVersion = undefined;
  let first3;
  let closure_21;
  let callback3;
  const initialTab = gameId.initialTab;
  let tmp = closure_10();
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
  let ref = react.useRef(null);
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
  const sharedValue = tmp2Result.useSharedValue(0);
  ref = obj2.useRef(false);
  closure_10 = obj2.useRef(false);
  let items = [gameId, num];
  let items1 = [gameId];
  const callback = obj2.useCallback(() => {
    closure_10.current = true;
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
  const sharedValue2 = tmp2Result9.useSharedValue(0);
  const items2 = [sharedValue3, sharedValue1, sharedValue, 56];
  let c0;
  let c1;
  let c2;
  [tmp26, tmp27, tmp28, tmp29] = items2;
  const tmp2Result10 = tmp2(tmp3[15]);
  class GameProfileScreenTsx1 {
    constructor() {
      let tmp = _undefined.get() > 0;
      const obj = _undefined;
      if (tmp) {
        const value = _undefined2.get();
        tmp = value >= obj.get() - c2;
      }
      return tmp;
    }
  }
  const items3 = [tmp27, tmp28, tmp29];
  GameProfileScreenTsx1.__closure = items3;
  GameProfileScreenTsx1.__workletHash = 9423056791928;
  GameProfileScreenTsx1.__initData = tmp26;
  const items4 = [first2, sharedValue2, ];
  const useAnimatedReaction = tmp2Result10.useAnimatedReaction;
  items4[2] = tmp2(tmp3[18]).withTiming;
  c0 = undefined;
  c1 = undefined;
  [tmp30, tmp31, tmp32] = items4;
  class GameProfileScreenTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        num = 0;
        set = _undefined.set;
        const tmp2 = c1;
        if (arg0) {
          num = 1;
        }
        const result = set(tmp2(num, { duration: 150 }));
      }
    }
  }
  const items5 = [tmp31, tmp32];
  GameProfileScreenTsx2.__closure = items5;
  GameProfileScreenTsx2.__workletHash = 34778771479;
  GameProfileScreenTsx2.__initData = tmp30;
  const animatedReaction = useAnimatedReaction(GameProfileScreenTsx1, GameProfileScreenTsx2);
  const items6 = [gameProfileStoreWebsites, , , ];
  const useAnimatedStyle = tmp2(tmp3[15]).useAnimatedStyle;
  tmp2(tmp3[15]);
  items6[1] = tmp2(tmp3[15]).interpolate;
  items6[2] = sharedValue2;
  items6[3] = 56;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp35, tmp36, tmp37, tmp38] = items6;
  class GameProfileScreenTsx3 {
    constructor() {
      let items;
      let items1;
      const obj = { transform: items1 };
      const obj2 = { translateY: _undefined(_undefined2.get(), [0, 1], items) };
      items = [-1 * c2, 0];
      items1 = [obj2];
      return obj;
    }
  }
  const items7 = [tmp36, tmp37, tmp38];
  GameProfileScreenTsx3.__closure = items7;
  GameProfileScreenTsx3.__workletHash = 8094450176409;
  GameProfileScreenTsx3.__initData = tmp35;
  const animatedStyle = useAnimatedStyle(GameProfileScreenTsx3);
  const tmp2Result12 = tmp2(tmp3[15]);
  sharedValue3 = tmp2Result12.useSharedValue(Infinity);
  const tmp8Result = num(obj2.useState(false), 2);
  first2 = tmp8Result[0];
  const items8 = [memo, sharedValue, sharedValue3, 56];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  const tmp43 = tmp8Result[1];
  [tmp45, tmp46, tmp47, tmp48] = items8;
  const tmp2Result13 = tmp2(tmp3[15]);
  class GameProfileScreenTsx4 {
    constructor() {
      const value = _undefined.get();
      return value > _undefined2.get() - c2;
    }
  }
  const items9 = [tmp46, tmp47, tmp48];
  GameProfileScreenTsx4.__closure = items9;
  GameProfileScreenTsx4.__workletHash = 6575373828455;
  GameProfileScreenTsx4.__initData = tmp45;
  const items10 = [ref2, , ];
  const useAnimatedReaction2 = tmp2Result13.useAnimatedReaction;
  items10[1] = tmp2(tmp3[19]).scheduleOnRN;
  items10[2] = tmp43;
  c0 = undefined;
  c1 = undefined;
  [tmp49, tmp50, tmp51] = items10;
  class GameProfileScreenTsx5 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items11 = [tmp50, tmp51];
  GameProfileScreenTsx5.__closure = items11;
  GameProfileScreenTsx5.__workletHash = 2265918368241;
  GameProfileScreenTsx5.__initData = tmp49;
  const animatedReaction2 = useAnimatedReaction2(GameProfileScreenTsx4, GameProfileScreenTsx5);
  const tmp2Result14 = tmp2(tmp3[20]);
  gameProfileStoreWebsites = tmp2Result14.useGameProfileStoreWebsites(data);
  const items12 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items12);
  ref2 = obj2.useRef(undefined);
  ref3 = obj2.useRef(null);
  const items13 = [name];
  const effect1 = obj2.useEffect(() => {
    ref2.current = name;
  }, items13);
  const items14 = [first1];
  const effect2 = obj2.useEffect(() => {
    ref3.current = first1;
  }, items14);
  const items15 = [gameId, viewId, source];
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
  }, items15);
  ({ navigation, selectionVersion } = source(tmp3[22])(callback1, initialTab));
  const selectedTab = navigation.selectedTab;
  source(tmp3[22])(callback1, initialTab);
  const tmp8Result2 = num(obj2.useState(0), 2);
  first3 = tmp8Result2[0];
  closure_21 = tmp8Result2[1];
  const items16 = [first3];
  const callback2 = obj2.useCallback((nativeEvent) => {
    closure_21(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items17 = [selectionVersion];
  const memo1 = obj2.useMemo(() => ({ paddingBottom: first3 }), items16);
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (selectionVersion > 0) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: false });
      }
    }
  }, items17);
  const items18 = [memo, callback1, tmp6Result];
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
  }, items18);
  const items19 = [gameId, source, sourceUserId, viewId];
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
  }, items19);
  const items20 = [gameId, source, sourceUserId, viewId];
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
  }, items20);
  const items21 = [sharedValue1];
  const items22 = [sharedValue3];
  const callback4 = obj2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items21);
  const items23 = [memo, first2, callback3];
  const callback5 = obj2.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items22);
  const memo2 = obj2.useMemo(() => {
    let onPress;
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => {
          const obj = { onPress };
          return name(sharedValue1, obj);
        };
      }
    }
    return fn;
  }, items23);
  const obj4 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback, children: null };
  if (!isLoading) {
    let tmp77;
    let tmp77Result5;
    if (null != data) {
      tmp77 = name;
      const obj5 = { ref, style: tmp.scrollView, contentContainerStyle: memo1, lockableScrollableContentOffsetY: sharedValue, children: ref(tmp5Result4, obj6) };
      const BottomSheetScrollView = tmp2(tmp3[26]).BottomSheetScrollView;
      obj6 = { obscured: tmp12, children: items24 };
      tmp5Result4 = source(tmp3[27]);
      let tmp77Result = selectedTab === tmp2(tmp3[28]).GameProfileNavTab.OVERVIEW;
      if (tmp77Result) {
        const obj7 = { game: data, invite: first1, viewId, source, trackAction: callback1, onGuildInviteResolved: tmp15, closeModal: source(tmp3[23]).hideAllActionSheets, scrollY: sharedValue, websiteButtons: memo, onStoreLinksMeasured: callback5, onHeaderHeightMeasured: callback4 };
        const tmp5Result5 = source(tmp3[29]);
        tmp77Result = tmp77(tmp5Result5, obj7);
      }
      items24 = [tmp77Result, ];
      let tmp77Result4 = selectedTab === tmp2(tmp3[28]).GameProfileNavTab.COMMUNITIES;
      if (tmp77Result4) {
        const obj8 = { game: data, viewId, scrollY: sharedValue, trackAction: callback1, closeModal: source(tmp3[23]).hideAllActionSheets };
        const tmp5Result6 = source(tmp3[30]);
        tmp77Result4 = tmp77(tmp5Result6, obj8);
      }
      items24[1] = tmp77Result4;
      tmp77Result5 = tmp77(BottomSheetScrollView, obj5);
    }
    const items25 = [tmp77Result5, , , ];
    const obj9 = { style: items26, pointerEvents: "box-none", children: tmp77(source(tmp3[31]), obj10) };
    items26 = [tmp.stickyHeader, animatedStyle];
    const View = tmp5(tmp3[15]).View;
    obj10 = { game: data, headerRight: memo2 };
    items25[1] = tmp77(View, obj9);
    let tmp77Result6 = !isLoading && null != data;
    if (tmp77Result6) {
      const obj11 = { game: data, navigation, onLayout: callback2 };
      tmp77Result6 = tmp77(tmp5(tmp3[32]), obj11);
    }
    items25[2] = tmp77Result6;
    const obj12 = { variant: "overlay", onPress: bottomSheetClose };
    items25[3] = tmp77(tmp2(tmp3[33]).ActionSheetHeaderBar, obj12);
    obj4.children = items25;
    return ref(tmp71, obj4);
  }
  const obj13 = { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) };
  tmp77Result5 = name(viewId, obj13);
  tmp77 = name;
};
