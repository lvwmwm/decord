// Module ID: 14184
// Function ID: 14185
// Name: GiftCodeRow
// Dependencies: [19, 17, 1071, 21, 4913, 575, 4974, 11911, 6347, 9718, 7241, 5504, 5511, 1112, 14185, 2168, 1186, 2]

// Module 14184 (GiftCodeRow)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import native from "native" /* 1186 */;
import native2 from "native" /* 4974 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6347 */;
import showShareActionSheet2 from "showShareActionSheet" /* 9718 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11911 */;
import copyGiftCodeDefault from "copyGiftCode" /* 14185 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let importDefault;

let StyleSheet;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
({ View: c3, TouchableWithoutFeedback: closure_4, StyleSheet } = react_native);
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { giftCodeRow: { paddingHorizontal: 16 }, giftCodeRowLegacy: obj2, giftCodeShare: obj3, giftCodeInput: obj4, giftCodeInputContent: obj5, giftCodeShareButton: { marginLeft: 12 }, codeText: { flexShrink: 1 }, subTextRow: { marginBottom: 8, flexDirection: "row", alignItems: "center" }, expiryText: { fontSize: 12, lineHeight: 16 }, revokeHint: obj6, firstRow: { borderWidth: 0 }, buttonContainer: obj7 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: nativeDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
obj6 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 0 };
const metroImportAll = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GiftCodeRow extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleShare = function handleShare() {
      let giftCode;
      let obj3;
      let sku;
      ({ giftCode, sku } = require.props);
      const tmp = null != giftCode && null != sku;
      if (tmp) {
        const obj = GiftCodeUtils;
        obj.trackGiftCodeCopy(giftCode, sku);
        const obj2 = { url: obj3.getGiftCodeURL(giftCode.code) };
        const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
        showShareActionSheet2;
        obj3 = GiftCodeUtils;
        showShareActionSheet(obj2, AnalyticsSections.GIFT_CODE_ROW);
      }
    };
    return applyArgumentsResult;
  }
  handleRevoke(code) {
    const obj = GiftCodeActionCreatorsDefault;
    obj.revokeGiftCode(code);
  }
  render() {
    let InputFieldContainer;
    let canRevoke;
    let closure_1;
    let expiresAt;
    let expiresAt2;
    let intl;
    let intl2;
    let isFirst;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj5;
    let obj8;
    let tmp6Result2;
    const self = this;
    const tmp = closure_8(this.context);
    importDefault = tmp;
    const props = this.props;
    const giftCode = props.giftCode;
    const showCopy = props.showCopy;
    let tmp2 = undefined !== showCopy;
    ({ isFirst, canRevoke } = props);
    if (tmp2) {
      tmp2 = showCopy;
    }
    let items = [tmp.giftCodeRow, ];
    let firstRow = null;
    if (isFirst) {
      firstRow = tmp.firstRow;
    }
    let obj = { style: items, children: items4 };
    items[1] = firstRow;
    let obj2 = { style: tmp.giftCodeInput, children: closure_6(InputFieldContainer, obj8) };
    const obj3 = { style: tmp.giftCodeInputContent, children: items1 };
    InputFieldContainer = giftCode(self[10]).InputFieldContainer;
    const obj4 = { variant: "body-sm/normal", style: tmp.codeText, lineClamp: 1, children: obj5.getGiftCodeURL(giftCode.code) };
    const Text = giftCode(self[11]).Text;
    obj5 = giftCode(self[8]);
    items1 = [closure_6(Text, obj4), ];
    const obj6 = { style: items2, children: items3 };
    items2 = [, ];
    ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
    let tmp6Result = null;
    if (tmp2) {
      const obj7 = {
        size: "sm",
        text: intl.string(giftCode(self[13]).t.OpuAlK),
        onPress() {
            return copyGiftCodeDefault(giftCode, self.props.sku);
          }
      };
      const Button = tmp7(tmp8[12]).Button;
      intl = tmp7(tmp8[13]).intl;
      tmp6Result = tmp6(Button, obj7);
    }
    items3 = [tmp6Result, ];
    obj8 = { children: closure_7(closure_3, obj3) };
    const obj9 = { size: "sm", text: intl2.string(giftCode(self[13]).t.h5EvZM), onPress: this.handleShare };
    const Button2 = tmp7(tmp8[12]).Button;
    intl2 = tmp7(tmp8[13]).intl;
    items3[1] = closure_6(Button2, obj9);
    items1[1] = closure_7(closure_3, obj6);
    items4 = [closure_6(closure_3, obj2), ];
    const obj10 = { style: tmp.subTextRow, children: tmp6Result2 };
    tmp6Result2 = null;
    if (null != giftCode.expiresAt) {
      let formatResult;
      const Text2 = tmp7(tmp8[11]).Text;
      const intl3 = tmp7(tmp8[13]).intl;
      const format = intl3.format;
      const t = tmp7(tmp8[13]).t;
      if (canRevoke) {
        const obj11 = {
          hours: expiresAt2.diff(require("module_2168")(), "h"),
          revokeHook(children, arg1) {
                let code;
                let items;
                let obj2;
                const obj = {
                  accessibilityRole: "button",
                  onPress() {
                    return self.handleRevoke(code.code);
                  },
                  children: metroRequire(native.LegacyText, obj2)
                };
                obj2 = { style: items, children };
                items = [, ];
                ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
                return metroRequire(React3, obj, arg1);
              }
        };
        expiresAt2 = giftCode.expiresAt;
        const b1BfWD = t.b1BfWD;
        formatResult = format(b1BfWD, obj11);
      } else {
        const obj12 = { hours: expiresAt.diff(require("module_2168")(), "h") };
        expiresAt = giftCode.expiresAt;
        const ltVZcJ = t.ltVZcJ;
        formatResult = format(ltVZcJ, obj12);
      }
      const obj13 = { variant: "body-xs/normal", color: "text-subtle", children: formatResult };
      tmp6Result2 = tmp6(Text2, obj13);
    }
    items4[1] = closure_6(closure_3, obj10);
    return closure_7(closure_3, obj);
  }
}
const prototype = GiftCodeRow.prototype;
GiftCodeRow.contextType = native2.ThemeContext;
const result = size.fileFinishedImporting("modules/user_settings/gifting/native/GiftCodeRow.tsx");

export default GiftCodeRow;
