// Module ID: 9028
// Function ID: 9029
// Name: SlayerStorefrontItemCard
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 6930, 9029, 7273, 6156, 5391, 2]

// Module 9028 (SlayerStorefrontItemCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import FastImageDefault from "FastImage" /* 6156 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6930 */;
import _modDef7273 from "module_7273" /* 7273 */;
import DominantColorUtils from "DominantColorUtils" /* 9029 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { cardContainer: obj2, cardImageBackground: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, backgroundImage: obj3, cardImage: { width: "100%", height: "100%", resizeMode: "cover" } };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", height: "100%" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SlayerStorefrontItemCard(arg0) {
  let containerStyle;
  let items2;
  let obj11;
  let obj12;
  let obj5;
  let obj8;
  let size2;
  let sku;
  let tmp40;
  const obj = react2;
  const cResult = obj.c(32);
  ({ sku, size, containerStyle } = arg0);
  let num = 220;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_7();
  if (cResult[0] !== num) {
    let tmp5 = num;
    if (typeof num !== "object") {
      const size1 = { width: num, height: num };
      tmp5 = size1;
    }
    cResult[0] = num;
    cResult[1] = tmp5;
    size2 = tmp5;
  } else {
    size2 = cResult[1];
  }
  const bound = Math.max(size2.width, size2.height);
  if (cResult[2] === bound) {
    let str;
    if (cResult[3] === sku) {
      str = cResult[4];
    }
    if (cResult[5] === bound) {
      let str2;
      let tmp9;
      let tmp14;
      if (cResult[6] === sku) {
        str2 = cResult[7];
      }
      if (cResult[8] !== str) {
        let str1;
        if (str != null) {
          str1 = str.toString();
        }
        cResult[8] = str;
        cResult[9] = str1;
        tmp9 = str1;
      } else {
        tmp9 = cResult[9];
      }
      const tmpResult = DominantColorUtils;
      const dominantColorFromImage = tmpResult.useDominantColorFromImage(tmp9);
      if (null != dominantColorFromImage) {
        let tmp16;
        let tmp19;
        if (cResult[11] !== dominantColorFromImage) {
          const obj6 = _modDef7273(dominantColorFromImage);
          const brightenResult = obj6.brighten(20);
          const saturateResult = brightenResult.saturate(30);
          const setAlphaResult = saturateResult.setAlpha(0.8);
          const toRgbStringResult = setAlphaResult.toRgbString();
          cResult[11] = dominantColorFromImage;
          cResult[12] = toRgbStringResult;
          tmp16 = toRgbStringResult;
        } else {
          tmp16 = cResult[12];
        }
        if (cResult[13] !== dominantColorFromImage) {
          const obj10 = _modDef7273(dominantColorFromImage);
          const saturateResult1 = obj10.saturate(50);
          const setAlphaResult1 = saturateResult1.setAlpha(0.9);
          const toRgbStringResult1 = setAlphaResult1.toRgbString();
          cResult[13] = dominantColorFromImage;
          cResult[14] = toRgbStringResult1;
          tmp19 = toRgbStringResult1;
        } else {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp19) {
          let tmp22;
          if (cResult[16] === tmp16) {
            tmp22 = cResult[17];
          }
          tmp14 = tmp22;
        }
        const items = [tmp16, tmp19];
        cResult[15] = tmp19;
        cResult[16] = tmp16;
        cResult[17] = items;
        tmp22 = items;
      } else {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [nativeDefault.colors.BACKGROUND_SURFACE_HIGH, nativeDefault.colors.BACKGROUND_BASE_LOWEST];
          cResult[10] = items1;
          tmp14 = items1;
        } else {
          tmp14 = cResult[10];
        }
      }
      let tmp23 = null;
      if (null != sku) {
        tmp23 = null;
        if (null != str) {
          if (cResult[18] === containerStyle) {
            if (cResult[19] === size2) {
              let tmp24;
              let tmp32;
              if (cResult[20] === tmp4.cardContainer) {
                tmp24 = cResult[21];
              }
              if (cResult[22] === str2) {
                if (cResult[23] === str) {
                  if (cResult[24] === tmp14) {
                    if (cResult[25] === tmp4.backgroundImage) {
                      if (cResult[26] === tmp4.cardImage) {
                        let tmp25;
                        if (cResult[27] === tmp4.cardImageBackground) {
                          tmp25 = cResult[28];
                        }
                        if (cResult[29] === tmp24) {
                          let tmp33;
                          if (cResult[30] === tmp25) {
                            tmp33 = cResult[31];
                          }
                          tmp23 = tmp33;
                        }
                        const obj2 = { style: tmp24, children: tmp25 };
                        const tmp36 = hasOwnProperty(React3, obj2);
                        cResult[29] = tmp24;
                        cResult[30] = tmp25;
                        cResult[31] = tmp36;
                        tmp33 = tmp36;
                      }
                    }
                  }
                }
              }
              if (null != str2) {
                const obj3 = { style: tmp4.cardImageBackground, children: items2 };
                const obj4 = { source: obj5, style: tmp4.backgroundImage };
                obj5 = { uri: str2.toString() };
                const tmp30 = FastImageDefault;
                items2 = [hasOwnProperty(tmp30, obj4), ];
                const obj7 = { source: obj8, style: tmp4.cardImage };
                obj8 = { uri: str.toString() };
                const tmp31 = FastImageDefault;
                items2[1] = hasOwnProperty(tmp31, obj7);
                tmp32 = metroRequire(React3, obj3);
              } else {
                const obj9 = { colors: tmp14, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp4.cardImageBackground, children: hasOwnProperty(tmp40, obj11) };
                obj11 = { source: obj12, style: tmp4.cardImage };
                obj12 = { uri: str.toString() };
                const tmp39 = LinearGradientDefault;
                tmp40 = FastImageDefault;
                tmp32 = hasOwnProperty(tmp39, obj9);
              }
              cResult[22] = str2;
              cResult[23] = str;
              cResult[24] = tmp14;
              cResult[25] = tmp4.backgroundImage;
              cResult[26] = tmp4.cardImage;
              cResult[27] = tmp4.cardImageBackground;
              cResult[28] = tmp32;
              tmp25 = tmp32;
            }
          }
          const items3 = [tmp4.cardContainer, size2, containerStyle];
          cResult[18] = containerStyle;
          cResult[19] = size2;
          cResult[20] = tmp4.cardContainer;
          cResult[21] = items3;
          tmp24 = items3;
        }
      }
      return tmp23;
    }
    const obj13 = { size: bound };
    const tmpResult3 = SlayerStorefrontUtils;
    const cardBackgroundImageURL = tmpResult3.getCardBackgroundImageURL(sku, obj13);
    cResult[5] = bound;
    cResult[6] = sku;
    cResult[7] = cardBackgroundImageURL;
    str2 = cardBackgroundImageURL;
  }
  const tmpResult4 = SlayerStorefrontUtils;
  const cardImageURL = tmpResult4.getCardImageURL(sku, { size: bound });
  cResult[2] = bound;
  cResult[3] = sku;
  cResult[4] = cardImageURL;
  str = cardImageURL;
}) : (function SlayerStorefrontItemCard(sku) {
  let items2;
  let items3;
  let obj4;
  let obj6;
  let obj8;
  let obj9;
  let tmp18;
  let tmp9Result;
  sku = sku.sku;
  let num = sku.size;
  if (num === undefined) {
    num = 220;
  }
  let bound;
  let dominantColorFromImage;
  const containerStyle = sku.containerStyle;
  const tmp = closure_7();
  size = num;
  if (typeof num !== "object") {
    const size1 = { width: num, height: num };
    size = size1;
  }
  bound = Math.max(size.width, size.height);
  let items = [sku, bound];
  const str = react.useMemo(() => {
    const obj = SlayerStorefrontUtils;
    const obj2 = { size: bound };
    return obj.getCardImageURL(sku, obj2);
  }, items);
  let items1 = [sku, bound];
  const str2 = react.useMemo(() => {
    const obj = SlayerStorefrontUtils;
    const obj2 = { size: bound };
    return obj.getCardBackgroundImageURL(sku, obj2);
  }, items1);
  let str1;
  const useDominantColorFromImage = sku(dominantColorFromImage[8]).useDominantColorFromImage;
  const tmp4 = sku(dominantColorFromImage[8]);
  if (str != null) {
    str1 = str.toString();
  }
  dominantColorFromImage = useDominantColorFromImage(str1);
  [][0] = dominantColorFromImage;
  let tmp9Result2 = null;
  if (null != sku) {
    tmp9Result2 = null;
    if (null != str) {
      let obj = { style: items2, children: tmp9Result };
      items2 = [tmp.cardContainer, size, containerStyle];
      if (null != str2) {
        let obj2 = { style: tmp.cardImageBackground, children: items3 };
        const obj3 = { source: obj4, style: tmp.backgroundImage };
        obj4 = { uri: str2.toString() };
        const tmp13 = bound(dominantColorFromImage[10]);
        items3 = [tmp9(tmp13, obj3), ];
        let obj5 = { source: obj6, style: tmp.cardImage };
        obj6 = { uri: str.toString() };
        const tmp14 = bound(dominantColorFromImage[10]);
        items3[1] = closure_5(tmp14, obj5);
        tmp9Result = closure_6(tmp10, obj2);
      } else {
        const obj7 = { colors: tmp7, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp.cardImageBackground, children: closure_5(tmp18, obj8) };
        obj8 = { source: obj9, style: tmp.cardImage };
        obj9 = { uri: str.toString() };
        const tmp17 = bound(dominantColorFromImage[11]);
        tmp18 = bound(dominantColorFromImage[10]);
        tmp9Result = tmp9(tmp17, obj7);
      }
      tmp9Result2 = tmp9(tmp10, obj);
    }
  }
  return tmp9Result2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default tmp6;
