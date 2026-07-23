// Module ID: 1082
// Function ID: 12445
// Name: growthbookIntegration
// Dependencies: [794]

// Module 1082 (growthbookIntegration)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.growthbookIntegration = function growthbookIntegration(growthbookClass) {
  return require(794) /* registerSpanErrorInstrumentation */.growthbookIntegration({ growthbookClass: growthbookClass.growthbookClass });
};
