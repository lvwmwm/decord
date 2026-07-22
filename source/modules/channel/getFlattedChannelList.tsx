// Module ID: 5068
// Function ID: 44045
// Name: getFlattenedChannelList
// Dependencies: []
// Exports: default

// Module 5068 (getFlattenedChannelList)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/channel/getFlattedChannelList.tsx");

export default function getFlattenedChannelList(arg0, arg1) {
  let fn = arg2;
  const importDefault = arg1;
  if (arg2 === undefined) {
    fn = function l() {
      return true;
    };
  }
  const mapped = importDefault(dependencyMap[0])(arg0).map((channel) => {
    if ("null" === channel.channel.id) {
      let items = arg1[channel.channel.id];
    } else {
      items = [channel, arg1[channel.channel.id]];
    }
    return items;
  });
  const arr = importDefault(dependencyMap[0])(arg0);
  const flattenDeepResult = mapped.flattenDeep();
  return mapped.flattenDeep().filter(fn).value();
};
