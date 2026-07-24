// Module ID: 9857
// Function ID: 76417
// Name: useSetMediaPostThumbnail
// Dependencies: [31, 4468, 4467, 624, 4665, 8025, 4098, 2]
// Exports: default

// Module 9857 (useSetMediaPostThumbnail)
import result from "result";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default function useSetMediaPostThumbnail(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => {
    const uploads = outer1_5.getUploads(closure_0, outer1_4.ChannelMessage);
    const found = uploads.find((item) => {
      let platform;
      if (null != item) {
        item = item.item;
        if (null != item) {
          platform = item.platform;
        }
      }
      let tmp2 = platform === callback(stateFromStores[4]).UploadPlatform.REACT_NATIVE;
      if (tmp2) {
        tmp2 = true === item.isThumbnail;
      }
      return tmp2;
    });
    let tmp2 = null;
    if (null != found) {
      tmp2 = found;
    }
    return tmp2;
  });
  const items1 = [stateFromStores, arg0, arg1];
  return React.useCallback(() => {
    let id;
    if (null != lib) {
      id = lib.id;
    }
    if (null != id) {
      let tmp7 = null != stateFromStores;
      if (tmp7) {
        let id1;
        if (null != lib) {
          id1 = lib.id;
        }
        tmp7 = stateFromStores.id !== id1;
      }
      if (tmp7) {
        let obj = lib(stateFromStores[5]);
        obj = { thumbnail: false };
        obj.update(closure_0, stateFromStores.id, outer1_4.ChannelMessage, obj);
      }
      let isThumbnail;
      if (null != lib) {
        isThumbnail = lib.isThumbnail;
      }
      const obj3 = lib(stateFromStores[5]);
      let id2;
      if (null != lib) {
        id2 = lib.id;
      }
      obj = { thumbnail: !(null != isThumbnail && isThumbnail), spoiler: false };
      obj3.update(closure_0, id2, outer1_4.ChannelMessage, obj);
      lib(stateFromStores[6]).hideActionSheet();
      const obj5 = lib(stateFromStores[6]);
      const tmp19 = null != isThumbnail && isThumbnail;
    }
  }, items1);
};
