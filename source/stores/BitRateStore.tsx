// Module ID: 4413
// Function ID: 4414
// Name: bitrate
// Dependencies: [4405, 589, 709, 2]

// Module 4413 (bitrate)
import { DEFAULT_VOICE_BITRATE } from "DesktopSources";
import { Store } from "initialize";

class BitRateStore extends Store {
}
Object.defineProperty(BitRateStore.prototype, "bitrate", {
  get: function bitrate() {
    return DEFAULT_VOICE_BITRATE;
  },
  set: undefined
});
BitRateStore.displayName = "BitRateStore";
const bitRateStore = new BitRateStore(require("dispatcher"), {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/BitRateStore.tsx");

export default bitRateStore;
