// Module ID: 12194
// Function ID: 93720
// Name: _getPresenceActivityInviteCoverImageURL
// Dependencies: []
// Exports: getPresenceActivityInviteCoverImageURL, usePresenceActivityInviteCoverImageURL

// Module 12194 (_getPresenceActivityInviteCoverImageURL)
function _getPresenceActivityInviteCoverImageURL(messageId) {
  let application;
  let presenceActivity;
  ({ presenceActivity, application } = messageId);
  let obj = { messageId: messageId.messageId };
  let coverImageURL = coverImageURL.getCoverImageURL(obj);
  if (null === coverImageURL) {
    return { "Bool(false)": "o", "Bool(false)": "o" };
  } else {
    const result = 600 * importDefault(dependencyMap[2])();
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
      assetImage = arg1(dependencyMap[3]).getAssetImage(presenceActivity.application_id, presenceActivity.assets.invite_cover_image, result);
      const obj2 = arg1(dependencyMap[3]);
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
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx");

export const usePresenceActivityInviteCoverImageURL = (messageId) => {
  messageId = messageId.messageId;
  const arg1 = messageId;
  const presenceActivity = messageId.presenceActivity;
  const importDefault = presenceActivity;
  const application = messageId.application;
  const importAll = application;
  const items = [closure_5];
  const items1 = [messageId, presenceActivity, application];
  const stateFromStoresObject = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => callback({ messageId, presenceActivity, application }), items1);
  const cachedImageURL = stateFromStoresObject.cachedImageURL;
  const dependencyMap = cachedImageURL;
  const imageURL = stateFromStoresObject.imageURL;
  const React = imageURL;
  const items2 = [cachedImageURL, imageURL, messageId];
  const effect = React.useEffect(() => {
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
    importAll(dependencyMap[5]).setCoverImageURL(obj);
    const obj2 = importAll(dependencyMap[5]);
  }
  return imageURL;
};
