// Module ID: 8454
// Function ID: 8455
// Dependencies: [8444, 4949, 8440, 8455]

// Module 8454
import normalizeColor from "normalizeColor" /* 8440 */;
import _mod8444 from "module_8444" /* 8444 */;
import _mod8455 from "module_8455" /* 8455 */;
import "module_4949";
import module_4949_mod from "module_4949" /* 4949 */;

let items1;
let module_4949;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4949.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4949.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4949.bool, spellCheck: module_4949.bool, autoFocus: module_4949.bool, allowFontScaling: module_4949.bool, maxFontSizeMultiplier: module_4949.number, editable: module_4949.bool, keyboardType: module_4949.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4949.oneOf(["default", "light", "dark"]), returnKeyType: module_4949.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4949.string, maxLength: module_4949.number, numberOfLines: module_4949.number, disableFullscreenUI: module_4949.bool, enablesReturnKeyAutomatically: module_4949.bool, multiline: module_4949.bool, textBreakStrategy: module_4949.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4949.func, onFocus: module_4949.func, onChange: module_4949.func, onChangeText: module_4949.func, onContentSizeChange: module_4949.func, onTextInput: module_4949.func, onEndEditing: module_4949.func, onSelectionChange: module_4949.func, onSubmitEditing: module_4949.func, onKeyPress: module_4949.func, onLayout: module_4949.func, onScroll: module_4949.func, placeholder: module_4949.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4949.bool, secureTextEntry: module_4949.bool, selectionColor: normalizeColor, selection: module_4949.shape(obj2), value: module_4949.string, defaultValue: module_4949.string, clearButtonMode: module_4949.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4949.bool, selectTextOnFocus: module_4949.bool, blurOnSubmit: module_4949.bool, style: _mod8455.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4949.string, inlineImagePadding: module_4949.number, rejectResponderTermination: module_4949.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4949.bool, contextMenuHidden: module_4949.bool, inputAccessoryViewID: module_4949.string, textContentType: module_4949.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4949.bool };
const module_8444 = Object.assign(_mod8444);
module_4949 = module_4949_mod;
obj2 = { start: module_4949.number.isRequired, end: module_4949.number };
module_4949 = module_4949_mod;
oneOfType = module_4949.oneOfType;
module_4949 = module_4949_mod;
items1 = [module_4949.oneOf(items), ];
module_4949 = module_4949_mod;
const arrayOf = module_4949.arrayOf;
module_4949 = module_4949_mod;
items1[1] = arrayOf(module_4949.oneOf(items));
module_4949 = module_4949_mod;

export default obj;
