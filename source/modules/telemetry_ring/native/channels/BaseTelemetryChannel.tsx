// Module ID: 13121
// Function ID: 101142
// Name: BaseTelemetryChannel
// Dependencies: [6, 7, 2]

// Module 13121 (BaseTelemetryChannel)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class BaseTelemetryChannel {
    constructor(arg0, arg1) {
      tmp = BaseTelemetryChannel(this, BaseTelemetryChannel);
      this.native = arg0;
      this.channels = arg1;
      return;
    }
  }
  let obj = {
    key: "append",
    value(arg0, arg1, arg2, arg3) {
      let timestamp = arg3;
      const self = this;
      if (null == arg3) {
        const _Date = Date;
        timestamp = Date.now();
      }
      let tmp3 = null;
      if (null != arg2) {
        tmp3 = arg2;
      }
      let tmp4 = null;
      if (null != arg1) {
        tmp4 = arg1;
      }
      const native = self.native;
      native.append(arg0, timestamp, tmp3, tmp4, self.channels);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "snapshot",
    value(arg0, arg1, arg2) {
      const native = this.native;
      return native.snapshot(this.channels, arg0, arg1, arg2);
    }
  };
  items[1] = obj;
  obj = {
    key: "clearAll",
    value() {
      const native = this.native;
      native.clear();
    }
  };
  items[2] = obj;
  return callback(BaseTelemetryChannel, items);
})();
const result = require("set").fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryChannel.tsx");

export default tmp2;
