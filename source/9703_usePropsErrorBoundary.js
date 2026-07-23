// Module ID: 9703
// Function ID: 75457
// Name: usePropsErrorBoundary
// Dependencies: [31]
// Exports: usePropsErrorBoundary

// Module 9703 (usePropsErrorBoundary)
import result from "result";


export const usePropsErrorBoundary = function usePropsErrorBoundary(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let dataLength;
    let defaultIndex;
    ({ defaultIndex, dataLength } = styles);
    if ("number" === typeof defaultIndex) {
      if (dataLength > 0) {
        const _Error3 = Error;
        const error = new Error("DefaultIndex must be in the range of data length.");
        throw error;
      }
    }
    if (!styles.mode) {
      if (!styles.vertical) {
        if (!styles.width) {
          const _Error = Error;
          const error1 = new Error("`width` must be specified for horizontal carousels.");
          throw error1;
        }
      }
      if (styles.vertical) {
        if (!styles.height) {
          const _Error2 = Error;
          const error2 = new Error("`height` must be specified for vertical carousels.");
          throw error2;
        }
      }
    }
  }, items);
};
