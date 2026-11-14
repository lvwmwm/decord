// Module ID: 18219
// Function ID: 18220
// Name: DevToolsGeneratedTestUsersScreen
// Dependencies: [5, 32, 19, 17, 18220, 502, 21, 10553, 11224, 11817, 18221, 14230, 18223, 12988, 18225, 16275, 18227, 18229, 18231, 18233, 11322, 18235, 18237, 18239, 18241, 10569, 5306, 575, 6337, 7619, 5936, 5552, 18243, 5566, 7913, 7746, 7443, 7738, 504, 5913, 2]
// Exports: default

// Module 18219 (DevToolsGeneratedTestUsersScreen)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5913 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7619 */;
import UserIcon from "UserIcon" /* 10553 */;
import SettingsIcon from "SettingsIcon" /* 10569 */;
import ShieldIcon from "ShieldIcon" /* 11224 */;
import FoodIcon from "FoodIcon" /* 11322 */;
import GiftIcon from "GiftIcon" /* 11817 */;
import SpeedometerIcon from "SpeedometerIcon" /* 12988 */;
import PiggyBankIcon from "PiggyBankIcon" /* 14230 */;
import SignPostIcon from "SignPostIcon" /* 16275 */;
import AchievementsIcon from "AchievementsIcon" /* 18221 */;
import TreehouseIcon from "TreehouseIcon" /* 18223 */;
import CompassIcon from "CompassIcon" /* 18225 */;
import CarIcon from "CarIcon" /* 18227 */;
import TrainIcon from "TrainIcon" /* 18229 */;
import TeacupIcon from "TeacupIcon" /* 18231 */;
import InventoryIcon from "InventoryIcon" /* 18233 */;
import BurgerIcon from "BurgerIcon" /* 18235 */;
import MagicDoorIcon from "MagicDoorIcon" /* 18237 */;
import PawPrintIcon from "PawPrintIcon" /* 18239 */;
import RecordPlayerIcon from "RecordPlayerIcon" /* 18241 */;
import GeneratedTestUserActionCreators from "GeneratedTestUserActionCreators" /* 18243 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GeneratedTestUsersStore from "GeneratedTestUsersStore" /* 18220 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
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
  items1 = [authStore(TextInput_TextInput.TextInput, { size: "md", placeholder: "Enter Pool ID", onChange: tmp3, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true }), authStore(TextInput_TextInput.TextInput, { size: "md", secureTextEntry: true, revealable: true, placeholder: "Enter Password", onChange: tmp5, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", textContentType: "none" }), ];
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
  const BottomSheet = pool(5566).BottomSheet;
  obj2 = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  BottomSheetTitleHeader = pool(7913).BottomSheetTitleHeader;
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
  TableRowGroup = pool(7746).TableRowGroup;
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
  const TableRow = pool(7443).TableRow;
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
  obj3 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: items1, children: tmp8(Stack, obj5) };
  items1 = [tmp.contentContainer, ];
  let obj4 = { paddingBottom: nativeDefault.space.PX_16 + insets.bottom };
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  items1[1] = obj4;
  tmp8 = closure_11;
  Stack = stateFromStoresArray(6337).Stack;
  const items2 = [closure_10(PoolIdInput, { onSubmit: callback }), ];
  let tmp5Result = 0 === stateFromStoresArray.length;
  const TableRowGroup = stateFromStoresArray(7746).TableRowGroup;
  const tmp6 = closure_6;
  tmp7 = closure_7;
  if (tmp5Result) {
    tmp5Result = tmp5(tmp2(7443).TableRow, { label: "No pools available." });
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
