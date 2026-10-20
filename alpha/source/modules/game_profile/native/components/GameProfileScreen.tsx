// Module ID: 9185
// Function ID: 9186
// Name: GameProfileScreen
// Dependencies: [32, 19, 17, 9186, 21, 4945, 587, 558, 576, 1128, 5205, 8596, 9187, 5622, 9178, 7355, 8530, 5014, 9184, 9204, 5167, 9205, 9210, 9227, 5171, 9229, 5230, 9230, 9228, 9232, 9435, 9445, 9446, 5543, 5226, 2]

// Module 9185 (GameProfileScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5014 */;
import timing from "timing" /* 5167 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import components_Button_Button from "components/Button/Button" /* 5205 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9178 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9184 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 9210 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 9229 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameProfileStore from "GameProfileStore" /* 9186 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;
let ref, set, viewId;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 56;
let createStyles = createStyles_mod;
let obj = { loadingContainer: obj2, scrollView: obj3, stickyHeader: { position: "absolute", top: 0, left: 0, right: 0 } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GetButton(onPress) {
  let first;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl3.t.l8JeHg);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(intl3.t.Vsxqmz);
    cResult[1] = stringResult1;
    tmp6 = stringResult1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== onPress) {
    const obj2 = { variant: "primary", size: "sm", text: first, onPress, accessibilityLabel: tmp6 };
    const tmp10 = metroImportAll(components_Button_Button.Button, obj2);
    cResult[2] = onPress;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function GetButton(onPress) {
  let intl;
  let intl2;
  onPress = onPress.onPress;
  const obj = { variant: "primary", size: "sm", text: intl.string(intl3.t.l8JeHg), onPress, accessibilityLabel: intl2.string(intl3.t.Vsxqmz) };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return metroImportAll(Button, obj);
});
let closure_13 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_14 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let __initData = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_16 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let __initData2 = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
let ref2 = { code: "function GameProfileScreenTsx6(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let __initData3 = { code: "function GameProfileScreenTsx7(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let __initData4 = { code: "function GameProfileScreenTsx8(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_21 = { code: "function GameProfileScreenTsx9(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let closure_22 = { code: "function GameProfileScreenTsx10(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileScreen(gameId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_15;
  let closure_4;
  let data;
  let first;
  let isLoading;
  let onPress;
  let ref3;
  let sharedValue3;
  let sourceUserId;
  let tmp24;
  let tmp38;
  let trackAction;
  let tmp = gameId;
  let tmp2 = sourceUserId;
  let obj = gameId(sourceUserId[8]);
  const cResult = obj.c(93);
  gameId = gameId.gameId;
  const source = gameId.source;
  sourceUserId = gameId.sourceUserId;
  const initialScrollOffset = gameId.initialScrollOffset;
  let num = 0;
  if (undefined !== initialScrollOffset) {
    num = initialScrollOffset;
  }
  const tmp4 = closure_11();
  const tmpResult = tmp(tmp2[11]);
  const bottomSheetRef1 = tmpResult.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmp7 = source(tmp2[12]);
  react = tmp7(source(tmp2[13]).openURL);
  tmp7(source(tmp2[13]).openURL);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const obj = gameId(sourceUserId[14]);
      return obj.generateViewId();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let obj3 = react;
  const first1 = num(react.useState(first), 1)[0];
  ref = react.useRef(null);
  const tmpResult10 = tmp(tmp2[15]);
  const game = tmpResult10.useGame(gameId);
  ({ data, isLoading } = game);
  let tmp14 = tmp6(tmp2[16])(data);
  const first2 = num(react.useState(null), 2)[0];
  let name;
  const tmp15 = num(react.useState(null), 2);
  if (data != null) {
    name = data.name;
  }
  const tmpResult11 = tmp(tmp2[17]);
  const sharedValue = tmpResult11.useSharedValue(0);
  STICKY_HEADER_HEIGHT = obj3.useRef(false);
  closure_11 = obj3.useRef(false);
  if (cResult[1] === gameId) {
    let tmp21;
    let tmp20;
    if (cResult[4] !== gameId) {
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const obj = source(sourceUserId[18]);
              const result = obj.clearGameProfilePendingReturn(gameId);
            }
          };
        }
      }
      let items = [gameId];
      cResult[4] = gameId;
      cResult[5] = Z;
      cResult[6] = items;
      tmp21 = items;
      tmp20 = Z;
    } else {
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const obj = source(sourceUserId[18]);
              const result = obj.clearGameProfilePendingReturn(gameId);
            }
          };
        }
      }
      tmp21 = cResult[6];
    }
    const effect = obj3.useEffect(tmp20, tmp21);
    if (data != null) {
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const obj = source(sourceUserId[18]);
              const result = obj.clearGameProfilePendingReturn(gameId);
            }
          };
        }
      }
    }
    if (cResult[7] === sharedValue) {
      let tmp43;
      let tmp47;
      let tmp46;
      let tmp50;
      let tmp49;
      class Z {
        constructor() {
          return () => {
            if (!ref.current) {
              const obj = source(sourceUserId[18]);
              const result = obj.clearGameProfilePendingReturn(gameId);
            }
          };
        }
      }
      source(tmp2[19])(tmp24);
      const tmpResult12 = tmp(tmp2[17]);
      const sharedValue1 = tmpResult12.useSharedValue(0);
      const tmpResult13 = tmp(tmp2[17]);
      const sharedValue2 = tmpResult13.useSharedValue(0);
      function oe() {
        let tmp = sharedValue1.get() > 0;
        const obj = sharedValue1;
        if (tmp) {
          const value = sharedValue.get();
          tmp = value >= obj.get() - c10;
        }
        return tmp;
      }
      let obj2 = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
      oe.__closure = obj2;
      oe.__workletHash = 15395308691297;
      oe.__initData = sharedValue2;
      function re(arg0, arg1) {
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
      const obj4 = { stickyHeaderVisible: sharedValue2, withTiming: tmp(tmp2[20]).withTiming };
      const useAnimatedReaction = tmp(tmp2[17]).useAnimatedReaction;
      tmp(tmp2[17]);
      re.__closure = obj4;
      re.__workletHash = 3161097061646;
      re.__initData = sharedValue3;
      const animatedReaction = useAnimatedReaction(oe, re);
      function se() {
        let items;
        let obj3;
        const obj = { transform: items };
        const obj2 = { translateY: obj3.interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
        items = [obj2];
        obj3 = ReanimatedRexport;
        return obj;
      }
      const obj5 = { interpolate: tmp(tmp2[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT };
      const useAnimatedStyle = tmp(tmp2[17]).useAnimatedStyle;
      tmp(tmp2[17]);
      se.__closure = obj5;
      se.__workletHash = 16452163547712;
      se.__initData = __initData;
      const animatedStyle = useAnimatedStyle(se);
      const tmpResult16 = tmp(tmp2[17]);
      sharedValue3 = tmpResult16.useSharedValue(Infinity);
      [r10145, tmp38] = num(obj3.useState(false), 2);
      __initData = tmp38;
      num(obj3.useState(false), 2);
      function ce() {
        const value = sharedValue.get();
        return value > sharedValue3.get() - c10;
      }
      const obj6 = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
      ce.__closure = obj6;
      ce.__workletHash = 14521195063038;
      const tmpResult17 = tmp(tmp2[17]);
      class D {
        constructor() {
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
        }
      }
      function le(arg0, arg1) {
        if (arg0 !== arg1) {
          const obj = ReanimatedRexport;
          obj.runOnJS(__initData)(arg0);
        }
      }
      const useAnimatedReaction2 = tmpResult17.useAnimatedReaction;
      le.__closure = { runOnJS: tmp(tmp2[17]).runOnJS, setShowGetButton: tmp38 };
      le.__workletHash = 15045914286853;
      le.__initData = __initData2;
      const obj7 = { runOnJS: tmp(tmp2[17]).runOnJS, setShowGetButton: tmp38 };
      const animatedReaction2 = useAnimatedReaction2(ce, le);
      const tmpResult18 = tmp(tmp2[21]);
      const gameProfileStoreWebsites = tmpResult18.useGameProfileStoreWebsites(data);
      if (cResult[10] !== gameProfileStoreWebsites) {
        let tmp44;
        class Z {
          constructor() {
            return () => {
              if (!ref.current) {
                const obj = source(sourceUserId[18]);
                const result = obj.clearGameProfilePendingReturn(gameId);
              }
            };
          }
        }
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class Se {
            constructor(arg0) {
              return null != arg0;
            }
          }
          cResult[12] = Se;
          tmp44 = Se;
        } else {
          class Se {
            constructor(arg0) {
              return null != arg0;
            }
          }
        }
        const mapped = gameProfileStoreWebsites.map(tmp6(tmp2[22]));
        let found = mapped.filter(tmp44);
        cResult[10] = gameProfileStoreWebsites;
        cResult[11] = found;
        tmp43 = found;
      } else {
        class Se {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      found = tmp43;
      __initData2 = obj3.useRef(undefined);
      ref2 = obj3.useRef(null);
      if (cResult[13] !== name) {
        class Ee {
          constructor() {
            ref2.current = name;
          }
        }
        const items1 = [name];
        cResult[13] = name;
        cResult[14] = items1;
        cResult[15] = Ee;
        tmp47 = Ee;
        tmp46 = items1;
      } else {
        class Ee {
          constructor() {
            ref2.current = name;
          }
        }
        tmp47 = cResult[15];
      }
      const effect1 = obj3.useEffect(tmp47, tmp46);
      if (cResult[16] !== first2) {
        class Ee {
          constructor() {
            ref2.current = name;
          }
        }
        const items2 = [first2];
        cResult[16] = first2;
        cResult[17] = tmp51;
        cResult[18] = items2;
        tmp50 = items2;
        tmp49 = tmp51;
      } else {
        class Ee {
          constructor() {
            ref2.current = name;
          }
        }
        tmp50 = cResult[18];
      }
      const effect2 = obj3.useEffect(tmp49, tmp50);
      if (cResult[19] === gameId) {
        class Ee {
          constructor() {
            ref2.current = name;
          }
        }
      }
      class Ge {
        constructor(action, arg1) {
          let guildId;
          let obj = arg1;
          if (undefined === arg1) {
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
          const obj3 = { gameName: str, gameId, action, similarGameId, viewId: first1, guildId, isVerified: null == communityGuildId && guildIdAndVerifiedFromInvite.isVerified, source };
          guildId = communityGuildId;
          if (communityGuildId == null) {
            guildId = guildIdAndVerifiedFromInvite.guildId;
          }
          const result = trackGameProfileAction(obj3);
        }
      }
      cResult[19] = gameId;
      cResult[20] = source;
      cResult[21] = first1;
      cResult[22] = Ge;
    }
    const obj8 = { gameId: undefined, scrollY: sharedValue };
    cResult[7] = sharedValue;
    cResult[8] = undefined;
    cResult[9] = obj8;
    tmp24 = obj8;
  }
  class D {
    constructor() {
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
    }
  }
  cResult[1] = gameId;
  cResult[2] = num;
  cResult[3] = D;
}) : (function GameProfileScreen(gameId) {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_4;
  let data;
  let isLoading;
  let items14;
  let items16;
  let obj10;
  let obj14;
  let ref3;
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
  STICKY_HEADER_HEIGHT = undefined;
  closure_11 = undefined;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  closure_16 = undefined;
  let gameProfileStoreWebsites;
  let memo;
  __initData3 = undefined;
  __initData4 = undefined;
  let callback1;
  selectionVersion = undefined;
  let first3;
  let closure_24;
  let callback3;
  const initialTab = gameId.initialTab;
  let tmp = closure_11();
  let tmp2 = gameId;
  let tmp3 = sourceUserId;
  let obj = gameId(sourceUserId[11]);
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmp6 = source(sourceUserId[12]);
  const tmp6Result = tmp6(source(sourceUserId[13]).openURL);
  react = tmp6Result;
  let obj2 = react;
  viewId = num(react.useState(() => {
    const obj = gameId(sourceUserId[14]);
    return obj.generateViewId();
  }), 1)[0];
  ref = react.useRef(null);
  let obj3 = gameId(sourceUserId[15]);
  const game = obj3.useGame(gameId);
  ({ data, isLoading } = game);
  let tmp12 = source(sourceUserId[16])(data);
  const tmp13 = num(react.useState(null), 2);
  const first1 = tmp13[0];
  let name;
  const tmp15 = tmp13[1];
  if (data != null) {
    name = data.name;
  }
  const tmp2Result = tmp2(tmp3[17]);
  sharedValue = tmp2Result.useSharedValue(0);
  STICKY_HEADER_HEIGHT = obj2.useRef(false);
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
      const obj = source(sourceUserId[18]);
      const result = obj.clearGameProfilePendingReturn(gameId);
    }
  }, items1);
  let id;
  const tmp5Result = source(tmp3[19]);
  if (data != null) {
    id = data.id;
  }
  tmp5Result({ gameId: id, scrollY: sharedValue });
  const tmp2Result8 = tmp2(tmp3[17]);
  sharedValue1 = tmp2Result8.useSharedValue(0);
  const tmp2Result9 = tmp2(tmp3[17]);
  sharedValue2 = tmp2Result9.useSharedValue(0);
  let fn = function q() {
    let tmp = sharedValue1.get() > 0;
    const obj = sharedValue1;
    if (tmp) {
      const value = sharedValue.get();
      tmp = value >= obj.get() - c10;
    }
    return tmp;
  };
  const obj4 = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT };
  fn.__closure = obj4;
  fn.__workletHash = 5065405682310;
  fn.__initData = memo;
  const fn2 = function j(arg0, arg1) {
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
  const tmp2Result10 = tmp2(tmp3[17]);
  fn2.__closure = { stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[20]).withTiming };
  fn2.__workletHash = 6249404580523;
  fn2.__initData = __initData3;
  ({ stickyHeaderVisible: sharedValue2, withTiming: tmp2(tmp3[20]).withTiming });
  const animatedReaction = tmp2Result10.useAnimatedReaction(fn, fn2);
  const tmp2Result11 = tmp2(tmp3[17]);
  class Z {
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
  Z.__closure = { interpolate: tmp2(tmp3[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT };
  Z.__workletHash = 6838413565739;
  Z.__initData = __initData4;
  ({ interpolate: tmp2(tmp3[17]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT });
  const animatedStyle = tmp2Result11.useAnimatedStyle(Z);
  const tmp2Result12 = tmp2(tmp3[17]);
  sharedValue3 = tmp2Result12.useSharedValue(Infinity);
  const tmp8Result = num(obj2.useState(false), 2);
  first2 = tmp8Result[0];
  closure_16 = tmp30;
  function ee() {
    const value = sharedValue.get();
    return value > sharedValue3.get() - c10;
  }
  ee.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT };
  ee.__workletHash = 14590762926099;
  ee.__initData = callback1;
  const fn3 = function $(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_16)(arg0);
    }
  };
  const tmp2Result13 = tmp2(tmp3[17]);
  fn3.__closure = { runOnJS: tmp2(tmp3[17]).runOnJS, setShowGetButton: tmp8Result[1] };
  fn3.__workletHash = 5106828361905;
  fn3.__initData = selectionVersion;
  ({ runOnJS: tmp2(tmp3[17]).runOnJS, setShowGetButton: tmp8Result[1] });
  const animatedReaction1 = tmp2Result13.useAnimatedReaction(ee, fn3);
  const tmp2Result14 = tmp2(tmp3[21]);
  gameProfileStoreWebsites = tmp2Result14.useGameProfileStoreWebsites(data);
  const items2 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items2);
  __initData3 = obj2.useRef(undefined);
  __initData4 = obj2.useRef(null);
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
  ({ navigation, selectionVersion } = source(tmp3[23])(callback1, initialTab));
  const selectedTab = navigation.selectedTab;
  source(tmp3[23])(callback1, initialTab);
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
    const obj = gameId(sourceUserId[14]);
    const guildIdAndVerifiedFromInvite = obj.getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const obj2 = { viewId, gameId, gameName: str, playedFriendIds: [], playedFriendsData: [], similarGames, guildId, isVerified };
    str = ref.current;
    const trackGameProfileClose = gameId(sourceUserId[14]).trackGameProfileClose;
    gameId(sourceUserId[14]);
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
          return name(sharedValue1, obj);
        };
      }
    }
    return fn;
  }, items13);
  const obj8 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback, children: null };
  if (!isLoading) {
    let tmp56;
    let tmp56Result5;
    if (null != data) {
      tmp56 = name;
      const obj9 = { ref, style: tmp.scrollView, contentContainerStyle: memo1, lockableScrollableContentOffsetY: sharedValue, children: sharedValue(tmp5Result4, obj10) };
      const BottomSheetScrollView = tmp2(tmp3[26]).BottomSheetScrollView;
      obj10 = { obscured: tmp12, children: items14 };
      tmp5Result4 = source(tmp3[27]);
      let tmp56Result = selectedTab === tmp2(tmp3[28]).GameProfileNavTab.OVERVIEW;
      if (tmp56Result) {
        const obj11 = { game: data, invite: first1, viewId, source, trackAction: callback1, onGuildInviteResolved: tmp15, closeModal: source(tmp3[24]).hideAllActionSheets, scrollY: sharedValue, websiteButtons: memo, onStoreLinksMeasured: callback5, onHeaderHeightMeasured: callback4 };
        const tmp5Result5 = source(tmp3[29]);
        tmp56Result = tmp56(tmp5Result5, obj11);
      }
      items14 = [tmp56Result, ];
      let tmp56Result4 = selectedTab === tmp2(tmp3[28]).GameProfileNavTab.COMMUNITIES;
      if (tmp56Result4) {
        const obj12 = { game: data, viewId, scrollY: sharedValue, trackAction: callback1, closeModal: source(tmp3[24]).hideAllActionSheets };
        const tmp5Result6 = source(tmp3[30]);
        tmp56Result4 = tmp56(tmp5Result6, obj12);
      }
      items14[1] = tmp56Result4;
      tmp56Result5 = tmp56(BottomSheetScrollView, obj9);
    }
    const items15 = [tmp56Result5, , , ];
    const obj13 = { style: items16, pointerEvents: "box-none", children: tmp56(source(tmp3[31]), obj14) };
    items16 = [tmp.stickyHeader, animatedStyle];
    const View = tmp5(tmp3[17]).View;
    obj14 = { game: data, headerRight: memo2 };
    items15[1] = tmp56(View, obj13);
    let tmp56Result6 = !isLoading && null != data;
    if (tmp56Result6) {
      const obj15 = { game: data, navigation, onLayout: callback2 };
      tmp56Result6 = tmp56(tmp5(tmp3[32]), obj15);
    }
    items15[2] = tmp56Result6;
    const obj16 = { variant: "overlay", onPress: bottomSheetClose };
    items15[3] = tmp56(tmp2(tmp3[33]).ActionSheetHeaderBar, obj16);
    obj8.children = items15;
    return sharedValue(tmp50, obj8);
  }
  const obj17 = { style: tmp.loadingContainer, children: name(ref, { animating: true, size: "large" }) };
  tmp56Result5 = name(viewId, obj17);
  tmp56 = name;
});
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default tmp5;
