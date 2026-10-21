// Module ID: 8775
// Function ID: 8776
// Dependencies: [8765, 5000, 8761, 8776]

// Module 8775
import normalizeColor from "normalizeColor" /* 8761 */;
import _mod8765 from "module_8765" /* 8765 */;
import _mod8776 from "module_8776" /* 8776 */;
import "module_5000";
import module_5000_mod from "module_5000" /* 5000 */;

let items1;
let module_5000;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5000.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5000.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5000.bool, spellCheck: module_5000.bool, autoFocus: module_5000.bool, allowFontScaling: module_5000.bool, maxFontSizeMultiplier: module_5000.number, editable: module_5000.bool, keyboardType: module_5000.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5000.oneOf(["default", "light", "dark"]), returnKeyType: module_5000.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5000.string, maxLength: module_5000.number, numberOfLines: module_5000.number, disableFullscreenUI: module_5000.bool, enablesReturnKeyAutomatically: module_5000.bool, multiline: module_5000.bool, textBreakStrategy: module_5000.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5000.func, onFocus: module_5000.func, onChange: module_5000.func, onChangeText: module_5000.func, onContentSizeChange: module_5000.func, onTextInput: module_5000.func, onEndEditing: module_5000.func, onSelectionChange: module_5000.func, onSubmitEditing: module_5000.func, onKeyPress: module_5000.func, onLayout: module_5000.func, onScroll: module_5000.func, placeholder: module_5000.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5000.bool, secureTextEntry: module_5000.bool, selectionColor: normalizeColor, selection: module_5000.shape(obj2), value: module_5000.string, defaultValue: module_5000.string, clearButtonMode: module_5000.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5000.bool, selectTextOnFocus: module_5000.bool, blurOnSubmit: module_5000.bool, style: _mod8776.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5000.string, inlineImagePadding: module_5000.number, rejectResponderTermination: module_5000.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5000.bool, contextMenuHidden: module_5000.bool, inputAccessoryViewID: module_5000.string, textContentType: module_5000.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5000.bool };
const module_8765 = Object.assign(_mod8765);
module_5000 = module_5000_mod;
obj2 = { start: module_5000.number.isRequired, end: module_5000.number };
module_5000 = module_5000_mod;
oneOfType = module_5000.oneOfType;
module_5000 = module_5000_mod;
items1 = [module_5000.oneOf(items), ];
module_5000 = module_5000_mod;
const arrayOf = module_5000.arrayOf;
module_5000 = module_5000_mod;
items1[1] = arrayOf(module_5000.oneOf(items));
module_5000 = module_5000_mod;

export default obj;
