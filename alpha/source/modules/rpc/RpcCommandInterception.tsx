// Module ID: 9305
// Function ID: 9306
// Name: RpcCommandInterception
// Dependencies: [2]
// Exports: interceptRpcCommand, setRpcCommandInterceptor

// Module 9305 (RpcCommandInterception)
import size from "module_2" /* 2 */;

let c0 = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(answerFor) {
  let c0 = answerFor;
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
