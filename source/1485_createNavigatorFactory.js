// Module ID: 1485
// Function ID: 17186
// Name: createNavigatorFactory
// Dependencies: []

// Module 1485 (createNavigatorFactory)
arg5.default = function createNavigatorFactory(arg0) {
  const arg2 = arg0;
  return () => {
    if (undefined !== arguments[0]) {
      const _Error = Error;
      const error = new Error("Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API? See https://reactnavigation.org/docs/hello-react-navigation for the latest API and guides.");
      throw error;
    } else {
      const obj = { Navigator: arg0, Group: arg0(closure_1[0]), Screen: arg0(closure_1[1]) };
      return obj;
    }
  };
};
