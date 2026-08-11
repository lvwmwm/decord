// Module ID: 11154
// Function ID: 11155
// Name: isProtocolRegistered
// Dependencies: [589, 709, 2]

// Module 11154 (isProtocolRegistered)
import { Store } from "initialize";

let c0 = false;
class SpotifyProtocolStore extends Store {
}
SpotifyProtocolStore.prototype["isProtocolRegistered"] = function isProtocolRegistered() {
  return c0;
};
SpotifyProtocolStore.displayName = "SpotifyProtocolStore";
const spotifyProtocolStore = new SpotifyProtocolStore(require("dispatcher"), {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  }
});
const result = require("set").fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default spotifyProtocolStore;
