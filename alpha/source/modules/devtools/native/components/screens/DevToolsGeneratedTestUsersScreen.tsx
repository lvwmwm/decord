// Module ID: 17731
// Function ID: 17732
// Name: DevToolsGeneratedTestUsersScreen
// Dependencies: [5, 32, 19, 17, 17732, 502, 21, 12261, 11418, 13501, 17733, 13502, 17735, 12064, 17737, 15806, 17739, 17741, 17743, 17745, 10208, 17747, 17749, 17751, 17753, 7685, 5141, 575, 6147, 7208, 5754, 5381, 17755, 5395, 7441, 7186, 7101, 7119, 504, 5730, 2]
// Exports: default

// Module 17731 (DevToolsGeneratedTestUsersScreen)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5730 */;
import components_Button_Button from "components/Button/Button" /* 5754 */;
import Stack_Stack from "Stack/Stack" /* 6147 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7208 */;
import SettingsIcon from "SettingsIcon" /* 7685 */;
import FoodIcon from "FoodIcon" /* 10208 */;
import ShieldIcon from "ShieldIcon" /* 11418 */;
import SpeedometerIcon from "SpeedometerIcon" /* 12064 */;
import UserIcon from "UserIcon" /* 12261 */;
import GiftIcon from "GiftIcon" /* 13501 */;
import PiggyBankIcon from "PiggyBankIcon" /* 13502 */;
import SignPostIcon from "SignPostIcon" /* 15806 */;
import AchievementsIcon from "AchievementsIcon" /* 17733 */;
import TreehouseIcon from "TreehouseIcon" /* 17735 */;
import CompassIcon from "CompassIcon" /* 17737 */;
import CarIcon from "CarIcon" /* 17739 */;
import TrainIcon from "TrainIcon" /* 17741 */;
import TeacupIcon from "TeacupIcon" /* 17743 */;
import InventoryIcon from "InventoryIcon" /* 17745 */;
import BurgerIcon from "BurgerIcon" /* 17747 */;
import MagicDoorIcon from "MagicDoorIcon" /* 17749 */;
import PawPrintIcon from "PawPrintIcon" /* 17751 */;
import RecordPlayerIcon from "RecordPlayerIcon" /* 17753 */;
import GeneratedTestUserActionCreators from "GeneratedTestUserActionCreators" /* 17755 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GeneratedTestUsersStore from "GeneratedTestUsersStore" /* 17732 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let c1, c2, c4, dependencyMap, pools;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function PoolIdInput(onSubmit) {
  let c5;
  let first;
  let first1;
  let items1;
  let tmp3;
  let tmp5;
  let tmp7;
  onSubmit = onSubmit.onSubmit;
  first = undefined;
  first1 = undefined;
  c5 = undefined;
  const tmp = closure_14();
  [first, tmp3] = react.useState("");
  let closure_2 = tmp3;
  [first1, tmp5] = react.useState("");
  let closure_4 = tmp5;
  [tmp7, c5] = _slicedToArray(react.useState(false), 2);
  items = [first, first1, onSubmit];
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            if (0 !== first.length) {
              _undefined(true);
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj4 = { value: onSubmit(tmp21, first1), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_5(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_5(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_2("");
          closure_128_4("");
          c3 = 0;
          closure_128_5(false);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp26) {
        closure_2 = tmp26;
        if (0 === c3) {
          c4 = 3;
          throw tmp26;
        } else {
          c1 = 1;
        }
      }
    }
  }), items);
  let obj = { spacing: 4, style: tmp.inputContainer, children: items1 };
  const Stack = Stack_Stack.Stack;
  items1 = [authStore(TextInput_TextInput.TextInput, { size: "md", placeholder: "Enter Pool ID", onChange: tmp3, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true }), authStore(TextInput_TextInput.TextInput, { size: "md", secureTextEntry: true, placeholder: "Enter Password", onChange: tmp5, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true }), ];
  let tmp11 = 0 === first.length;
  const Button = components_Button_Button.Button;
  const tmp10 = authStore;
  const tmp9 = unpackModuleId;
  if (!tmp11) {
    tmp11 = 0 === first1.length;
  }
  if (!tmp11) {
    tmp11 = tmp7;
  }
  items1[2] = tmp10(Button, { size: "md", variant: "primary", text: "Get Pool", disabled: tmp11, loading: tmp7, onPress: callback });
  return tmp9(Stack, obj);
}
function UserActionSheet(pool) {
  let BottomSheetTitleHeader;
  let TableRowGroup;
  let closure_2;
  let obj2;
  let obj3;
  let obj5;
  pool = pool.pool;
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(pool.id);
  dependencyMap = AuthenticationStore.getId();
  items = [pool.id];
  let closure_3 = react.useCallback((arg0) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("generated-test-users");
    const obj2 = GeneratedTestUserActionCreators;
    obj2.loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = { header: closure_10(BottomSheetTitleHeader, obj2), children: closure_10(closure_6, obj3) };
  const BottomSheet = pool(5395).BottomSheet;
  obj2 = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  BottomSheetTitleHeader = pool(7441).BottomSheetTitleHeader;
  obj3 = { style: { paddingHorizontal: usersForPool(575).space.PX_12 }, children: closure_10(TableRowGroup, obj5) };
  obj5 = {
    title: "Select User to Login As",
    hasIcons: true,
    children: usersForPool.map((id, index) => {
      let tmp2Result;
      const obj = {
        icon: closure_1_10(pool(closure_2[7]).UserIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_3(id.id);
        },
        disabled: id.id === closure_2,
        trailing: tmp2Result,
        start: 0 === index,
        end: index === usersForPool.length - 1
      };
      const TableRow = pool(closure_2[36]).TableRow;
      ({ username: obj.label, email: obj.subLabel } = id);
      tmp2Result = undefined;
      const tmp3 = pool;
      const tmp4 = closure_2;
      if (id.id === closure_2) {
        tmp2Result = tmp2(tmp3(tmp4[37]).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      return closure_1_10(TableRow, obj, id.id);
    })
  };
  ({ paddingHorizontal: usersForPool(575).space.PX_12 });
  TableRowGroup = pool(7186).TableRowGroup;
  return closure_10(BottomSheet, obj);
}
function PoolUsers(pool) {
  let end;
  let start;
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const summary = pool.summary;
  const usersForPool = GeneratedTestUsersStore.getUsersForPool(id);
  const tmp = items[Number(undefined, id) % items.length];
  items = [pool];
  const tmp2 = length[Number(undefined, id) % length.length];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: UserActionSheet };
    const obj3 = { pool };
    obj.openLazy(Promise.resolve(obj2), "generated-test-users", obj3);
  }, items);
  let obj = { icon: closure_10(tmp, { size: "md", color: tmp2 }), label: summary, subLabel: "" + usersForPool.length + " users", arrow: true, onPress: callback, start, end };
  const TableRow = pool(7101).TableRow;
  return closure_10(TableRow, obj);
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let items = [UserIcon.UserIcon, ShieldIcon.ShieldIcon, GiftIcon.GiftIcon, AchievementsIcon.AchievementsIcon, PiggyBankIcon.PiggyBankIcon, TreehouseIcon.TreehouseIcon, SpeedometerIcon.SpeedometerIcon, CompassIcon.CompassIcon, SignPostIcon.SignPostIcon, CarIcon.CarIcon, TrainIcon.TrainIcon, TeacupIcon.TeacupIcon, InventoryIcon.InventoryIcon, FoodIcon.FoodIcon, BurgerIcon.BurgerIcon, MagicDoorIcon.MagicDoorIcon, PawPrintIcon.PawPrintIcon, RecordPlayerIcon.RecordPlayerIcon, SettingsIcon.SettingsIcon];
const length = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-critical", "text-link", "text-brand"];
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, inputContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx");

export default function DevToolsGeneratedTestUsersScreen() {
  let Stack;
  let items1;
  let items3;
  let obj3;
  let obj5;
  let stateFromStoresArray;
  let tmp7;
  let tmp8;
  const tmp = closure_14();
  const tmp2 = stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  items = [GeneratedTestUsersStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    pools = pools.getPools();
    if (pools == null) {
      pools = [];
    }
    return pools;
  });
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    closure_0 = arg0;
    let closure_1 = value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            const obj2 = closure_0(c2[32]);
            c2 = 1;
            const obj5 = { value: obj2.getGeneratedPoolById(closure_0, closure_1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  });
  let obj2 = { style: tmp.container, children: tmp5(tmp7, obj3) };
  obj3 = { contentContainerStyle: items1, children: tmp8(Stack, obj5) };
  items1 = [tmp.contentContainer, ];
  let obj4 = { paddingBottom: nativeDefault.space.PX_16 + insets.bottom };
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  items1[1] = obj4;
  tmp8 = closure_11;
  Stack = stateFromStoresArray(6147).Stack;
  const items2 = [closure_10(PoolIdInput, { onSubmit: callback }), ];
  let tmp5Result = 0 === stateFromStoresArray.length;
  const TableRowGroup = stateFromStoresArray(7186).TableRowGroup;
  const tmp6 = closure_6;
  tmp7 = closure_7;
  if (tmp5Result) {
    tmp5Result = tmp5(tmp2(7101).TableRow, { label: "No pools available." });
  }
  obj5 = { spacing: 16, children: items2 };
  const obj6 = { title: "Generated Test User Pools", hasIcons: true, children: items3 };
  items3 = [
    tmp5Result,
    stateFromStoresArray.map((pool, index) => {
      const obj = { pool, start: 0 === index, end: index === stateFromStoresArray.length - 1 };
      return authStore(PoolUsers, obj, pool.id);
    })
  ];
  items2[1] = tmp8(TableRowGroup, obj6);
  return closure_10(tmp6, obj2);
};
