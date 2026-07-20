// Module ID: 402
// Function ID: 5790
// Name: context
// Dependencies: []

// Module 402 (context)
importAll(dependencyMap[0]);
const context = arg1(dependencyMap[0]).createContext(null);
const frozen = Object.freeze({ horizontal: true });

export default context;
export const HORIZONTAL = frozen;
export const VERTICAL = Object.freeze({ horizontal: false });
