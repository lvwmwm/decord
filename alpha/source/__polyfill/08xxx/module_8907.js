// Module ID: 8907
// Function ID: 8908
// Dependencies: [8897, 5084, 8893, 8908]

// Module 8907
import normalizeColor from "normalizeColor" /* 8893 */;
import _mod8897 from "module_8897" /* 8897 */;
import _mod8908 from "module_8908" /* 8908 */;
import "module_5084";
import module_5084_mod from "module_5084" /* 5084 */;

let items1;
let module_5084;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5084.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5084.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5084.bool, spellCheck: module_5084.bool, autoFocus: module_5084.bool, allowFontScaling: module_5084.bool, maxFontSizeMultiplier: module_5084.number, editable: module_5084.bool, keyboardType: module_5084.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5084.oneOf(["default", "light", "dark"]), returnKeyType: module_5084.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5084.string, maxLength: module_5084.number, numberOfLines: module_5084.number, disableFullscreenUI: module_5084.bool, enablesReturnKeyAutomatically: module_5084.bool, multiline: module_5084.bool, textBreakStrategy: module_5084.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5084.func, onFocus: module_5084.func, onChange: module_5084.func, onChangeText: module_5084.func, onContentSizeChange: module_5084.func, onTextInput: module_5084.func, onEndEditing: module_5084.func, onSelectionChange: module_5084.func, onSubmitEditing: module_5084.func, onKeyPress: module_5084.func, onLayout: module_5084.func, onScroll: module_5084.func, placeholder: module_5084.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5084.bool, secureTextEntry: module_5084.bool, selectionColor: normalizeColor, selection: module_5084.shape(obj2), value: module_5084.string, defaultValue: module_5084.string, clearButtonMode: module_5084.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5084.bool, selectTextOnFocus: module_5084.bool, blurOnSubmit: module_5084.bool, style: _mod8908.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5084.string, inlineImagePadding: module_5084.number, rejectResponderTermination: module_5084.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5084.bool, contextMenuHidden: module_5084.bool, inputAccessoryViewID: module_5084.string, textContentType: module_5084.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5084.bool };
const module_8897 = Object.assign(_mod8897);
module_5084 = module_5084_mod;
obj2 = { start: module_5084.number.isRequired, end: module_5084.number };
module_5084 = module_5084_mod;
oneOfType = module_5084.oneOfType;
module_5084 = module_5084_mod;
items1 = [module_5084.oneOf(items), ];
module_5084 = module_5084_mod;
const arrayOf = module_5084.arrayOf;
module_5084 = module_5084_mod;
items1[1] = arrayOf(module_5084.oneOf(items));
module_5084 = module_5084_mod;

export default obj;
