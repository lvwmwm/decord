// Module ID: 13874
// Function ID: 104972
// Name: CloseButton
// Dependencies: []
// Exports: default

// Module 13874 (CloseButton)
function CloseButton() {
  const obj = {
    source: importDefault(dependencyMap[2]),
    onPress() {
      return callback(closure_2[3]).hideModal();
    }
  };
  const intl = require(dependencyMap[4]).intl;
  obj.accessibilityLabel = intl.string(require(dependencyMap[4]).t.cpT0Cq);
  return jsx(require(dependencyMap[1]).HeaderActionButton, obj);
}
const jsx = require(dependencyMap[0]).jsx;
let closure_4 = { DISCLOSURE: "disclosure" };
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  ({ isTargetedDisclosure: closure_0, gamePublisher: closure_1, gameTitle: closure_2, cosponsorName: closure_3, isVideoQuest: closure_4 } = arg0);
  function onClose() {
    return callback2(closure_2[3]).hideModal();
  }
  let obj = {
    headerLeft: onClose,
    headerRight() {
      return null;
    },
    headerTitle() {
      const obj = {};
      const intl = callback(closure_2[4]).intl;
      obj.title = intl.string(callback(closure_2[4]).t.GcsZKJ);
      return callback3(callback(closure_2[5]).NavigatorHeader, obj);
    },
    render() {
      return callback3(callback2(closure_2[6]), { isTargetedDisclosure: closure_0, gamePublisher: callback2, gameTitle: closure_2, onClose, cosponsorName: callback3, isVideoQuest: closure_4 });
    }
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE };
  const intl = require(dependencyMap[4]).intl;
  obj.headerBackTitle = intl.string(require(dependencyMap[4]).t.13/7kX);
  return jsx(require(dependencyMap[7]).Navigator, obj);
};
