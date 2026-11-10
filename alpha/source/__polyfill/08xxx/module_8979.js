// Module ID: 8979
// Function ID: 8980
// Dependencies: [8969, 5181, 8965, 8980]

// Module 8979
import normalizeColor from "normalizeColor" /* 8965 */;
import _mod8969 from "module_8969" /* 8969 */;
import _mod8980 from "module_8980" /* 8980 */;
import "module_5181";
import module_5181_mod from "module_5181" /* 5181 */;

let items1;
let module_5181;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5181.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5181.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5181.bool, spellCheck: module_5181.bool, autoFocus: module_5181.bool, allowFontScaling: module_5181.bool, maxFontSizeMultiplier: module_5181.number, editable: module_5181.bool, keyboardType: module_5181.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5181.oneOf(["default", "light", "dark"]), returnKeyType: module_5181.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5181.string, maxLength: module_5181.number, numberOfLines: module_5181.number, disableFullscreenUI: module_5181.bool, enablesReturnKeyAutomatically: module_5181.bool, multiline: module_5181.bool, textBreakStrategy: module_5181.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5181.func, onFocus: module_5181.func, onChange: module_5181.func, onChangeText: module_5181.func, onContentSizeChange: module_5181.func, onTextInput: module_5181.func, onEndEditing: module_5181.func, onSelectionChange: module_5181.func, onSubmitEditing: module_5181.func, onKeyPress: module_5181.func, onLayout: module_5181.func, onScroll: module_5181.func, placeholder: module_5181.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5181.bool, secureTextEntry: module_5181.bool, selectionColor: normalizeColor, selection: module_5181.shape(obj2), value: module_5181.string, defaultValue: module_5181.string, clearButtonMode: module_5181.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5181.bool, selectTextOnFocus: module_5181.bool, blurOnSubmit: module_5181.bool, style: _mod8980.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5181.string, inlineImagePadding: module_5181.number, rejectResponderTermination: module_5181.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5181.bool, contextMenuHidden: module_5181.bool, inputAccessoryViewID: module_5181.string, textContentType: module_5181.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5181.bool };
const module_8969 = Object.assign(_mod8969);
module_5181 = module_5181_mod;
obj2 = { start: module_5181.number.isRequired, end: module_5181.number };
module_5181 = module_5181_mod;
oneOfType = module_5181.oneOfType;
module_5181 = module_5181_mod;
items1 = [module_5181.oneOf(items), ];
module_5181 = module_5181_mod;
const arrayOf = module_5181.arrayOf;
module_5181 = module_5181_mod;
items1[1] = arrayOf(module_5181.oneOf(items));
module_5181 = module_5181_mod;

export default obj;
