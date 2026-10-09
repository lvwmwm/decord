// Module ID: 15304
// Function ID: 15305
// Name: QuestDisclosureModal
// Dependencies: [21, 558, 576, 15303, 7082, 5010, 1126, 6205, 15305, 6686, 2]

// Module 15304 (QuestDisclosureModal)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import AssetRegistryDefault from "AssetRegistry" /* 5010 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6205 */;
import Navigator2 from "Navigator" /* 6686 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7082 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15303 */;
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner" /* 15305 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const constants = { DISCLOSURE: "disclosure" };
let ReactCompilerGating = ReactCompilerGating_mod;
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? (function CloseButton() {
  let first;
  let tmp5;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      const obj = QuestDisclosureModalActionCreatorsDefault;
      return obj.hideModal();
    }
    cResult[0] = onClose;
    first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const HeaderActionButton = tmp(7082).HeaderActionButton;
    const intl = tmp(1126).intl;
    const tmp8 = <HeaderActionButton source={AssetRegistryDefault} onPress={first} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onClose() {
    const obj = QuestDisclosureModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDisclosureModal(adCreativeType) {
  let gamePublisher;
  let obj4;
  let onClose;
  let tmp5;
  let tmp6;
  let obj = adCreativeType(gamePublisher[2]);
  const cResult = obj.c(13);
  adCreativeType = adCreativeType.adCreativeType;
  const isTargetedDisclosure = adCreativeType.isTargetedDisclosure;
  gamePublisher = adCreativeType.gamePublisher;
  const gameTitle = adCreativeType.gameTitle;
  const cosponsorName = adCreativeType.cosponsorName;
  const isVideoQuest = adCreativeType.isVideoQuest;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    onClose = function onClose() {
      const obj = isTargetedDisclosure(gamePublisher[3]);
      return obj.hideModal();
    };
    cResult[0] = onClose;
  } else {
    onClose = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function blank() {
      return null;
    }
    cResult[1] = blank;
    tmp5 = blank;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _() {
      let intl;
      const obj = { title: intl.string(adCreativeType(gamePublisher[6]).t.GcsZKJ) };
      const NavigatorHeader = adCreativeType(gamePublisher[7]).NavigatorHeader;
      intl = adCreativeType(gamePublisher[6]).intl;
      return gameTitle(NavigatorHeader, obj);
    };
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === adCreativeType) {
    if (cResult[4] === cosponsorName) {
      if (cResult[5] === gamePublisher) {
        if (cResult[6] === gameTitle) {
          if (cResult[7] === isTargetedDisclosure) {
            let tmp7;
            let tmp8;
            let tmp10;
            if (cResult[8] === isVideoQuest) {
              tmp7 = cResult[9];
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[6]).intl;
              const stringResult = intl.string(adCreativeType(gamePublisher[6]).t["13/7kX"]);
              cResult[10] = stringResult;
              tmp8 = stringResult;
            } else {
              tmp8 = cResult[10];
            }
            if (cResult[11] !== tmp7) {
              const obj2 = { screens: tmp7, initialRouteName: cosponsorName.DISCLOSURE, headerBackTitle: tmp8 };
              const tmp13 = gameTitle(adCreativeType(gamePublisher[9]).Navigator, obj2);
              cResult[11] = tmp7;
              cResult[12] = tmp13;
              tmp10 = tmp13;
            } else {
              tmp10 = cResult[12];
            }
            return tmp10;
          }
        }
      }
    }
  }
  const obj3 = { [closure_4.DISCLOSURE]: obj4 };
  obj4 = {
    headerLeft: isVideoQuest,
    headerRight: tmp5,
    headerTitle: tmp6,
    render() {
      return jsx(QuestDisclosureModalInnerDefault, { adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, onClose, cosponsorName, isVideoQuest });
    }
  };
  cResult[3] = adCreativeType;
  cResult[4] = cosponsorName;
  cResult[5] = gamePublisher;
  cResult[6] = gameTitle;
  cResult[7] = isTargetedDisclosure;
  cResult[8] = isVideoQuest;
  cResult[9] = obj3;
  tmp7 = obj3;
}) : (function QuestDisclosureModal(arg0) {
  let adCreativeType;
  let closure_4;
  let closure_5;
  let cosponsorName;
  let gamePublisher;
  let gameTitle;
  let isTargetedDisclosure;
  let isVideoQuest;
  ({ adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, cosponsorName: closure_4, isVideoQuest: closure_5 } = arg0);
  function onClose() {
    const obj = QuestDisclosureModalActionCreatorsDefault;
    return obj.hideModal();
  }
  let obj = {
    headerLeft,
    headerRight: function blank() {
      return null;
    },
    headerTitle() {
      const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
      const intl = intl2.intl;
      return <NavigatorHeader title={intl.string(intl2.t.GcsZKJ)} />;
    },
    render() {
      return jsx(QuestDisclosureModalInnerDefault, { adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, onClose, cosponsorName, isVideoQuest });
    }
  };
  const Navigator = Navigator2.Navigator;
  let intl = intl2.intl;
  return <Navigator screens={{ [closure_4.DISCLOSURE]: obj }} initialRouteName={constants.DISCLOSURE} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default tmp2;
