// Module ID: 8514
// Function ID: 8515
// Name: SlayerStorefrontItemCard
// Dependencies: [19, 17, 21, 4896, 587, 558, 576, 6741, 8515, 7076, 5981, 5612, 2]

// Module 8514 (SlayerStorefrontItemCard)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import FastImageDefault from "FastImage" /* 5981 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6741 */;
import _modDef7076 from "module_7076" /* 7076 */;
import DominantColorUtils from "DominantColorUtils" /* 8515 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ ImageBackground: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = { cardContainer: obj2, cardImageBackground: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, cardImage: { width: "100%", height: "100%", resizeMode: "cover" } };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let size2;
  let sku;
  const obj = react2;
  const cResult = obj.c(31);
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
          const obj6 = _modDef7076(dominantColorFromImage);
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
          const obj10 = _modDef7076(dominantColorFromImage);
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
              let tmp30;
              if (cResult[20] === tmp4.cardContainer) {
                tmp24 = cResult[21];
              }
              if (cResult[22] === str2) {
                if (cResult[23] === str) {
                  if (cResult[24] === tmp14) {
                    if (cResult[25] === tmp4.cardImage) {
                      let tmp25;
                      if (cResult[26] === tmp4.cardImageBackground) {
                        tmp25 = cResult[27];
                      }
                      if (cResult[28] === tmp24) {
                        let tmp31;
                        if (cResult[29] === tmp25) {
                          tmp31 = cResult[30];
                        }
                        tmp23 = tmp31;
                      }
                      const tmp34 = <hasOwnProperty style={tmp24}>{tmp25}</hasOwnProperty>;
                      cResult[28] = tmp24;
                      cResult[29] = tmp25;
                      cResult[30] = tmp34;
                      tmp31 = tmp34;
                    }
                  }
                }
              }
              if (null != str2) {
                const obj4 = { uri: str2.toString() };
                const obj7 = { uri: str.toString() };
                FastImageDefault;
                tmp30 = <React3 source={obj4} style={tmp4.cardImageBackground}>{null}</React3>;
              } else {
                const obj11 = { uri: str.toString() };
                LinearGradientDefault;
                FastImageDefault;
                tmp30 = <tmp37 colors={tmp14} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={tmp4.cardImageBackground}>{null}</tmp37>;
              }
              cResult[22] = str2;
              cResult[23] = str;
              cResult[24] = tmp14;
              cResult[25] = tmp4.cardImage;
              cResult[26] = tmp4.cardImageBackground;
              cResult[27] = tmp30;
              tmp25 = tmp30;
            }
          }
          const items2 = [tmp4.cardContainer, size2, containerStyle];
          cResult[18] = containerStyle;
          cResult[19] = size2;
          cResult[20] = tmp4.cardContainer;
          cResult[21] = items2;
          tmp24 = items2;
        }
      }
      return tmp23;
    }
    const obj12 = { size: bound };
    const tmpResult3 = SlayerStorefrontUtils;
    const cardBackgroundImageURL = tmpResult3.getCardBackgroundImageURL(sku, obj12);
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
}) : ((sku) => {
  let items2;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let tmp13;
  let tmp17;
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
      const tmp10 = closure_5;
      if (null != str2) {
        let obj2 = { source: obj3, style: tmp.cardImageBackground, children: tmp9(tmp13, obj4) };
        obj3 = { uri: str2.toString() };
        obj4 = { source: obj5, style: tmp.cardImage };
        obj5 = { uri: str.toString() };
        tmp13 = bound(dominantColorFromImage[10]);
        tmp9Result = tmp9(closure_4, obj2);
      } else {
        const obj6 = { colors: tmp7, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp.cardImageBackground, children: jsx(tmp17, obj7) };
        obj7 = { source: obj8, style: tmp.cardImage };
        obj8 = { uri: str.toString() };
        const tmp16 = bound(dominantColorFromImage[11]);
        tmp17 = bound(dominantColorFromImage[10]);
        tmp9Result = tmp9(tmp16, obj6);
      }
      tmp9Result2 = tmp9(tmp10, obj);
    }
  }
  return tmp9Result2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default tmp3;
