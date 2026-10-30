// Module ID: 7354
// Function ID: 7355
// Dependencies: [19, 7355]
// Exports: useClipboard

// Module 7354
import _mod7355 from "module_7355" /* 7355 */;
import react from "react" /* 19 */;

function setString(arg0) {
  let closure_0 = arg0;
  const Clipboard = _mod7355.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  let tmp2;
  const state = react.useState("");
  [tmp2, require] = state;
  const effect = react.useEffect(() => {
    const Clipboard = _mod7355.Clipboard;
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
