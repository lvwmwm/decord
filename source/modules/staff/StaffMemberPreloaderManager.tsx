// Module ID: 16051
// Function ID: 123251
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16051 (_isNativeReflectConstruct)
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
let tmp2 = (arg0) => {
  class StaffMemberPreloaderManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, StaffMemberPreloaderManager);
      items1 = [...items];
      obj = closure_5(StaffMemberPreloaderManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      StaffMemberPreloaderManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            }
      };
      tmp2Result.handlePostConnectionOpen = () => {
        tmp2Result(closure_1[5]).preloadStaffMembers();
      };
      return tmp2Result;
    }
  }
  const arg1 = StaffMemberPreloaderManager;
  callback2(StaffMemberPreloaderManager, arg0);
  return callback(StaffMemberPreloaderManager);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/staff/StaffMemberPreloaderManager.tsx");

export default tmp2;
