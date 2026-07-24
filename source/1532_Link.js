// Module ID: 1532
// Function ID: 17511
// Name: Link
// Dependencies: [29, 31, 27, 1533]
// Exports: default

// Module 1532 (Link)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let closure_5;
let closure_2 = ["to", "action"];
({ Platform, Text: closure_5 } = get_ActivityIndicator);

export default function Link(arg0) {
  let action;
  let to;
  ({ to, action } = arg0);
  const tmp = callback(arg0, closure_2);
  const importDefault = tmp;
  const tmp2 = importDefault(1533)({ to, action });
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
