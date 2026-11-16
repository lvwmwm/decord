// Module ID: 1732
// Function ID: 1733
// Name: installRemoteFunctionUnpacker
// Dependencies: []
// Exports: installRemoteFunctionUnpacker

// Module 1732 (installRemoteFunctionUnpacker)
let tmp2;
const items = [{ code: "(function installRemoteFunctionUnpacker_Pnpm_remoteFunctionUnpackerNativeTs1(){function remoteFunctionUnpacker(remoteFunctionName){remoteFunctionName=remoteFunctionName?remoteFunctionName:'anonymous';const fun=function installRemoteFunctionUnpacker_Pnpm_remoteFunctionUnpackerNativeTs1(){throw new Error(\"[Worklets] Tried to synchronously call a Remote Function. Called \\\"\"+remoteFunctionName+\"\\\" on the \"+globalThis.__RUNTIME_NAME+\" Runtime.\\nSee https://docs.swmansion.com/react-native-worklets/docs/guides/troubleshooting#tried-to-synchronously-call-a-remote-function for more details.\");};fun.__remoteFunction=true;return fun;}globalThis.__remoteFunctionUnpacker=remoteFunctionUnpacker;})" }];
[tmp2] = items;
function installRemoteFunctionUnpacker() {
  globalThis.__remoteFunctionUnpacker = function remoteFunctionUnpacker(arg0) {
    const str = arg0 || "anonymous";
    function remoteFunctionGuard() {
      const error = new Error("[Worklets] Tried to synchronously call a Remote Function. Called \"" + str + "\" on the " + globalThis.__RUNTIME_NAME + " Runtime.\nSee https://docs.swmansion.com/react-native-worklets/docs/guides/troubleshooting#tried-to-synchronously-call-a-remote-function for more details.");
      throw error;
    }
    remoteFunctionGuard.__remoteFunction = true;
    return remoteFunctionGuard;
  };
}
installRemoteFunctionUnpacker.__workletHash = 11832818407617;
installRemoteFunctionUnpacker.__initData = tmp2;

export { installRemoteFunctionUnpacker };
