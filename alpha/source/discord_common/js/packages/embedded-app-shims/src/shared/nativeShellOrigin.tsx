// Module ID: 11831
// Function ID: 11832
// Name: nativeShellOrigin
// Dependencies: [2]
// Exports: getNativeShellOrigin, isNativeShellHostname

// Module 11831 (nativeShellOrigin)
import size from "module_2" /* 2 */;

const shell = "shell";
const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/nativeShellOrigin.tsx");

export function getNativeShellOrigin(applicationRouterOrigin) {
  const url = new URL(applicationRouterOrigin);
  return "" + url.protocol + "//" + shell + "." + url.host;
}
export function isNativeShellHostname(str) {
  return str.startsWith("" + shell + ".");
}
