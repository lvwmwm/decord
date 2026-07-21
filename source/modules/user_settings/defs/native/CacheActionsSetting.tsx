// Module ID: 14274
// Function ID: 107866
// Name: handleCacheActionPress
// Dependencies: []

// Module 14274 (handleCacheActionPress)
function handleCacheActionPress(key) {
  let obj = importDefault(dependencyMap[4]);
  obj = {
    key,
    icon() {
      return callback2(callback(closure_2[5]).CircleInformationIcon, {});
    },
    content: key
  };
  obj.open(obj);
  importDefault(dependencyMap[3]).hideActionSheet(closure_7);
}
function CacheActionsActionSheet() {
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.ZVZVwR);
  obj.header = callback2(arg1(dependencyMap[10]).BottomSheetTitleHeader, obj);
  obj = { hasIcons: true };
  const obj1 = { icon: callback2(arg1(dependencyMap[12]).FileUpIcon, {}) };
  const intl2 = arg1(dependencyMap[6]).intl;
  const stringResult = intl2.string(arg1(dependencyMap[6]).t./GUaXh);
  obj1.label = stringResult;
  // CreateGeneratorClosureLongIndex (0x67)
  obj1.onPress = callback(stringResult);
  const items = [callback2(arg1(dependencyMap[11]).ActionSheetRow, obj1), ];
  const obj2 = { variant: "danger", icon: callback2(arg1(dependencyMap[14]).FileWarningIcon, { color: "text-feedback-critical" }) };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.label = intl3.string(arg1(dependencyMap[6]).t.tgwiMO);
  obj2.onPress = function onPress() {
    callback(closure_2[13]).clearCaches();
    const intl = callback(closure_2[6]).intl;
    callback2(intl.string(callback(closure_2[6]).t.23xR5w));
  };
  items[1] = callback2(arg1(dependencyMap[11]).ActionSheetRow, obj2);
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[11]).ActionSheetRow.Group, obj);
  return callback2(arg1(dependencyMap[9]).ActionSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = "CacheActionsActionSheet";
let obj = arg1(dependencyMap[15]);
obj = {
  useTitle: function useCacheActionsTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.ZVZVwR);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[14]).FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    let obj = importDefault(dependencyMap[3]);
    obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), closure_7);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [closure_4];
    const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = arg1(dependencyMap[8]).DeveloperMode;
    const obj = arg1(dependencyMap[7]);
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
};
const pressable = obj.createPressable(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default pressable;
