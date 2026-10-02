// Module ID: 84
// Function ID: 85
// Name: AssetRegistry
// Dependencies: []

// Module 84 (AssetRegistry)
let closure_0 = [];
const obj = {
  registerAsset(arg0) {
    return closure_0.push(arg0);
  },
  getAssetByID(value2) {
    return closure_0[value2 - 1];
  }
};

export default obj;
