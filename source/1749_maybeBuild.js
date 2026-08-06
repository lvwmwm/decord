// Module ID: 1749
// Function ID: 1750
// Name: maybeBuild
// Dependencies: []

// Module 1749 (maybeBuild)
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
