// Module ID: 7438
// Function ID: 7439
// Dependencies: [19, 7439]
// Exports: useClipboard

// Module 7438
import _mod7439 from "module_7439" /* 7439 */;
import noop from "module_19" /* 19 */;

function setString(arg0) {
  closure_0 = arg0;
  const Clipboard = _mod7439.Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((fn) => fn(closure_0));
}
const set = new Set();

export const useClipboard = () => {
  const state = noop.useState("");
  [tmp2, require] = state;
  const effect = noop.useEffect(() => {
    const Clipboard = _mod7439.Clipboard;
    const string = Clipboard.getString();
    string.then(closure_1_0);
  }, []);
  const effect1 = noop.useEffect(() => {
    set.add(require);
    return () => {
      set.delete(closure_1_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};
