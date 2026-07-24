// Module ID: 12118
// Function ID: 94933
// Name: CollectionItem
// Dependencies: [31, 27, 33, 4130, 689, 12026, 12114, 4126, 2]
// Exports: default

// Module 12118 (CollectionItem)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
function CollectionItem(arg0) {
  let componentConfig;
  let resolveFieldValue;
  ({ componentConfig, resolveFieldValue } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let image;
  if (null != componentConfig) {
    image = componentConfig.fields.image;
  }
  const items = [require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  let obj = require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
  let obj1 = require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const singleStringOrSkeleton1 = obj1.resolveSingleStringOrSkeleton(componentConfig, "description", resolveFieldValue);
  obj = { style: tmp.item };
  if (null != fieldValue) {
    obj = {};
    obj1 = { uri: fieldValue.media.url };
    obj.source = obj1;
    obj.style = tmp.itemImage;
    obj.resizeMode = "contain";
    let tmp11 = callback(closure_2, obj);
  } else {
    const obj2 = { style: tmp.itemImage };
    tmp11 = callback(require(12114) /* ImageSkeleton */.ImageSkeleton, obj2);
  }
  const items1 = [tmp11, ];
  const obj3 = { style: tmp.itemContent };
  if ("value" === singleStringOrSkeleton.status) {
    const obj4 = { variant: "text-xs/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    let tmp19 = callback(require(4126) /* Text */.Text, obj4);
  } else {
    tmp19 = callback(require(12114) /* ImageSkeleton */.TextSkeleton, { variant: "text-xs/medium", widthChars: 6 });
  }
  const items2 = [tmp19, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj5 = { variant: "text-xxs/medium", color: "text-subtle", lineClamp: 2, children: singleStringOrSkeleton1.text };
    let tmp26 = callback(require(4126) /* Text */.Text, obj5);
  } else {
    tmp26 = callback(require(12114) /* ImageSkeleton */.TextSkeleton, { variant: "text-xxs/medium", widthChars: 10 });
  }
  items2[1] = tmp26;
  obj3.children = items2;
  items1[1] = closure_5(closure_3, obj3);
  obj.children = items1;
  return closure_5(closure_3, obj);
}
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", flexWrap: "wrap", rowGap: require("_createForOfIteratorHelperLoose").space.PX_16, columnGap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.grid = _createForOfIteratorHelperLoose;
let obj1 = { width: "47%", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.item = obj1;
let obj2 = { width: 48, height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.itemImage = obj2;
let obj3 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4, minWidth: 0 };
_createForOfIteratorHelperLoose.itemContent = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx");

export default function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
  let bottomConfig;
  let resolveFieldValue;
  ({ bottomConfig, resolveFieldValue } = arg0);
  let obj = { style: _createForOfIteratorHelperLoose().grid };
  obj = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
  const items = [callback(CollectionItem, obj), , , ];
  obj = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
  items[1] = callback(CollectionItem, obj);
  items[2] = callback(CollectionItem, { componentConfig: bottomConfig.components.item_3, resolveFieldValue });
  items[3] = callback(CollectionItem, { componentConfig: bottomConfig.components.item_4, resolveFieldValue });
  obj.children = items;
  return callback2(closure_3, obj);
};
