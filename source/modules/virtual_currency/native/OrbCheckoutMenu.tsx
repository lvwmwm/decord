// Module ID: 14555
// Function ID: 109658
// Name: OrbCheckoutMenu
// Dependencies: []
// Exports: default

// Module 14555 (OrbCheckoutMenu)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("1409898407849365565"), 2);
  const first = tmp2[0];
  const arg1 = first;
  let closure_1 = tmp2[1];
  const items = [first];
  const callback = React.useCallback(() => {
    if (null != first) {
      let obj = callback(paths[4]);
      obj = {
        skuId: first,
        analyticsLocations: [],
        onCheckoutSuccess() {
            callback(closure_2[7]).open({ stateMachine: true, fit: true });
          }
      };
      obj.pushLazy(first(paths[6])(paths[5], paths.paths), obj);
    }
  }, items);
  let obj = {};
  obj = { UNKNOWN_EMOJI: 1, paddingVertical: "[Android] Bypass Google SKU sync in collectibles shop", getChangeTitle: "bypass_google_sku_sync", style: tmp.title };
  const items1 = [callback2(arg1(dependencyMap[9]).Text, obj), , , ];
  obj = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value: first,
    onChange(arg0) {
      return callback(arg0);
    },
    isClearable: true
  };
  items1[1] = callback2(arg1(dependencyMap[10]).TextInput, obj);
  const obj1 = { UNKNOWN_EMOJI: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000305865856, paddingVertical: -11572258990496976000000000000000000000000, getChangeTitle: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002881824211717445, style: tmp.title };
  items1[2] = callback2(arg1(dependencyMap[9]).Text, obj1);
  const obj2 = { "Bool(true)": null, "Bool(true)": "Row Button", onPress: callback, disabled: null == first };
  items1[3] = callback2(arg1(dependencyMap[11]).Button, obj2);
  obj.children = items1;
  return callback3(arg1(dependencyMap[8]).Card, obj);
};
