// Module ID: 16271
// Function ID: 16272
// Name: useVoicePanelNavArrowPressed
// Dependencies: [19, 11719, 11720, 2]
// Exports: default

// Module 16271 (useVoicePanelNavArrowPressed)
import noop from "noop";
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
    if (value != null) {
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
