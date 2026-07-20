// Module ID: 8616
// Function ID: 68287
// Name: context
// Dependencies: []
// Exports: useObscuredSurface

// Module 8616 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext({ obscured: false });
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return importAllResult.useContext(context);
};
