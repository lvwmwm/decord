// Module ID: 1499
// Function ID: 1500
// Name: useNavigation
// Dependencies: [1500, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1499 (useNavigation)
function useNavigation() {
  return require(1500) /* createStandardNavigationFactories */.useNavigation();
}
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return require(1500) /* createStandardNavigationFactories */.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return require(1500) /* createStandardNavigationFactories */.useNavigation();
};
