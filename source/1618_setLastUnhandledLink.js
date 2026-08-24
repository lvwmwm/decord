// Module ID: 1618
// Function ID: 1619
// Name: setLastUnhandledLink
// Dependencies: [19]

// Module 1618 (setLastUnhandledLink)
import noopAll from "noop" /* 19 */;

const obj = { lastUnhandledLink: "Array", setLastUnhandledLink: 0 };
obj[1] = function setLastUnhandledLink() {

};
const context = noopAll.createContext(obj);
context.displayName = "UnhandledLinkingContext";

export const UnhandledLinkingContext = context;
