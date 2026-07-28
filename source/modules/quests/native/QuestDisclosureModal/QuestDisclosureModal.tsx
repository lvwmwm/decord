// Module ID: 14111
// Function ID: 107851
// Name: CloseButton
// Dependencies: [33, 6731, 7676, 14110, 1212, 5121, 14112, 5552, 2]
// Exports: default

// Module 14111 (CloseButton)
import { jsx } from "jsxProd";

function CloseButton() {
  const obj = {
    source: importDefault(7676),
    onPress() {
      return outer1_1(outer1_2[3]).hideModal();
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  return jsx(require(6731) /* HeaderActionButton */.HeaderActionButton, {
    source: importDefault(7676),
    onPress() {
      return outer1_1(outer1_2[3]).hideModal();
    }
  });
}
let closure_4 = { DISCLOSURE: "disclosure" };
const result = require("registerAsset").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  let closure_4;
  let dependencyMap;
  let importDefault;
  let jsx;
  let require;
  ({ isTargetedDisclosure: require, gamePublisher: importDefault, gameTitle: dependencyMap, cosponsorName: jsx, isVideoQuest: closure_4 } = arg0);
  function onClose() {
    return outer1_1(outer1_2[3]).hideModal();
  }
  let obj = {
    headerLeft: onClose,
    headerRight() {
      return null;
    },
    headerTitle() {
      const obj = {};
      const intl = outer1_0(outer1_2[4]).intl;
      obj.title = intl.string(outer1_0(outer1_2[4]).t.GcsZKJ);
      return outer1_3(outer1_0(outer1_2[5]).NavigatorHeader, obj);
    },
    render() {
      return outer1_3(outer1_1(outer1_2[6]), { isTargetedDisclosure: closure_0, gamePublisher: closure_1, gameTitle: closure_2, onClose, cosponsorName: closure_3, isVideoQuest: closure_4 });
    }
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5552) /* NavigationStack */.Navigator, { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE });
};
