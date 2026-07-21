// Module ID: 12139
// Function ID: 93518
// Name: GiftBoxAnimation
// Dependencies: []
// Exports: default

// Module 12139 (GiftBoxAnimation)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const PremiumGiftStyles = arg1(dependencyMap[2]).PremiumGiftStyles;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  arg1(dependencyMap[4]);
  [][0] = closure_3;
  if (null == giftStyle) {
    return null;
  } else {
    const match = arg1(dependencyMap[5]).match(giftStyle);
    const str = arg1(dependencyMap[5]);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6]));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7]));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8]));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9]));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10]));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10])).with(PremiumGiftStyles.CHEST, () => callback(closure_2[11]));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10])).with(PremiumGiftStyles.CHEST, () => callback(closure_2[11])).with(PremiumGiftStyles.CAKE, () => callback(closure_2[12]));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10])).with(PremiumGiftStyles.CHEST, () => callback(closure_2[11])).with(PremiumGiftStyles.CAKE, () => callback(closure_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(closure_2[13]));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10])).with(PremiumGiftStyles.CHEST, () => callback(closure_2[11])).with(PremiumGiftStyles.CAKE, () => callback(closure_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(closure_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(closure_2[14]));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10])).with(PremiumGiftStyles.CHEST, () => callback(closure_2[11])).with(PremiumGiftStyles.CAKE, () => callback(closure_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(closure_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(closure_2[14])).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(closure_2[15]));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10])).with(PremiumGiftStyles.CHEST, () => callback(closure_2[11])).with(PremiumGiftStyles.CAKE, () => callback(closure_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(closure_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(closure_2[14])).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(closure_2[15])).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(closure_2[16]));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(closure_2[6])).with(PremiumGiftStyles.BOX, () => callback(closure_2[7])).with(PremiumGiftStyles.CUP, () => callback(closure_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => callback(closure_2[9])).with(PremiumGiftStyles.COFFEE, () => callback(closure_2[10])).with(PremiumGiftStyles.CHEST, () => callback(closure_2[11])).with(PremiumGiftStyles.CAKE, () => callback(closure_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(closure_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(closure_2[14])).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(closure_2[15])).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(closure_2[16])).otherwise(() => callback(closure_2[9])), autoPlay: !tmp2, style: { bhk: "<string:41025538>", bic: "<string:16777216>" } };
    return jsx(importDefault(dependencyMap[17]), obj);
  }
};
