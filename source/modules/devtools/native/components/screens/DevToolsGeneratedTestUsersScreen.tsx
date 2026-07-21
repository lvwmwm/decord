// Module ID: 13395
// Function ID: 101817
// Name: PoolIdInput
// Dependencies: []
// Exports: default

// Module 13395 (PoolIdInput)
function PoolIdInput(onSubmit) {
  let tmp8;
  onSubmit = onSubmit.onSubmit;
  const arg1 = onSubmit;
  const tmp3 = callback2(React.useState(""), 2);
  const first = tmp3[0];
  const importDefault = first;
  const dependencyMap = tmp4;
  const tmp5 = callback2(React.useState(""), 2);
  const first1 = tmp5[0];
  let callback = first1;
  const callback2 = tmp6;
  const tmp2 = callback4();
  [tmp8, closure_5] = callback2(React.useState(false), 2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [first, first1, onSubmit];
  callback = React.useCallback(callback(tmp), items);
  let obj = { spacing: 4, style: tmp2.inputContainer };
  const items1 = [callback3(arg1(dependencyMap[29]).TextInput, { onChange: tmp3[1] }), callback3(arg1(dependencyMap[29]).TextInput, { onChange: tmp5[1] }), ];
  obj = {};
  let tmp12 = 0 === first.length;
  if (!tmp12) {
    tmp12 = 0 === first1.length;
  }
  if (!tmp12) {
    tmp12 = tmp8;
  }
  obj.disabled = tmp12;
  obj.loading = tmp8;
  obj.onPress = callback;
  items1[2] = callback3(arg1(dependencyMap[30]).Button, obj);
  obj.children = items1;
  return closure_11(arg1(dependencyMap[28]).Stack, obj);
}
function UserActionSheet(pool) {
  pool = pool.pool;
  const arg1 = pool;
  const usersForPool = authStore.getUsersForPool(pool.id);
  const importDefault = usersForPool;
  const id2 = id.getId();
  const items = [pool.id];
  let closure_3 = React.useCallback((arg0) => {
    usersForPool(closure_2[31]).hideActionSheet("generated-test-users");
    const obj = usersForPool(closure_2[31]);
    pool(closure_2[32]).loginAsGeneratedUser(pool.id, arg0);
  }, items);
  let obj = {};
  obj = { title: pool.summary, subtitle: "" + usersForPool.length + " users" };
  obj.header = callback3(arg1(id2[34]).BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: importDefault(id2[27]).space.PX_12 } };
  const obj2 = {
    children: usersForPool.map((id) => {
      const pool = id;
      const obj = { icon: callback(pool(closure_2[7]).UserIcon, { size: "md" }) };
      ({ username: obj.label, email: obj.subLabel } = id);
      obj.onPress = function onPress() {
        return callback(arg0.id);
      };
      obj.disabled = id.id === closure_2;
      let tmp3;
      if (id.id === closure_2) {
        tmp3 = callback(pool(closure_2[37]).CheckmarkLargeIcon, { flex: false, flexGrow: false });
      }
      obj.trailing = tmp3;
      obj.start = 0 === arg1;
      obj.end = arg1 === usersForPool.length - 1;
      return callback(pool(closure_2[36]).TableRow, obj, id.id);
    })
  };
  obj.children = callback3(arg1(id2[35]).TableRowGroup, obj2);
  obj.children = callback3(closure_6, obj);
  return callback3(arg1(id2[33]).BottomSheet, obj);
}
function PoolUsers(pool) {
  let end;
  let start;
  pool = pool.pool;
  const arg1 = pool;
  const id = pool.id;
  ({ start, end } = pool);
  const usersForPool = authStore.getUsersForPool(id);
  const items = [pool];
  const callback = React.useCallback(() => {
    let obj = callback(closure_2[31]);
    obj = { default: closure_16 };
    obj = { pool };
    obj.openLazy(Promise.resolve(obj), "generated-test-users", obj);
  }, items);
  const obj = { icon: callback3(items[Number(undefined, id) % closure_12.length], { size: "md", color: closure_13[Number(undefined, id) % closure_13.length] }), label: pool.summary, subLabel: "" + usersForPool.length + " users", arrow: true, onPress: callback, start, end };
  return callback3(arg1(dependencyMap[36]).TableRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
const items = [arg1(dependencyMap[7]).UserIcon, arg1(dependencyMap[8]).ShieldIcon, arg1(dependencyMap[9]).GiftIcon, arg1(dependencyMap[10]).AchievementsIcon, arg1(dependencyMap[11]).PiggyBankIcon, arg1(dependencyMap[12]).TreehouseIcon, arg1(dependencyMap[13]).SpeedometerIcon, arg1(dependencyMap[14]).CompassIcon, arg1(dependencyMap[15]).SignPostIcon, arg1(dependencyMap[16]).CarIcon, arg1(dependencyMap[17]).TrainIcon, arg1(dependencyMap[18]).TeacupIcon, arg1(dependencyMap[19]).InventoryIcon, arg1(dependencyMap[20]).FoodIcon, arg1(dependencyMap[21]).BurgerIcon, arg1(dependencyMap[22]).MagicDoorIcon, arg1(dependencyMap[23]).PawPrintIcon, arg1(dependencyMap[24]).RecordPlayerIcon, arg1(dependencyMap[25]).SettingsIcon];
let closure_13 = [null, null, null, null, null, null];
let obj = arg1(dependencyMap[26]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[27]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.contentContainer = { padding: importDefault(dependencyMap[27]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[27]).space.PX_16 };
obj.inputContainer = { marginBottom: importDefault(dependencyMap[27]).space.PX_16 };
let closure_14 = obj.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[27]).space.PX_16 };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx");

export default function DevToolsGeneratedTestUsersScreen() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[38]);
  const items = [closure_8];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let pools = pools.getPools();
    if (null == pools) {
      pools = [];
    }
    return pools;
  });
  const arg1 = stateFromStoresArray;
  obj = { style: tmp.container };
  obj = {};
  const items1 = [tmp.contentContainer, ];
  const obj1 = {};
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), []);
  obj1.paddingBottom = importDefault(dependencyMap[27]).space.PX_16 + importDefault(dependencyMap[39])({ includeKeyboardHeight: true }).insets.bottom;
  items1[1] = obj1;
  obj.contentContainerStyle = items1;
  const obj2 = { spacing: 16 };
  const items2 = [callback3(PoolIdInput, { onSubmit: callback }), ];
  const obj3 = { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018037728157988023, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007368407941536284 };
  let tmp9 = 0 === stateFromStoresArray.length;
  if (tmp9) {
    const obj4 = { label: "No pools available." };
    tmp9 = callback3(arg1(dependencyMap[36]).TableRow, obj4);
  }
  const items3 = [tmp9, stateFromStoresArray.map((id) => callback2(closure_17, { pool: id, start: 0 === arg1, end: arg1 === stateFromStoresArray.length - 1 }, id.id))];
  obj3.children = items3;
  items2[1] = closure_11(arg1(dependencyMap[35]).TableRowGroup, obj3);
  obj2.children = items2;
  obj.children = closure_11(arg1(dependencyMap[28]).Stack, obj2);
  obj.children = callback3(closure_7, obj);
  return callback3(closure_6, obj);
};
