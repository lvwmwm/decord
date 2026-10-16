// Module ID: 10960
// Function ID: 10961
// Name: RpcCommandInterception
// Dependencies: [2]
// Exports: interceptRpcCommand, setRpcCommandInterceptor

// Module 10960 (RpcCommandInterception)
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
