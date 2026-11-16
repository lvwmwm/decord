// Module ID: 9756
// Function ID: 9757
// Dependencies: [9746, 5347, 9742, 9757]

// Module 9756
import normalizeColor from "normalizeColor" /* 9742 */;
import _mod9746 from "module_9746" /* 9746 */;
import _mod9757 from "module_9757" /* 9757 */;
import "module_5347";
import module_5347_mod from "module_5347" /* 5347 */;

let items1;
let module_5347;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = { autoCapitalize: module_5347.oneOf(["none", "sentences", "words", "characters"]), autoCompleteType: module_5347.oneOf(["cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-number", "email", "name", "password", "postal-code", "street-address", "tel", "username", "off"]), autoCorrect: module_5347.bool, spellCheck: module_5347.bool, autoFocus: module_5347.bool, allowFontScaling: module_5347.bool, maxFontSizeMultiplier: module_5347.number, editable: module_5347.bool, keyboardType: module_5347.oneOf(["default", "email-address", "numeric", "phone-pad", "number-pad", "ascii-capable", "numbers-and-punctuation", "url", "name-phone-pad", "decimal-pad", "twitter", "web-search", "ascii-capable-number-pad", "visible-password"]), keyboardAppearance: module_5347.oneOf(["default", "light", "dark"]), returnKeyType: module_5347.oneOf(["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"]), returnKeyLabel: module_5347.string, maxLength: module_5347.number, numberOfLines: module_5347.number, disableFullscreenUI: module_5347.bool, enablesReturnKeyAutomatically: module_5347.bool, multiline: module_5347.bool, textBreakStrategy: module_5347.oneOf(["simple", "highQuality", "balanced"]), onBlur: module_5347.func, onFocus: module_5347.func, onChange: module_5347.func, onChangeText: module_5347.func, onContentSizeChange: module_5347.func, onTextInput: module_5347.func, onEndEditing: module_5347.func, onSelectionChange: module_5347.func, onSubmitEditing: module_5347.func, onKeyPress: module_5347.func, onLayout: module_5347.func, onScroll: module_5347.func, placeholder: module_5347.string, placeholderTextColor: normalizeColor, scrollEnabled: module_5347.bool, secureTextEntry: module_5347.bool, selectionColor: normalizeColor, selection: module_5347.shape(obj2), value: module_5347.string, defaultValue: module_5347.string, clearButtonMode: module_5347.oneOf(["never", "while-editing", "unless-editing", "always"]), clearTextOnFocus: module_5347.bool, selectTextOnFocus: module_5347.bool, blurOnSubmit: module_5347.bool, style: _mod9757.style, underlineColorAndroid: normalizeColor, inlineImageLeft: module_5347.string, inlineImagePadding: module_5347.number, rejectResponderTermination: module_5347.bool, dataDetectorTypes: oneOfType(items1), caretHidden: module_5347.bool, contextMenuHidden: module_5347.bool, inputAccessoryViewID: module_5347.string, textContentType: module_5347.oneOf(["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password", "newPassword", "oneTimeCode"]), showSoftInputOnFocus: module_5347.bool };
const module_9746 = Object.assign(_mod9746);
module_5347 = module_5347_mod;
obj2 = { start: module_5347.number.isRequired, end: module_5347.number };
module_5347 = module_5347_mod;
oneOfType = module_5347.oneOfType;
module_5347 = module_5347_mod;
items1 = [module_5347.oneOf(items), ];
module_5347 = module_5347_mod;
const arrayOf = module_5347.arrayOf;
module_5347 = module_5347_mod;
items1[1] = arrayOf(module_5347.oneOf(items));
module_5347 = module_5347_mod;

export default obj;
