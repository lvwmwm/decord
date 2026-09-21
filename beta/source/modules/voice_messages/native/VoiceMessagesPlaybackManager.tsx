// Module ID: 14825
// Function ID: 14826
// Name: VoiceMessagesPlaybackManager
// Dependencies: [17, 4750, 2099, 1368, 14826, 1986, 577, 5114, 2]
// Exports: handleVoiceMessageDeleted, pauseCurrentAudioPlayer, playCurrentAudioPlayer

// Module 14825 (VoiceMessagesPlaybackManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5114 */;
import NativeAudioPlayerModuleDefault from "NativeAudioPlayerModule" /* 14826 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;
import size from "module_2" /* 2 */;

({ AppState: c3, NativeModules: closure_4 } = get_ActivityIndicator);
class VoiceMessagesPlaybackManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      const result = NativeDeviceAccessibilityModuleDefault.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(id) {
      id = id.id;
      if (id.channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        if (obj.isAndroid()) {
          const result = NativeAudioPlayerModuleDefault.handleVoiceMessageDeleted(id);
        } else {
          const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
          if (DCDAudioPlayerManager != null) {
            const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
          }
        }
        obj = applyArgumentsResult(1368);
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      if (obj.isAndroid()) {
        NativeAudioPlayerModuleDefault.pauseCurrentPlayer(false);
      } else {
        const DCDAudioPlayerManager = closure_1_4.DCDAudioPlayerManager;
        if (DCDAudioPlayerManager != null) {
          DCDAudioPlayerManager.pauseCurrentPlayer(false);
        }
      }
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      if (obj.isAndroid()) {
        const appState = applyArgumentsResult.appState;
        applyArgumentsResult.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            if (tmpResult.isAndroid()) {
              const result = NativeAudioPlayerModuleDefault.maybePlayCurrentPlayer();
            } else {
              const DCDAudioPlayerManager2 = React4.DCDAudioPlayerManager;
              if (DCDAudioPlayerManager2 != null) {
                const result1 = DCDAudioPlayerManager2.maybePlayCurrentPlayer();
              }
            }
            tmpResult = tmp(1368);
          }
        }
        if (tmp4) {
          if (tmpResult2.isAndroid()) {
            NativeAudioPlayerModuleDefault.pauseCurrentPlayer(true);
          } else {
            const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
            if (DCDAudioPlayerManager != null) {
              DCDAudioPlayerManager.pauseCurrentPlayer(true);
            }
          }
          tmpResult2 = tmp(1368);
        }
        tmp4 = "active" !== state && "active" === appState;
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceMessagesPlaybackManager.prototype;
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
  DispatcherDefault.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
  DispatcherDefault.unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  DispatcherDefault.unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
};
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const subscription1 = DispatcherDefault.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
  const subscription2 = DispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
  const subscription3 = DispatcherDefault.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  const result = this.handleSetPrefersReducedMotion({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: AccessibilityStore.rawPrefersReducedMotion });
};
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  if (obj.isAndroid()) {
    NativeAudioPlayerModuleDefault.pauseCurrentPlayer(arg0);
  } else {
    const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  if (obj.isAndroid()) {
    const result = NativeAudioPlayerModuleDefault.maybePlayCurrentPlayer();
  } else {
    const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  if (obj.isAndroid()) {
    const result = NativeAudioPlayerModuleDefault.handleVoiceMessageDeleted(id);
  } else {
    const DCDAudioPlayerManager = React4.DCDAudioPlayerManager;
    if (DCDAudioPlayerManager != null) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(id);
    }
  }
};
