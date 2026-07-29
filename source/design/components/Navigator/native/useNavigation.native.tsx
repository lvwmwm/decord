// Module ID: 1480
// Function ID: 1481
// Name: useNavigation
// Dependencies: [1481, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1480 (useNavigation)
function useNavigation() {
  return require(1481) /* Link */.useNavigation();
}
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return require(1481) /* Link */.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return require(1481) /* Link */.useNavigation();
};
