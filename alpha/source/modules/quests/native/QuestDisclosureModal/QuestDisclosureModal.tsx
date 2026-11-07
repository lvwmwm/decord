// Module ID: 17399
// Function ID: 17400
// Name: QuestDisclosureModal
// Dependencies: [21, 7630, 8429, 17398, 1113, 7064, 17400, 7231, 2]
// Exports: default

// Module 17399 (QuestDisclosureModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import NavigatorHeader2 from "NavigatorHeader" /* 7064 */;
import Navigator2 from "Navigator" /* 7231 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7630 */;
import AssetRegistryDefault from "AssetRegistry" /* 8429 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17398 */;
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner" /* 17400 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onClose() {
    const obj = QuestDisclosureModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
}
const jsx = Fragment.jsx;
const constants = { DISCLOSURE: "disclosure" };
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  let adCreativeType;
  let closure_4;
  let cosponsorName;
  let gamePublisher;
  let gameTitle;
  let isTargetedDisclosure;
  let isVideoQuest;
  ({ adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, cosponsorName: closure_4, isVideoQuest: CloseButton } = arg0);
  function onClose() {
    const obj = QuestDisclosureModalActionCreatorsDefault;
    return obj.hideModal();
  }
  let obj = {
    headerLeft: CloseButton,
    headerRight: function blank() {
      return null;
    },
    headerTitle() {
      const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
      const intl = intl2.intl;
      return <NavigatorHeader title={intl.string(intl2.t.GcsZKJ)} />;
    },
    render() {
      return jsx(QuestDisclosureModalInnerDefault, { adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, onClose, cosponsorName, isVideoQuest: CloseButton });
    }
  };
  const Navigator = Navigator2.Navigator;
  let intl = intl2.intl;
  return <Navigator screens={{ [closure_4.DISCLOSURE]: obj }} initialRouteName={constants.DISCLOSURE} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
};
