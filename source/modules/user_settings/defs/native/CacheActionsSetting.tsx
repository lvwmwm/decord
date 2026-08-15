// Module ID: 14877
// Function ID: 14878
// Name: handleCacheActionPress
// Dependencies: [5, 4495, 21, 4342, 4094, 4330, 1236, 589, 4066, 7175, 6949, 7177, 13987, 14878, 14879, 10669, 2]

// Module 14877 (handleCacheActionPress)
import CircleInformationIcon from "CircleInformationIcon";
import _handleConnectionOpen from "_handleConnectionOpen";
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let c5;
let closure_6;
const require = arg1;
function handleCacheActionPress(key) {
  let obj = importDefault(4094);
  obj = {
    key,
    icon() {
      return callback2(callback(table[5]).CircleInformationIcon, {});
    },
    content: key
  };
  obj.open(obj);
  importDefault(4342).hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.ZVZVwR);
  obj[0] = callback2(require(6949) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  let obj1 = { icon: null, label: null, onPress: null };
  obj1[0] = callback2(require(13987) /* FileUpIcon */.FileUpIcon, {});
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl2.string(require(1236) /* getSystemLocale */.t["/GUaXh"]);
  obj1[2] = callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp2;
            let obj1 = outer1_0(14878);
            c1 = 1;
            dependencyMap = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.writeCaches();
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const intl = callback(1236).intl;
          callback2(intl.string(callback(1236).t.GgUIfl));
          dependencyMap = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp15) {
        dependencyMap = tmp;
        throw tmp15;
      }
    }
  });
  const items = [callback2(require(7177) /* ActionSheetRowIcon */.ActionSheetRow, obj1), ];
  let obj2 = { variant: "danger", icon: null, label: null, onPress: null };
  obj2[1] = callback2(require(14879) /* FileWarningIcon */.FileWarningIcon, { color: "text-feedback-critical" });
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj2[2] = intl3.string(require(1236) /* getSystemLocale */.t.tgwiMO);
  obj2[3] = function onPress() {
    let obj = callback(14878);
    obj.clearCaches();
    const intl = callback(1236).intl;
    const stringResult = intl.string(callback(1236).t["23xR5w"]);
    obj = {
      key: stringResult,
      icon() {
        return callback2(callback(table[5]).CircleInformationIcon, {});
      },
      content: stringResult
    };
    callback2(4094).open(obj);
    const obj2 = callback2(4094);
    callback2(4342).hideActionSheet(closure_7);
  };
  items[1] = callback2(require(7177) /* ActionSheetRowIcon */.ActionSheetRow, obj2);
  obj[1] = items;
  obj[1] = callback3(require(7177) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj);
  return callback2(require(7175) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
createToggle = {
  useTitle: function useCacheActionsTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ZVZVwR);
  },
  parent: null,
  IconComponent: require("FileWarningIcon").FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    let obj = importDefault(4342);
    obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [_handleConnectionOpen];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = require(4066) /* explicitContentFromProto */.DeveloperMode;
    const obj = require(589) /* initialize */;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default createToggle;
