// Module ID: 9484
// Function ID: 9485
// Name: RpcCommandInterception
// Dependencies: [2]
// Exports: interceptRpcCommand, setRpcCommandInterceptor

// Module 9484 (RpcCommandInterception)
import size from "module_2" /* 2 */;

let c0 = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(arg0) {
  let c0 = arg0;
}
export function interceptRpcCommand(arg0) {
  if (null == _null) {
    return null;
  } else {
    try {
      return _null(arg0);
    } catch (err) {
      return null;
    }
  }
}
