// Module ID: 16110
// Function ID: 16111
// Name: InputConnection
// Dependencies: [6099, 3, 16111, 16112, 6189, 2]

// Module 16110 (InputConnection)
import LoggerDefault from "Logger" /* 3 */;
import RTCConnectionEvent from "RTCConnectionEvent" /* 6189 */;
import InputEvent from "InputEvent" /* 16111 */;
import TypedEventEmitter from "TypedEventEmitter" /* 6099 */;
import size from "module_2" /* 2 */;

const _false = { Closed: 0, [0]: "Closed", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
class InputConnection extends TypedEventEmitter {
  constructor(rTCConnection, id) {
    let on;
    let on2;
    let onDisconnect;
    let onLogMessage;
    const obj = new InputConnection(tmp4, tmp3, tmp2, tmp, new.target);
    obj.state = Connected.Closed;
    obj.userId = id;
    obj.logger = new LoggerDefault("InputConnection");
    obj.rtc = rTCConnection;
    const onWebTransportAck = obj.onWebTransportAck;
    new LoggerDefault("InputConnection");
    obj.webTransportAck = onWebTransportAck.bind(obj);
    obj.on(obj(16111).InputEvent.Connect, () => {
      obj.state = Connected.Connected;
    });
    ({ on, onDisconnect } = obj);
    on(obj(16111).InputEvent.Disconnect, onDisconnect.bind(obj));
    ({ on: on2, onLogMessage } = obj);
    on2(obj(16111).InputEvent.Log, onLogMessage.bind(obj));
    const obj2 = obj(16112);
    obj.worker = obj2.createInputWorker();
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
    this.state = Connecting.Connecting;
    let rtc = this.rtc;
    rtc.on(self(6189).RTCConnectionEvent.WebTransportAck, this.webTransportAck);
    const rtc2 = this.rtc;
    rtc2.startWebTransport();
    const timerId = setTimeout(() => {
      if (self.state === Connecting.Connecting) {
        const logger = obj.logger;
        logger.info("Timed out connecting");
        const rtc = obj.rtc;
        rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, self.webTransportAck);
        self.emit(InputEvent.InputEvent.Disconnect);
      }
    }, 10000);
  }
  onWebTransportAck(arg0, arg1) {
    const self = this;
    const rtc = this.rtc;
    rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, this.webTransportAck);
    const rtc2 = this.rtc;
    const voiceAddress = rtc2.getVoiceAddress();
    if (null == voiceAddress) {
      const logger = self.logger;
      logger.info("Failed to get SFU address");
      self.emit(InputEvent.InputEvent.Disconnect);
    } else {
      const _HermesInternal = HermesInternal;
      const logger2 = self.logger;
      const _HermesInternal2 = HermesInternal;
      const combined = "https://" + voiceAddress.address + ":" + voiceAddress.port + "/?token=" + arg0;
      logger2.info("Starting WebTransport connection to " + voiceAddress.address + ":" + voiceAddress.port);
      const worker = self.worker;
      if (worker != null) {
        const postMessage = worker.postMessage;
        const items = [InputEvent.InputCommand.Connect, combined, arg1, self.userId];
        postMessage(items);
      }
    }
  }
  onLogMessage(arg0) {
    const logger = this.logger;
    logger.log(arg0);
  }
  onDisconnect() {
    this.state = closure_3.Closed;
    const worker = this.worker;
    if (worker != null) {
      worker.terminate();
    }
  }
  setHosting(arg0) {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.SetHosting, arg0];
      postMessage(items);
    }
  }
  sendKey(sessionId, arg1, arg2) {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.SendKey, sessionId, arg1, arg2];
      postMessage(items);
    }
  }
  sendMouseMove(sessionId, movementX, movementY) {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.SendMouseMove, sessionId, movementX, movementY];
      postMessage(items);
    }
  }
  sendMouseButton(sessionId, button, arg2) {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.SendMouseButton, sessionId, button, arg2];
      postMessage(items);
    }
  }
  sendGrab(hostAsBigInt, sessionId) {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.SendGrab, hostAsBigInt, sessionId];
      postMessage(items);
    }
  }
  sendGrabAllow(holderSessionId) {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.SendGrabAllow, holderSessionId];
      postMessage(items);
    }
  }
  sendDrop(holderSessionId) {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.SendDrop, holderSessionId];
      postMessage(items);
    }
  }
  close() {
    const worker = this.worker;
    if (worker != null) {
      const postMessage = worker.postMessage;
      const items = [InputEvent.InputCommand.Close];
      postMessage(items);
    }
  }
}
Object.defineProperty(InputConnection.prototype, "isConnected", {
  get: function isConnected() {
    return this.state === closure_3.Connected;
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/pass_the_controller/InputConnection.tsx");

export { InputConnection };
