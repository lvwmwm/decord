// Module ID: 6887
// Function ID: 6888
// Dependencies: [19, 6888]
// Exports: useClipboard

// Module 6887
import _mod6888 from "module_6888" /* 6888 */;
import react from "react" /* 19 */;

function setString(arg0) {
  let closure_0 = arg0;
  const Clipboard = _mod6888.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  let tmp2;
  const state = react.useState("");
  [tmp2, require] = state;
  const effect = react.useEffect(() => {
    const Clipboard = _mod6888.Clipboard;
    const string = Clipboard.getString();
    string.then(require);
  }, []);
  const effect1 = react.useEffect(() => {
    set.add(require);
    return () => {
      set.delete(closure_1_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};
