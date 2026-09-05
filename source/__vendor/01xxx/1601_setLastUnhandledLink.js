// Module ID: 1601
// Function ID: 1602
// Name: setLastUnhandledLink
// Dependencies: [19]

// Module 1601 (setLastUnhandledLink)
import noopAll from "noop" /* 19 */;

const obj = { lastUnhandledLink: "Array", setLastUnhandledLink: 0 };
obj[1] = function setLastUnhandledLink() {

};
const context = noopAll.createContext(obj);
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;
