// Module ID: 8673
// Function ID: 8674
// Dependencies: [8663, 5006, 8659, 8674]

// Module 8673
import normalizeColor from "normalizeColor" /* 8659 */;
import _mod8663 from "module_8663" /* 8663 */;
import _mod8674 from "module_8674" /* 8674 */;
import "module_5006";
import module_5006_mod from "module_5006" /* 5006 */;

let items1;
let module_5006;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5006.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5006.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5006.bool, spellCheck: module_5006.bool, autoFocus: module_5006.bool, allowFontScaling: module_5006.bool, maxFontSizeMultiplier: module_5006.number, editable: module_5006.bool, keyboardType: module_5006.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5006.oneOf(["default", "light", "dark"]), returnKeyType: module_5006.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5006.string, maxLength: module_5006.number, numberOfLines: module_5006.number, disableFullscreenUI: module_5006.bool, enablesReturnKeyAutomatically: module_5006.bool, multiline: module_5006.bool, textBreakStrategy: module_5006.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5006.func, onFocus: module_5006.func, onChange: module_5006.func, onChangeText: module_5006.func, onContentSizeChange: module_5006.func, onTextInput: module_5006.func, onEndEditing: module_5006.func, onSelectionChange: module_5006.func, onSubmitEditing: module_5006.func, onKeyPress: module_5006.func, onLayout: module_5006.func, onScroll: module_5006.func, placeholder: module_5006.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5006.bool, secureTextEntry: module_5006.bool, selectionColor: normalizeColor, selection: module_5006.shape(obj2), value: module_5006.string, defaultValue: module_5006.string, clearButtonMode: module_5006.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5006.bool, selectTextOnFocus: module_5006.bool, blurOnSubmit: module_5006.bool, style: _mod8674.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5006.string, inlineImagePadding: module_5006.number, rejectResponderTermination: module_5006.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5006.bool, contextMenuHidden: module_5006.bool, inputAccessoryViewID: module_5006.string, textContentType: module_5006.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5006.bool };
const module_8663 = Object.assign(_mod8663);
module_5006 = module_5006_mod;
obj2 = { start: module_5006.number.isRequired, end: module_5006.number };
module_5006 = module_5006_mod;
oneOfType = module_5006.oneOfType;
module_5006 = module_5006_mod;
items1 = [module_5006.oneOf(items), ];
module_5006 = module_5006_mod;
const arrayOf = module_5006.arrayOf;
module_5006 = module_5006_mod;
items1[1] = arrayOf(module_5006.oneOf(items));
module_5006 = module_5006_mod;

export default obj;
