// Module ID: 10457
// Function ID: 81154
// Name: usePipPosition
// Dependencies: [57, 31, 587, 10458, 2]
// Exports: default

// Module 10457 (usePipPosition)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let result = require("Storage").fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = callback(React.useState(() => {
    const Storage = callback(outer1_1[2]).Storage;
    return Storage.get("CameraPreviewPosition", callback(outer1_1[3]).DEFAULT_PIP_POSITION);
  }), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const Storage = callback(outer1_1[2]).Storage;
      const result = Storage.set("CameraPreviewPosition", arg0);
      callback(arg0);
    }, [])
  ];
  return items;
};
