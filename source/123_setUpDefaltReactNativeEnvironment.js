// Module ID: 123
// Function ID: 2096
// Name: setUpDefaltReactNativeEnvironment
// Dependencies: [124, 125, 150, 169, 174, 182, 189, 192, 230, 234, 235, 240, 243]

// Module 123 (setUpDefaltReactNativeEnvironment)
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpDefaltReactNativeEnvironment() {
  if (!c2) {
    c2 = true;
    require(124) /* env */;
    require(125) /* setUpDOM */.default();
    require(150) /* NativePerformanceCxx */;
    require(169) /* polyfillObjectProperty */;
    require(174);
    require(182) /* _isNativeReflectConstruct */;
    require(189);
    require(192);
    require(230) /* Alert */;
    require(234) /* polyfillObjectProperty */;
    require(235);
    require(240) /* __fetchSegment */;
    require(243) /* AppRegistry */;
    const obj = require(125) /* setUpDOM */;
  }
};
