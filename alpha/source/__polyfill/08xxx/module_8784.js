// Module ID: 8784
// Function ID: 8785
// Dependencies: [8774, 5003, 8770, 8785]

// Module 8784
import normalizeColor from "normalizeColor" /* 8770 */;
import _mod8774 from "module_8774" /* 8774 */;
import _mod8785 from "module_8785" /* 8785 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let items1;
let module_5003;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5003.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5003.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5003.bool, spellCheck: module_5003.bool, autoFocus: module_5003.bool, allowFontScaling: module_5003.bool, maxFontSizeMultiplier: module_5003.number, editable: module_5003.bool, keyboardType: module_5003.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5003.oneOf(["default", "light", "dark"]), returnKeyType: module_5003.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5003.string, maxLength: module_5003.number, numberOfLines: module_5003.number, disableFullscreenUI: module_5003.bool, enablesReturnKeyAutomatically: module_5003.bool, multiline: module_5003.bool, textBreakStrategy: module_5003.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5003.func, onFocus: module_5003.func, onChange: module_5003.func, onChangeText: module_5003.func, onContentSizeChange: module_5003.func, onTextInput: module_5003.func, onEndEditing: module_5003.func, onSelectionChange: module_5003.func, onSubmitEditing: module_5003.func, onKeyPress: module_5003.func, onLayout: module_5003.func, onScroll: module_5003.func, placeholder: module_5003.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5003.bool, secureTextEntry: module_5003.bool, selectionColor: normalizeColor, selection: module_5003.shape(obj2), value: module_5003.string, defaultValue: module_5003.string, clearButtonMode: module_5003.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5003.bool, selectTextOnFocus: module_5003.bool, blurOnSubmit: module_5003.bool, style: _mod8785.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5003.string, inlineImagePadding: module_5003.number, rejectResponderTermination: module_5003.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5003.bool, contextMenuHidden: module_5003.bool, inputAccessoryViewID: module_5003.string, textContentType: module_5003.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5003.bool };
const module_8774 = Object.assign(_mod8774);
module_5003 = module_5003_mod;
obj2 = { start: module_5003.number.isRequired, end: module_5003.number };
module_5003 = module_5003_mod;
oneOfType = module_5003.oneOfType;
module_5003 = module_5003_mod;
items1 = [module_5003.oneOf(items), ];
module_5003 = module_5003_mod;
const arrayOf = module_5003.arrayOf;
module_5003 = module_5003_mod;
items1[1] = arrayOf(module_5003.oneOf(items));
module_5003 = module_5003_mod;

export default obj;
