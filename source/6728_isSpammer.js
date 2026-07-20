// Module ID: 6728
// Function ID: 52393
// Name: isSpammer
// Dependencies: []
// Exports: isSpam, isSpamSupported

// Module 6728 (isSpammer)
function isSpammer(id) {
  const user = user.getUser(id);
  let hasFlagResult;
  if (null != user) {
    hasFlagResult = user.hasFlag(constants.SPAMMER);
  }
  return null != hasFlagResult && hasFlagResult;
}
let closure_2 = importDefault(dependencyMap[0]);
({ UserFlags: closure_3, ChannelTypes: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/messages/isSpam.tsx");

export const isSpamSupported = function isSpamSupported(type) {
  let tmp = undefined !== type;
  if (tmp) {
    tmp = type.type !== constants2.DM;
  }
  return tmp;
};
export { isSpammer };
export const isSpam = function isSpam(author) {
  let tmp = isSpammer(author.author.id);
  if (tmp) {
    tmp = !arg1(dependencyMap[2]).isAutomodMessageRecord(author);
    const obj = arg1(dependencyMap[2]);
  }
  return tmp;
};
