// Module ID: 8856
// Function ID: 8857
// Dependencies: [8846, 5044, 8842, 8857]

// Module 8856
import normalizeColor from "normalizeColor" /* 8842 */;
import _mod8846 from "module_8846" /* 8846 */;
import _mod8857 from "module_8857" /* 8857 */;
import "module_5044";
import module_5044_mod from "module_5044" /* 5044 */;

let items1;
let module_5044;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5044.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5044.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5044.bool, spellCheck: module_5044.bool, autoFocus: module_5044.bool, allowFontScaling: module_5044.bool, maxFontSizeMultiplier: module_5044.number, editable: module_5044.bool, keyboardType: module_5044.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5044.oneOf(["default", "light", "dark"]), returnKeyType: module_5044.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5044.string, maxLength: module_5044.number, numberOfLines: module_5044.number, disableFullscreenUI: module_5044.bool, enablesReturnKeyAutomatically: module_5044.bool, multiline: module_5044.bool, textBreakStrategy: module_5044.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5044.func, onFocus: module_5044.func, onChange: module_5044.func, onChangeText: module_5044.func, onContentSizeChange: module_5044.func, onTextInput: module_5044.func, onEndEditing: module_5044.func, onSelectionChange: module_5044.func, onSubmitEditing: module_5044.func, onKeyPress: module_5044.func, onLayout: module_5044.func, onScroll: module_5044.func, placeholder: module_5044.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5044.bool, secureTextEntry: module_5044.bool, selectionColor: normalizeColor, selection: module_5044.shape(obj2), value: module_5044.string, defaultValue: module_5044.string, clearButtonMode: module_5044.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5044.bool, selectTextOnFocus: module_5044.bool, blurOnSubmit: module_5044.bool, style: _mod8857.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5044.string, inlineImagePadding: module_5044.number, rejectResponderTermination: module_5044.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5044.bool, contextMenuHidden: module_5044.bool, inputAccessoryViewID: module_5044.string, textContentType: module_5044.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5044.bool };
const module_8846 = Object.assign(_mod8846);
module_5044 = module_5044_mod;
obj2 = { start: module_5044.number.isRequired, end: module_5044.number };
module_5044 = module_5044_mod;
oneOfType = module_5044.oneOfType;
module_5044 = module_5044_mod;
items1 = [module_5044.oneOf(items), ];
module_5044 = module_5044_mod;
const arrayOf = module_5044.arrayOf;
module_5044 = module_5044_mod;
items1[1] = arrayOf(module_5044.oneOf(items));
module_5044 = module_5044_mod;

export default obj;
