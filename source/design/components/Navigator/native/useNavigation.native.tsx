// Module ID: 1456
// Function ID: 16986
// Name: useNavigation
// Dependencies: [1457, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1456 (useNavigation)
function useNavigation() {
  return require(1457) /* Link */.useNavigation();
}
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return require(1457) /* Link */.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return require(1457) /* Link */.useNavigation();
};
