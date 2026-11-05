// Module ID: 15136
// Function ID: 15137
// Name: UserProfileEditNoteModal
// Dependencies: [32, 19, 21, 1499, 6882, 7309, 1357, 1113, 5763, 7142, 15137, 2]
// Exports: default

// Module 15136 (UserProfileEditNoteModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useNavigation from "useNavigation" /* 1499 */;
import Text_Text from "Text/Text" /* 5763 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import NavigatorHeader from "NavigatorHeader" /* 7142 */;
import Navigator2 from "Navigator" /* 7309 */;
import UserProfileEditNote from "UserProfileEditNote" /* 15137 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  let intl;
  let obj4;
  let obj5;
  let obj6;
  let tmpResult2;
  let userId;
  ({ userId: require, onSave: importDefault, onBack: dependencyMap } = arg0);
  let shouldFocusInput;
  function handleClose() {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const tmp4 = shouldFocusInput(handleClose.useState(false), 2);
  const onSave = tmp4[1];
  const items = [navigation];
  shouldFocusInput = tmp4[0];
  const effect = handleClose.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      closure_1_1(true);
    }
  }), items);
  const Navigator = Navigator2.Navigator;
  utils_PlatformUtils;
  const obj3 = { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: obj4, screens: obj5 };
  obj4 = undefined;
  const tmp7 = jsx;
  const tmpResult = utils_PlatformUtils;
  if (!tmpResult.isAndroid()) {
    obj4 = { height: 56 };
  }
  obj5 = { root: obj6 };
  obj6 = {
    title: intl.string(intl2.t.sHHsOM),
    headerTitle() {
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      return <Text variant="heading-md/semibold" accessibilityRole="header">{intl.string(intl2.t.sHHsOM)}</Text>;
    },
    headerLeft: tmpResult2.getHeaderCloseButton(handleClose),
    render() {
      return jsx(UserProfileEditNote.default, { userId: require, onSave: importDefault, onClose: handleClose, shouldFocusInput });
    }
  };
  intl = tmp(1113).intl;
  tmpResult2 = NavigatorHeader;
  return tmp7(Navigator, obj3);
};
