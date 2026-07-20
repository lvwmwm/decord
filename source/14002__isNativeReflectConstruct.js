// Module ID: 14002
// Function ID: 106520
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14002 (_isNativeReflectConstruct)
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
const importAllResult = importAll(dependencyMap[5]);
const tmp4 = (PureComponent) => {
  class PremiumRestorationAlert {
    constructor() {
      self = this;
      tmp = closure_2(this, PremiumRestorationAlert);
      obj = closure_5(PremiumRestorationAlert);
      tmp2 = closure_4;
      if (closure_9()) {
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
  const importDefault = PremiumRestorationAlert;
  callback2(PremiumRestorationAlert, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let isBusy;
        let onClose;
        ({ isBusy, onClose } = this.props);
        return callback3(PremiumRestorationAlert(closure_1[8]), { loading, onClose });
      }
    }
  ];
  return callback(PremiumRestorationAlert, items);
}(importAll(dependencyMap[5]).PureComponent);
const items = [importDefaultResult];
const importDefaultResult1 = importDefault(dependencyMap[9]);
const tmp5 = importDefault(dependencyMap[9]).connectStores(items, () => ({ isBusy: importDefaultResult.isBusy() }))(tmp4);
const result = arg1(dependencyMap[10]).fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp5;
