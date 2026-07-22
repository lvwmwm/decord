// Module ID: 11283
// Function ID: 87815
// Name: AppLauncherAutocompleteOption
// Dependencies: []
// Exports: default

// Module 11283 (AppLauncherAutocompleteOption)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { Mouse: false, filename: false, durationSecs: false, waveform: false, GET_GUILDS: false, EntryPointCommandButtonActions: false, woman_in_lotus_position: false, linkedUsersProcessed: false, backgroundColor: importDefault(dependencyMap[5]).colors.INPUT_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.container = obj;
obj.hasError = { borderColor: importDefault(dependencyMap[5]).colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
const obj1 = { borderColor: importDefault(dependencyMap[5]).colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
obj.inputText = { fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
let closure_6 = obj.createStyles(obj);
const obj2 = { fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx");

export default function AppLauncherAutocompleteOption(arg0) {
  let autoFocus;
  let hasError;
  let style;
  ({ option: closure_0, onSelect: closure_1, onOpenAutocompleteSheet: closure_2, onDismissAutocompleteSheet: closure_3, channel: closure_4, activeCommand: closure_5, optionValues: closure_6, initialValue: closure_7, hasError } = arg0);
  let first;
  let closure_9;
  function onPress() {
    if (null != lib) {
      lib();
    }
    let obj = callback(lib[6]);
    const result = obj.dismissGlobalKeyboard();
    obj = {
      option: callback,
      initChoice: first,
      onChoiceSelect(arg0) {
        callback2(arg0);
        callback(arg0);
      },
      channel: closure_4,
      activeCommand: closure_5,
      onDismissAutocompleteSheet: closure_3,
      optionValues: ref.current
    };
    callback2(lib[7]).openLazy(callback(lib[9])(lib[8], lib.paths), "AppLauncherAutocompleteActionSheet", obj);
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
  const tmp3 = callback2();
  let obj = arg1(dependencyMap[10]);
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
  obj.children = jsx(arg1(dependencyMap[12]).Text, obj);
  return jsx(arg1(dependencyMap[11]).PressableOpacity, obj);
};
