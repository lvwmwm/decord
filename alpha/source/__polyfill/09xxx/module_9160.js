// Module ID: 9160
// Function ID: 9161
// Dependencies: [9150, 4835, 9146, 9161]

// Module 9160
import normalizeColor from "normalizeColor" /* 9146 */;
import _mod9150 from "module_9150" /* 9150 */;
import _mod9161 from "module_9161" /* 9161 */;
import "module_4835";
import module_4835_mod from "module_4835" /* 4835 */;

let items1;
let module_4835;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4835.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4835.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4835.bool, spellCheck: module_4835.bool, autoFocus: module_4835.bool, allowFontScaling: module_4835.bool, maxFontSizeMultiplier: module_4835.number, editable: module_4835.bool, keyboardType: module_4835.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4835.oneOf(["default", "light", "dark"]), returnKeyType: module_4835.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4835.string, maxLength: module_4835.number, numberOfLines: module_4835.number, disableFullscreenUI: module_4835.bool, enablesReturnKeyAutomatically: module_4835.bool, multiline: module_4835.bool, textBreakStrategy: module_4835.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4835.func, onFocus: module_4835.func, onChange: module_4835.func, onChangeText: module_4835.func, onContentSizeChange: module_4835.func, onTextInput: module_4835.func, onEndEditing: module_4835.func, onSelectionChange: module_4835.func, onSubmitEditing: module_4835.func, onKeyPress: module_4835.func, onLayout: module_4835.func, onScroll: module_4835.func, placeholder: module_4835.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4835.bool, secureTextEntry: module_4835.bool, selectionColor: normalizeColor, selection: module_4835.shape(obj2), value: module_4835.string, defaultValue: module_4835.string, clearButtonMode: module_4835.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4835.bool, selectTextOnFocus: module_4835.bool, blurOnSubmit: module_4835.bool, style: _mod9161.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4835.string, inlineImagePadding: module_4835.number, rejectResponderTermination: module_4835.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4835.bool, contextMenuHidden: module_4835.bool, inputAccessoryViewID: module_4835.string, textContentType: module_4835.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4835.bool };
const module_9150 = Object.assign(_mod9150);
module_4835 = module_4835_mod;
obj2 = { start: module_4835.number.isRequired, end: module_4835.number };
module_4835 = module_4835_mod;
oneOfType = module_4835.oneOfType;
module_4835 = module_4835_mod;
items1 = [module_4835.oneOf(items), ];
module_4835 = module_4835_mod;
const arrayOf = module_4835.arrayOf;
module_4835 = module_4835_mod;
items1[1] = arrayOf(module_4835.oneOf(items));
module_4835 = module_4835_mod;

export default obj;
