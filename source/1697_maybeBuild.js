// Module ID: 1697
// Function ID: 18765
// Name: maybeBuild
// Dependencies: []

// Module 1697 (maybeBuild)
arg5.maybeBuild = function maybeBuild(build, style, displayName) {
  let tmp = "build" in build;
  if (tmp) {
    tmp = "function" === typeof build.build;
  }
  let buildResult = build;
  if (tmp) {
    buildResult = build.build();
  }
  return buildResult;
};
