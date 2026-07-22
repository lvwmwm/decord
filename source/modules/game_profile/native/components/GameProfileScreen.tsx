// Module ID: 8588
// Function ID: 68178
// Name: GetButton
// Dependencies: []
// Exports: default

// Module 8588 (GetButton)
function GetButton(onPress) {
  const obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.text = intl.string(arg1(dependencyMap[8]).t.l8JeHg);
  obj.onPress = onPress.onPress;
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl2.string(arg1(dependencyMap[8]).t.Vsxqmz);
  return callback2(arg1(dependencyMap[7]).Button, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { 0: null, 0: 0.3, 9223372036854775807: "0vh", 0: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.loadingContainer = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.scrollView = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.stickyHeader = { "Null": 131420590, "Null": -1717986767, "Null": -644245095, "Null": 94527 };
let closure_10 = obj.createStyles(obj);
let closure_11 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_12 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_13 = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_14 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let closure_15 = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  let bottomSheetClose;
  let bottomSheetRef;
  gameId = gameId.gameId;
  const arg1 = gameId;
  const source = gameId.source;
  const importDefault = source;
  const sourceUserId = gameId.sourceUserId;
  const dependencyMap = sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let callback = num;
  let React;
  let first;
  let ref;
  let closure_7;
  let first1;
  let name;
  let callback3;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let GetButton;
  let gameProfileStoreWebsites;
  let memo;
  let closure_19;
  let closure_20;
  let callback2;
  callback3 = undefined;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  const tmp3Result = importDefault(dependencyMap[10])(importDefault(dependencyMap[11]).openURL);
  React = tmp3Result;
  first = callback(React.useState(() => gameId(sourceUserId[12]).generateViewId()), 1)[0];
  ref = React.useRef(null);
  const ref1 = React.useRef(0);
  closure_7 = ref1;
  let obj1 = arg1(dependencyMap[13]);
  const game = obj1.useGame(gameId);
  const data = game.data;
  const tmp3 = importDefault(dependencyMap[10]);
  const tmp10 = callback(React.useState(null), 2);
  first1 = tmp10[0];
  name = undefined;
  if (null != data) {
    name = data.name;
  }
  let obj2 = arg1(dependencyMap[15]);
  const sharedValue = obj2.useSharedValue(0);
  callback3 = sharedValue;
  const items = [sharedValue];
  callback = React.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const result = sharedValue.set(y);
    ref1.current = y;
  }, items);
  closure_11 = React.useRef(false);
  const items1 = [num];
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
  const tmp9 = importDefault(dependencyMap[14])(data);
  if (null != data) {
    id = data.id;
  }
  obj.gameId = id;
  obj.scrollOffsetRef = ref1;
  importDefault(dependencyMap[16])(obj);
  let obj4 = arg1(dependencyMap[15]);
  const sharedValue1 = obj4.useSharedValue(0);
  closure_12 = sharedValue1;
  let obj5 = arg1(dependencyMap[15]);
  const sharedValue2 = obj5.useSharedValue(0);
  closure_13 = sharedValue2;
  let obj6 = arg1(dependencyMap[15]);
  class U {
    constructor() {
      tmp = closure_12.get() > 0;
      if (tmp) {
        tmp2 = closure_10;
        tmp4 = closure_12;
        value = closure_10.get();
        num = 56;
        tmp = value >= closure_12.get() - 56;
      }
      return tmp;
    }
  }
  U.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  U.__workletHash = 15395308691297;
  U.__initData = closure_11;
  const fn = function j(arg0, arg1) {
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
  obj = { stickyHeaderVisible: sharedValue2, withTiming: arg1(dependencyMap[17]).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 3161097061646;
  fn.__initData = closure_12;
  const animatedReaction = obj6.useAnimatedReaction(U, fn);
  let obj8 = arg1(dependencyMap[15]);
  const fn2 = function q() {
    let obj = {};
    obj = {};
    const items = [-56, 0];
    obj.translateY = gameId(sourceUserId[15]).interpolate(sharedValue2.get(), [77601039, 1612144654], items);
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj1 = { interpolate: arg1(dependencyMap[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  fn2.__closure = obj1;
  fn2.__workletHash = 16452163547712;
  fn2.__initData = closure_13;
  const animatedStyle = obj8.useAnimatedStyle(fn2);
  let obj10 = arg1(dependencyMap[15]);
  const sharedValue3 = obj10.useSharedValue(Infinity);
  closure_14 = sharedValue3;
  const tmp24 = callback(React.useState(false), 2);
  const first2 = tmp24[0];
  closure_15 = first2;
  GetButton = tmp26;
  const tmp16 = importDefault(dependencyMap[16]);
  class X {
    constructor() {
      value = closure_10.get();
      return value > closure_14.get() - 56;
    }
  }
  X.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  X.__workletHash = 14521195063038;
  X.__initData = closure_14;
  class Q {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        tmp = gameId;
        tmp2 = sourceUserId;
        num = 15;
        obj = gameId(sourceUserId[15]);
        tmp3 = closure_16;
        tmp4 = obj.runOnJS(closure_16)(gameId);
      }
      return;
    }
  }
  obj2 = { runOnJS: arg1(dependencyMap[15]).runOnJS, setShowGetButton: tmp26 };
  Q.__closure = obj2;
  Q.__workletHash = 15045914286853;
  Q.__initData = closure_15;
  const animatedReaction1 = arg1(dependencyMap[15]).useAnimatedReaction(X, Q);
  const obj12 = arg1(dependencyMap[15]);
  gameProfileStoreWebsites = arg1(dependencyMap[18]).useGameProfileStoreWebsites(data);
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
      tmp3Result(first.url);
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
    let obj = callback(closure_2[12]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const GameProfileSimilarGamesMobileExperiment = callback(closure_2[22]).GameProfileSimilarGamesMobileExperiment;
    obj = { viewId: closure_5, gameId: callback };
    const current = ref.current;
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
      items = similarGames.getSimilarGames(callback);
    }
    obj.similarGames = items;
    obj.guildId = guildId;
    obj.isVerified = isVerified;
    const result = callback(closure_2[12]).trackGameProfileClose(obj);
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
        fn = () => callback(closure_16, { onPress: closure_22 });
      }
    }
    return fn;
  }, items11);
  const obj3 = { ref: bottomSheetRef, onExpand: callback1 };
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
      obj5.children = first1(importDefault(dependencyMap[26]), obj6);
      obj4.children = first1(importDefault(dependencyMap[25]), obj5);
      let tmp41 = first1(arg1(dependencyMap[24]).BottomSheetScrollView, obj4);
      const tmp53 = importDefault(dependencyMap[25]);
    }
    const items12 = [tmp41, , ];
    const obj7 = {};
    const items13 = [tmp.stickyHeader, animatedStyle];
    obj7.style = items13;
    obj7.pointerEvents = "box-none";
    obj8 = { game: data, headerRight: memo1 };
    obj7.children = first1(importDefault(dependencyMap[27]), obj8);
    items12[1] = first1(importDefault(dependencyMap[15]).View, obj7);
    const obj9 = { variant: "overlay", onPress: bottomSheetClose };
    items12[2] = first1(arg1(dependencyMap[28]).ActionSheetHeaderBar, obj9);
    obj3.children = items12;
    return name(tmp40, obj3);
  }
  obj10 = { style: tmp.loadingContainer, children: first1(ref, {}) };
  tmp41 = first1(first, obj10);
};
