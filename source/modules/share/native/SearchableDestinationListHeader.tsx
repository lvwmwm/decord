// Module ID: 9882
// Function ID: 76445
// Name: SearchableDestinationListHeader
// Dependencies: [31, 27, 33, 4165, 689, 5128, 9094, 5121, 477, 6540, 2]
// Exports: default

// Module 9882 (SearchableDestinationListHeader)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: "transparent" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  let dependencyMap;
  let headerRight;
  let onClose;
  let require;
  let title;
  ({ subtitle: require, subtitleColor: dependencyMap } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: require(5121) /* HeaderBackImage */.getHeaderCloseButton(onClose),
    headerRight
  };
  const obj3 = require(5121) /* HeaderBackImage */;
  const tmp3 = View;
  let num;
  if (obj4.isIOS()) {
    if (!obj5.getIsWindowLarge()) {
      num = 0;
    }
    obj5 = require(6540) /* useIsWindowLarge */;
  }
  obj.headerStatusBarHeight = num;
  obj.children = jsx(require(5128) /* Background */.Header, {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: require(5121) /* HeaderBackImage */.getHeaderCloseButton(onClose),
    headerRight
  });
  return <tmp3 headerStyle={tmp.header} title={title} headerTitle={function headerTitle(children) {
    return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
  }} headerTitleAlign="center" headerLeft={require(5121) /* HeaderBackImage */.getHeaderCloseButton(onClose)} headerRight={headerRight} />;
};
