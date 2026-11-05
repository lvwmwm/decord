// Module ID: 9045
// Function ID: 9046
// Dependencies: [9035, 5182, 9031, 9046]

// Module 9045
import normalizeColor from "normalizeColor" /* 9031 */;
import _mod9035 from "module_9035" /* 9035 */;
import _mod9046 from "module_9046" /* 9046 */;
import "module_5182";
import module_5182_mod from "module_5182" /* 5182 */;

let items1;
let module_5182;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5182.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5182.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5182.bool, spellCheck: module_5182.bool, autoFocus: module_5182.bool, allowFontScaling: module_5182.bool, maxFontSizeMultiplier: module_5182.number, editable: module_5182.bool, keyboardType: module_5182.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5182.oneOf(["default", "light", "dark"]), returnKeyType: module_5182.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5182.string, maxLength: module_5182.number, numberOfLines: module_5182.number, disableFullscreenUI: module_5182.bool, enablesReturnKeyAutomatically: module_5182.bool, multiline: module_5182.bool, textBreakStrategy: module_5182.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5182.func, onFocus: module_5182.func, onChange: module_5182.func, onChangeText: module_5182.func, onContentSizeChange: module_5182.func, onTextInput: module_5182.func, onEndEditing: module_5182.func, onSelectionChange: module_5182.func, onSubmitEditing: module_5182.func, onKeyPress: module_5182.func, onLayout: module_5182.func, onScroll: module_5182.func, placeholder: module_5182.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5182.bool, secureTextEntry: module_5182.bool, selectionColor: normalizeColor, selection: module_5182.shape(obj2), value: module_5182.string, defaultValue: module_5182.string, clearButtonMode: module_5182.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5182.bool, selectTextOnFocus: module_5182.bool, blurOnSubmit: module_5182.bool, style: _mod9046.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5182.string, inlineImagePadding: module_5182.number, rejectResponderTermination: module_5182.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5182.bool, contextMenuHidden: module_5182.bool, inputAccessoryViewID: module_5182.string, textContentType: module_5182.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5182.bool };
const module_9035 = Object.assign(_mod9035);
module_5182 = module_5182_mod;
obj2 = { start: module_5182.number.isRequired, end: module_5182.number };
module_5182 = module_5182_mod;
oneOfType = module_5182.oneOfType;
module_5182 = module_5182_mod;
items1 = [module_5182.oneOf(items), ];
module_5182 = module_5182_mod;
const arrayOf = module_5182.arrayOf;
module_5182 = module_5182_mod;
items1[1] = arrayOf(module_5182.oneOf(items));
module_5182 = module_5182_mod;

export default obj;
