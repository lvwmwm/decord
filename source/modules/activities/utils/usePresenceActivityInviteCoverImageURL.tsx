// Module ID: 12339
// Function ID: 96137
// Name: _getPresenceActivityInviteCoverImageURL
// Dependencies: [31, 12340, 1825, 7909, 566, 12341, 2]
// Exports: getPresenceActivityInviteCoverImageURL, usePresenceActivityInviteCoverImageURL

// Module 12339 (_getPresenceActivityInviteCoverImageURL)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _getPresenceActivityInviteCoverImageURL(messageId) {
  let application;
  let presenceActivity;
  ({ presenceActivity, application } = messageId);
  let obj = { messageId: messageId.messageId };
  coverImageURL = coverImageURL.getCoverImageURL(obj);
  if (null === coverImageURL) {
    return { cachedImageURL: null, imageURL: null };
  } else {
    const result = 600 * importDefault(1825)();
    obj = { cachedImageURL: coverImageURL };
    let invite_cover_image;
    if (null != presenceActivity) {
      const assets = presenceActivity.assets;
      if (null != assets) {
        invite_cover_image = assets.invite_cover_image;
      }
    }
    let assetImage = null;
    if (null != invite_cover_image) {
      assetImage = require(7909) /* _createForOfIteratorHelperLoose */.getAssetImage(presenceActivity.application_id, presenceActivity.assets.invite_cover_image, result);
      const obj2 = require(7909) /* _createForOfIteratorHelperLoose */;
    }
    if (null != assetImage) {
      coverImageURL = assetImage;
    }
    if (null == coverImageURL) {
      coverImageURL = application.getCoverImageURL(result);
    }
    let tmp6 = null;
    if (null != coverImageURL) {
      tmp6 = coverImageURL;
    }
    obj.imageURL = tmp6;
    return obj;
  }
}
let result = require("getDevicePixelRatio").fileFinishedImporting("modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx");

export const usePresenceActivityInviteCoverImageURL = (messageId) => {
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  const items = [_isNativeReflectConstruct];
  const items1 = [messageId, presenceActivity, application];
  const stateFromStoresObject = messageId(cachedImageURL[4]).useStateFromStoresObject(items, () => outer1_6({ messageId, presenceActivity, application }), items1);
  cachedImageURL = stateFromStoresObject.cachedImageURL;
  const imageURL = stateFromStoresObject.imageURL;
  const items2 = [cachedImageURL, imageURL, messageId];
  const effect = imageURL.useEffect(() => {
    if (cachedImageURL !== imageURL) {
      let obj = application(cachedImageURL[5]);
      obj = { messageId, coverImageURL: imageURL };
      obj.setCoverImageURL(obj);
    }
  }, items2);
  return imageURL;
};
export const getPresenceActivityInviteCoverImageURL = function getPresenceActivityInviteCoverImageURL(messageId) {
  messageId = messageId.messageId;
  let obj = { messageId, presenceActivity: messageId.presenceActivity, application: messageId.application };
  const tmp = _getPresenceActivityInviteCoverImageURL(obj);
  const imageURL = tmp.imageURL;
  if (tmp.cachedImageURL !== imageURL) {
    obj = { messageId, coverImageURL: imageURL };
    importAll(12341).setCoverImageURL(obj);
    const obj2 = importAll(12341);
  }
  return imageURL;
};
