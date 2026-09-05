// Module ID: 1483
// Function ID: 1484
// Name: useNavigation
// Dependencies: [1484, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1483 (useNavigation)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1484 */;

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
