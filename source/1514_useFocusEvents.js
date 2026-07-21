// Module ID: 1514
// Function ID: 17403
// Name: useFocusEvents
// Dependencies: []
// Exports: default

// Module 1514 (useFocusEvents)
let closure_2 = importAll(dependencyMap[0]);

export default function useFocusEvents(arg0) {
  let emitter;
  let state;
  ({ state, emitter } = arg0);
  const importDefault = emitter;
  const context = React.useContext(importDefault(dependencyMap[1]));
  const dependencyMap = context;
  const React = React.useRef();
  const key = state.routes[state.index].key;
  const items = [key, emitter, context];
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (null != context) {
      addListenerResult = context.addListener("focus", () => {
        closure_2.current = closure_3;
        closure_0.emit({ type: "focus", target: closure_3 });
      });
    }
    return addListenerResult;
  }, items);
  const items1 = [key, emitter, context];
  const effect1 = React.useEffect(() => {
    let addListenerResult;
    if (null != context) {
      addListenerResult = context.addListener("blur", () => {
        closure_2.current = undefined;
        closure_0.emit({ type: "blur", target: closure_3 });
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
