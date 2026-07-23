// Module ID: 13518
// Function ID: 104028
// Name: PoolIdInput
// Dependencies: [5, 57, 31, 27, 13519, 1194, 33, 10970, 8173, 8773, 13520, 11069, 13522, 10697, 13524, 12850, 13526, 13528, 13530, 13532, 9411, 13534, 13536, 13538, 13540, 5791, 4130, 689, 4541, 7512, 4543, 4098, 13542, 5187, 5186, 5503, 5165, 4082, 566, 5160, 2]
// Exports: default

// Module 13518 (PoolIdInput)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import showActionSheet from "showActionSheet";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "Background";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
function PoolIdInput(onSubmit) {
  let showActionSheet;
  let tmp8;
  onSubmit = onSubmit.onSubmit;
  const tmp3 = callback(React.useState(""), 2);
  const first = tmp3[0];
  const dependencyMap = tmp4;
  const tmp5 = callback(React.useState(""), 2);
  const first1 = tmp5[0];
  callback = tmp6;
  const tmp2 = _createForOfIteratorHelperLoose();
  [tmp8, showActionSheet] = callback(React.useState(false), 2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [first, first1, onSubmit];
  callback = React.useCallback(first1(tmp), items);
  let obj = { spacing: 4, style: tmp2.inputContainer };
  obj = { size: "md", placeholder: "Enter Pool ID", onChange: tmp3[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", isClearable: true };
  const items1 = [callback2(onSubmit(7512).TextInput, obj), , ];
  obj = { size: "md", secureTextEntry: true, placeholder: "Enter Password", onChange: tmp5[1], autoCapitalize: "none", autoCorrect: false, autoComplete: "off", isClearable: true };
  items1[1] = callback2(onSubmit(7512).TextInput, obj);
  const obj1 = { size: "md", variant: "primary", text: "Get Pool" };
  let tmp12 = 0 === first.length;
  if (!tmp12) {
    tmp12 = 0 === first1.length;
  }
  if (!tmp12) {
    tmp12 = tmp8;
  }
  obj1.disabled = tmp12;
  obj1.loading = tmp8;
  obj1.onPress = callback;
  items1[2] = callback2(onSubmit(4543).Button, obj1);
  obj.children = items1;
  return closure_11(onSubmit(4541).Stack, obj);
}
function UserActionSheet(pool) {
  pool = pool.pool;
  const usersForPool = authStore.getUsersForPool(pool.id);
  const dependencyMap = id.getId();
  const items = [pool.id];
  let _isNativeReflectConstruct = React.useCallback((arg0) => {
    usersForPool(4098).hideActionSheet("generated-test-users");
    const obj = usersForPool(4098);
    pool(13542).loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = {};
  obj = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  obj.header = callback2(pool(5186).BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: usersForPool(689).space.PX_12 } };
  const obj2 = {
    title: "Select User to Login As",
    hasIcons: true,
    children: usersForPool.map((id) => {
      let closure_0 = id;
      const obj = { icon: outer1_10(pool(10970).UserIcon, { size: "md" }) };
      ({ username: obj.label, email: obj.subLabel } = id);
      obj.onPress = function onPress() {
        return outer1_3(id.id);
      };
      obj.disabled = id.id === dependencyMap;
      let tmp3;
      if (id.id === dependencyMap) {
        tmp3 = outer1_10(pool(4082).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj.trailing = tmp3;
      obj.start = 0 === arg1;
      obj.end = arg1 === usersForPool.length - 1;
      return outer1_10(pool(5165).TableRow, obj, id.id);
    })
  };
  obj.children = callback2(pool(5503).TableRowGroup, obj2);
  obj.children = callback2(closure_6, obj);
  return callback2(pool(5187).BottomSheet, obj);
}
function PoolUsers(pool) {
  let end;
  let start;
  pool = pool.pool;
  const id = pool.id;
  ({ start, end } = pool);
  const usersForPool = authStore.getUsersForPool(id);
  const items = [pool];
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[31]);
    obj = { default: outer1_16 };
    obj = { pool };
    obj.openLazy(Promise.resolve(obj), "generated-test-users", obj);
  }, items);
  let obj = { icon: callback2(items[Number(undefined, id) % items.length], { size: "md", color: length[Number(undefined, id) % length.length] }), label: pool.summary, subLabel: "" + usersForPool.length + " users", arrow: true, onPress: callback, start, end };
  return callback2(pool(5165).TableRow, obj);
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let items = [require("UserIcon").UserIcon, require("ShieldIcon").ShieldIcon, require("GiftIcon").GiftIcon, require("AchievementsIcon").AchievementsIcon, require("PiggyBankIcon").PiggyBankIcon, require("TreehouseIcon").TreehouseIcon, require("SpeedometerIcon").SpeedometerIcon, require("CompassIcon").CompassIcon, require("SignPostIcon").SignPostIcon, require("CarIcon").CarIcon, require("TrainIcon").TrainIcon, require("TeacupIcon").TeacupIcon, require("InventoryIcon").InventoryIcon, require("FoodIcon").FoodIcon, require("BurgerIcon").BurgerIcon, require("MagicDoorIcon").MagicDoorIcon, require("PawPrintIcon").PawPrintIcon, require("RecordPlayerIcon").RecordPlayerIcon, require("SettingsIcon").SettingsIcon];
let closure_13 = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-critical", "text-link", "text-brand"];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.inputContainer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx");

export default function DevToolsGeneratedTestUsersScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = stateFromStoresArray(566);
  const items = [closure_8];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let pools = outer1_8.getPools();
    if (null == pools) {
      pools = [];
    }
    return pools;
  });
  obj = { style: tmp.container };
  obj = {};
  const items1 = [tmp.contentContainer, ];
  const obj1 = {};
  const callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), []);
  obj1.paddingBottom = importDefault(689).space.PX_16 + importDefault(5160)({ includeKeyboardHeight: true }).insets.bottom;
  items1[1] = obj1;
  obj.contentContainerStyle = items1;
  const obj2 = { spacing: 16 };
  const items2 = [callback2(PoolIdInput, { onSubmit: callback }), ];
  const obj3 = { title: "Generated Test User Pools", hasIcons: true };
  let tmp9 = 0 === stateFromStoresArray.length;
  if (tmp9) {
    const obj4 = { label: "No pools available." };
    tmp9 = callback2(stateFromStoresArray(5165).TableRow, obj4);
  }
  const items3 = [tmp9, stateFromStoresArray.map((id) => outer1_10(outer1_17, { pool: id, start: 0 === arg1, end: arg1 === stateFromStoresArray.length - 1 }, id.id))];
  obj3.children = items3;
  items2[1] = closure_11(stateFromStoresArray(5503).TableRowGroup, obj3);
  obj2.children = items2;
  obj.children = closure_11(stateFromStoresArray(4541).Stack, obj2);
  obj.children = callback2(closure_7, obj);
  return callback2(closure_6, obj);
};
