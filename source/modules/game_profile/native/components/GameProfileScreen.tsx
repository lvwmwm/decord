// Module ID: 8637
// Function ID: 68440
// Name: GetButton
// Dependencies: [57, 31, 27, 8638, 33, 4130, 689, 4543, 1212, 7186, 8639, 3827, 8642, 6864, 8643, 3991, 8644, 4131, 8645, 8650, 4098, 8667, 8668, 5187, 5189, 8669, 8671, 11902, 5446, 2]
// Exports: default

// Module 8637 (GetButton)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "StyleSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function GetButton(onPress) {
  const obj = { variant: "primary", size: "sm" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.l8JeHg);
  obj.onPress = onPress.onPress;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.Vsxqmz);
  return callback(require(4543) /* Button */.Button, obj);
}
({ View: closure_5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.loadingContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollView = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.stickyHeader = { position: "absolute", top: 0, left: 0, right: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_11 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_12 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_13 = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_14 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let closure_15 = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  let bottomSheetClose;
  let bottomSheetRef;
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let React;
  let first;
  let ref;
  let ref1;
  let first1;
  let name;
  let sharedValue;
  let closure_11;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  let c16;
  let gameProfileStoreWebsites;
  let memo;
  let closure_19;
  let closure_20;
  let callback2;
  let callback3;
  let tmp = sharedValue();
  let obj = gameId(sourceUserId[9]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  const tmp3Result = source(sourceUserId[10])(source(sourceUserId[11]).openURL);
  React = tmp3Result;
  first = num(React.useState(() => gameId(sourceUserId[12]).generateViewId()), 1)[0];
  ref = React.useRef(null);
  ref1 = React.useRef(0);
  let obj1 = gameId(sourceUserId[13]);
  const game = obj1.useGame(gameId);
  const data = game.data;
  const tmp3 = source(sourceUserId[10]);
  const tmp10 = num(React.useState(null), 2);
  first1 = tmp10[0];
  name = undefined;
  if (null != data) {
    name = data.name;
  }
  let obj2 = gameId(sourceUserId[15]);
  sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue];
  const callback = React.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const result = sharedValue.set(y);
    ref1.current = y;
  }, items);
  closure_11 = React.useRef(false);
  let items1 = [num];
  const callback1 = React.useCallback(() => {
    let tmp = num > 0;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const current = ref.current;
      if (null != current) {
        const obj = { y: num, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items1);
  obj = {};
  let id;
  const tmp9 = source(sourceUserId[14])(data);
  if (null != data) {
    id = data.id;
  }
  obj.gameId = id;
  obj.scrollOffsetRef = ref1;
  source(sourceUserId[16])(obj);
  let obj4 = gameId(sourceUserId[15]);
  sharedValue1 = obj4.useSharedValue(0);
  let obj5 = gameId(sourceUserId[15]);
  sharedValue2 = obj5.useSharedValue(0);
  let obj6 = gameId(sourceUserId[15]);
  class U {
    constructor() {
      tmp = c12.get() > 0;
      if (tmp) {
        tmp2 = c10;
        tmp4 = c12;
        value = c10.get();
        num = 56;
        tmp = value >= c12.get() - 56;
      }
      return tmp;
    }
  }
  U.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  U.__workletHash = 15395308691297;
  U.__initData = closure_11;
  let fn = function j(arg0, arg1) {
    if (arg0 !== arg1) {
      let obj = gameId(sourceUserId[17]);
      let num2 = 0;
      if (arg0) {
        num2 = 1;
      }
      obj = { duration: 150 };
      const result = sharedValue2.set(obj.withTiming(num2, obj));
    }
  };
  obj = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[17]).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 3161097061646;
  fn.__initData = sharedValue1;
  const animatedReaction = obj6.useAnimatedReaction(U, fn);
  let obj8 = gameId(sourceUserId[15]);
  const fn2 = function q() {
    let obj = {};
    obj = {};
    const items = [-56, 0];
    obj.translateY = gameId(sourceUserId[15]).interpolate(sharedValue2.get(), [0, 1], items);
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj1 = { interpolate: gameId(sourceUserId[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  fn2.__closure = obj1;
  fn2.__workletHash = 16452163547712;
  fn2.__initData = sharedValue2;
  const animatedStyle = obj8.useAnimatedStyle(fn2);
  let obj10 = gameId(sourceUserId[15]);
  sharedValue3 = obj10.useSharedValue(Infinity);
  const tmp24 = num(React.useState(false), 2);
  first2 = tmp24[0];
  c16 = tmp26;
  let tmp16 = source(sourceUserId[16]);
  class X {
    constructor() {
      value = c10.get();
      return value > Infinity.get() - 56;
    }
  }
  X.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  X.__workletHash = 14521195063038;
  X.__initData = sharedValue3;
  class Q {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        tmp = gameId;
        tmp2 = sourceUserId;
        num = 15;
        obj = gameId(sourceUserId[15]);
        tmp3 = c16;
        tmp4 = obj.runOnJS(c16)(gameId);
      }
      return;
    }
  }
  obj2 = { runOnJS: gameId(sourceUserId[15]).runOnJS, setShowGetButton: tmp26 };
  Q.__closure = obj2;
  Q.__workletHash = 15045914286853;
  Q.__initData = first2;
  const animatedReaction1 = gameId(sourceUserId[15]).useAnimatedReaction(X, Q);
  const obj12 = gameId(sourceUserId[15]);
  gameProfileStoreWebsites = gameId(sourceUserId[18]).useGameProfileStoreWebsites(data);
  const items2 = [gameProfileStoreWebsites];
  memo = React.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(source(sourceUserId[19]));
    return mapped.filter((arg0) => null != arg0);
  }, items2);
  closure_19 = React.useRef(undefined);
  closure_20 = React.useRef(null);
  const items3 = [name];
  const effect = React.useEffect(() => {
    closure_19.current = name;
  }, items3);
  const items4 = [first1];
  const effect1 = React.useEffect(() => {
    closure_20.current = first1;
  }, items4);
  const items5 = [gameId, first, source];
  callback2 = React.useCallback((action, similarGameId) => {
    let guildId;
    let isVerified;
    let obj = gameId(sourceUserId[12]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref3.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    obj = {};
    const current = ref2.current;
    let str = "";
    if (null != current) {
      str = current;
    }
    obj.gameName = str;
    obj.gameId = gameId;
    obj.action = action;
    obj.similarGameId = similarGameId;
    obj.viewId = first;
    obj.guildId = guildId;
    obj.isVerified = isVerified;
    obj.source = source;
    const result = gameId(sourceUserId[12]).trackGameProfileAction(obj);
  }, items5);
  const items6 = [memo, callback2, tmp3Result];
  callback3 = React.useCallback(() => {
    if (1 === memo.length) {
      const first = num(memo, 1)[0];
      callback2(first.action);
      _undefined(first.url);
    } else if (memo.length > 1) {
      let obj = gameId(sourceUserId[20]);
      obj = { key: gameId(sourceUserId[21]).ACTION_SHEET_KEY };
      obj = {};
      const current = ref2.current;
      let str = "";
      if (null != current) {
        str = current;
      }
      obj.gameName = str;
      obj.websiteButtons = memo;
      obj.trackAction = callback2;
      obj.content = first1(source(sourceUserId[21]), obj);
      obj.stackingBehavior = "stack";
      obj.showActionSheet(obj);
      const tmp14 = first1;
      const tmp16 = source(sourceUserId[21]);
    }
  }, items6);
  const items7 = [gameId, source, sourceUserId, first];
  const effect2 = React.useEffect(() => {
    let obj = gameId(sourceUserId[12]);
    obj = { source, viewId: first, gameId };
    const current = ref2.current;
    let str = "";
    if (null != current) {
      str = current;
    }
    obj.gameName = str;
    obj.authorId = sourceUserId;
    obj.profileType = gameId(sourceUserId[12]).GameProfileTypes.FullProfile;
    obj.trackGameProfileOpen(obj);
  }, items7);
  const items8 = [gameId, source, sourceUserId, first];
  const effect3 = React.useEffect(() => () => {
    let guildId;
    let isVerified;
    let obj = gameId(sourceUserId[12]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(outer1_20.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const GameProfileSimilarGamesMobileExperiment = gameId(sourceUserId[22]).GameProfileSimilarGamesMobileExperiment;
    obj = { viewId: outer1_5, gameId: outer1_0 };
    const current = outer1_19.current;
    let str = "";
    if (null != current) {
      str = current;
    }
    obj.gameName = str;
    obj.playedFriendIds = [];
    obj.playedFriendsData = [];
    if (!GameProfileSimilarGamesMobileExperiment.getConfig({ location: "GameProfileScreenClose" }).enabled) {
      let items = [];
    } else {
      items = ref1.getSimilarGames(outer1_0);
    }
    obj.similarGames = items;
    obj.guildId = guildId;
    obj.isVerified = isVerified;
    const result = gameId(sourceUserId[12]).trackGameProfileClose(obj);
  }, items8);
  const items9 = [sharedValue1];
  const items10 = [sharedValue3];
  const callback4 = React.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items9);
  const items11 = [memo, first2, callback3];
  const callback5 = React.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items10);
  const memo1 = React.useMemo(() => {
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => first1(c16, { onPress: outer1_22 });
      }
    }
    return fn;
  }, items11);
  const obj3 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback1 };
  if (!game.isLoading) {
    if (null != data) {
      obj4 = { ref, style: tmp.scrollView, onScroll: callback };
      obj5 = { obscured: tmp9 };
      obj6 = {
        game: data,
        invite: first1,
        viewId: first,
        source,
        trackAction: callback2,
        onGuildInviteResolved: tmp10[1],
        closeModal() {
              return source(sourceUserId[20]).hideAllActionSheets();
            },
        scrollY: sharedValue,
        websiteButtons: memo,
        onStoreLinksMeasured: callback5,
        onHeaderHeightMeasured: callback4,
        scrollOffsetRef: ref1
      };
      obj5.children = first1(source(sourceUserId[26]), obj6);
      obj4.children = first1(source(sourceUserId[25]), obj5);
      let tmp41 = first1(gameId(sourceUserId[24]).BottomSheetScrollView, obj4);
      const tmp53 = source(sourceUserId[25]);
    }
    const items12 = [tmp41, , ];
    const obj7 = {};
    const items13 = [tmp.stickyHeader, animatedStyle];
    obj7.style = items13;
    obj7.pointerEvents = "box-none";
    obj8 = { game: data, headerRight: memo1 };
    obj7.children = first1(source(sourceUserId[27]), obj8);
    items12[1] = first1(source(sourceUserId[15]).View, obj7);
    const obj9 = { variant: "overlay", onPress: bottomSheetClose };
    items12[2] = first1(gameId(sourceUserId[28]).ActionSheetHeaderBar, obj9);
    obj3.children = items12;
    return name(tmp40, obj3);
  }
  obj10 = { style: tmp.loadingContainer, children: first1(ref, { animating: true, size: "large" }) };
  tmp41 = first1(first, obj10);
};
