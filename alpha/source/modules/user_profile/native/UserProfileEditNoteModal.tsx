// Module ID: 14869
// Function ID: 14870
// Name: UserProfileEditNoteModal
// Dependencies: [32, 19, 21, 1498, 6738, 7163, 1377, 1114, 5619, 6992, 14870, 2]
// Exports: default

// Module 14869 (UserProfileEditNoteModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import useNavigation from "useNavigation" /* 1498 */;
import Text_Text from "Text/Text" /* 5619 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import Navigator2 from "Navigator" /* 7163 */;
import UserProfileEditNote from "UserProfileEditNote" /* 14870 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let navigation;

const jsx = Fragment.jsx;
let size = size_mod;
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
      uri(true);
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
      return <Text variant="redesign/heading-18/bold" accessibilityRole="header">{intl.string(intl2.t.sHHsOM)}</Text>;
    },
    headerLeft: tmpResult2.getHeaderCloseButton(handleClose),
    render() {
      return jsx(UserProfileEditNote.default, { userId: require, onSave: importDefault, onClose: handleClose, shouldFocusInput });
    }
  };
  intl = tmp(1114).intl;
  tmpResult2 = NavigatorHeader;
  return tmp7(Navigator, obj3);
};
