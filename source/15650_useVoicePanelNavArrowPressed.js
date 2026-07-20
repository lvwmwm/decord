// Module ID: 15650
// Function ID: 119590
// Name: useVoicePanelNavArrowPressed
// Dependencies: []
// Exports: default

// Module 15650 (useVoicePanelNavArrowPressed)
let closure_2 = importAll(dependencyMap[0]);
const VoicePanelControlsModes = arg1(dependencyMap[1]).VoicePanelControlsModes;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx");

export default function useVoicePanelNavArrowPressed() {
  const context = React.useContext(importDefault(dependencyMap[2]));
  const focused = context.focused;
  const importDefault = focused;
  const setFocused = context.setFocused;
  const dependencyMap = setFocused;
  const dismissPanel = context.dismissPanel;
  const React = dismissPanel;
  const controlsSpecs = context.controlsSpecs;
  const VoicePanelControlsModes = controlsSpecs;
  const items = [focused, controlsSpecs, dismissPanel, setFocused];
  return React.useCallback(() => {
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
