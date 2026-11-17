// Module ID: 9769
// Function ID: 9770
// Dependencies: [9759, 5351, 9755, 9770]

// Module 9769
import normalizeColor from "normalizeColor" /* 9755 */;
import _mod9759 from "module_9759" /* 9759 */;
import _mod9770 from "module_9770" /* 9770 */;
import "module_5351";
import module_5351_mod from "module_5351" /* 5351 */;

let items1;
let module_5351;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5351.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5351.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5351.bool, spellCheck: module_5351.bool, autoFocus: module_5351.bool, allowFontScaling: module_5351.bool, maxFontSizeMultiplier: module_5351.number, editable: module_5351.bool, keyboardType: module_5351.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5351.oneOf(["default", "light", "dark"]), returnKeyType: module_5351.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5351.string, maxLength: module_5351.number, numberOfLines: module_5351.number, disableFullscreenUI: module_5351.bool, enablesReturnKeyAutomatically: module_5351.bool, multiline: module_5351.bool, textBreakStrategy: module_5351.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5351.func, onFocus: module_5351.func, onChange: module_5351.func, onChangeText: module_5351.func, onContentSizeChange: module_5351.func, onTextInput: module_5351.func, onEndEditing: module_5351.func, onSelectionChange: module_5351.func, onSubmitEditing: module_5351.func, onKeyPress: module_5351.func, onLayout: module_5351.func, onScroll: module_5351.func, placeholder: module_5351.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5351.bool, secureTextEntry: module_5351.bool, selectionColor: normalizeColor, selection: module_5351.shape(obj2), value: module_5351.string, defaultValue: module_5351.string, clearButtonMode: module_5351.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5351.bool, selectTextOnFocus: module_5351.bool, blurOnSubmit: module_5351.bool, style: _mod9770.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5351.string, inlineImagePadding: module_5351.number, rejectResponderTermination: module_5351.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5351.bool, contextMenuHidden: module_5351.bool, inputAccessoryViewID: module_5351.string, textContentType: module_5351.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5351.bool };
const module_9759 = Object.assign(_mod9759);
module_5351 = module_5351_mod;
obj2 = { start: module_5351.number.isRequired, end: module_5351.number };
module_5351 = module_5351_mod;
oneOfType = module_5351.oneOfType;
module_5351 = module_5351_mod;
items1 = [module_5351.oneOf(items), ];
module_5351 = module_5351_mod;
const arrayOf = module_5351.arrayOf;
module_5351 = module_5351_mod;
items1[1] = arrayOf(module_5351.oneOf(items));
module_5351 = module_5351_mod;

export default obj;
