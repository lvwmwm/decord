// Module ID: 11378
// Function ID: 11379
// Name: SpotifyProtocolStore
// Dependencies: [504, 584, 2]

// Module 11378 (SpotifyProtocolStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let isRegistered = false;
const Store = get_initializedDefault.Store;
class SpotifyProtocolStore extends Store {
  isProtocolRegistered() {
    return isRegistered;
  }
}
const prototype = SpotifyProtocolStore.prototype;
SpotifyProtocolStore.displayName = "SpotifyProtocolStore";
const obj = {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  }
};
const spotifyProtocolStore = new SpotifyProtocolStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default spotifyProtocolStore;
