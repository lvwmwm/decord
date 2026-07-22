// Module ID: 10401
// Function ID: 80151
// Name: SafetyWarningBanner
// Dependencies: []

// Module 10401 (SafetyWarningBanner)
class SafetyWarningBanner {
  constructor(arg0) {
    channelId = global.channelId;
    arg1 = channelId;
    warningId = global.warningId;
    importDefault = warningId;
    senderId = global.senderId;
    dependencyMap = senderId;
    warningType = global.warningType;
    importAll = warningType;
    onDismiss = global.onDismiss;
    Image = onDismiss;
    buttons = global.buttons;
    ({ header, description } = global);
    tmp = closure_9();
    effect = importAll.useEffect(() => {
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
      onPress: importAll.useCallback(() => {
            if (null != onDismiss) {
              onDismiss();
            }
            let obj = channelId(senderId[7]);
            obj = { channelId, warningId, senderId, warningType, cta: channelId(senderId[7]).CtaEventTypes.USER_BANNER_DISMISS };
            obj.trackCtaEvent(obj);
          }, items)
    };
    intl = arg1(dependencyMap[8]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.1UatJ0);
    obj1 = { style: tmp.closeButtonIcon };
    obj1.source = importDefault(dependencyMap[10]);
    obj1.size = arg1(dependencyMap[9]).IconSizes.MEDIUM;
    obj.children = jsx(arg1(dependencyMap[9]).Icon, obj1);
    items1 = [, , ];
    items1[0] = jsx(Pressable, obj);
    obj2 = { style: tmp.contentContainer };
    obj3 = { style: tmp.safetyShieldIconContainer };
    obj4 = { style: tmp.safetyShieldIcon, source: importDefault(dependencyMap[11]), resizeMode: "contain" };
    obj3.children = jsx(Image, obj4);
    items2 = [, ];
    items2[0] = jsx(View, obj3);
    obj5 = { style: tmp.textContainer };
    obj6 = { style: tmp.text, variant: "heading-md/semibold", children: header };
    items3 = [, ];
    items3[0] = jsx(arg1(dependencyMap[12]).Text, obj6);
    obj7 = { style: tmp.text, variant: "heading-sm/normal", children: description };
    items3[1] = jsx(arg1(dependencyMap[12]).Text, obj7);
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
            return closure_7(channelId(senderId[13]).Button, obj, arg1);
          })
    };
    items1[2] = jsx(View, obj8);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingVertical: importDefault(dependencyMap[4]).space.PX_12 };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LOW);
obj.container = obj;
obj.contentContainer = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
obj.safetyShieldIconContainer = { "Null": 8, "Null": 16 };
obj.safetyShieldIcon = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
const tmp3 = arg1(dependencyMap[2]);
obj.textContainer = { flex: 1, marginLeft: importDefault(dependencyMap[4]).space.PX_16, marginRight: importDefault(dependencyMap[4]).space.PX_40 };
const obj1 = { flex: 1, marginLeft: importDefault(dependencyMap[4]).space.PX_16, marginRight: importDefault(dependencyMap[4]).space.PX_40 };
obj.text = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const obj2 = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.closeButton = { position: "absolute", top: importDefault(dependencyMap[4]).space.PX_8, right: importDefault(dependencyMap[4]).space.PX_16, zIndex: 1 };
const obj3 = { position: "absolute", top: importDefault(dependencyMap[4]).space.PX_8, right: importDefault(dependencyMap[4]).space.PX_16, zIndex: 1 };
obj.closeButtonIcon = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj4 = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.buttonsContainer = { flexDirection: "row", marginTop: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_8 };
let closure_9 = obj.createStyles(obj);
const obj5 = { flexDirection: "row", marginTop: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default SafetyWarningBanner;
export { SafetyWarningBanner };
