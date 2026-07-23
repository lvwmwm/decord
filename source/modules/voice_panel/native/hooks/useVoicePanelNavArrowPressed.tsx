// Module ID: 15785
// Function ID: 121869
// Name: useVoicePanelNavArrowPressed
// Dependencies: [31, 10013, 10014, 2]
// Exports: default

// Module 15785 (useVoicePanelNavArrowPressed)
import result from "result";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";

const result = require("dismissPanel").fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx");

export default function useVoicePanelNavArrowPressed() {
  const context = dismissPanel.useContext(focused(setFocused[2]));
  focused = context.focused;
  setFocused = context.setFocused;
  dismissPanel = context.dismissPanel;
  const controlsSpecs = context.controlsSpecs;
  const items = [focused, controlsSpecs, dismissPanel, setFocused];
  return dismissPanel.useCallback(() => {
    const value = focused.get();
    let id;
    if (null != value) {
      id = value.id;
    }
    if (null != id) {
      if (controlsSpecs.get().mode !== controlsSpecs.DRAWER) {
        setFocused(null);
        let flag = true;
      }
      return flag;
    }
    flag = dismissPanel();
  }, items);
};
