// Module ID: 5568
// Function ID: 47316
// Dependencies: []

// Module 5568
let StyleSheet;
let closure_0 = [];
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ StyleSheet, View: closure_4 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[3]);
const styles = StyleSheet.create({ page: { minHeight: "100%" }, card: { Č: 10, accessibilityDismiss: 10 } });

export default importAllResult.forwardRef(function CardSheet(layout) {
  let enabled;
  let style;
  layout = layout.layout;
  let closure_0 = layout;
  ({ enabled, style } = layout);
  const tmp2 = callback(importAllResult.useState(false), 2);
  const callback = tmp2[1];
  const tmp3 = callback(importAllResult.useState("auto"), 2);
  const callback2 = tmp3[1];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ setPointerEvents: closure_2 }));
  const items = [, ];
  ({ height: arr[0], width: arr[1] } = layout);
  const effect = importAllResult.useEffect(() => {
    if ("undefined" !== typeof document) {
      const _document = document;
      if (document.body) {
        const _document2 = document;
        const _document3 = document;
        let tmp4 = document.body.clientWidth === layout.width;
        if (tmp4) {
          tmp4 = tmp === layout.height;
        }
        closure_1(tmp4);
        const tmp2 = closure_1;
      }
    }
  }, items);
  const obj = { pointerEvents: tmp3[0] };
  if (enabled) {
    if (tmp2[0]) {
      let card = closure_6.page;
    }
    const items1 = [card, style];
    obj.style = items1;
    return tmp6(tmp7, tmp9({}, tmp, obj));
  }
  card = closure_6.card;
});
