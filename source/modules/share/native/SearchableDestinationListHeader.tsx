// Module ID: 9842
// Function ID: 76316
// Name: SearchableDestinationListHeader
// Dependencies: [31, 27, 33, 4131, 689, 5094, 9050, 5087, 477, 6504, 2]
// Exports: default

// Module 9842 (SearchableDestinationListHeader)
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
    headerLeft: require(5087) /* HeaderBackImage */.getHeaderCloseButton(onClose),
    headerRight
  };
  const obj3 = require(5087) /* HeaderBackImage */;
  const tmp3 = View;
  let num;
  if (obj4.isIOS()) {
    if (!obj5.getIsWindowLarge()) {
      num = 0;
    }
    obj5 = require(6504) /* useIsWindowLarge */;
  }
  obj.headerStatusBarHeight = num;
  obj.children = jsx(require(5094) /* Background */.Header, {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: require(5087) /* HeaderBackImage */.getHeaderCloseButton(onClose),
    headerRight
  });
  return <tmp3 headerStyle={tmp.header} title={title} headerTitle={function headerTitle(children) {
    return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
  }} headerTitleAlign="center" headerLeft={require(5087) /* HeaderBackImage */.getHeaderCloseButton(onClose)} headerRight={headerRight} />;
};
