// Module ID: 16994
// Function ID: 16995
// Name: useDrawerToggle
// Dependencies: [19, 11753, 11754, 4566, 7715, 16995, 1115, 2]
// Exports: default

// Module 16994 (useDrawerToggle)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 16995 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const __initData = { code: "function useDrawerToggleTsx1(){const{controlsSpecs,VoicePanelControlsModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default function useDrawerToggle(arg0) {
  let closure_0;
  let connected;
  let controlsSpecs;
  let dismissPanel;
  let stringResult;
  let tmp5;
  _require = arg0;
  const context = dismissPanel.useContext(controlsSpecs(connected[2]));
  controlsSpecs = context.controlsSpecs;
  connected = context.connected;
  dismissPanel = context.dismissPanel;
  let obj = require("ReanimatedRexport");
  const fn = function l() {
    return controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER;
  };
  const obj2 = { controlsSpecs, VoicePanelControlsModes };
  fn.__closure = obj2;
  fn.__workletHash = 900483810235;
  fn.__initData = __initData;
  const derivedValue = obj.useDerivedValue(fn);
  const tmp3 = controlsSpecs(connected[4])(derivedValue);
  const items = [arg0, dismissPanel, connected, controlsSpecs];
  const callback = dismissPanel.useCallback(() => {
    if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
      dismissPanel();
    } else {
      const value = connected.get();
      const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
      const obj = { tab: "settings", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON };
      closure_0(obj);
    }
  }, items);
  const obj3 = { isDrawerOpen: tmp3, handlePress: callback, accessibilityLabel: stringResult, ariaHidden: !tmp5 };
  tmp5 = controlsSpecs(connected[4])(connected);
  const intl = require("intl").intl;
  const string = intl.string;
  const t = require("intl").t;
  if (tmp3) {
    stringResult = string(t["awDmr/"]);
  } else {
    stringResult = string(t.OXW7dL);
  }
  return obj3;
};
