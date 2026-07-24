// Module ID: 5568
// Function ID: 47344
// Dependencies: [57, 29, 31, 27, 33]

// Module 5568
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let closure_4;
let closure_0 = ["enabled", "layout", "style"];
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const styles = StyleSheet.create({ page: { minHeight: "100%" }, card: { flex: 1, overflow: "hidden" } });

export default importAllResult.forwardRef(function CardSheet(layout) {
  let enabled;
  let style;
  layout = layout.layout;
  ({ enabled, style } = layout);
  let tmp2 = callback(importAllResult.useState(false), 2);
  callback = tmp2[1];
  const tmp3 = callback(importAllResult.useState("auto"), 2);
  const callback2 = tmp3[1];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ setPointerEvents: _objectWithoutProperties }));
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
        _slicedToArray(tmp4);
        const tmp2 = _slicedToArray;
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
