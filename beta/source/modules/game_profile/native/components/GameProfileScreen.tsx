// Module ID: 8134
// Function ID: 8135
// Name: GameProfileScreen
// Dependencies: [32, 19, 17, 8135, 21, 4836, 576, 5281, 1115, 7615, 8136, 4525, 8139, 6727, 5423, 4566, 8140, 4837, 8141, 8146, 4800, 8163, 6571, 6045, 8164, 8166, 8369, 6575, 2]
// Exports: default

// Module 8134 (GameProfileScreen)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import timing from "timing" /* 4837 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 8146 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 8163 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameProfileStore from "GameProfileStore" /* 8135 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
let __initData = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let closure_16 = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_15;
  let closure_4;
  let data;
  let isLoading;
  let items12;
  let obj10;
  let obj12;
  let obj9;
  let tmp5Result2;
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  let ref;
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
  let callback2;
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
  const tmp8 = num;
  if (data != null) {
    name = data.name;
  }
  const tmp2Result = tmp2(tmp3[15]);
  sharedValue = tmp2Result.useSharedValue(0);
  ref = obj2.useRef(false);
  let items = [num];
  const callback = obj2.useCallback(() => {
    let tmp2 = num > 0;
    const tmp = num;
    if (tmp2) {
      tmp2 = !ref.current;
    }
    if (tmp2) {
      ref.current = true;
      const current = ref.current;
      if (current != null) {
        const obj = { y: tmp, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items);
  let id;
  const tmp5Result = source(tmp3[16]);
  if (data != null) {
    id = data.id;
  }
  tmp5Result({ gameId: id, scrollY: sharedValue });
  const tmp2Result8 = tmp2(tmp3[15]);
  sharedValue1 = tmp2Result8.useSharedValue(0);
  const tmp2Result9 = tmp2(tmp3[15]);
  sharedValue2 = tmp2Result9.useSharedValue(0);
  let fn = function j() {
    let tmp = sharedValue1.get() > 0;
    const obj = sharedValue1;
    if (tmp) {
      const value = sharedValue.get();
      tmp = value >= obj.get() - 56;
    }
    return tmp;
  };
  fn.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  fn.__workletHash = 15395308691297;
  fn.__initData = sharedValue2;
  const tmp2Result10 = tmp2(tmp3[15]);
  class M {
    constructor(arg0, arg1) {
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
    }
  }
  M.__closure = { stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[17]).withTiming };
  M.__workletHash = 3161097061646;
  M.__initData = sharedValue3;
  ({ stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[17]).withTiming });
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn, M);
  const tmp2Result11 = tmp2(tmp3[15]);
  class W {
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
  W.__closure = { interpolate: tmp2(tmp3[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  W.__workletHash = 16452163547712;
  W.__initData = first2;
  ({ interpolate: tmp2(tmp3[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 });
  const animatedStyle = tmp2Result11.useAnimatedStyle(W);
  const tmp2Result12 = tmp2(tmp3[15]);
  sharedValue3 = tmp2Result12.useSharedValue(Infinity);
  const tmp8Result = tmp8(obj2.useState(false), 2);
  first2 = tmp8Result[0];
  __initData = tmp29;
  const tmp2Result13 = tmp2(tmp3[15]);
  class Q {
    constructor() {
      const value = sharedValue.get();
      return value > sharedValue3.get() - 56;
    }
  }
  Q.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  Q.__workletHash = 14521195063038;
  Q.__initData = __initData;
  const fn2 = function q(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_15)(arg0);
    }
  };
  fn2.__closure = { runOnJS: tmp2(tmp3[15]).runOnJS, setShowGetButton: tmp8Result[1] };
  fn2.__workletHash = 15045914286853;
  fn2.__initData = gameProfileStoreWebsites;
  ({ runOnJS: tmp2(tmp3[15]).runOnJS, setShowGetButton: tmp8Result[1] });
  const animatedReaction1 = tmp2Result13.useAnimatedReaction(Q, fn2);
  const tmp2Result14 = tmp2(tmp3[18]);
  gameProfileStoreWebsites = tmp2Result14.useGameProfileStoreWebsites(data);
  const items1 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items1);
  ref2 = obj2.useRef(undefined);
  ref3 = obj2.useRef(null);
  const items2 = [name];
  const effect = obj2.useEffect(() => {
    ref2.current = name;
  }, items2);
  const items3 = [first1];
  const effect1 = obj2.useEffect(() => {
    ref3.current = first1;
  }, items3);
  const items4 = [gameId, viewId, source];
  callback1 = obj2.useCallback((action, similarGameId) => {
    let guildId;
    let isVerified;
    const obj = GameProfileAnalyticUtils;
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref3.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    let str = ref2.current;
    const trackGameProfileAction = GameProfileAnalyticUtils.trackGameProfileAction;
    GameProfileAnalyticUtils;
    if (str == null) {
      str = "";
    }
    const obj2 = { gameName: str, gameId, action, similarGameId, viewId, guildId, isVerified, source };
    const result = trackGameProfileAction(obj2);
  }, items4);
  const items5 = [memo, callback1, tmp6Result];
  callback2 = obj2.useCallback(() => {
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
  }, items5);
  const items6 = [gameId, source, sourceUserId, viewId];
  const effect2 = obj2.useEffect(() => {
    let str;
    const obj = { source, viewId, gameId, gameName: str, authorId: sourceUserId, profileType: GameProfileAnalyticUtils.GameProfileTypes.FullProfile };
    str = ref2.current;
    const trackGameProfileOpen = GameProfileAnalyticUtils.trackGameProfileOpen;
    GameProfileAnalyticUtils;
    if (str == null) {
      str = "";
    }
    trackGameProfileOpen(obj);
  }, items6);
  const items7 = [gameId, source, sourceUserId, viewId];
  const effect3 = obj2.useEffect(() => () => {
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
  }, items7);
  const items8 = [sharedValue1];
  const items9 = [sharedValue3];
  const callback3 = obj2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items8);
  const items10 = [memo, first2, callback2];
  const callback4 = obj2.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items9);
  const memo1 = obj2.useMemo(() => {
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
  }, items10);
  const obj7 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback, children: null };
  const tmp42 = sharedValue;
  if (!isLoading) {
    let tmp45;
    let tmp44;
    if (null != data) {
      tmp45 = name;
      const obj8 = { ref, style: tmp.scrollView, lockableScrollableContentOffsetY: sharedValue, children: name(tmp5Result2, obj9) };
      const BottomSheetScrollView = tmp2(tmp3[23]).BottomSheetScrollView;
      obj9 = { obscured: tmp12, children: name(source(tmp3[25]), obj10) };
      obj10 = {
        game: data,
        invite: first1,
        viewId,
        source,
        trackAction: callback1,
        onGuildInviteResolved: tmp15,
        closeModal() {
              const obj = source(sourceUserId[20]);
              return obj.hideAllActionSheets();
            },
        scrollY: sharedValue,
        websiteButtons: memo,
        onStoreLinksMeasured: callback4,
        onHeaderHeightMeasured: callback3
      };
      tmp5Result2 = source(tmp3[24]);
      tmp44 = name(BottomSheetScrollView, obj8);
    }
    const items11 = [tmp44, , ];
    const obj11 = { style: items12, pointerEvents: "box-none", children: tmp45(source(tmp3[26]), obj12) };
    items12 = [tmp.stickyHeader, animatedStyle];
    const View = tmp5(tmp3[15]).View;
    obj12 = { game: data, headerRight: memo1 };
    items11[1] = tmp45(View, obj11);
    const obj13 = { variant: "overlay", onPress: bottomSheetClose };
    items11[2] = tmp45(tmp2(tmp3[27]).ActionSheetHeaderBar, obj13);
    obj7.children = items11;
    return tmp42(tmp43, obj7);
  }
  const obj14 = { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) };
  tmp44 = name(viewId, obj14);
  tmp45 = name;
};
