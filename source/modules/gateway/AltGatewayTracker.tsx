// Module ID: 12568
// Function ID: 97237
// Name: AltGatewayTracker
// Dependencies: [6, 7, 12569, 2]

// Module 12568 (AltGatewayTracker)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let closure_3 = require("getCachedUseAltGateway")();
const tmp2 = (() => {
  class AltGatewayTracker {
    constructor() {
      tmp = AltGatewayTracker(this, AltGatewayTracker);
      this.failures = 0;
      this.fallbackTripped = false;
      return;
    }
  }
  let obj = {
    key: "shouldUseAltGateway",
    value() {
      let tmp = !this.fallbackTripped;
      if (tmp) {
        tmp = null != outer1_2;
      }
      if (tmp) {
        tmp = outer1_3;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isAssignedToAltGateway",
    value() {
      return null != outer1_2 && outer1_3;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDidFallBack",
    value() {
      return this.fallbackTripped;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAltGatewayUrl",
    value() {
      let tmp = null;
      if (this.shouldUseAltGateway()) {
        tmp = outer1_2;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "recordSuccess",
    value() {
      this.failures = 0;
    }
  };
  items[5] = {
    key: "recordFailure",
    value() {
      const self = this;
      if (this.shouldUseAltGateway()) {
        self.failures = self.failures + 1;
        if (self.failures >= 3) {
          self.fallbackTripped = true;
        }
      }
    }
  };
  items[6] = {
    key: "reset",
    value() {
      this.failures = 0;
      this.fallbackTripped = false;
    }
  };
  return callback(AltGatewayTracker, items);
})();
const result = require("getCachedUseAltGateway").fileFinishedImporting("modules/gateway/AltGatewayTracker.tsx");

export default tmp2;
