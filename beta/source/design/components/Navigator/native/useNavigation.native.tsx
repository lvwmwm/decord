// Module ID: 1500
// Function ID: 1501
// Name: useNavigation
// Dependencies: [1501, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1500 (useNavigation)
import Link from "Link" /* 1501 */;
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
