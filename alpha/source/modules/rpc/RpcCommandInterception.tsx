// Module ID: 11421
// Function ID: 11422
// Name: RpcCommandInterception
// Dependencies: [2]
// Exports: interceptRpcCommand, setRpcCommandInterceptor

// Module 11421 (RpcCommandInterception)
import size from "module_2" /* 2 */;

let c0 = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(answerFor) {
  let c0 = answerFor;
}
export const interceptRpcCommand = function interceptRpcCommand(arg0) {
  if (null == _null) {
    return null;
  } else {
    try {
      return _null(arg0);
    } catch (err) {
      return null;
    }
  }
};
