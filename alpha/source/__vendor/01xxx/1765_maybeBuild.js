// Module ID: 1765
// Function ID: 1766
// Name: maybeBuild
// Dependencies: []
// Exports: maybeBuild

// Module 1765 (maybeBuild)

export function maybeBuild(build, style, displayName) {
  let buildResult = build;
  if ("build" in build) {
    buildResult = build;
    if (typeof build.build === "function") {
      buildResult = build.build();
    }
  }
  return buildResult;
}
