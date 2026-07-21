// Module ID: 5492
// Function ID: 46829
// Name: setString
// Dependencies: []
// Exports: useClipboard

// Module 5492 (setString)
function setString(arg0) {
  const require = arg0;
  const Clipboard = require(dependencyMap[1]).Clipboard;
  Clipboard.setString(arg0);
  const item = set.forEach((arg0) => arg0(arg0));
}
let closure_2 = require(dependencyMap[0]);
const set = new Set();

export const useClipboard = function useClipboard() {
  let tmp2;
  const state = React.useState("");
  [tmp2, closure_0] = state;
  const effect = React.useEffect(() => {
    const Clipboard = callback(closure_1[1]).Clipboard;
    const string = Clipboard.getString();
    string.then(callback);
  }, []);
  const effect1 = React.useEffect(() => {
    set.add(closure_0);
    return () => {
      set.delete(closure_0);
    };
  }, []);
  const items = [tmp2, setString];
  return items;
};
