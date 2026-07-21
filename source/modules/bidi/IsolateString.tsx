// Module ID: 6921
// Function ID: 55215
// Name: FSI
// Dependencies: []
// Exports: isolate

// Module 6921 (FSI)
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
