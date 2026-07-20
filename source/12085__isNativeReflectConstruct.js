// Module ID: 12085
// Function ID: 93224
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12085 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = {};
let tmp2 = (Store) => {
  class CustomActivityLinksStore {
    constructor() {
      self = this;
      tmp = CustomActivityLinksStore(this, CustomActivityLinksStore);
      obj = closure_3(CustomActivityLinksStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = CustomActivityLinksStore;
  callback2(CustomActivityLinksStore, Store);
  const items = [
    {
      key: "getOne",
      value(arg0, arg1) {
        if (null != closure_6[arg0]) {
          return closure_6[arg0][arg1];
        }
      }
    }
  ];
  return callback(CustomActivityLinksStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "CustomActivityLinksStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let applicationId;
    let link;
    ({ applicationId, link } = arg0);
    if (null == closure_6[applicationId]) {
      const _Object = Object;
      closure_6[applicationId] = Object.create(null);
    }
    closure_6[applicationId][link.link_id] = new closure_5(link);
  },
  LOGOUT: function handleLogout() {
    let closure_6 = {};
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default tmp2;
