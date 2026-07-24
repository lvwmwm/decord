// Module ID: 13599
// Function ID: 104444
// Name: DevToolsPersistedStoresActionSheet
// Dependencies: [57, 31, 27, 567, 1194, 33, 4130, 689, 5165, 1882, 3831, 566, 1898, 1457, 5160, 8871, 8872, 8866, 5772, 4098, 4126, 9280, 5498, 5186, 5500, 2]
// Exports: default

// Module 13599 (DevToolsPersistedStoresActionSheet)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { PersistedStore } from "_superPropGet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
function DevToolsPersistedStoresActionSheet(store) {
  store = store.store;
  const close = store.close;
  let obj = {};
  obj = { title: store.getName() };
  obj.header = jsx(store(5186).BottomSheetTitleHeader, { title: store.getName() });
  obj = { hasIcons: false };
  const obj1 = {
    variant: "danger",
    label: "Clear persisted store",
    subLabel: "App restart required to re-init the cleared store",
    onPress() {
      store.clear();
      close(outer1_2[10]).open({ key: "DevToolsPersistedStoresActionSheet", content: "Store cleared from persisted storage" });
      close();
    }
  };
  obj.children = jsx(store(5500).ActionSheetRow, {
    variant: "danger",
    label: "Clear persisted store",
    subLabel: "App restart required to re-init the cleared store",
    onPress() {
      store.clear();
      close(outer1_2[10]).open({ key: "DevToolsPersistedStoresActionSheet", content: "Store cleared from persisted storage" });
      close();
    }
  });
  obj.children = jsx(store(5500).ActionSheetRow.Group, { hasIcons: false });
  return jsx(store(5498).ActionSheet, { hasIcons: false });
}
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1 };
obj.container = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, verticalAlign: "middle", flexDirection: "row", alignItems: "center", flex: 1 };
obj.sectionHeader = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = importAllResult.memo(() => {
  const obj = {
    label: "Disable Database",
    start: true,
    onPress() {
      const databaseResult = outer1_1(outer1_2[9]).database();
      if (null != databaseResult) {
        databaseResult.disable("via UserSettingsDatabaseControls");
        outer1_1(outer1_2[10]).open({ key: "disable_database", content: "Database has been disabled." });
        const obj3 = outer1_1(outer1_2[10]);
      }
    }
  };
  return jsx(require(5165) /* TableRowInner */.TableRow, {
    label: "Disable Database",
    start: true,
    onPress() {
      const databaseResult = outer1_1(outer1_2[9]).database();
      if (null != databaseResult) {
        databaseResult.disable("via UserSettingsDatabaseControls");
        outer1_1(outer1_2[10]).open({ key: "disable_database", content: "Database has been disabled." });
        const obj3 = outer1_1(outer1_2[10]);
      }
    }
  });
});
let closure_11 = importAllResult.memo(() => {
  let obj = require(566) /* initialize */;
  const items = [importDefault(1898), _isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_1(outer1_2[12]).database(outer1_7.getId()));
  obj = { label: null, start: true, end: true };
  let str = "No active database.";
  if (null != stateFromStores) {
    str = stateFromStores.name;
  }
  obj.label = str;
  let combined;
  if (null != stateFromStores) {
    const _HermesInternal = HermesInternal;
    combined = "Handle: " + stateFromStores.handle;
  }
  obj.subLabel = combined;
  return jsx(require(5165) /* TableRowInner */.TableRow, { label: null, start: true, end: true });
});
let closure_12 = importAllResult.memo(() => jsx(require(5165) /* TableRowInner */.TableRow, {
  label: "Disable + Remove Database",
  onPress() {
    const result = outer1_1(outer1_2[12]).replaceDisableAllDatabases("via UserSettingsDatabaseControls");
    const obj = outer1_1(outer1_2[12]);
    outer1_1(outer1_2[10]).open({ key: "disable_database_and_remove", content: "Database has been removed." });
  }
}));
let closure_13 = importAllResult.memo(() => {
  let obj = _require(1457);
  _require = obj.useNavigation();
  obj = {
    label: "View Cache Stats",
    end: true,
    onPress() {
      navigation.navigate("cacheStats");
    }
  };
  return jsx(_require(5165).TableRow, {
    label: "View Cache Stats",
    end: true,
    onPress() {
      navigation.navigate("cacheStats");
    }
  });
});
let closure_14 = { DATABASE_CONTROLS: 0, [0]: "DATABASE_CONTROLS", DATABASE_CURRENT: 1, [1]: "DATABASE_CURRENT", PERSISTED_STORES: 2, [2]: "PERSISTED_STORES" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx");

export default function DevToolsDataStorageScreen() {
  let tmp = callback2();
  const require = tmp;
  const tmp2 = callback(persistedStores[15])();
  const tmp3 = callback(persistedStores[16])();
  callback = importAllResult.useCallback((arg0) => {
    let closure_0 = arg0;
    const PersistedStore = callback(persistedStores[11]).PersistedStore;
    const all = PersistedStore.getAll();
    const found = all.filter((getName) => {
      let hasItem = getName instanceof outer2_6;
      if (hasItem) {
        const name = getName.getName();
        hasItem = name.toLocaleLowerCase().includes(closure_0.toLocaleLowerCase());
        const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      return hasItem;
    });
    const items = [, , ];
    ({ DATABASE_CONTROLS: arr2[0], DATABASE_CURRENT: arr2[1], PERSISTED_STORES: arr2[2] } = outer1_14);
    return {
      sections: items.map((arg0) => {
        if (outer2_14.DATABASE_CONTROLS === arg0) {
          return 3;
        } else if (outer2_14.DATABASE_CURRENT === arg0) {
          return 1;
        } else if (outer2_14.PERSISTED_STORES === arg0) {
          let num3 = 1;
          if (found.length > 0) {
            num3 = found.length;
          }
          return 1 + num3;
        }
      }),
      persistedStores: found
    };
  }, []);
  const tmp6 = callback(importAllResult.useState(() => callback("")), 2);
  const first = tmp6[0];
  persistedStores = first.persistedStores;
  callback = tmp6[1];
  let items = [persistedStores, callback];
  const items1 = [tmp];
  const callback1 = importAllResult.useCallback((arg0, arg1) => {
    let tmp = arg1;
    if (outer1_14.DATABASE_CONTROLS === arg0) {
      if (0 === arg1) {
        return outer1_8(outer1_10, {});
      } else if (1 === arg1) {
        return outer1_8(outer1_12, {});
      } else if (2 === arg1) {
        return outer1_8(outer1_13, {});
      } else {
        return null;
      }
    } else if (outer1_14.DATABASE_CURRENT === arg0) {
      let tmp14 = null;
      if (0 === arg1) {
        tmp14 = outer1_8(outer1_11, {});
      }
      return tmp14;
    } else if (outer1_14.PERSISTED_STORES === arg0) {
      if (0 === arg1) {
        let obj = {};
        obj = {
          size: "md",
          onChange(arg0) {
                return outer1_3(outer1_1(arg0));
              }
        };
        obj.label = outer1_8(tmp(persistedStores[18]).SearchField, obj);
        obj.start = true;
        return outer1_8(tmp(persistedStores[8]).TableRow, obj);
      } else {
        if (1 === arg1) {
          if (0 === persistedStores.length) {
            return outer1_8(tmp(persistedStores[8]).TableRow, { label: "No results found.", end: true });
          }
        }
        obj = {
          label: persistedStores[arg1 - 1].getName(),
          end: arg1 === persistedStores.length,
          onPress() {
                let obj = callback(persistedStores[19]);
                obj = { default: outer2_15 };
                obj = {
                  store: outer1_2[closure_0 - 1],
                  close() {
                    return callback(persistedStores[19]).hideActionSheet("DevToolsPersistedStoresActionSheet");
                  }
                };
                obj.openLazy(Promise.resolve(obj), "DevToolsPersistedStoresActionSheet", obj);
              }
        };
        return outer1_8(tmp(persistedStores[8]).TableRow, obj);
      }
    } else {
      tmp = null;
      return null;
    }
  }, items);
  callback2 = importAllResult.useCallback((arg0) => {
    const obj = { style: outer1_8.sectionHeader, variant: "text-sm/semibold", color: "text-default" };
    let str = "Database Controls";
    if (outer1_14.DATABASE_CONTROLS !== arg0) {
      str = "Database (Current)";
      if (outer1_14.DATABASE_CURRENT !== arg0) {
        if (outer1_14.PERSISTED_STORES === arg0) {
          str = "Persisted Stores";
        }
      }
    }
    obj.children = str;
    return outer1_8(outer1_8(persistedStores[20]).Text, obj);
  }, items1);
  let obj = { sections: first.sections, renderItem: callback1, renderSectionHeader: callback2 };
  const tmp4 = callback(persistedStores[17])();
  obj.insetEnd = callback(persistedStores[14])({ includeKeyboardHeight: true }).insets.bottom + callback(persistedStores[7]).space.PX_16;
  obj.itemSize = tmp2;
  obj.sectionHeaderSize = tmp3;
  obj.estimatedListSize = "windowSize";
  obj.placeholderConfig = tmp4;
  obj.wrapChildren = true;
  obj = { style: tmp.container, children: jsx(callback(persistedStores[21]), { sections: first.sections, renderItem: callback1, renderSectionHeader: callback2 }) };
  return <View style={tmp.container}>{jsx(callback(persistedStores[21]), { sections: first.sections, renderItem: callback1, renderSectionHeader: callback2 })}</View>;
};
