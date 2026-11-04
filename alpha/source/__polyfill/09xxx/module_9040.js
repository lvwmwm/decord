// Module ID: 9040
// Function ID: 9041
// Dependencies: [9030, 5180, 9026, 9041]

// Module 9040
import normalizeColor from "normalizeColor" /* 9026 */;
import _mod9030 from "module_9030" /* 9030 */;
import _mod9041 from "module_9041" /* 9041 */;
import "module_5180";
import module_5180_mod from "module_5180" /* 5180 */;

let items1;
let module_5180;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5180.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5180.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5180.bool, spellCheck: module_5180.bool, autoFocus: module_5180.bool, allowFontScaling: module_5180.bool, maxFontSizeMultiplier: module_5180.number, editable: module_5180.bool, keyboardType: module_5180.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5180.oneOf(["default", "light", "dark"]), returnKeyType: module_5180.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5180.string, maxLength: module_5180.number, numberOfLines: module_5180.number, disableFullscreenUI: module_5180.bool, enablesReturnKeyAutomatically: module_5180.bool, multiline: module_5180.bool, textBreakStrategy: module_5180.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5180.func, onFocus: module_5180.func, onChange: module_5180.func, onChangeText: module_5180.func, onContentSizeChange: module_5180.func, onTextInput: module_5180.func, onEndEditing: module_5180.func, onSelectionChange: module_5180.func, onSubmitEditing: module_5180.func, onKeyPress: module_5180.func, onLayout: module_5180.func, onScroll: module_5180.func, placeholder: module_5180.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5180.bool, secureTextEntry: module_5180.bool, selectionColor: normalizeColor, selection: module_5180.shape(obj2), value: module_5180.string, defaultValue: module_5180.string, clearButtonMode: module_5180.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5180.bool, selectTextOnFocus: module_5180.bool, blurOnSubmit: module_5180.bool, style: _mod9041.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5180.string, inlineImagePadding: module_5180.number, rejectResponderTermination: module_5180.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5180.bool, contextMenuHidden: module_5180.bool, inputAccessoryViewID: module_5180.string, textContentType: module_5180.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5180.bool };
const module_9030 = Object.assign(_mod9030);
module_5180 = module_5180_mod;
obj2 = { start: module_5180.number.isRequired, end: module_5180.number };
module_5180 = module_5180_mod;
oneOfType = module_5180.oneOfType;
module_5180 = module_5180_mod;
items1 = [module_5180.oneOf(items), ];
module_5180 = module_5180_mod;
const arrayOf = module_5180.arrayOf;
module_5180 = module_5180_mod;
items1[1] = arrayOf(module_5180.oneOf(items));
module_5180 = module_5180_mod;

export default obj;
