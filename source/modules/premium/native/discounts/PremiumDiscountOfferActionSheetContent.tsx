// Module ID: 15501
// Function ID: 118282
// Dependencies: []

// Module 15501
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.contentContainer = obj;
obj.buttonContainer = {};
obj.title = { <string:1365005216>: null, <string:1650568404>: null };
obj.heroIllustrationContainer = { flex: "{0} e {1}", width: "{0}, {1}", height: "{0} e {1}", tintColor: "{0}, {1}" };
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function PremiumDiscountOfferActionSheetContent(arg0) {
  let discountOffer;
  let onConfirm;
  ({ discountOffer, onConfirm } = arg0);
  const tmp = callback3();
  let obj = { IconComponent: arg1(dependencyMap[5]).UserIcon };
  const intl = arg1(dependencyMap[6]).intl;
  obj.label = intl.string(arg1(dependencyMap[6]).t.kpMomJ);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.description = intl2.string(arg1(dependencyMap[6]).t.uVUtPw);
  const items = [obj, , ];
  obj = { IconComponent: arg1(dependencyMap[7]).ChatSmileIcon };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.label = intl3.string(arg1(dependencyMap[6]).t.R2IV/Q);
  const intl4 = arg1(dependencyMap[6]).intl;
  obj.description = intl4.string(arg1(dependencyMap[6]).t.3SUJLd);
  items[1] = obj;
  obj = { IconComponent: arg1(dependencyMap[8]).FolderIcon };
  const intl5 = arg1(dependencyMap[6]).intl;
  obj.label = intl5.string(arg1(dependencyMap[6]).t.u/NJKc);
  const intl6 = arg1(dependencyMap[6]).intl;
  obj.description = intl6.string(arg1(dependencyMap[6]).t.i1UuMk);
  items[2] = obj;
  const amount = discountOffer.discount.amount;
  const obj1 = { style: tmp.contentContainer };
  const items1 = [callback(View, { style: tmp.heroIllustrationContainer, children: callback(arg1(dependencyMap[9]).NitroWumpusFlightRight3dIllustration, {}) }), , , ];
  const obj3 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, style: tmp.title };
  const intl7 = arg1(dependencyMap[6]).intl;
  obj3.children = intl7.formatToPlainString(arg1(dependencyMap[6]).t.qowbUk, { percent: amount });
  items1[1] = callback(arg1(dependencyMap[10]).Text, obj3);
  items1[2] = callback(importDefault(dependencyMap[11]), { perks: items });
  const obj4 = { style: tmp.buttonContainer };
  const obj5 = { size: "lg" };
  const intl8 = arg1(dependencyMap[6]).intl;
  obj5.text = intl8.formatToPlainString(arg1(dependencyMap[6]).t.bkQ4bH, { percent: amount });
  obj5.onPress = onConfirm;
  obj5.grow = true;
  const obj6 = { size: "md", color: importDefault(dependencyMap[4]).unsafe_rawColors.WHITE };
  obj5.icon = callback(arg1(dependencyMap[13]).NitroWheelIcon, obj6);
  obj4.children = callback(arg1(dependencyMap[12]).Button, obj5);
  items1[3] = callback(View, obj4);
  obj1.children = items1;
  return callback2(View, obj1);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx");

export default memoResult;
