// Module ID: 14018
// Function ID: 106605
// Name: pressable
// Dependencies: []

// Module 14018 (pressable)
let closure_3 = importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.s9h22P);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[10]).NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let obj = importDefault(dependencyMap[2]);
    const result = obj.restoreAndApplyPurchases(true);
    result.then((arg0) => {
      if (arg0.length > 0) {
        let obj = callback2(closure_2[3]);
        obj = {};
        const intl = callback(closure_2[4]).intl;
        obj.body = intl.string(callback(closure_2[4]).t.pnRpIb);
        obj.show(obj);
      } else {
        obj = {};
        const intl2 = callback(closure_2[4]).intl;
        obj.title = intl2.string(callback(closure_2[4]).t.WXkaoM);
        const intl3 = callback(closure_2[4]).intl;
        obj.body = intl3.string(callback(closure_2[4]).t.YW7lqS);
        callback2(closure_2[3]).show(obj);
        const obj3 = callback2(closure_2[3]);
      }
    }, () => {
      let obj = callback2(closure_2[3]);
      obj = {};
      const intl = callback(closure_2[4]).intl;
      obj.title = intl.string(callback(closure_2[4]).t.POsVOt);
      const intl2 = callback(closure_2[4]).intl;
      obj.body = intl2.string(callback(closure_2[4]).t.XbE/Ez);
      obj.show(obj);
    });
    obj = {
      importer() {
        return callback(paths[6])(paths[5], paths.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return callback(closure_0, {});
          };
        });
      }
    };
    importDefault(dependencyMap[3]).openLazy(obj);
  },
  withArrow: true,
  usePredicate: function useHasPremiumRestoreSubscriptionSetting() {
    const items = [closure_3];
    const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
    let tmp2 = null != stateFromStores && stateFromStores.verified;
    if (tmp2) {
      tmp2 = !arg1(dependencyMap[8]).isAndroid();
      const obj2 = arg1(dependencyMap[8]);
    }
    return tmp2;
  }
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default pressable;
