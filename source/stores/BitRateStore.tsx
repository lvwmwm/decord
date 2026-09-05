// Module ID: 13995
// Function ID: 13996
// Name: bitrate
// Dependencies: [4585, 504, 573, 2]

// Module 13995 (bitrate)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import DesktopSources from "DesktopSources" /* 4585 */;

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
