// Module ID: 9006
// Function ID: 9007
// Dependencies: [8996, 5211, 8992, 9007]

// Module 9006
import normalizeColor from "normalizeColor" /* 8992 */;
import _mod8996 from "module_8996" /* 8996 */;
import _mod9007 from "module_9007" /* 9007 */;
import "module_5211";
import module_5211_mod from "module_5211" /* 5211 */;

let items1;
let module_5211;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5211.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5211.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5211.bool, spellCheck: module_5211.bool, autoFocus: module_5211.bool, allowFontScaling: module_5211.bool, maxFontSizeMultiplier: module_5211.number, editable: module_5211.bool, keyboardType: module_5211.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5211.oneOf(["default", "light", "dark"]), returnKeyType: module_5211.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5211.string, maxLength: module_5211.number, numberOfLines: module_5211.number, disableFullscreenUI: module_5211.bool, enablesReturnKeyAutomatically: module_5211.bool, multiline: module_5211.bool, textBreakStrategy: module_5211.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5211.func, onFocus: module_5211.func, onChange: module_5211.func, onChangeText: module_5211.func, onContentSizeChange: module_5211.func, onTextInput: module_5211.func, onEndEditing: module_5211.func, onSelectionChange: module_5211.func, onSubmitEditing: module_5211.func, onKeyPress: module_5211.func, onLayout: module_5211.func, onScroll: module_5211.func, placeholder: module_5211.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5211.bool, secureTextEntry: module_5211.bool, selectionColor: normalizeColor, selection: module_5211.shape(obj2), value: module_5211.string, defaultValue: module_5211.string, clearButtonMode: module_5211.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5211.bool, selectTextOnFocus: module_5211.bool, blurOnSubmit: module_5211.bool, style: _mod9007.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5211.string, inlineImagePadding: module_5211.number, rejectResponderTermination: module_5211.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5211.bool, contextMenuHidden: module_5211.bool, inputAccessoryViewID: module_5211.string, textContentType: module_5211.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5211.bool };
const module_8996 = Object.assign(_mod8996);
module_5211 = module_5211_mod;
obj2 = { start: module_5211.number.isRequired, end: module_5211.number };
module_5211 = module_5211_mod;
oneOfType = module_5211.oneOfType;
module_5211 = module_5211_mod;
items1 = [module_5211.oneOf(items), ];
module_5211 = module_5211_mod;
const arrayOf = module_5211.arrayOf;
module_5211 = module_5211_mod;
items1[1] = arrayOf(module_5211.oneOf(items));
module_5211 = module_5211_mod;

export default obj;
