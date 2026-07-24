// Module ID: 1514
// Function ID: 17405
// Name: useFocusEvents
// Dependencies: [31, 1484]
// Exports: default

// Module 1514 (useFocusEvents)
import result from "result";


export default function useFocusEvents(arg0) {
  let emitter;
  let state;
  ({ state, emitter } = arg0);
  context = React.useContext(emitter(context[1]));
  React = React.useRef();
  const key = state.routes[state.index].key;
  const items = [key, emitter, context];
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (null != context) {
      addListenerResult = context.addListener("focus", () => {
        outer1_2.current = outer1_3;
        outer1_0.emit({ type: "focus", target: outer1_3 });
      });
    }
    return addListenerResult;
  }, items);
  const items1 = [key, emitter, context];
  const effect1 = React.useEffect(() => {
    let addListenerResult;
    if (null != context) {
      addListenerResult = context.addListener("blur", () => {
        outer1_2.current = undefined;
        outer1_0.emit({ type: "blur", target: outer1_3 });
      });
    }
    return addListenerResult;
  }, items1);
  const items2 = [key, emitter, context];
  const effect2 = React.useEffect(() => {
    const current = ref.current;
    ref.current = key;
    let tmp2 = tmp;
    if (undefined === current) {
      tmp2 = context;
    }
    if (!tmp2) {
      let obj = { type: "focus", target: key };
      emitter.emit(obj);
    }
    let tmp6 = current === key;
    if (!tmp6) {
      let tmp7 = context;
      if (context) {
        tmp7 = !context.isFocused();
      }
      tmp6 = tmp7;
    }
    if (!tmp6) {
      if (tmp) {
        obj = { type: "blur", target: current };
        emitter.emit(obj);
        obj = { type: "focus", target: key };
        emitter.emit(obj);
      }
    }
  }, items2);
};
