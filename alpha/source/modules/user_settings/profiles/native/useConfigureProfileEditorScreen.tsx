// Module ID: 16067
// Function ID: 16068
// Name: useConfigureProfileEditorScreen
// Dependencies: [19, 21, 1501, 1112, 16068, 7191, 7751, 2]
// Exports: default

// Module 16067 (useConfigureProfileEditorScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useConfigureProfileEditorScreen.tsx");

export default function useConfigureProfileEditorScreen(showTitleAndBackButton) {
  showTitleAndBackButton = showTitleAndBackButton.showTitleAndBackButton;
  const isSubmitting = showTitleAndBackButton.isSubmitting;
  const saveButtonDisabled = showTitleAndBackButton.saveButtonDisabled;
  const onSave = showTitleAndBackButton.onSave;
  const backgroundColor = showTitleAndBackButton.backgroundColor;
  let obj = showTitleAndBackButton(saveButtonDisabled[2]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const items = [backgroundColor, nativeStackNavigation, showTitleAndBackButton, isSubmitting, saveButtonDisabled, onSave];
  const layoutEffect = onSave.useLayoutEffect(() => {
    let disabled;
    let obj2;
    let onPress;
    let obj = {
      contentStyle: obj2,
      headerStyle: { backgroundColor },
      headerShadowVisible: false,
      headerRight: isSubmitting ? (() => backgroundColor(showTitleAndBackButton(disabled[5]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        const obj = { text: intl.string(showTitleAndBackButton(saveButtonDisabled[3]).t["R3BPH+"]), onPress, disabled };
        const HeaderActionButton = showTitleAndBackButton(saveButtonDisabled[6]).HeaderActionButton;
        intl = showTitleAndBackButton(saveButtonDisabled[3]).intl;
        return backgroundColor(HeaderActionButton, obj);
      })
    };
    obj2 = { backgroundColor };
    const tmp = showTitleAndBackButton;
    if (tmp) {
      let intl = intl2.intl;
      obj.title = intl.string(intl2.t.s5vZlQ);
      obj.headerLeft = () => {
        const obj = { navigation, hideBadge: true };
        return backgroundColor(isSubmitting(saveButtonDisabled[4]), obj);
      };
    }
    nativeStackNavigation.setOptions(obj);
  }, items);
};
