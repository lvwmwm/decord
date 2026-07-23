// Module ID: 14399
// Function ID: 110094
// Name: handleCacheActionPress
// Dependencies: [5, 4808, 33, 4098, 3831, 4086, 1212, 566, 3803, 5500, 5186, 5502, 13544, 14400, 14401, 10095, 2]

// Module 14399 (handleCacheActionPress)
import CircleInformationIcon from "CircleInformationIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let closure_5;
let closure_6;
const require = arg1;
function handleCacheActionPress(key) {
  let obj = importDefault(3831);
  obj = {
    key,
    icon() {
      return outer1_5(outer1_0(outer1_2[5]).CircleInformationIcon, {});
    },
    content: key
  };
  obj.open(obj);
  importDefault(4098).hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  let obj = {};
  obj = {};
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.ZVZVwR);
  obj.header = callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true };
  const obj1 = { icon: callback2(require(13544) /* FileUpIcon */.FileUpIcon, {}) };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl2.string(require(1212) /* getSystemLocale */.t["/GUaXh"]);
  obj1.label = stringResult;
  // CreateGeneratorClosureLongIndex (0x67)
  obj1.onPress = callback(stringResult);
  const items = [callback2(require(5502) /* ActionSheetRowIcon */.ActionSheetRow, obj1), ];
  const obj2 = { variant: "danger", icon: callback2(require(14401) /* FileWarningIcon */.FileWarningIcon, { color: "text-feedback-critical" }) };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl3.string(require(1212) /* getSystemLocale */.t.tgwiMO);
  obj2.onPress = function onPress() {
    outer1_0(outer1_2[13]).clearCaches();
    const intl = outer1_0(outer1_2[6]).intl;
    outer1_8(intl.string(outer1_0(outer1_2[6]).t["23xR5w"]));
  };
  items[1] = callback2(require(5502) /* ActionSheetRowIcon */.ActionSheetRow, obj2);
  obj.children = items;
  obj.children = callback3(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj);
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
createToggle = {
  useTitle: function useCacheActionsTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ZVZVwR);
  },
  parent: null,
  IconComponent: require("FileWarningIcon").FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    let obj = importDefault(4098);
    obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [_isNativeReflectConstruct];
    const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.isConnected());
    const DeveloperMode = require(3803) /* explicitContentFromProto */.DeveloperMode;
    const obj = require(566) /* initialize */;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default createToggle;
