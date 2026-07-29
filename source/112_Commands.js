// Module ID: 112
// Function ID: 113
// Name: Commands
// Dependencies: [65, 113]

// Module 112 (Commands)
const value = require("setRuntimeConfigProvider").get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = require("codegenNativeCommands")({ supportedCommands: ["focus", "blur", "hotspotUpdate", "setPressed"] });
