// Module ID: 15199
// Function ID: 15200
// Name: BitRateStore
// Dependencies: [5700, 504, 584, 2]

// Module 15199 (BitRateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 5700 */;
import size from "module_2" /* 2 */;

let bitrate = Constants.DEFAULT_VOICE_BITRATE;
const Store = get_initializedDefault.Store;
class BitRateStore extends Store {
}
Object.defineProperty(BitRateStore.prototype, "bitrate", {
  get: function bitrate() {
    return bitrate;
  },
  set: undefined
});
BitRateStore.displayName = "BitRateStore";
const obj = {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  }
};
const bitRateStore = new BitRateStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/BitRateStore.tsx");

export default bitRateStore;
