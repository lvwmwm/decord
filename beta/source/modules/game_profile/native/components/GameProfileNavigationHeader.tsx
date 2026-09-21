// Module ID: 9181
// Function ID: 9182
// Name: GameProfileNavigationHeader
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 4497, 4759, 1401, 9182, 4754, 8988, 2]

// Module 9181 (GameProfileNavigationHeader)
import nativeDefault from "native" /* 580 */;
import AvatarUtils from "AvatarUtils" /* 1401 */;
import timing from "timing" /* 4759 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 32;
const createStyles = fn(4758);
let obj2 = { headerContainer: { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" }, headerRow: null, icon: null, titleContainer: null, headerRight: null, rankPillContainer: null };
let obj3 = { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
obj2.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.icon = size;
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.titleContainer = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
obj2.headerRight = { flexDirection: "row", alignItems: "center" };
obj2.rankPillContainer = { flex: 1, flexDirection: "row", alignItems: "center" };
let closure_10 = createStyles.createStyles(obj2);
const __initData = { code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
const __initData2 = { code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
const __initData3 = { code: "function GameProfileNavigationHeaderTsx3(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
const __initData4 = { code: "function GameProfileNavigationHeaderTsx4(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
const ReactCompilerGating = fn(558);
let obj5 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(33);
  ({ game, application, headerRight } = arg0);
  let headerContainer = closure_10();
  _require = tmp4;
  const obj = require("c");
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  const sharedValue = require("ReanimatedRexport").useSharedValue(num);
  if (cResult[0] === null != headerRight) {
    if (cResult[1] === sharedValue) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    const fn2 = function v() {
      return { opacity: sharedValue.get() };
    };
    const obj3 = { headerRightProgress: sharedValue };
    fn2.__closure = obj3;
    fn2.__workletHash = 16001524280109;
    fn2.__initData = __initData;
    const animatedStyle = tmp(4497).useAnimatedStyle(fn2);
    const tmpResult = tmp(4497);
    class B {
      constructor() {
        obj = { opacity: 1 - closure_1.get() };
        return obj;
      }
    }
    const obj4 = { headerRightProgress: sharedValue };
    B.__closure = obj4;
    B.__workletHash = 5182160908530;
    B.__initData = __initData2;
    const animatedStyle1 = tmp(4497).useAnimatedStyle(B);
    if (cResult[4] === application) {
      if (cResult[5] === game) {
        let tmp14 = cResult[6];
      }
      let name;
      if (game != null) {
        name = game.name;
      }
      if (name == null) {
        let name1;
        if (application != null) {
          name1 = application.name;
        }
        name = name1;
      }
      if (null == name) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp25 = closure_7(tmp(9182).BackgroundBlurFill, {});
          cResult[7] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[7];
        }
        if (cResult[8] === tmp14) {
          if (cResult[11] !== name) {
            const obj5 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
            const tmp32 = closure_7(tmp(4754).Heading, obj5);
            cResult[11] = name;
            cResult[12] = tmp32;
            let tmp30 = tmp32;
          } else {
            tmp30 = cResult[12];
          }
          if (cResult[13] === game) {
            if (cResult[14] === animatedStyle1) {
              if (cResult[15] === headerContainer.rankPillContainer) {
                let tmp33 = cResult[16];
              }
              if (cResult[17] === headerContainer.titleContainer) {
                if (cResult[18] === tmp30) {
                  if (cResult[19] === tmp33) {
                    let tmp41 = cResult[20];
                  }
                  if (cResult[21] === headerRight) {
                    if (cResult[22] === animatedStyle) {
                      if (cResult[23] === headerContainer.headerRight) {
                        let tmp45 = cResult[24];
                      }
                      if (cResult[25] === headerContainer.headerRow) {
                        if (cResult[26] === tmp26) {
                          if (cResult[27] === tmp41) {
                            if (cResult[28] === tmp45) {
                              let tmp49 = cResult[29];
                            }
                            if (cResult[30] === headerContainer.headerContainer) {
                            }
                            const obj6 = { style: headerContainer.headerContainer, children: null };
                            const items = [tmp23, tmp49];
                            obj6.children = items;
                            const tmp56 = closure_8(closure_5, obj6);
                            headerContainer = headerContainer.headerContainer;
                            cResult[30] = headerContainer;
                            class B {
                              constructor() {
                                obj = { opacity: 1 - closure_1.get() };
                                return obj;
                              }
                            }
                            cResult[31] = tmp49;
                            cResult[32] = tmp56;
                          }
                        }
                      }
                      const obj7 = { style: headerContainer.headerRow, children: null };
                      const items1 = [tmp26, tmp41, tmp45];
                      obj7.children = items1;
                      const tmp52 = closure_8(closure_5, obj7);
                      cResult[25] = headerContainer.headerRow;
                      class B {
                        constructor() {
                          obj = { opacity: 1 - closure_1.get() };
                          return obj;
                        }
                      }
                      cResult[26] = tmp26;
                      cResult[27] = tmp41;
                      cResult[28] = tmp45;
                      cResult[29] = tmp52;
                      tmp49 = tmp52;
                    }
                  }
                  let tmp46 = null != headerRight;
                  if (tmp46) {
                    const obj8 = { style: null, children: null };
                    const items2 = [headerContainer.headerRight, animatedStyle];
                    obj8.style = items2;
                    obj8.children = headerRight();
                    tmp46 = closure_7(sharedValue(4497).View, obj8);
                  }
                  cResult[21] = headerRight;
                  cResult[22] = animatedStyle;
                  cResult[23] = headerContainer.headerRight;
                  cResult[24] = tmp46;
                  tmp45 = tmp46;
                }
              }
              const obj9 = { style: headerContainer.titleContainer, children: null };
              const items3 = [tmp30, tmp33];
              obj9.children = items3;
              const tmp44 = closure_8(closure_5, obj9);
              cResult[17] = headerContainer.titleContainer;
              class B {
                constructor() {
                  obj = { opacity: 1 - closure_1.get() };
                  return obj;
                }
              }
              cResult[19] = tmp33;
              cResult[20] = tmp44;
              tmp41 = tmp44;
            }
          }
          let l30Rank;
          if (game != null) {
            l30Rank = game.l30Rank;
          }
          let tmp35 = null != l30Rank;
          if (tmp35) {
            const obj10 = { style: headerContainer.rankPillContainer, children: null };
            const obj11 = { rank: game.l30Rank, compact: true };
            const items4 = [closure_7(sharedValue(8988), obj11), ];
            const obj12 = { style: null, children: null };
            const items5 = [StyleSheet.absoluteFill, ];
            class B {
              constructor() {
                obj = { opacity: 1 - closure_1.get() };
                return obj;
              }
            }
            obj12.style = items5;
            const obj13 = { rank: game.l30Rank };
            obj12.children = closure_7(sharedValue(8988), obj13);
            items4[1] = closure_7(sharedValue(4497).View, obj12);
            obj10.children = items4;
            tmp35 = closure_8(closure_5, obj10);
          }
          cResult[13] = game;
          cResult[14] = animatedStyle1;
          cResult[15] = headerContainer.rankPillContainer;
          class B {
            constructor() {
              obj = { opacity: 1 - closure_1.get() };
              return obj;
            }
          }
          tmp33 = tmp35;
        }
        let tmp27 = null != tmp14;
        if (tmp27) {
          const obj14 = { source: null, style: null };
          const obj15 = { uri: tmp14 };
          obj14.source = obj15;
          obj14.style = headerContainer.icon;
          tmp27 = closure_7(closure_4, obj14);
        }
        cResult[8] = tmp14;
        cResult[9] = headerContainer.icon;
        cResult[10] = tmp27;
        class B {
          constructor() {
            obj = { opacity: 1 - closure_1.get() };
            return obj;
          }
        }
      }
    }
    let iconURL;
    if (game != null) {
      let str = "png";
      if (tmp(1401).SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = game.getIconURL(c9, str);
    }
    if (iconURL == null) {
      let iconURL1;
      if (application != null) {
        let str2 = "png";
        if (tmp(1401).SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL1 = application.getIconURL(c9, str2);
      }
      iconURL = iconURL1;
    }
    if (iconURL == null) {
      iconURL = null;
    }
    cResult[4] = application;
    cResult[5] = game;
    cResult[6] = iconURL;
    tmp14 = iconURL;
    const tmpResult2 = tmp(4497);
  }
  const fn = function h() {
    let num = 0;
    if (closure_0) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: 200 }));
  };
  const items6 = [null != headerRight, sharedValue];
  cResult[0] = null != headerRight;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items6;
  tmp7 = items6;
  tmp6 = fn;
}) : ((game) => {
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  const tmp = closure_10();
  dependencyMap = tmp2;
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = game(4497).useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: 200 }));
  }, items);
  const obj = game(4497);
  const fn = function k() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 7824413274607;
  fn.__initData = __initData3;
  const animatedStyle = game(4497).useAnimatedStyle(fn);
  const tmp3Result = game(4497);
  class C {
    constructor() {
      obj = { opacity: 1 - closure_3.get() };
      return obj;
    }
  }
  C.__closure = { headerRightProgress: sharedValue };
  C.__workletHash = 12417398077364;
  C.__initData = __initData4;
  const items1 = [game, application];
  const animatedStyle1 = game(4497).useAnimatedStyle(C);
  const memo = sharedValue.useMemo(() => {
    let iconURL;
    if (game != null) {
      let str = "png";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = game.getIconURL(c9, str);
    }
    if (iconURL == null) {
      let iconURL1;
      if (application != null) {
        let str2 = "png";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL1 = obj2.getIconURL(c9, str2);
      }
      iconURL = iconURL1;
      obj2 = application;
    }
    if (iconURL == null) {
      iconURL = null;
    }
    return iconURL;
  }, items1);
  let name;
  if (game != null) {
    name = game.name;
  }
  if (name == null) {
    let name1;
    if (application != null) {
      name1 = application.name;
    }
    name = name1;
  }
  let tmp13Result2 = null;
  if (null != name) {
    let obj2 = { style: tmp.headerContainer, children: null };
    const items2 = [closure_7(tmp3(9182).BackgroundBlurFill, {}), ];
    const obj3 = { style: tmp.headerRow, children: null };
    let tmp15Result = null != memo;
    if (tmp15Result) {
      const obj4 = { source: null, style: null };
      const obj5 = { uri: memo };
      obj4.source = obj5;
      obj4.style = tmp.icon;
      tmp15Result = tmp15(closure_4, obj4);
    }
    const items3 = [tmp15Result, , ];
    const obj6 = { style: tmp.titleContainer, children: null };
    const obj7 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    const items4 = [closure_7(tmp3(4754).Heading, obj7), ];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    let tmp13Result = null != l30Rank;
    if (tmp13Result) {
      const obj8 = { style: tmp.rankPillContainer, children: null };
      const obj9 = { rank: game.l30Rank, compact: true };
      const items5 = [tmp15(application(8988), obj9), ];
      const obj10 = { style: null, children: null };
      const items6 = [StyleSheet.absoluteFill, animatedStyle1];
      obj10.style = items6;
      const obj11 = { rank: game.l30Rank };
      obj10.children = tmp15(application(8988), obj11);
      items5[1] = tmp15(application(4497).View, obj10);
      obj8.children = items5;
      tmp13Result = tmp13(tmp14, obj8);
    }
    items4[1] = tmp13Result;
    obj6.children = items4;
    items3[1] = closure_8(closure_5, obj6);
    let tmp15Result2 = null != headerRight;
    if (tmp15Result2) {
      const obj12 = { style: null, children: null };
      const items7 = [tmp.headerRight, animatedStyle];
      obj12.style = items7;
      obj12.children = headerRight();
      tmp15Result2 = tmp15(application(4497).View, obj12);
    }
    items3[2] = tmp15Result2;
    obj3.children = items3;
    items2[1] = closure_8(closure_5, obj3);
    obj2.children = items2;
    tmp13Result2 = tmp13(tmp14, obj2);
  }
  return tmp13Result2;
});
