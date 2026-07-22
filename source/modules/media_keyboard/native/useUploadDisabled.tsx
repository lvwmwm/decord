// Module ID: 11332
// Function ID: 88158
// Name: useUploadDisabled
// Dependencies: []
// Exports: default

// Module 11332 (useUploadDisabled)
const DraftType = require(dependencyMap[0]).DraftType;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
({ MAX_UPLOAD_COUNT: closure_5, Permissions: closure_6 } = _module);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  const require = arg0;
  const items = [closure_3, closure_4];
  return require(dependencyMap[4]).useStateFromStores(items, (self) => {
    let tmp = uploads.getUploads(self.id, ChannelMessage.ChannelMessage).length >= closure_5;
    if (!tmp) {
      let tmp5 = self.id === self(closure_1[5]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp5) {
        let isPrivateResult = self.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = closure_3.can(constants.ATTACH_FILES, self);
        }
        tmp5 = !isPrivateResult;
      }
      tmp = tmp5;
    }
    return tmp;
  });
};
