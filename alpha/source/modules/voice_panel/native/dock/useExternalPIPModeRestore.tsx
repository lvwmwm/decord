// Module ID: 19196
// Function ID: 19197
// Name: useExternalPIPModeRestore
// Dependencies: [19, 11223, 5874, 2]
// Exports: default

// Module 19196 (useExternalPIPModeRestore)
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c0;

let react = react_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useExternalPIPModeRestore.tsx");

export default function useExternalPIPModeRestore(arg0, arg1, arg2) {
  let closure_2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  react = arg2;
  const items = [arg0, arg1, arg2];
  const effect = react.useEffect(() => {
    let tmp = c0;
    if (tmp) {
      const tmp2 = null;
      c0 = null;
      const tmp4 = closure_1;
      let obj = closure_0(closure_1[2]);
      closure_1 = obj.addOnPipModeChangedListener((arg0) => {
        const tmp = arg0;
        if (tmp) {
          c0 = closure_1.get();
        } else {
          c0 = null;
          const tmp5 = c0 !== VoicePanelModes.PIP && c0 !== VoicePanelModes.PANEL;
          if (!tmp5) {
            const tmp7 = closure_1.get() !== tmp4.DISMISSED && closure_1.get() !== tmp2;
            if (tmp7) {
              closure_2(c0);
            }
          }
        }
      });
      return () => {
        let removeResult;
        const obj = closure_1;
        if (closure_1 != null) {
          removeResult = obj.remove();
        }
        return removeResult;
      };
    }
  }, items);
};
