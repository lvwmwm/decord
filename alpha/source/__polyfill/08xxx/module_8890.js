// Module ID: 8890
// Function ID: 8891
// Dependencies: [8880, 5048, 8876, 8891]

// Module 8890
import normalizeColor from "normalizeColor" /* 8876 */;
import _mod8880 from "module_8880" /* 8880 */;
import _mod8891 from "module_8891" /* 8891 */;
import "module_5048";
import module_5048_mod from "module_5048" /* 5048 */;

let items1;
let module_5048;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5048.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5048.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5048.bool, spellCheck: module_5048.bool, autoFocus: module_5048.bool, allowFontScaling: module_5048.bool, maxFontSizeMultiplier: module_5048.number, editable: module_5048.bool, keyboardType: module_5048.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5048.oneOf(["default", "light", "dark"]), returnKeyType: module_5048.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5048.string, maxLength: module_5048.number, numberOfLines: module_5048.number, disableFullscreenUI: module_5048.bool, enablesReturnKeyAutomatically: module_5048.bool, multiline: module_5048.bool, textBreakStrategy: module_5048.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5048.func, onFocus: module_5048.func, onChange: module_5048.func, onChangeText: module_5048.func, onContentSizeChange: module_5048.func, onTextInput: module_5048.func, onEndEditing: module_5048.func, onSelectionChange: module_5048.func, onSubmitEditing: module_5048.func, onKeyPress: module_5048.func, onLayout: module_5048.func, onScroll: module_5048.func, placeholder: module_5048.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5048.bool, secureTextEntry: module_5048.bool, selectionColor: normalizeColor, selection: module_5048.shape(obj2), value: module_5048.string, defaultValue: module_5048.string, clearButtonMode: module_5048.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5048.bool, selectTextOnFocus: module_5048.bool, blurOnSubmit: module_5048.bool, style: _mod8891.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5048.string, inlineImagePadding: module_5048.number, rejectResponderTermination: module_5048.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5048.bool, contextMenuHidden: module_5048.bool, inputAccessoryViewID: module_5048.string, textContentType: module_5048.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5048.bool };
const module_8880 = Object.assign(_mod8880);
module_5048 = module_5048_mod;
obj2 = { start: module_5048.number.isRequired, end: module_5048.number };
module_5048 = module_5048_mod;
oneOfType = module_5048.oneOfType;
module_5048 = module_5048_mod;
items1 = [module_5048.oneOf(items), ];
module_5048 = module_5048_mod;
const arrayOf = module_5048.arrayOf;
module_5048 = module_5048_mod;
items1[1] = arrayOf(module_5048.oneOf(items));
module_5048 = module_5048_mod;

export default obj;
