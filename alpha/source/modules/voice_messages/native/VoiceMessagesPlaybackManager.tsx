// Module ID: 14787
// Function ID: 14788
// Name: VoiceMessagesPlaybackManager
// Dependencies: [17, 5081, 2116, 14788, 2002, 584, 5303, 1382, 2]
// Exports: handleVoiceMessageDeleted, pauseCurrentAudioPlayer, playCurrentAudioPlayer

// Module 14787 (VoiceMessagesPlaybackManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import react_nativeDefault from "react-native" /* 5303 */;
import react_nativeDefault2 from "react-native" /* 14788 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;
import size from "module_2" /* 2 */;

const AppState = react_native.AppState;
class VoiceMessagesPlaybackManager extends LifecycleManager {
  constructor() {
    let currentlySelectedChannelId;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.appState = AppState.currentState;
    applyArgumentsResult.handleSetPrefersReducedMotion = function handleSetPrefersReducedMotion(prefersReducedMotion) {
      const obj = react_nativeDefault;
      const result = obj.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
    };
    applyArgumentsResult.handleMessageDelete = function handleMessageDelete(arg0) {
      let channelId;
      let id;
      ({ id, channelId } = arg0);
      if (channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId()) {
        const obj = react_nativeDefault2;
        const result = obj.handleVoiceMessageDeleted(id);
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const obj = react_nativeDefault2;
      obj.pauseCurrentPlayer(false);
    };
    applyArgumentsResult.handleAppStateChanged = function handleAppStateChanged(state) {
      state = state.state;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const appState = require.appState;
        require.appState = state;
        if ("active" === state) {
          if ("active" !== appState) {
            const obj3 = react_nativeDefault2;
            const result = obj3.maybePlayCurrentPlayer();
          }
        }
        const tmp3 = "active" !== state && "active" === appState;
        if (tmp3) {
          const obj2 = react_nativeDefault2;
          obj2.pauseCurrentPlayer(true);
        }
      }
    };
    return applyArgumentsResult;
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("LOGOUT", this.handleLogout);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("LOGOUT", this.handleLogout);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("MESSAGE_DELETE", this.handleMessageDelete);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
    const obj5 = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: AccessibilityStore.rawPrefersReducedMotion };
    const result = this.handleSetPrefersReducedMotion(obj5);
  }
}
const prototype = VoiceMessagesPlaybackManager.prototype;
const voiceMessagesPlaybackManager = new VoiceMessagesPlaybackManager();
let result = size.fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default voiceMessagesPlaybackManager;
export const pauseCurrentAudioPlayer = function pauseCurrentAudioPlayer(arg0) {
  const obj = react_nativeDefault2;
  obj.pauseCurrentPlayer(arg0);
};
export const playCurrentAudioPlayer = function playCurrentAudioPlayer() {
  const obj = react_nativeDefault2;
  const result = obj.maybePlayCurrentPlayer();
};
export const handleVoiceMessageDeleted = function handleVoiceMessageDeleted(id) {
  const obj = react_nativeDefault2;
  const result = obj.handleVoiceMessageDeleted(id);
};
