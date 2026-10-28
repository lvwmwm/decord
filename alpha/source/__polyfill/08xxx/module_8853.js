// Module ID: 8853
// Function ID: 8854
// Dependencies: [8843, 5043, 8839, 8854]

// Module 8853
import normalizeColor from "normalizeColor" /* 8839 */;
import _mod8843 from "module_8843" /* 8843 */;
import _mod8854 from "module_8854" /* 8854 */;
import "module_5043";
import module_5043_mod from "module_5043" /* 5043 */;

let items1;
let module_5043;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5043.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5043.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5043.bool, spellCheck: module_5043.bool, autoFocus: module_5043.bool, allowFontScaling: module_5043.bool, maxFontSizeMultiplier: module_5043.number, editable: module_5043.bool, keyboardType: module_5043.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5043.oneOf(["default", "light", "dark"]), returnKeyType: module_5043.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5043.string, maxLength: module_5043.number, numberOfLines: module_5043.number, disableFullscreenUI: module_5043.bool, enablesReturnKeyAutomatically: module_5043.bool, multiline: module_5043.bool, textBreakStrategy: module_5043.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5043.func, onFocus: module_5043.func, onChange: module_5043.func, onChangeText: module_5043.func, onContentSizeChange: module_5043.func, onTextInput: module_5043.func, onEndEditing: module_5043.func, onSelectionChange: module_5043.func, onSubmitEditing: module_5043.func, onKeyPress: module_5043.func, onLayout: module_5043.func, onScroll: module_5043.func, placeholder: module_5043.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5043.bool, secureTextEntry: module_5043.bool, selectionColor: normalizeColor, selection: module_5043.shape(obj2), value: module_5043.string, defaultValue: module_5043.string, clearButtonMode: module_5043.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5043.bool, selectTextOnFocus: module_5043.bool, blurOnSubmit: module_5043.bool, style: _mod8854.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5043.string, inlineImagePadding: module_5043.number, rejectResponderTermination: module_5043.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5043.bool, contextMenuHidden: module_5043.bool, inputAccessoryViewID: module_5043.string, textContentType: module_5043.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5043.bool };
const module_8843 = Object.assign(_mod8843);
module_5043 = module_5043_mod;
obj2 = { start: module_5043.number.isRequired, end: module_5043.number };
module_5043 = module_5043_mod;
oneOfType = module_5043.oneOfType;
module_5043 = module_5043_mod;
items1 = [module_5043.oneOf(items), ];
module_5043 = module_5043_mod;
const arrayOf = module_5043.arrayOf;
module_5043 = module_5043_mod;
items1[1] = arrayOf(module_5043.oneOf(items));
module_5043 = module_5043_mod;

export default obj;
