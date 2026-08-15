// Module ID: 1500
// Function ID: 1501
// Name: useNavigation
// Dependencies: [1501, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1500 (useNavigation)
function useNavigation() {
  return require(1501) /* createStandardNavigationFactories */.useNavigation();
}
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return require(1501) /* createStandardNavigationFactories */.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return require(1501) /* createStandardNavigationFactories */.useNavigation();
};
