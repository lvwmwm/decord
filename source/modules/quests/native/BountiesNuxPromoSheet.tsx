// Module ID: 13843
// Function ID: 104622
// Name: BountiesNuxPromoSheet
// Dependencies: []
// Exports: default

// Module 13843 (BountiesNuxPromoSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[4]).space.PX_12 };
obj.illustrationContainer = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = React.useCallback(() => {
    callback2(closure_2[5]).hideActionSheet(callback(closure_2[6]).PROMO_SHEET_KEY);
  }, []);
  let obj = { gradientColor: "purple" };
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.DDpHZG);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.description = intl2.string(arg1(dependencyMap[8]).t.LY+igv);
  obj = { style: callback().illustrationContainer, children: jsx(arg1(dependencyMap[9]).BountiesPosterSpotIllustration, {}) };
  obj.illustration = <View {...obj} />;
  obj = { "Null": "<string:1431437314>", "Null": null, "Null": null };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.text = intl3.string(arg1(dependencyMap[8]).t.cpT0Cq);
  obj.onPress = callback;
  obj.actions = jsx(arg1(dependencyMap[10]).Button, obj);
  return jsx(arg1(dependencyMap[7]).PromoSheet, obj);
};
