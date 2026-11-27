// Module ID: 15103
// Function ID: 15104
// Name: DatagramConnectionRecovery
// Dependencies: [15104, 15101, 2]

// Module 15103 (DatagramConnectionRecovery)
import DatagramEvent from "DatagramEvent" /* 15101 */;
import DatagramRecoveryDefault from "DatagramRecovery" /* 15104 */;
import size from "module_2" /* 2 */;

let c1;

const result = size.fileFinishedImporting("modules/webtransport_datagrams/DatagramConnectionRecovery.tsx");
class DatagramConnectionRecovery {
  constructor(acquire, onEmpty) {
    let obj = Object.create(new.target.prototype);
    const tmp2 = new DatagramRecoveryDefault();
    obj.recovery = tmp2;
    obj.subscribers = new Set();
    obj.lease = null;
    obj.detach = null;
    obj.started = false;
    obj.closed = false;
    obj.start = function start() {
      if (!obj.closed) {
        const tmp3 = tmp2;
        if (0 !== obj.subscribers.size) {
          if (null == obj.lease) {
            obj.started = true;
            const acquireResult = obj.acquire();
            obj = acquireResult;
            obj.lease = acquireResult;
            const isConnected = acquireResult.connection.isConnected;
            function connect() {
              c1 = true;
              const recovery = obj.recovery;
              recovery.connected();
            }
            function disconnect() {
              if (acquireResult.lease === acquireResult) {
                const recovery = tmp3.recovery;
                recovery.cancel();
                const detach = tmp3.detach;
                if (detach != null) {
                  detach();
                }
                obj.detach = null;
                obj.lease = null;
                acquireResult.release();
                const items = [];
                HermesBuiltin.arraySpread(items, obj.subscribers, 0);
                for (const item10018 of items) {
                  let obj2 = item10018;
                  let subscribers = obj.subscribers;
                  if (subscribers.has(item10018)) {
                    let onDisconnectResult = obj2.onDisconnect(c1);
                  }
                  continue;
                }
                acquireResult.scheduleRecovery();
              }
            }
            obj.detach = () => {
              const connection = obj.connection;
              connection.off(DatagramEvent.DatagramEvent.Connect, connect);
              const connection2 = obj.connection;
              connection2.off(DatagramEvent.DatagramEvent.Disconnect, disconnect);
            };
            let connection2 = acquireResult.connection;
            connection2.on(obj(dependencyMap[1]).DatagramEvent.Connect, connect);
            const connection3 = acquireResult.connection;
            connection3.on(obj(dependencyMap[1]).DatagramEvent.Disconnect, disconnect);
            let items = [];
            HermesBuiltin.arraySpread(items, obj.subscribers, 0);
            for (const item10010 of items) {
              let obj2 = item10010;
              let subscribers = obj.subscribers;
              if (subscribers.has(item10010)) {
                let onConnectionResult = obj2.onConnection(acquireResult.connection);
              }
              continue;
            }
            if (obj.lease === acquireResult) {
              let tmp11 = isConnected;
              if (tmp11) {
                connect();
              }
              try {
                let connection = acquireResult.connection;
                connection.connect();
              } catch (err) {
                disconnect();
              }
            }
          }
        }
      }
    };
    obj.acquire = acquire;
    obj.onEmpty = onEmpty;
    new Set();
    return obj;
  }
  subscribe(onConnection) {
    const self = this;
    let closure_1 = onConnection;
    let subscribers = this.subscribers;
    subscribers.add(onConnection);
    if (null != this.lease) {
      onConnection.onConnection(self.lease.connection);
    } else if (!self.started) {
      self.start();
    }
    let c0 = false;
    let obj = {
      retry() {
        const closed = c0 || self.closed || null != self.lease;
        if (!closed) {
          const recovery = self.recovery;
          recovery.cancel();
          self.start();
        }
      },
      release() {
        const tmp = c0;
        if (!tmp) {
          c0 = true;
          const subscribers = self.subscribers;
          subscribers.delete(onConnection);
          const obj = self;
          if (0 === self.subscribers.size) {
            obj.close();
          }
        }
      }
    };
    return obj;
  }
  close() {
    const self = this;
    if (!this.closed) {
      self.closed = true;
      const recovery = self.recovery;
      recovery.cancel();
      const detach = self.detach;
      if (detach != null) {
        detach();
      }
      self.detach = null;
      const lease = self.lease;
      if (lease != null) {
        lease.release();
      }
      self.lease = null;
      const subscribers = self.subscribers;
      subscribers.clear();
      self.onEmpty();
    }
  }
  scheduleRecovery() {
    const self = this;
    const closed = this.closed || 0 === self.subscribers.size;
    if (!closed) {
      if (null == self.lease) {
        const recovery = self.recovery;
        recovery.schedule(self.start);
      }
    }
  }
}
const prototype = DatagramConnectionRecovery.prototype;

export default DatagramConnectionRecovery;
