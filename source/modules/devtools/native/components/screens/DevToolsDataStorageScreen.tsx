// Module ID: 13423
// Function ID: 101906
// Name: DevToolsPersistedStoresActionSheet
// Dependencies: []
// Exports: default

// Module 13423 (DevToolsPersistedStoresActionSheet)
function DevToolsPersistedStoresActionSheet(store) {
  store = store.store;
  const arg1 = store;
  const importDefault = store.close;
  let obj = {};
  obj = { title: store.getName() };
  obj.header = jsx(arg1(dependencyMap[23]).BottomSheetTitleHeader, obj);
  obj = { hasIcons: false };
  const obj1 = {
    1770455044: "Array",
    910295044: "sessionStartsWithDND",
    -855636809: "%Float16Array%",
    onPress() {
      store.clear();
      close(closure_2[10]).open({});
      close();
    }
  };
  obj.children = jsx(arg1(dependencyMap[24]).ActionSheetRow, obj1);
  obj.children = jsx(arg1(dependencyMap[24]).ActionSheetRow.Group, obj);
  return jsx(arg1(dependencyMap[22]).ActionSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const PersistedStore = arg1(dependencyMap[3]).PersistedStore;
let closure_7 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12, flex: 1 };
obj.container = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.sectionHeader = obj1;
let closure_9 = obj1.createStyles(obj);
let closure_10 = importAllResult.memo(() => jsx(arg1(dependencyMap[8]).TableRow, {
  onPress() {
    const databaseResult = callback(closure_2[9]).database();
    if (null != databaseResult) {
      databaseResult.disable("via UserSettingsDatabaseControls");
      callback(closure_2[10]).open({});
      const obj3 = callback(closure_2[10]);
    }
  }
}));
let closure_11 = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[11]);
  const items = [importDefault(dependencyMap[12]), closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => callback(closure_2[12]).database(id.getId()));
  obj = { 0: null, 0: null, 0: null };
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
  return jsx(arg1(dependencyMap[8]).TableRow, obj);
});
let closure_12 = importAllResult.memo(() => jsx(arg1(dependencyMap[8]).TableRow, {
  label: "Disable + Remove Database",
  onPress() {
    const result = callback(closure_2[12]).replaceDisableAllDatabases("via UserSettingsDatabaseControls");
    const obj = callback(closure_2[12]);
    callback(closure_2[10]).open({});
  }
}));
let closure_13 = importAllResult.memo(() => {
  let obj = callback(dependencyMap[13]);
  const callback = obj.useNavigation();
  obj = {
    0: null,
    9223372036854775807: null,
    onPress() {
      navigation.navigate("cacheStats");
    }
  };
  return jsx(callback(dependencyMap[8]).TableRow, obj);
});
let closure_14 = { DATABASE_CONTROLS: 0, [0]: "DATABASE_CONTROLS", DATABASE_CURRENT: 1, [1]: "DATABASE_CURRENT", PERSISTED_STORES: 2, [2]: "PERSISTED_STORES" };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx");

export default function DevToolsDataStorageScreen() {
  const tmp = callback3();
  const arg1 = tmp;
  const tmp2 = importDefault(dependencyMap[15])();
  const tmp3 = importDefault(dependencyMap[16])();
  const callback = importAllResult.useCallback((arg0) => {
    const PersistedStore = callback(persistedStores[11]).PersistedStore;
    const all = PersistedStore.getAll();
    const found = all.filter((getName) => {
      let hasItem = getName instanceof closure_6;
      if (hasItem) {
        const name = getName.getName();
        hasItem = name.toLocaleLowerCase().includes(getName.toLocaleLowerCase());
        const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      return hasItem;
    });
    const callback = found;
    const items = [, , ];
    ({ DATABASE_CONTROLS: arr2[0], DATABASE_CURRENT: arr2[1], PERSISTED_STORES: arr2[2] } = closure_14);
    return {
      sections: items.map((arg0) => {
        if (constants.DATABASE_CONTROLS === arg0) {
          return 3;
        } else if (constants.DATABASE_CURRENT === arg0) {
          return 1;
        } else if (constants.PERSISTED_STORES === arg0) {
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
  const importDefault = callback;
  const tmp6 = callback2(importAllResult.useState(() => callback("")), 2);
  const first = tmp6[0];
  const persistedStores = first.persistedStores;
  const dependencyMap = persistedStores;
  let callback2 = tmp6[1];
  const items = [persistedStores, callback];
  const items1 = [tmp];
  const callback1 = importAllResult.useCallback((arg0, arg1) => {
    let tmp = arg1;
    if (constants.DATABASE_CONTROLS === arg0) {
      if (0 === arg1) {
        return callback(closure_10, {});
      } else if (1 === arg1) {
        return callback(closure_12, {});
      } else if (2 === arg1) {
        return callback(closure_13, {});
      } else {
        return null;
      }
    } else if (constants.DATABASE_CURRENT === arg0) {
      let tmp14 = null;
      if (0 === arg1) {
        tmp14 = callback(closure_11, {});
      }
      return tmp14;
    } else if (constants.PERSISTED_STORES === arg0) {
      if (0 === arg1) {
        let obj = {};
        obj = {
          size: "md",
          onChange(arg0) {
                return callback2(callback(arg0));
              }
        };
        obj.label = callback(tmp(persistedStores[18]).SearchField, obj);
        obj.start = true;
        return callback(tmp(persistedStores[8]).TableRow, obj);
      } else {
        if (1 === arg1) {
          if (0 === persistedStores.length) {
            return callback(tmp(persistedStores[8]).TableRow, {});
          }
        }
        obj = {
          label: persistedStores[arg1 - 1].getName(),
          end: arg1 === persistedStores.length,
          onPress() {
                let obj = callback(closure_2[19]);
                obj = { default: closure_15 };
                obj = {
                  store: closure_2[closure_0 - 1],
                  close() {
                    return callback(closure_2[19]).hideActionSheet("DevToolsPersistedStoresActionSheet");
                  }
                };
                obj.openLazy(Promise.resolve(obj), "DevToolsPersistedStoresActionSheet", obj);
              }
        };
        return callback(tmp(persistedStores[8]).TableRow, obj);
      }
    } else {
      tmp = null;
      return null;
    }
  }, items);
  callback2 = importAllResult.useCallback((arg0) => {
    const obj = { style: closure_8.sectionHeader };
    let str = "Database Controls";
    if (constants.DATABASE_CONTROLS !== arg0) {
      str = "Database (Current)";
      if (constants.DATABASE_CURRENT !== arg0) {
        if (constants.PERSISTED_STORES === arg0) {
          str = "Persisted Stores";
        }
      }
    }
    obj.children = str;
    return closure_8(closure_8(persistedStores[20]).Text, obj);
  }, items1);
  let obj = { sections: first.sections, renderItem: callback1, renderSectionHeader: callback2 };
  const tmp4 = importDefault(dependencyMap[17])();
  obj.insetEnd = importDefault(dependencyMap[14])({ includeKeyboardHeight: true }).insets.bottom + importDefault(dependencyMap[7]).space.PX_16;
  obj.itemSize = tmp2;
  obj.sectionHeaderSize = tmp3;
  obj.estimatedListSize = "windowSize";
  obj.placeholderConfig = tmp4;
  obj.wrapChildren = true;
  obj = { style: tmp.container, children: jsx(importDefault(dependencyMap[21]), obj) };
  return <View {...obj} />;
};
