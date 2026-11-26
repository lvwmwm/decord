// Module ID: 18496
// Function ID: 18497
// Name: useIsConjureProjectLive
// Dependencies: [7706, 504, 11475, 2]
// Exports: default

// Module 18496 (useIsConjureProjectLive)
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/useIsConjureProjectLive.tsx");

export default function useIsConjureProjectLive(id) {
  let isConjureLiveResult;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let tmp2 = id;
  const items = [ConjurePublishStatusStore];
  const items1 = [id];
  const obj = id(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != id) {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(tmp);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      if (publishState == null) {
        publishState = null;
      }
      tmp2 = publishState;
    }
    return tmp2;
  }, items1);
  if (null != stateFromStores) {
    const tmp2Result = tmp2(11475);
    isConjureLiveResult = tmp2Result.isConjureLive(stateFromStores);
  } else {
    let num;
    if (id != null) {
      const supported_surfaces = id.supported_surfaces;
      if (supported_surfaces != null) {
        num = supported_surfaces.length;
      }
    }
    if (num == null) {
      num = 0;
    }
    isConjureLiveResult = num > 0;
  }
  return isConjureLiveResult;
};
