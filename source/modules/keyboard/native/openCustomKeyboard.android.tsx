// Module ID: 11153
// Function ID: 86716
// Name: openCustomKeyboard
// Dependencies: [1454, 5584, 3997, 11114, 2]
// Exports: default

// Module 11153 (openCustomKeyboard)
const result = require("closePortalKeyboard").fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  let dependencyMap;
  let importDefault;
  let keyboardParams;
  let require;
  ({ channelId: require, chatInputRef: importDefault, chatInputNativeRef: dependencyMap, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  require(1454) /* _createForOfIteratorHelperLoose */.setKeyboardType(keyboardParams);
  let obj = require(1454) /* _createForOfIteratorHelperLoose */;
  require(5584) /* runAfterInteractions */.runAfterInteractions(() => {
    const current = ref.current;
    current.blur();
    let tmp2 = null == secondaryTextFieldRef;
    if (!tmp2) {
      const current2 = secondaryTextFieldRef.current;
      tmp2 = null == current2;
      const obj = current2;
    }
    if (!tmp2) {
      obj.blur();
    }
    outer1_0(outer1_2[2]).openPortalKeyboard(keyboardParams.type, closure_0, ref);
    const obj2 = outer1_0(outer1_2[2]);
    outer1_1(outer1_2[3]).openCustomKeyboard(ref2.current);
  });
};
