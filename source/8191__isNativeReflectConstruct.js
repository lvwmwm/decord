// Module ID: 8191
// Function ID: 64812
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8191 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class RevenueError {
    constructor(arg0) {
      self = this;
      prop = arg0.extraSentryInformation;
      if (prop === undefined) {
        prop = null;
      }
      str = arg0.errorHandlingBehavior;
      if (str === undefined) {
        str = "close-and-alert";
      }
      flag = arg0.skipReportingToSentry;
      if (flag === undefined) {
        flag = false;
      }
      tmp2 = closure_1(self, RevenueError);
      items = [];
      items[0] = arg0.message;
      obj = closure_3(RevenueError);
      tmp3 = closure_2;
      if (closure_5()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result.name = new.target.name;
      tmp3Result.extraSentryInformation = prop;
      tmp3Result.errorHandlingBehavior = str;
      tmp3Result.skipReportingToSentry = flag;
      return tmp3Result;
    }
  }
  const callback = RevenueError;
  callback2(RevenueError, arg0);
  return callback(RevenueError);
}(importDefault(dependencyMap[5])(Error));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/revenue_components/errors/RevenueError.tsx");

export const RevenueError = tmp2;
