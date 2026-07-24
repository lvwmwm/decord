// Module ID: 10399
// Function ID: 80199
// Name: showChannelFollowingActionSheet
// Dependencies: [31, 33, 4098, 10400, 1934, 4471, 10406, 2]

// Module 10399 (showChannelFollowingActionSheet)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("showActionSheet").fileFinishedImporting("modules/channel_following/native/showChannelFollowingActionSheet.tsx");
function showChannelFollowingActionSheet(id, guildId) {
  const _require = id;
  const importDefault = guildId;
  let obj = importDefault(4098);
  obj = {
    sourceChannelId: id,
    sourceGuildId: guildId,
    targetChannelId: arg2,
    targetGuildId: arg3,
    reopenActionSheetWithTarget(arg0, arg1) {
      outer1_4(closure_0, closure_1, arg1, arg0);
    },
    onSuccess() {
      let obj = guildId(outer1_2[5]);
      obj = {
        importer() {
          return callback(outer2_2[4])(outer2_2[6], outer2_2.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const merged = Object.assign(arg0);
              return outer4_3(closure_0, {});
            };
          });
        },
        hideActionSheet: true
      };
      obj.openLazy(obj);
    },
    onCancel() {
      return guildId(outer1_2[2]).hideActionSheet();
    }
  };
  obj.openLazy(_require(1934)(10400, dependencyMap.paths), "NewChannelFollower." + id, obj);
}

export { showChannelFollowingActionSheet };
