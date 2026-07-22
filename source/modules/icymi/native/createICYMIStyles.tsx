// Module ID: 15064
// Function ID: 113400
// Name: createICYMIStyles
// Dependencies: []
// Exports: createICYMIStyles

// Module 15064 (createICYMIStyles)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/icymi/native/createICYMIStyles.tsx");

export const createICYMIStyles = function createICYMIStyles(__exportStarResult1) {
  const callback = callback(dependencyMap[1]).createStyles(__exportStarResult1);
  return (arg0) => {
    const items = [...arguments];
    const useContext = React.useContext;
    const items1 = [useContext(callback(closure_1[2]).ICYMIContext), ...items];
    return callback(...items);
  };
};
