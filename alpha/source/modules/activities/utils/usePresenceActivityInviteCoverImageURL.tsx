// Module ID: 15139
// Function ID: 15140
// Name: usePresenceActivityInviteCoverImageURL
// Dependencies: [19, 15140, 1892, 8721, 504, 15141, 2]
// Exports: getPresenceActivityInviteCoverImageURL, usePresenceActivityInviteCoverImageURL

// Module 15139 (usePresenceActivityInviteCoverImageURL)
import react_nativeDefault from "react-native" /* 1892 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8721 */;
import MessageActivityInviteCoverImageActionCreatorsAll from "MessageActivityInviteCoverImageActionCreators" /* 15141 */;
import react from "react" /* 19 */;
import MessageActivityInviteCoverImageStore from "MessageActivityInviteCoverImageStore" /* 15140 */;
import size from "module_2" /* 2 */;

function _getPresenceActivityInviteCoverImageURL(messageId) {
  let application;
  let assetImage;
  let presenceActivity;
  ({ presenceActivity, application } = messageId);
  const obj = { messageId: messageId.messageId };
  const coverImageURL = MessageActivityInviteCoverImageStore.getCoverImageURL(obj);
  if (null === coverImageURL) {
    return { cachedImageURL: null, imageURL: null };
  } else {
    const result = 600 * react_nativeDefault();
    let invite_cover_image;
    const obj3 = { cachedImageURL: coverImageURL, imageURL: assetImage };
    if (presenceActivity != null) {
      const assets = presenceActivity.assets;
      if (assets != null) {
        invite_cover_image = assets.invite_cover_image;
      }
    }
    assetImage = null;
    if (null != invite_cover_image) {
      const obj2 = ApplicationAssetUtils;
      assetImage = obj2.getAssetImage(presenceActivity.application_id, presenceActivity.assets.invite_cover_image, result);
    }
    if (assetImage == null) {
      assetImage = coverImageURL;
    }
    if (assetImage == null) {
      assetImage = application.getCoverImageURL(result);
    }
    if (assetImage == null) {
      assetImage = null;
    }
    return obj3;
  }
}
let result = size.fileFinishedImporting("modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx");

export const usePresenceActivityInviteCoverImageURL = (messageId) => {
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  let cachedImageURL;
  let obj = messageId(cachedImageURL[4]);
  const items = [MessageActivityInviteCoverImageStore];
  const items1 = [messageId, presenceActivity, application];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { messageId, presenceActivity, application };
    return _getPresenceActivityInviteCoverImageURL(obj);
  }, items1);
  cachedImageURL = stateFromStoresObject.cachedImageURL;
  const imageURL = stateFromStoresObject.imageURL;
  const items2 = [cachedImageURL, imageURL, messageId];
  const effect = imageURL.useEffect(() => {
    if (cachedImageURL !== imageURL) {
      const obj2 = { messageId, coverImageURL: tmp };
      const obj = MessageActivityInviteCoverImageActionCreatorsAll;
      obj.setCoverImageURL(obj2);
    }
  }, items2);
  return imageURL;
};
export function getPresenceActivityInviteCoverImageURL(messageId) {
  messageId = messageId.messageId;
  const obj = { messageId, presenceActivity: messageId.presenceActivity, application: messageId.application };
  const tmp = _getPresenceActivityInviteCoverImageURL(obj);
  const imageURL = tmp.imageURL;
  if (tmp.cachedImageURL !== imageURL) {
    const obj3 = { messageId, coverImageURL: imageURL };
    const obj2 = MessageActivityInviteCoverImageActionCreatorsAll;
    obj2.setCoverImageURL(obj3);
  }
  return imageURL;
}
