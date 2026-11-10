// Module ID: 9521
// Function ID: 9522
// Name: SlayerStorefrontItemCard
// Dependencies: [19, 17, 21, 5014, 575, 7404, 9522, 7730, 5717, 5587, 2]
// Exports: default

// Module 9521 (SlayerStorefrontItemCard)
import nativeDefault from "native" /* 575 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7404 */;
import _modDef7730 from "module_7730" /* 7730 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
let size = size_mod;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default function SlayerStorefrontItemCard(sku) {
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
  const useDominantColorFromImage = sku(dominantColorFromImage[6]).useDominantColorFromImage;
  const tmp4 = sku(dominantColorFromImage[6]);
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
        const tmp13 = bound(dominantColorFromImage[8]);
        items3 = [tmp9(tmp13, obj3), ];
        let obj5 = { source: obj6, style: tmp.cardImage };
        obj6 = { uri: str.toString() };
        const tmp14 = bound(dominantColorFromImage[8]);
        items3[1] = closure_5(tmp14, obj5);
        tmp9Result = closure_6(tmp10, obj2);
      } else {
        const obj7 = { colors: tmp7, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp.cardImageBackground, children: closure_5(tmp18, obj8) };
        obj8 = { source: obj9, style: tmp.cardImage };
        obj9 = { uri: str.toString() };
        const tmp17 = bound(dominantColorFromImage[9]);
        tmp18 = bound(dominantColorFromImage[8]);
        tmp9Result = tmp9(tmp17, obj7);
      }
      tmp9Result2 = tmp9(tmp10, obj);
    }
  }
  return tmp9Result2;
};
