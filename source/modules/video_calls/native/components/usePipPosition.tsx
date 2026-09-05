// Module ID: 9487
// Function ID: 9488
// Name: usePipPosition
// Dependencies: [32, 19, 510, 9488, 2]
// Exports: default

// Module 9487 (usePipPosition)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const CameraPreviewPosition = "CameraPreviewPosition";
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = callback(React.useState(() => {
    const Storage = callback(510).Storage;
    return Storage.get(closure_4, callback(9488).DEFAULT_PIP_POSITION);
  }), 2);
  closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const Storage = callback(closure_1_1[2]).Storage;
      const result = Storage.set(closure_1_4, arg0);
      callback(arg0);
    }, [])
  ];
  return items;
};
