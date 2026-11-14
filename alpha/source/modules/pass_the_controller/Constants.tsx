// Module ID: 16109
// Function ID: 16110
// Name: Constants
// Dependencies: [2140, 6802, 15987, 504, 6808, 2]
// Exports: isPassTheControllerBlocked, useIsPassTheControllerBlocked

// Module 16109 (Constants)
import StreamKeyUtils from "StreamKeyUtils" /* 6808 */;
import SocialSdkGameResolver from "SocialSdkGameResolver" /* 15987 */;
import RunningGameStore from "RunningGameStore" /* 2140 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6802 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const set = new Set(["363445589247131668", "1402418696126992445", "700136079562375258", "1158877933042143272", "1402418703554842694", "356877880938070016", "356875221078245376", "356875988589740042", "356876590342340608", "1402418717781921935", "1539812812854132867", "1276737795012165766", "542075586886107149", "1511573843330732122", "1314395942253756416", "1432419613165228174", "357607133254254632", "1205090671527071784", "357607478105604096", "1402418594532298837", "1425690433018925056", "1421154726023532544", "1402418239342120960", "398632010442211348", "1314682894106497096", "406637848297472017", "356944273133928458", "1248788687370588220", "385538724592746496", "356888577310851072", "1238113262969557002", "506950362461110273", "742897755160313986"]);
const result = size.fileFinishedImporting("modules/pass_the_controller/Constants.tsx");

export function isPassTheControllerBlocked(encodeStreamKeyResult) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = RunningGameStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = StreamRTCConnectionStore;
  }
  const streamPid = obj2.getStreamPid(encodeStreamKeyResult);
  if (null == streamPid) {
    return false;
  } else {
    const gameForPID = obj.getGameForPID(streamPid);
    if (null == gameForPID) {
      return false;
    } else {
      const obj3 = SocialSdkGameResolver;
      const id = obj3.withProcessIdentity(gameForPID).id;
      const hasItem = null != id && set.has(id);
      return hasItem;
    }
  }
}
export function useIsPassTheControllerBlocked(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [RunningGameStore, StreamRTCConnectionStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      StreamKeyUtils;
      const obj = RunningGameStore;
      const tmp2 = require;
      if (RunningGameStore !== undefined) {
        if (StreamRTCConnectionStore !== undefined) {
          const streamPid = obj2.getStreamPid(tmp5);
          let flag = false;
          if (null != streamPid) {
            const gameForPID = obj.getGameForPID(streamPid);
            flag = false;
            if (null != gameForPID) {
              const tmp2Result = tmp2(15987);
              const id = tmp2Result.withProcessIdentity(gameForPID).id;
              const hasItem = null != id && set.has(id);
              flag = hasItem;
            }
          }
          tmp = flag;
        }
      }
    }
    return tmp;
  }, items1);
}
