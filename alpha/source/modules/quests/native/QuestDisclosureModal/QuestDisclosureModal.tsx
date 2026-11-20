// Module ID: 16371
// Function ID: 16372
// Name: QuestDisclosureModal
// Dependencies: [21, 6909, 6912, 16370, 1112, 6975, 16372, 6972, 2]
// Exports: default

// Module 16371 (QuestDisclosureModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6909 */;
import AssetRegistryDefault from "AssetRegistry" /* 6912 */;
import Navigator2 from "Navigator" /* 6972 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6975 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 16370 */;
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner" /* 16372 */;
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
