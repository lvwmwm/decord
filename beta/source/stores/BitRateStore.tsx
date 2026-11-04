// Module ID: 15884
// Function ID: 15885
// Name: BitRateStore
// Dependencies: [5768, 504, 572, 2]

// Module 15884 (BitRateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 5768 */;
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
