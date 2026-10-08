// Module ID: 8422
// Function ID: 8423
// Dependencies: [8412, 4907, 8408, 8423]

// Module 8422
import normalizeColor from "normalizeColor" /* 8408 */;
import _mod8412 from "module_8412" /* 8412 */;
import _mod8423 from "module_8423" /* 8423 */;
import "module_4907";
import module_4907_mod from "module_4907" /* 4907 */;

let items1;
let module_4907;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_4907.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_4907.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_4907.bool, spellCheck: module_4907.bool, autoFocus: module_4907.bool, allowFontScaling: module_4907.bool, maxFontSizeMultiplier: module_4907.number, editable: module_4907.bool, keyboardType: module_4907.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_4907.oneOf(["default", "light", "dark"]), returnKeyType: module_4907.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_4907.string, maxLength: module_4907.number, numberOfLines: module_4907.number, disableFullscreenUI: module_4907.bool, enablesReturnKeyAutomatically: module_4907.bool, multiline: module_4907.bool, textBreakStrategy: module_4907.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_4907.func, onFocus: module_4907.func, onChange: module_4907.func, onChangeText: module_4907.func, onContentSizeChange: module_4907.func, onTextInput: module_4907.func, onEndEditing: module_4907.func, onSelectionChange: module_4907.func, onSubmitEditing: module_4907.func, onKeyPress: module_4907.func, onLayout: module_4907.func, onScroll: module_4907.func, placeholder: module_4907.string, placeholderTextColor: normalizeColor, scrollEnabled: module_4907.bool, secureTextEntry: module_4907.bool, selectionColor: normalizeColor, selection: module_4907.shape(obj2), value: module_4907.string, defaultValue: module_4907.string, clearButtonMode: module_4907.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_4907.bool, selectTextOnFocus: module_4907.bool, blurOnSubmit: module_4907.bool, style: _mod8423.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_4907.string, inlineImagePadding: module_4907.number, rejectResponderTermination: module_4907.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_4907.bool, contextMenuHidden: module_4907.bool, inputAccessoryViewID: module_4907.string, textContentType: module_4907.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_4907.bool };
const module_8412 = Object.assign(_mod8412);
module_4907 = module_4907_mod;
obj2 = { start: module_4907.number.isRequired, end: module_4907.number };
module_4907 = module_4907_mod;
oneOfType = module_4907.oneOfType;
module_4907 = module_4907_mod;
items1 = [module_4907.oneOf(items), ];
module_4907 = module_4907_mod;
const arrayOf = module_4907.arrayOf;
module_4907 = module_4907_mod;
items1[1] = arrayOf(module_4907.oneOf(items));
module_4907 = module_4907_mod;

export default obj;
