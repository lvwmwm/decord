// Module ID: 13007
// Function ID: 98986
// Name: BaseTelemetryChannel
// Dependencies: [513, 511, 513]

// Module 13007 (BaseTelemetryChannel)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryChannel.tsx");

export default () => {
  class BaseTelemetryChannel {
    constructor(arg0, arg1) {
      tmp = BaseTelemetryChannel(this, BaseTelemetryChannel);
      this.native = arg0;
      this.channels = arg1;
      return;
    }
  }
  let closure_0 = BaseTelemetryChannel;
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
}();
