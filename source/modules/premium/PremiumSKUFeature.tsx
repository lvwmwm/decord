// Module ID: 12865
// Function ID: 98313
// Name: PremiumSKUFeature
// Dependencies: []

// Module 12865 (PremiumSKUFeature)
let closure_0 = importDefault(dependencyMap[1]);
class PremiumSKUFeature {
  constructor(arg0, arg1, arg2) {
    tmp = closure_0(this, PremiumSKUFeature);
    this.name = global;
    this.description = importDefault;
    this.getFeatureValue = arg1;
    obj = { "Null": "postal-address-country", "Null": "password", "Null": "email" };
    obj.value = arg1;
    definePropertyResult = Object.defineProperty(this, "getFeatureValue", obj);
    return;
  }
}
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResultResult = importDefault(dependencyMap[0])(PremiumSKUFeature);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default importDefaultResultResult;
