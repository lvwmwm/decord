// Module ID: 8985
// Function ID: 8986
// Name: GameProfileHeader
// Dependencies: [19, 17, 8983, 21, 4758, 580, 558, 568, 4497, 8986, 8987, 5198, 8988, 4754, 2]

// Module 8985 (GameProfileHeader)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 8987 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 114;
let c9 = "rgba(0,0,0,0.3)";
const createStyles = fn(4758);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, iconContainer: null, image: null, titleContainer: null, textShadow: null };
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: fn(8983).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: fn(8983).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.coverContainer = size;
const size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.iconContainer = size1;
obj2.image = { width: "100%", height: "100%" };
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.textShadow = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_10 = createStyles.createStyles(obj2);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const __initData2 = { code: "function GameProfileHeaderTsx2(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const ReactCompilerGating = fn(558);
let obj6 = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(54);
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp4 = closure_10();
  if (scrollY == null) {
    scrollY = obj2.useSharedValue(0);
  }
  obj2 = ReanimatedRexport;
  const fn = function t() {
    return { top: -Math.max(0, -scrollY.get()) };
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  if (cResult[0] !== game.genres) {
    const genres = game.genres;
    const mapped = genres.map(tmp(8986).getGenreText);
    const joined = mapped.join(", ");
    cResult[0] = game.genres;
    cResult[1] = joined;
  }
  const tmp9 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  if (cResult[2] !== game) {
    const coverURL = game.getCoverURL(c8);
    cResult[2] = game;
    cResult[3] = coverURL;
  }
  if (cResult[4] !== game) {
    const iconURL = game.getIconURL(c8);
    cResult[4] = game;
    cResult[5] = iconURL;
  }
  if (cResult[6] !== onHeightMeasured) {
    class A {
      constructor(arg0) {
        if (onHeightMeasured != null) {
          tmp2 = arg0;
          tmpResult = tmp(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
    cResult[6] = onHeightMeasured;
    cResult[7] = A;
  } else {
    class A {
      constructor(arg0) {
        if (onHeightMeasured != null) {
          tmp2 = arg0;
          tmpResult = tmp(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
  }
  if (cResult[8] === animatedStyle) {
    class A {
      constructor(arg0) {
        if (onHeightMeasured != null) {
          tmp2 = arg0;
          tmpResult = tmp(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
    if (cResult[11] === tmp9) {
      class A {
        constructor(arg0) {
          if (onHeightMeasured != null) {
            tmp2 = arg0;
            tmpResult = tmp(arg0.nativeEvent.layout.height);
          }
          return;
        }
      }
      if (cResult[14] !== tmp4.container.backgroundColor) {
        class A {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
        const items = [c9, tmp4.container.backgroundColor];
        cResult[14] = tmp4.container.backgroundColor;
        cResult[15] = items;
      } else {
        class A {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
      }
      if (cResult[16] === tmp4.artHeroGradient) {
        class A {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
        if (cResult[19] === tmp17) {
          class A {
            constructor(arg0) {
              if (onHeightMeasured != null) {
                tmp2 = arg0;
                tmpResult = tmp(arg0.nativeEvent.layout.height);
              }
              return;
            }
          }
        }
        const obj3 = { style: tmp17, children: null };
        const items1 = [tmp18, tmp22];
        obj3.children = items1;
        const tmp27 = React5(tmp8(4497).View, obj3);
        cResult[19] = tmp17;
        cResult[20] = tmp18;
        cResult[21] = tmp22;
        cResult[22] = tmp27;
      }
      const obj4 = { colors: tmp21, style: tmp4.artHeroGradient };
      const tmp24 = timestampProducer(tmp8(5198), obj4);
      cResult[16] = tmp4.artHeroGradient;
      cResult[17] = tmp21;
      cResult[18] = tmp24;
    }
    let tmp19 = null != tmp9;
    if (tmp19) {
      class A {
        constructor(arg0) {
          if (onHeightMeasured != null) {
            tmp2 = arg0;
            tmpResult = tmp(arg0.nativeEvent.layout.height);
          }
          return;
        }
      }
      const obj5 = { source: null, style: null };
      const obj6 = { uri: tmp9 };
      obj5.source = obj6;
      obj5.style = tmp4.artHeroImage;
      tmp19 = timestampProducer(hasOwnProperty, obj5);
    }
    cResult[11] = tmp9;
    cResult[12] = tmp4.artHeroImage;
    cResult[13] = tmp19;
  }
  const items2 = [tmp4.artHero, animatedStyle];
  cResult[8] = animatedStyle;
  cResult[9] = tmp4.artHero;
  cResult[10] = items2;
}) : ((game) => {
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  scrollY = undefined;
  const tmp = closure_10();
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  obj = game(scrollY[8]);
  const fn = function f() {
    return { top: -Math.max(0, -scrollY.get()) };
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 17327557152577;
  fn.__initData = __initData2;
  const genres = game.genres;
  const animatedStyle = game(scrollY[8]).useAnimatedStyle(fn);
  const mapped = genres.map(tmp2(tmp3[9]).getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp7 = onHeightMeasured(scrollY[10])(game, 1024);
  const items = [game];
  const memo = noop.useMemo(() => game.getCoverURL(c8), items);
  const items1 = [game];
  const memo1 = noop.useMemo(() => game.getIconURL(c8), items1);
  const items2 = [onHeightMeasured];
  const obj2 = {
    style: tmp.container,
    onLayout: noop.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items2),
    children: null
  };
  const obj3 = { style: null, children: null };
  const items3 = [tmp.artHero, animatedStyle];
  obj3.style = items3;
  let tmp12 = null != tmp7;
  if (tmp12) {
    const obj4 = { source: null, style: null };
    const obj5 = { uri: tmp7 };
    obj4.source = obj5;
    obj4.style = tmp.artHeroImage;
    tmp12 = closure_6(closure_5, obj4);
  }
  const items4 = [tmp12, ];
  const obj6 = { colors: null, style: tmp.artHeroGradient };
  const items5 = [c9, tmp.container.backgroundColor];
  obj6.colors = items5;
  items4[1] = closure_6(onHeightMeasured(scrollY[11]), obj6);
  obj3.children = items4;
  const items6 = [closure_7(onHeightMeasured(scrollY[8]).View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: null };
  const obj8 = { style: tmp.shadowContainer, children: null };
  if (null != memo) {
    const obj9 = { style: tmp.coverContainer, children: null };
    const obj10 = { source: null, style: null };
    const obj11 = { uri: memo };
    obj10.source = obj11;
    obj10.style = tmp.image;
    obj9.children = tmp15(closure_5, obj10);
    let obj12 = obj9;
  } else {
    obj12 = { style: tmp.iconContainer, children: null };
    let tmp15Result = null != memo1;
    if (tmp15Result) {
      const obj13 = { source: null, style: null };
      const obj14 = { uri: memo1 };
      obj13.source = obj14;
      obj13.style = tmp.image;
      tmp15Result = tmp15(closure_5, obj13);
    }
    obj12.children = tmp15Result;
  }
  obj8.children = closure_6(closure_4, obj12);
  const items7 = [closure_6(closure_4, obj8), ];
  const obj15 = { style: tmp.titleContainer, children: null };
  let tmp15Result3 = null != l30Rank;
  if (tmp15Result3) {
    const obj16 = { rank: l30Rank };
    tmp15Result3 = tmp15(tmp6(tmp3[12]), obj16);
  }
  const items8 = [tmp15Result3, closure_6(game(scrollY[13]).Text, { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: game.name }), ];
  let tmp15Result4 = null;
  if (null != joined) {
    tmp15Result4 = null;
    if ("" !== joined) {
      const obj18 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp15Result4 = tmp15(tmp2(tmp3[13]).Text, obj18);
    }
  }
  items8[2] = tmp15Result4;
  obj15.children = items8;
  items7[1] = closure_7(closure_4, obj15);
  obj7.children = items7;
  items6[1] = closure_7(closure_4, obj7);
  obj2.children = items6;
  return closure_7(closure_4, obj2);
});
