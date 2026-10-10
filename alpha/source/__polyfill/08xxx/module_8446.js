// Module ID: 8446
// Function ID: 8447
// Dependencies: [8436, 4947, 8432, 8447]

// Module 8446
import normalizeColor from "normalizeColor" /* 8432 */;
import _mod8436 from "module_8436" /* 8436 */;
import _mod8447 from "module_8447" /* 8447 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let items1;
let module_4947;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4947.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4947.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4947.bool, spellCheck: module_4947.bool, autoFocus: module_4947.bool, allowFontScaling: module_4947.bool, maxFontSizeMultiplier: module_4947.number, editable: module_4947.bool, keyboardType: module_4947.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4947.oneOf(["default", "light", "dark"]), returnKeyType: module_4947.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4947.string, maxLength: module_4947.number, numberOfLines: module_4947.number, disableFullscreenUI: module_4947.bool, enablesReturnKeyAutomatically: module_4947.bool, multiline: module_4947.bool, textBreakStrategy: module_4947.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4947.func, onFocus: module_4947.func, onChange: module_4947.func, onChangeText: module_4947.func, onContentSizeChange: module_4947.func, onTextInput: module_4947.func, onEndEditing: module_4947.func, onSelectionChange: module_4947.func, onSubmitEditing: module_4947.func, onKeyPress: module_4947.func, onLayout: module_4947.func, onScroll: module_4947.func, placeholder: module_4947.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4947.bool, secureTextEntry: module_4947.bool, selectionColor: normalizeColor, selection: module_4947.shape(obj2), value: module_4947.string, defaultValue: module_4947.string, clearButtonMode: module_4947.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4947.bool, selectTextOnFocus: module_4947.bool, blurOnSubmit: module_4947.bool, style: _mod8447.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4947.string, inlineImagePadding: module_4947.number, rejectResponderTermination: module_4947.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4947.bool, contextMenuHidden: module_4947.bool, inputAccessoryViewID: module_4947.string, textContentType: module_4947.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4947.bool };
const module_8436 = Object.assign(_mod8436);
module_4947 = module_4947_mod;
obj2 = { start: module_4947.number.isRequired, end: module_4947.number };
module_4947 = module_4947_mod;
oneOfType = module_4947.oneOfType;
module_4947 = module_4947_mod;
items1 = [module_4947.oneOf(items), ];
module_4947 = module_4947_mod;
const arrayOf = module_4947.arrayOf;
module_4947 = module_4947_mod;
items1[1] = arrayOf(module_4947.oneOf(items));
module_4947 = module_4947_mod;

export default obj;
