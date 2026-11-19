// Module ID: 9160
// Function ID: 9161
// Dependencies: [9150, 4833, 9146, 9161]

// Module 9160
import normalizeColor from "normalizeColor" /* 9146 */;
import _mod9150 from "module_9150" /* 9150 */;
import _mod9161 from "module_9161" /* 9161 */;
import "module_4833";
import module_4833_mod from "module_4833" /* 4833 */;

let items1;
let module_4833;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4833.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4833.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4833.bool, spellCheck: module_4833.bool, autoFocus: module_4833.bool, allowFontScaling: module_4833.bool, maxFontSizeMultiplier: module_4833.number, editable: module_4833.bool, keyboardType: module_4833.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4833.oneOf(["default", "light", "dark"]), returnKeyType: module_4833.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4833.string, maxLength: module_4833.number, numberOfLines: module_4833.number, disableFullscreenUI: module_4833.bool, enablesReturnKeyAutomatically: module_4833.bool, multiline: module_4833.bool, textBreakStrategy: module_4833.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4833.func, onFocus: module_4833.func, onChange: module_4833.func, onChangeText: module_4833.func, onContentSizeChange: module_4833.func, onTextInput: module_4833.func, onEndEditing: module_4833.func, onSelectionChange: module_4833.func, onSubmitEditing: module_4833.func, onKeyPress: module_4833.func, onLayout: module_4833.func, onScroll: module_4833.func, placeholder: module_4833.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4833.bool, secureTextEntry: module_4833.bool, selectionColor: normalizeColor, selection: module_4833.shape(obj2), value: module_4833.string, defaultValue: module_4833.string, clearButtonMode: module_4833.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4833.bool, selectTextOnFocus: module_4833.bool, blurOnSubmit: module_4833.bool, style: _mod9161.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4833.string, inlineImagePadding: module_4833.number, rejectResponderTermination: module_4833.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4833.bool, contextMenuHidden: module_4833.bool, inputAccessoryViewID: module_4833.string, textContentType: module_4833.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4833.bool };
const module_9150 = Object.assign(_mod9150);
module_4833 = module_4833_mod;
obj2 = { start: module_4833.number.isRequired, end: module_4833.number };
module_4833 = module_4833_mod;
oneOfType = module_4833.oneOfType;
module_4833 = module_4833_mod;
items1 = [module_4833.oneOf(items), ];
module_4833 = module_4833_mod;
const arrayOf = module_4833.arrayOf;
module_4833 = module_4833_mod;
items1[1] = arrayOf(module_4833.oneOf(items));
module_4833 = module_4833_mod;

export default obj;
