// Module ID: 1725
// Function ID: 1726
// Name: installShareableHostUnpacker
// Dependencies: []
// Exports: installShareableHostUnpacker

// Module 1725 (installShareableHostUnpacker)
let tmp2;
const items = [{ code: "(function installShareableHostUnpacker_Pnpm_shareableHostUnpackerNativeTs1(){function shareableHostUnpacker(initial,hostDecorator){let hostShareable={isHost:true,__shareableRef:true,value:initial};if(hostDecorator){hostShareable=hostDecorator(hostShareable);}const shareable=hostShareable;return shareable;}globalThis.__shareableHostUnpacker=shareableHostUnpacker;})" }];
[tmp2] = items;
function installShareableHostUnpacker() {
  globalThis.__shareableHostUnpacker = function shareableHostUnpacker(value, fn) {
    const obj = { isHost: true, __shareableRef: true, value };
    let tmp = obj;
    if (fn) {
      tmp = fn(obj);
    }
    return tmp;
  };
}
installShareableHostUnpacker.__workletHash = 6370281244802;
installShareableHostUnpacker.__initData = tmp2;

export { installShareableHostUnpacker };
