// Module ID: 8621
// Function ID: 68322
// Name: context
// Dependencies: []
// Exports: useObscuredSurface

// Module 8621 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext({ obscured: false });
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return importAllResult.useContext(context);
};
