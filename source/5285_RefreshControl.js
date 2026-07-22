// Module ID: 5285
// Function ID: 45632
// Name: RefreshControl
// Dependencies: []

// Module 5285 (RefreshControl)
let DrawerLayoutAndroid;
let RefreshControl;
let ScrollView;
let Switch;
let TextInput;
let closure_2 = ["GIPHY_ASSET_PATH", "screenListeners"];
let closure_3 = ["start", "body"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[4]);
const FlatList = tmp2.FlatList;
({ ScrollView, Switch, TextInput, DrawerLayoutAndroid, RefreshControl } = tmp2);
const jsx = arg1(dependencyMap[5]).jsx;
let closure_10 = importDefault(dependencyMap[6])(ScrollView, { -9223372036854775808: "<string:1040334421>", 9223372036854775807: "<string:1040334338>" });
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let refreshControl;
  let waitFor;
  ref = importAllResult.useRef(null);
  ({ refreshControl, waitFor } = arg0);
  let obj = { ref };
  const items = [];
  const tmp2 = callback2(arg0, closure_2);
  const tmp3 = jsx;
  const tmp4 = closure_10;
  const tmp5 = closure_5;
  if (null == waitFor) {
    waitFor = [];
  }
  const items1 = [ref];
  obj.waitFor = items.concat(tmp5(ref(dependencyMap[7]).toArray(waitFor)), items1);
  let cloneElementResult;
  if (refreshControl) {
    obj = { ref };
    cloneElementResult = importAllResult.cloneElement(refreshControl, obj);
  }
  obj.refreshControl = cloneElementResult;
  return tmp3(tmp4, Object.assign({}, tmp2, obj));
});
const tmp3 = importDefault(dependencyMap[6])(RefreshControl, { -9223372036854775808: "<string:1040334421>", 9223372036854775807: "<string:1040334338>" });
const tmp5 = importDefault(dependencyMap[6])(Switch, {});
const tmp6 = importDefault(dependencyMap[6])(TextInput);

export const RefreshControl = tmp3;
export const ScrollView = forwardRefResult;
export const Switch = tmp5;
export const TextInput = tmp6;
export const DrawerLayoutAndroid = importDefault(dependencyMap[6])(DrawerLayoutAndroid, { disallowInterruption: true });
export const FlatList = importAllResult.forwardRef((arg0, ref) => {
  let refreshControl;
  ref = importAllResult.useRef(null);
  ({ waitFor: closure_1, refreshControl } = arg0);
  let obj = {};
  obj = {};
  let closure_2 = obj;
  const entries = Object.entries(callback2(arg0, closure_3));
  while (tmp3 !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    let first = tmp6[0];
    let tmp8 = first;
    let tmp9 = tmp6[1];
    let tmp10 = ref;
    let tmp11 = dependencyMap;
    let nativeViewProps = ref(dependencyMap[8]).nativeViewProps;
    if (nativeViewProps.includes(first)) {
      let tmp15 = obj;
      let tmp16 = first;
      let tmp17 = tmp9;
      obj[tmp8] = tmp9;
    } else {
      let tmp12 = obj;
      let tmp13 = first;
      let tmp14 = tmp9;
      obj[tmp8] = tmp9;
    }
    // continue
  }
  obj = { ref };
  const obj1 = {
    renderScrollComponent(CompatView, arg1) {
      const obj = {};
      const items = [];
      const items1 = [ref];
      obj.waitFor = items.concat(closure_5(ref(closure_1[7]).toArray(null != closure_1 ? closure_1 : [])), items1);
      return closure_9(closure_11, Object.assign({}, Object.assign({}, CompatView, obj, obj)));
    }
  };
  let cloneElementResult;
  if (refreshControl) {
    const obj2 = { ref };
    cloneElementResult = importAllResult.cloneElement(refreshControl, obj2);
  }
  obj1.refreshControl = cloneElementResult;
  return <FlatList {...Object.assign(obj, obj, obj1)} />;
});
