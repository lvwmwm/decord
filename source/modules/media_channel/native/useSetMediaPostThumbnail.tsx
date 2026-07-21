// Module ID: 9817
// Function ID: 76169
// Name: useSetMediaPostThumbnail
// Dependencies: []
// Exports: default

// Module 9817 (useSetMediaPostThumbnail)
let closure_3 = importAll(dependencyMap[0]);
const DraftType = arg1(dependencyMap[1]).DraftType;
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default function useSetMediaPostThumbnail(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const uploads = uploads.getUploads(arg0, closure_4.ChannelMessage);
    const found = uploads.find((item) => {
      let platform;
      if (null != item) {
        item = item.item;
        if (null != item) {
          platform = item.platform;
        }
      }
      let tmp2 = platform === callback(closure_2[4]).UploadPlatform.REACT_NATIVE;
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
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, arg0, arg1];
  return React.useCallback((arg0, self) => {
    let id;
    if (null != self) {
      id = self.id;
    }
    if (null != id) {
      let tmp7 = null != stateFromStores;
      if (tmp7) {
        let id1;
        if (null != self) {
          id1 = self.id;
        }
        tmp7 = stateFromStores.id !== id1;
      }
      if (tmp7) {
        let obj = self(stateFromStores[5]);
        obj = { thumbnail: false };
        obj.update(arg0, stateFromStores.id, closure_4.ChannelMessage, obj);
      }
      let isThumbnail;
      if (null != self) {
        isThumbnail = self.isThumbnail;
      }
      const obj3 = self(stateFromStores[5]);
      let id2;
      if (null != self) {
        id2 = self.id;
      }
      obj = { thumbnail: !(null != isThumbnail && isThumbnail), spoiler: false };
      obj3.update(arg0, id2, closure_4.ChannelMessage, obj);
      self(stateFromStores[6]).hideActionSheet();
      const obj5 = self(stateFromStores[6]);
      const tmp19 = null != isThumbnail && isThumbnail;
    }
  }, items1);
};
