// Module ID: 5492
// Function ID: 46865
// Name: setString
// Dependencies: [31, 5493]
// Exports: useClipboard

// Module 5492 (setString)
import result from "result";

function setString(arg0) {
  const _require = arg0;
  const Clipboard = _require(5493).Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((arg0) => arg0(closure_0));
}
const set = new Set();

export const useClipboard = function useClipboard() {
  let require;
  let tmp2;
  const state = React.useState("");
  [tmp2, require] = state;
  const effect = React.useEffect(() => {
    const Clipboard = outer1_0(outer1_1[1]).Clipboard;
    const string = Clipboard.getString();
    string.then(closure_0);
  }, []);
  const effect1 = React.useEffect(() => {
    outer1_3.add(closure_0);
    return () => {
      outer2_3.delete(outer1_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};
