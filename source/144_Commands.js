// Module ID: 144
// Function ID: 2343
// Name: Commands
// Dependencies: [116, 38, 42]

// Module 144 (Commands)
let obj = { uiViewClassName: "AndroidTextInput", bubblingEventTypes: { topEndEditing: { phasedRegistrationNames: { bubbled: "onEndEditing", captured: "onEndEditingCapture" } }, topKeyPress: { phasedRegistrationNames: { bubbled: "onKeyPress", captured: "onKeyPressCapture" } }, topSubmitEditing: { phasedRegistrationNames: { bubbled: "onSubmitEditing", captured: "onSubmitEditingCapture" } } }, directEventTypes: { topScroll: { registrationName: "onScroll" } } };
obj = { acceptDragAndDropTypes: true, maxFontSizeMultiplier: true, adjustsFontSizeToFit: true, minimumFontScale: true, autoFocus: true, placeholder: true, inlineImagePadding: true, contextMenuHidden: true, textShadowColor: null, maxLength: true, selectTextOnFocus: true, textShadowRadius: true, underlineColorAndroid: null, textDecorationLine: true, submitBehavior: true, textAlignVertical: true, fontStyle: true, textShadowOffset: true };
obj = { process: require("processColor").default };
obj.textShadowColor = obj;
const tmp2 = require("codegenNativeCommands")({ supportedCommands: ["focus", "blur", "setTextAndSelection"] });
obj.underlineColorAndroid = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj.selectionColor = { process: require("processColor").default };
const obj2 = { process: require("processColor").default };
obj.selectionHandleColor = { process: require("processColor").default };
const obj3 = { process: require("processColor").default };
obj.placeholderTextColor = { process: require("processColor").default };
obj.importantForAutofill = true;
obj.lineHeight = true;
obj.textTransform = true;
obj.returnKeyType = true;
obj.keyboardType = true;
obj.multiline = true;
const obj4 = { process: require("processColor").default };
obj.color = { process: require("processColor").default };
obj.autoComplete = true;
obj.numberOfLines = true;
obj.letterSpacing = true;
obj.returnKeyLabel = true;
obj.fontSize = true;
obj.onKeyPress = true;
const obj5 = { process: require("processColor").default };
obj.cursorColor = { process: require("processColor").default };
obj.text = true;
obj.showSoftInputOnFocus = true;
obj.textAlign = true;
obj.autoCapitalize = true;
obj.autoCorrect = true;
obj.caretHidden = true;
obj.secureTextEntry = true;
obj.textBreakStrategy = true;
obj.onScroll = true;
obj.onContentSizeChange = true;
obj.disableFullscreenUI = true;
obj.includeFontPadding = true;
obj.fontWeight = true;
obj.fontFamily = true;
obj.allowFontScaling = true;
obj.onSelectionChange = true;
obj.mostRecentEventCount = true;
obj.inlineImageLeft = true;
obj.editable = true;
obj.fontVariant = true;
obj.borderBottomRightRadius = true;
const obj6 = { process: require("processColor").default };
obj.borderBottomColor = { process: require("processColor").default };
obj.borderRadius = true;
const obj7 = { process: require("processColor").default };
obj.borderRightColor = { process: require("processColor").default };
const obj8 = { process: require("processColor").default };
obj.borderColor = { process: require("processColor").default };
obj.borderTopRightRadius = true;
obj.borderStyle = true;
obj.borderBottomLeftRadius = true;
const obj9 = { process: require("processColor").default };
obj.borderLeftColor = { process: require("processColor").default };
obj.borderTopLeftRadius = true;
const obj10 = { process: require("processColor").default };
obj.borderTopColor = { process: require("processColor").default };
obj.validAttributes = obj;
const obj11 = { process: require("processColor").default };

export default require("get").get("AndroidTextInput", () => obj);
export const Commands = tmp2;
export const __INTERNAL_VIEW_CONFIG = obj;
