// Module ID: 7161
// Function ID: 7162
// Name: useInputRevealButton
// Dependencies: [19, 21, 7162, 7164, 1113, 2]
// Exports: useInputRevealButtonConfig

// Module 7161 (useInputRevealButton)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Input/native/useInputRevealButton.native.tsx");

export function useInputRevealButtonConfig(merged, state) {
  let obj2;
  let obj3;
  let stringResult;
  const revealable = merged.revealable;
  const secureTextEntry = merged.secureTextEntry;
  const disabled = merged.disabled;
  const isRevealed = state.isRevealed;
  const tmp = undefined !== revealable && revealable;
  const tmp2 = undefined !== secureTextEntry && secureTextEntry;
  if (tmp) {
    if (tmp2) {
      let tmp8;
      if (isRevealed) {
        let EyeIcon = tmp5(7162).EyeSlashIcon;
        tmp8 = tmp5;
      } else {
        EyeIcon = tmp5(7164).EyeIcon;
        tmp8 = tmp5;
      }
      const obj = { content: <EyeIcon size="xs" color="input-icon-default" accessible={false} />, pressableProps: obj2 };
      obj2 = { onPress: tmp4, disabled: undefined !== disabled && disabled, accessibilityState: obj3, accessibilityLabel: stringResult, accessibilityRole: "button", hitSlop: { top: 8, bottom: 8 } };
      obj3 = { disabled: undefined !== disabled && disabled };
      const intl = tmp8(1113).intl;
      const string = intl.string;
      const t = tmp8(1113).t;
      if (isRevealed) {
        stringResult = string(t.Nusip4);
      } else {
        stringResult = string(t.nFzpM5);
      }
      return obj;
    }
  }
  return null;
}
