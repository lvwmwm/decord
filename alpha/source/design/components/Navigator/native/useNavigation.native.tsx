// Module ID: 1503
// Function ID: 1504
// Name: useNavigation
// Dependencies: [558, 1504, 2]
// Exports: useNativeStackNavigation, useNavigation, useStackNavigation, useTabNavigation

// Module 1503 (useNavigation)
import Link from "Link" /* 1504 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useNavigation() {
  const obj = Link;
  return obj.useNavigation();
}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result3 = size.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

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
