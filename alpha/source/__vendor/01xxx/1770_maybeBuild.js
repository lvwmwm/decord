// Module ID: 1770
// Function ID: 1771
// Name: maybeBuild
// Dependencies: []
// Exports: maybeBuild

// Module 1770 (maybeBuild)

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
