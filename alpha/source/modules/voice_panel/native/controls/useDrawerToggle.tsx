// Module ID: 19913
// Function ID: 19914
// Name: useDrawerToggle
// Dependencies: [19, 11917, 11918, 1652, 11186, 19799, 1113, 2]
// Exports: default

// Module 19913 (useDrawerToggle)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11917 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 19799 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let closure_5 = { code: "(function useDrawerToggleTsx1(){let[controlsSpecs,VoicePanelControlsModes]=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER;})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useDrawerToggle.tsx");

export default function useDrawerToggle(arg0) {
  let closure_0;
  let connected;
  let controlsSpecs;
  let dismissPanel;
  let stringResult;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp7;
  _require = arg0;
  let obj = dismissPanel;
  const context = dismissPanel.useContext(controlsSpecs(connected[2]));
  controlsSpecs = context.controlsSpecs;
  connected = context.connected;
  dismissPanel = context.dismissPanel;
  const items = [closure_5, controlsSpecs, VoicePanelControlsModes];
  let c0;
  let c1;
  [tmp5, tmp6, tmp7] = items;
  function useDrawerToggleTsx1() {
    return _undefined.get().mode === _undefined2.DRAWER;
  }
  const items1 = [tmp6, tmp7];
  useDrawerToggleTsx1.__closure = items1;
  useDrawerToggleTsx1.__workletHash = 13427978758146;
  useDrawerToggleTsx1.__initData = tmp5;
  const obj2 = require("module_1652");
  const derivedValue = obj2.useDerivedValue(useDrawerToggleTsx1);
  const tmp9 = controlsSpecs(connected[4])(derivedValue);
  const items2 = [arg0, dismissPanel, connected, controlsSpecs];
  const callback = obj.useCallback(() => {
    if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
      dismissPanel();
    } else {
      const value = connected.get();
      const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
      const obj = { tab: "settings", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON };
      closure_0(obj);
    }
  }, items2);
  const obj3 = { isDrawerOpen: tmp9, handlePress: callback, accessibilityLabel: stringResult, ariaHidden: !tmp11 };
  tmp11 = controlsSpecs(connected[4])(connected);
  const intl = tmp4(tmp2[6]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[6]).t;
  if (tmp9) {
    stringResult = string(t["awDmr/"]);
  } else {
    stringResult = string(t.OXW7dL);
  }
  return obj3;
};
