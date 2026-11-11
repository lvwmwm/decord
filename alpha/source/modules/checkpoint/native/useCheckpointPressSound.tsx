// Module ID: 14432
// Function ID: 14433
// Name: useCheckpointPressSound
// Dependencies: [19, 14399, 2]
// Exports: default

// Module 14432 (useCheckpointPressSound)
import useCheckpointSoundDefault from "useCheckpointSound" /* 14399 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPressSound.tsx");

export default function useCheckpointPressSound(arg0, arg1) {
  let closure_0 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let closure_2 = useCheckpointSoundDefault(arg0);
  let closure_3 = react.useRef(false);
  return {
    onPressIn() {
      ref.current = true;
      const tmp = flag;
      if (!tmp) {
        closure_2();
      }
    },
    onPress() {
      const tmp = ref;
      if (!ref.current) {
        const tmp2 = flag;
        if (!tmp2) {
          closure_2();
        }
      }
      tmp.current = false;
      closure_0();
    }
  };
};
