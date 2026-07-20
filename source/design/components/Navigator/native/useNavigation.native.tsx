// Module ID: 1456
// Function ID: 16980
// Name: useNavigation
// Dependencies: []
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1456 (useNavigation)
function useNavigation() {
  return require(dependencyMap[0]).useNavigation();
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return require(dependencyMap[0]).useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return require(dependencyMap[0]).useNavigation();
};
