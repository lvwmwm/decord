// Module ID: 1532
// Function ID: 17504
// Name: Link
// Dependencies: []
// Exports: default

// Module 1532 (Link)
let Platform;
let closure_2 = [null, null];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Platform, Text: closure_5 } = arg1(dependencyMap[2]));

export default function Link(arg0) {
  let action;
  let to;
  ({ to, action } = arg0);
  const tmp = callback(arg0, closure_2);
  const importDefault = tmp;
  const tmp2 = importDefault(dependencyMap[3])({ to, action });
  const dependencyMap = tmp2;
  return <closure_5 {......Object.assign({}, tmp2, tmp, {
    onPress(arg0) {
      if ("onPress" in tmp) {
        if (null != tmp.onPress) {
          tmp.onPress(arg0);
        }
      }
      tmp2.onPress(arg0);
    }
  })} />;
};
