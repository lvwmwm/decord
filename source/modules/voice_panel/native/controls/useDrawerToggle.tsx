// Module ID: 15723
// Function ID: 120299
// Name: useDrawerToggle
// Dependencies: []
// Exports: default

// Module 15723 (useDrawerToggle)
let closure_3 = importAll(dependencyMap[0]);
const VoicePanelControlsModes = arg1(dependencyMap[1]).VoicePanelControlsModes;
let closure_5 = { code: "function useDrawerToggleTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}" };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default function useDrawerToggle(arg0) {
  const arg1 = arg0;
  const context = React.useContext(importDefault(dependencyMap[2]));
  const controlsSpecs = context.controlsSpecs;
  const importDefault = controlsSpecs;
  const connected = context.connected;
  const dependencyMap = connected;
  const dismissPanel = context.dismissPanel;
  const React = dismissPanel;
  let obj = arg1(dependencyMap[3]);
  const fn = function l() {
    return controlsSpecs.get().mode === constants.DRAWER;
  };
  obj = { controlsSpecs, VoicePanelControlsModes };
  fn.__closure = obj;
  fn.__workletHash = 900483810235;
  fn.__initData = closure_5;
  const derivedValue = obj.useDerivedValue(fn);
  const tmp3 = importDefault(dependencyMap[4])(derivedValue);
  const items = [arg0, dismissPanel, connected, controlsSpecs];
  const callback = React.useCallback(() => {
    if (controlsSpecs.get().mode === constants.DRAWER) {
      dismissPanel();
    } else {
      const obj = { tab: "settings" };
      const value = connected.get();
      const VoicePanelTabAnalyticsSources = arg0(connected[5]).VoicePanelTabAnalyticsSources;
      obj.source = value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON;
      arg0(obj);
      const tmp = arg0;
    }
  }, items);
  obj = { isDrawerOpen: tmp3, handlePress: callback };
  const intl = arg1(dependencyMap[6]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[6]).t;
  if (tmp3) {
    let stringResult = string(t.awDmr/);
  } else {
    stringResult = string(t.OXW7dL);
  }
  obj.accessibilityLabel = stringResult;
  obj.ariaHidden = !importDefault(dependencyMap[4])(connected);
  return obj;
};
