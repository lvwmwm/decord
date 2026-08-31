// Module ID: 4717
// Function ID: 4718
// Name: context
// Dependencies: [19, 2]

// Module 4717 (context)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const context = noop.createContext({ overrideSettings: false });
const result = set.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;
