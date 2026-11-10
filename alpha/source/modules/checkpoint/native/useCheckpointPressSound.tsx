// Module ID: 13955
// Function ID: 13956
// Name: useCheckpointPressSound
// Dependencies: [19, 13922, 2]
// Exports: default

// Module 13955 (useCheckpointPressSound)
import useCheckpointSoundDefault from "useCheckpointSound" /* 13922 */;
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
