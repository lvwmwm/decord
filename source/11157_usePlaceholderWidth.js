// Module ID: 11157
// Function ID: 86790
// Name: usePlaceholderWidth
// Dependencies: []
// Exports: usePlaceholderWidth

// Module 11157 (usePlaceholderWidth)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = function usePlaceholderWidth(arg0, arg1) {
  const React = arg0;
  const items = [arg0, arg1];
  return React.useMemo(() => Math.random() * (arg1 - arg0) + arg0, items);
};
