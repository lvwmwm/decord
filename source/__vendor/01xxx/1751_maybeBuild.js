// Module ID: 1751
// Function ID: 1752
// Name: maybeBuild
// Dependencies: []

// Module 1751 (maybeBuild)
arg5.maybeBuild = function maybeBuild(build, arg1, displayName) {
  let buildResult = build;
  if ("build" in build) {
    buildResult = build;
    if (typeof build.build === "function") {
      buildResult = build.build();
    }
  }
  return buildResult;
};
