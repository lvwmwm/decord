// Module ID: 7107
// Function ID: 7108
// Dependencies: [19, 7108]
// Exports: useClipboard

// Module 7107
import _mod7108 from "module_7108" /* 7108 */;
import react from "react" /* 19 */;

function setString(arg0) {
  let closure_0 = arg0;
  const Clipboard = _mod7108.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  let tmp2;
  const state = react.useState("");
  [tmp2, require] = state;
  const effect = react.useEffect(() => {
    const Clipboard = _mod7108.Clipboard;
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
