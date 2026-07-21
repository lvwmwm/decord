// Module ID: 115
// Function ID: 1619
// Name: Commands
// Dependencies: []

// Module 115 (Commands)
const value = importAll(dependencyMap[0]).get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = importDefault(dependencyMap[1])({ supportedCommands: [] });
