// Module ID: 11492
// Function ID: 11493
// Name: getAndroidWebViewShellConfig
// Dependencies: [2]
// Exports: getAndroidWebViewShellConfig

// Module 11492 (getAndroidWebViewShellConfig)
import size from "module_2" /* 2 */;

let c0 = "https://discord.com";
let c1 = "__discord-activity-shell";
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/getAndroidWebViewShellConfig.tsx");

export const getAndroidWebViewShellConfig = function getAndroidWebViewShellConfig(arg0) {
  let iframeUrl;
  let items;
  let items1;
  let obj2;
  let shellFilePath;
  let uRL;
  ({ iframeUrl, shellFilePath } = arg0);
  const lastIndexOfResult = shellFilePath.lastIndexOf("/");
  const obj = { uri: "" + c0 + "/" + c1 + "/" + shellFilePath.substring(lastIndexOfResult + 1), assetLoaderConfig: obj2, allowMixedContent: "http:" === iframeUrl.protocol, documentStartOriginRules: items1 };
  obj2 = { domain: uRL.host, httpAllowed: false, pathHandlers: items };
  uRL = new URL(c0);
  items = [{ type: "internal", path: "/" + c1 + "/", directory: shellFilePath.substring(0, lastIndexOfResult) }];
  items1 = [iframeUrl.origin];
  ({ type: "internal", path: "/" + c1 + "/", directory: shellFilePath.substring(0, lastIndexOfResult) });
  return obj;
};
