// Module ID: 14921
// Function ID: 14922
// Name: DatagramConnection
// Dependencies: [5745, 14922, 14923, 5834, 2]

// Module 14921 (DatagramConnection)
import RTCConnectionEvent from "RTCConnectionEvent" /* 5834 */;
import DatagramEvent from "DatagramEvent" /* 14922 */;
import TypedEventEmitter from "TypedEventEmitter" /* 5745 */;
import size from "module_2" /* 2 */;

const React2 = { Closed: 0, [0]: "Closed", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
class DatagramConnection extends TypedEventEmitter {
  constructor(rtc, userId) {
    let on;
    let onDisconnect;
    const obj = new DatagramConnection(tmp4, tmp3, tmp2, tmp, new.target, this);
    obj.started = false;
    obj.connectTimeout = null;
    obj.closed = false;
    obj.state = Connected.Closed;
    obj.userId = userId;
    obj.rtc = rtc;
    const onWebTransportAck = obj.onWebTransportAck;
    obj.webTransportAck = onWebTransportAck.bind(obj);
    obj.on(obj(14922).DatagramEvent.Connect, () => {
      obj.state = Connected.Connected;
      obj.clearConnectTimeout();
    });
    ({ on, onDisconnect } = obj);
    on(obj(14922).DatagramEvent.Disconnect, onDisconnect.bind(obj));
    const obj2 = obj(14923);
    obj.worker = obj2.createDatagramWorker();
    if (null != obj.worker) {
      obj.worker.onmessage = (data) => {
        const items = [data.data[0], ...data.slice(1)];
        data = data.data;
        obj.emit.apply(items);
      };
    }
    return obj;
  }
  connect() {
    const self = this;
    const tmp = this.started || self.closed;
    if (!tmp) {
      self.started = true;
      self.state = Connecting.Connecting;
      let rtc = self.rtc;
      rtc.on(self(5834).RTCConnectionEvent.WebTransportAck, self.webTransportAck);
      const _setTimeout = setTimeout;
      self.connectTimeout = setTimeout(() => {
        if (self.state === Connecting.Connecting) {
          self.emit(DatagramEvent.DatagramEvent.Timeout);
          const rtc = obj.rtc;
          rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, self.webTransportAck);
          self.emit(DatagramEvent.DatagramEvent.Disconnect);
        }
      }, 10000);
      const rtc2 = self.rtc;
      rtc2.startWebTransport();
    }
  }
  onWebTransportAck(arg0, arg1) {
    const self = this;
    const rtc = this.rtc;
    rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, this.webTransportAck);
    const rtc2 = this.rtc;
    const voiceAddress = rtc2.getVoiceAddress();
    if (null == voiceAddress) {
      self.emit(DatagramEvent.DatagramEvent.MissingAddress);
      self.emit(DatagramEvent.DatagramEvent.Disconnect);
    } else {
      self.emit(DatagramEvent.DatagramEvent.Starting, voiceAddress.address, voiceAddress.port);
      const _HermesInternal = HermesInternal;
      const worker = self.worker;
      if (worker != null) {
        const postMessage = worker.postMessage;
        const items = [DatagramEvent.DatagramCommand.Connect, tmp12, arg1, self.userId];
        postMessage(items);
      }
    }
  }
  clearConnectTimeout() {
    const self = this;
    if (null != this.connectTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.connectTimeout);
      self.connectTimeout = null;
    }
  }
  onDisconnect() {
    this.clearConnectTimeout();
    this.state = closure_2.Closed;
    this.closed = true;
    const rtc = this.rtc;
    rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, this.webTransportAck);
    const worker = this.worker;
    if (worker != null) {
      worker.terminate();
    }
  }
  send(arg0) {
    const substr = [...arguments].slice();
    const worker = this.worker;
    if (worker != null) {
      const items = [arg0];
      const postMessage = worker.postMessage;
      HermesBuiltin.arraySpread(items, substr, 1);
      postMessage(items);
    }
  }
  close() {
    const self = this;
    if (!this.closed) {
      self.closed = true;
      const isConnected = self.isConnected;
      self.clearConnectTimeout();
      self.state = closure_2.Closed;
      const rtc = self.rtc;
      rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, self.webTransportAck);
      const worker = self.worker;
      const tmp3 = require;
      if (isConnected) {
        if (worker != null) {
          const postMessage = worker.postMessage;
          const items = [tmp3(14922).DatagramCommand.Close];
          postMessage(items);
        }
      } else if (worker != null) {
        worker.terminate();
      }
    }
  }
}
Object.defineProperty(DatagramConnection.prototype, "isConnected", {
  get: function isConnected() {
    return this.state === closure_2.Connected;
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/webtransport_datagrams/DatagramConnection.tsx");

export { DatagramConnection };
