// Module ID: 7776
// Function ID: 7777
// Dependencies: [7766, 4663, 7762, 7777]

// Module 7776
import normalizeColor from "normalizeColor" /* 7762 */;
import _mod7766 from "module_7766" /* 7766 */;
import _mod7777 from "module_7777" /* 7777 */;
import "module_4663";
import module_4663_mod from "module_4663" /* 4663 */;

let items1;
let module_4663;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4663.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4663.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4663.bool, spellCheck: module_4663.bool, autoFocus: module_4663.bool, allowFontScaling: module_4663.bool, maxFontSizeMultiplier: module_4663.number, editable: module_4663.bool, keyboardType: module_4663.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4663.oneOf(["default", "light", "dark"]), returnKeyType: module_4663.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4663.string, maxLength: module_4663.number, numberOfLines: module_4663.number, disableFullscreenUI: module_4663.bool, enablesReturnKeyAutomatically: module_4663.bool, multiline: module_4663.bool, textBreakStrategy: module_4663.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4663.func, onFocus: module_4663.func, onChange: module_4663.func, onChangeText: module_4663.func, onContentSizeChange: module_4663.func, onTextInput: module_4663.func, onEndEditing: module_4663.func, onSelectionChange: module_4663.func, onSubmitEditing: module_4663.func, onKeyPress: module_4663.func, onLayout: module_4663.func, onScroll: module_4663.func, placeholder: module_4663.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4663.bool, secureTextEntry: module_4663.bool, selectionColor: normalizeColor, selection: module_4663.shape(obj2), value: module_4663.string, defaultValue: module_4663.string, clearButtonMode: module_4663.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4663.bool, selectTextOnFocus: module_4663.bool, blurOnSubmit: module_4663.bool, style: _mod7777.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4663.string, inlineImagePadding: module_4663.number, rejectResponderTermination: module_4663.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4663.bool, contextMenuHidden: module_4663.bool, inputAccessoryViewID: module_4663.string, textContentType: module_4663.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4663.bool };
const module_7766 = Object.assign(_mod7766);
module_4663 = module_4663_mod;
obj2 = { start: module_4663.number.isRequired, end: module_4663.number };
module_4663 = module_4663_mod;
oneOfType = module_4663.oneOfType;
module_4663 = module_4663_mod;
items1 = [module_4663.oneOf(items), ];
module_4663 = module_4663_mod;
const arrayOf = module_4663.arrayOf;
module_4663 = module_4663_mod;
items1[1] = arrayOf(module_4663.oneOf(items));
module_4663 = module_4663_mod;

export default obj;
