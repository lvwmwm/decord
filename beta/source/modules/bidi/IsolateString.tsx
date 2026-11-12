// Module ID: 7937
// Function ID: 7938
// Name: IsolateString
// Dependencies: [2]
// Exports: isolate

// Module 7937 (IsolateString)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/bidi/IsolateString.tsx");

export const FSI = "\u2068";
export const PDI = "\u2069";
export function isolate(channelName) {
  let text = channelName;
  if (null != channelName) {
    text = channelName;
    if (0 !== channelName.length) {
      text = `${"\u2068" + channelName}⁩`;
    }
  }
  return text;
}
