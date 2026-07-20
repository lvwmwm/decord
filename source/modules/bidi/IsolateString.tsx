// Module ID: 6916
// Function ID: 55193
// Name: FSI
// Dependencies: []
// Exports: isolate

// Module 6916 (FSI)
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
