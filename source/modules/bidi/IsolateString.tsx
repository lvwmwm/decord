// Module ID: 6920
// Function ID: 55203
// Name: FSI
// Dependencies: [284214097]
// Exports: isolate

// Module 6920 (FSI)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/bidi/IsolateString.tsx");

export const FSI = "\u2068";
export const PDI = "\u2069";
export const isolate = function isolate(channelName) {
  let text = channelName;
  if (null != channelName) {
    text = channelName;
    if (0 !== channelName.length) {
      text = `${"\u2068" + channelName}⁩`;
    }
  }
  return text;
};
