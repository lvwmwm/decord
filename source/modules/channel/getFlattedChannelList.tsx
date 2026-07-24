// Module ID: 5071
// Function ID: 44069
// Name: getFlattenedChannelList
// Dependencies: [22, 2]
// Exports: default

// Module 5071 (getFlattenedChannelList)
const result = require("set").fileFinishedImporting("modules/channel/getFlattedChannelList.tsx");

export default function getFlattenedChannelList(arg0, arg1) {
  let fn = arg2;
  const importDefault = arg1;
  if (arg2 === undefined) {
    fn = function l() {
      return true;
    };
  }
  const mapped = importDefault(22)(arg0).map((channel) => {
    if ("null" === channel.channel.id) {
      let items = dependencyMap[channel.channel.id];
    } else {
      items = [channel, dependencyMap[channel.channel.id]];
    }
    return items;
  });
  const arr = importDefault(22)(arg0);
  const flattenDeepResult = mapped.flattenDeep();
  return mapped.flattenDeep().filter(fn).value();
};
