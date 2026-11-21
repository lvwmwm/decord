// Module ID: 14888
// Function ID: 14889
// Name: DatagramRecovery
// Dependencies: [559, 2]

// Module 14888 (DatagramRecovery)
import BackoffDefault from "Backoff" /* 559 */;
import size from "module_2" /* 2 */;

let c2 = 120000;
const result = size.fileFinishedImporting("modules/webtransport_datagrams/DatagramRecovery.tsx");
class DatagramRecovery {
  constructor() {
    const merged = Object.assign({ backoff: null, attempts: 0, startedAt: null, stableTimer: null });
    merged[0] = new BackoffDefault(1000, 30000, true);
    new BackoffDefault(1000, 30000, true);
    return merged;
  }
  schedule(arg0) {
    const self = this;
    let closure_0 = arg0;
    this.cancel();
    const nowResult = performance.now();
    if (this.startedAt == null) {
      self.startedAt = nowResult;
    }
    const sum = self.startedAt + c2;
    const tmp4 = self.attempts >= 6 || nowResult >= sum;
    if (!tmp4) {
      self.attempts = self.attempts + 1;
      const backoff = self.backoff;
      if (nowResult + backoff.fail(() => {
        if (performance.now() <= sum) {
          closure_0();
        }
      }) > sum) {
        const backoff2 = self.backoff;
        backoff2.cancel();
      }
    }
  }
  connected() {
    const self = this;
    this.cancel();
    this.stableTimer = setTimeout(() => self.reset(), 30000);
  }
  reset() {
    this.cancel();
    const backoff = this.backoff;
    backoff.succeed();
    this.attempts = 0;
    this.startedAt = null;
  }
  cancel() {
    const self = this;
    const backoff = this.backoff;
    backoff.cancel();
    if (null != this.stableTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.stableTimer);
      self.stableTimer = null;
    }
  }
}
const prototype = DatagramRecovery.prototype;

export default DatagramRecovery;
export const DATAGRAM_RECOVERY_MIN_DELAY_MS = 1000;
export const DATAGRAM_RECOVERY_MAX_DELAY_MS = 30000;
export const DATAGRAM_RECOVERY_MAX_ATTEMPTS = 6;
export const DATAGRAM_RECOVERY_TIME_BUDGET_MS = 120000;
export const DATAGRAM_RECOVERY_STABLE_MS = 30000;
