// Module ID: 1752
// Function ID: 1753
// Name: maybeBuild
// Dependencies: []
// Exports: maybeBuild

// Module 1752 (maybeBuild)

export const maybeBuild = function maybeBuild(build, style, displayName) {
  let buildResult = build;
  if ("build" in build) {
    buildResult = build;
    if (typeof build.build === "function") {
      buildResult = build.build();
    }
  }
  return buildResult;
};
