// Module ID: 4032
// Function ID: 33574
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4032 (_isNativeReflectConstruct)
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
  class AppliedGuildBoostError {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_3(this, AppliedGuildBoostError);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = closure_6(AppliedGuildBoostError);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      if (429 === tmp2Result.status) {
        tmp2Result.message = tmp2Result._getMessageFromRateLimit(arg0);
      }
      return tmp2Result;
    }
  }
  const arg1 = AppliedGuildBoostError;
  callback2(AppliedGuildBoostError, arg0);
  const items = [
    {
      key: "_getMessageFromRateLimit",
      value(body) {
        let obj = AppliedGuildBoostError(closure_2[5]);
        const diffAsUnitsResult = obj.diffAsUnits(0, body.body.retry_after * callback(closure_2[6]).Millis.SECOND);
        obj = { days: AppliedGuildBoostError(closure_2[7]).t.iXc/Ib, hours: AppliedGuildBoostError(closure_2[7]).t.WW9P57, minutes: AppliedGuildBoostError(closure_2[7]).t.I7rYev };
        return AppliedGuildBoostError(closure_2[5]).unitsAsStrings(diffAsUnitsResult, obj);
      }
    }
  ];
  return callback(AppliedGuildBoostError, items);
}(importDefault(dependencyMap[8]));
const result = arg1(dependencyMap[9]).fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default tmp2;
