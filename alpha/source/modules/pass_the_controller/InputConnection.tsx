// Module ID: 14882
// Function ID: 14883
// Name: InputConnection
// Dependencies: [5682, 3, 14883, 14885, 14889, 2]

// Module 14882 (InputConnection)
import LoggerDefault from "Logger" /* 3 */;
import DatagramEvent from "DatagramEvent" /* 14885 */;
import InputEvent from "InputEvent" /* 14889 */;
import TypedEventEmitter from "TypedEventEmitter" /* 5682 */;
import size from "module_2" /* 2 */;

let _instance_members_initializer_InputConnection_;

_instance_members_initializer_InputConnection_ = function() {
  this.detach = [];
  this.logger = new LoggerDefault("InputConnection");
  this.hosting = false;
  this.closed = false;
  new LoggerDefault("InputConnection");
};
class InputConnection extends TypedEventEmitter {
  constructor(rTCConnection, id) {
    let connected;
    let failure;
    let starting;
    let timeout;
    let tmp;
    const obj = new failure(tmp4, tmp3, tmp2, tmp);
    timeout();
    const obj2 = connected(starting[2]);
    obj.lease = obj2.acquireDatagramConnection(rTCConnection, id);
    obj.transport = obj.lease.connection;
    connected = function connected() {
      return obj.setHosting(obj.hosting);
    };
    let transport = obj.transport;
    transport.on(connected(starting[3]).DatagramEvent.Connect, connected);
    const detach = obj.detach;
    detach.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Connect, connected);
    });
    obj.on(connected(starting[4]).InputEvent.Log, (arg0) => {
      const logger = obj.logger;
      return logger.log(arg0);
    });
    const values = Object.values(connected(starting[4]).InputEvent);
    for (const item10049 of values) {
      let forwardResult = obj.forward(item10049);
      continue;
    }
    function missingAddress() {
      const logger = obj.logger;
      return logger.info("Failed to get SFU address");
    }
    starting = function starting(arg0, arg1) {
      const logger = obj.logger;
      return logger.info("Starting WebTransport connection to " + arg0 + ":" + arg1);
    };
    failure = function failure(arg0, arg1) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = arg0;
      }
      const logger = obj.logger;
      return logger.log(tmp);
    };
    timeout = function timeout() {
      const logger = obj.logger;
      return logger.info("Timed out connecting");
    };
    function readStarted(arg0) {
      const emit = obj.emit;
      return emit(InputEvent.InputEvent.Log, "awaiting read with size " + arg0);
    }
    const transport2 = obj.transport;
    transport2.on(connected(starting[3]).DatagramEvent.Failure, failure);
    const transport3 = obj.transport;
    transport3.on(connected(starting[3]).DatagramEvent.Timeout, timeout);
    const transport4 = obj.transport;
    transport4.on(connected(starting[3]).DatagramEvent.ReadStarted, readStarted);
    const detach1 = obj.detach;
    detach1.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Failure, failure);
    });
    const detach2 = obj.detach;
    detach2.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Timeout, timeout);
    });
    const detach3 = obj.detach;
    detach3.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.ReadStarted, readStarted);
    });
    const transport5 = obj.transport;
    transport5.on(connected(starting[3]).DatagramEvent.MissingAddress, missingAddress);
    const transport6 = obj.transport;
    transport6.on(connected(starting[3]).DatagramEvent.Starting, starting);
    const detach4 = obj.detach;
    detach4.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.MissingAddress, missingAddress);
    });
    const detach5 = obj.detach;
    detach5.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Starting, starting);
    });
    return obj;
  }
  forward(arg0) {
    const self = this;
    let closure_1 = arg0;
    function listener() {
      const items = [closure_1, ...HermesBuiltin.copyRestArgs()];
      return self.emit.apply(items);
    }
    let transport = this.transport;
    transport.on(arg0, listener);
    const detach = this.detach;
    detach.push(() => {
      const transport = self.transport;
      return transport.off(closure_1, listener);
    });
  }
  connect() {
    const transport = this.transport;
    transport.connect();
  }
  setHosting(hosting) {
    const self = this;
    if (!this.closed) {
      self.hosting = hosting;
      const transport = self.transport;
      transport.send(InputEvent.InputCommand.SetHosting, hosting);
    }
  }
  sendKey(sessionId, arg1, arg2) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendKey, sessionId, arg1, arg2);
  }
  sendMouseWheel(sessionId, arg1) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendMouseWheel, sessionId, arg1);
  }
  sendMouseMove(sessionId, movementX, movementY) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendMouseMove, sessionId, movementX, movementY);
  }
  sendMouseButton(sessionId, button, arg2) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendMouseButton, sessionId, button, arg2);
  }
  sendControllerButton(sessionId, item, flag) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendControllerButton, sessionId, item, flag);
  }
  sendControllerStick(sessionId, arg1, max2Result, bound) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendControllerStick, sessionId, arg1, max2Result, bound);
  }
  sendControllerTrigger(sessionId, arg1, max4Result) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendControllerTrigger, sessionId, arg1, max4Result);
  }
  sendControllerPlug(sessionId, arg1) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendControllerPlug, sessionId, arg1);
  }
  sendGrab(hostAsBigInt, sessionId) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendGrab, hostAsBigInt, sessionId);
  }
  sendGrabAllow(holderSessionId) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendGrabAllow, holderSessionId);
  }
  sendDrop(holderSessionId) {
    const transport = this.transport;
    transport.send(InputEvent.InputCommand.SendDrop, holderSessionId);
  }
  close() {
    this.closed = true;
    const detach = this.detach;
    const spliceResult = detach.splice(0);
    for (const item10010 of spliceResult) {
      let item10010Result = item10010();
      continue;
    }
    const lease = this.lease;
    lease.release();
  }
}
Object.defineProperty(InputConnection.prototype, "isConnected", {
  get: function isConnected() {
    return this.transport.isConnected;
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/pass_the_controller/InputConnection.tsx");

export { InputConnection };
