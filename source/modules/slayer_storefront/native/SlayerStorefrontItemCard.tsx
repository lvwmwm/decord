// Module ID: 8256
// Function ID: 65151
// Name: SlayerStorefrontItemCard
// Dependencies: [31, 27, 33, 4130, 689, 5609, 8257, 6784, 5085, 4554, 2]
// Exports: default

// Module 8256 (SlayerStorefrontItemCard)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ ImageBackground: closure_4, View: closure_5 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 };
_createForOfIteratorHelperLoose.cardContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardImageBackground = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.cardImage = { width: "100%", height: "100%", resizeMode: "cover" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default function SlayerStorefrontItemCard(sku) {
  sku = sku.sku;
  let num = sku.size;
  if (num === undefined) {
    num = 220;
  }
  let bound;
  let dominantColorFromImage;
  let cardImage = _createForOfIteratorHelperLoose();
  let size = num;
  if ("object" !== typeof num) {
    let obj = { width: num, height: num };
    size = obj;
  }
  bound = Math.max(size.width, size.height);
  let items = [sku, bound];
  let str = React.useMemo(() => {
    let obj = sku(dominantColorFromImage[5]);
    obj = { size: bound };
    return obj.getCardImageURL(sku, obj);
  }, items);
  let items1 = [sku, bound];
  let str2 = React.useMemo(() => {
    let obj = sku(dominantColorFromImage[5]);
    obj = { size: bound };
    return obj.getCardBackgroundImageURL(sku, obj);
  }, items1);
  let obj1 = sku(dominantColorFromImage[6]);
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  dominantColorFromImage = obj1.useDominantColorFromImage(str);
  [][0] = dominantColorFromImage;
  let tmp5 = null;
  if (null != sku) {
    tmp5 = null;
    if (null != str) {
      obj = {};
      const items2 = [cardImage.cardContainer, size, sku.containerStyle];
      obj.style = items2;
      if (null != str2) {
        obj = {};
        obj1 = { uri: str2.toString() };
        obj.source = obj1;
        obj.style = cardImage.cardImageBackground;
        const obj2 = {};
        const obj3 = {};
        str2 = str.toString();
        obj3.uri = str2;
        obj2.source = obj3;
        cardImage = cardImage.cardImage;
        obj2.style = cardImage;
        obj.children = jsx(bound(dominantColorFromImage[8]), {});
        let tmp13 = <closure_4 />;
        const tmp12 = bound(dominantColorFromImage[8]);
      } else {
        const obj4 = { colors: tmp4, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: cardImage.cardImageBackground };
        let obj5 = {};
        const obj6 = {};
        const tmp18 = bound(dominantColorFromImage[9]);
        obj6.uri = str.toString();
        obj5.source = obj6;
        obj5.style = cardImage.cardImage;
        obj4.children = jsx(bound(dominantColorFromImage[8]), {});
        tmp13 = <tmp18 colors={tmp4} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={cardImage.cardImageBackground} />;
        const tmp19 = bound(dominantColorFromImage[8]);
      }
      obj.children = tmp13;
      <closure_5 />;
      const tmp6 = jsx;
      const tmp7 = closure_5;
    }
  }
  return tmp5;
};
