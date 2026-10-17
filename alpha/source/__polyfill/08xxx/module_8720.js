// Module ID: 8720
// Function ID: 8721
// Dependencies: [8710, 5042, 8706, 8721]

// Module 8720
import normalizeColor from "normalizeColor" /* 8706 */;
import _mod8710 from "module_8710" /* 8710 */;
import _mod8721 from "module_8721" /* 8721 */;
import "module_5042";
import module_5042_mod from "module_5042" /* 5042 */;

let items1;
let module_5042;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5042.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5042.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5042.bool, spellCheck: module_5042.bool, autoFocus: module_5042.bool, allowFontScaling: module_5042.bool, maxFontSizeMultiplier: module_5042.number, editable: module_5042.bool, keyboardType: module_5042.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5042.oneOf(["default", "light", "dark"]), returnKeyType: module_5042.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5042.string, maxLength: module_5042.number, numberOfLines: module_5042.number, disableFullscreenUI: module_5042.bool, enablesReturnKeyAutomatically: module_5042.bool, multiline: module_5042.bool, textBreakStrategy: module_5042.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5042.func, onFocus: module_5042.func, onChange: module_5042.func, onChangeText: module_5042.func, onContentSizeChange: module_5042.func, onTextInput: module_5042.func, onEndEditing: module_5042.func, onSelectionChange: module_5042.func, onSubmitEditing: module_5042.func, onKeyPress: module_5042.func, onLayout: module_5042.func, onScroll: module_5042.func, placeholder: module_5042.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5042.bool, secureTextEntry: module_5042.bool, selectionColor: normalizeColor, selection: module_5042.shape(obj2), value: module_5042.string, defaultValue: module_5042.string, clearButtonMode: module_5042.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5042.bool, selectTextOnFocus: module_5042.bool, blurOnSubmit: module_5042.bool, style: _mod8721.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5042.string, inlineImagePadding: module_5042.number, rejectResponderTermination: module_5042.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5042.bool, contextMenuHidden: module_5042.bool, inputAccessoryViewID: module_5042.string, textContentType: module_5042.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5042.bool };
const module_8710 = Object.assign(_mod8710);
module_5042 = module_5042_mod;
obj2 = { start: module_5042.number.isRequired, end: module_5042.number };
module_5042 = module_5042_mod;
oneOfType = module_5042.oneOfType;
module_5042 = module_5042_mod;
items1 = [module_5042.oneOf(items), ];
module_5042 = module_5042_mod;
const arrayOf = module_5042.arrayOf;
module_5042 = module_5042_mod;
items1[1] = arrayOf(module_5042.oneOf(items));
module_5042 = module_5042_mod;

export default obj;
