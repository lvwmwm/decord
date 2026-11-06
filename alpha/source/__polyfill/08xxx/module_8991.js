// Module ID: 8991
// Function ID: 8992
// Dependencies: [8981, 5209, 8977, 8992]

// Module 8991
import normalizeColor from "normalizeColor" /* 8977 */;
import _mod8981 from "module_8981" /* 8981 */;
import _mod8992 from "module_8992" /* 8992 */;
import "module_5209";
import module_5209_mod from "module_5209" /* 5209 */;

let items1;
let module_5209;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5209.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5209.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5209.bool, spellCheck: module_5209.bool, autoFocus: module_5209.bool, allowFontScaling: module_5209.bool, maxFontSizeMultiplier: module_5209.number, editable: module_5209.bool, keyboardType: module_5209.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5209.oneOf(["default", "light", "dark"]), returnKeyType: module_5209.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5209.string, maxLength: module_5209.number, numberOfLines: module_5209.number, disableFullscreenUI: module_5209.bool, enablesReturnKeyAutomatically: module_5209.bool, multiline: module_5209.bool, textBreakStrategy: module_5209.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5209.func, onFocus: module_5209.func, onChange: module_5209.func, onChangeText: module_5209.func, onContentSizeChange: module_5209.func, onTextInput: module_5209.func, onEndEditing: module_5209.func, onSelectionChange: module_5209.func, onSubmitEditing: module_5209.func, onKeyPress: module_5209.func, onLayout: module_5209.func, onScroll: module_5209.func, placeholder: module_5209.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5209.bool, secureTextEntry: module_5209.bool, selectionColor: normalizeColor, selection: module_5209.shape(obj2), value: module_5209.string, defaultValue: module_5209.string, clearButtonMode: module_5209.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5209.bool, selectTextOnFocus: module_5209.bool, blurOnSubmit: module_5209.bool, style: _mod8992.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5209.string, inlineImagePadding: module_5209.number, rejectResponderTermination: module_5209.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5209.bool, contextMenuHidden: module_5209.bool, inputAccessoryViewID: module_5209.string, textContentType: module_5209.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5209.bool };
const module_8981 = Object.assign(_mod8981);
module_5209 = module_5209_mod;
obj2 = { start: module_5209.number.isRequired, end: module_5209.number };
module_5209 = module_5209_mod;
oneOfType = module_5209.oneOfType;
module_5209 = module_5209_mod;
items1 = [module_5209.oneOf(items), ];
module_5209 = module_5209_mod;
const arrayOf = module_5209.arrayOf;
module_5209 = module_5209_mod;
items1[1] = arrayOf(module_5209.oneOf(items));
module_5209 = module_5209_mod;

export default obj;
