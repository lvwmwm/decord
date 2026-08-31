// Module ID: 1617
// Function ID: 1618
// Name: setLastUnhandledLink
// Dependencies: [19]

// Module 1617 (setLastUnhandledLink)
import noopAll from "noop" /* 19 */;

const obj = { lastUnhandledLink: "Array", setLastUnhandledLink: 0 };
obj[1] = function setLastUnhandledLink() {

};
const context = noopAll.createContext(obj);
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;
