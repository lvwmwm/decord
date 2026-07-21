// Module ID: 5426
// Function ID: 46500
// Name: context
// Dependencies: []

// Module 5426 (context)
const importAllResult = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
const context = importAllResult.createContext({ isForm: false });
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((keyboardShouldPersistTaps, ref) => {
  let children;
  let contentContainerStyle;
  let onLayout;
  let onScroll;
  let scrollsToTop;
  let style;
  let str = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  ({ style, children } = keyboardShouldPersistTaps);
  if (str === undefined) {
    str = "never";
  }
  let flag = keyboardShouldPersistTaps.alwaysBounceVertical;
  if (flag === undefined) {
    flag = true;
  }
  ({ contentContainerStyle, onScroll, scrollsToTop, onLayout } = keyboardShouldPersistTaps);
  const tmp = callback();
  let redesign = importAllResult.useContext(ref(dependencyMap[5]).RedesignCompatContext);
  let obj = { value: { isForm: true } };
  obj = { ref, onLayout, scrollsToTop };
  const items = [tmp.form, style, ];
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  obj.style = items;
  obj = { paddingBottom: 38 + importDefault(dependencyMap[4])().insets.bottom };
  const items1 = [obj, contentContainerStyle];
  obj.contentContainerStyle = items1;
  obj.contentInset = { top: 0 };
  obj.automaticallyAdjustContentInsets = false;
  obj.keyboardShouldPersistTaps = str;
  obj.alwaysBounceVertical = flag;
  obj.onScroll = onScroll;
  obj.children = children;
  obj.children = <ScrollView {...obj} />;
  return <context.Provider {...obj} />;
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/Form/native/Form.tsx");

export default forwardRefResult;
export const FormContext = context;
