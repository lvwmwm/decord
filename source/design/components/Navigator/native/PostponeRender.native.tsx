// Module ID: 5581
// Function ID: 47365
// Name: PostponeRender
// Dependencies: []
// Exports: PostponeRender

// Module 5581 (PostponeRender)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER;
obj.view = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  let ignoreKeyboard;
  let postpone;
  let viewStyle;
  children = children.children;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp2 = callback(React.useState(postpone), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp2[1];
  let closure_2 = React.useRef(undefined);
  importDefault(closure_2[6])(() => {
    if (first) {
      closure_2.current = first(closure_2[7]).runAfterInteractions(() => {
        callback(false);
      });
      return () => {
        const current = ref.current;
        if (null != current) {
          current.cancel();
        }
      };
    }
  });
  if (first) {
    children = jsx(arg1(closure_2[8]).SceneLoadingIndicator, {});
  }
  if (ignoreKeyboard) {
    let tmp10 = View;
  } else {
    tmp10 = importDefault(closure_2[9]);
  }
  const obj = { style: items };
  const items = [callback2().view, viewStyle];
  obj.children = children;
  return <tmp10 {...obj} />;
};
