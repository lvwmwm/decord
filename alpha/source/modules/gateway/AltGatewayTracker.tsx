// Module ID: 13444
// Function ID: 13445
// Name: AltGatewayTracker
// Dependencies: [13445, 2]

// Module 13444 (AltGatewayTracker)
import react_nativeDefault from "react-native" /* 13445 */;
import size from "module_2" /* 2 */;

let closure_1 = react_nativeDefault();
const result = size.fileFinishedImporting("modules/gateway/AltGatewayTracker.tsx");
class AltGatewayTracker {
  constructor() {
    return Object.assign({ failures: 0, fallbackTripped: false });
  }
  shouldUseAltGateway() {
    return !this.fallbackTripped && null != GATEWAY_ALT_ENDPOINT && closure_1;
  }
  isAssignedToAltGateway() {
    return null != GATEWAY_ALT_ENDPOINT && closure_1;
  }
  getDidFallBack() {
    return this.fallbackTripped;
  }
  getAltGatewayUrl() {
    let tmp = null;
    if (this.shouldUseAltGateway()) {
      tmp = GATEWAY_ALT_ENDPOINT;
    }
    return tmp;
  }
  recordSuccess() {
    this.failures = 0;
  }
  recordFailure() {
    const self = this;
    if (this.shouldUseAltGateway()) {
      self.failures = self.failures + 1;
      if (self.failures >= 3) {
        self.fallbackTripped = true;
      }
    }
  }
  reset() {
    this.failures = 0;
    this.fallbackTripped = false;
  }
}
const prototype = AltGatewayTracker.prototype;

export default AltGatewayTracker;
