// Module ID: 12979
// Function ID: 12980
// Name: CheckpointRecapCard
// Dependencies: [32, 19, 17, 21, 12939, 4969, 587, 558, 576, 8622, 6034, 1900, 5050, 5204, 7960, 5667, 10570, 2]

// Module 12979 (CheckpointRecapCard)
import nativeDefault from "native" /* 587 */;
import react_nativeDefault from "react-native" /* 1900 */;
import timing from "timing" /* 5204 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6034 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 12939 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let rect;
let size;
let size1;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 200;
let c10 = 268;
let c11 = 284;
let c12 = "M44 34V0H200V284H0V43.5H34L38 38L44 34Z";
let c13 = 40;
let c14 = "M0 40H30L40 30V0H10L0 10V40Z";
let c15 = 240;
let c16 = 150;
let c17 = 2026;
const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(2026, 64);
let createStyles = createStyles_mod;
let obj = { card: { width: 200, height: 268, overflow: "hidden", transformOrigin: "top left" }, container: { position: "absolute", top: 0, left: 0 }, year: rect, logo: size, clyde: { width: 28, height: 28 }, character: size1 };
rect = { position: "absolute", left: 178 - checkpointStatNumberWidth / 2, top: 22.5, transform: items };
items = [{ rotate: "90deg" }];
size = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_4, width: 40, height: 40, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", top: nativeDefault.space.PX_16, left: -20, width: 240, height: 240 };
let closure_18 = createStyles(obj);
const __initData = { code: "function CheckpointRecapCardTsx1(){const{isCardArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isCardArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}" };
const __initData2 = { code: "function CheckpointRecapCardTsx2(){const{isCardArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isCardArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}" };
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointRecapCard(arg0) {
  let character;
  let closure_2;
  let closure_4;
  let first;
  let hasItem;
  let items;
  let items2;
  let maxHeight;
  let primaryBackgroundColor;
  let recapCardBackgroundImage;
  let secondaryBackgroundColor;
  let obj = recapCardBackgroundImage(576);
  const cResult = obj.c(68);
  ({ character, maxHeight } = arg0);
  const tmp4 = closure_18();
  let num = 1;
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / c10, 0.75), 1);
  }
  const result = c9 * num;
  const result1 = c10 * num;
  if (cResult[0] === result) {
    let tmp11;
    let arr2;
    let tmp17;
    if (cResult[3] !== num) {
      let obj2 = { transform: items };
      items = [{ scale: num }];
      const obj3 = { scale: num };
      cResult[3] = num;
      cResult[4] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[4];
    }
    const tmpResult = recapCardBackgroundImage(8622);
    const cardColors = tmpResult.getCardColors(character);
    ({ primaryBackgroundColor, secondaryBackgroundColor, recapCardBackgroundImage } = cardColors);
    if (cResult[5] !== character) {
      let characterLayerUrls;
      if (null != character) {
        const _Math3 = Math;
        const tmpResult3 = recapCardBackgroundImage(6034);
        characterLayerUrls = tmpResult3.getCharacterLayerUrls(character, Math.round(c15 * first(1900)()));
      } else {
        characterLayerUrls = [];
      }
      cResult[5] = character;
      cResult[6] = characterLayerUrls;
      arr2 = characterLayerUrls;
    } else {
      arr2 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          set = new Set();
          return set;
        }
      }
      cResult[7] = U;
      tmp17 = U;
    } else {
      class U {
        constructor() {
          set = new Set();
          return set;
        }
      }
    }
    const tmp20 = hasItem(react.useState(tmp17), 2);
    first = tmp20[0];
    dependencyMap = tmp21;
    hasItem = first.has(recapCardBackgroundImage);
    if (hasItem) {
      class U {
        constructor() {
          set = new Set();
          return set;
        }
      }
      hasItem = arr2.length > 0;
    }
    if (hasItem) {
      class U {
        constructor() {
          set = new Set();
          return set;
        }
      }
    }
    const fn = function z() {
      let opacity = 0;
      if (hasItem) {
        const obj2 = { duration };
        const obj = timing;
        opacity = obj.withTiming(1, obj2);
      }
      return { opacity };
    };
    const obj4 = { isCardArtLoaded: hasItem, withTiming: recapCardBackgroundImage(5204).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 };
    const useAnimatedStyle = tmp(5050).useAnimatedStyle;
    recapCardBackgroundImage(5050);
    fn.__closure = obj4;
    fn.__workletHash = 7330466380212;
    fn.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn);
    if (cResult[8] !== tmp20[1]) {
      class U {
        constructor() {
          set = new Set();
          return set;
        }
      }
      cResult[8] = tmp20[1];
      cResult[9] = tmp28;
    } else {
      class U {
        constructor() {
          set = new Set();
          return set;
        }
      }
    }
    react = tmp27;
    if (cResult[10] === tmp11) {
      class U {
        constructor() {
          set = new Set();
          return set;
        }
      }
      if (cResult[13] !== secondaryBackgroundColor) {
        class U {
          constructor() {
            set = new Set();
            return set;
          }
        }
        const obj5 = { d, fill: secondaryBackgroundColor };
        cResult[13] = secondaryBackgroundColor;
        cResult[14] = closure_7(recapCardBackgroundImage(7960).Path, obj5);
        const tmp32 = closure_7(recapCardBackgroundImage(7960).Path, obj5);
      } else {
        class U {
          constructor() {
            set = new Set();
            return set;
          }
        }
      }
      if (cResult[15] === tmp4.container) {
        class U {
          constructor() {
            set = new Set();
            return set;
          }
        }
        if (cResult[18] !== animatedStyle) {
          class U {
            constructor() {
              set = new Set();
              return set;
            }
          }
          const items1 = [absoluteFill.absoluteFill, animatedStyle];
          cResult[18] = animatedStyle;
          cResult[19] = items1;
        } else {
          class U {
            constructor() {
              set = new Set();
              return set;
            }
          }
        }
        if (cResult[20] !== recapCardBackgroundImage) {
          class U {
            constructor() {
              set = new Set();
              return set;
            }
          }
          tmp40[0] = recapCardBackgroundImage;
          cResult[20] = recapCardBackgroundImage;
          cResult[21] = tmp40;
        } else {
          class U {
            constructor() {
              set = new Set();
              return set;
            }
          }
        }
        if (cResult[22] === tmp27) {
          class U {
            constructor() {
              set = new Set();
              return set;
            }
          }
          if (cResult[25] === tmp39) {
            class U {
              constructor() {
                set = new Set();
                return set;
              }
            }
            if (cResult[28] === tmp38) {
              class U {
                constructor() {
                  set = new Set();
                  return set;
                }
              }
              if (cResult[31] !== primaryBackgroundColor) {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
                const obj6 = { value, color: primaryBackgroundColor, size: 64 };
                cResult[31] = primaryBackgroundColor;
                cResult[32] = closure_7(first(12939), obj6);
                const tmp54 = closure_7(first(12939), obj6);
              } else {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
              }
              if (cResult[33] === tmp4.year) {
                class U {
                  constructor() {
                    set = new Set();
                    return set;
                  }
                }
                if (cResult[36] !== primaryBackgroundColor) {
                  class U {
                    constructor() {
                      set = new Set();
                      return set;
                    }
                  }
                  const obj7 = { d: d2, fill: primaryBackgroundColor };
                  cResult[36] = primaryBackgroundColor;
                  cResult[37] = closure_7(recapCardBackgroundImage(7960).Path, obj7);
                  const tmp61 = closure_7(recapCardBackgroundImage(7960).Path, obj7);
                } else {
                  class U {
                    constructor() {
                      set = new Set();
                      return set;
                    }
                  }
                }
                if (cResult[38] === tmp4.container) {
                  class U {
                    constructor() {
                      set = new Set();
                      return set;
                    }
                  }
                  if (cResult[41] !== tmp4.clyde) {
                    class U {
                      constructor() {
                        set = new Set();
                        return set;
                      }
                    }
                    const obj8 = { size: "custom", color: first(587).colors.BLACK, style: tmp4.clyde };
                    const ClydeIcon = tmp(10570).ClydeIcon;
                    cResult[41] = tmp4.clyde;
                    cResult[42] = closure_7(ClydeIcon, obj8);
                    const tmp69 = closure_7(ClydeIcon, obj8);
                  } else {
                    class U {
                      constructor() {
                        set = new Set();
                        return set;
                      }
                    }
                  }
                  if (cResult[43] === tmp4.logo) {
                    class U {
                      constructor() {
                        set = new Set();
                        return set;
                      }
                    }
                  }
                  const obj9 = { style: tmp4.logo, children: items2 };
                  items2 = [tmp62, tmp67];
                  cResult[43] = tmp4.logo;
                  cResult[44] = tmp62;
                  cResult[45] = tmp67;
                  cResult[46] = closure_8(closure_6, obj9);
                  const tmp73 = closure_8(closure_6, obj9);
                }
                size = { style: tmp4.container, width: v40, height: v40, viewBox: "0 0 40 40", children: tmp59 };
                cResult[38] = tmp4.container;
                cResult[39] = tmp59;
                cResult[40] = closure_7(first(7960), size);
                const tmp66 = closure_7(first(7960), size);
              }
              const obj10 = { style: tmp4.year, children: tmp51 };
              cResult[33] = tmp4.year;
              cResult[34] = tmp51;
              cResult[35] = closure_7(closure_6, obj10);
              const tmp58 = closure_7(closure_6, obj10);
            }
            const obj11 = { style: tmp38, children: tmp42 };
            cResult[28] = tmp38;
            cResult[29] = tmp42;
            cResult[30] = closure_7(first(5050).View, obj11);
            const tmp50 = closure_7(first(5050).View, obj11);
          }
          const obj12 = { source: tmp39, style: absoluteFill.absoluteFill, onLoad: tmp41 };
          cResult[25] = tmp39;
          cResult[26] = tmp41;
          cResult[27] = closure_7(first(5667), obj12);
          const tmp46 = closure_7(first(5667), obj12);
        }
        function ie() {
          return tmp28(recapCardBackgroundImage);
        }
        cResult[22] = tmp27;
        cResult[23] = recapCardBackgroundImage;
        cResult[24] = ie;
      }
      const size1 = { style: tmp4.container, width: tmp7, height, viewBox: "0 0 200 284", children: tmp30 };
      cResult[15] = tmp4.container;
      cResult[16] = tmp30;
      cResult[17] = closure_7(first(7960), size1);
      const tmp37 = closure_7(first(7960), size1);
    }
    const items3 = [tmp4.card, tmp11];
    cResult[10] = tmp11;
    cResult[11] = tmp4.card;
    cResult[12] = items3;
  }
  const size2 = { width: result, height: result1 };
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = size2;
}) : (function CheckpointRecapCard(character) {
  let closure_4;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let primaryBackgroundColor;
  let recapCardBackgroundImage;
  character = character.character;
  const maxHeight = character.maxHeight;
  recapCardBackgroundImage = undefined;
  let first;
  react = undefined;
  let hasItem;
  const tmp = closure_18();
  let num = 1;
  if (null != maxHeight) {
    let _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / c10, 0.75), 1);
  }
  let items = [num];
  const items1 = [num];
  const memo = react.useMemo(() => {
    size = { width: c9 * num, height: c10 * num };
    return size;
  }, items);
  const memo1 = react.useMemo(() => {
    let items;
    const obj = { transform: items };
    items = [];
    const obj2 = { scale: num };
    items[0] = obj2;
    return obj;
  }, items1);
  let obj = character(recapCardBackgroundImage[9]);
  const cardColors = obj.getCardColors(character);
  ({ primaryBackgroundColor, recapCardBackgroundImage } = cardColors);
  const items2 = [character];
  const secondaryBackgroundColor = cardColors.secondaryBackgroundColor;
  const memo2 = react.useMemo(() => {
    let characterLayerUrls;
    if (null != character) {
      const _Math = Math;
      const obj = checkpoint_CheckpointMessageComponentUtils;
      characterLayerUrls = obj.getCharacterLayerUrls(tmp, Math.round(c15 * react_nativeDefault()));
    } else {
      characterLayerUrls = [];
    }
    return characterLayerUrls;
  }, items2);
  const tmp9 = first(react.useState(() => {
    set = new Set();
    return set;
  }), 2);
  first = tmp9[0];
  react = tmp9[1];
  hasItem = first.has(recapCardBackgroundImage) && memo2.length > 0 && memo2.every((item) => first.has(item));
  const tmp6Result = character(recapCardBackgroundImage[12]);
  class I {
    constructor() {
      let opacity = 0;
      if (hasItem) {
        const obj2 = { duration };
        const obj = timing;
        opacity = obj.withTiming(1, obj2);
      }
      return { opacity };
    }
  }
  let obj2 = { isCardArtLoaded: hasItem, withTiming: tmp6(tmp7[13]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 };
  I.__closure = obj2;
  I.__workletHash = 7432945806679;
  I.__initData = __initData2;
  const animatedStyle = tmp6Result.useAnimatedStyle(I);
  const obj3 = { style: memo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_8(closure_6, obj4) };
  obj4 = { style: items3, children: items4 };
  items3 = [tmp.card, memo1];
  size = { style: tmp.container, width, height, viewBox: "0 0 200 284", children: closure_7(tmp6(recapCardBackgroundImage[14]).Path, obj5) };
  obj5 = { d, fill: secondaryBackgroundColor };
  const tmp12 = num(recapCardBackgroundImage[14]);
  items4 = [closure_7(tmp12, size), , , , ];
  const obj6 = { style: items5, children: closure_7(num(recapCardBackgroundImage[15]), obj7) };
  items5 = [hasItem.absoluteFill, animatedStyle];
  const View = num(tmp7[12]).View;
  obj7 = {
    source: { uri: recapCardBackgroundImage },
    style: hasItem.absoluteFill,
    onLoad() {
      let closure_0 = recapCardBackgroundImage;
      closure_4((items) => {
        set = new Set(items);
        return set.add(closure_0);
      });
    }
  };
  items4[1] = closure_7(View, obj6);
  const obj8 = { style: tmp.year, children: closure_7(num(recapCardBackgroundImage[4]), obj9) };
  obj9 = { value, color: primaryBackgroundColor, size: 64 };
  items4[2] = closure_7(closure_6, obj8);
  const obj10 = { style: tmp.logo, children: items6 };
  const size1 = { style: tmp.container, width: v40, height: v40, viewBox: "0 0 40 40", children: closure_7(tmp6(recapCardBackgroundImage[14]).Path, obj11) };
  obj11 = { d: d2, fill: primaryBackgroundColor };
  const tmp13 = num(recapCardBackgroundImage[14]);
  items6 = [closure_7(tmp13, size1), ];
  const obj12 = { size: "custom", color: num(recapCardBackgroundImage[6]).colors.BLACK, style: tmp.clyde };
  const ClydeIcon = tmp6(tmp7[16]).ClydeIcon;
  items6[1] = closure_7(ClydeIcon, obj12);
  items4[3] = closure_8(closure_6, obj10);
  const obj13 = {
    style: items7,
    children: memo2.map((uri) => {
      let closure_0 = uri;
      const obj = {
        source: { uri },
        style: hasItem.absoluteFill,
        onLoad() {
          closure_4((items) => {
            set = new Set(items);
            return set.add(closure_0);
          });
        }
      };
      return closure_1_7(num(recapCardBackgroundImage[15]), obj, uri);
    })
  };
  items7 = [tmp.character, animatedStyle];
  const View2 = num(tmp7[12]).View;
  items4[4] = closure_7(View2, obj13);
  return closure_7(closure_6, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default tmp6;
