// Module ID: 8206
// Function ID: 64886
// Name: SlayerStorefrontItemCard
// Dependencies: []
// Exports: default

// Module 8206 (SlayerStorefrontItemCard)
let closure_3 = importAll(dependencyMap[0]);
({ ImageBackground: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { 0: "r", 0: "DISMISSIBLE_CONTENT_SHOWN", 9223372036854775807: "OVERLAY", 0: "y", 9223372036854775807: "CONNECTIONS_STEP", 9223372036854775807: "unignoreUser", 9223372036854775807: "Array", borderRadius: importDefault(dependencyMap[4]).radii.md, shadowOffset: {} };
obj.cardContainer = obj;
obj.cardImageBackground = {};
obj.cardImage = {};
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx");

export default function SlayerStorefrontItemCard(sku) {
  sku = sku.sku;
  const arg1 = sku;
  let num = sku.size;
  if (num === undefined) {
    num = 220;
  }
  let importDefault;
  let dependencyMap;
  let cardImage = callback();
  let size = num;
  if ("object" !== typeof num) {
    let obj = { width: num, height: num };
    size = obj;
  }
  const bound = Math.max(size.width, size.height);
  importDefault = bound;
  const items = [sku, bound];
  let str = React.useMemo(() => {
    let obj = sku(dominantColorFromImage[5]);
    obj = { size: bound };
    return obj.getCardImageURL(sku, obj);
  }, items);
  const items1 = [sku, bound];
  let str2 = React.useMemo(() => {
    let obj = sku(dominantColorFromImage[5]);
    obj = { size: bound };
    return obj.getCardBackgroundImageURL(sku, obj);
  }, items1);
  let obj1 = arg1(dependencyMap[6]);
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  const dominantColorFromImage = obj1.useDominantColorFromImage(str);
  dependencyMap = dominantColorFromImage;
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
        obj.children = jsx(importDefault(dependencyMap[8]), obj2);
        let tmp13 = <closure_4 {...obj} />;
        const tmp12 = importDefault(dependencyMap[8]);
      } else {
        const obj4 = { colors: tmp4, start: { 0: "%FunctionPrototype%", 0: "paddingStart" }, end: { 0: "<string:2491613185>", 0: "<string:2941583362>" }, style: cardImage.cardImageBackground };
        const obj5 = {};
        const obj6 = {};
        const tmp18 = importDefault(dependencyMap[9]);
        obj6.uri = str.toString();
        obj5.source = obj6;
        obj5.style = cardImage.cardImage;
        obj4.children = jsx(importDefault(dependencyMap[8]), obj5);
        tmp13 = <tmp18 {...obj4} />;
        const tmp19 = importDefault(dependencyMap[8]);
      }
      obj.children = tmp13;
      <closure_5 {...obj} />;
      const tmp6 = jsx;
      const tmp7 = closure_5;
    }
  }
  return tmp5;
};
