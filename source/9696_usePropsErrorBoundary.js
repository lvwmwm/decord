// Module ID: 9696
// Function ID: 75416
// Name: usePropsErrorBoundary
// Dependencies: []
// Exports: usePropsErrorBoundary

// Module 9696 (usePropsErrorBoundary)
let closure_0 = importDefault(dependencyMap[0]);

export const usePropsErrorBoundary = function usePropsErrorBoundary(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect((self) => {
    let dataLength;
    let defaultIndex;
    ({ defaultIndex, dataLength } = self);
    if ("number" === typeof defaultIndex) {
      if (dataLength > 0) {
        const _Error3 = Error;
        const error = new Error("DefaultIndex must be in the range of data length.");
        throw error;
      }
    }
    if (!self.mode) {
      if (!self.vertical) {
        if (!self.width) {
          const _Error = Error;
          const error1 = new Error("`width` must be specified for horizontal carousels.");
          throw error1;
        }
      }
      if (self.vertical) {
        if (!self.height) {
          const _Error2 = Error;
          const error2 = new Error("`height` must be specified for vertical carousels.");
          throw error2;
        }
      }
    }
  }, items);
};
