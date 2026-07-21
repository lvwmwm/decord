// Module ID: 12867
// Function ID: 98335
// Name: PremiumSKUFeature
// Dependencies: []

// Module 12867 (PremiumSKUFeature)
let closure_0 = importDefault(dependencyMap[1]);
class PremiumSKUFeature {
  constructor(arg0, arg1, arg2) {
    tmp = closure_0(this, PremiumSKUFeature);
    this.name = global;
    this.description = importDefault;
    this.getFeatureValue = arg1;
    obj = { "Null": "absolute", "Null": -1, "Null": -1 };
    obj.value = arg1;
    definePropertyResult = Object.defineProperty(this, "getFeatureValue", obj);
    return;
  }
}
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResultResult = importDefault(dependencyMap[0])(PremiumSKUFeature);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default importDefaultResultResult;
