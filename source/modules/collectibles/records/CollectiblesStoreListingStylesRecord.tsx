// Module ID: 6789
// Function ID: 53629
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6789 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class CollectiblesStoreListingStylesRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, CollectiblesStoreListingStylesRecord);
      obj = closure_6(CollectiblesStoreListingStylesRecord);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ backgroundColors: tmp6.backgroundColors, buttonColors: tmp6.buttonColors, confettiColors: tmp6.confettiColors } = arg0);
      return tmp2Result;
    }
  }
  const arg1 = CollectiblesStoreListingStylesRecord;
  callback2(CollectiblesStoreListingStylesRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        let background_colors;
        let button_colors;
        let confetti_colors;
        ({ background_colors, button_colors, confetti_colors } = arg0);
        const obj = {
          backgroundColors: background_colors.map((color) => {
            const tmp = callback2(closure_2[6]);
            return tmp(callback(closure_2[7]).int2hex(color));
          }),
          buttonColors: button_colors.map((color) => {
            const tmp = callback2(closure_2[6]);
            return tmp(callback(closure_2[7]).int2hex(color));
          }),
          confettiColors: confetti_colors.map((color) => {
            const tmp = callback2(closure_2[6]);
            return tmp(callback(closure_2[7]).int2hex(color));
          })
        };
        return new CollectiblesStoreListingStylesRecord({
          backgroundColors: background_colors.map((color) => {
            const tmp = callback2(closure_2[6]);
            return tmp(callback(closure_2[7]).int2hex(color));
          }),
          buttonColors: button_colors.map((color) => {
            const tmp = callback2(closure_2[6]);
            return tmp(callback(closure_2[7]).int2hex(color));
          }),
          confettiColors: confetti_colors.map((color) => {
            const tmp = callback2(closure_2[6]);
            return tmp(callback(closure_2[7]).int2hex(color));
          })
        });
      }
    }
  ];
  return callback(CollectiblesStoreListingStylesRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx");

export default tmp2;
