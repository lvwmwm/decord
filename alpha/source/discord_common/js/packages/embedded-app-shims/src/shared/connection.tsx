// Module ID: 18515
// Function ID: 18516
// Name: connection
// Dependencies: [18512, 18513, 2]
// Exports: createChildConnector, offerOverWindow

// Module 18515 (connection)
import protocol from "protocol" /* 18512 */;
import Safe4 from "Safe" /* 18513 */;
import size from "module_2" /* 2 */;

let closure_3;

const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/connection.tsx");

export function createChildConnector(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c2 = null;
  let c3 = null;
  let obj = {
    offer(listen) {
      let obj = closure_3;
      if (closure_3 != null) {
        obj.close();
      }
      closure_3 = listen;
      listen.listen((type) => {
        if (type.type === protocol.ChildToParentEvent.CONNECTION_ACCEPTED) {
          if (c3 === listen) {
            const obj = c2;
            if (c2 != null) {
              obj.close();
            }
            c2 = tmp6;
            c3 = null;
            closure_1();
          }
        } else if (c2 === listen) {
          listen(type);
        }
      });
    },
    dispatch(arg0) {
      const obj = c2;
      if (c2 != null) {
        obj.post(arg0);
      }
    },
    close() {
      const obj = c2;
      if (c2 != null) {
        obj.close();
      }
      const obj2 = c3;
      if (c3 != null) {
        obj2.close();
      }
      c2 = null;
      c3 = null;
    }
  };
  return obj;
}
export const offerOverWindow = function offerOverWindow(arg0, arg1, nonce, fn) {
  let port1;
  const messageChannel = new port1(18513).Safe.Constructor.MessageChannel();
  let Safe = port1(18513).Safe;
  const MessageChannelResult = Safe.MessageChannel(messageChannel);
  port1 = MessageChannelResult.port1;
  const port2 = MessageChannelResult.port2;
  const obj = {
    post(arg0) {
      const Safe = Safe4.Safe;
      const MessagePortResult = Safe.MessagePort(port1);
      MessagePortResult.postMessage(arg0);
    },
    listen(arg0) {
      let closure_0 = arg0;
      let Safe = Safe4.Safe;
      Safe.MessagePort(port1).onmessage = (arg0) => {
        const Safe = port1(closure_2_1[1]).Safe;
        return closure_0(Safe.MessageEvent(arg0).data);
      };
    },
    close() {
      const Safe = Safe4.Safe;
      const MessagePortResult = Safe.MessagePort(port1);
      MessagePortResult.close();
    }
  };
  fn(obj);
  const Safe2 = port1(18513).Safe;
  const postMessage = Safe2.Window(arg0).postMessage;
  const WindowResult = Safe2.Window(arg0);
  const obj2 = { [closure_0(closure_1[0]).SHIM_MESSAGE_KEY]: "connection_open", nonce };
  const Safe3 = port1(18513).Safe;
  const items = [port2];
  postMessage(obj2, arg1, Safe3.asIterable(items));
};
