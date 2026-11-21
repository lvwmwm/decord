// Module ID: 9280
// Function ID: 9281
// Dependencies: [9270, 4954, 9266, 9281]

// Module 9280
import normalizeColor from "normalizeColor" /* 9266 */;
import _mod9270 from "module_9270" /* 9270 */;
import _mod9281 from "module_9281" /* 9281 */;
import "module_4954";
import module_4954_mod from "module_4954" /* 4954 */;

let items1;
let module_4954;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4954.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4954.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4954.bool, spellCheck: module_4954.bool, autoFocus: module_4954.bool, allowFontScaling: module_4954.bool, maxFontSizeMultiplier: module_4954.number, editable: module_4954.bool, keyboardType: module_4954.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4954.oneOf(["default", "light", "dark"]), returnKeyType: module_4954.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4954.string, maxLength: module_4954.number, numberOfLines: module_4954.number, disableFullscreenUI: module_4954.bool, enablesReturnKeyAutomatically: module_4954.bool, multiline: module_4954.bool, textBreakStrategy: module_4954.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4954.func, onFocus: module_4954.func, onChange: module_4954.func, onChangeText: module_4954.func, onContentSizeChange: module_4954.func, onTextInput: module_4954.func, onEndEditing: module_4954.func, onSelectionChange: module_4954.func, onSubmitEditing: module_4954.func, onKeyPress: module_4954.func, onLayout: module_4954.func, onScroll: module_4954.func, placeholder: module_4954.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4954.bool, secureTextEntry: module_4954.bool, selectionColor: normalizeColor, selection: module_4954.shape(obj2), value: module_4954.string, defaultValue: module_4954.string, clearButtonMode: module_4954.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4954.bool, selectTextOnFocus: module_4954.bool, blurOnSubmit: module_4954.bool, style: _mod9281.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4954.string, inlineImagePadding: module_4954.number, rejectResponderTermination: module_4954.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4954.bool, contextMenuHidden: module_4954.bool, inputAccessoryViewID: module_4954.string, textContentType: module_4954.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4954.bool };
const module_9270 = Object.assign(_mod9270);
module_4954 = module_4954_mod;
obj2 = { start: module_4954.number.isRequired, end: module_4954.number };
module_4954 = module_4954_mod;
oneOfType = module_4954.oneOfType;
module_4954 = module_4954_mod;
items1 = [module_4954.oneOf(items), ];
module_4954 = module_4954_mod;
const arrayOf = module_4954.arrayOf;
module_4954 = module_4954_mod;
items1[1] = arrayOf(module_4954.oneOf(items));
module_4954 = module_4954_mod;

export default obj;
