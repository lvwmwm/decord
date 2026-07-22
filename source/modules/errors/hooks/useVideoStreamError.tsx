// Module ID: 10555
// Function ID: 82461
// Name: useVideoStreamErrorContext
// Dependencies: []
// Exports: default

// Module 10555 (useVideoStreamErrorContext)
function useVideoStreamErrorContext(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp27;
    if (id.getId() === arg1) {
      if (arg0 === constants.STREAM) {
        let activeErrorsOfType = store.getActiveErrorsOfType(arg0(arg1[4]).AVError.SCREENSHARE_OS_ERROR);
      } else {
        activeErrorsOfType = [];
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(activeErrorsOfType, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(store.getActiveErrorsOfType(arg0(arg1[4]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT), arraySpreadResult);
      HermesBuiltin.arraySpread(store.getActiveErrorsOfType(arg0(arg1[4]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(store.getActiveErrorsOfType(arg0(arg1[4]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), HermesBuiltin.arraySpread(store.getActiveErrorsOfType(arg0(arg1[4]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0));
      let num6 = 0;
      if (0 < items1.length) {
        while (true) {
          tmp27 = items1[num6];
          let tmp28 = arg0;
          if (tmp27.mediaContext === arg0) {
            let tmp29 = arg1;
            if (tmp27.userId === arg1) {
              break;
            }
          }
          num6 = num6 + 1;
        }
        return tmp27;
      }
    }
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const MediaEngineContextTypes = arg1(dependencyMap[2]).MediaEngineContextTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  let type;
  const tmp2 = useVideoStreamErrorContext(arg0, arg1);
  if (null != tmp2) {
    type = tmp2.type;
  }
  return type;
};
export { useVideoStreamErrorContext };
