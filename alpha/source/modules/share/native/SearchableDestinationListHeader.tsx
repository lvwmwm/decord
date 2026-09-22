// Module ID: 11255
// Function ID: 11256
// Name: SearchableDestinationListHeader
// Dependencies: [19, 21, 4757, 576, 1612, 5850, 8110, 5843, 1364, 7190, 2]
// Exports: default

// Module 11255 (SearchableDestinationListHeader)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import NavigatorHeader from "NavigatorHeader" /* 5843 */;
import _mod5850 from "module_5850" /* 5850 */;
import HeaderShared from "HeaderShared" /* 8110 */;
import noop from "module_19" /* 19 */;

const useIsWindowLarge = tmp5(7190);
require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, header: null };
const obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  ({ subtitle: require, subtitleColor: importDefault } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = closure_4();
  const obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  };
  ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } = tmp);
  const tmp4 = jsx;
  if (!obj3.isIOS()) {
    let num = useSafeAreaInsetsDefault().top;
  } else {
    num = 0;
    const tmp5Result = useIsWindowLarge;
  }
  obj.headerStatusBarHeight = num + nativeDefault.space.PX_8;
  return tmp4(_mod5850.Header, obj);
};
