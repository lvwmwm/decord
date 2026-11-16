// Module ID: 1499
// Function ID: 1500
// Name: useNavigation
// Dependencies: [1500, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1499 (useNavigation)
import Link from "Link" /* 1500 */;
import size from "module_2" /* 2 */;

function useNavigation() {
  const obj = Link;
  return obj.useNavigation();
}
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export function useNativeStackNavigation() {
  const obj = Link;
  return obj.useNavigation();
}
export const useStackNavigation = useNavigation;
export function useTabNavigation() {
  const obj = Link;
  return obj.useNavigation();
}
