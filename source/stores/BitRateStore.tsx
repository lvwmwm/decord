// Module ID: 4518
// Function ID: 4519
// Name: bitrate
// Dependencies: [4510, 589, 709, 2]

// Module 4518 (bitrate)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import DesktopSources from "DesktopSources" /* 4510 */;

const DEFAULT_VOICE_BITRATE = DesktopSources.DEFAULT_VOICE_BITRATE;
const Store = initializeDefault.Store;
class BitRateStore extends Store {
}
Object.defineProperty(BitRateStore.prototype, "bitrate", {
  get: function bitrate() {
    return DEFAULT_VOICE_BITRATE;
  },
  set: undefined
});
BitRateStore.displayName = "BitRateStore";
const bitRateStore = new BitRateStore(dispatcherDefault, {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  }
});
const result = set.fileFinishedImporting("stores/BitRateStore.tsx");

export default bitRateStore;
