// Module ID: 14487
// Function ID: 14488
// Name: useCheckpointPressSound
// Dependencies: [19, 14488, 2]
// Exports: default

// Module 14487 (useCheckpointPressSound)
import useCheckpointSoundDefault from "useCheckpointSound" /* 14488 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPressSound.tsx");

export default function useCheckpointPressSound(source) {
  let closure_129_0;
  let disabled;
  ({ onPress: closure_129_0, disabled } = source);
  source = source.source;
  if (disabled === undefined) {
    disabled = false;
  }
  let closure_2 = useCheckpointSoundDefault(source);
  let closure_3 = react.useRef(false);
  return {
    onPressIn() {
      ref.current = true;
      const tmp = disabled;
      if (!tmp) {
        closure_2();
      }
    },
    onPressWithSound() {
      const tmp = ref;
      if (!ref.current) {
        const tmp2 = disabled;
        if (!tmp2) {
          closure_2();
        }
      }
      tmp.current = false;
      closure_1_0();
    }
  };
};
