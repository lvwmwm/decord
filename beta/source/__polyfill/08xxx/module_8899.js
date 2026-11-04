// Module ID: 8899
// Function ID: 8900
// Dependencies: [8889, 5053, 8885, 8900]

// Module 8899
import normalizeColor from "normalizeColor" /* 8885 */;
import _mod8889 from "module_8889" /* 8889 */;
import _mod8900 from "module_8900" /* 8900 */;
import "module_5053";
import module_5053_mod from "module_5053" /* 5053 */;

let items1;
let module_5053;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5053.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5053.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5053.bool, spellCheck: module_5053.bool, autoFocus: module_5053.bool, allowFontScaling: module_5053.bool, maxFontSizeMultiplier: module_5053.number, editable: module_5053.bool, keyboardType: module_5053.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5053.oneOf(["default", "light", "dark"]), returnKeyType: module_5053.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5053.string, maxLength: module_5053.number, numberOfLines: module_5053.number, disableFullscreenUI: module_5053.bool, enablesReturnKeyAutomatically: module_5053.bool, multiline: module_5053.bool, textBreakStrategy: module_5053.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5053.func, onFocus: module_5053.func, onChange: module_5053.func, onChangeText: module_5053.func, onContentSizeChange: module_5053.func, onTextInput: module_5053.func, onEndEditing: module_5053.func, onSelectionChange: module_5053.func, onSubmitEditing: module_5053.func, onKeyPress: module_5053.func, onLayout: module_5053.func, onScroll: module_5053.func, placeholder: module_5053.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5053.bool, secureTextEntry: module_5053.bool, selectionColor: normalizeColor, selection: module_5053.shape(obj2), value: module_5053.string, defaultValue: module_5053.string, clearButtonMode: module_5053.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5053.bool, selectTextOnFocus: module_5053.bool, blurOnSubmit: module_5053.bool, style: _mod8900.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5053.string, inlineImagePadding: module_5053.number, rejectResponderTermination: module_5053.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5053.bool, contextMenuHidden: module_5053.bool, inputAccessoryViewID: module_5053.string, textContentType: module_5053.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5053.bool };
const module_8889 = Object.assign(_mod8889);
module_5053 = module_5053_mod;
obj2 = { start: module_5053.number.isRequired, end: module_5053.number };
module_5053 = module_5053_mod;
oneOfType = module_5053.oneOfType;
module_5053 = module_5053_mod;
items1 = [module_5053.oneOf(items), ];
module_5053 = module_5053_mod;
const arrayOf = module_5053.arrayOf;
module_5053 = module_5053_mod;
items1[1] = arrayOf(module_5053.oneOf(items));
module_5053 = module_5053_mod;

export default obj;
