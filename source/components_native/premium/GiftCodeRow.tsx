// Module ID: 12377
// Function ID: 94642
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12377 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp3 = arg1(dependencyMap[6]);
({ View: closure_8, TouchableWithoutFeedback: closure_9 } = tmp3);
const AnalyticsSections = arg1(dependencyMap[7]).AnalyticsSections;
const importAllResult = importAll(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { giftCodeRow: { paddingHorizontal: 16 } };
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
obj.giftCodeRowLegacy = obj;
const tmp4 = arg1(dependencyMap[8]);
obj.giftCodeShare = { borderRadius: importDefault(dependencyMap[10]).radii.xs, borderWidth: tmp3.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[10]).colors.INPUT_BACKGROUND_DEFAULT };
const obj1 = { borderRadius: importDefault(dependencyMap[10]).radii.xs, borderWidth: tmp3.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[10]).colors.INPUT_BACKGROUND_DEFAULT };
obj.giftCodeInput = { marginTop: importDefault(dependencyMap[10]).space.PX_16, marginBottom: importDefault(dependencyMap[10]).space.PX_4 };
const obj3 = { <string:1334598284>: 18058521, <string:3229045644>: 302139792, <string:2213734789>: 302191137, padding: importDefault(dependencyMap[10]).space.PX_8 };
obj.giftCodeInputContent = obj3;
obj.giftCodeShareButton = { marginLeft: 12 };
obj.codeText = { flexShrink: 1 };
obj.subTextRow = { diversity: false, accessible: false, status: false };
obj.expiryText = { 9223372036854775807: "166185917b52ede00e3e20d3f1f7faeb", 0: "CheckmarkSmallIcon" };
const obj2 = { marginTop: importDefault(dependencyMap[10]).space.PX_16, marginBottom: importDefault(dependencyMap[10]).space.PX_4 };
obj.revokeHint = { color: importDefault(dependencyMap[10]).unsafe_rawColors.BLUE_345 };
obj.firstRow = { borderWidth: 0 };
obj.buttonContainer = { "Null": null, "Null": null };
let closure_13 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class GiftCodeRow {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, GiftCodeRow);
      items1 = [...items];
      obj = closure_6(GiftCodeRow);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GiftCodeRow = tmp2Result;
      tmp2Result.handleShare = () => {
        let giftCode;
        let sku;
        ({ giftCode, sku } = tmp2Result.props);
        if (tmp) {
          let obj = tmp2Result(closure_2[11]);
          obj.trackGiftCodeCopy(giftCode, sku);
          obj = {};
          const obj2 = tmp2Result(closure_2[12]);
          obj.url = tmp2Result(closure_2[11]).getGiftCodeURL(giftCode.code);
          obj2.showShareActionSheet(obj, constants.GIFT_CODE_ROW);
          const obj4 = tmp2Result(closure_2[11]);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = GiftCodeRow;
  callback2(GiftCodeRow, PureComponent);
  let obj = {
    key: "handleRevoke",
    value(arg0) {
      callback(closure_2[13]).revokeGiftCode(arg0);
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value() {
      const self = this;
      const GiftCodeRow = this;
      const tmp = callback6(this.context);
      const props = this.props;
      const giftCode = props.giftCode;
      const isRefreshEnabled = props.isRefreshEnabled;
      let obj = {};
      const items = [tmp.giftCodeRow, , ];
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
        const obj2 = { isArray: "white", Button: "M327.173 68.5751L331.924 67.1099C332.025 67.0366 332.025 66.9634 331.924 66.9634L327.173 65.4249L325.051 62.0549C325.051 61.9817 324.949 61.9817 324.848 62.0549L322.827 65.4249H322.726L318.076 66.9634C317.975 66.9634 317.975 67.0366 318.076 67.1099L322.726 68.5751H322.827L324.848 71.9451C324.949 72.0183 325.051 72.0183 325.051 71.9451L327.173 68.5751Z", textAlign: "white", style: tmp.codeText };
        let obj10 = GiftCodeRow(giftCode[11]);
        obj2.children = obj10.getGiftCodeURL(giftCode.code);
        const items1 = [callback4(GiftCodeRow(giftCode[15]).Text, obj2), ];
        let obj3 = {};
        const items2 = [, ];
        ({ buttonContainer: arr5[0], giftCodeShareButton: arr5[1] } = tmp);
        obj3.style = items2;
        const obj4 = { size: "sm" };
        const intl2 = GiftCodeRow(giftCode[17]).intl;
        obj4.text = intl2.string(GiftCodeRow(giftCode[17]).t.h5EvZM);
        obj4.onPress = self.handleShare;
        obj3.children = callback4(GiftCodeRow(giftCode[16]).Button, obj4);
        items1[1] = callback4(closure_8, obj3);
        obj1.children = items1;
        obj.children = callback5(closure_8, obj1);
        obj.children = callback4(GiftCodeRow(giftCode[14]).InputFieldContainer, obj);
        let tmp11 = callback4(closure_8, obj);
      } else {
        const obj5 = { style: tmp.giftCodeShare };
        const obj6 = { isArray: "white", Button: "M327.173 68.5751L331.924 67.1099C332.025 67.0366 332.025 66.9634 331.924 66.9634L327.173 65.4249L325.051 62.0549C325.051 61.9817 324.949 61.9817 324.848 62.0549L322.827 65.4249H322.726L318.076 66.9634C317.975 66.9634 317.975 67.0366 318.076 67.1099L322.726 68.5751H322.827L324.848 71.9451C324.949 72.0183 325.051 72.0183 325.051 71.9451L327.173 68.5751Z", textAlign: "white", style: tmp.codeText };
        obj3 = GiftCodeRow(giftCode[11]);
        obj6.children = obj3.getGiftCodeURL(giftCode.code);
        const items3 = [callback4(GiftCodeRow(giftCode[15]).Text, obj6), ];
        const obj7 = {};
        const items4 = [, ];
        ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
        obj7.style = items4;
        const obj8 = { size: "sm" };
        const intl = GiftCodeRow(giftCode[17]).intl;
        obj8.text = intl.string(GiftCodeRow(giftCode[17]).t.h5EvZM);
        obj8.onPress = self.handleShare;
        obj7.children = callback4(GiftCodeRow(giftCode[16]).Button, obj8);
        items3[1] = callback4(closure_8, obj7);
        obj5.children = items3;
        tmp11 = callback5(closure_8, obj5);
      }
      const items5 = [tmp11, ];
      const obj9 = { style: tmp.subTextRow };
      let tmp19 = null;
      if (null != giftCode.expiresAt) {
        obj10 = { hasMaxConnections: true, isBoostOnlySubscription: "/assets/design/components/Icon/native/redesign/generated/images" };
        const intl3 = GiftCodeRow(giftCode[17]).intl;
        const obj11 = {};
        const expiresAt = giftCode.expiresAt;
        obj11.hours = expiresAt.diff(tmp(giftCode[18])(), "h");
        obj11.revokeHook = function revokeHook(children) {
          let obj = {
            accessibilityRole: "button",
            onPress() {
              return closure_0.handleRevoke(code.code);
            },
            children: callback(self(giftCode[19]).LegacyText, obj)
          };
          obj = { style: items, children };
          const items = [, ];
          ({ expiryText: arr[0], revokeHint: arr[1] } = tmp);
          return callback(closure_9, obj, arg1);
        };
        obj10.children = intl3.format(GiftCodeRow(giftCode[17]).t.b1BfWD, obj11);
        tmp19 = callback4(GiftCodeRow(giftCode[15]).Text, obj10);
      }
      obj9.children = tmp19;
      items5[1] = callback4(closure_8, obj9);
      obj.children = items5;
      return callback5(closure_8, obj);
    }
  };
  items[1] = obj;
  return callback(GiftCodeRow, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[20]).ThemeContext;
const obj4 = { color: importDefault(dependencyMap[10]).unsafe_rawColors.BLUE_345 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("components_native/premium/GiftCodeRow.tsx");

export default tmp5;
