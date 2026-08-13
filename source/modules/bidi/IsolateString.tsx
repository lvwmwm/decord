// Module ID: 7190
// Function ID: 7191
// Name: FSI
// Dependencies: [2]
// Exports: isolate

// Module 7190 (FSI)
const result = require("set").fileFinishedImporting("modules/bidi/IsolateString.tsx");

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
