// Module ID: 16444
// Function ID: 127027
// Name: ErrorScreen
// Dependencies: []
// Exports: default

// Module 16444 (ErrorScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { 1996650242: false, 453146370: false, 1644305154: false, 609555990: false, 604120066: false, gap: importDefault(dependencyMap[6]).space.PX_8, padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.buttonContainer = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
let closure_9 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/safety_flows/native/ErrorScreen.tsx");

export default function ErrorScreen() {
  function _handleRetry() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _handleRetry = obj;
    return obj(...arguments);
  }
  const tmp = callback2(React.useState(false), 2);
  const callback = tmp[1];
  let obj = callback(_handleRetry[7]);
  let closure_1 = obj.useNavigation();
  const tmp2 = callback5();
  obj = { style: tmp2.container };
  obj = { variant: "heading-lg/semibold" };
  const intl = callback(_handleRetry[11]).intl;
  obj.children = intl.string(callback(_handleRetry[11]).t.c6kn6F);
  const items = [callback3(callback(_handleRetry[10]).Text, obj), , ];
  const obj1 = {};
  const intl2 = callback(_handleRetry[11]).intl;
  obj1.children = intl2.string(callback(_handleRetry[11]).t.ZUEGFn);
  items[1] = callback3(callback(_handleRetry[10]).Text, obj1);
  const obj2 = { style: tmp2.buttonContainer, spacing: 8 };
  const obj3 = {
    onPress() {
      return callback(_handleRetry[14]).logout("safety_flows_error_screen");
    }
  };
  const intl3 = callback(_handleRetry[11]).intl;
  obj3.text = intl3.string(callback(_handleRetry[11]).t.2jxGer);
  obj3.variant = "secondary";
  obj3.size = "md";
  const items1 = [callback3(callback(_handleRetry[13]).Button, obj3), ];
  const obj4 = {
    onPress: function handleRetry() {
      return _handleRetry(...arguments);
    }
  };
  const intl4 = callback(_handleRetry[11]).intl;
  obj4.text = intl4.string(callback(_handleRetry[11]).t.7NqTJn);
  obj4.variant = "primary";
  obj4.size = "md";
  obj4.loading = tmp[0];
  items1[1] = callback3(callback(_handleRetry[13]).Button, obj4);
  obj2.children = items1;
  items[2] = callback4(callback(_handleRetry[12]).Stack, obj2);
  obj.children = items;
  return callback4(View, obj);
};
