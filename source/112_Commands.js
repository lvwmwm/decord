// Module ID: 112
// Function ID: 113
// Name: Commands
// Dependencies: [65, 113]

// Module 112 (Commands)
import setRuntimeConfigProviderAll from "setRuntimeConfigProvider" /* 65 */;
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;

const value = setRuntimeConfigProviderAll.get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = codegenNativeCommandsDefault({ supportedCommands: ["focus", "blur", "hotspotUpdate", "setPressed"] });
