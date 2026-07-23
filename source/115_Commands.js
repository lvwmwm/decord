// Module ID: 115
// Function ID: 1619
// Name: Commands
// Dependencies: [42, 116]

// Module 115 (Commands)
const value = require("get").get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = require("codegenNativeCommands")({ supportedCommands: ["hotspotUpdate", "setPressed"] });
