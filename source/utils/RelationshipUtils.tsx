// Module ID: 16038
// Function ID: 123149
// Name: showNotification
// Dependencies: []
// Exports: showAcceptedNotification, showPendingNotification

// Module 16038 (showNotification)
function showNotification(id, arg1, onClick) {
  let obj = importDefault(dependencyMap[1]);
  obj = { tag: id.id, onClick };
  obj.showNotification(importDefault(dependencyMap[2]).getUserAvatarURL(id), id.username, arg1, {}, obj);
}
const FriendsSections = require(dependencyMap[0]).FriendsSections;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = require(dependencyMap[3]).intl;
  showNotification(user, intl.string(require(dependencyMap[3]).t.t3+Af3), () => {
    callback(closure_2[4]).transitionToSection(constants.PENDING, { explicit: true });
  });
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  const require = user;
  const intl = require(dependencyMap[3]).intl;
  showNotification(user, intl.string(require(dependencyMap[3]).t.MYr3Ka), () => {
    let obj = callback(closure_2[5]);
    obj = { recipientIds: arg0.id };
    obj.openPrivateChannel(obj);
  });
};
