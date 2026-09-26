// Module ID: 15384
// Function ID: 15385
// Name: QuestDisclosureModal
// Dependencies: [21, 7651, 7269, 15383, 1115, 5873, 15385, 7277, 2]
// Exports: default

// Module 15384 (QuestDisclosureModal)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef7269 from "module_7269" /* 7269 */;
import Navigator from "Navigator" /* 7277 */;
import HeaderActionButton from "HeaderActionButton" /* 7651 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15383 */;
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner" /* 15385 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const obj = {
    source: _modDef7269,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7269,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const jsx = jsxProd.jsx;
const constants = { DISCLOSURE: "disclosure" };
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  ({ adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, cosponsorName: closure_4, isVideoQuest: CloseButton } = arg0);
  function onClose() {
    return isTargetedDisclosure(gamePublisher[3]).hideModal();
  }
  const obj2 = {
    screens: {
      [closure_4.DISCLOSURE]: {
        headerLeft: CloseButton,
        headerRight() {
          return null;
        },
        headerTitle() {
          const obj = { title: null };
          const intl = adCreativeType(gamePublisher[4]).intl;
          obj.title = intl.string(adCreativeType(gamePublisher[4]).t.GcsZKJ);
          return gameTitle(adCreativeType(gamePublisher[5]).NavigatorHeader, obj);
        },
        render() {
          return jsx(QuestDisclosureModalInnerDefault, { adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, onClose, cosponsorName, isVideoQuest });
        }
      }
    },
    initialRouteName: constants.DISCLOSURE,
    headerBackTitle: null
  };
  let intl = util.intl;
  obj2.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, {
    screens: {
      [closure_4.DISCLOSURE]: {
        headerLeft: CloseButton,
        headerRight() {
          return null;
        },
        headerTitle() {
          const obj = { title: null };
          const intl = adCreativeType(gamePublisher[4]).intl;
          obj.title = intl.string(adCreativeType(gamePublisher[4]).t.GcsZKJ);
          return gameTitle(adCreativeType(gamePublisher[5]).NavigatorHeader, obj);
        },
        render() {
          return jsx(QuestDisclosureModalInnerDefault, { adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, onClose, cosponsorName, isVideoQuest });
        }
      }
    },
    initialRouteName: constants.DISCLOSURE,
    headerBackTitle: null
  });
};
