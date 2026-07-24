// Module ID: 11322
// Function ID: 88105
// Name: AppLauncherAutocompleteOption
// Dependencies: [57, 31, 653, 33, 4130, 689, 1820, 4098, 11323, 1934, 11321, 4660, 4126, 2]
// Exports: default

// Module 11322 (AppLauncherAutocompleteOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 12, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.hasError = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
const obj2 = { fontSize: 16, alignSelf: "center", fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.inputText = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
let result = require("ME").fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx");

export default function AppLauncherAutocompleteOption(arg0) {
  let _createForOfIteratorHelperLoose;
  let autoFocus;
  let _slicedToArray;
  let result;
  let closure_7;
  let dependencyMap;
  let hasError;
  let importDefault;
  let jsx;
  let require;
  let style;
  ({ option: require, onSelect: importDefault, onOpenAutocompleteSheet: dependencyMap, onDismissAutocompleteSheet: _slicedToArray, channel: result, activeCommand: jsx, optionValues: _createForOfIteratorHelperLoose, initialValue: closure_7, hasError } = arg0);
  let first;
  let closure_9;
  function onPress() {
    if (null != callback) {
      callback();
    }
    let obj = outer1_0(outer1_2[6]);
    const result = obj.dismissGlobalKeyboard();
    obj = {
      option: closure_0,
      initChoice: first,
      onChoiceSelect(arg0) {
        outer1_9(arg0);
        outer1_1(arg0);
      },
      channel: result,
      activeCommand: closure_5,
      onDismissAutocompleteSheet: _slicedToArray,
      optionValues: ref.current
    };
    outer1_1(outer1_2[7]).openLazy(outer1_0(outer1_2[9])(outer1_2[8], outer1_2.paths), "AppLauncherAutocompleteActionSheet", obj);
  }
  ({ style, autoFocus } = arg0);
  const tmp = callback(React.useState(() => {
    if (null != closure_7) {
      if ("text" === closure_7.type) {
        if ("" !== closure_7.text) {
          const obj = {};
          ({ text: obj.displayName, text: obj.name, text: obj.value } = closure_7);
          return obj;
        }
      }
    }
  }), 2);
  first = tmp[0];
  closure_9 = tmp[1];
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = require(11321) /* useAnimationDelayedAutoFocus */;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  obj = { onPress };
  const items = [tmp3.container, , ];
  if (hasError) {
    hasError = tmp3.hasError;
  }
  items[1] = hasError;
  items[2] = style;
  obj.style = items;
  obj = { variant: "text-md/normal", style: tmp3.inputText };
  let str = " ";
  if (null != first) {
    str = first.displayName;
  }
  obj.children = str;
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-md/normal", style: tmp3.inputText });
  return jsx(require(4660) /* PressableBase */.PressableOpacity, { variant: "text-md/normal", style: tmp3.inputText });
};
