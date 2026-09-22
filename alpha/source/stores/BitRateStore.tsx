// Module ID: 14271
// Function ID: 14272
// Name: BitRateStore
// Dependencies: [4782, 504, 573, 2]

// Module 14271 (BitRateStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4782 */;
import size from "module_2" /* 2 */;

let bitrate = Constants.DEFAULT_VOICE_BITRATE;
const Store = initializeDefault.Store;
class BitRateStore extends Store {
}
Object.defineProperty(BitRateStore.prototype, "bitrate", {
  get: function bitrate() {
    return bitrate;
  },
  set: undefined
});
BitRateStore.displayName = "BitRateStore";
const bitRateStore = new BitRateStore(DispatcherDefault, {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  }
});
const result = size.fileFinishedImporting("stores/BitRateStore.tsx");

export default bitRateStore;
