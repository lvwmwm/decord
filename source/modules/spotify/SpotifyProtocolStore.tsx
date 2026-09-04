// Module ID: 11682
// Function ID: 11683
// Name: isProtocolRegistered
// Dependencies: [586, 706, 2]

// Module 11682 (isProtocolRegistered)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let c0 = false;
const Store = initializeDefault.Store;
class SpotifyProtocolStore extends Store {
}
SpotifyProtocolStore.prototype["isProtocolRegistered"] = function isProtocolRegistered() {
  return c0;
};
SpotifyProtocolStore.displayName = "SpotifyProtocolStore";
const spotifyProtocolStore = new SpotifyProtocolStore(dispatcherDefault, {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  }
});
const result = require("set").fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default spotifyProtocolStore;
