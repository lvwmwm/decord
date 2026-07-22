// Module ID: 11143
// Function ID: 86666
// Name: openCustomKeyboard
// Dependencies: []
// Exports: default

// Module 11143 (openCustomKeyboard)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  let keyboardParams;
  ({ channelId: closure_0, chatInputRef: closure_1, chatInputNativeRef: closure_2, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  require(dependencyMap[0]).setKeyboardType(keyboardParams);
  const obj = require(dependencyMap[0]);
  require(dependencyMap[1]).runAfterInteractions(() => {
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
    callback(ref2[2]).openPortalKeyboard(keyboardParams.type, callback, ref);
    const obj2 = callback(ref2[2]);
    ref(ref2[3]).openCustomKeyboard(ref2.current);
  });
};
