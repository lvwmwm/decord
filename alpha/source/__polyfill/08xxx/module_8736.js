// Module ID: 8736
// Function ID: 8737
// Dependencies: [8726, 4979, 8722, 8737]

// Module 8736
import normalizeColor from "normalizeColor" /* 8722 */;
import _mod8726 from "module_8726" /* 8726 */;
import _mod8737 from "module_8737" /* 8737 */;
import "module_4979";
import module_4979_mod from "module_4979" /* 4979 */;

let items1;
let module_4979;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4979.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4979.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4979.bool, spellCheck: module_4979.bool, autoFocus: module_4979.bool, allowFontScaling: module_4979.bool, maxFontSizeMultiplier: module_4979.number, editable: module_4979.bool, keyboardType: module_4979.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4979.oneOf(["default", "light", "dark"]), returnKeyType: module_4979.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4979.string, maxLength: module_4979.number, numberOfLines: module_4979.number, disableFullscreenUI: module_4979.bool, enablesReturnKeyAutomatically: module_4979.bool, multiline: module_4979.bool, textBreakStrategy: module_4979.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4979.func, onFocus: module_4979.func, onChange: module_4979.func, onChangeText: module_4979.func, onContentSizeChange: module_4979.func, onTextInput: module_4979.func, onEndEditing: module_4979.func, onSelectionChange: module_4979.func, onSubmitEditing: module_4979.func, onKeyPress: module_4979.func, onLayout: module_4979.func, onScroll: module_4979.func, placeholder: module_4979.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4979.bool, secureTextEntry: module_4979.bool, selectionColor: normalizeColor, selection: module_4979.shape(obj2), value: module_4979.string, defaultValue: module_4979.string, clearButtonMode: module_4979.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4979.bool, selectTextOnFocus: module_4979.bool, blurOnSubmit: module_4979.bool, style: _mod8737.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4979.string, inlineImagePadding: module_4979.number, rejectResponderTermination: module_4979.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4979.bool, contextMenuHidden: module_4979.bool, inputAccessoryViewID: module_4979.string, textContentType: module_4979.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4979.bool };
const module_8726 = Object.assign(_mod8726);
module_4979 = module_4979_mod;
obj2 = { start: module_4979.number.isRequired, end: module_4979.number };
module_4979 = module_4979_mod;
oneOfType = module_4979.oneOfType;
module_4979 = module_4979_mod;
items1 = [module_4979.oneOf(items), ];
module_4979 = module_4979_mod;
const arrayOf = module_4979.arrayOf;
module_4979 = module_4979_mod;
items1[1] = arrayOf(module_4979.oneOf(items));
module_4979 = module_4979_mod;

export default obj;
