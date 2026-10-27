// Module ID: 13037
// Function ID: 13038
// Name: CheckpointCardFrame
// Dependencies: [32, 19, 17, 21, 4972, 558, 576, 8624, 6037, 1897, 5053, 5207, 7960, 10574, 587, 5670, 2]

// Module 13037 (CheckpointCardFrame)
import react_nativeDefault from "react-native" /* 1897 */;
import timing from "timing" /* 5207 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6037 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
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
  ({ character, canvasWidth, canvasHeight, scale, clydeSize, characterLayout, children } = arg0);
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
  if (cResult[0] !== character) {
    const tmpResult = tmp(joined[7]);
    const cardColors = tmpResult.getCardColors(character);
    cResult[0] = character;
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
        const tmpResult3 = tmp(joined[10]);
        class G {
          constructor() {
            let opacity = 0;
            if (absoluteFill) {
              const obj2 = { duration };
              const obj = timing;
              opacity = obj.withTiming(1, obj2);
            }
            return { opacity };
          }
        }
        const useAnimatedStyle = tmpResult3.useAnimatedStyle;
        G.__closure = { isArtLoaded: tmp25[0] === joined, withTiming: tmp(joined[11]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 };
        G.__workletHash = 7810000693516;
        G.__initData = __initData;
        const obj4 = { isArtLoaded: tmp25[0] === joined, withTiming: tmp(joined[11]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 };
        const animatedStyle = useAnimatedStyle(G);
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
                        if (cResult[42] === animatedStyle) {
                          let tmp48;
                          let tmp49;
                          if (cResult[43] === tmp4.layer) {
                            tmp48 = cResult[44];
                          }
                          if (cResult[45] !== tmp8) {
                            const obj7 = { d: tmp8 };
                            const tmp51 = closure_7(tmp(joined[12]).Path, obj7);
                            cResult[45] = tmp8;
                            cResult[46] = tmp51;
                            tmp49 = tmp51;
                          } else {
                            tmp49 = cResult[46];
                          }
                          if (cResult[47] === id) {
                            let tmp52;
                            let tmp55;
                            if (cResult[48] === tmp49) {
                              tmp52 = cResult[49];
                            }
                            if (cResult[50] !== recapCardBackgroundImage) {
                              const obj8 = { uri: recapCardBackgroundImage };
                              cResult[50] = recapCardBackgroundImage;
                              cResult[51] = obj8;
                              tmp55 = obj8;
                            } else {
                              tmp55 = cResult[51];
                            }
                            const _HermesInternal2 = HermesInternal;
                            const combined1 = "url(#" + id + ")";
                            if (cResult[52] === tmp39) {
                              let tmp57;
                              if (cResult[53] === recapCardBackgroundImage) {
                                tmp57 = cResult[54];
                              }
                              if (cResult[55] === tmp55) {
                                if (cResult[56] === combined1) {
                                  if (cResult[57] === tmp57) {
                                    let tmp58;
                                    if (cResult[58] === tmp11) {
                                      tmp58 = cResult[59];
                                    }
                                    if (cResult[60] === canvasWidth) {
                                      if (cResult[61] === tmp52) {
                                        let tmp65;
                                        if (cResult[62] === tmp58) {
                                          tmp65 = cResult[63];
                                        }
                                        if (cResult[64] === joined) {
                                          if (cResult[65] === tmp48) {
                                            let tmp70;
                                            let tmp82;
                                            if (cResult[66] === tmp65) {
                                              tmp70 = cResult[67];
                                            }
                                            if (cResult[68] !== primaryBackgroundColor) {
                                              const size3 = { style: absoluteFill.absoluteFill, width: v40, height: null, children: closure_7(tmp(tmp2[12]).Path, obj9) };
                                              class Te {
                                                constructor() {
                                                  return closure_6(recapCardBackgroundImage);
                                                }
                                              }
                                              obj9 = { d, fill: primaryBackgroundColor };
                                              const tmp77 = obj6(joined[12]);
                                              cResult[68] = primaryBackgroundColor;
                                              cResult[69] = closure_7(tmp77, size3);
                                              closure_7(tmp77, size3);
                                              class G {
                                                constructor() {
                                                  let opacity = 0;
                                                  if (absoluteFill) {
                                                    const obj2 = { duration };
                                                    const obj = timing;
                                                    opacity = obj.withTiming(1, obj2);
                                                  }
                                                  return { opacity };
                                                }
                                              }
                                            }
                                            if (cResult[70] !== tmp36) {
                                              const obj10 = { size: "custom", color: obj6(joined[14]).colors.BLACK, style: tmp36 };
                                              const ClydeIcon = tmp(tmp2[13]).ClydeIcon;
                                              const tmp85 = closure_7(ClydeIcon, obj10);
                                              class Te {
                                                constructor() {
                                                  return closure_6(recapCardBackgroundImage);
                                                }
                                              }
                                              cResult[70] = tmp36;
                                              cResult[71] = tmp85;
                                              tmp82 = tmp85;
                                            } else {
                                              tmp82 = cResult[71];
                                            }
                                            if (cResult[72] === tmp4.logo) {
                                              if (cResult[73] === tmp74) {
                                                let tmp86;
                                                if (cResult[74] === tmp82) {
                                                  tmp86 = cResult[75];
                                                }
                                                if (cResult[76] === animatedStyle) {
                                                  if (cResult[77] === joined) {
                                                    if (cResult[78] === tmp37) {
                                                      if (cResult[79] === tmp39) {
                                                        let tmp90;
                                                        if (cResult[80] === arr) {
                                                          tmp90 = cResult[81];
                                                        }
                                                        if (cResult[82] === children) {
                                                          if (cResult[83] === tmp40) {
                                                            if (cResult[84] === tmp44) {
                                                              if (cResult[85] === tmp70) {
                                                                if (cResult[86] === tmp86) {
                                                                  let tmp95;
                                                                  if (cResult[87] === tmp90) {
                                                                    tmp95 = cResult[88];
                                                                  }
                                                                  if (cResult[89] === tmp33) {
                                                                    let tmp99;
                                                                    if (cResult[90] === tmp95) {
                                                                      tmp99 = cResult[91];
                                                                    }
                                                                    return tmp99;
                                                                  }
                                                                  class Te {
                                                                    constructor() {
                                                                      return closure_6(recapCardBackgroundImage);
                                                                    }
                                                                  }
                                                                  cResult[89] = tmp33;
                                                                  cResult[90] = tmp95;
                                                                  cResult[91] = tmp102;
                                                                  tmp99 = tmp102;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj12 = { style: tmp40, children: items1 };
                                                        items1 = [, , , , ];
                                                        class Te {
                                                          constructor() {
                                                            return closure_6(recapCardBackgroundImage);
                                                          }
                                                        }
                                                        items1[1] = tmp70;
                                                        items1[2] = tmp86;
                                                        items1[3] = children;
                                                        items1[4] = tmp90;
                                                        const tmp98 = closure_8(closure_6, obj12);
                                                        cResult[82] = children;
                                                        cResult[83] = tmp40;
                                                        class G {
                                                          constructor() {
                                                            let opacity = 0;
                                                            if (absoluteFill) {
                                                              const obj2 = { duration };
                                                              const obj = timing;
                                                              opacity = obj.withTiming(1, obj2);
                                                            }
                                                            return { opacity };
                                                          }
                                                        }
                                                        cResult[85] = tmp70;
                                                        cResult[86] = tmp86;
                                                        cResult[87] = tmp90;
                                                        cResult[88] = tmp98;
                                                        tmp95 = tmp98;
                                                      }
                                                    }
                                                  }
                                                }
                                                let tmp91 = null != tmp37 && arr.length > 0;
                                                if (tmp91) {
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
                                                  class Te {
                                                    constructor() {
                                                      return closure_6(recapCardBackgroundImage);
                                                    }
                                                  }
                                                  tmp91 = closure_7(tmp94, obj14, joined);
                                                }
                                                cResult[76] = animatedStyle;
                                                class Te {
                                                  constructor() {
                                                    return closure_6(recapCardBackgroundImage);
                                                  }
                                                }
                                                cResult[77] = joined;
                                                cResult[78] = tmp37;
                                                cResult[79] = tmp39;
                                                cResult[80] = arr;
                                                cResult[81] = tmp91;
                                                tmp90 = tmp91;
                                              }
                                            }
                                            const obj15 = { style: null, children: items3 };
                                            class Te {
                                              constructor() {
                                                return closure_6(recapCardBackgroundImage);
                                              }
                                            }
                                            items3 = [tmp74, tmp82];
                                            const tmp89 = closure_8(closure_6, obj15);
                                            cResult[72] = tmp4.logo;
                                            cResult[73] = tmp74;
                                            cResult[74] = tmp82;
                                            class G {
                                              constructor() {
                                                let opacity = 0;
                                                if (absoluteFill) {
                                                  const obj2 = { duration };
                                                  const obj = timing;
                                                  opacity = obj.withTiming(1, obj2);
                                                }
                                                return { opacity };
                                              }
                                            }
                                            cResult[75] = tmp89;
                                            tmp86 = tmp89;
                                          }
                                        }
                                        class Te {
                                          constructor() {
                                            return closure_6(recapCardBackgroundImage);
                                          }
                                        }
                                        cResult[64] = joined;
                                        cResult[65] = tmp48;
                                        cResult[66] = tmp65;
                                        cResult[67] = tmp73;
                                        tmp70 = tmp73;
                                      }
                                    }
                                    const size4 = { width: canvasWidth, height: null, children: items4 };
                                    class Te {
                                      constructor() {
                                        return closure_6(recapCardBackgroundImage);
                                      }
                                    }
                                    items4 = [tmp52, tmp58];
                                    const tmp69 = closure_8(obj6(joined[12]), size4);
                                    cResult[60] = canvasWidth;
                                    cResult[61] = tmp52;
                                    cResult[62] = tmp58;
                                    class G {
                                      constructor() {
                                        let opacity = 0;
                                        if (absoluteFill) {
                                          const obj2 = { duration };
                                          const obj = timing;
                                          opacity = obj.withTiming(1, obj2);
                                        }
                                        return { opacity };
                                      }
                                    }
                                    cResult[63] = tmp69;
                                    tmp65 = tmp69;
                                  }
                                }
                              }
                              const obj17 = { href: tmp55, preserveAspectRatio: "xMidYMid slice", clipPath: combined1, onLoad: tmp57 };
                              class Te {
                                constructor() {
                                  return closure_6(recapCardBackgroundImage);
                                }
                              }
                              const merged = Object.assign(tmp11);
                              const tmp64 = closure_7(tmp60, obj17);
                              cResult[55] = tmp55;
                              cResult[56] = combined1;
                              class G {
                                constructor() {
                                  let opacity = 0;
                                  if (absoluteFill) {
                                    const obj2 = { duration };
                                    const obj = timing;
                                    opacity = obj.withTiming(1, obj2);
                                  }
                                  return { opacity };
                                }
                              }
                              cResult[58] = tmp11;
                              cResult[59] = tmp64;
                              tmp58 = tmp64;
                            }
                            class Te {
                              constructor() {
                                return closure_6(recapCardBackgroundImage);
                              }
                            }
                            cResult[52] = tmp39;
                            cResult[53] = recapCardBackgroundImage;
                            cResult[54] = Te;
                            tmp57 = Te;
                          }
                          const obj18 = { children: closure_7(tmp(joined[12]).ClipPath, obj19) };
                          const Defs = tmp(tmp2[12]).Defs;
                          obj19 = { id: null, children: tmp49 };
                          const tmp54 = closure_7(Defs, obj18);
                          cResult[47] = id;
                          cResult[48] = tmp49;
                          cResult[49] = tmp54;
                          tmp52 = tmp54;
                        }
                        const items5 = [tmp4.layer, animatedStyle];
                        cResult[42] = animatedStyle;
                        cResult[43] = tmp4.layer;
                        cResult[44] = items5;
                        tmp48 = items5;
                      }
                    }
                    const size5 = { style: tmp4.layer, width: canvasWidth, height, children: tmp41 };
                    cResult[38] = canvasWidth;
                    cResult[39] = tmp4.layer;
                    cResult[40] = tmp41;
                    cResult[41] = closure_7(obj6(joined[12]), size5);
                    closure_7(obj6(joined[12]), size5);
                    class G {
                      constructor() {
                        let opacity = 0;
                        if (absoluteFill) {
                          const obj2 = { duration };
                          const obj = timing;
                          opacity = obj.withTiming(1, obj2);
                        }
                        return { opacity };
                      }
                    }
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
      class Te {
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
  const cardColors = obj2.getCardColors(character);
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
  class L {
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
  L.__closure = { isArtLoaded: tmp11[0] === joined, withTiming: character(num[11]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 };
  L.__workletHash = 11056092560943;
  L.__initData = __initData2;
  ({ isArtLoaded: tmp11[0] === joined, withTiming: character(num[11]).withTiming, CARD_ART_FADE_IN_DURATION_MS: v150 });
  const animatedStyle = tmp3Result.useAnimatedStyle(L);
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
  items7[1] = size1(View, obj7, joined);
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
    tmp18Result = tmp18(View2, obj14, joined);
  }
  items7[4] = tmp18Result;
  return size1(recapCardBackgroundImage, obj5);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default tmp4;
export const CHECKPOINT_CARD_HEIGHT = 284;
