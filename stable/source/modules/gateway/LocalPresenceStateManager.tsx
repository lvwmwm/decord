// Module ID: 13972
// Function ID: 13973
// Name: LocalPresenceStateManager
// Dependencies: [5759, 13973, 13974, 2]

// Module 13972 (LocalPresenceStateManager)
import rateLimitDefault from "rateLimit" /* 13974 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5759 */;
import StateManager from "StateManager" /* 13973 */;
import size from "module_2" /* 2 */;

class LocalPresenceStateManager extends StateManager {
  constructor(socket) {
    const tmp3 = new LocalPresenceStateManager(false, tmp2, tmp, new.target, this);
    tmp3.switchingAccounts = false;
    const emitPresenceUpdate = tmp3.emitPresenceUpdate;
    const tmp4 = rateLimitDefault;
    tmp3.didCommit = tmp4(5, 20000, emitPresenceUpdate.bind(tmp3));
    tmp3.socket = socket;
    return tmp3;
  }
  getInitialState() {
    return SelfPresenceStore.getLocalPresence();
  }
  getNextState() {
    return SelfPresenceStore.getLocalPresence();
  }
  shouldCommit() {
    const socket = this.socket;
    return socket.isSessionEstablished();
  }
  emitPresenceUpdate(state) {
    const socket = this.socket;
    socket.presenceUpdate(state.status, state.since, state.activities, state.afk);
  }
  handleConnectionOpen() {
    this.update({}, !this.switchingAccounts);
    this.switchingAccounts = false;
  }
  handleAccountSwitch() {
    this.switchingAccounts = true;
    this.reset();
    this.emitPresenceUpdate(this.getState());
  }
}
const prototype = LocalPresenceStateManager.prototype;
const result = size.fileFinishedImporting("modules/gateway/LocalPresenceStateManager.tsx");

export default LocalPresenceStateManager;
