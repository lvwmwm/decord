// Module ID: 10972
// Function ID: 10973
// Name: ConjureSocketHeartbeat
// Dependencies: [2]

// Module 10972 (ConjureSocketHeartbeat)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/connection/ConjureSocketHeartbeat.tsx");
class ConjureSocketHeartbeat {
  constructor(sendPing, onDead) {
    const merged = Object.assign({ interval: null, expeditedTimeout: null, acked: true, pongSeen: false });
    merged.sendPing = sendPing;
    merged.onDead = onDead;
    return merged;
  }
  start() {
    const self = this;
    this.stop();
    this.acked = true;
    this.pongSeen = false;
    this.interval = setInterval(() => self.beat(), 30000);
    this.beat();
  }
  stop() {
    const self = this;
    if (null != this.interval) {
      const _clearInterval = clearInterval;
      clearInterval(self.interval);
    }
    self.interval = null;
    self.clearExpedited();
  }
  received() {
    this.acked = true;
    this.clearExpedited();
  }
  pong() {
    this.pongSeen = true;
    this.received();
  }
  expedite() {
    const self = this;
    const tmp = null != this.interval && self.pongSeen;
    if (tmp) {
      self.acked = false;
      self.sendPing();
      self.clearExpedited();
      const _setTimeout = setTimeout;
      self.expeditedTimeout = setTimeout(() => {
        self.expeditedTimeout = null;
        const obj = self;
        if (!self.acked) {
          obj.dead();
        }
      }, 5000);
    }
  }
  beat() {
    const self = this;
    if (!this.acked) {
      if (self.pongSeen) {
        if (null == self.expeditedTimeout) {
          self.dead();
        }
      }
    }
    self.acked = false;
    self.sendPing();
  }
  dead() {
    this.stop();
    this.onDead();
  }
  clearExpedited() {
    const self = this;
    if (null != this.expeditedTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.expeditedTimeout);
    }
    self.expeditedTimeout = null;
  }
}
const prototype = ConjureSocketHeartbeat.prototype;

export const CONJURE_HEARTBEAT_INTERVAL_MS = 30000;
export const CONJURE_EXPEDITED_HEARTBEAT_TIMEOUT_MS = 5000;
export { ConjureSocketHeartbeat };
