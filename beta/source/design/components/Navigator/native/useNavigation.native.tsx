// Module ID: 1485
// Function ID: 1486
// Name: useNavigation
// Dependencies: [1486, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1485 (useNavigation)
import Link from "Link" /* 1486 */;
import size from "module_2" /* 2 */;

function useNavigation() {
  const obj = Link;
  return obj.useNavigation();
}
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  const obj = Link;
  return obj.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  const obj = Link;
  return obj.useNavigation();
};
