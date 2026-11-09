// Module ID: 8973
// Function ID: 8974
// Dependencies: [8963, 5179, 8959, 8974]

// Module 8973
import normalizeColor from "normalizeColor" /* 8959 */;
import _mod8963 from "module_8963" /* 8963 */;
import _mod8974 from "module_8974" /* 8974 */;
import "module_5179";
import module_5179_mod from "module_5179" /* 5179 */;

let items1;
let module_5179;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5179.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5179.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5179.bool, spellCheck: module_5179.bool, autoFocus: module_5179.bool, allowFontScaling: module_5179.bool, maxFontSizeMultiplier: module_5179.number, editable: module_5179.bool, keyboardType: module_5179.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5179.oneOf(["default", "light", "dark"]), returnKeyType: module_5179.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5179.string, maxLength: module_5179.number, numberOfLines: module_5179.number, disableFullscreenUI: module_5179.bool, enablesReturnKeyAutomatically: module_5179.bool, multiline: module_5179.bool, textBreakStrategy: module_5179.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5179.func, onFocus: module_5179.func, onChange: module_5179.func, onChangeText: module_5179.func, onContentSizeChange: module_5179.func, onTextInput: module_5179.func, onEndEditing: module_5179.func, onSelectionChange: module_5179.func, onSubmitEditing: module_5179.func, onKeyPress: module_5179.func, onLayout: module_5179.func, onScroll: module_5179.func, placeholder: module_5179.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5179.bool, secureTextEntry: module_5179.bool, selectionColor: normalizeColor, selection: module_5179.shape(obj2), value: module_5179.string, defaultValue: module_5179.string, clearButtonMode: module_5179.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5179.bool, selectTextOnFocus: module_5179.bool, blurOnSubmit: module_5179.bool, style: _mod8974.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5179.string, inlineImagePadding: module_5179.number, rejectResponderTermination: module_5179.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5179.bool, contextMenuHidden: module_5179.bool, inputAccessoryViewID: module_5179.string, textContentType: module_5179.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5179.bool };
const module_8963 = Object.assign(_mod8963);
module_5179 = module_5179_mod;
obj2 = { start: module_5179.number.isRequired, end: module_5179.number };
module_5179 = module_5179_mod;
oneOfType = module_5179.oneOfType;
module_5179 = module_5179_mod;
items1 = [module_5179.oneOf(items), ];
module_5179 = module_5179_mod;
const arrayOf = module_5179.arrayOf;
module_5179 = module_5179_mod;
items1[1] = arrayOf(module_5179.oneOf(items));
module_5179 = module_5179_mod;

export default obj;
