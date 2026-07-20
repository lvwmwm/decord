// Module ID: 15046
// Function ID: 113299
// Name: createICYMIStyles
// Dependencies: []
// Exports: createICYMIStyles

// Module 15046 (createICYMIStyles)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(result) {
  const callback = callback(dependencyMap[1]).createStyles(result);
  return (arg0) => {
    const items = [...arguments];
    const useContext = React.useContext;
    const items1 = [useContext(callback(closure_1[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};
