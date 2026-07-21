// Module ID: 12383
// Function ID: 94667
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12383 (_isNativeReflectConstruct)
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
const importDefaultResult = importDefault(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { 680286253: null, 2048731829: null, 1594578558: null, color: importDefault(dependencyMap[9]).unsafe_rawColors.RED_400 };
obj.warning = obj;
let closure_9 = obj.createLegacyClassComponentStyles(obj);
const tmp4 = (PureComponent) => {
  class PremiumUnverifiedWarning {
    constructor() {
      self = this;
      tmp = closure_2(this, PremiumUnverifiedWarning);
      obj = closure_5(PremiumUnverifiedWarning);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PremiumUnverifiedWarning;
  callback2(PremiumUnverifiedWarning, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let tmp3 = null;
        if (!this.props.verified) {
          const obj = {};
          const items = [tmp.warning, tmp2];
          obj.style = items;
          const intl = PremiumUnverifiedWarning(closure_1[11]).intl;
          obj.children = intl.string(PremiumUnverifiedWarning(closure_1[11]).t.0LgOKH);
          tmp3 = callback3(PremiumUnverifiedWarning(closure_1[10]).LegacyText, obj);
        }
        return tmp3;
      }
    }
  ];
  return callback(PremiumUnverifiedWarning, items);
}(importAll(dependencyMap[5]).PureComponent);
tmp4.contextType = arg1(dependencyMap[12]).ThemeContext;
const importAllResult = importAll(dependencyMap[5]);
const items = [importDefaultResult];
const importDefaultResult1 = importDefault(dependencyMap[13]);
const tmp5 = importDefault(dependencyMap[13]).connectStores(items, () => {
  const obj = {};
  const currentUser = importDefaultResult.getCurrentUser();
  let verified;
  if (null != currentUser) {
    verified = currentUser.verified;
  }
  obj.verified = null != verified && verified;
  return obj;
})(tmp4);
const result = arg1(dependencyMap[14]).fileFinishedImporting("components_native/premium/PremiumUnverifiedWarning.tsx");

export default tmp5;
