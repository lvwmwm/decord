// Module ID: 12454
// Function ID: 95081
// Name: AltGatewayTracker
// Dependencies: []

// Module 12454 (AltGatewayTracker)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2])();
const tmp2 = () => {
  class AltGatewayTracker {
    constructor() {
      tmp = AltGatewayTracker(this, AltGatewayTracker);
      this.failures = 0;
      this.fallbackTripped = false;
      return;
    }
  }
  let closure_0 = AltGatewayTracker;
  let obj = {
    key: "shouldUseAltGateway",
    value() {
      let tmp = !this.fallbackTripped;
      if (tmp) {
        tmp = null != closure_2;
      }
      if (tmp) {
        tmp = closure_3;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isAssignedToAltGateway",
    value() {
      return null != closure_2 && closure_3;
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
        tmp = closure_2;
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/gateway/AltGatewayTracker.tsx");

export default tmp2;
