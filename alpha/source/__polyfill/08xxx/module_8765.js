// Module ID: 8765
// Function ID: 8766
// Dependencies: [8755, 4958, 8751, 8766]

// Module 8765
import normalizeColor from "normalizeColor" /* 8751 */;
import _mod8755 from "module_8755" /* 8755 */;
import _mod8766 from "module_8766" /* 8766 */;
import "module_4958";
import module_4958_mod from "module_4958" /* 4958 */;

let items1;
let module_4958;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4958.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4958.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4958.bool, spellCheck: module_4958.bool, autoFocus: module_4958.bool, allowFontScaling: module_4958.bool, maxFontSizeMultiplier: module_4958.number, editable: module_4958.bool, keyboardType: module_4958.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4958.oneOf(["default", "light", "dark"]), returnKeyType: module_4958.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4958.string, maxLength: module_4958.number, numberOfLines: module_4958.number, disableFullscreenUI: module_4958.bool, enablesReturnKeyAutomatically: module_4958.bool, multiline: module_4958.bool, textBreakStrategy: module_4958.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4958.func, onFocus: module_4958.func, onChange: module_4958.func, onChangeText: module_4958.func, onContentSizeChange: module_4958.func, onTextInput: module_4958.func, onEndEditing: module_4958.func, onSelectionChange: module_4958.func, onSubmitEditing: module_4958.func, onKeyPress: module_4958.func, onLayout: module_4958.func, onScroll: module_4958.func, placeholder: module_4958.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4958.bool, secureTextEntry: module_4958.bool, selectionColor: normalizeColor, selection: module_4958.shape(obj2), value: module_4958.string, defaultValue: module_4958.string, clearButtonMode: module_4958.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4958.bool, selectTextOnFocus: module_4958.bool, blurOnSubmit: module_4958.bool, style: _mod8766.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4958.string, inlineImagePadding: module_4958.number, rejectResponderTermination: module_4958.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4958.bool, contextMenuHidden: module_4958.bool, inputAccessoryViewID: module_4958.string, textContentType: module_4958.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4958.bool };
const module_8755 = Object.assign(_mod8755);
module_4958 = module_4958_mod;
obj2 = { start: module_4958.number.isRequired, end: module_4958.number };
module_4958 = module_4958_mod;
oneOfType = module_4958.oneOfType;
module_4958 = module_4958_mod;
items1 = [module_4958.oneOf(items), ];
module_4958 = module_4958_mod;
const arrayOf = module_4958.arrayOf;
module_4958 = module_4958_mod;
items1[1] = arrayOf(module_4958.oneOf(items));
module_4958 = module_4958_mod;

export default obj;
