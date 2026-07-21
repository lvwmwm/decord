// Module ID: 7128
// Function ID: 57322
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7128 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class MarketingComponentRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, MarketingComponentRecord);
      obj = closure_5(MarketingComponentRecord);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, componentType: tmp6.componentType, properties: tmp6.properties, promotionId: tmp6.promotionId } = arg0);
      return tmp2Result;
    }
  }
  const arg1 = MarketingComponentRecord;
  callback2(MarketingComponentRecord, arg0);
  const items = [
    {
      key: "createFromServer",
      value(id) {
        let obj = { ignoreBOM: true };
        const textDecoder = new TextDecoder("utf-8", obj);
        const MarketingComponentRecord = textDecoder;
        obj = { id: id.id, componentType: id.component_type };
        const PremiumMarketingComponentProperties = MarketingComponentRecord(closure_1[6]).PremiumMarketingComponentProperties;
        obj = {
          readUnknownField: true,
          readerFactory(buf) {
            const binaryReader = new textDecoder(closure_1[7]).BinaryReader(buf, textDecoder);
            return binaryReader;
          }
        };
        obj.properties = PremiumMarketingComponentProperties.fromBinary(MarketingComponentRecord(closure_1[7]).base64decode(id.properties), obj);
        obj.promotionId = id.promotion_id;
        const obj3 = MarketingComponentRecord(closure_1[7]);
        return new MarketingComponentRecord(obj);
      }
    }
  ];
  return callback(MarketingComponentRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/promotions/MarketingComponentRecord.tsx");

export default tmp2;
