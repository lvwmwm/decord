// Module ID: 12633
// Function ID: 12634
// Name: ConjureHomeCarousel
// Dependencies: [32, 19, 17, 5006, 1999, 1084, 21, 587, 9682, 8636, 12634, 11027, 12247, 5005, 558, 576, 5086, 12636, 1415, 5707, 5271, 12637, 12645, 12788, 504, 1504, 1125, 3864, 2]

// Module 12633 (ConjureHomeCarousel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import AppsIcon from "AppsIcon" /* 8636 */;
import GameControllerIcon from "GameControllerIcon" /* 9682 */;
import ShieldIcon from "ShieldIcon" /* 11027 */;
import RobotIcon from "RobotIcon" /* 12247 */;
import WidgetsIcon from "WidgetsIcon" /* 12634 */;
import conjureHomeCarouselFan from "conjureHomeCarouselFan" /* 12636 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5006 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let c10;
let c9;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
let size;
let size1;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
let AccessibilityStore = AccessibilityStore_mod;
const AppStates = Constants.AppStates;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 240;
const STEP = 240 + nativeDefault.space.PX_24;
const sum = 36 + 2 * nativeDefault.space.PX_6 + 2;
const sum1 = sum + nativeDefault.space.PX_12;
const PX_24 = nativeDefault.space.PX_24;
let obj = { games: GameControllerIcon.GameControllerIcon, apps: AppsIcon.AppsIcon, profile_widget: WidgetsIcon.WidgetsIcon, automod: ShieldIcon.ShieldIcon, chat_bot: RobotIcon.RobotIcon };
let createStyles = createStyles_mod;
let obj2 = { carousel: obj3, item: rect, promptRow: obj4, avatar: size, bubble: obj5, card: obj6, thumbnail: obj7, footer: obj8, categoryIcon: size1, footerText: { flex: 1 } };
obj3 = { height: sum1 + 135 + 54 + PX_24, overflow: "hidden" };
rect = { position: "absolute", top: 0, left: 0, width: 240, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.round };
obj5 = { flex: 1, height: sum, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj7 = { height: 135, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_10, padding: nativeDefault.space.PX_10 };
size1 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_14 = createStyles(obj2);
const __initData = { code: "function ConjureHomeCarouselTsx1(){const{wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH}=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+\"deg\"}]};}" };
const __initData2 = { code: "function ConjureHomeCarouselTsx2(){const{wrapConjureHomeCarouselDistance,index,STEP,offset,loop,conjureHomeCarouselFan,viewportWidth,CARD_WIDTH}=this.__closure;const distance=wrapConjureHomeCarouselDistance(index*STEP,offset.get(),loop);const{angleDeg:angleDeg,dropPx:dropPx}=conjureHomeCarouselFan(distance/STEP,STEP);return{transform:[{translateX:viewportWidth/2-CARD_WIDTH/2+distance},{translateY:dropPx},{rotate:angleDeg+\"deg\"}]};}" };
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeCarouselItem(offset) {
  let avatar;
  let index;
  let inspiration;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let promptRow;
  let viewportWidth;
  obj = index(viewportWidth[15]);
  const cResult = obj.c(49);
  ({ inspiration, index } = offset);
  offset = offset.offset;
  viewportWidth = offset.viewportWidth;
  const count = offset.count;
  const tmp4 = closure_14();
  const result = STEP * count;
  _slicedToArray = result;
  let obj2 = index(viewportWidth[16]);
  const fn = function t() {
    let items;
    _slicedToArray = index * STEP;
    obj = conjureHomeCarouselFan;
    const result1 = obj.wrapConjureHomeCarouselDistance(_slicedToArray, offset.get(), _slicedToArray);
    const obj2 = conjureHomeCarouselFan;
    const result2 = obj2.conjureHomeCarouselFan(result1 / STEP, STEP);
    const obj3 = { transform: items };
    items = [, , ];
    const obj4 = { translateX: viewportWidth / 2 - 120 + result1 };
    items[0] = obj4;
    items[1] = { translateY: result2.dropPx };
    items[2] = { rotate: "" + result2.angleDeg + "deg" };
    ({ rotate: "" + result2.angleDeg + "deg" });
    return obj3;
  };
  let obj3 = { wrapConjureHomeCarouselDistance: index(viewportWidth[17]).wrapConjureHomeCarouselDistance, index, STEP, offset, loop: result, conjureHomeCarouselFan: index(viewportWidth[17]).conjureHomeCarouselFan, viewportWidth, CARD_WIDTH };
  fn.__closure = obj3;
  fn.__workletHash = 10891519667070;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp8;
    let tmp9;
    if (cResult[1] === tmp4.item) {
      tmp8 = cResult[2];
    }
    ({ promptRow, avatar } = tmp4);
    if (cResult[3] !== inspiration.authorAvatarSeed) {
      const makeSource = index(viewportWidth[18]).makeSource;
      index(viewportWidth[18]);
      const tmpResult3 = index(viewportWidth[18]);
      const source = makeSource(tmpResult3.getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed));
      cResult[3] = inspiration.authorAvatarSeed;
      cResult[4] = source;
      tmp9 = source;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.avatar) {
      let tmp12;
      let tmp16;
      if (cResult[6] === tmp9) {
        tmp12 = cResult[7];
      }
      if (cResult[8] !== inspiration.shortPrompt) {
        let obj4 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
        const tmp18 = closure_9(index(viewportWidth[20]).Text, obj4);
        cResult[8] = inspiration.shortPrompt;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp4.bubble) {
        let tmp19;
        if (cResult[11] === tmp16) {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp4.promptRow) {
          if (cResult[14] === tmp12) {
            let tmp23;
            let tmp29;
            if (cResult[15] === tmp19) {
              tmp23 = cResult[16];
            }
            const card = tmp4.card;
            const tmp28 = offset(viewportWidth[21])[inspiration.id];
            if (cResult[17] !== tmp28) {
              size = { asset: tmp28, width: "100%", height: "100%" };
              const tmp31 = closure_9(index(viewportWidth[22]).LocalSvg, size);
              cResult[17] = tmp28;
              cResult[18] = tmp31;
              tmp29 = tmp31;
            } else {
              tmp29 = cResult[18];
            }
            if (cResult[19] === tmp4.thumbnail) {
              let tmp32;
              let tmp36;
              if (cResult[20] === tmp29) {
                tmp32 = cResult[21];
              }
              const footer = tmp4.footer;
              if (cResult[22] !== obj[inspiration.category]) {
                const obj5 = { size: "sm", color: offset(viewportWidth[7]).colors.ICON_STRONG };
                const tmp38 = closure_9(obj[inspiration.category], obj5);
                cResult[22] = obj[inspiration.category];
                cResult[23] = tmp38;
                tmp36 = tmp38;
              } else {
                tmp36 = cResult[23];
              }
              if (cResult[24] === tmp4.categoryIcon) {
                let tmp39;
                let tmp43;
                let tmp46;
                let tmp48;
                if (cResult[25] === tmp36) {
                  tmp39 = cResult[26];
                }
                const footerText = tmp4.footerText;
                if (cResult[27] !== inspiration.name) {
                  const obj6 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
                  const tmp45 = closure_9(index(viewportWidth[20]).Text, obj6);
                  cResult[27] = inspiration.name;
                  cResult[28] = tmp45;
                  tmp43 = tmp45;
                } else {
                  tmp43 = cResult[28];
                }
                if (cResult[29] !== inspiration.category) {
                  const tmpResult4 = index(viewportWidth[23]);
                  let result1 = tmpResult4.conjureHomeCategoryLabel(inspiration.category);
                  cResult[29] = inspiration.category;
                  cResult[30] = result1;
                  tmp46 = result1;
                } else {
                  tmp46 = cResult[30];
                }
                if (cResult[31] !== tmp46) {
                  const obj7 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: tmp46 };
                  const tmp50 = closure_9(index(viewportWidth[20]).Text, obj7);
                  cResult[31] = tmp46;
                  cResult[32] = tmp50;
                  tmp48 = tmp50;
                } else {
                  tmp48 = cResult[32];
                }
                if (cResult[33] === tmp4.footerText) {
                  if (cResult[34] === tmp43) {
                    let tmp51;
                    if (cResult[35] === tmp48) {
                      tmp51 = cResult[36];
                    }
                    if (cResult[37] === tmp4.footer) {
                      if (cResult[38] === tmp39) {
                        let tmp55;
                        if (cResult[39] === tmp51) {
                          tmp55 = cResult[40];
                        }
                        if (cResult[41] === tmp4.card) {
                          if (cResult[42] === tmp32) {
                            let tmp59;
                            if (cResult[43] === tmp55) {
                              tmp59 = cResult[44];
                            }
                            if (cResult[45] === tmp8) {
                              if (cResult[46] === tmp59) {
                                let tmp63;
                                if (cResult[47] === tmp23) {
                                  tmp63 = cResult[48];
                                }
                                return tmp63;
                              }
                            }
                            const obj8 = { style: tmp8, children: items };
                            items = [tmp23, tmp59];
                            const tmp65 = closure_10(offset(viewportWidth[16]).View, obj8);
                            cResult[45] = tmp8;
                            cResult[46] = tmp59;
                            cResult[47] = tmp23;
                            cResult[48] = tmp65;
                            tmp63 = tmp65;
                          }
                        }
                        const obj9 = { style: card, children: items1 };
                        items1 = [tmp32, tmp55];
                        const tmp62 = closure_10(View, obj9);
                        cResult[41] = tmp4.card;
                        cResult[42] = tmp32;
                        cResult[43] = tmp55;
                        cResult[44] = tmp62;
                        tmp59 = tmp62;
                      }
                    }
                    const obj10 = { style: footer, children: items2 };
                    items2 = [tmp39, tmp51];
                    const tmp58 = closure_10(View, obj10);
                    cResult[37] = tmp4.footer;
                    cResult[38] = tmp39;
                    cResult[39] = tmp51;
                    cResult[40] = tmp58;
                    tmp55 = tmp58;
                  }
                }
                const obj11 = { style: footerText, children: items3 };
                items3 = [tmp43, tmp48];
                const tmp54 = closure_10(View, obj11);
                cResult[33] = tmp4.footerText;
                cResult[34] = tmp43;
                cResult[35] = tmp48;
                cResult[36] = tmp54;
                tmp51 = tmp54;
              }
              const obj12 = { style: tmp4.categoryIcon, children: tmp36 };
              const tmp42 = closure_9(View, obj12);
              cResult[24] = tmp4.categoryIcon;
              cResult[25] = tmp36;
              cResult[26] = tmp42;
              tmp39 = tmp42;
            }
            const obj13 = { style: tmp4.thumbnail, children: tmp29 };
            const tmp35 = closure_9(View, obj13);
            cResult[19] = tmp4.thumbnail;
            cResult[20] = tmp29;
            cResult[21] = tmp35;
            tmp32 = tmp35;
          }
        }
        const obj14 = { style: promptRow, children: items4 };
        items4 = [tmp12, tmp19];
        const tmp26 = closure_10(View, obj14);
        cResult[13] = tmp4.promptRow;
        cResult[14] = tmp12;
        cResult[15] = tmp19;
        cResult[16] = tmp26;
        tmp23 = tmp26;
      }
      const obj15 = { style: tmp4.bubble, children: tmp16 };
      const tmp22 = closure_9(View, obj15);
      cResult[10] = tmp4.bubble;
      cResult[11] = tmp16;
      cResult[12] = tmp22;
      tmp19 = tmp22;
    }
    const obj16 = { style: avatar, source: tmp9 };
    const tmp15 = closure_9(offset(viewportWidth[19]), obj16);
    cResult[5] = tmp4.avatar;
    cResult[6] = tmp9;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
  const items5 = [tmp4.item, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp4.item;
  cResult[2] = items5;
  tmp8 = items5;
}) : (function ConjureHomeCarouselItem(offset) {
  let LocalSvg;
  let index;
  let inspiration;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let makeSource;
  let obj13;
  let obj18;
  let obj6;
  let obj8;
  ({ inspiration, index } = offset);
  offset = offset.offset;
  const viewportWidth = offset.viewportWidth;
  const count = offset.count;
  const tmp = closure_14();
  let result = STEP * count;
  let c3 = result;
  const tmp2 = obj[inspiration.category];
  obj = index(viewportWidth[16]);
  const fn = function u() {
    let items;
    const result = index * STEP;
    obj = conjureHomeCarouselFan;
    const result1 = obj.wrapConjureHomeCarouselDistance(result, offset.get(), c3);
    const obj2 = conjureHomeCarouselFan;
    const result2 = obj2.conjureHomeCarouselFan(result1 / STEP, STEP);
    const obj3 = { transform: items };
    items = [, , ];
    const obj4 = { translateX: viewportWidth / 2 - 120 + result1 };
    items[0] = obj4;
    items[1] = { translateY: result2.dropPx };
    items[2] = { rotate: "" + result2.angleDeg + "deg" };
    ({ rotate: "" + result2.angleDeg + "deg" });
    return obj3;
  };
  let obj2 = { wrapConjureHomeCarouselDistance: index(viewportWidth[17]).wrapConjureHomeCarouselDistance, index, STEP, offset, loop: result, conjureHomeCarouselFan: index(viewportWidth[17]).conjureHomeCarouselFan, viewportWidth, CARD_WIDTH };
  fn.__closure = obj2;
  fn.__workletHash = 15132816599517;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: items, children: items2 };
  items = [tmp.item, animatedStyle];
  let obj4 = { style: tmp.promptRow, children: items1 };
  View = offset(viewportWidth[16]).View;
  const obj5 = { style: tmp.avatar, source: makeSource(obj6.getDefaultAvatarURL(undefined, inspiration.authorAvatarSeed)) };
  const tmp5 = offset(viewportWidth[19]);
  makeSource = index(viewportWidth[18]).makeSource;
  index(viewportWidth[18]);
  obj6 = index(viewportWidth[18]);
  items1 = [closure_9(tmp5, obj5), ];
  const obj7 = { style: tmp.bubble, children: closure_9(index(viewportWidth[20]).Text, obj8) };
  obj8 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, children: inspiration.shortPrompt };
  items1[1] = closure_9(View, obj7);
  items2 = [closure_10(View, obj4), ];
  const obj9 = { style: tmp.card, children: items3 };
  const obj10 = { style: tmp.thumbnail, children: closure_9(LocalSvg, size) };
  size = { asset: offset(viewportWidth[21])[inspiration.id], width: "100%", height: "100%" };
  LocalSvg = index(viewportWidth[22]).LocalSvg;
  items3 = [closure_9(View, obj10), ];
  const obj11 = { style: tmp.footer, children: items4 };
  const obj12 = { style: tmp.categoryIcon, children: closure_9(tmp2, obj13) };
  obj13 = { size: "sm", color: offset(viewportWidth[7]).colors.ICON_STRONG };
  items4 = [closure_9(View, obj12), ];
  const obj14 = { style: tmp.footerText, children: items5 };
  items5 = [, ];
  const obj15 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: inspiration.name };
  items5[0] = closure_9(index(viewportWidth[20]).Text, obj15);
  const obj16 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: obj18.conjureHomeCategoryLabel(inspiration.category) };
  const Text = index(viewportWidth[20]).Text;
  obj18 = index(viewportWidth[23]);
  items5[1] = closure_9(Text, obj16);
  items4[1] = closure_10(View, obj14);
  items3[1] = closure_10(View, obj11);
  items2[1] = closure_10(View, obj9);
  return closure_10(View, obj3);
}));
const __initData3 = { code: "function ConjureHomeCarouselTsx3(frame){const{offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop}=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);}" };
const __initData4 = { code: "function ConjureHomeCarouselTsx4(frame){const{offset,CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND,loop}=this.__closure;var _frame$timeSincePrevi;const elapsed=(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:0;offset.set((offset.get()+CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND*elapsed/1000)%loop);}" };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeCarousel(onScreen) {
  let closure_2;
  let first;
  let result1;
  let sharedValue;
  let state;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  obj = first(576);
  const cResult = obj.c(17);
  onScreen = onScreen.onScreen;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = first(12788);
    let result = tmpResult.conjureHomeInspirationEntries();
    let num = 0;
    cResult[0] = result;
    first = result;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class P {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[1] = items;
    cResult[2] = P;
    tmp7 = P;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const tmpResult6 = first(504);
  const stateFromStores = tmpResult6.useStateFromStores(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class O {
      constructor() {
        return state.getState() === constants.ACTIVE;
      }
    }
    cResult[3] = items1;
    cResult[4] = O;
    tmp11 = O;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult7 = first(504);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp10, tmp11);
  const tmpResult8 = first(1504);
  const isFocused = tmpResult8.useIsFocused();
  const tmp15 = sharedValue(result1.useState(0), 2);
  const first1 = tmp15[0];
  dependencyMap = tmp15[1];
  const tmpResult9 = first(5086);
  sharedValue = tmpResult9.useSharedValue(0);
  const obj6 = result1;
  result1 = closure_12 * first.length;
  const fn = function y(timeSincePreviousFrame) {
    let num = timeSincePreviousFrame.timeSincePreviousFrame;
    if (num == null) {
      num = 0;
    }
    set = sharedValue.set;
    const value = sharedValue.get();
    const result = set((value + conjureHomeCarouselFan.CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND * num / 1000) % result1);
  };
  const tmpResult10 = first(5086);
  fn.__closure = { offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: first(12636).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result1 };
  fn.__workletHash = 4240488633760;
  fn.__initData = __initData3;
  ({ offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: first(12636).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result1 });
  const frameCallback = tmpResult10.useFrameCallback(fn, false);
  const tmp20 = !stateFromStores && stateFromStores1 && isFocused && onScreen && first1 > 0;
  AccessibilityStore = tmp20;
  if (cResult[5] === frameCallback) {
    let tmp21;
    let tmp22;
    let tmp26;
    let tmp25;
    if (cResult[6] === tmp20) {
      tmp21 = cResult[7];
      tmp22 = cResult[8];
    }
    const effect = obj6.useEffect(tmp21, tmp22);
    const _Symbol = Symbol;
    class O {
      constructor() {
        return state.getState() === constants.ACTIVE;
      }
    }
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const string = tmp(1125).intl.string;
      class O {
        constructor() {
          return state.getState() === constants.ACTIVE;
        }
      }
      const fn3 = function k(nativeEvent) {
        return closure_2(nativeEvent.nativeEvent.layout.width);
      };
      cResult[9] = fn3;
      cResult[10] = tmp28;
      tmp26 = tmp28;
      tmp25 = fn3;
    } else {
      tmp25 = cResult[9];
      tmp26 = cResult[10];
    }
    if (cResult[11] === sharedValue) {
      let tmp29;
      if (cResult[12] === first1) {
        tmp29 = cResult[13];
      }
      if (cResult[14] === tmp4.carousel) {
        let tmp31;
        if (cResult[15] === tmp29) {
          tmp31 = cResult[16];
        }
        return tmp31;
      }
      class O {
        constructor() {
          return state.getState() === constants.ACTIVE;
        }
      }
      const obj3 = { style: tmp24, accessible: true, accessibilityLabel: tmp26, onLayout: tmp25, children: tmp29 };
      const tmp33 = closure_9(frameCallback, obj3);
      cResult[14] = tmp4.carousel;
      cResult[15] = tmp29;
      cResult[16] = tmp33;
      tmp31 = tmp33;
    }
    let mapped = null;
    if (first1 > 0) {
      mapped = first.map((inspiration, index) => {
        obj = { inspiration, index, count: first.length, offset: sharedValue, viewportWidth: first1 };
        return React4(closure_17, obj, inspiration.id);
      });
    }
    cResult[11] = sharedValue;
    cResult[12] = first1;
    cResult[13] = mapped;
    tmp29 = mapped;
  }
  const fn2 = function w() {
    frameCallback.setActive(useReducedMotion);
  };
  const items2 = [frameCallback, tmp20];
  cResult[5] = frameCallback;
  cResult[6] = tmp20;
  cResult[7] = fn2;
  cResult[8] = items2;
  tmp22 = items2;
  tmp21 = fn2;
}) : (function ConjureHomeCarousel(onScreen) {
  let c4;
  let closure_2;
  let intl;
  let mapped;
  let state;
  let sharedValue;
  react = undefined;
  let frameCallback;
  let useReducedMotion;
  onScreen = onScreen.onScreen;
  obj = react;
  const tmp = closure_14();
  const memo = react.useMemo(() => {
    obj = memo(closure_2[23]);
    return obj.conjureHomeInspirationEntries();
  }, []);
  const items = [useReducedMotion];
  const obj2 = memo(504);
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [AppStateStore];
  const obj3 = memo(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => state.getState() === constants.ACTIVE);
  const obj4 = memo(1504);
  const isFocused = obj4.useIsFocused();
  const tmp7 = sharedValue(react.useState(0), 2);
  const viewportWidth = tmp7[0];
  dependencyMap = tmp7[1];
  const obj5 = memo(5086);
  sharedValue = obj5.useSharedValue(0);
  let result = closure_12 * memo.length;
  react = result;
  const obj6 = memo(5086);
  const tmp2 = memo;
  class C {
    constructor(timeSincePreviousFrame) {
      let num = timeSincePreviousFrame.timeSincePreviousFrame;
      if (num == null) {
        num = 0;
      }
      set = sharedValue.set;
      const value = sharedValue.get();
      const result = set((value + conjureHomeCarouselFan.CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND * num / 1000) % c4);
    }
  }
  C.__closure = { offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: memo(12636).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result };
  C.__workletHash = 10027169379079;
  C.__initData = __initData4;
  ({ offset: sharedValue, CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND: memo(12636).CONJURE_HOME_CAROUSEL_SPEED_PX_PER_SECOND, loop: result });
  frameCallback = obj6.useFrameCallback(C, false);
  const tmp12 = !stateFromStores && stateFromStores1 && isFocused && onScreen && viewportWidth > 0;
  useReducedMotion = tmp12;
  const items2 = [frameCallback, tmp12];
  const effect = obj.useEffect(() => {
    frameCallback.setActive(useReducedMotion);
  }, items2);
  const obj8 = {
    style: tmp.carousel,
    accessible: true,
    accessibilityLabel: intl.string(viewportWidth(3864).Qc4S39),
    onLayout(nativeEvent) {
      return closure_2(nativeEvent.nativeEvent.layout.width);
    },
    children: mapped
  };
  intl = tmp2(1125).intl;
  mapped = null;
  const tmp14 = closure_9;
  const tmp15 = frameCallback;
  if (viewportWidth > 0) {
    mapped = memo.map((inspiration, index) => {
      obj = { inspiration, index, count: memo.length, offset: sharedValue, viewportWidth };
      return React4(closure_17, obj, inspiration.id);
    });
  }
  return tmp14(tmp15, obj8);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeCarousel.tsx");

export default memo2Result;
export const CONJURE_HOME_CAROUSEL_ROOM_BELOW = PX_24;
