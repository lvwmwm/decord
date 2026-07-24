// Module ID: 11329
// Function ID: 88155
// Name: AppLauncherBooleanOption
// Dependencies: [57, 31, 33, 4130, 689, 7636, 2]
// Exports: default

// Module 11329 (AppLauncherBooleanOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  let dependencyMap;
  let hasError;
  let option;
  let require;
  let style;
  ({ initialValue: require, onPress: dependencyMap } = arg0);
  ({ style, option, hasError } = arg0);
  const tmp2 = first(React.useState(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = "text" === closure_0.type;
    }
    if (tmp) {
      tmp = "true" === closure_0.text;
    }
    return tmp;
  }), 2);
  first = tmp2[0];
  React = tmp2[1];
  const obj = { start: true, end: true };
  const items = [_createForOfIteratorHelperLoose().container, style];
  obj.style = items;
  obj.hasError = hasError;
  obj.label = option.displayName;
  obj.selected = first;
  obj.onPress = function onPress() {
    callback2(!first);
    callback(!first);
  };
  return jsx(require(7636) /* Form */.FormCheckboxRow, { start: true, end: true });
};
