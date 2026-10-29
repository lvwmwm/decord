// Module ID: 11075
// Function ID: 11076
// Name: PinotMemberNoticeAckStore
// Dependencies: [504, 584, 2]

// Module 11075 (PinotMemberNoticeAckStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let set = new Set();
let _Set1 = set;
const PersistedStore = get_initializedDefault.PersistedStore;
class PinotMemberNoticeAckStoreImpl extends PersistedStore {
  initialize(ackedChannelIds) {
    ackedChannelIds = undefined;
    const _Set = Set;
    if (ackedChannelIds != null) {
      ackedChannelIds = ackedChannelIds.ackedChannelIds;
    }
    if (ackedChannelIds == null) {
      ackedChannelIds = [];
    }
    _Set1 = new _Set(ackedChannelIds);
  }
  getState() {
    const obj = { ackedChannelIds: Array.from(_Set1) };
    return obj;
  }
  isAcked(arg0) {
    return _Set1.has(arg0);
  }
}
const prototype = PinotMemberNoticeAckStoreImpl.prototype;
PinotMemberNoticeAckStoreImpl.displayName = "PinotMemberNoticeAckStore";
PinotMemberNoticeAckStoreImpl.persistKey = "PinotMemberNoticeAckStore";
let obj = {
  PINOT_MEMBER_NOTICE_ACK: function handleAck(channelId) {
    channelId = channelId.channelId;
    if (_Set1.has(channelId)) {
      return false;
    } else {
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, _Set1, 0)] = channelId;
      const self = this;
      const self2 = this;
      _Set1 = new Set(items);
      set = new Set(items);
    }
  }
};
const pinotMemberNoticeAckStoreImpl = new PinotMemberNoticeAckStoreImpl(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/pinot/PinotMemberNoticeAckStore.tsx");

export default pinotMemberNoticeAckStoreImpl;
