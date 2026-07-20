// Module ID: 15684
// Function ID: 119915
// Name: useCameraEncodeError
// Dependencies: []
// Exports: default

// Module 15684 (useCameraEncodeError)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    if (id.getId() === arg0) {
      let type;
      const first = activeErrorsOfType.getActiveErrorsOfType(arg0(closure_1[3]).AVError.CAMERA_SEND_LOW_FPS)[0];
      if (null != first) {
        type = first.type;
      }
      return type;
    }
  });
};
