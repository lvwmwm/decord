// Module ID: 19210
// Function ID: 19211
// Name: useVoicePanelNavArrowPressed
// Dependencies: [19, 11221, 11222, 2]
// Exports: default

// Module 19210 (useVoicePanelNavArrowPressed)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx");

export default function useVoicePanelNavArrowPressed() {
  let dismissPanel;
  let focused;
  let setFocused;
  const context = dismissPanel.useContext(focused(setFocused[2]));
  focused = context.focused;
  setFocused = context.setFocused;
  dismissPanel = context.dismissPanel;
  const controlsSpecs = context.controlsSpecs;
  const items = [focused, controlsSpecs, dismissPanel, setFocused];
  return dismissPanel.useCallback(() => {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    if (null != id) {
      let flag;
      if (controlsSpecs.get().mode !== VoicePanelControlsModes.DRAWER) {
        setFocused(null);
        flag = true;
      }
      return flag;
    }
    flag = dismissPanel();
  }, items);
};
