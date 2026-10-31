// Module ID: 12362
// Function ID: 12363
// Name: AppLauncherAutocompleteOption
// Dependencies: [32, 19, 17, 1191, 21, 5014, 7097, 5596, 575, 1888, 5258, 12363, 1994, 12361, 6980, 5624, 2]
// Exports: default

// Module 12362 (AppLauncherAutocompleteOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FormConstants from "FormConstants" /* 1191 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1888 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import useToken from "useToken" /* 5596 */;
import Pressables from "Pressables" /* 6980 */;
import InputFieldContainer2 from "InputFieldContainer" /* 7097 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 12361 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let tmp4;
const Text_Text = tmp4(5624);
const View = react_native.View;
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ content: { flex: 1 } });
let result = size.fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx");

export default function AppLauncherAutocompleteOption(arg0) {
  let activeCommand;
  let autoFocus;
  let channel;
  let closure_9;
  let hasError;
  let initChoice;
  let onDismissAutocompleteSheet;
  let option;
  let ref;
  ({ option: require, onSelect: importDefault, onOpenAutocompleteSheet: dependencyMap, onDismissAutocompleteSheet: _slicedToArray, channel: react, activeCommand: View, optionValues: ANDROID_FOREGROUND_RIPPLE, initialValue: jsx } = arg0);
  initChoice = undefined;
  closure_9 = undefined;
  function onPress() {
    if (dependencyMap != null) {
      tmp();
    }
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = {
      option: require,
      initChoice,
      onChoiceSelect(arg0) {
        closure_1_9(arg0);
        closure_1_1(arg0);
      },
      channel: react,
      activeCommand: View,
      onDismissAutocompleteSheet: _slicedToArray,
      optionValues: ANDROID_FOREGROUND_RIPPLE.current
    };
    obj2.openLazy(asyncRequire(12363, dependencyMap.paths), "AppLauncherAutocompleteActionSheet", obj3);
  }
  ({ autoFocus, hasError } = arg0);
  [initChoice, closure_9] = react.useState(() => {
    if (null != jsx) {
      if ("text" === jsx.type) {
        if ("" !== jsx.text) {
          const obj = { displayName: null, name: null, value: null };
          ({ text: obj.displayName, text: obj.name, text: obj.value } = jsx);
          return obj;
        }
      }
    }
  });
  const tmp3 = initChoice();
  let obj = InputFieldContainer2;
  const inputStyles = obj.useInputStyles({});
  let obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG);
  let obj3 = useAnimationDelayedAutoFocus;
  const animationDelayedAutoFocus = obj3.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const PressableOpacity = Pressables.PressableOpacity;
  let str = "default";
  const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
  if (hasError) {
    str = "error";
  }
  const items = [inputStyles.padding, tmp3.content];
  const str2 = " ";
  const Text = Text_Text.Text;
  return <PressableOpacity onPress={onPress} style={inputStyles.radius} androidRippleConfig={ANDROID_FOREGROUND_RIPPLE}>{null}</PressableOpacity>;
};
