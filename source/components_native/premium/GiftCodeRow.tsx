// Module ID: 12496
// Function ID: 96826
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 653, 33, 4130, 689, 4366, 8332, 8195, 5780, 4126, 4543, 1212, 3712, 1273, 3842, 2]

// Module 12496 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import Text from "Text";
import getSystemLocale from "getSystemLocale";
import closure_7 from "t";
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ View: closure_8, TouchableWithoutFeedback: closure_9 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { giftCodeRow: { paddingHorizontal: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.giftCodeRowLegacy = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.giftCodeShare = obj1;
_createForOfIteratorHelperLoose.giftCodeInput = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.giftCodeInputContent = obj3;
_createForOfIteratorHelperLoose.giftCodeShareButton = { marginLeft: 12 };
_createForOfIteratorHelperLoose.codeText = { flexShrink: 1 };
_createForOfIteratorHelperLoose.subTextRow = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.expiryText = { fontSize: 12, lineHeight: 16 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.revokeHint = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345 };
_createForOfIteratorHelperLoose.firstRow = { borderWidth: 0 };
_createForOfIteratorHelperLoose.buttonContainer = { flexShrink: 0, flexGrow: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp5 = ((PureComponent) => {
  class GiftCodeRow {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.handleShare = () => {
        let giftCode;
        let sku;
        ({ giftCode, sku } = tmp2Result.props);
        if (tmp) {
          let obj = GiftCodeRow(outer2_2[11]);
          obj.trackGiftCodeCopy(giftCode, sku);
          obj = {};
          const obj2 = GiftCodeRow(outer2_2[12]);
          obj.url = GiftCodeRow(outer2_2[11]).getGiftCodeURL(giftCode.code);
          obj2.showShareActionSheet(obj, outer2_10.GIFT_CODE_ROW);
          const obj4 = GiftCodeRow(outer2_2[11]);
        }
      };
      return tmp2Result;
    }
  }
  callback2(GiftCodeRow, PureComponent);
  let obj = {
    key: "handleRevoke",
    value(arg0) {
      outer1_1(outer1_2[13]).revokeGiftCode(arg0);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value() {
      let self = this;
      self = this;
      const tmp = outer1_13(this.context);
      let closure_1 = tmp;
      const props = this.props;
      const giftCode = props.giftCode;
      const isRefreshEnabled = props.isRefreshEnabled;
      let obj = {};
      let items = [tmp.giftCodeRow, , ];
      let giftCodeRowLegacy = null;
      if (!isRefreshEnabled) {
        giftCodeRowLegacy = tmp.giftCodeRowLegacy;
      }
      items[1] = giftCodeRowLegacy;
      let firstRow = null;
      if (props.isFirst) {
        firstRow = tmp.firstRow;
      }
      items[2] = firstRow;
      obj.style = items;
      if (isRefreshEnabled) {
        obj = { style: tmp.giftCodeInput };
        obj = {};
        const obj1 = { style: tmp.giftCodeInputContent };
        const obj2 = { variant: "text-sm/normal", style: tmp.codeText, lineClamp: 1 };
        let obj10 = GiftCodeRow(outer1_2[11]);
        obj2.children = obj10.getGiftCodeURL(giftCode.code);
        const items1 = [outer1_11(GiftCodeRow(outer1_2[15]).Text, obj2), ];
        let obj3 = {};
        const items2 = [, ];
        ({ buttonContainer: arr5[0], giftCodeShareButton: arr5[1] } = tmp);
        obj3.style = items2;
        const obj4 = { size: "sm" };
        const intl2 = GiftCodeRow(outer1_2[17]).intl;
        obj4.text = intl2.string(GiftCodeRow(outer1_2[17]).t.h5EvZM);
        obj4.onPress = self.handleShare;
        obj3.children = outer1_11(GiftCodeRow(outer1_2[16]).Button, obj4);
        items1[1] = outer1_11(outer1_8, obj3);
        obj1.children = items1;
        obj.children = outer1_12(outer1_8, obj1);
        obj.children = outer1_11(GiftCodeRow(outer1_2[14]).InputFieldContainer, obj);
        let tmp11 = outer1_11(outer1_8, obj);
      } else {
        const obj5 = { style: tmp.giftCodeShare };
        const obj6 = { variant: "text-sm/normal", style: tmp.codeText, lineClamp: 1 };
        obj3 = GiftCodeRow(outer1_2[11]);
        obj6.children = obj3.getGiftCodeURL(giftCode.code);
        const items3 = [outer1_11(GiftCodeRow(outer1_2[15]).Text, obj6), ];
        const obj7 = {};
        const items4 = [, ];
        ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
        obj7.style = items4;
        const obj8 = { size: "sm" };
        const intl = GiftCodeRow(outer1_2[17]).intl;
        obj8.text = intl.string(GiftCodeRow(outer1_2[17]).t.h5EvZM);
        obj8.onPress = self.handleShare;
        obj7.children = outer1_11(GiftCodeRow(outer1_2[16]).Button, obj8);
        items3[1] = outer1_11(outer1_8, obj7);
        obj5.children = items3;
        tmp11 = outer1_12(outer1_8, obj5);
      }
      const items5 = [tmp11, ];
      const obj9 = { style: tmp.subTextRow };
      let tmp19 = null;
      if (null != giftCode.expiresAt) {
        obj10 = { variant: "text-xs/normal", color: "text-subtle" };
        const intl3 = GiftCodeRow(outer1_2[17]).intl;
        const obj11 = {};
        const expiresAt = giftCode.expiresAt;
        obj11.hours = expiresAt.diff(outer1_1(outer1_2[18])(), "h");
        obj11.revokeHook = function revokeHook(children) {
          obj = {
            accessibilityRole: "button",
            onPress() {
              return outer1_0.handleRevoke(outer1_2.code);
            },
            children: outer2_11(GiftCodeRow(outer2_2[19]).LegacyText, obj)
          };
          obj = { style: items, children };
          items = [, ];
          ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
          return outer2_11(outer2_9, obj, arg1);
        };
        obj10.children = intl3.format(GiftCodeRow(outer1_2[17]).t.b1BfWD, obj11);
        tmp19 = outer1_11(GiftCodeRow(outer1_2[15]).Text, obj10);
      }
      obj9.children = tmp19;
      items5[1] = outer1_11(outer1_8, obj9);
      obj.children = items5;
      return outer1_12(outer1_8, obj);
    }
  };
  items[1] = obj;
  return callback(GiftCodeRow, items);
})(importAllResult.PureComponent);
tmp5.contextType = require("ManaContext").ThemeContext;
let obj4 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345 };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/premium/GiftCodeRow.tsx");

export default tmp5;
