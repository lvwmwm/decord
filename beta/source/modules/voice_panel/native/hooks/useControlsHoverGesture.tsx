// Module ID: 16920
// Function ID: 16921
// Name: useControlsHoverGesture
// Dependencies: [19, 11755, 11753, 11754, 4566, 6073, 2]
// Exports: default

// Module 16920 (useControlsHoverGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let closure_6 = { code: "function useControlsHoverGestureTsx1(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,lastIdleRefreshMillis,IDLE_REFRESH_DEBOUNCE_MILLIS,refreshIdleTimeout}=this.__closure;if(!connected.get())return;if(mode.get()!==VoicePanelModes.PANEL)return;const controlsHidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;if(controlsHidden){runOnJS(showControls)();return;}const currentTimeMillis=Date.now();if(currentTimeMillis-lastIdleRefreshMillis.get()<IDLE_REFRESH_DEBOUNCE_MILLIS)return;lastIdleRefreshMillis.set(currentTimeMillis);refreshIdleTimeout();}" };
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
  const items = [connected, mode, controlsSpecs, sharedValue, refreshIdleTimeout, showControls];
  return refreshIdleTimeout.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const fn = function o() {
      if (closure_1_0.get()) {
        if (closure_1_2.get() === showControls.PANEL) {
          if (controlsSpecs.get().mode === sharedValue.HIDDEN) {
            const obj2 = connected(mode[4]);
            obj2.runOnJS(closure_1_4)();
          } else {
            const _Date = Date;
            const timestamp = Date.now();
            const obj = closure_1_5;
            if (timestamp - closure_1_5.get() >= 500) {
              const result = obj.set(timestamp);
              refreshIdleTimeout();
            }
          }
        }
      }
    };
    const HoverResult = Gesture.Hover();
    let obj = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport.runOnJS, showControls, lastIdleRefreshMillis: sharedValue, IDLE_REFRESH_DEBOUNCE_MILLIS: 500, refreshIdleTimeout };
    fn.__closure = obj;
    fn.__workletHash = 15224942407492;
    fn.__initData = __initData;
    return HoverResult.onUpdate(fn);
  }, items);
};
