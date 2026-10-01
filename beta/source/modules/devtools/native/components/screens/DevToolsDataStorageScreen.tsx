// Module ID: 15169
// Function ID: 15170
// Name: DevToolsDataStorageScreen
// Dependencies: [32, 19, 17, 505, 502, 21, 4836, 576, 5917, 2074, 4528, 504, 2091, 1486, 6402, 6470, 9673, 10327, 6471, 4800, 4832, 6476, 6618, 6570, 6620, 2]
// Exports: default

// Module 15169 (DevToolsDataStorageScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PersistedStore2 from "PersistedStore" /* 505 */;
import nativeDefault from "native" /* 576 */;
import Link from "Link" /* 1486 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2074 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2091 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRow3 from "TableRow" /* 5917 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
function DevToolsPersistedStoresActionSheet(store) {
  store = store.store;
  const close = store.close;
  const ActionSheet = store(6618).ActionSheet;
  ({ title: store.getName() });
  const BottomSheetTitleHeader = store(6570).BottomSheetTitleHeader;
  const Group = store(6620).ActionSheetRow.Group;
  return <ActionSheet header={null}>{null}</ActionSheet>;
}
const View = react_native.View;
let PersistedStore = PersistedStore2.PersistedStore;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, sectionHeader: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, verticalAlign: "middle", flexDirection: "row", alignItems: "center", flex: 1 };
let closure_9 = createStyles(obj);
let closure_10 = react.memo(() => jsx(TableRow3.TableRow, {
  label: "Disable Database",
  start: true,
  onPress() {
    const obj = DatabaseDaosDefault;
    const databaseResult = obj.database();
    const tmp = importDefault;
    const tmp2 = dependencyMap;
    if (null != databaseResult) {
      databaseResult.disable("via UserSettingsDatabaseControls");
      const tmpResult = tmp(tmp2[10]);
      tmpResult.open({ key: "disable_database", content: "Database has been disabled." });
    }
  }
}));
let closure_11 = react.memo(() => {
  let combined;
  let id;
  const useStateFromStores = get_initialized.useStateFromStores;
  const items = [, ];
  get_initialized;
  items[0] = DatabaseManagerDefault;
  items[1] = AuthenticationStore;
  const stateFromStores = useStateFromStores(items, () => {
    const obj = DatabaseManagerDefault;
    return obj.database(id.getId());
  });
  let str = "No active database.";
  const TableRow = TableRow3.TableRow;
  const tmp3 = jsx;
  if (null != stateFromStores) {
    str = stateFromStores.name;
  }
  let obj = { label: str, start: true, end: true, subLabel: combined };
  combined = undefined;
  if (null != stateFromStores) {
    const _HermesInternal = HermesInternal;
    combined = "Handle: " + stateFromStores.handle;
  }
  return tmp3(TableRow, obj);
});
let closure_12 = react.memo(() => jsx(TableRow3.TableRow, {
  label: "Disable + Remove Database",
  onPress() {
    const obj = DatabaseManagerDefault;
    const result = obj.replaceDisableAllDatabases("via UserSettingsDatabaseControls");
    const obj2 = ToastActionCreatorsDefault;
    obj2.open({ key: "disable_database_and_remove", content: "Database has been removed." });
  }
}));
let closure_13 = react.memo(() => {
  const obj = Link;
  let closure_0 = obj.useNavigation();
  return jsx(TableRow3.TableRow, {
    label: "View Cache Stats",
    end: true,
    onPress() {
      navigation.navigate("cacheStats");
    }
  });
});
let closure_14 = { DATABASE_CONTROLS: 0, [0]: "DATABASE_CONTROLS", DATABASE_CURRENT: 1, [1]: "DATABASE_CURRENT", PERSISTED_STORES: 2, [2]: "PERSISTED_STORES" };
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx");

export default function DevToolsDataStorageScreen() {
  let callback;
  let closure_3;
  let first;
  let persistedStores;
  let tmp = closure_9();
  let closure_0 = tmp;
  const insets = callback(persistedStores[14])({ includeKeyboardHeight: true }).insets;
  const tmp2 = callback(persistedStores[15])();
  const tmp3 = callback(persistedStores[16])();
  const tmp4 = callback(persistedStores[17])();
  callback = react.useCallback((arg0) => {
    let found;
    let items;
    closure_0 = arg0;
    PersistedStore = found(persistedStores[11]).PersistedStore;
    const all = PersistedStore.getAll();
    found = all.filter((getName) => {
      let hasItem = getName instanceof PersistedStore;
      if (hasItem) {
        const name = getName.getName();
        const toLocaleLowerCaseResult = name.toLocaleLowerCase();
        hasItem = toLocaleLowerCaseResult.includes(closure_0.toLocaleLowerCase());
      }
      return hasItem;
    });
    const obj = {
      sections: items.map((item) => {
        if (constants.DATABASE_CONTROLS === item) {
          return 3;
        } else if (constants.DATABASE_CURRENT === item) {
          return 1;
        } else if (constants.PERSISTED_STORES === item) {
          let num3 = 1;
          if (found.length > 0) {
            num3 = found.length;
          }
          return 1 + num3;
        }
      }),
      persistedStores: found
    };
    items = [, , ];
    ({ DATABASE_CONTROLS: arr2[0], DATABASE_CURRENT: arr2[1], PERSISTED_STORES: arr2[2] } = closure_14);
    return obj;
  }, []);
  [first, _slicedToArray] = react.useState(() => callback(""));
  persistedStores = first.persistedStores;
  let items = [persistedStores, callback];
  const sections = first.sections;
  const items1 = [tmp];
  const callback1 = react.useCallback((arg0, arg1) => {
    closure_0 = arg1;
    if (constants.DATABASE_CONTROLS === arg0) {
      if (0 === arg1) {
        return <closure_1_10 />;
      } else if (1 === arg1) {
        return <closure_1_12 />;
      } else if (2 === arg1) {
        return <closure_1_13 />;
      } else {
        return null;
      }
    } else if (constants.DATABASE_CURRENT === arg0) {
      let tmp14 = null;
      if (0 === arg1) {
        tmp14 = <closure_1_11 />;
      }
      return tmp14;
    } else if (constants.PERSISTED_STORES === arg0) {
      if (0 === arg1) {
        const TableRow2 = closure_0(persistedStores[8]).TableRow;
        return <TableRow2 label={null} start />;
      } else {
        if (1 === arg1) {
          if (0 === persistedStores.length) {
            return jsx(closure_0(persistedStores[8]).TableRow, { label: "No results found.", end: true });
          }
        }
        let obj2 = persistedStores[arg1 - 1];
        const TableRow = closure_0(persistedStores[8]).TableRow;
        return <TableRow label={obj2.getName()} end={arg1 === persistedStores.length} onPress={function onPress() {
          let obj = ActionSheetActionCreatorsDefault;
          const obj2 = { default: DevToolsPersistedStoresActionSheet };
          const obj3 = {
            store: persistedStores[closure_0 - 1],
            close() {
              const obj = closure_1_1(closure_1_2[19]);
              return obj.hideActionSheet("DevToolsPersistedStoresActionSheet");
            }
          };
          obj.openLazy(Promise.resolve(obj2), "DevToolsPersistedStoresActionSheet", obj3);
        }} />;
      }
    } else {
      return null;
    }
  }, items);
  const callback2 = react.useCallback((arg0) => {
    let str;
    const obj = { style: closure_0.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: str };
    str = "Database Controls";
    const Text = Text_Text.Text;
    const tmp = jsx;
    if (constants.DATABASE_CONTROLS !== arg0) {
      str = "Database (Current)";
      if (constants.DATABASE_CURRENT !== arg0) {
        if (constants.PERSISTED_STORES === arg0) {
          str = "Persisted Stores";
        }
      }
    }
    return tmp(Text, obj);
  }, items1);
  callback(persistedStores[21]);
  return <View style={tmp.container}><tmp10 sections={sections} renderItem={callback1} renderSectionHeader={callback2} insetEnd={insets.bottom + callback(persistedStores[7]).space.PX_16} itemSize={tmp2} sectionHeaderSize={tmp3} estimatedListSize="windowSize" placeholderConfig={tmp4} wrapChildren /></View>;
};
