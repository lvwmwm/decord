// Module ID: 1485
// Function ID: 17187
// Name: createNavigatorFactory
// Dependencies: [1486, 1487]

// Module 1485 (createNavigatorFactory)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function createNavigatorFactory(arg0) {
  let closure_0 = arg0;
  return () => {
    if (undefined !== arguments[0]) {
      const _Error = Error;
      const error = new Error("Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API? See https://reactnavigation.org/docs/hello-react-navigation for the latest API and guides.");
      throw error;
    } else {
      const obj = { Navigator: callback, Group: callback(outer1_1[0]), Screen: callback(outer1_1[1]) };
      return obj;
    }
  };
};
