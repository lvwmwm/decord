// Module ID: 6833
// Function ID: 53998
// Name: isStable
// Dependencies: []

// Module 6833 (isStable)
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
const obj2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("utils/ReleaseChannelUtils.native.tsx");

export const isStable = tmp5;
export const CurrentReleaseChannel = ReleaseChannel;
