// Module ID: 8430
// Function ID: 8431
// Dependencies: [8420, 4908, 8416, 8431]

// Module 8430
import normalizeColor from "normalizeColor" /* 8416 */;
import _mod8420 from "module_8420" /* 8420 */;
import _mod8431 from "module_8431" /* 8431 */;
import "module_4908";
import module_4908_mod from "module_4908" /* 4908 */;

let items1;
let module_4908;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4908.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4908.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4908.bool, spellCheck: module_4908.bool, autoFocus: module_4908.bool, allowFontScaling: module_4908.bool, maxFontSizeMultiplier: module_4908.number, editable: module_4908.bool, keyboardType: module_4908.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4908.oneOf(["default", "light", "dark"]), returnKeyType: module_4908.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4908.string, maxLength: module_4908.number, numberOfLines: module_4908.number, disableFullscreenUI: module_4908.bool, enablesReturnKeyAutomatically: module_4908.bool, multiline: module_4908.bool, textBreakStrategy: module_4908.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4908.func, onFocus: module_4908.func, onChange: module_4908.func, onChangeText: module_4908.func, onContentSizeChange: module_4908.func, onTextInput: module_4908.func, onEndEditing: module_4908.func, onSelectionChange: module_4908.func, onSubmitEditing: module_4908.func, onKeyPress: module_4908.func, onLayout: module_4908.func, onScroll: module_4908.func, placeholder: module_4908.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4908.bool, secureTextEntry: module_4908.bool, selectionColor: normalizeColor, selection: module_4908.shape(obj2), value: module_4908.string, defaultValue: module_4908.string, clearButtonMode: module_4908.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4908.bool, selectTextOnFocus: module_4908.bool, blurOnSubmit: module_4908.bool, style: _mod8431.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4908.string, inlineImagePadding: module_4908.number, rejectResponderTermination: module_4908.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4908.bool, contextMenuHidden: module_4908.bool, inputAccessoryViewID: module_4908.string, textContentType: module_4908.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4908.bool };
const module_8420 = Object.assign(_mod8420);
module_4908 = module_4908_mod;
obj2 = { start: module_4908.number.isRequired, end: module_4908.number };
module_4908 = module_4908_mod;
oneOfType = module_4908.oneOfType;
module_4908 = module_4908_mod;
items1 = [module_4908.oneOf(items), ];
module_4908 = module_4908_mod;
const arrayOf = module_4908.arrayOf;
module_4908 = module_4908_mod;
items1[1] = arrayOf(module_4908.oneOf(items));
module_4908 = module_4908_mod;

export default obj;
