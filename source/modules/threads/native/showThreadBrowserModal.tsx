// Module ID: 10083
// Function ID: 78115
// Name: showThreadBrowserModal
// Dependencies: []
// Exports: default

// Module 10083 (showThreadBrowserModal)
let closure_2 = require(dependencyMap[0]).ChannelDetailsNavigatorScreens;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require(dependencyMap[1]);
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require(dependencyMap[2]).getRootNavigationRef();
  const obj2 = require(dependencyMap[2]);
  if (tmp2) {
    obj = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj);
  }
};
