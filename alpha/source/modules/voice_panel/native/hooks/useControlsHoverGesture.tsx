// Module ID: 19833
// Function ID: 19834
// Name: useControlsHoverGesture
// Dependencies: [19, 11925, 11923, 11924, 1652, 5535, 1705, 2]
// Exports: default

// Module 19833 (useControlsHoverGesture)
import _mod1705 from "module_1705" /* 1705 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11923 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11925 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let closure_6 = { code: "(function useControlsHoverGestureTsx1(){let[connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,scheduleOnRN,showControls,lastIdleRefreshMillis,IDLE_REFRESH_DEBOUNCE_MILLIS,refreshIdleTimeout]=this.__closure;if(!connected.get())return;if(mode.get()!==VoicePanelModes.PANEL)return;const controlsHidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;if(controlsHidden){scheduleOnRN(showControls);return;}const currentTimeMillis=Date.now();if(currentTimeMillis-lastIdleRefreshMillis.get()<IDLE_REFRESH_DEBOUNCE_MILLIS)return;lastIdleRefreshMillis.set(currentTimeMillis);refreshIdleTimeout();})" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsHoverGesture.tsx");

export default function useControlsHoverGesture() {
  let controlsSpecs;
  let mode;
  let refreshIdleTimeout;
  const context = refreshIdleTimeout.useContext(controlsSpecs(mode[3]));
  const connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  mode = context.mode;
  refreshIdleTimeout = context.refreshIdleTimeout;
  const showControls = context.showControls;
  let obj = connected(mode[4]);
  const sharedValue = obj.useSharedValue(0);
  let items = [connected, mode, controlsSpecs, sharedValue, refreshIdleTimeout, showControls];
  return refreshIdleTimeout.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const items = [closure_6, connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, , , , , ];
    const onUpdate = Gesture.Hover().onUpdate;
    Gesture.Hover();
    items[6] = _mod1705.scheduleOnRN;
    items[7] = showControls;
    items[8] = sharedValue;
    items[9] = 500;
    items[10] = refreshIdleTimeout;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
    function useControlsHoverGestureTsx1() {
      if (_undefined.get()) {
        if (_undefined2.get() === _undefined3.PANEL) {
          if (_undefined4.get().mode === _undefined5.HIDDEN) {
            _undefined6(c6);
          } else {
            const _Date = Date;
            const timestamp = Date.now();
            const obj = _undefined7;
            if (timestamp - _undefined7.get() >= c8) {
              const result = obj.set(timestamp);
              _undefined8();
            }
          }
        }
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
    useControlsHoverGestureTsx1.__closure = items1;
    useControlsHoverGestureTsx1.__workletHash = 12491338829340;
    useControlsHoverGestureTsx1.__initData = tmp2;
    return onUpdate(useControlsHoverGestureTsx1);
  }, items);
};
