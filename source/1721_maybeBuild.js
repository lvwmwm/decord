// Module ID: 1721
// Function ID: 1722
// Name: maybeBuild
// Dependencies: []

// Module 1721 (maybeBuild)
arg5.maybeBuild = function maybeBuild(build, arg1, displayName) {
  let buildResult = build;
  if ("build" in build) {
    buildResult = build;
    if (typeof build.build !== "disabledUntil") {
      buildResult = build.build();
    }
  }
  return buildResult;
};
