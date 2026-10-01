// Module ID: 8288
// Function ID: 8289
// Name: SlayerStorefrontItemCard
// Dependencies: [19, 17, 21, 4836, 576, 6647, 8289, 6972, 5899, 5293, 2]
// Exports: default

// Module 8288 (SlayerStorefrontItemCard)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import _modDef6972 from "module_6972" /* 6972 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ ImageBackground: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = { cardContainer: obj2, cardImageBackground: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, cardImage: { width: "100%", height: "100%", resizeMode: "cover" } };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 };
let closure_7 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default function SlayerStorefrontItemCard(sku) {
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
      const tmp10 = closure_5;
      if (null != str2) {
        let obj2 = { source: obj3, style: tmp.cardImageBackground, children: tmp9(tmp13, obj4) };
        obj3 = { uri: str2.toString() };
        obj4 = { source: obj5, style: tmp.cardImage };
        obj5 = { uri: str.toString() };
        tmp13 = bound(dominantColorFromImage[8]);
        tmp9Result = tmp9(closure_4, obj2);
      } else {
        const obj6 = { colors: tmp7, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp.cardImageBackground, children: jsx(tmp17, obj7) };
        obj7 = { source: obj8, style: tmp.cardImage };
        obj8 = { uri: str.toString() };
        const tmp16 = bound(dominantColorFromImage[9]);
        tmp17 = bound(dominantColorFromImage[8]);
        tmp9Result = tmp9(tmp16, obj6);
      }
      tmp9Result2 = tmp9(tmp10, obj);
    }
  }
  return tmp9Result2;
};
