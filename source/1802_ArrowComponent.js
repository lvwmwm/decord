// Module ID: 1802
// Function ID: 19916
// Name: ArrowComponent
// Dependencies: []
// Exports: default

// Module 1802 (ArrowComponent)
let StyleSheet;
importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[0]).useMemo;
({ Animated: closure_3, StyleSheet, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = { "Bool(false)": 2030829571, "Bool(false)": 2030829571, "Bool(false)": 2030829571 };
obj = { "Bool(true)": -226820093, "Bool(true)": -226820094, "Bool(true)": -226820094, "Bool(true)": -226820094, "Bool(true)": -226820094 };
obj = { arrowUpContainer: obj, arrowDownContainer: Object.assign({}, obj, { transform: items }), arrow: {}, arrowLeftLine: Object.assign({}, obj, { transform: items1, left: -0.5 }), arrowRightLine: Object.assign({}, obj, { transform: items2, left: -5.5 }) };
const items = [{ rotate: "180deg" }];
const items1 = [{ rotate: "-45deg" }];
const items2 = [{ rotate: "45deg" }];
const styles = StyleSheet.create(obj);

export default function ArrowComponent(disabled) {
  disabled = disabled.disabled;
  const arg1 = disabled;
  const theme = disabled.theme;
  const dependencyMap = theme;
  let obj = arg1(dependencyMap[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const useMemo = keyboardState;
  const items = [disabled, theme, keyboardState];
  const tmp2 = useMemo(() => ({ backgroundColor: disabled ? theme[closure_2].disabled : theme[closure_2].primary }), items);
  const items1 = [tmp2];
  const items2 = [tmp2];
  obj = {};
  const tmp3 = useMemo(() => {
    const items = [closure_7.arrowLeftLine, tmp2];
    return items;
  }, items1);
  if ("next" === disabled.type) {
    let arrowUpContainer = closure_7.arrowDownContainer;
  } else {
    arrowUpContainer = closure_7.arrowUpContainer;
  }
  obj.style = arrowUpContainer;
  obj = { style: closure_7.arrow };
  const items3 = [
    callback(tmp2.View, { style: tmp3 }),
    callback(tmp2.View, {
      style: useMemo(() => {
        const items = [closure_7.arrowRightLine, tmp2];
        return items;
      }, items2)
    })
  ];
  obj.children = items3;
  obj.children = callback2(closure_4, obj);
  return callback(closure_4, obj);
};
