// Module ID: 13239
// Function ID: 13240
// Name: CheckpointCardFrame
// Dependencies: [32, 19, 17, 21, 5005, 558, 576, 6079, 6075, 1898, 5086, 5243, 8017, 10639, 587, 5707, 2]

// Module 13239 (CheckpointCardFrame)
import react_nativeDefault from "react-native" /* 1898 */;
import timing from "timing" /* 5243 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6075 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let absoluteFill, set, v40;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 284;
let c10 = 43.5;
let c11 = 40;
let c12 = "M0 40H30L40 30V0H10L0 10V40Z";
let c13 = 150;
let closure_14 = createStyles.createStyles({ canvas: { overflow: "hidden", transformOrigin: "top left" }, layer: { position: "absolute", top: 0, left: 0 }, logo: { position: "absolute", top: 4, left: 4, width: 40, height: 40, alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function CheckpointCardFrameTsx1(){const{isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}" };
const __initData2 = { code: "function CheckpointCardFrameTsx2(){const{isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCardFrame(arg0) {
  let canvasHeight;
  let canvasWidth;
  let cardColorPalette;
  let character;
  let characterLayout;
  let children;
  let closure_4;
  let clydeSize;
  let items1;
  let items2;
  let items3;
  let items4;
  let joined;
  let obj19;
  let obj9;
  let primaryBackgroundColor;
  let recapCardBackgroundImage;
  let ref;
  let scale;
  let secondaryBackgroundColor;
  let tmp6;
  let tmp8;
  const tmp = recapCardBackgroundImage;
  let obj = recapCardBackgroundImage(joined[6]);
  const cResult = obj.c(92);
  ({ character, cardColorPalette, canvasWidth, canvasHeight, scale, clydeSize, characterLayout, children } = arg0);
  if (undefined === canvasHeight) {
    canvasHeight = height;
  }
  let num = 1;
  if (undefined !== scale) {
    num = scale;
  }
  const tmp4 = closure_14();
  let obj2 = react;
  const id = react.useId();
  if (cResult[0] !== cardColorPalette) {
    const tmpResult = tmp(joined[7]);
    const cardColors = tmpResult.getCardColors(cardColorPalette);
    cResult[0] = cardColorPalette;
    cResult[1] = cardColors;
    tmp6 = cardColors;
  } else {
    tmp6 = cResult[1];
  }
  ({ primaryBackgroundColor, secondaryBackgroundColor, recapCardBackgroundImage } = tmp6);
  if (cResult[2] !== canvasWidth) {
    const _HermesInternal = HermesInternal;
    const combined = "M44 34V0H" + canvasWidth + "V284H0V43.5H34L38 38L44 34Z";
    cResult[2] = canvasWidth;
    cResult[3] = combined;
    tmp8 = combined;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === canvasHeight) {
    let tmp11;
    let obj6;
    if (cResult[5] === canvasWidth) {
      tmp11 = cResult[6];
    }
    if (characterLayout != null) {
      size = characterLayout.size;
    }
    if (cResult[7] === character) {
      if (cResult[10] === arr) {
        let tmp20;
        let tmp23;
        if (cResult[11] === recapCardBackgroundImage) {
          obj6 = cResult[12];
        }
        joined = obj6.join("\n");
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          let _Set = Set;
          let self = this;
          let self2 = this;
          set = new Set();
          cResult[13] = set;
          tmp20 = set;
        } else {
          tmp20 = cResult[13];
        }
        if (cResult[14] !== joined) {
          const obj3 = { artKey: joined, urls: tmp20 };
          cResult[14] = joined;
          cResult[15] = obj3;
          tmp23 = obj3;
        } else {
          tmp23 = cResult[15];
        }
        _slicedToArray = obj2.useRef(tmp23);
        const tmp25 = _slicedToArray(obj2.useState(null), 2);
        react = tmp25[1];
        absoluteFill = tmp26;
        const fn = function q() {
          let opacity = 0;
          if (absoluteFill) {
            const obj2 = { duration };
            const obj = timing;
            opacity = obj.withTiming(1, obj2);
          }
          return { opacity };
        };
        const obj4 = { isArtLoaded: tmp25[0] === joined, withTiming: tmp(joined[11]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 };
        const useAnimatedStyle = tmp(tmp2[10]).useAnimatedStyle;
        tmp(joined[10]);
        fn.__closure = obj4;
        fn.__workletHash = 7810000693516;
        fn.__initData = __initData;
        const animatedStyle = useAnimatedStyle(fn);
        const result = canvasWidth * num;
        const result1 = canvasHeight * num;
        if (cResult[16] === result) {
          let tmp33;
          let tmp34;
          if (cResult[17] === result1) {
            tmp33 = cResult[18];
          }
          if (cResult[19] !== num) {
            const items = [{ scale: num }];
            const obj5 = { scale: num };
            cResult[19] = num;
            cResult[20] = items;
            tmp34 = items;
          } else {
            tmp34 = cResult[20];
          }
          if (cResult[21] === canvasHeight) {
            if (cResult[22] === canvasWidth) {
              let tmp35;
              let tmp36;
              let tmp37;
              if (cResult[23] === tmp34) {
                tmp35 = cResult[24];
              }
              if (cResult[25] !== clydeSize) {
                const size1 = { width: clydeSize, height: clydeSize };
                cResult[25] = clydeSize;
                cResult[26] = size1;
                tmp36 = size1;
              } else {
                tmp36 = cResult[26];
              }
              if (cResult[27] !== characterLayout) {
                let tmp38;
                if (null != characterLayout) {
                  const size2 = { position: "absolute", top: null, left: null, width: null, height: null };
                  ({ top: obj13.top, left: obj13.left, size: obj13.width, size: obj13.height } = characterLayout);
                  tmp38 = size2;
                }
                cResult[27] = characterLayout;
                cResult[28] = tmp38;
                tmp37 = tmp38;
              } else {
                tmp37 = cResult[28];
              }
              if (cResult[29] === joined) {
                let tmp39;
                if (cResult[30] === obj6) {
                  tmp39 = cResult[31];
                }
                let closure_6 = tmp39;
                if (cResult[32] === tmp35) {
                  let tmp40;
                  if (cResult[33] === tmp4.canvas) {
                    tmp40 = cResult[34];
                  }
                  if (cResult[35] === tmp8) {
                    let tmp41;
                    if (cResult[36] === secondaryBackgroundColor) {
                      tmp41 = cResult[37];
                    }
                    if (cResult[38] === canvasWidth) {
                      if (cResult[39] === tmp4.layer) {
                        let tmp44;
                        if (cResult[40] === tmp41) {
                          tmp44 = cResult[41];
                        }
                        const _HermesInternal2 = HermesInternal;
                        const combined1 = "texture-" + joined;
                        if (cResult[42] === animatedStyle) {
                          let tmp49;
                          let tmp50;
                          if (cResult[43] === tmp4.layer) {
                            tmp49 = cResult[44];
                          }
                          if (cResult[45] !== tmp8) {
                            const obj7 = { d: tmp8 };
                            const tmp52 = closure_7(tmp(joined[12]).Path, obj7);
                            cResult[45] = tmp8;
                            cResult[46] = tmp52;
                            tmp50 = tmp52;
                          } else {
                            tmp50 = cResult[46];
                          }
                          if (cResult[47] === id) {
                            let tmp53;
                            let tmp56;
                            if (cResult[48] === tmp50) {
                              tmp53 = cResult[49];
                            }
                            if (cResult[50] !== recapCardBackgroundImage) {
                              const obj8 = { uri: recapCardBackgroundImage };
                              cResult[50] = recapCardBackgroundImage;
                              cResult[51] = obj8;
                              tmp56 = obj8;
                            } else {
                              tmp56 = cResult[51];
                            }
                            const _HermesInternal3 = HermesInternal;
                            const combined2 = "url(#" + id + ")";
                            if (cResult[52] === tmp39) {
                              let tmp58;
                              if (cResult[53] === recapCardBackgroundImage) {
                                tmp58 = cResult[54];
                              }
                              if (cResult[55] === tmp56) {
                                if (cResult[56] === combined2) {
                                  if (cResult[57] === tmp58) {
                                    let tmp59;
                                    if (cResult[58] === tmp11) {
                                      tmp59 = cResult[59];
                                    }
                                    if (cResult[60] === canvasWidth) {
                                      if (cResult[61] === tmp53) {
                                        let tmp66;
                                        if (cResult[62] === tmp59) {
                                          tmp66 = cResult[63];
                                        }
                                        if (cResult[64] === combined1) {
                                          if (cResult[65] === tmp49) {
                                            let tmp71;
                                            let tmp75;
                                            let tmp83;
                                            if (cResult[66] === tmp66) {
                                              tmp71 = cResult[67];
                                            }
                                            if (cResult[68] !== primaryBackgroundColor) {
                                              const size3 = { style: absoluteFill.absoluteFill, width: v40, height: null, children: closure_7(tmp(tmp2[12]).Path, obj9) };
                                              class Ie {
                                                constructor() {
                                                  return closure_6(recapCardBackgroundImage);
                                                }
                                              }
                                              obj9 = { d, fill: primaryBackgroundColor };
                                              const tmp78 = obj6(joined[12]);
                                              const tmp82 = closure_7(tmp78, size3);
                                              cResult[68] = primaryBackgroundColor;
                                              cResult[69] = tmp82;
                                              tmp75 = tmp82;
                                            } else {
                                              tmp75 = cResult[69];
                                            }
                                            if (cResult[70] !== tmp36) {
                                              const obj10 = { size: "custom", color: obj6(joined[14]).colors.BLACK, style: tmp36 };
                                              const ClydeIcon = tmp(tmp2[13]).ClydeIcon;
                                              const tmp86 = closure_7(ClydeIcon, obj10);
                                              class Ie {
                                                constructor() {
                                                  return closure_6(recapCardBackgroundImage);
                                                }
                                              }
                                              cResult[70] = tmp36;
                                              cResult[71] = tmp86;
                                              tmp83 = tmp86;
                                            } else {
                                              tmp83 = cResult[71];
                                            }
                                            if (cResult[72] === tmp4.logo) {
                                              if (cResult[73] === tmp75) {
                                                let tmp87;
                                                if (cResult[74] === tmp83) {
                                                  tmp87 = cResult[75];
                                                }
                                                if (cResult[76] === animatedStyle) {
                                                  if (cResult[77] === joined) {
                                                    if (cResult[78] === tmp37) {
                                                      if (cResult[79] === tmp39) {
                                                        let tmp91;
                                                        if (cResult[80] === arr) {
                                                          tmp91 = cResult[81];
                                                        }
                                                        if (cResult[82] === children) {
                                                          if (cResult[83] === tmp40) {
                                                            if (cResult[84] === tmp44) {
                                                              if (cResult[85] === tmp71) {
                                                                if (cResult[86] === tmp87) {
                                                                  let tmp96;
                                                                  if (cResult[87] === tmp91) {
                                                                    tmp96 = cResult[88];
                                                                  }
                                                                  if (cResult[89] === tmp33) {
                                                                    let tmp100;
                                                                    if (cResult[90] === tmp96) {
                                                                      tmp100 = cResult[91];
                                                                    }
                                                                    return tmp100;
                                                                  }
                                                                  class Ie {
                                                                    constructor() {
                                                                      return closure_6(recapCardBackgroundImage);
                                                                    }
                                                                  }
                                                                  cResult[89] = tmp33;
                                                                  cResult[90] = tmp96;
                                                                  cResult[91] = tmp103;
                                                                  tmp100 = tmp103;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj12 = { style: tmp40, children: items1 };
                                                        items1 = [, , , , ];
                                                        class Ie {
                                                          constructor() {
                                                            return closure_6(recapCardBackgroundImage);
                                                          }
                                                        }
                                                        items1[1] = tmp71;
                                                        items1[2] = tmp87;
                                                        items1[3] = children;
                                                        items1[4] = tmp91;
                                                        const tmp99 = closure_8(closure_6, obj12);
                                                        cResult[82] = children;
                                                        cResult[83] = tmp40;
                                                        cResult[84] = tmp44;
                                                        cResult[85] = tmp71;
                                                        cResult[86] = tmp87;
                                                        cResult[87] = tmp91;
                                                        cResult[88] = tmp99;
                                                        tmp96 = tmp99;
                                                      }
                                                    }
                                                  }
                                                }
                                                let tmp92 = null != tmp37 && arr.length > 0;
                                                if (tmp92) {
                                                  const obj14 = {
                                                    style: items2,
                                                    children: arr.map((uri) => {
                                                                                                      let closure_0 = uri;
                                                                                                      const obj = {
                                                                                                        source: { uri },
                                                                                                        style: absoluteFill.absoluteFill,
                                                                                                        onLoad() {
                                                                                                          return closure_6(uri);
                                                                                                        }
                                                                                                      };
                                                                                                      return closure_1_7(obj6(joined[15]), obj, uri);
                                                                                                    })
                                                  };
                                                  items2 = [tmp37, animatedStyle];
                                                  class Ie {
                                                    constructor() {
                                                      return closure_6(recapCardBackgroundImage);
                                                    }
                                                  }
                                                  const _HermesInternal4 = HermesInternal;
                                                  tmp92 = closure_7(tmp95, obj14, "character-" + joined);
                                                }
                                                cResult[76] = animatedStyle;
                                                class Ie {
                                                  constructor() {
                                                    return closure_6(recapCardBackgroundImage);
                                                  }
                                                }
                                                cResult[77] = joined;
                                                cResult[78] = tmp37;
                                                cResult[79] = tmp39;
                                                cResult[80] = arr;
                                                cResult[81] = tmp92;
                                                tmp91 = tmp92;
                                              }
                                            }
                                            const obj15 = { style: null, children: items3 };
                                            class Ie {
                                              constructor() {
                                                return closure_6(recapCardBackgroundImage);
                                              }
                                            }
                                            items3 = [tmp75, tmp83];
                                            const tmp90 = closure_8(closure_6, obj15);
                                            cResult[72] = tmp4.logo;
                                            cResult[73] = tmp75;
                                            cResult[74] = tmp83;
                                            cResult[75] = tmp90;
                                            tmp87 = tmp90;
                                          }
                                        }
                                        class Ie {
                                          constructor() {
                                            return closure_6(recapCardBackgroundImage);
                                          }
                                        }
                                        cResult[64] = combined1;
                                        cResult[65] = tmp49;
                                        cResult[66] = tmp66;
                                        cResult[67] = tmp74;
                                        tmp71 = tmp74;
                                      }
                                    }
                                    const size4 = { width: canvasWidth, height: null, children: items4 };
                                    class Ie {
                                      constructor() {
                                        return closure_6(recapCardBackgroundImage);
                                      }
                                    }
                                    items4 = [tmp53, tmp59];
                                    const tmp70 = closure_8(obj6(joined[12]), size4);
                                    cResult[60] = canvasWidth;
                                    cResult[61] = tmp53;
                                    cResult[62] = tmp59;
                                    cResult[63] = tmp70;
                                    tmp66 = tmp70;
                                  }
                                }
                              }
                              const obj17 = { href: tmp56, preserveAspectRatio: "xMidYMid slice", clipPath: combined2, onLoad: tmp58 };
                              class Ie {
                                constructor() {
                                  return closure_6(recapCardBackgroundImage);
                                }
                              }
                              const merged = Object.assign(tmp11);
                              const tmp65 = closure_7(tmp61, obj17);
                              cResult[55] = tmp56;
                              cResult[56] = combined2;
                              cResult[57] = tmp58;
                              cResult[58] = tmp11;
                              cResult[59] = tmp65;
                              tmp59 = tmp65;
                            }
                            class Ie {
                              constructor() {
                                return closure_6(recapCardBackgroundImage);
                              }
                            }
                            cResult[52] = tmp39;
                            cResult[53] = recapCardBackgroundImage;
                            cResult[54] = Ie;
                            tmp58 = Ie;
                          }
                          const obj18 = { children: closure_7(tmp(joined[12]).ClipPath, obj19) };
                          const Defs = tmp(tmp2[12]).Defs;
                          obj19 = { id: null, children: tmp50 };
                          const tmp55 = closure_7(Defs, obj18);
                          cResult[47] = id;
                          cResult[48] = tmp50;
                          cResult[49] = tmp55;
                          tmp53 = tmp55;
                        }
                        const items5 = [tmp4.layer, ];
                        cResult[42] = animatedStyle;
                        cResult[43] = tmp4.layer;
                        cResult[44] = items5;
                        tmp49 = items5;
                      }
                    }
                    const size5 = { style: tmp4.layer, width: canvasWidth, height, children: tmp41 };
                    const tmp47 = closure_7(obj6(joined[12]), size5);
                    cResult[38] = canvasWidth;
                    cResult[39] = tmp4.layer;
                    cResult[40] = tmp41;
                    cResult[41] = tmp47;
                    tmp44 = tmp47;
                  }
                  const obj20 = { d: tmp8, fill: secondaryBackgroundColor };
                  const tmp43 = closure_7(tmp(joined[12]).Path, obj20);
                  cResult[35] = tmp8;
                  cResult[36] = secondaryBackgroundColor;
                  cResult[37] = tmp43;
                  tmp41 = tmp43;
                }
                const items6 = [tmp4.canvas, tmp35];
                cResult[33] = tmp4.canvas;
                cResult[34] = items6;
                tmp40 = items6;
              }
              function handleArtLoad(arg0) {
                if (ref.current.artKey !== joined) {
                  const _Set = Set;
                  const self = this;
                  const self2 = this;
                  const obj = { artKey: joined, urls: set };
                  ref.current = obj;
                  set = new Set();
                }
                const urls = tmp.current.urls;
                urls.add(arg0);
                if (obj6.every((item) => urls.has(item))) {
                  closure_4(joined);
                }
              }
              cResult[29] = joined;
              cResult[30] = obj6;
              cResult[31] = handleArtLoad;
              tmp39 = handleArtLoad;
            }
          }
          const size6 = { width: canvasWidth, height: canvasHeight, transform: tmp34 };
          cResult[21] = canvasHeight;
          cResult[22] = canvasWidth;
          cResult[23] = tmp34;
          cResult[24] = size6;
          tmp35 = size6;
        }
        const size7 = { width: result, height: result1 };
        cResult[16] = result;
        cResult[17] = result1;
        cResult[18] = size7;
        tmp33 = size7;
      }
      const items7 = [recapCardBackgroundImage];
      cResult[10] = arr;
      cResult[11] = recapCardBackgroundImage;
      cResult[12] = items7;
      obj6 = items7;
    }
    if (null != character) {
      let characterLayerUrls;
      if (null != size) {
        const _Math = Math;
        const tmpResult4 = tmp(joined[8]);
        characterLayerUrls = tmpResult4.getCharacterLayerUrls(character, Math.round(size * obj6(tmp2[9])()));
      }
      cResult[7] = character;
      cResult[8] = size;
      cResult[9] = characterLayerUrls;
      class Ie {
        constructor() {
          return closure_6(recapCardBackgroundImage);
        }
      }
    }
    characterLayerUrls = [];
  }
  const bound = Math.max(1, (canvasWidth - 44) / 156, (canvasHeight - c10) / 224.5);
  const size8 = { x: 44 * (1 - bound), y: c10 * (1 - bound), width: 200 * bound, height: 268 * bound };
  cResult[4] = canvasHeight;
  cResult[5] = canvasWidth;
  cResult[6] = size8;
  tmp11 = size8;
}) : (function CheckpointCardFrame(character) {
  let ClipPath;
  let items10;
  let items11;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj6;
  let obj9;
  let primaryBackgroundColor;
  let ref;
  let secondaryBackgroundColor;
  let size3;
  let tmp20;
  let tmp23;
  character = character.character;
  const canvasWidth = character.canvasWidth;
  let num = character.canvasHeight;
  const cardColorPalette = character.cardColorPalette;
  if (num === undefined) {
    num = 284;
  }
  let num2 = character.scale;
  if (num2 === undefined) {
    num2 = 1;
  }
  const clydeSize = character.clydeSize;
  const characterLayout = character.characterLayout;
  let memo;
  let memo1;
  let joined;
  v40 = undefined;
  let d;
  let v150;
  const children = character.children;
  let tmp = closure_14();
  let obj = clydeSize;
  const id = clydeSize.useId();
  let obj2 = character(num[7]);
  const cardColors = obj2.getCardColors(cardColorPalette);
  const recapCardBackgroundImage = cardColors.recapCardBackgroundImage;
  ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
  const combined = "M44 34V0H" + canvasWidth + "V284H0V43.5H34L38 38L44 34Z";
  const bound = Math.max(1, (canvasWidth - 44) / 156, (num - joined) / 224.5);
  size = { x: 44 * (1 - bound), y: joined * (1 - bound), width: 200 * bound, height: 268 * bound };
  let size1;
  if (characterLayout != null) {
    size1 = characterLayout.size;
  }
  let items = [character, size1];
  memo = obj.useMemo(() => {
    if (null != character) {
      if (null != size1) {
        const _Math = Math;
        const obj = checkpoint_CheckpointMessageComponentUtils;
        const characterLayerUrls = obj.getCharacterLayerUrls(tmp, Math.round(tmp2 * react_nativeDefault()));
      }
      return [];
    }
  }, items);
  const items1 = [recapCardBackgroundImage, memo];
  memo1 = obj.useMemo(() => {
    const items = [recapCardBackgroundImage, ...memo];
    return items;
  }, items1);
  joined = memo1.join("\n");
  const useRef = obj.useRef;
  const obj3 = { artKey: joined, urls: set };
  set = new Set();
  v40 = useRef(obj3);
  const tmp11 = num2(obj.useState(null), 2);
  d = tmp11[1];
  v150 = tmp12;
  const tmp3Result = character(num[10]);
  class D {
    constructor() {
      let opacity = 0;
      if (closure_13) {
        const obj2 = { duration };
        const obj = timing;
        opacity = obj.withTiming(1, obj2);
      }
      return { opacity };
    }
  }
  D.__closure = { isArtLoaded: tmp11[0] === joined, withTiming: character(num[11]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 };
  D.__workletHash = 11056092560943;
  D.__initData = __initData2;
  ({ isArtLoaded: tmp11[0] === joined, withTiming: character(num[11]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 });
  const animatedStyle = tmp3Result.useAnimatedStyle(D);
  const items2 = [canvasWidth, num, num2];
  const items3 = [canvasWidth, num, num2];
  const memo2 = obj.useMemo(() => {
    size = { width: canvasWidth * num2, height: num * num2 };
    return size;
  }, items2);
  const items4 = [clydeSize];
  const memo3 = obj.useMemo(() => {
    let items;
    size = { width: canvasWidth, height: num, transform: items };
    items = [];
    const obj = { scale: num2 };
    items[0] = obj;
    return size;
  }, items3);
  const items5 = [characterLayout];
  const memo4 = obj.useMemo(() => {
    size = { width: clydeSize, height: clydeSize };
    return size;
  }, items4);
  const memo5 = obj.useMemo(() => {
    let tmp2;
    const tmp = characterLayout;
    if (null != characterLayout) {
      size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = tmp);
      tmp2 = size;
    }
    return tmp2;
  }, items5);
  const obj5 = { style: memo2, children: tmp20(recapCardBackgroundImage, obj6) };
  obj6 = { style: items6, children: items7 };
  items6 = [tmp.canvas, memo3];
  const size2 = { style: tmp.layer, width: canvasWidth, height: memo1, children: size1(tmp3(tmp4[12]).Path, { d: combined, fill: secondaryBackgroundColor }) };
  const tmp22 = canvasWidth(num[12]);
  items7 = [size1(tmp22, size2), , , , ];
  const obj7 = { style: items8, children: memo(tmp23, size3) };
  items8 = [tmp.layer, animatedStyle];
  const View = canvasWidth(tmp4[10]).View;
  size3 = { width: canvasWidth, height: memo1, children: items9 };
  const obj8 = { children: size1(ClipPath, obj9) };
  tmp23 = canvasWidth(num[12]);
  const Defs = tmp3(tmp4[12]).Defs;
  obj9 = { id, children: size1(character(num[12]).Path, { d: combined }) };
  ClipPath = tmp3(tmp4[12]).ClipPath;
  items9 = [size1(Defs, obj8), ];
  const obj10 = {
    href: { uri: recapCardBackgroundImage },
    preserveAspectRatio: "xMidYMid slice",
    clipPath: "url(#" + id + ")",
    onLoad() {
      const tmp = recapCardBackgroundImage;
      if (ref.current.artKey !== joined) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        const obj = { artKey: joined, urls: set };
        ref.current = obj;
        set = new Set();
      }
      const urls = tmp2.current.urls;
      urls.add(tmp);
      if (memo1.every((item) => urls.has(item))) {
        closure_12(joined);
      }
    }
  };
  const Image = tmp3(tmp4[12]).Image;
  const merged = Object.assign(size);
  items9[1] = size1(Image, obj10);
  items7[1] = size1(View, obj7, "texture-" + joined);
  const obj11 = { style: tmp.logo, children: items10 };
  const size4 = { style: characterLayout.absoluteFill, width: v40, height: v40, children: size1(tmp3(tmp4[12]).Path, obj12) };
  obj12 = { d, fill: primaryBackgroundColor };
  const tmp25 = canvasWidth(num[12]);
  items10 = [size1(tmp25, size4), ];
  const obj13 = { size: "custom", color: canvasWidth(num[14]).colors.BLACK, style: memo4 };
  const ClydeIcon = tmp3(tmp4[13]).ClydeIcon;
  items10[1] = size1(ClydeIcon, obj13);
  items7[2] = memo(recapCardBackgroundImage, obj11);
  items7[3] = children;
  let tmp18Result = null != memo5;
  tmp20 = memo;
  const tmp21 = canvasWidth;
  if (tmp18Result) {
    tmp18Result = memo.length > 0;
  }
  if (tmp18Result) {
    const obj14 = {
      style: items11,
      children: memo.map((uri) => {
          let closure_0 = uri;
          let obj = {
            source: { uri },
            style: characterLayout.absoluteFill,
            onLoad() {
              const tmp = uri;
              if (ref.current.artKey !== joined) {
                const _Set = Set;
                const self = this;
                const self2 = this;
                const obj = { artKey: joined, urls: set };
                ref.current = obj;
                set = new Set();
              }
              const urls = tmp2.current.urls;
              urls.add(tmp);
              if (memo1.every((item) => urls.has(item))) {
                closure_12(joined);
              }
            }
          };
          return size1(canvasWidth(num[15]), obj, uri);
        })
    };
    items11 = [memo5, animatedStyle];
    const View2 = tmp21(tmp4[10]).View;
    const _HermesInternal = HermesInternal;
    tmp18Result = tmp18(View2, obj14, "character-" + joined);
  }
  items7[4] = tmp18Result;
  return size1(recapCardBackgroundImage, obj5);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default tmp4;
export const CHECKPOINT_CARD_HEIGHT = 284;
