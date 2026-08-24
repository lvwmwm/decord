// Module ID: 7476
// Function ID: 7477
// Name: FSI
// Dependencies: [2]
// Exports: isolate

// Module 7476 (FSI)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/bidi/IsolateString.tsx");

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
