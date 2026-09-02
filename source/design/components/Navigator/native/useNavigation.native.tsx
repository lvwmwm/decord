// Module ID: 1498
// Function ID: 1499
// Name: useNavigation
// Dependencies: [1499, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1498 (useNavigation)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1499 */;

function useNavigation() {
  return createStandardNavigationFactories.useNavigation();
}
const result = set.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return createStandardNavigationFactories.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return createStandardNavigationFactories.useNavigation();
};
