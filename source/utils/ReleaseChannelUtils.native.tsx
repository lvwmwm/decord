// Module ID: 6833
// Function ID: 53987
// Name: isStable
// Dependencies: [448921600, 451936256, 6]

// Module 6833 (isStable)
import _classCallCheck from "_classCallCheck";

const ReleaseChannel = importAll(dependencyMap[0]).getConstants().ReleaseChannel;
const importAllResult = importAll(dependencyMap[0]);
let isAndroidResult = arg1(dependencyMap[1]).isAndroid();
if (isAndroidResult) {
  isAndroidResult = -1 === ReleaseChannel.indexOf("canary");
}
if (isAndroidResult) {
  isAndroidResult = -1 === ReleaseChannel.indexOf("beta");
}
let tmp3 = "stable" === ReleaseChannel;
let tmp4 = -1 !== ReleaseChannel.indexOf("debug");
if (!tmp4) {
  tmp4 = -1 !== ReleaseChannel.indexOf("developer");
}
let tmp5 = !tmp4;
if (!tmp4) {
  if (!tmp3) {
    tmp3 = isAndroidResult;
  }
  tmp5 = tmp3;
}
const result = _classCallCheck.fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp5;
export const CurrentReleaseChannel = ReleaseChannel;
