// Module ID: 10359
// Function ID: 79944
// Name: showChannelFollowingActionSheet
// Dependencies: []

// Module 10359 (showChannelFollowingActionSheet)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/channel_following/native/showChannelFollowingActionSheet.tsx");
function showChannelFollowingActionSheet(id, guildId) {
  guildId = id;
  const importDefault = guildId;
  let obj = importDefault(dependencyMap[2]);
  obj = {
    sourceChannelId: id,
    sourceGuildId: guildId,
    targetChannelId: arg2,
    targetGuildId: arg3,
    reopenActionSheetWithTarget(arg0, arg1) {
      callback(arg0, arg1, arg1, arg0);
    },
    onSuccess() {
      let obj = arg1(closure_2[5]);
      obj = {
        importer() {
          return callback(paths[4])(paths[6], paths.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const merged = Object.assign(arg0);
              return callback(closure_0, {});
            };
          });
        },
        hideActionSheet: true
      };
      obj.openLazy(obj);
    },
    onCancel() {
      return arg1(closure_2[2]).hideActionSheet();
    }
  };
  obj.openLazy(guildId(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "NewChannelFollower." + id, obj);
}

export { showChannelFollowingActionSheet };
