// Module ID: 10244
// Function ID: 10245
// Name: SearchableDestinationListHeader
// Dependencies: [19, 21, 4303, 712, 1609, 5277, 8382, 5270, 500, 7641, 2]
// Exports: default

// Module 10244 (SearchableDestinationListHeader)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { headerLeftContainer: null, headerRightContainer: null, header: null };
createCacheKey = { paddingLeft: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingRight: require("Themes").space.PX_16 };
const obj1 = { paddingRight: require("Themes").space.PX_16 };
createCacheKey[2] = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("createCacheKey").fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  let headerRight;
  let importDefault;
  let onClose;
  let require;
  let title;
  ({ subtitle: require, subtitleColor: importDefault } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = createCacheKey();
  const obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return outer1_3(outer1_0(outer1_2[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: null,
    headerRight: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  };
  obj[4] = require(5270) /* HeaderBackImage */.getHeaderCloseButton(onClose);
  obj[5] = headerRight;
  ({ headerLeftContainer: obj[6], headerRightContainer: obj[7] } = tmp);
  const obj2 = require(5270) /* HeaderBackImage */;
  const tmp2 = importDefault;
  const tmp4 = jsx;
  const tmp5 = require;
  if (!obj3.isIOS()) {
    let num = importDefault(1609)().top;
  } else {
    num = 0;
    const tmp5Result = tmp5(7641);
  }
  obj[8] = num + tmp2(712).space.PX_8;
  return tmp4(require(5277) /* Background */.Header, obj);
};
