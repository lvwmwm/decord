// Module ID: 15038
// Function ID: 15039
// Name: CloseButton
// Dependencies: [21, 7315, 6932, 15037, 1233, 5579, 15039, 6940, 2]
// Exports: default

// Module 15038 (CloseButton)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import registerAssetDefault from "registerAsset" /* 6932 */;
import NavigationStack from "NavigationStack" /* 6940 */;
import HeaderActionButton from "HeaderActionButton" /* 7315 */;

function CloseButton() {
  const obj = {
    source: registerAssetDefault,
    onPress() {
      return callback(table[3]).hideModal();
    },
    accessibilityLabel: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: registerAssetDefault,
    onPress() {
      return callback(table[3]).hideModal();
    },
    accessibilityLabel: null
  });
}
const jsx = jsxProd.jsx;
let closure_4 = { DISCLOSURE: "disclosure" };
const result = set.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  ({ adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, cosponsorName: closure_4, isVideoQuest: CloseButton } = arg0);
  function onClose() {
    return callback2(15037).hideModal();
  }
  let obj = {
    headerLeft: CloseButton,
    headerRight() {
      return null;
    },
    headerTitle() {
      const obj = { title: null };
      const intl = callback(1233).intl;
      obj[0] = intl.string(callback(1233).t.GcsZKJ);
      return callback3(callback(5579).NavigatorHeader, obj);
    },
    render() {
      return closure_1_3(closure_1_1(closure_1_2[6]), { adCreativeType: closure_0, isTargetedDisclosure: closure_1, gamePublisher: closure_2, gameTitle: closure_3, onClose, cosponsorName: closure_4, isVideoQuest: closure_5 });
    }
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null });
};
