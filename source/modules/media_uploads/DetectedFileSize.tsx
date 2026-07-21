// Module ID: 4708
// Function ID: 40942
// Name: _getDetectedFileSize
// Dependencies: []
// Exports: getDetectedFileSize

// Module 4708 (_getDetectedFileSize)
async function _getDetectedFileSize(size, arg1) {
  if (size.size > 0) {
    return size.size;
  } else {
    return yield new Promise((data) => {
      const fileReader = new FileReader();
      const timeout = setTimeout(() => {
        const error = new Error("File read timeout");
        arg1(error);
      }, 10000);
      fileReader.onload = (target) => {
        clearTimeout(closure_2);
        target = target.target;
        let result;
        if (null != target) {
          result = target.result;
        }
        if (result instanceof ArrayBuffer) {
          target(result.byteLength);
        } else {
          const _Error = Error;
          const error = new Error("Unexpected FileReader result type");
          arg1(error);
        }
      };
      fileReader.onerror = () => {
        clearTimeout(closure_2);
        const error = new Error("Could not read file");
        arg1(error);
      };
      const asArrayBuffer = fileReader.readAsArrayBuffer(data);
    });
  }
}
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/media_uploads/DetectedFileSize.tsx");

export const getDetectedFileSize = function getDetectedFileSize() {
  return _getDetectedFileSize(...arguments);
};
