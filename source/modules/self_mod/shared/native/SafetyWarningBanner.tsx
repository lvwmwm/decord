// Module ID: 10411
// Function ID: 80201
// Name: SafetyWarningBanner
// Dependencies: [31, 27, 33, 4130, 689, 6837, 6842, 10131, 1212, 1273, 10412, 10413, 4126, 4543, 2]

// Module 10411 (SafetyWarningBanner)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
class SafetyWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    warningId = global.warningId;
    senderId = global.senderId;
    warningType = global.warningType;
    onDismiss = global.onDismiss;
    buttons = global.buttons;
    ({ header, description } = global);
    tmp = c9();
    effect = warningType.useEffect(() => {
      let obj = warningId(senderId[5]);
      obj = { name: channelId(senderId[6]).MetricEvents.SAFETY_WARNING_VIEW };
      obj.increment(obj);
    }, []);
    items = [, , , , ];
    items[0] = onDismiss;
    items[1] = channelId;
    items[2] = warningId;
    items[3] = senderId;
    items[4] = warningType;
    obj = { style: tmp.container };
    obj = {
      style: tmp.closeButton,
      onPress: warningType.useCallback(() => {
            if (null != onDismiss) {
              onDismiss();
            }
            let obj = channelId(senderId[7]);
            obj = { channelId, warningId, senderId, warningType, cta: channelId(senderId[7]).CtaEventTypes.USER_BANNER_DISMISS };
            obj.trackCtaEvent(obj);
          }, items)
    };
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t["1UatJ0"]);
    obj1 = { style: tmp.closeButtonIcon };
    obj1.source = require("registerAsset");
    obj1.size = require("Button").IconSizes.MEDIUM;
    obj.children = jsx(require("Button").Icon, obj1);
    items1 = [, , ];
    items1[0] = jsx(Pressable, obj);
    obj2 = { style: tmp.contentContainer };
    obj3 = { style: tmp.safetyShieldIconContainer };
    obj4 = { style: tmp.safetyShieldIcon, source: require("registerAsset"), resizeMode: "contain" };
    obj3.children = jsx(onDismiss, obj4);
    items2 = [, ];
    items2[0] = jsx(View, obj3);
    obj5 = { style: tmp.textContainer };
    obj6 = { style: tmp.text, variant: "heading-md/semibold", children: header };
    items3 = [, ];
    items3[0] = jsx(require("Text").Text, obj6);
    obj7 = { style: tmp.text, variant: "heading-sm/normal", children: description };
    items3[1] = jsx(require("Text").Text, obj7);
    obj5.children = items3;
    items2[1] = jsxs(View, obj5);
    obj2.children = items2;
    items1[1] = jsxs(View, obj2);
    obj8 = {
      style: tmp.buttonsContainer,
      children: buttons.map((variant) => {
            const obj = { size: "md" };
            variant = variant.variant;
            let str = "primary";
            if (null != variant) {
              str = variant;
            }
            obj.variant = str;
            ({ text: obj.text, text: obj.accessibilityLabel, onpress: obj.onPress } = variant);
            obj.grow = true;
            return outer1_7(channelId(senderId[13]).Button, obj, arg1);
          })
    };
    items1[2] = jsx(View, obj8);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
({ Image: closure_4, Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.safetyShieldIconContainer = { width: 42, height: 50 };
_createForOfIteratorHelperLoose.safetyShieldIcon = { flex: 1, width: "auto", height: "auto" };
_createForOfIteratorHelperLoose.textContainer = { flex: 1, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, marginRight: require("_createForOfIteratorHelperLoose").space.PX_40 };
let obj1 = { flex: 1, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, marginRight: require("_createForOfIteratorHelperLoose").space.PX_40 };
_createForOfIteratorHelperLoose.text = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.closeButton = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 1 };
let obj3 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 1 };
_createForOfIteratorHelperLoose.closeButtonIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.buttonsContainer = { flexDirection: "row", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { flexDirection: "row", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default SafetyWarningBanner;
export { SafetyWarningBanner };
